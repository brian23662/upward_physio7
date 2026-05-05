'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type VideoPlayerProps = {
  /** Public path to the video file (e.g. /videos/hero.mp4) */
  src: string;
  /** Optional poster image shown before the video loads/plays */
  poster?: string;
  className?: string;
  /** Should the video autoplay muted in the background? */
  autoPlay?: boolean;
  /** Show native controls? */
  controls?: boolean;
  loop?: boolean;
};

/**
 * Performance-conscious video component:
 *  - uses `preload="none"` until the element scrolls near the viewport
 *  - swaps in the real video source via IntersectionObserver
 *  - falls back to a poster image so the layout never jumps
 */
export function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = true,
  controls = false,
  loop = true,
}: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Bail out early if IntersectionObserver isn't available
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: '200px' }, // pre-load slightly before it scrolls into view
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={cn('h-full w-full object-cover', className)}
      poster={poster}
      autoPlay={autoPlay}
      muted
      loop={loop}
      playsInline
      controls={controls}
      preload={shouldLoad ? 'metadata' : 'none'}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore — `loading` is non-standard on <video> but supported as a hint
      loading="lazy"
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
