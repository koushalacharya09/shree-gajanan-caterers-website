"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";

export function ProcessTimeline({ locale }: { locale: Locale }) {
  const d = t(locale);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let killed = false;
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (killed || !ref.current) return;
      gsap.from(ref.current.querySelectorAll("[data-step]"), {
        opacity: 0,
        y: 24,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    })();
    return () => {
      killed = true;
    };
  }, []);

  return (
    <div ref={ref} className="grid gap-6 md:grid-cols-4">
      {d.steps.map((s) => (
        <article key={s.n} data-step className="border-t-2 border-maroon pt-4">
          <p className="font-display text-gold">{s.n}</p>
          <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
          <p className="mt-2 text-sm text-charcoal/75">{s.d}</p>
        </article>
      ))}
    </div>
  );
}
