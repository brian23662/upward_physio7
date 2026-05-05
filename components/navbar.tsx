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
        // Light, frosted background so the dark-on-light lockup reads cleanly.
        // Stays transparent over the hero, then fades in once you scroll.
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_rgba(14,34,49,0.04)]'
          : 'bg-transparent',
      )}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Upward Physio — home"
          className="transition-opacity hover:opacity-80"
        >
          <LogoLockup />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="brand-link text-sm font-medium"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-20 bottom-0 bg-white transition-transform duration-300 overflow-y-auto',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="container-tight py-8">
          <nav className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border py-4 font-display text-2xl text-brand-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <p className="eyebrow mb-4">Services</p>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-brand-navy/80 hover:text-brand-teal-dark"
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
