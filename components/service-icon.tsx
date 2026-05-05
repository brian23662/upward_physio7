import type { Service } from '@/lib/services';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<Service['icon'], JSX.Element> = {
  // Concierge — house with an upward arc above (care that comes to you)
  concierge: (
    <>
      <path
        d="M 16 38 A 18 18 0 0 1 48 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 14 36 L 32 22 L 50 36 L 50 50 L 14 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </>
  ),
  // Occupational — hard hat outline, the workplace pillar
  occupational: (
    <>
      <path
        d="M 12 44 L 52 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 18 44 A 14 14 0 0 1 46 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 26 30 L 26 22 L 38 22 L 38 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  // Strength — barbell silhouette
  strength: (
    <>
      <rect
        x="22"
        y="28"
        width="20"
        height="8"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="14"
        y="22"
        width="6"
        height="20"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect
        x="44"
        y="22"
        width="6"
        height="20"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <line
        x1="8"
        y1="32"
        x2="14"
        y2="32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="32"
        x2="56"
        y2="32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </>
  ),
  // Injury prevention — shield with checkmark
  injury: (
    <>
      <path
        d="M 32 12 L 50 18 L 50 34 C 50 44 42 50 32 54 C 22 50 14 44 14 34 L 14 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M 24 32 L 30 38 L 42 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  // Workplace wellness — upward chart line on a base
  workplace: (
    <>
      <path
        d="M 12 50 L 52 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 14 42 L 24 32 L 32 38 L 50 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 40 18 L 50 18 L 50 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export function ServiceIcon({
  type,
  className,
}: {
  type: Service['icon'];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-10 w-10 text-brand-teal-dark', className)}
      aria-hidden="true"
    >
      {ICON_MAP[type]}
    </svg>
  );
}
