import Link from "next/link";
import type { Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";
import { site } from "@/data/site";

export function CtaBand({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <section className="bg-maroon px-5 py-12 text-center text-ivory">
      <p className="font-display text-3xl md:text-4xl">{d.leadTitle}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href={`/${locale}/enquire`} className="bg-gold px-6 py-3 text-xs font-bold uppercase tracking-widest text-charcoal no-underline">
          {d.ctaQuote}
        </Link>
        <a href={`tel:${site.phones[0].tel}`} className="border border-ivory/50 px-6 py-3 text-xs font-bold uppercase tracking-widest text-ivory no-underline">
          {site.phones[0].display}
        </a>
      </div>
    </section>
  );
}
