import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Logo components — backed by the SVG files in /public.
 *
 * Files:
 *   - /logo-mark.svg        Mark only (square-ish, 136×122)
 *   - /logo-lockup.svg      Mark + wordmark on light bg (wide, 302×65)
 *   - /logo-mark-white.svg  Mark + wordmark on dark bg (wide, 323×72)
 *
 * Note: despite its filename, logo-mark-white.svg is actually the full
 * lockup in white — it's used as the inverted lockup on the navy footer.
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
  showTagline?: boolean;
  /**
   * Optional className applied directly to the underlying <Image>. Useful
   * for size overrides — e.g. the footer renders the lockup much larger
   * than the navbar.
   */
  imageClassName?: string;
};

/**
 * Full lockup: mark + wordmark. Picks the white file on dark backgrounds,
 * the regular file on light ones. The lockup SVGs already include the
 * wordmark text, so there's no separate text rendered here.
 */
export function LogoLockup({
  className,
  inverted = false,
  showTagline = false,
  imageClassName,
}: LogoLockupProps) {
  const src = inverted ? '/logo-mark-white.svg' : '/logo-lockup.svg';
  const width = inverted ? 323 : 302;
  const height = inverted ? 72 : 65;

  const taglineColor = inverted
    ? 'rgba(255,255,255,0.65)'
    : 'rgba(14,34,49,0.65)';

  return (
    <div className={cn('flex flex-col', className)}>
      <Image
        src={src}
        alt="Upward Physio"
        width={width}
        height={height}
        priority
        className={cn('block h-10 w-auto', imageClassName)}
      />
      {showTagline && (
        <span
          className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: taglineColor }}
        >
          Move Better. Live Better.
        </span>
      )}
    </div>
  );
}
