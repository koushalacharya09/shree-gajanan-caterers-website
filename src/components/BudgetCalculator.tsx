"use client";

import { useMemo, useState } from "react";
import pricing from "@/data/pricing.json";
import type { Locale } from "@/data/site";
import { t } from "@/i18n/dictionary";
import Link from "next/link";

export function BudgetCalculator({ locale }: { locale: Locale }) {
  const d = t(locale);
  const [eventId, setEventId] = useState(pricing.events[0].id);
  const [guests, setGuests] = useState(200);
  const event = pricing.events.find((e) => e.id === eventId) ?? pricing.events[0];
  const range = useMemo(() => {
    const g = Math.max(guests, 1);
    return {
      min: event.perPlate.min * g,
      max: event.perPlate.max * g,
    };
  }, [event, guests]);

  const inr = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="border border-gold/40 bg-ivory p-6">
      <h3 className="font-display text-2xl">{d.calculatorTitle}</h3>
      <p className="mt-1 text-sm text-charcoal/70">{d.calculatorNote}</p>
      <label className="mt-4 block text-xs font-semibold uppercase tracking-widest">
        Event
        <select
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          className="mt-1 w-full border border-gold/35 px-3 py-3 text-sm"
        >
          {pricing.events.map((e) => (
            <option key={e.id} value={e.id}>
              {locale === "hi" ? e.labelHi : e.label}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-3 block text-xs font-semibold uppercase tracking-widest">
        Guests ({guests})
        <input
          type="range"
          min={50}
          max={2000}
          step={10}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-3 w-full"
        />
      </label>
      <p className="mt-4 font-display text-3xl text-maroon">
        {inr(range.min)} – {inr(range.max)}
      </p>
      <p className="mt-2 text-xs text-charcoal/70">{pricing.disclaimer}</p>
      <Link
        href={`/${locale}/enquire`}
        className="mt-4 inline-block bg-maroon px-5 py-3 text-xs font-bold uppercase tracking-widest text-ivory no-underline"
      >
        {d.ctaQuote}
      </Link>
    </div>
  );
}
