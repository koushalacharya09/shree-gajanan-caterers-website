"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "./Photo";
import { heroPhotos } from "@/lib/gallery";
import { site, type Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";
import { waLink, enquiryWaMessage } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export function HeroSlideshow({ locale }: { locale: Locale }) {
  const slides = heroPhotos();
  const [i, setI] = useState(0);
  const d = t(locale);
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 5200);
    return () => clearInterval(id);
  }, [reduce, slides.length]);

  const photo = slides[i] || slides[0];
  if (!photo) return null;

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-charcoal text-ivory">
      <AnimatePresence mode="wait">
        <motion.div
          key={photo.id}
          className="hero-slide absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 1.1 }}
        >
          <Photo
            photo={photo}
            priority={i === 0}
            kenBurns={!reduce}
            className="h-full w-full object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-site flex-col items-center justify-end px-5 pb-20 pt-28 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo.svg" alt="" width={88} height={88} className="mb-6 bg-ivory/90" />
        <p className="font-devanagari text-gold-soft">॥ श्री ॥</p>
        <p className="mt-2 font-display text-xl text-gold-soft sm:text-2xl">{site.name}</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.1rem,5vw,4.2rem)] leading-[1.12] text-ivory">
          {d.heroPromise}
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ivory/85">
          {d.chips.map((c) => (
            <span key={c} className="border border-gold/40 px-3 py-1">
              {c}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={`/${locale}/enquire`}
            className="bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-charcoal no-underline"
          >
            {d.ctaQuote}
          </Link>
          <a
            href={waLink(enquiryWaMessage({ city: "Jaipur", event: "wedding catering" }))}
            onClick={() => track("whatsapp_click", { place: "hero" })}
            className="border border-ivory/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ivory no-underline"
            target="_blank"
            rel="noopener"
          >
            {d.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
