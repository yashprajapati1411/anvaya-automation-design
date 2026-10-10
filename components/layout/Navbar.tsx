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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Reveal navbar only when mouse is within top 90px of screen
      setIsNearTop(e.clientY <= 90);
    };

    // Initial check
    setIsScrolled(window.scrollY > 30);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
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

  // Navbar vanishes on scroll and only reappears when user points to navbar area
  const isVisible = !isScrolled || isNearTop || mobileMenuOpen || isFocused;

  return (
    <>
      {/* Invisible Hover Zone for Desktop: Top 90px of Viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[90px] z-[48] pointer-events-auto hidden md:block"
        onMouseEnter={() => setIsNearTop(true)}
        aria-hidden="true"
      />

      {/* Main Navbar Header */}
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -110,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo: Anvaya Automation (Enlarged to fill header space elegantly) */}
            <div className="pointer-events-auto">
              <Link
                href="/"
                className="font-bold text-2xl lg:text-[26px] tracking-tight text-ink hover:opacity-85 transition-opacity select-none whitespace-nowrap"
              >
                Anvaya Automation
              </Link>
            </div>

            {/* Desktop Floating Pill Navbar with Generous Padding & Gaps */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-2 lg:gap-3 bg-surface/90 backdrop-blur-md border border-line rounded-pill p-2 shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-auto"
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
                    className={`relative px-5 lg:px-6 py-2.5 text-[14px] font-semibold rounded-pill transition-colors duration-200 select-none whitespace-nowrap ${
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

            {/* Luxury CTA Button */}
            <div className="hidden md:flex items-center pointer-events-auto">
              <Link
                href="/contact"
                className="luxury-btn-light rounded-pill px-6 py-2.5 text-[14px] font-semibold whitespace-nowrap shadow-xs"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile Menu Toggle Button: Min 44px tap target */}
            <div className="flex md:hidden items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="px-5 py-2.5 min-h-[44px] min-w-[70px] rounded-pill border border-line bg-surface/95 backdrop-blur-md text-ink text-xs font-semibold tracking-wide uppercase flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
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
