import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { AdminLogin } from "./ui";

async function login(formData: FormData) {
  "use server";
  const password = String(formData.get("password") || "");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/leads?error=1");
  }
  cookies().set("sgc_admin", password, { httpOnly: true, sameSite: "lax", secure: true, path: "/" });
  redirect("/admin/leads");
}

export default async function AdminLeads() {
  const ok = cookies().get("sgc_admin")?.value === process.env.ADMIN_PASSWORD;
  if (!ok || !process.env.ADMIN_PASSWORD) {
    return <AdminLogin login={login} />;
  }
  const supabase = getSupabase();
  const { data } = supabase
    ? await supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(200)
    : { data: [] as Record<string, string>[] };

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="font-display text-3xl">Leads</h1>
      <p className="mt-2 text-sm">Password-protected. Export CSV when Supabase is connected.</p>
      <a className="mt-4 inline-block text-sm" href="/api/leads/export">
        Export CSV
      </a>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr>
              {["created_at", "phone", "name", "city", "event_type", "guests"].map((h) => (
                <th key={h} className="border-b border-gold/40 py-2 pr-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(data || []).map((row, i) => (
              <tr key={i}>
                {["created_at", "phone", "name", "city", "event_type", "guests"].map((h) => (
                  <td key={h} className="border-b border-gold/20 py-2 pr-4">
                    {String((row as Record<string, unknown>)[h] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
