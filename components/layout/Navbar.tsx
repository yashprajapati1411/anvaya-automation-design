'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNearTop, setIsNearTop] = useState(false);
  const [isTopScroll, setIsTopScroll] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isFocused, setIsFocused] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkTouch = () => {
      setIsTouch(window.matchMedia('(hover: none)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      // Invisible hover zone: top 90px of viewport
      setIsNearTop(e.clientY <= 90);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTopScroll(currentScrollY < 80);

      if (currentScrollY > lastScrollY.current + 6) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current - 6) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  // Determine visibility
  // At very top (< 80px), always visible
  // On desktop: visible when near top (mouse in top 90px) or focused
  // On touch: visible when scrolling up
  const isVisible =
    isTopScroll ||
    isFocused ||
    mobileMenuOpen ||
    (isTouch ? scrollDirection === 'up' : isNearTop);

  return (
    <>
      {/* Invisible Hover Zone for Desktop: Top 90px of Viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[90px] z-[48] pointer-events-auto hidden md:block"
        onMouseEnter={() => setIsNearTop(true)}
        aria-hidden="true"
      />

      {/* Main Navbar Header: No full-width background bar */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsFocused(false);
          }
        }}
        onMouseEnter={() => setIsNearTop(true)}
        onMouseLeave={() => setIsNearTop(false)}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none py-5 md:py-6"
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="pointer-events-auto">
              <Link
                href="/"
                className="font-semibold text-lg tracking-tight text-ink hover:opacity-80 transition-opacity select-none"
              >
                {siteConfig.shortName}
              </Link>
            </div>

            {/* Desktop Floating Pill Navbar */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1 bg-surface/90 backdrop-blur-md border border-line rounded-pill p-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] pointer-events-auto"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-medium rounded-pill transition-colors duration-200 select-none ${
                      isActive ? 'text-ivory' : 'text-ink hover:text-neutral-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 bg-ink rounded-pill z-0"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Ghost CTA Button */}
            <div className="hidden md:flex items-center pointer-events-auto">
              <Link
                href="/contact"
                className="border border-ink bg-surface/80 backdrop-blur-sm rounded-pill px-5 py-2.5 text-[13px] font-medium text-ink hover:bg-ink hover:text-ivory transition-all duration-200 shadow-sm"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile Menu Toggle Button: Min 44px tap target */}
            <div className="flex md:hidden items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="px-4 py-2 min-h-[44px] min-w-[70px] rounded-pill border border-line bg-surface/95 backdrop-blur-md text-ink text-xs font-medium tracking-wide uppercase flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Close</span>
                  </>
                ) : (
                  <span>Menu</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 pt-28"
          >
            <div className="flex flex-col space-y-6">
              <span className="quiet-tag block">[ Navigation ]</span>
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-bold tracking-tight block py-1.5 transition-colors ${
                        isActive ? 'text-ink' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-line space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-ink text-ivory py-4 rounded-pill font-medium text-sm min-h-[44px]"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs tracking-wider uppercase text-muted py-2 font-medium">
                hello@anvayaautomation.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
