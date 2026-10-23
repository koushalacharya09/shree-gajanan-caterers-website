import type { Metadata } from "next";
import { type Locale } from "@/data/site";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { CtaBand } from "@/components/CtaBand";
import { PhotoMarquee } from "@/components/PhotoMarquee";

export const metadata: Metadata = {
  title: "Gallery | Wedding & Event Catering Photographs",
  description: "Photographs from Shree Gajanan Caterers — weddings, live counters, outdoor setups and food in Jaipur.",
};

export default function GalleryPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return (
    <>
      <section className="mx-auto max-w-site px-5 py-16">
        <h1 className="font-display text-[clamp(2rem,4vw,3.4rem)]">Photographs from the work.</h1>
        <p className="mt-3 max-w-xl text-charcoal/75">Filter, then open a frame. Swipe or use the arrow keys.</p>
        <div className="mt-10">
          <GalleryMasonry />
        </div>
      </section>
      <PhotoMarquee />
      <CtaBand locale={locale} />
    </>
  );
}
