"use client";

import { useState } from "react";
import { type Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";
import { track } from "@/lib/analytics";
import { waLink, enquiryWaMessage } from "@/lib/whatsapp";

const events = [
  "Wedding",
  "Destination wedding",
  "Sawamani / Prashadi",
  "Corporate",
  "Birthday / Anniversary / Kitty",
  "High tea / Brunch",
  "Other",
];

export function LeadForm({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const d = t(locale);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [wa, setWa] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      eventType: String(fd.get("eventType") || ""),
      date: String(fd.get("date") || ""),
      guests: String(fd.get("guests") || ""),
      city: String(fd.get("city") || ""),
      website: String(fd.get("website") || ""),
      utm: {
        source: new URLSearchParams(window.location.search).get("utm_source") || undefined,
        medium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
        campaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
      },
    };
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not send");
      track("lead_submit", { event: payload.eventType || "unspecified" });
      setWa(
        json.whatsapp ||
          waLink(
            enquiryWaMessage({
              city: payload.city,
              event: payload.eventType,
              guests: payload.guests,
              date: payload.date,
              name: payload.name,
            }),
          ),
      );
      setStatus("ok");
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Please call us instead.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-gold/40 bg-ivory p-6">
        <p className="font-display text-2xl text-maroon">{d.success}</p>
        <p className="mt-2 text-sm">Continue on WhatsApp with a pre-filled note.</p>
        <a
          href={wa}
          target="_blank"
          rel="noopener"
          onClick={() => track("whatsapp_click", { place: "lead-success" })}
          className="mt-4 inline-block bg-maroon px-5 py-3 text-xs font-bold uppercase tracking-widest text-ivory no-underline"
        >
          {d.ctaWhatsapp}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3" aria-label="Catering enquiry">
      <p className="text-sm text-charcoal/80">{d.leadHint}</p>
      <label className="text-xs font-semibold uppercase tracking-widest text-maroon">
        Phone *
        <input
          required
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="10-digit mobile"
          className="mt-1 w-full border border-gold/35 bg-ivory px-3 py-3 text-sm"
        />
      </label>
      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="text-xs font-semibold uppercase tracking-widest">
          Name
          <input name="name" className="mt-1 w-full border border-gold/35 bg-ivory px-3 py-3 text-sm" />
        </label>
        <label className="text-xs font-semibold uppercase tracking-widest">
          City
          <input name="city" defaultValue="Jaipur" className="mt-1 w-full border border-gold/35 bg-ivory px-3 py-3 text-sm" />
        </label>
        <label className="text-xs font-semibold uppercase tracking-widest">
          Event type
          <select name="eventType" className="mt-1 w-full border border-gold/35 bg-ivory px-3 py-3 text-sm">
            {events.map((ev) => (
              <option key={ev}>{ev}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-widest">
          Date
          <input name="date" type="date" className="mt-1 w-full border border-gold/35 bg-ivory px-3 py-3 text-sm" />
        </label>
        <label className="text-xs font-semibold uppercase tracking-widest sm:col-span-2">
          Guest count
          <input name="guests" inputMode="numeric" className="mt-1 w-full border border-gold/35 bg-ivory px-3 py-3 text-sm" />
        </label>
      </div>
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <button
        disabled={status === "loading"}
        className="mt-2 bg-maroon py-3 text-xs font-bold uppercase tracking-[0.16em] text-ivory disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : d.ctaQuote}
      </button>
      {error && <p className="text-sm text-maroon">{error}</p>}
    </form>
  );
}
