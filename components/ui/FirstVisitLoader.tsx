'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FirstVisitLoader: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user already saw the loader in this session
    const hasVisited = sessionStorage.getItem('anvaya_has_loaded');
    if (hasVisited) {
      return;
    }

    setLoading(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem('anvaya_has_loaded', 'true');
            setLoading(false);
          }, 450);
          return 100;
        }
        // Smooth non-linear increment
        const increment = Math.max(1, Math.floor((100 - prev) / 6));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="first-visit-curtain"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#F4F2EE] flex flex-col items-center justify-center text-[var(--ink)] select-none pointer-events-auto"
        >
          {/* Central Sphere and Animated Drawing Ring */}
          <div className="relative w-44 h-44 flex items-center justify-center mb-8">
            {/* Drawing Hairline Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#E4E1DA"
                strokeWidth="1"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#161616"
                strokeWidth="1.2"
                strokeDasharray="289"
                strokeDashoffset={289 - (289 * progress) / 100}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </svg>

            {/* Pearl Sphere */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="pearl-orb w-24 h-24"
            />
          </div>

          {/* Wordmark Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--ink)] block mb-3">
              ANVAYA AUTOMATION
            </span>
            <div className="text-[12px] font-medium text-[var(--mut)] tracking-[0.14em] uppercase">
              [ {progress.toString().padStart(3, '0')} / 100 ]
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FirstVisitLoader;
