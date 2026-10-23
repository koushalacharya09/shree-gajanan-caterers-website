import type { Metadata } from "next";
import { site, type Locale } from "@/data/site";
import { LeadForm } from "@/components/LeadForm";
import { BudgetCalculator } from "@/components/BudgetCalculator";

export const metadata: Metadata = {
  title: "Get a catering quote in Jaipur",
  description: "Share your phone, date and guest count. Shree Gajanan Caterers calls back within 2 hours.",
};

export default function EnquirePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return (
    <section className="mx-auto grid max-w-site gap-10 px-5 py-16 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-[clamp(2rem,4vw,3.4rem)]">Get a free quote</h1>
        <p className="mt-4 text-charcoal/75">We call back within 2 hours. Phone is the only required field.</p>
        <ul className="mt-6 space-y-2 text-sm">
          {site.phones.map((p) => (
            <li key={p.tel}>
              <a href={`tel:${p.tel}`}>{p.display}</a>
            </li>
          ))}
          <li>{site.address}</li>
        </ul>
        <div className="mt-10">
          <BudgetCalculator locale={locale} />
        </div>
      </div>
      <LeadForm locale={locale} />
    </section>
  );
}
