"use client";

import { useMemo, useState } from "react";
import { photos, photosByCategory, type GalleryPhoto } from "@/lib/gallery";
import { Photo } from "./Photo";
import { Lightbox } from "./Lightbox";

const filters = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "live", label: "Live Counters" },
  { id: "corporate", label: "Corporate" },
  { id: "sweets", label: "Sweets" },
  { id: "food", label: "Food" },
];

export function GalleryMasonry({ limit }: { limit?: number }) {
  const [cat, setCat] = useState("all");
  const [active, setActive] = useState<GalleryPhoto | null>(null);
  const list = useMemo(() => {
    const rows = photosByCategory(cat);
    return limit ? rows.slice(0, limit) : rows;
  }, [cat, limit]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={cat === f.id}
            onClick={() => setCat(f.id)}
            className={`border px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest ${
              cat === f.id ? "border-maroon bg-maroon text-ivory" : "border-gold/40"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="masonry">
        {list.map((p, i) => (
          <figure key={p.id} className="relative cursor-zoom-in overflow-hidden" style={{ animationDelay: `${i * 40}ms` }}>
            <button type="button" className="block w-full" onClick={() => setActive(p)} aria-label={`Open ${p.alt}`}>
              <Photo photo={p} className="w-full" sizes="(max-width:768px) 100vw, 33vw" />
            </button>
          </figure>
        ))}
      </div>
      {active && (
        <Lightbox
          photos={list.length ? list : photos}
          startId={active.id}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
