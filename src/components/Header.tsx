"use client";

import Link from "next/link";
import { useState } from "react";
import { site, type Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";
import { track } from "@/lib/analytics";

export function Header({ locale }: { locale: Locale }) {
  const d = t(locale);
  const other: Locale = locale === "en" ? "hi" : "en";
  const [open, setOpen] = useState(false);
  const prefix = `/${locale}`;

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3">
        <Link href={prefix} className="flex items-center gap-3 no-underline" aria-label={site.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.svg" alt="" width={48} height={48} className="h-12 w-12" />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg text-maroon">Shree Gajanan</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-gold">Caterers · Jaipur</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <Link href={`${prefix}/about`} className="text-xs font-semibold uppercase tracking-[0.14em] no-underline">
            {d.nav.about}
          </Link>
          <Link href={`${prefix}#services`} className="text-xs font-semibold uppercase tracking-[0.14em] no-underline">
            {d.nav.services}
          </Link>
          <Link href={`${prefix}/gallery`} className="text-xs font-semibold uppercase tracking-[0.14em] no-underline">
            {d.nav.gallery}
          </Link>
          <Link href={`${prefix}#areas`} className="text-xs font-semibold uppercase tracking-[0.14em] no-underline">
            {d.nav.areas}
          </Link>
          <Link
            href={locale === "en" ? "/hi" : "/en"}
            hrefLang={other}
            className="text-xs font-semibold uppercase tracking-[0.14em] no-underline"
          >
            {locale === "en" ? "हिं" : "EN"}
          </Link>
          <a
            href={`tel:${site.phones[0].tel}`}
            onClick={() => track("call_click", { place: "header" })}
            className="text-maroon no-underline"
            aria-label={`Call ${site.phones[0].display}`}
          >
            <PhoneIcon />
          </a>
          <Link
            href={`${prefix}/enquire`}
            className="bg-maroon px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-ivory no-underline hover:bg-maroon-deep"
          >
            {d.nav.enquire}
          </Link>
        </nav>
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-gold/40 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-4 bg-charcoal" />
          <span className="block h-px w-4 bg-charcoal" />
          <span className="block h-px w-4 bg-charcoal" />
        </button>
      </div>
      {open && (
        <div className="space-y-3 border-t border-gold/30 px-5 py-4 md:hidden">
          <Link href={`${prefix}/about`} onClick={() => setOpen(false)} className="block">
            {d.nav.about}
          </Link>
          <Link href={`${prefix}/gallery`} onClick={() => setOpen(false)} className="block">
            {d.nav.gallery}
          </Link>
          <Link href={`${prefix}/enquire`} onClick={() => setOpen(false)} className="block font-semibold text-maroon">
            {d.nav.enquire}
          </Link>
          <Link href={locale === "en" ? "/hi" : "/en"} className="block">
            {locale === "en" ? "हिंदी" : "English"}
          </Link>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 2-2.2 2C9.5 19.5 4.5 14.5 4.5 5.7c0-1.2 1-2.2 2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
