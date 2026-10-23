import type { Metadata } from "next";
import { site, type Locale } from "@/data/site";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/gallery";
import { CtaBand } from "@/components/CtaBand";
import { PhotoMarquee } from "@/components/PhotoMarquee";

export const metadata: Metadata = {
  title: "About Shree Gajanan Caterers",
  description: "Family catering house at 999, Subhash Chowk, Jaipur. Pure vegetarian, outdoor and indoor, across Rajasthan.",
};

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const shot = photos[0];
  return (
    <>
      <section className="mx-auto grid max-w-site gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="font-devanagari text-gold">॥ श्री ॥</p>
          <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3.4rem)]">{site.name}</h1>
          <p className="mt-4 text-lg text-charcoal/80">{locale === "hi" ? site.taglineHi : site.tagline}</p>
          <p className="mt-6 leading-relaxed text-charcoal/80">
            We are a Jaipur catering house run by {site.owner}. The work is pure vegetarian food for weddings,
            Sawamani prashadi, corporate openings and family celebrations — cooked for indoor halls and open lawns.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal/80">
            Office and residence: {site.address}. We serve {site.serving}.
          </p>
        </div>
        {shot && <Photo photo={shot} className="w-full object-cover" sizes="50vw" />}
      </section>
      <PhotoMarquee />
      <CtaBand locale={locale} />
    </>
  );
}
