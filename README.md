# Upward Physio

The official website for **Upward Physio** — concierge physical therapy from Daniel Keim, PT, DPT, CSCS.

> **Move Better. Live Better.**

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) primitives
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals
- [Resend](https://resend.com/) for the contact form
- Optimized for Vercel deployment

## Project structure

```
app/
  api/contact/route.ts       # Resend-backed contact form endpoint
  about/page.tsx             # /about
  services/[slug]/page.tsx   # /services/* — generated from lib/services.ts
  layout.tsx                 # Root layout (fonts, metadata, OG, JSON-LD)
  page.tsx                   # Home
  globals.css                # Tailwind + design tokens
  opengraph-image.tsx        # Dynamic OG image
  sitemap.ts, robots.ts      # SEO
components/
  ui/                        # shadcn primitives (button, input, etc.)
  navbar.tsx, footer.tsx     # Site chrome
  contact-form.tsx           # Form (client) — talks to /api/contact
  logo.tsx                   # Brand mark + lockup as SVG
  reveal.tsx                 # Scroll-into-view animation wrapper
  service-icon.tsx           # Custom icons for each service
  video-player.tsx           # Lazy <video> with IntersectionObserver
lib/
  services.ts                # Single source of truth for service content
  site-config.ts             # Site name, founder info, contact info
  utils.ts                   # cn() class-merge helper
```

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Copy .env.example to .env.local and fill in your Resend keys
cp .env.example .env.local

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable            | Description                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`    | API key from [resend.com/api-keys](https://resend.com/api-keys)                          |
| `RESEND_FROM_EMAIL` | A verified sender on your Resend domain (e.g. `hello@upwardphysio.com`)                  |
| `CONTACT_TO_EMAIL`  | Where contact form messages should land. Defaults to Daniel's email if not set.          |

> For local testing without verifying a domain, you can use Resend's sandbox sender: `onboarding@resend.dev`. Production should use a verified domain.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add the three environment variables above in the Vercel project settings.
4. Connect `upwardphysio.com` to the project. Done.

`vercel.json` is included for explicit framework + region config.

## Editing content

Almost all marketing copy lives in **`lib/services.ts`** and **`lib/site-config.ts`**. The home page service grid, the dynamic service detail pages, the navbar, and the footer all read from those files — change them in one place and the rest of the site updates.

## License

© Upward Physio, LLC.
# upward_physio7
