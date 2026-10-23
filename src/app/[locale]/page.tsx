import type { Metadata } from "next";
import Link from "next/link";
import { site, type Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { PhotoMarquee } from "@/components/PhotoMarquee";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { LeadForm } from "@/components/LeadForm";
import { BudgetCalculator } from "@/components/BudgetCalculator";
import { FaqAccordion } from "@/components/FaqAccordion";
import { RajasthanMap } from "@/components/RajasthanMap";
import { ParallaxBand } from "@/components/ParallaxBand";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { heroPhotos, photos } from "@/lib/gallery";
import { homeFaqs } from "@/data/home-faq";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  return {
    title: "Royal Veg Wedding Catering in Jaipur",
    description:
      "Shree Gajanan Caterers — pure vegetarian wedding, Sawamani and event catering in Jaipur and Rajasthan. Call +91 82096 79146.",
    alternates: {
      canonical: `${site.domain}/${locale}`,
      languages: { "en-IN": `${site.domain}/en`, "hi-IN": `${site.domain}/hi` },
    },
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const d = t(locale);
  const band = heroPhotos()[1] || photos[0];
  const sawamani = photos.find((p) => p.category === "food") || photos[2];
  const live = photos.find((p) => p.category === "live") || photos[3];

  return (
    <>
      <HeroSlideshow locale={locale} />
      <PhotoMarquee />

      <section className="mx-auto max-w-site px-5 py-20">
        <p className="font-devanagari text-gold">{d.legacyEyebrow}</p>
        <h2 className="mt-2 max-w-2xl font-display text-[clamp(2rem,4vw,3.2rem)]">{d.legacyTitle}</h2>
        <div className="gold-rule mt-6 w-24" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">{d.legacyBody}</p>
        <p className="mt-4 text-sm text-charcoal/70">
          {locale === "hi" ? "स्वामी: " : "Host: "}
          {site.owner} · {site.address}
        </p>
        <Link href={`/${locale}/about`} className="mt-6 inline-block text-sm font-semibold uppercase tracking-widest text-maroon">
          {d.nav.about}
        </Link>
      </section>

      <CtaBand locale={locale} />

      <section id="services" className="mx-auto max-w-site px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-maroon">Services</p>
        <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)]">Nine ways we cook for Jaipur.</h2>
        <div className="mt-10">
          <ServicesGrid locale={locale} />
        </div>
      </section>

      {band && <ParallaxBand photo={band} caption={locale === "hi" ? "सवामणी और लाइव काउंटर" : "Sawamani Prashadi & live counters"} />}

      <section className="mx-auto grid max-w-site gap-10 px-5 py-20 md:grid-cols-2">
        <article>
          {sawamani && <Photo photo={sawamani} className="mb-5 w-full object-cover" sizes="50vw" />}
          <h2 className="font-display text-3xl">Sawamani Prashadi — Dal Baati Churma</h2>
          <p className="mt-3 text-charcoal/75">
            {locale === "hi"
              ? "प्रसादी लाइन बड़ी संख्या के लिए, स्वाद आखिरी थाली तक।"
              : "A prasadi line built for volume, with Dal Baati Churma that still tastes like itself at the last plate."}
          </p>
          <Link href={`/${locale}/sawamani-prashadi-catering-jaipur`} className="mt-4 inline-block text-sm font-semibold uppercase tracking-widest text-maroon">
            Sawamani
          </Link>
        </article>
        <article>
          {live && <Photo photo={live} className="mb-5 w-full object-cover" sizes="50vw" />}
          <h2 className="font-display text-3xl">Live food stations</h2>
          <p className="mt-3 text-charcoal/75">
            {locale === "hi"
              ? "चाट, पान, ग्रिल, मिठाई — मेहमानों के प्रवाह पर।"
              : "Chaat, pan, grill and sweets paced to guest flow — not a catalogue of unused stalls."}
          </p>
          <Link href={`/${locale}/live-food-stations-jaipur`} className="mt-4 inline-block text-sm font-semibold uppercase tracking-widest text-maroon">
            Live counters
          </Link>
        </article>
      </section>

      <PhotoMarquee />

      <section className="mx-auto max-w-site px-5 py-20">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">Gallery</h2>
        <p className="mt-2 max-w-xl text-charcoal/70">Photographs from the work. Open any frame.</p>
        <div className="mt-8">
          <GalleryMasonry limit={12} />
        </div>
        <Link href={`/${locale}/gallery`} className="mt-8 inline-block border border-charcoal px-5 py-3 text-xs font-bold uppercase tracking-widest no-underline">
          {d.nav.gallery}
        </Link>
      </section>

      <CtaBand locale={locale} />

      <section className="mx-auto max-w-site px-5 py-20">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{d.howTitle}</h2>
        <div className="mt-10">
          <ProcessTimeline locale={locale} />
        </div>
      </section>

      <section id="areas" className="bg-mist px-5 py-20">
        <div className="mx-auto max-w-site">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">Jaipur and all over Rajasthan</h2>
          <p className="mt-3 max-w-xl text-charcoal/75">{site.serving}</p>
          <div className="mt-10">
            <RajasthanMap locale={locale} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20">
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{d.testimonialsTitle}</h2>
        <p className="mt-2 text-sm text-maroon">{d.testimonialsNote}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <blockquote key={n} className="border-t border-gold/40 pt-4">
              <p className="text-charcoal/60">Placeholder quote {n}. // TODO: replace with real data</p>
              <footer className="mt-3 text-sm">Host name · // TODO: replace with real data</footer>
            </blockquote>
          ))}
        </div>
        <a href={site.googleReviews} className="mt-6 inline-block text-sm font-semibold" target="_blank" rel="noopener">
          Google Reviews slot
        </a>
      </section>

      <section className="mx-auto grid max-w-site gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{d.faqTitle}</h2>
          <div className="mt-8">
            <FaqAccordion locale={locale} items={homeFaqs} />
          </div>
        </div>
        <BudgetCalculator locale={locale} />
      </section>

      <section id="lead" className="bg-mist px-5 py-20">
        <div className="mx-auto grid max-w-site gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{d.leadTitle}</h2>
            <p className="mt-4 text-charcoal/75">
              {site.phones.map((p) => p.display).join(" · ")}
            </p>
          </div>
          <LeadForm locale={locale} />
        </div>
      </section>
    </>
  );
}
