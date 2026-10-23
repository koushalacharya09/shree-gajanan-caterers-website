import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/Providers";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const deva = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600"],
  variable: "--font-deva",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Shree Gajanan Caterers | Royal Veg Wedding Catering Jaipur",
    template: "%s | Shree Gajanan Caterers",
  },
  description: site.tagline,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/brand/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className={`${display.variable} ${sans.variable} ${deva.variable} font-sans antialiased`}>
        <JsonLd />
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
