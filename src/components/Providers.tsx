"use client";

import { useEffect } from "react";
import { BrandLoader } from "./BrandLoader";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { destroy: () => void; raf: (t: number) => void } | null = null;
    let rafId = 0;
    (async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({ duration: 1.05 });
      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    })();
    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
  return (
    <>
      <BrandLoader />
      {children}
    </>
  );
}
