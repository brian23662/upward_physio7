'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { LogoLockup } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { services } from '@/lib/services';

const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle "scrolled" styles after the user moves past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        // Always navy now — matches the footer brand block. The scrolled
        // state just adds a subtle border + shadow to lift it off the page.
        'bg-brand-navy text-white',
        scrolled &&
          'border-b border-white/10 shadow-[0_1px_0_0_rgba(0,0,0,0.15)]',
      )}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Upward Physio — home"
          className="transition-opacity hover:opacity-80"
        >
          {/* `inverted` swaps to the white-on-dark lockup */}
          <LogoLockup inverted />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-brand-teal-light"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/#contact">Book a Consult</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-20 bottom-0 bg-brand-navy text-white transition-transform duration-300 overflow-y-auto',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="container-tight py-8">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-4 font-display text-2xl text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-teal-light mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/80 hover:text-brand-teal-light"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Button asChild className="w-full" size="lg">
              <Link href="/#contact">Book a Consult</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
