import Link from "next/link";
import type { Locale } from "@/data/site";

const pins = [
  { id: "jaipur", label: "Jaipur", href: "wedding-caterers-jaipur", x: 62, y: 42 },
  { id: "pushkar", label: "Pushkar", href: "pushkar-wedding-catering", x: 48, y: 44 },
  { id: "ajmer", label: "Ajmer", href: "ajmer-catering-services", x: 50, y: 50 },
  { id: "jodhpur", label: "Jodhpur", href: "jodhpur-wedding-catering", x: 32, y: 42 },
  { id: "jaisalmer", label: "Jaisalmer", href: "jaisalmer-wedding-catering", x: 18, y: 38 },
  { id: "kota", label: "Kota", href: "kota-catering-services", x: 64, y: 62 },
  { id: "sikar", label: "Sikar", href: "sikar-catering-services", x: 58, y: 32 },
];

export function RajasthanMap({ locale }: { locale: Locale }) {
  const prefix = `/${locale}`;
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <svg viewBox="0 0 100 90" className="w-full bg-mist" role="img" aria-label="Rajasthan service map">
        <path
          d="M18 40 L28 22 L48 18 L70 20 L82 34 L80 58 L68 78 L42 82 L22 70 L14 52 Z"
          fill="#fffdf8"
          stroke="#b8860b"
          strokeWidth="0.6"
        />
        {pins.map((p) => (
          <g key={p.id}>
            <circle cx={p.x} cy={p.y} r="1.6" fill="#6B1220" />
            <text x={p.x + 2.2} y={p.y + 1} fontSize="3.2" fill="#1C1917">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        {pins.map((p) => (
          <li key={p.id}>
            <Link href={`${prefix}/${p.href}`} className="border border-gold/35 px-3 py-2 no-underline hover:border-maroon">
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
