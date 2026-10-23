# Shree Gajanan Caterers — royal catering website

Pure-vegetarian wedding and event catering house in Jaipur. This repository is a lead-generation site: local SEO pages, bilingual UI, a validated enquiry API, and photography from real work.

![Homepage screenshot](docs/screenshot-home.png)

> Add a production screenshot at `docs/screenshot-home.png` after the first deploy.

## Why this stack

| Piece | Role |
| --- | --- |
| **Next.js 14 App Router** | Static generation for SEO landings + serverless `/api/lead` |
| **TypeScript** | Typed landings, leads, gallery manifest |
| **Tailwind CSS** | Flat matte royal system (maroon / gold / ivory / charcoal) |
| **next/font** | Cormorant Garamond, Inter, Noto Serif Devanagari without layout shift |
| **Framer Motion** | Hero crossfade |
| **GSAP ScrollTrigger** | Timeline + parallax (transform only, respects reduced motion) |
| **Lenis** | Smooth scroll, disabled when `prefers-reduced-motion` |
| **sharp** | AVIF/WebP pipeline, blur placeholders, hero ranking |
| **zod** | Lead validation |
| **Supabase** | Durable lead store (optional until env is set) |
| **Resend** | Email notify (optional) |
| **GA4 + Meta Pixel** | `lead_submit`, `whatsapp_click`, `call_click` |

## Architecture

```
browser  →  /en | /hi  (App Router, hreflang)
         →  /api/lead  (zod, honeypot, rate limit)
                ├─ Supabase `leads`
                ├─ Resend email
                └─ WhatsApp deep-link response
         →  /admin/leads  (password cookie + CSV)
```

Photography lives in `public/gallery` (never ship a file over 400KB). Manifest: `src/data/gallery.json`.

## Setup

```bash
npm install
cp .env.example .env.local
npm run optimize          # from C:\Users\user\Downloads\catering photos
npm run dev
```

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Drop the round crest at `public/brand/logo.svg` (placeholder SVG is already there).

## Environment

See `.env.example`. Without Supabase/Resend the form still validates, rate-limits, and returns a WhatsApp link.

SQL: `docs/supabase.sql`.

## Deploy (Vercel)

1. Import this GitHub repo.
2. Framework: Next.js. Production URL: `https://www.shreegajanancaterers.online`.
3. Paste env vars from `.env.example`.
4. DNS (once the project is assigned):

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Confirm the exact values in the Vercel domain panel — they can vary by account.

## Lighthouse

Target: LCP < 2.0s, CLS < 0.05, INP < 200ms, 95+ on all four categories. Run against production after DNS, not `localhost`.

## Portfolio blurb

```
👑 Shree Gajanan Caterers: Royal Catering Website · Next.js TypeScript Tailwind Framer Motion GSAP Node.js Supabase SEO
Lead-generation site for a Jaipur veg catering house: bilingual local SEO, validated enquiries, WhatsApp handoff.
Photography pipeline, Core Web Vitals budget, and a passworded leads desk — frontend to backend, end to end.
→ View Repository
```
