import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

import { LogoLockup } from '@/components/logo';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-tight py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block — left-aligned, larger logo, no tagline (it's
              already part of the wordmark). The description sits directly
              underneath the lockup. */}
          <div className="md:col-span-5">
            <LogoLockup
              inverted
              className="items-start"
              imageClassName="h-32 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Daniel Keim on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-brand-navy"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email Upward Physio"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:border-brand-teal hover:bg-brand-teal hover:text-brand-navy"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services list */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-teal-light">
              Services
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/80 transition-colors hover:text-brand-teal-light"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-teal-light">
              Company
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/80 transition-colors hover:text-brand-teal-light"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-white/80 transition-colors hover:text-brand-teal-light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-teal-light">
              Get in touch
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-5 block text-sm text-white/80 transition-colors hover:text-brand-teal-light"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        {/* Bottom bar — pillars from the logo guide as a tasteful echo */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-xs text-white/55 md:grid-cols-4 md:items-center">
          <span>Evidence-Based Care</span>
          <span>Functional Movement</span>
          <span>Personalized Support</span>
          <span>Continuous Improvement</span>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 text-xs text-white/45 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} Upward Physio, LLC. All rights
            reserved.
          </span>
          <span>{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
