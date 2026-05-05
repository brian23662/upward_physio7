import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Logo components — backed by the SVG files in /public.
 *
 * Files:
 *   - /logo-mark.svg              Mark only (square-ish, 136×122)
 *   - /logo-lockup-full.svg       Full lockup with tagline baked in (701×157, dark-on-light)
 *   - /logo-lockup.svg            Older lockup without tagline (302×65, dark-on-light)
 *   - /logo-mark-white.svg        Lockup in white for dark backgrounds (323×72)
 *
 * The "full" lockup is the high-fidelity version — mark + "UpwardPhysio"
 * wordmark + "MOVE BETTER. LIVE BETTER." tagline all as crisp vector paths.
 * It's the default for light backgrounds. On dark backgrounds the older
 * white file is still used (the full lockup is dark-on-transparent and
 * doesn't have a white variant).
 */

type LogoMarkProps = {
  className?: string;
  /** When true, renders the mark in white — for use on dark backgrounds. */
  inverted?: boolean;
};

/**
 * The two-arc mark only (no wordmark).
 *
 * There's no dedicated white-only mark file, so when `inverted` is true
 * we render the regular mark with a CSS filter to flip it to white.
 * `brightness-0 invert` is the standard Tailwind trick for this — it
 * blacks out the SVG, then inverts black to white.
 */
export function LogoMark({ className, inverted = false }: LogoMarkProps) {
  return (
    <Image
      src="/logo-mark.svg"
      alt=""
      aria-hidden="true"
      width={136}
      height={122}
      priority
      className={cn(
        'block',
        inverted && 'brightness-0 invert',
        className,
      )}
    />
  );
}

type LogoLockupProps = {
  className?: string;
  inverted?: boolean;
  /**
   * Optional className applied directly to the underlying <Image>. Useful
   * for size overrides — e.g. the footer renders the lockup much larger
   * than the navbar.
   */
  imageClassName?: string;
};

/**
 * Full lockup: mark + wordmark + tagline. On light backgrounds we use the
 * high-fidelity full lockup SVG (which has the tagline baked in as crisp
 * vector paths). On dark backgrounds we fall back to the white lockup
 * file. The `showTagline` prop is gone — the new lockup includes the
 * tagline as part of the artwork, so there's nothing to toggle.
 */
export function LogoLockup({
  className,
  inverted = false,
  imageClassName,
}: LogoLockupProps) {
  // Different files have different aspect ratios — use the correct
  // intrinsic dimensions so Next/Image preserves quality.
  const src = inverted ? '/logo-mark-white.svg' : '/logo-lockup-full.svg';
  const width = inverted ? 323 : 701;
  const height = inverted ? 72 : 157;

  return (
    <div className={cn('flex flex-col', className)}>
      <Image
        src={src}
        alt="Upward Physio — Move Better. Live Better."
        width={width}
        height={height}
        priority
        className={cn('block h-12 w-auto', imageClassName)}
      />
    </div>
  );
}
