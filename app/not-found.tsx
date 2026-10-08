import React from 'react';
import Link from 'next/link';
import PearlSphere from '@/components/ui/PearlSphere';
import HairlineRing from '@/components/ui/HairlineRing';
import Magnetic from '@/components/ui/Magnetic';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="max-w-xl w-full text-center">
        {/* Visual Orb */}
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <HairlineRing size={180} />
          <PearlSphere size={120} />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[var(--card)] border border-[var(--line)] text-[var(--mut)] mb-6">
          [ 404 · PAGE NOT FOUND ]
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-[var(--ink)]">
          The quiet void of <em>space.</em>
        </h1>

        <p className="text-base sm:text-lg text-[var(--mut)] font-light leading-relaxed mb-10 max-w-md mx-auto">
          The requested coordinate does not exist or has been recomposed. Return safely to our studio overview.
        </p>

        <div className="flex justify-center">
          <Magnetic>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-sm hover:bg-black transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" /> Return to studio
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
