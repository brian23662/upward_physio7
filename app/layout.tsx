import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site-config';

import './globals.css';

// Distinctive serif for headlines — pairs with the elegant logo wordmark.
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

// Clean, neutral sans for body copy. Used sparingly so the serif can shine.
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'physical therapy',
    'concierge physical therapy',
    'occupational health',
    'strength and conditioning',
    'injury prevention',
    'workplace wellness',
    'doctor of physical therapy',
    'CSCS',
    'Daniel Keim',
    'Upward Physio',
  ],
  authors: [{ name: siteConfig.founder.name }],
  creator: siteConfig.founder.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0E2231',
  width: 'device-width',
  initialScale: 1,
};

// Schema.org JSON-LD for local-business SEO. Helps Daniel show up properly
// in search results when people look for physical therapists by name.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  founder: {
    '@type': 'Person',
    name: siteConfig.founder.name,
    jobTitle: 'Doctor of Physical Therapy',
    sameAs: [siteConfig.social.linkedin],
  },
  medicalSpecialty: ['PhysicalTherapy', 'Physiotherapy'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-dvh bg-background text-foreground">
        {/* Structured data — emitted server-side, no JS required */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
