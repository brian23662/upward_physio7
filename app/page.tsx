import Link from 'next/link';
import {
  ArrowRight,
  HeartPulse,
  Activity,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LogoMark } from '@/components/logo';
import { Reveal } from '@/components/reveal';
import { ContactForm } from '@/components/contact-form';
import { ServiceIcon } from '@/components/service-icon';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

// Brand pillars — pulled directly from the bottom row of the logo guide
const pillars = [
  {
    icon: ShieldCheck,
    title: 'Evidence-Based Care',
    body: 'Every plan starts with current research and ends with results you can measure.',
  },
  {
    icon: Activity,
    title: 'Functional Movement',
    body: 'Care that translates to your real life — your gym, your job, your sport.',
  },
  {
    icon: HeartPulse,
    title: 'Personalized Support',
    body: 'One-on-one attention. Same provider every visit. No rotating cast.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    body: 'Progress is the only acceptable outcome. We track it and adjust.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="arc-pattern relative overflow-hidden">
        {/* Decorative oversized logo mark drifting in the background */}
        <div
          className="pointer-events-none absolute -right-32 -top-12 hidden opacity-[0.04] md:block"
          aria-hidden
        >
          <LogoMark className="h-[600px] w-[600px]" />
        </div>

        <div className="container-tight relative pt-16 pb-24 md:pt-24 md:pb-36">
          <Reveal>
            <p className="eyebrow">Move Better. Live Better.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-brand-navy md:text-7xl lg:text-[5.5rem]">
              Concierge physical therapy <br className="hidden md:block" />
              <span className="text-brand-teal-dark italic">
                built for how you actually live.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-brand-navy/75 md:text-xl">
              One-on-one care that meets you in your home, your gym, or your
              workplace. Combining occupational health, orthopedics, strength
              & conditioning, and injury prevention — all under one roof.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Book a Consult
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </Reveal>

          {/* Quick stats / credibility row */}
          <Reveal delay={0.4}>
            <div className="mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-brand-navy/10 pt-10 md:grid-cols-4">
              {[
                { stat: 'PT, DPT', label: 'Doctor of Physical Therapy' },
                { stat: 'CSCS', label: 'Strength Certified' },
                { stat: '1:1', label: 'Always one-on-one' },
                { stat: '60 min', label: 'Per session' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-3xl text-brand-navy">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-brand-navy/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== PHILOSOPHY / BRAND STORY ============== */}
      <section className="bg-white">
        <div className="container-tight section">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="eyebrow">The Concept</p>
              <h2 className="mt-4 font-display text-4xl text-brand-navy md:text-5xl">
                Balanced.
                <br />
                Supported.
                <br />
                <span className="text-brand-teal-dark italic">Elevated.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-7">
              <p className="text-lg leading-relaxed text-brand-navy/80">
                Two opposing arcs create a dynamic equilibrium — that's the
                Upward Physio mark, and it's also the practice. Care
                <span className="text-brand-teal-dark"> from above</span> meets
                strength <span className="text-brand-navy">from below</span>.
                Together they create balance and upward progress.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-brand-navy/80">
                That's the kind of care you get here: rehab grounded in real
                strength training, prevention informed by years on actual
                worksites, and follow-through that doesn't end when your
                copay runs out.
              </p>
            </Reveal>
          </div>

          {/* Pillars */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-border bg-brand-cream/40 p-6 transition-all hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg hover:shadow-brand-teal/5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-teal-dark transition-colors group-hover:bg-brand-teal group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-brand-navy">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section id="services" className="bg-brand-cream/50">
        <div className="container-tight section">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">What I Do</p>
              <h2 className="mt-4 font-display text-4xl text-brand-navy md:text-5xl">
                One practice.
                <br />
                <span className="italic text-brand-teal-dark">
                  Five disciplines.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-brand-navy/75">
                Most clinicians pick a lane. Upward Physio combines the
                pieces that, frankly, should always have been combined —
                because your body doesn't care about specialty boundaries.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-xl hover:shadow-brand-teal/5"
                >
                  <ServiceIcon type={service.icon} />
                  <h3 className="mt-6 font-display text-2xl text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-teal-dark">
                    {service.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-navy/65">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy transition-colors group-hover:text-brand-teal-dark">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ABOUT (PREVIEW) ============== */}
      <section className="bg-white">
        <div className="container-tight section">
          <div className="grid items-center gap-12 md:grid-cols-12">
            {/* Portrait card / placeholder — uses the brand teal tile from the
                logo guide's "App Icon" treatment for visual rhyme */}
            <Reveal className="md:col-span-5" from="left">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal to-brand-teal-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LogoMark className="h-48 w-48" inverted />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-brand-navy p-6 text-white">
                  <p className="font-display text-xl">
                    {siteConfig.founder.name}
                  </p>
                  <p className="text-sm text-white/70">
                    {siteConfig.founder.credentials}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-7">
              <p className="eyebrow">About Daniel</p>
              <h2 className="mt-4 font-display text-4xl text-brand-navy md:text-5xl">
                A doctor of physical therapy who lifts, runs, and shows up
                <span className="text-brand-teal-dark italic"> on-site.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-brand-navy/75">
                Daniel Keim is a physical therapist working full-time in
                occupational health and on the side as a concierge provider —
                in gyms, in homes, on job sites. The vision behind Upward
                Physio is to combine occupational health, strength and
                conditioning, orthopedics, injury prevention, and workplace
                wellness into one cohesive practice.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/about">
                    More about Daniel
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section id="contact" className="bg-brand-cream/50">
        <div className="container-tight section">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-4 font-display text-4xl text-brand-navy md:text-5xl">
                Let's figure out if we're a fit.
              </h2>
              <p className="mt-5 text-lg text-brand-navy/75">
                The first conversation is free — fifteen minutes by phone or
                video so we can both make sure this is the right next step.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
