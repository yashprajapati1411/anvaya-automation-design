'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Code2, LineChart, Sparkles } from 'lucide-react';
import { PearlSphere } from '@/components/ui/PearlSphere';
import { HairlineRing } from '@/components/ui/HairlineRing';
import { FadeUp } from '@/components/ui/FadeUp';
import { Magnetic } from '@/components/ui/Magnetic';
import { guidingPrinciples, projectApproachStages } from '@/data/teamData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-ink pt-32 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* HERO SECTION */}
        <FadeUp>
          <div className="mb-20">
            <div className="quiet-tag mb-4">About Anvaya Automation</div>
            <h1 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold tracking-tight mb-6 leading-[1.02] pb-2">
              A studio built on clarity.
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl font-normal leading-relaxed text-ink">
              <span>We help growing companies replace manual operational drag with </span>
              <span className="text-[#88847A]">
                deterministic automation, modern software architecture, and systems that compound revenue.
              </span>
            </p>
          </div>
        </FadeUp>

        {/* OUR STORY SECTION (REDUCED & PUNCHY) */}
        <section className="py-16 sm:py-24 border-t border-line">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7">
              <FadeUp>
                <div className="quiet-tag mb-4">Our Story</div>
                <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold tracking-tight text-ink mb-6 leading-[1.04] pb-2">
                  From eliminating friction to unified digital ecosystems.
                </h2>
                <div className="space-y-6 text-base sm:text-lg text-muted font-light leading-relaxed">
                  <p>
                    Anvaya Automation was founded on a singular conviction: technology should reduce effort, not manufacture complexity. Too many growing businesses find themselves burdened by tool fatigue—juggling disconnected SaaS subscriptions, fragile manual spreadsheets, and software that creates more busywork than it eliminates.
                  </p>
                  <p>
                    We operate as a focused engineering studio. We do not pitch hype, speculative promises, or buzzwords. We conduct rigorous operational audits, pinpoint high-ROI friction, and engineer deterministic software composed to run quietly, dependably, and at scale.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Signature Object: Pearl Sphere + Hairline Ring */}
            <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
                <HairlineRing size={360} className="scale-90 sm:scale-100" />
                <PearlSphere size={240} className="scale-90 sm:scale-100" />
              </div>
            </div>
          </div>
        </section>

        {/* GUIDING PRINCIPLES (REDESIGNED 3-CARD DARK SECTION FROM SCREENSHOT) */}
        <section className="my-16 p-8 sm:p-14 lg:p-20 rounded-[36px] bg-[#121212] text-[#F4F2EE] border border-white/10 relative overflow-hidden">
          <FadeUp>
            <div className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#C9B99A] mb-4">
              Guiding Principles
            </div>
            <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold tracking-tight mb-12 leading-[1.04] pb-2 text-white">
              Values that anchor our craft.
            </h2>
          </FadeUp>

          {/* 3 Dark Cards from Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {guidingPrinciples.map((val, idx) => (
              <FadeUp key={val.title} delay={idx * 0.1}>
                <div className="p-8 sm:p-9 rounded-[28px] bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#C9B99A] mb-3">
                      {val.eyebrow}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-white">
                      {val.title}
                    </h3>
                    <p className="text-base text-[#A8A59E] font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="pt-8 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-[#C9B99A] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-champagne" />
                    <span className="tracking-wider uppercase text-[11px]">Architectural Mandate</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* HOW WE APPROACH EVERY PROJECT (REPLACING FOUNDERS SECTION) */}
        <section className="py-20 border-b border-line">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="quiet-tag mb-4">Engagement Blueprint</div>
                <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold tracking-tight text-ink leading-[1.04] pb-2">
                  How we approach every project.
                </h2>
              </div>
              <p className="text-base text-muted max-w-md font-light leading-relaxed">
                A disciplined, four-phase engineering framework engineered for transparent delivery, rapid velocity, and absolute reliability.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectApproachStages.map((stage, idx) => (
              <FadeUp key={stage.step} delay={idx * 0.08}>
                <div className="quiet-card rounded-[28px] p-7 border border-line bg-card hover:border-[#cfcbc1] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-ink text-ivory flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                      {stage.step}
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-ink mb-1">
                      {stage.phase}
                    </h3>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#8C7A5B] mb-3">
                      {stage.subtitle}
                    </div>
                    <p className="text-sm text-muted font-light leading-relaxed mb-6">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-line/70">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted block mb-1">
                      Key Deliverable:
                    </span>
                    <span className="text-xs font-bold text-ink leading-snug block">
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <FadeUp delay={0.1}>
          <div className="mt-8 p-10 sm:p-14 lg:p-16 rounded-[36px] bg-[#121212] text-[#F4F2EE] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-[12px] tracking-[0.16em] uppercase text-[#C9B99A] mb-3 block font-semibold">
                COLLABORATE WITH US
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-white">
                Let&apos;s build something enduring.
              </h3>
              <p className="text-base text-[#A8A59E] font-light leading-relaxed">
                Tell us about your operational friction or application goals. We evaluate your requirements and respond with a technical review within 24 hours.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Magnetic>
                <Link
                  href="/contact"
                  className="luxury-btn-light px-8 py-4 rounded-pill text-[#121212] font-semibold text-sm shadow-md min-h-[46px] whitespace-nowrap inline-flex items-center gap-2.5"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
