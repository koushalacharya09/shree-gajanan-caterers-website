import Link from "next/link";
import { services } from "@/data/services";
import { photos } from "@/lib/gallery";
import { Photo } from "./Photo";
import type { Locale } from "@/data/site";

export function ServicesGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const photo = photos[i % photos.length];
        return (
          <Link
            key={s.id}
            href={`/${locale}/${s.slug}`}
            className="clip-wipe group relative min-h-[280px] overflow-hidden bg-charcoal text-ivory no-underline"
          >
            {photo && (
              <Photo photo={photo} className="absolute inset-0 h-full w-full object-cover opacity-70" sizes="33vw" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-end p-6">
              <h3 className="font-display text-2xl">{locale === "hi" ? s.titleHi : s.title}</h3>
              <p className="mt-2 text-sm text-ivory/85">{locale === "hi" ? s.blurbHi : s.blurb}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
