'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-ivory pt-24 pb-10 relative overflow-hidden">
      {/* Background Pearl Sphere Glow: Behind content (z-0, opacity 0.15, kept clear of heading) */}
      <div
        className="pearl-orb absolute -right-20 -bottom-32 pointer-events-none select-none z-0"
        style={{
          width: '580px',
          height: '580px',
          opacity: 0.15,
          boxShadow: 'none',
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* 12-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10 items-start">
          {/* Left Column (5 cols): Heading & Direct Inquiry */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[12px] uppercase tracking-[0.14em] font-medium text-champagne block">
              [ Connect With Studio ]
            </span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.04] max-w-md">
              Let&apos;s build what&apos;s <em>next.</em>
            </h3>
            <p className="text-sm sm:text-base text-[#A8A49B] font-light max-w-sm leading-relaxed">
              Quiet luxury AI automation, custom software engineering, and compound growth infrastructure composed into one seamless studio.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ivory text-ink px-6 py-3 rounded-pill text-xs sm:text-sm font-semibold tracking-wide hover:bg-white transition-all shadow-sm"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Columns (7 cols): Balanced 3-column navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-[13px] text-[#A8A49B] leading-relaxed">
            {/* Column 1: Services */}
            <div>
              <span className="text-ivory font-semibold text-sm block mb-3.5 tracking-tight">
                Services
              </span>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/ai-automation" className="hover:text-ivory transition-colors">
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-applications" className="hover:text-ivory transition-colors">
                    Web Applications
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-development" className="hover:text-ivory transition-colors">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud-infrastructure" className="hover:text-ivory transition-colors">
                    Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="hover:text-ivory transition-colors">
                    SEO Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" className="hover:text-ivory transition-colors">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Studio / Company */}
            <div>
              <span className="text-ivory font-semibold text-sm block mb-3.5 tracking-tight">
                Company
              </span>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-ivory transition-colors">
                    About Studio
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-ivory transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-ivory transition-colors">
                    Dispatches &amp; Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-ivory transition-colors">
                    Contact Studio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect & Hours */}
            <div className="col-span-2 sm:col-span-1">
              <span className="text-ivory font-semibold text-sm block mb-3.5 tracking-tight">
                Connect
              </span>
              <ul className="space-y-2">
                {siteConfig.socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ivory transition-colors"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2 text-xs text-[#827D74]">
                  {siteConfig.workingHours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Oversized Brand Watermark */}
        <div className="select-none text-left overflow-hidden pt-8 pb-4">
          <div className="font-bold tracking-[-0.05em] leading-[0.85] text-[#222222] text-[clamp(64px,18vw,200px)]">
            Anvaya
          </div>
        </div>

        {/* Bottom copyright and legal line: Inter Tight font, 12px, no monospace */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#827D74] font-medium tracking-wide gap-4">
          <div>
            © {new Date().getFullYear()} Anvaya Automation. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Quiet Luxury AI &amp; Software Studio</span>
            <span>·</span>
            <Link href="/contact" className="hover:text-ivory transition-colors">
              hello@anvayaautomation.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
