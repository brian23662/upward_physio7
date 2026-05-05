import { cn } from '@/lib/utils';

type LogoMarkProps = {
  className?: string;
  /** When true, both arcs use white — for use on the dark navy footer/nav. */
  inverted?: boolean;
  /** When true, the upper arc slowly rotates — used once on the hero. */
  animated?: boolean;
};

/**
 * The two-arc mark from the Upward Physio brand guide.
 *
 *  - Upper arc (teal):  Support & Care
 *  - Lower arc (navy):  Stability & Strength
 *  - Together:          Balance & Upward Progress
 *
 * Constructed with two stroked arcs sharing a common center, mirrored
 * vertically and offset slightly so they read as "opposing forces" — exactly
 * the dynamic equilibrium described in the brand sheet.
 */
export function LogoMark({
  className,
  inverted = false,
  animated = false,
}: LogoMarkProps) {
  const upper = inverted ? '#FFFFFF' : '#3FBFB5';
  const lower = inverted ? '#FFFFFF' : '#0E2231';

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('block', className)}
      aria-hidden="true"
    >
      {/* Upper arc: opens downward, sits in the top half */}
      <path
        d="M 18 50 A 32 32 0 0 1 82 50"
        fill="none"
        stroke={upper}
        strokeWidth="14"
        strokeLinecap="round"
        className={animated ? 'origin-center animate-fade-in' : undefined}
      />
      {/* Lower arc: opens upward, sits in the bottom half, slightly larger
         to mimic the weighted "foundation" feel from the original mark */}
      <path
        d="M 14 52 A 36 36 0 0 0 86 52"
        fill="none"
        stroke={lower}
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Full lockup: mark + wordmark side-by-side, exactly the layout used in
 * the navbar and footer. Wordmark splits "Upward" (navy) and "Physio" (teal)
 * the way the brand guide shows.
 */
export function LogoLockup({
  className,
  inverted = false,
  showTagline = false,
}: {
  className?: string;
  inverted?: boolean;
  showTagline?: boolean;
}) {
  const wordPrimary = inverted ? '#FFFFFF' : '#0E2231';
  const wordSecondary = inverted ? '#7AD3CB' : '#3FBFB5';
  const taglineColor = inverted
    ? 'rgba(255,255,255,0.65)'
    : 'rgba(14,34,49,0.65)';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <LogoMark className="h-9 w-9 shrink-0" inverted={inverted} />
      <div className="flex flex-col leading-none">
        <span className="font-display text-2xl tracking-tight">
          <span style={{ color: wordPrimary }}>Upward</span>
          <span style={{ color: wordSecondary }}>Physio</span>
        </span>
        {showTagline && (
          <span
            className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.22em]"
            style={{ color: taglineColor }}
          >
            Move Better. Live Better.
          </span>
        )}
      </div>
    </div>
  );
}
