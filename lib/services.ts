/**
 * Each service has a slug that maps to /app/services/[slug]/page.tsx.
 * Add a service here and it shows up on the home grid automatically.
 */
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  whoItsFor: string[];
  icon: 'concierge' | 'occupational' | 'strength' | 'injury' | 'workplace';
};

export const services: Service[] = [
  {
    slug: 'concierge-physical-therapy',
    title: 'Concierge Physical Therapy',
    shortTitle: 'Concierge PT',
    tagline: 'Care that comes to you.',
    description:
      'One-on-one, cash-pay physical therapy delivered in your home, your gym, or wherever you train and recover.',
    longDescription:
      "Concierge physical therapy means no insurance gatekeeping, no rotating providers, no rushed visits. You get a full hour, every visit, with the same doctor of physical therapy. Care is delivered where you actually live and move — your home gym, your training facility, or your living room — so the rehab fits the life you're trying to get back to.",
    benefits: [
      'Full 60-minute one-on-one sessions',
      'Care in your home, gym, or workplace',
      'Direct access — no referral required',
      'Custom programming you can actually follow',
      'Texting access between sessions',
    ],
    whoItsFor: [
      'Active adults rebuilding from an injury',
      'Athletes returning to sport',
      'Busy professionals who can\'t afford clinic wait times',
      'Anyone tired of the 15-minutes-with-an-aide model',
    ],
    icon: 'concierge',
  },
  {
    slug: 'occupational-health',
    title: 'Occupational Health',
    shortTitle: 'Occupational Health',
    tagline: 'Where the body meets the job.',
    description:
      'Job-site assessments, return-to-work programming, and ergonomic care for workers and the companies that employ them.',
    longDescription:
      "Years of full-time occupational health practice means I understand both sides of the work injury — the physical demands of the job, and the systems that determine whether someone gets back to it. I work directly with workers on conditioning and rehab, and partner with employers on ergonomic assessments, post-offer testing, and on-site care strategies.",
    benefits: [
      'Functional capacity evaluations',
      'Job-specific return-to-work programs',
      'Ergonomic assessments',
      'Post-offer employment testing guidance',
      'On-site injury triage strategy',
    ],
    whoItsFor: [
      'Workers recovering from on-the-job injuries',
      'Tradespeople, first responders, and physical-labor pros',
      'Employers wanting to lower injury rates',
      'HR and safety teams building wellness programs',
    ],
    icon: 'occupational',
  },
  {
    slug: 'strength-conditioning',
    title: 'Strength & Conditioning',
    shortTitle: 'Strength & Conditioning',
    tagline: 'Build the engine. Bulletproof the chassis.',
    description:
      "Evidence-based strength programming from a Certified Strength and Conditioning Specialist who's also a doctor of physical therapy.",
    longDescription:
      "The CSCS and the DPT in the same provider is rare — and it matters. Programs are built on the same load-management and tissue-capacity principles I use in rehab, scaled up for performance. Whether you're chasing a PR, prepping for a season, or just want to be strong for the next forty years, the framework is the same: train hard, recover smart, get out of pain.",
    benefits: [
      'Individualized strength programming',
      'Movement screens before any heavy loading',
      'Built around your schedule and equipment',
      'Integrated with rehab when needed',
      'Long-term, not bootcamp-style',
    ],
    whoItsFor: [
      'Lifters and recreational athletes',
      'Post-rehab clients ready for performance',
      'Masters athletes (40+) wanting to keep training',
      'Anyone who wants programming, not random workouts',
    ],
    icon: 'strength',
  },
  {
    slug: 'injury-prevention',
    title: 'Injury Prevention',
    shortTitle: 'Injury Prevention',
    tagline: 'Find it before it finds you.',
    description:
      'Movement screens, mobility work, and load-management plans that keep small issues from becoming big ones.',
    longDescription:
      "Most injuries are predictable in hindsight — a tight hip, a weak link, a training spike no one tracked. Injury prevention work catches those signals early. Expect a deep movement assessment, a clear written plan, and the kind of accountability that actually keeps you healthy through a season or a build-up.",
    benefits: [
      'Comprehensive movement screening',
      'Targeted mobility and tissue work',
      'Training-load management',
      'Written prevention plans',
      'Periodic re-screens to track progress',
    ],
    whoItsFor: [
      'Endurance athletes in heavy training blocks',
      'Lifters pushing strength PRs',
      'Active adults with recurring "tweaks"',
      'Teams and groups looking to lower injury rates',
    ],
    icon: 'injury',
  },
  {
    slug: 'workplace-wellness',
    title: 'Workplace Wellness',
    shortTitle: 'Workplace Wellness',
    tagline: 'Healthier teams. Lower claims. Better culture.',
    description:
      'Consulting and on-site programs that help organizations cut injury costs and build a culture of movement.',
    longDescription:
      "Forward-looking organizations don't wait for injuries to happen. I partner with companies on wellness program design, on-site movement screens, ergonomic audits, and educational sessions. The goal is simple: fewer injuries, lower workers'-comp exposure, and a workforce that feels genuinely cared for.",
    benefits: [
      'Custom wellness program design',
      'On-site screens and education',
      'Ergonomic audits at scale',
      'Manager training on injury reporting',
      'Quarterly health reporting',
    ],
    whoItsFor: [
      'Companies with physical-labor workforces',
      'Offices wanting to address sedentary-work issues',
      'Safety and HR leaders building wellness ROI',
      'Organizations preparing for OSHA emphasis programs',
    ],
    icon: 'workplace',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
