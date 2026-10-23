"use client";

import Link from "next/link";
import { site, type Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";
import { waLink, enquiryWaMessage } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export function StickyCta({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <>
      <a
        href={waLink(enquiryWaMessage({ city: "Jaipur", event: "catering" }))}
        onClick={() => track("whatsapp_click", { place: "float" })}
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-quiet no-underline md:bottom-6"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener"
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
          <path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.7L4 20l1.4-3.3A8.5 8.5 0 1 1 20 11.5zm-8.2 3.7c2.3 0 4.2-1.5 4.8-3.6.1-.4 0-.6-.3-.7l-1.5-.4c-.3-.1-.5 0-.6.2l-.6 1.1c-.1.2-.3.2-.5.1-1.2-.5-2.1-1.4-2.6-2.6-.1-.2 0-.4.1-.5l1.1-.6c.2-.1.3-.3.2-.6l-.4-1.5c-.1-.3-.3-.4-.7-.3-2 .6-3.6 2.5-3.6 4.8 0 .3 0 .7.1 1 .6 2.4 2.6 4.4 5 5 .3.1.7.1 1 .1z" />
        </svg>
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 md:hidden" aria-label="Quick contact">
        <a
          href={`tel:${site.phones[0].tel}`}
          onClick={() => track("call_click", { place: "sticky" })}
          className="bg-maroon py-3.5 text-center text-xs font-bold uppercase tracking-widest text-ivory no-underline"
        >
          {d.ctaCall}
        </a>
        <a
          href={waLink(enquiryWaMessage({ city: "Jaipur", event: "catering" }))}
          onClick={() => track("whatsapp_click", { place: "sticky" })}
          className="bg-[#1e3d32] py-3.5 text-center text-xs font-bold uppercase tracking-widest text-ivory no-underline"
          target="_blank"
          rel="noopener"
        >
          {d.ctaWhatsapp}
        </a>
        <Link
          href={`/${locale}/enquire`}
          className="bg-gold py-3.5 text-center text-xs font-bold uppercase tracking-widest text-charcoal no-underline"
        >
          {d.stickyQuote}
        </Link>
      </div>
    </>
  );
}
