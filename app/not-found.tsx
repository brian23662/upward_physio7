import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { LogoMark } from '@/components/logo';

export default function NotFound() {
  return (
    <div className="container-tight flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <LogoMark className="h-20 w-20 opacity-40" />
      <p className="eyebrow mt-8">404</p>
      <h1 className="mt-4 font-display text-5xl text-brand-navy md:text-6xl">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-brand-navy/70">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}
