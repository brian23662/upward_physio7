/**
 * Single source of truth for site-wide info.
 * Update here and it propagates to <head>, footer, schema, etc.
 */
export const siteConfig = {
  name: 'Upward Physio',
  tagline: 'Move Better. Live Better.',
  description:
    'Concierge physical therapy and performance care from Daniel Keim, PT, DPT, CSCS. Combining occupational health, orthopedics, strength & conditioning, and injury prevention into one elevated practice.',
  url: 'https://upwardphysio.com',
  ogImage: 'https://upwardphysio.com/og-image.png',
  founder: {
    name: 'Daniel (DJ) Keim',
    credentials: 'PT, DPT, CSCS',
    email: 'danieljkeim@gmail.com',
    linkedin:
      'https://www.linkedin.com/in/daniel-keim-pt-dpt-cscs-7b3a32155/',
  },
  contact: {
    email: 'hello@upwardphysio.com',
    phone: '', // add when available
  },
  social: {
    linkedin:
      'https://www.linkedin.com/in/daniel-keim-pt-dpt-cscs-7b3a32155/',
  },
};

export type SiteConfig = typeof siteConfig;
