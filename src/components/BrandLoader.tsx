"use client";

import { useEffect, useState } from "react";

export function BrandLoader() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("sgc-loaded")) return;
    setShow(true);
    const t = setTimeout(() => {
      sessionStorage.setItem("sgc-loaded", "1");
      setShow(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-ivory">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo.svg" alt="" width={88} height={88} />
      <svg className="absolute mt-28 h-px w-40 overflow-visible" aria-hidden>
        <line x1="0" y1="1" x2="160" y2="1" stroke="#B8860B" strokeWidth="1" strokeDasharray="160" className="animate-draw" />
      </svg>
    </div>
  );
}
