import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landings } from "@/data/landings";
import { site, type Locale } from "@/data/site";
import { LeadForm } from "@/components/LeadForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/gallery";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return siteLocales().flatMap((locale) => landings.map((l) => ({ locale, slug: l.slug })));
}

function siteLocales(): Locale[] {
  return ["en", "hi"];
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const page = landings.find((l) => l.slug === params.slug);
  if (!page) return {};
  const locale = params.locale;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `${site.domain}/${locale}/${page.slug}`,
      languages: {
        "en-IN": `${site.domain}/en/${page.slug}`,
        "hi-IN": `${site.domain}/hi/${page.slug}`,
      },
    },
    openGraph: { title: page.title, description: page.description, url: `${site.domain}/${locale}/${page.slug}` },
  };
}

export default function LandingPage({ params }: { params: { locale: string; slug: string } }) {
  const page = landings.find((l) => l.slug === params.slug);
  if (!page) notFound();
  const locale = params.locale as Locale;
  const cover = photos[Math.abs(page.slug.length) % photos.length];
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.domain}/${locale}` },
      { "@type": "ListItem", position: 2, name: page.h1, item: `${site.domain}/${locale}/${page.slug}` },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: locale === "hi" ? f.qHi : f.q,
      acceptedAnswer: { "@type": "Answer", text: locale === "hi" ? f.aHi : f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <JsonLd />
      <article className="mx-auto max-w-site px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-maroon">{page.kind}</p>
        <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)]">{locale === "hi" ? page.h1Hi : page.h1}</h1>
        {cover && <Photo photo={cover} className="mt-8 max-h-[480px] w-full object-cover" sizes="100vw" />}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">{locale === "hi" ? page.introHi : page.intro}</p>
        <div className="gold-rule mt-8 w-20" />
        {(locale === "hi" ? page.bodyHi : page.body).map((para) => (
          <p key={para.slice(0, 24)} className="mt-5 max-w-2xl leading-relaxed text-charcoal/80">
            {para}
          </p>
        ))}
        <div className="mt-12">
          <FaqAccordion locale={locale} items={page.faqs} />
        </div>
      </article>
      <PhotoMarquee />
      <section className="mx-auto max-w-xl px-5 py-16">
        <h2 className="mb-6 font-display text-3xl">Enquire</h2>
        <LeadForm locale={locale} />
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
