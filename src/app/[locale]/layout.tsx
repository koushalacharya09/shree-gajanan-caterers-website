import { notFound } from "next/navigation";
import { locales, type Locale, site } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <>
      <div className="bg-maroon py-2 text-center text-[11px] tracking-wide text-ivory">
        {locale === "hi" ? site.taglineHi : site.tagline} · {site.phones[0].display}
      </div>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <StickyCta locale={locale} />
    </>
  );
}
