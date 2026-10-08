'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PearlSphere from '@/components/ui/PearlSphere';
import HairlineRing from '@/components/ui/HairlineRing';
import FadeUp from '@/components/ui/FadeUp';
import CountUp from '@/components/ui/CountUp';
import Magnetic from '@/components/ui/Magnetic';
import { coreValues, teamMembers, philosophyStats } from '@/data/teamData';

const techPills = [
  'n8n',
  'OpenAI',
  'Next.js 14',
  'TypeScript',
  'React',
  'Python',
  'FastAPI',
  'AWS',
  'PostgreSQL',
  'Supabase',
  'Docker',
  'Tailwind CSS',
  'Flutter',
  'LangChain',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-32 pb-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
        {/* HERO SECTION */}
        <FadeUp>
          <div className="mb-20">
            <div className="quiet-tag mb-4">
              [ 01 / 04 · About Anvaya ]
            </div>
            <h1 className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold tracking-[-0.03em] mb-6 leading-[1.02] pb-2">
              A studio built on <em>clarity.</em>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl font-normal leading-relaxed text-[var(--ink)]">
              <span>We help growing businesses replace manual work with </span>
              <span className="text-[#969288]">
                intelligent systems, honest communication, and software that is a genuine pleasure to use.
              </span>
            </p>
          </div>
        </FadeUp>

        {/* OUR STORY SECTION WITH SIGNATURE PEARL SPHERE & HAIRLINE RING */}
        <section className="py-16 sm:py-24 border-t border-[var(--line)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7">
              <FadeUp>
                <div className="quiet-tag mb-4">
                  [ 02 / 04 · Our Story ]
                </div>
                <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] text-[var(--ink)] mb-6 leading-[1.05] pb-2">
                  From small automations to full digital <em>ecosystems.</em>
                </h2>
                <div className="space-y-6 text-base sm:text-lg text-[var(--mut)] font-light leading-relaxed">
                  <p>
                    Anvaya was founded on a simple conviction: technology should reduce friction, not create it. Too many companies find themselves trapped in tool fatigue—juggling disconnected SaaS subscriptions, messy manual handoffs, and software that creates more busywork than it eliminates.
                  </p>
                  <p>
                    We began by designing quiet, deterministic automations that freed key operators from repetitive data entry. As our clients scaled, their needs expanded naturally: from backend webhook routing into full bespoke web platforms, custom mobile applications, and resilient cloud architectures.
                  </p>
                  <p>
                    Today, Anvaya operates as a unified studio. We do not pitch hype or buzzword solutions; we evaluate your actual operational bottlenecks and compose intelligent, high-leverage software engineered to compound value over years.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Signature Object: Pearl Sphere + Hairline Ring */}
            <div className="lg:col-span-5 flex items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
                <HairlineRing size={360} className="scale-90 sm:scale-100" />
                <PearlSphere size={240} className="scale-90 sm:scale-100" />
                {/* Micro Pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--line)] shadow-sm text-[12px] font-medium tracking-[0.14em] uppercase text-[var(--ink)]"
                >
                  ◎ ZERO RESIDUAL FRICTION
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & PHILOSOPHY BAR */}
        <section className="py-16 border-y border-[var(--line)] my-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {philosophyStats.map((stat, idx) => (
              <FadeUp key={stat.label} delay={idx * 0.08}>
                <div className="text-center sm:text-left">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--ink)] mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[12px] text-[var(--mut)] uppercase tracking-[0.14em] font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* DARK VALUES SECTION */}
        <section className="my-16 p-8 sm:p-14 lg:p-20 rounded-[36px] bg-[#121212] text-[#F4F2EE] border border-white/10 relative overflow-hidden">
          <FadeUp>
            <div className="text-[12px] font-medium tracking-[0.14em] uppercase text-[#C9B99A] mb-6">
              [ 03 / 04 · Guiding Principles ]
            </div>
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] mb-12 leading-[1.05] pb-2">
              Values that anchor our <em>craft.</em>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {coreValues.map((val, idx) => (
              <FadeUp key={val.number} delay={idx * 0.08}>
                <div className="p-8 rounded-[28px] bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-[#F4F2EE] flex items-center gap-3">
                    <span className="text-[#C9B99A] text-lg font-medium tracking-[0.14em]">{val.number}</span>
                    <span>{val.title}</span>
                  </div>
                  <p className="text-base text-[#A8A59E] font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 border-b border-[var(--line)]">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="quiet-tag mb-4">
                  [ 04 / 04 · Team &amp; Leadership ]
                </div>
                <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] text-[var(--ink)] leading-[1.05] pb-2">
                  The craftspeople behind the <em>systems.</em>
                </h2>
              </div>
              <p className="text-sm text-[var(--mut)] max-w-sm font-light">
                A multidisciplinary collective of engineers, systems architects, and growth specialists.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <FadeUp key={member.name} delay={idx * 0.1}>
                <div className="quiet-card rounded-[28px] p-7 border border-[var(--line)] bg-[var(--card)] hover:border-[#d0ccc2] transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {/* Placeholder Avatar Box */}
                    <div className="w-full h-56 rounded-[20px] bg-[#EBE8E1] border border-[var(--line)] flex flex-col items-center justify-center text-[var(--mut)] mb-6 relative overflow-hidden group">
                      <div className="w-16 h-16 rounded-full bg-white/80 border border-[var(--line)] flex items-center justify-center font-bold text-xl text-[var(--ink)] mb-2 shadow-sm">
                        {member.name[0]}
                      </div>
                      <span className="text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium">
                        Studio Lead
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[var(--ink)] mb-1">
                      {member.name}
                    </h3>
                    <div className="text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium mb-4">
                      {member.role}
                    </div>
                    <p className="text-sm text-[var(--mut)] font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--line)] flex items-center justify-between text-xs text-ink font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-champagne" />
                      <span className="text-[12px] uppercase tracking-[0.14em]">Verified Practitioner</span>
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY STACK STRIP */}
        <section className="py-16">
          <FadeUp>
            <div className="text-center mb-8">
              <span className="text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium">
                [ TECHNOLOGIES WE COMPOSE WITH ]
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* FINAL CTA BANNER */}
        <FadeUp delay={0.1}>
          <div className="mt-8 p-10 sm:p-14 rounded-[36px] bg-[#121212] text-[#F4F2EE] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <span className="text-[12px] tracking-[0.14em] uppercase text-[#C9B99A] mb-3 block font-medium">
                [ COLLABORATE WITH US ]
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                Let&apos;s build something <em>enduring.</em>
              </h3>
              <p className="text-sm text-[#A8A59E] font-light">
                Tell us about your operational friction or application goals. We respond with a technical review within 24 hours.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F4F2EE] text-[#121212] font-semibold text-sm hover:bg-white transition-all shadow-md min-h-[44px]"
                >
                  Start a conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
