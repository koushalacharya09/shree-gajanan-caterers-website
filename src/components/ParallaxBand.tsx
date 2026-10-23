"use client";

import { useEffect, useRef } from "react";
import type { GalleryPhoto } from "@/lib/gallery";
import { Photo } from "./Photo";

export function ParallaxBand({ photo, caption }: { photo: GalleryPhoto; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let killed = false;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (killed || !ref.current) return;
      const img = ref.current.querySelector("img");
      if (!img) return;
      gsap.fromTo(
        img,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    })();
    return () => {
      killed = true;
    };
  }, []);

  return (
    <div ref={ref} className="relative h-[42vh] min-h-[240px] overflow-hidden">
      <Photo photo={photo} className="h-[120%] w-full object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-charcoal/35" />
      {caption && (
        <p className="absolute bottom-6 left-0 right-0 text-center font-display text-2xl text-ivory md:text-4xl">
          {caption}
        </p>
      )}
    </div>
  );
}
