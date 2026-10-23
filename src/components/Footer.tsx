import Link from "next/link";
import { site, type Locale } from "@/data/site";
import { services } from "@/data/services";
import { t } from "@/i18n/dictionary";
import { MakerCredit } from "./MakerCredit";
import { marqueePhotos } from "@/lib/gallery";
import { Photo } from "./Photo";

export function Footer({ locale }: { locale: Locale }) {
  const d = t(locale);
  const prefix = `/${locale}`;
  const mosaic = marqueePhotos().slice(0, 8);

  return (
    <footer className="relative mt-20 overflow-hidden bg-maroon-deep text-ivory">
      <div className="pointer-events-none absolute inset-0 grid grid-cols-4 opacity-[0.18] md:grid-cols-8" aria-hidden>
        {mosaic.map((p) => (
          <div key={p.id} className="relative min-h-[140px]">
            <Photo photo={p} className="h-full w-full object-cover" sizes="12vw" />
          </div>
        ))}
      </div>
      <div className="relative mx-auto max-w-site px-5 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.svg" alt={site.name} width={64} height={64} className="mb-4 bg-ivory" />
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-2 text-sm text-ivory/80">{locale === "hi" ? site.taglineHi : site.tagline}</p>
            <p className="mt-4 text-sm">{site.address}</p>
          </div>
          <div>
            <h2 className="mb-3 font-display text-xl">Services</h2>
            <ul className="space-y-2 text-sm text-ivory/85">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href={`${prefix}/${s.slug}`} className="text-ivory no-underline hover:text-gold-soft">
                    {locale === "hi" ? s.titleHi : s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 font-display text-xl">Contact</h2>
            <ul className="space-y-2 text-sm">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="text-ivory no-underline">
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.instagram} className="text-ivory no-underline" target="_blank" rel="noopener">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.mapsLink} className="text-ivory no-underline" target="_blank" rel="noopener">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 font-display text-xl">Visit</h2>
            <iframe
              title="Shree Gajanan Caterers on Google Maps"
              src={site.mapsEmbed}
              className="h-40 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <p className="mt-10 text-xs text-ivory/60">
          © {new Date().getFullYear()} {site.name} · Jaipur, Rajasthan
        </p>
        <MakerCredit />
      </div>
    </footer>
  );
}
