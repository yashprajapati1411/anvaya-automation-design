'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const FloatingCallPill: React.FC = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide completely on contact page
    if (pathname === '/contact') {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user has scrolled past 500px, but hide when approaching footer (last 450px)
      const nearFooter = windowHeight + scrollY >= documentHeight - 450;
      const shouldShow = scrollY > 500 && !nearFooter && pathname !== '/contact';

      setVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (pathname === '/contact') return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-[max(1.5rem,calc(env(safe-area-inset-bottom)+1rem))] right-6 z-40"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2.5 bg-ink text-ivory px-5 py-3 rounded-full text-[12px] font-medium tracking-[0.14em] uppercase border border-white/10 shadow-subtle hover:bg-neutral-800 transition-all group select-none min-h-[44px]"
            aria-label="Book a call with Anvaya Automation"
          >
            <span className="w-2 h-2 rounded-full bg-champagne" />
            <span>Book a call</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-champagne transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCallPill;
