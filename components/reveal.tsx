'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds, e.g. 0.1 for index-based stagger */
  delay?: number;
  /** Direction the content drifts from. Defaults to "up". */
  from?: 'up' | 'left' | 'right';
  className?: string;
};

/**
 * Lightweight wrapper for scroll-into-view fade reveals.
 * Respects prefers-reduced-motion automatically.
 */
export function Reveal({
  children,
  delay = 0,
  from = 'up',
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset = reduce
    ? { x: 0, y: 0 }
    : from === 'left'
      ? { x: -24, y: 0 }
      : from === 'right'
        ? { x: 24, y: 0 }
        : { x: 0, y: 24 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom easing for a calm "settle"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
