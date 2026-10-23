import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/lead-schema";
import { rateLimit } from "@/lib/rate-limit";
import { getSupabase } from "@/lib/supabase";
import { enquiryWaMessage, waLink } from "@/lib/whatsapp";
import { site } from "@/data/site";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(`lead:${ip}`).ok) {
    return NextResponse.json({ error: "Please wait before sending another enquiry." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid input" }, { status: 400 });
  }

  const data = parsed.data;
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const row = {
    name: data.name || null,
    phone: data.phone,
    event_type: data.eventType || null,
    event_date: data.date || null,
    guests: data.guests || null,
    city: data.city || "Jaipur",
    utm_source: data.utm?.source || null,
    utm_medium: data.utm?.medium || null,
    utm_campaign: data.utm?.campaign || null,
    created_at: new Date().toISOString(),
  };

  const supabase = getSupabase();
  if (supabase) {
    const { error } = await supabase.from("leads").insert(row);
    if (error) {
      console.error("supabase", error.message);
    }
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM || "leads@shreegajanancaterers.online",
        to: notify,
        subject: `New catering enquiry · ${row.phone}`,
        text: Object.entries(row)
          .map(([k, v]) => `${k}: ${v ?? ""}`)
          .join("\n"),
      });
    } catch (err) {
      console.error("resend", err);
    }
  }

  const whatsapp = waLink(
    enquiryWaMessage({
      city: row.city || "Jaipur",
      event: row.event_type || "catering",
      guests: row.guests || undefined,
      date: row.event_date || undefined,
      name: row.name || undefined,
    }),
  );

  return NextResponse.json({ ok: true, whatsapp, office: site.phones[0].display });
}
