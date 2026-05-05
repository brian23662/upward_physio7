import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { ServiceIcon } from '@/components/service-icon';
import { services, getServiceBySlug } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

type Props = {
  params: { slug: string };
};

// Statically generate all five service pages at build time
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Per-page metadata so each service has its own SEO title + description + OG
export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} — ${siteConfig.name}`,
      description: service.description,
      type: 'article',
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  // Build a "next service" link so visitors can keep exploring
  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <>
      {/* Hero */}
      <section className="arc-pattern relative overflow-hidden">
        <div className="container-tight relative pt-16 pb-20 md:pt-24 md:pb-28">
          <Reveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-brand-navy/60 transition-colors hover:text-brand-teal-dark"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              All services
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex items-start gap-6">
              <ServiceIcon
                type={service.icon}
                className="h-14 w-14 shrink-0"
              />
              <div>
                <p className="eyebrow">Service</p>
                <h1 className="mt-3 font-display text-5xl leading-[1.05] text-brand-navy md:text-7xl">
                  {service.title}
                </h1>
                <p className="mt-4 font-display text-2xl italic text-brand-teal-dark md:text-3xl">
                  {service.tagline}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg text-brand-navy/75 md:text-xl">
              {service.description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/#contact">
                  Book a Consult
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Meet your provider</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Long form */}
      <section className="bg-white">
        <div className="container-tight section">
          <div className="grid gap-16 md:grid-cols-12">
            {/* Long description */}
            <Reveal className="md:col-span-7">
              <p className="eyebrow">The approach</p>
              <h2 className="mt-4 font-display text-3xl text-brand-navy md:text-4xl">
                What working together looks like
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-navy/80">
                {service.longDescription}
              </p>
            </Reveal>

            {/* Benefits list */}
            <Reveal delay={0.1} className="md:col-span-5">
              <div className="rounded-2xl border border-border bg-brand-cream/40 p-7">
                <p className="eyebrow">Includes</p>
                <ul className="mt-5 space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-brand-navy/85">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Who it's for */}
          <Reveal>
            <div className="mt-20 rounded-3xl bg-brand-navy p-10 text-white md:p-14">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-teal-light">
                Who it's for
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                This is the right fit if you're:
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.whoItsFor.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal-light" />
                    <span className="text-sm leading-relaxed text-white/90">
                      {w}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next service / CTA */}
      <section className="bg-brand-cream/50">
        <div className="container-tight section">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Keep exploring</p>
              <h2 className="mt-4 font-display text-3xl text-brand-navy md:text-4xl">
                Next: {nextService.title}
              </h2>
              <p className="mt-3 text-brand-navy/70">{nextService.tagline}</p>
            </Reveal>
            <Reveal delay={0.1} className="md:justify-self-end">
              <Button asChild size="lg" variant="navy">
                <Link href={`/services/${nextService.slug}`}>
                  Read about {nextService.shortTitle}
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
