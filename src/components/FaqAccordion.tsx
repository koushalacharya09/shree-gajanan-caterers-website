"use client";

import { useState } from "react";
import type { Locale } from "@/data/site";

export function FaqAccordion({
  locale,
  items,
}: {
  locale: Locale;
  items: { q: string; a: string; qHi: string; aHi: string }[];
}) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((item, i) => {
        const q = locale === "hi" ? item.qHi : item.q;
        const a = locale === "hi" ? item.aHi : item.a;
        const expanded = open === i;
        return (
          <div key={q} className="border-b border-gold/35">
            <h3>
              <button
                className="flex w-full items-center justify-between py-4 text-left font-display text-xl"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : i)}
              >
                {q}
                <span aria-hidden className="text-gold">
                  {expanded ? "–" : "+"}
                </span>
              </button>
            </h3>
            {expanded && <p className="pb-4 text-sm leading-relaxed text-charcoal/80">{a}</p>}
          </div>
        );
      })}
    </div>
  );
}
