# Public Assets

This folder is for static files served at the root of your site.

## Suggested files to add

- **`og-image.png`** — 1200×630 social sharing image (a default is generated dynamically by `app/opengraph-image.tsx`, but you can override with this static one if you prefer).
- **`favicon.ico`** — fallback favicon (Next.js will use `app/icon.svg` automatically; only needed if you want broader compatibility).
- **`videos/`** — any hero/section videos referenced via `<VideoPlayer src="/videos/your-clip.mp4" />`. Use H.264 MP4 (and ideally a WebM fallback) under 5MB for fast loading.
- **`images/`** — photos of Daniel, training shots, workplace shots, etc.

Once you add these, reference them in components as `/og-image.png`, `/videos/hero.mp4`, etc.
