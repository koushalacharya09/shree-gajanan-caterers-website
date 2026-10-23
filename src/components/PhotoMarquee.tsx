import { marqueePhotos } from "@/lib/gallery";
import { Photo } from "./Photo";

export function PhotoMarquee() {
  const row = marqueePhotos();
  const doubled = [...row, ...row];
  return (
    <div className="overflow-hidden border-y border-gold/30 bg-mist py-3" aria-hidden>
      <div className="flex w-max animate-marquee gap-3">
        {doubled.map((p, i) => (
          <div key={`${p.id}-${i}`} className="relative h-28 w-40 shrink-0 overflow-hidden md:h-36 md:w-56">
            <Photo photo={p} className="h-full w-full object-cover" sizes="224px" />
          </div>
        ))}
      </div>
    </div>
  );
}
