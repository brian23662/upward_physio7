import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LogoMark } from '@/components/logo';
import { Reveal } from '@/components/reveal';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Daniel Keim, PT, DPT, CSCS',
  description:
    'Meet Daniel Keim — a doctor of physical therapy and certified strength & conditioning specialist combining occupational health, orthopedics, performance, and injury prevention into a single concierge practice.',
};

const credentials = [
  {
    label: 'PT, DPT',
    description:
      'Doctor of Physical Therapy — fully licensed, direct-access provider.',
  },
  {
    label: 'CSCS',
    description:
      'Certified Strength and Conditioning Specialist through the NSCA.',
  },
  {
    label: 'Occupational Health',
    description:
      'Years of full-time clinical experience in occupational and industrial settings.',
  },
];

const experience = [
  {
    title: 'Concierge Physical Therapy',
    body: 'In-home, in-gym, and on-site one-on-one care for active adults, athletes, and busy professionals.',
  },
  {
    title: 'Full-time Occupational Health',
    body: 'Job-site assessments, return-to-work programming, and injury triage for working adults.',
  },
  {
    title: 'Strength & Conditioning',
    body: "Programming for lifters, masters athletes, and post-rehab clients who don't want to stop training.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="arc-pattern relative overflow-hidden">
        <div className="container-tight relative pt-16 pb-24 md:pt-24 md:pb-32">
          <Reveal>
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-brand-navy md:text-7xl">
              {siteConfig.founder.name},
              <br />
              <span className="italic text-brand-teal-dark">
                {siteConfig.founder.credentials}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-brand-navy/75 md:text-xl">
              Doctor of physical therapy. Certified strength coach. The
              clinician behind Upward Physio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bio + portrait */}
      <section className="bg-white">
        <div className="container-tight section">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5" from="left">
              <div className="sticky top-28">
                {/* Stylized portrait card — same brand-tile treatment as the
                    home page so the visual language is consistent */}
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

                <Button asChild variant="outline" className="mt-6 w-full">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="md:col-span-7">
              <p className="eyebrow">The Story</p>
              <h2 className="mt-4 font-display text-3xl text-brand-navy md:text-4xl">
                I started Upward Physio because the model is broken.
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-brand-navy/80">
                <p>
                  Most physical therapy looks like this: fifteen minutes with
                  a tech, a sheet of exercises, and a bill from your
                  insurance you can't decode. The clinician is great. The
                  system around them is the problem.
                </p>
                <p>
                  I work full-time in occupational health, where I see what
                  happens when people get the right care early — and what
                  happens when they don't. Concurrently, I run a concierge
                  practice on the side: training people in their gyms, in
                  their living rooms, and on job sites. Upward Physio brings
                  all of it together.
                </p>
                <p>
                  The mission is simple. Combine occupational health,
                  strength and conditioning, orthopedics, injury prevention,
                  and workplace wellness into a single practice. Charge
                  fairly, deliver care directly, and treat every client like
                  they're the only one on the schedule — because they are.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-12">
                <p className="eyebrow">Credentials</p>
                <ul className="mt-5 space-y-4">
                  {credentials.map((c) => (
                    <li
                      key={c.label}
                      className="flex gap-4 rounded-xl border border-border bg-brand-cream/40 p-5"
                    >
                      <span className="font-display text-lg text-brand-teal-dark">
                        {c.label}
                      </span>
                      <span className="text-sm leading-relaxed text-brand-navy/70">
                        {c.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div className="mt-12">
                <p className="eyebrow">Where I Work</p>
                <ul className="mt-5 space-y-3">
                  {experience.map((e) => (
                    <li
                      key={e.title}
                      className="flex flex-col gap-1 border-l-2 border-brand-teal py-2 pl-5"
                    >
                      <span className="font-display text-xl text-brand-navy">
                        {e.title}
                      </span>
                      <span className="text-sm leading-relaxed text-brand-navy/70">
                        {e.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white">
        <div className="container-tight section">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl">
                Ready to work together?
              </h2>
              <p className="mt-5 max-w-md text-lg text-white/75">
                The first conversation is free. We'll figure out if I'm the
                right fit and what a plan could look like.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:justify-self-end">
              <Button asChild size="lg">
                <Link href="/#contact">
                  Book a free consult
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
