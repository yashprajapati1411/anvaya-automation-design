'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteData';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-ivory pt-24 pb-10 relative overflow-hidden">
      {/* Background Pearl Sphere Glow: Behind content */}
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

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* 12-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10 items-start">
          {/* Left Column (5 cols): Heading & Direct Inquiry */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[12px] uppercase tracking-[0.14em] font-medium text-champagne block">
              [ Connect With Studio ]
            </span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.04] max-w-md">
              Let&apos;s build what&apos;s next.
            </h3>
            <p className="text-sm sm:text-base text-[#A8A49B] font-light max-w-sm leading-relaxed">
              Quiet luxury AI automation, custom software engineering, and compound growth infrastructure composed into one seamless studio.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ivory text-ink px-6 py-3 rounded-pill text-xs sm:text-sm font-semibold tracking-wide hover:bg-white transition-all shadow-sm"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-ivory px-5 py-3 rounded-pill text-xs sm:text-sm font-medium hover:border-white transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-champagne" />
                <span>WhatsApp</span>
              </a>
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
                    Projects &amp; Work
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
                <li>
                  <Link href="/privacy" className="hover:text-ivory transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-ivory transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Contacts & Hours */}
            <div className="col-span-2 sm:col-span-1">
              <span className="text-ivory font-semibold text-sm block mb-3.5 tracking-tight">
                Direct Touchpoints
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:contact@anvayaautomation.com"
                    className="hover:text-ivory transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-champagne" />
                    <span>contact@anvayaautomation.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919313220796"
                    className="hover:text-ivory transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-champagne" />
                    <span>+91 9313220796</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919624865617"
                    className="hover:text-ivory transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-champagne" />
                    <span>+91 9624865617</span>
                  </a>
                </li>
                <li className="pt-2 text-xs text-[#827D74]">
                  {siteConfig.workingHours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Oversized Brand Watermark: ANVAYA on Line 1, AUTOMATION on Line 2 (Identical font color and boldness) */}
        <div className="select-none text-left overflow-hidden pt-12 pb-6 border-b border-white/5">
          <div className="font-bold tracking-tight uppercase leading-[0.88] text-[#222222] text-[clamp(2.75rem,9.5vw,120px)] space-y-1">
            <div className="tracking-tight text-[#222222]">ANVAYA</div>
            <div className="tracking-tight text-[#222222]">AUTOMATION</div>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#827D74] font-medium tracking-wide gap-4">
          <div>
            © {new Date().getFullYear()} Anvaya Automation. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <Link href="/privacy" className="hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-ivory transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-ivory transition-colors">
              contact@anvayaautomation.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
