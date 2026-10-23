"use client";

import { useEffect, useState } from "react";
import type { GalleryPhoto } from "@/lib/gallery";
import { Photo } from "./Photo";

export function Lightbox({
  photos,
  startId,
  onClose,
}: {
  photos: GalleryPhoto[];
  startId: string;
  onClose: () => void;
}) {
  const start = Math.max(0, photos.findIndex((p) => p.id === startId));
  const [i, setI] = useState(start);
  const photo = photos[i];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((n) => (n + 1) % photos.length);
      if (e.key === "ArrowLeft") setI((n) => (n - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, photos.length]);

  let startX = 0;
  function onTouchStart(e: React.TouchEvent) {
    startX = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx > 40) setI((n) => (n - 1 + photos.length) % photos.length);
    if (dx < -40) setI((n) => (n + 1) % photos.length);
  }

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photograph"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/92 p-4"
      onClick={onClose}
    >
      <button className="absolute right-4 top-4 text-ivory" aria-label="Close">
        Close
      </button>
      <div
        className="relative max-h-[90vh] max-w-5xl overflow-auto"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Photo photo={photo} className="max-h-[85vh] w-auto object-contain" sizes="90vw" />
        <p className="mt-3 text-center text-sm text-ivory/80">{photo.alt}</p>
        <div className="mt-3 flex justify-center gap-3">
          <button type="button" className="border border-ivory/40 px-3 py-2 text-ivory" onClick={() => setI((n) => (n - 1 + photos.length) % photos.length)}>
            Prev
          </button>
          <button type="button" className="border border-ivory/40 px-3 py-2 text-ivory" onClick={() => setI((n) => (n + 1) % photos.length)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
