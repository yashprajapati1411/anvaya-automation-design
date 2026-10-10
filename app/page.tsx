'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Layers, Terminal, Zap, Star } from 'lucide-react';
import { PearlSphere } from '@/components/ui/PearlSphere';
import { HairlineRing } from '@/components/ui/HairlineRing';
import { FadeUp } from '@/components/ui/FadeUp';
import { Magnetic } from '@/components/ui/Magnetic';
import { servicesData } from '@/data/servicesData';
import { blogsData } from '@/data/blogsData';
import { guidingPrinciples, projectApproachStages, clientReviews } from '@/data/teamData';

export default function HomePage() {
  const latestBlogs = blogsData.slice(0, 3);
  const [activeProcessTab, setActiveProcessTab] = useState(0);

  // Hero Interactive Tilt & Scroll Physics
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Subtle weighted springs for mouse tilt
  const tiltX = useSpring(useTransform(mouseY, (y) => y * -12), { stiffness: 60, damping: 20 });
  const tiltY = useSpring(useTransform(mouseX, (x) => x * 15), { stiffness: 60, damping: 20 });

  // Scroll animations: sphere drifts down and scales, text fades gently
  const heroSphereY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const heroSphereScale = useTransform(scrollYProgress, [0, 0.9], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.5], [0, -35]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* ================= 1. HERO SECTION (EXACT DESIGN MATCH WITH ORBITAL PEARL SPHERE & 4 FLOATING BADGES) ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100svh-80px)] w-full flex items-center pt-28 md:pt-36 pb-16 overflow-hidden bg-bg"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
            
            {/* LEFT COLUMN: HERO HEADLINE & EDITORIAL CONTENT */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.75rem,5.5vw,5.5rem)] font-extrabold tracking-tight leading-[0.98] text-ink select-none"
              >
                Intelligence,<br />
                refined for<br />
                real business<span className="inline-block w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#A38F78] ml-1.5 align-baseline" />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-base sm:text-lg md:text-xl text-[#5A564F] font-normal max-w-xl leading-relaxed"
              >
                We build AI automation, modern web applications, cloud infrastructure and digital growth systems that help businesses work smarter and scale faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 sm:mt-10 flex items-center"
              >
                <Magnetic>
                  <Link
                    href="/services"
                    className="bg-ink text-ivory hover:bg-neutral-800 transition-all rounded-pill px-8 sm:px-9 py-4 font-semibold text-sm sm:text-base inline-flex items-center gap-3 shadow-sm select-none min-h-[48px]"
                  >
                    <span>Explore our services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: ORBITAL PEARL SPHERE & 4 FLOATING BADGES (MATCHING REFERENCE IMAGE) */}
            <div className="lg:col-span-7 flex items-center justify-center relative w-full select-none py-4 sm:py-8">
              <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
                
                {/* Ambient Soft Radial Champagne Halo behind sphere */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#EBE4D5]/60 via-[#F3EFE6]/40 to-transparent blur-2xl pointer-events-none" />

                {/* Concentric Hairline Orbital Rings */}
                <div className="absolute w-[88%] h-[88%] rounded-full border border-[#DDD7CD]/75 pointer-events-none" />
                <div className="absolute w-[72%] h-[72%] rounded-full border border-[#DDD7CD]/65 pointer-events-none" />
                <div className="absolute w-[56%] h-[56%] rounded-full border border-[#DDD7CD]/55 pointer-events-none" />
                <div className="absolute w-[42%] h-[42%] rounded-full border border-[#DDD7CD]/45 pointer-events-none" />

                {/* Satellite Metallic Beads (Placed along orbital paths matching image) */}
                {/* Bead 1 (Top-right outer orbit): ~22px */}
                <div
                  className="absolute top-[8%] right-[22%] w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-[0_6px_14px_rgba(140,120,90,0.25)] pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 35% 25%, #FFF0D6 0%, #C9B99A 50%, #857252 100%)' }}
                />
                {/* Bead 2 (Top-left inner orbit): ~11px */}
                <div
                  className="absolute top-[28%] left-[24%] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shadow-sm pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 35% 25%, #FFF0D6 0%, #C9B99A 50%, #857252 100%)' }}
                />
                {/* Bead 3 (Far-left middle orbit): ~13px */}
                <div
                  className="absolute top-[48%] left-[8%] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shadow-sm pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 35% 25%, #FFF0D6 0%, #C9B99A 50%, #857252 100%)' }}
                />
                {/* Bead 4 (Right-center middle orbit): ~11px */}
                <div
                  className="absolute top-[54%] right-[16%] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shadow-sm pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 35% 25%, #FFF0D6 0%, #C9B99A 50%, #857252 100%)' }}
                />
                {/* Bead 5 (Bottom-left outer orbit): ~24px */}
                <div
                  className="absolute bottom-[14%] left-[28%] w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-[0_6px_16px_rgba(140,120,90,0.25)] pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 35% 25%, #FFF0D6 0%, #C9B99A 50%, #857252 100%)' }}
                />
                {/* Bead 6 (Bottom outer orbit): ~14px */}
                <div
                  className="absolute bottom-[20%] right-[32%] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-sm pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 35% 25%, #FFF0D6 0%, #C9B99A 50%, #857252 100%)' }}
                />

                {/* Central High-Fidelity Pearl Sphere */}
                <motion.div
                  animate={{ y: [-7, 7, -7] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-[190px] h-[190px] sm:w-[260px] sm:h-[260px] md:w-[310px] md:h-[310px] lg:w-[350px] lg:h-[350px] rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 38% 30%, #FFFFFF 0%, #FAF8F3 25%, #EDE7DD 55%, #D7CEC2 80%, #BDAFA0 100%)',
                    boxShadow: '0 45px 95px rgba(160, 145, 125, 0.22), 0 16px 36px rgba(0, 0, 0, 0.05)',
                  }}
                />

                {/* 4 FLOATING GLASSMORPHISM BADGES (EXACT POSITIONS FROM REFERENCE IMAGE) */}
                {/* 1. AI AUTOMATION (Top) */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-[8%] sm:top-[10%] left-[20%] sm:left-[24%] bg-white/88 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.05)] text-[10px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase text-[#3A3630] flex items-center gap-2 whitespace-nowrap z-20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B3A086] flex-shrink-0" />
                  <span>AI AUTOMATION</span>
                </motion.div>

                {/* 2. WEB APPLICATIONS (Right) */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-[38%] sm:top-[40%] right-[-8px] sm:right-[0%] lg:right-[-12px] bg-white/88 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.05)] text-[10px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase text-[#3A3630] flex items-center gap-2 whitespace-nowrap z-20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B3A086] flex-shrink-0" />
                  <span>WEB APPLICATIONS</span>
                </motion.div>

                {/* 3. CLOUD INFRASTRUCTURE (Bottom-Left) */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-[24%] sm:bottom-[25%] left-[-4px] sm:left-[4%] lg:left-[2%] bg-white/88 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.05)] text-[10px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase text-[#3A3630] flex items-center gap-2 whitespace-nowrap z-20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B3A086] flex-shrink-0" />
                  <span>CLOUD INFRASTRUCTURE</span>
                </motion.div>

                {/* 4. GROWTH & SEO (Bottom-Right) */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute bottom-[14%] sm:bottom-[16%] right-[2%] sm:right-[6%] lg:right-[4%] bg-white/88 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.05)] text-[10px] sm:text-[12px] font-semibold tracking-[0.14em] uppercase text-[#3A3630] flex items-center gap-2 whitespace-nowrap z-20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B3A086] flex-shrink-0" />
                  <span>GROWTH &amp; SEO</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. WHAT WE DO (VERTICAL STACK WITH IMAGES) ================= */}
      <section className="py-24 md:py-32 border-t border-line relative z-20 bg-bg">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="quiet-tag mb-4">What We Do</div>
            <h2 className="text-[clamp(2.25rem,5.5vw,4.75rem)] font-bold tracking-tight leading-[1.04] max-w-4xl text-ink pb-2">
              Everything your business needs to scale.
            </h2>
            <p className="mt-4 text-muted text-base sm:text-lg max-w-3xl leading-relaxed font-light">
              Five core disciplines, engineered to eliminate operational drag, automate manual friction, and build compounding digital systems.
            </p>
          </FadeUp>

          {/* Vertical Grid of Cards with Thematic Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="view"
                  className="quiet-card overflow-hidden block group h-full flex flex-col justify-between border border-line bg-card hover:border-[#cfcbc1] transition-all duration-300"
                >
                  <div>
                    {/* Thematic Image Header Area */}
                    <div className="h-52 w-full relative overflow-hidden bg-neutral-200">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                      {/* Icon overlay */}
                      <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center font-serif text-lg text-ink shadow-sm border border-line">
                        {service.iconSymbol}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-7">
                      <h3 className="font-bold text-2xl tracking-tight text-ink block mb-2.5 group-hover:text-neutral-900 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted text-sm sm:text-base leading-relaxed font-light mb-4">
                        {service.summary}
                      </p>
                      
                      {/* Capabilities pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.disciplines.slice(0, 3).map((d) => (
                          <span
                            key={d}
                            className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-pill bg-[#F0EDE5] text-[#55524B]"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="p-7 pt-4 border-t border-line/60 flex items-center justify-between text-xs sm:text-sm text-ink font-semibold group-hover:text-neutral-900 transition-colors">
                    <span className="tracking-wide">Explore discipline</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. PHILOSOPHY DARK SECTION (3 SCREENSHOT CARDS) ================= */}
      <section className="py-24 md:py-32 bg-dark text-ivory relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <FadeUp>
            <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-champagne mb-4">
              Philosophy &amp; Architecture
            </div>
            <h2 className="text-[clamp(2.25rem,5.5vw,4.75rem)] font-bold tracking-tight leading-[1.04] max-w-4xl text-ivory pb-2">
              We don&apos;t just build software. We build systems that think, run and grow your business.
            </h2>
            <p className="mt-4 text-[#A8A49B] text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Architectural standards that ensure high precision, absolute intellectual property sovereignty, and zero data leakage.
            </p>
          </FadeUp>

          {/* 3 Dark Luxury Cards from Screenshot Reference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 pt-12 border-t border-white/10">
            {guidingPrinciples.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="rounded-[28px] p-8 sm:p-9 bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[12px] font-semibold tracking-[0.16em] uppercase text-[#C9B99A] mb-3">
                    {card.eyebrow}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#A8A49B] font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-8 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-[#C9B99A] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-champagne" />
                  <span className="tracking-wide uppercase text-[11px]">Architectural Standard</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. OUR PROCESS (REDESIGNED INTERACTIVE WORKFLOW) ================= */}
      <section className="py-24 md:py-32 border-t border-line bg-bg">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="quiet-tag mb-4">Our Process</div>
            <h2 className="text-[clamp(2.25rem,5.5vw,4.75rem)] font-bold tracking-tight text-ink leading-[1.04] pb-2">
              How we work.
            </h2>
            <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Predictable, calm, and communicative delivery. Click through our four structured execution phases to explore how every engagement operates.
            </p>
          </FadeUp>

          {/* Interactive Phase Selector */}
          <FadeUp delay={0.1}>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Phase Nav Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {projectApproachStages.map((phase, idx) => {
                const isActive = activeProcessTab === idx;
                return (
                  <button
                    key={phase.step}
                    onClick={() => setActiveProcessTab(idx)}
                    className={`w-full text-left p-6 rounded-[24px] border transition-all duration-300 flex items-start gap-5 ${
                      isActive
                        ? 'bg-surface border-ink shadow-md'
                        : 'bg-card border-line hover:border-neutral-400'
                    }`}
                  >
                    <span
                      className={`text-sm font-bold tracking-widest px-3 py-1 rounded-pill ${
                        isActive ? 'bg-ink text-ivory' : 'bg-[#EAE6DD] text-ink'
                      }`}
                    >
                      {phase.step}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold tracking-tight text-ink">
                        {phase.phase}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted mt-1 font-light">
                        {phase.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Detail Display */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProcessTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="quiet-card rounded-[32px] p-8 sm:p-12 border border-line bg-surface shadow-sm relative overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-6 border-b border-line mb-6">
                    <span className="text-[12px] font-semibold tracking-[0.16em] uppercase text-champagne">
                      Phase {projectApproachStages[activeProcessTab].step}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-pill bg-[#F0EDE5] text-ink border border-line">
                      Active Execution Focus
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-4">
                    {projectApproachStages[activeProcessTab].phase}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-[#8C7A5B] mb-6">
                    {projectApproachStages[activeProcessTab].subtitle}
                  </div>

                  <p className="text-base sm:text-lg text-muted font-light leading-relaxed mb-8">
                    {projectApproachStages[activeProcessTab].desc}
                  </p>

                  <div className="p-6 rounded-[20px] bg-[#F4F1EA] border border-line flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-ink mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted block mb-1">
                        Core Tangible Deliverable
                      </span>
                      <strong className="text-ink text-sm sm:text-base font-semibold">
                        {projectApproachStages[activeProcessTab].deliverable}
                      </strong>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>

      {/* ================= 5. TRUSTED BY OUR CLIENTS (UNIQUE TEMPLATE WITH REVIEWS) ================= */}
      <section className="py-24 md:py-32 border-t border-line bg-surface/60">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="quiet-tag mb-4">Client Verification &amp; Reviews</div>
            <h2 className="text-[clamp(2.25rem,5.5vw,4.75rem)] font-bold tracking-tight text-ink leading-[1.04] pb-2">
              Trusted by our clients.
            </h2>
            <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Direct verification from leadership teams who transformed their manual operations with Anvaya Automation.
            </p>
          </FadeUp>

          {/* Unique 3-Card Reviews Template */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {clientReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="quiet-card rounded-[30px] p-8 sm:p-10 border border-line bg-card flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Star Rating & Domain Tag */}
                  <div className="flex items-center justify-between pb-6 border-b border-line mb-6">
                    <div className="flex items-center gap-1 text-champagne">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C9B99A] text-[#C9B99A]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase px-3 py-1 rounded-pill bg-[#F0EDE5] text-[#55524B]">
                      {review.tag}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-base sm:text-lg text-ink font-normal leading-relaxed mb-6">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Reviewer Meta & Highlight Metric */}
                <div className="pt-6 border-t border-line">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-ink block text-base font-bold">
                        {review.client}
                      </strong>
                      <span className="text-xs text-muted font-normal block">
                        {review.role}, {review.company}
                      </span>
                    </div>
                  </div>

                  {/* Highlight Metric Pill */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-[#F0EDE5] px-3.5 py-1.5 rounded-pill text-xs font-semibold text-ink">
                    <span className="w-2 h-2 rounded-full bg-champagne" />
                    <span>{review.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. INSIGHTS & IDEAS (WITH THEMATIC IMAGES & CONSISTENT FONT) ================= */}
      <section className="py-24 md:py-32 border-t border-line bg-bg">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <FadeUp>
              <div className="quiet-tag mb-4">Editorial Dispatches</div>
              <h2 className="text-[clamp(2.25rem,5.5vw,4.75rem)] font-bold tracking-tight leading-[1.04] text-ink pb-2">
                Insights &amp; ideas.
              </h2>
              <p className="mt-3 text-muted text-base sm:text-lg max-w-xl font-light">
                Engineering perspectives on artificial intelligence, systems architecture, and sustainable enterprise growth.
              </p>
            </FadeUp>
            <Link
              href="/blog"
              className="text-[13px] font-semibold tracking-[0.14em] uppercase text-muted hover:text-ink flex items-center gap-1.5 transition-colors"
            >
              Read all dispatches <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Equal Height Cards with Thematic Real Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="h-full"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  data-cursor="read"
                  className="quiet-card overflow-hidden group flex flex-col justify-between h-full min-h-[380px] border border-line bg-card hover:border-[#cfcbc1] transition-all duration-300"
                >
                  <div>
                    {/* Thematic Thumbnail Area */}
                    <div className="h-48 w-full relative overflow-hidden bg-neutral-200">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-md px-3 py-1 rounded-pill text-ink border border-line">
                          {post.category}
                        </span>
                        <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-ivory drop-shadow-md">
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="font-bold text-xl text-ink block group-hover:text-neutral-900 transition-colors leading-snug mb-3">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed line-clamp-2 font-light">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 border-t border-line/40 flex items-center justify-between text-xs sm:text-sm text-muted mt-auto">
                    <span className="text-[12px] font-medium tracking-[0.14em] uppercase">{post.date}</span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-ink group-hover:translate-x-1 transition-transform">
                      Read Essay <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. PROJECT INITIATION CTA ================= */}
      <section className="relative text-center py-28 md:py-36 border-t border-line overflow-hidden bg-bg">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <FadeUp>
            <div className="max-w-3xl mx-auto">
              <div className="quiet-tag mb-4">Project Initiation</div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-ink leading-[1.02] pb-2">
                Ready to make your business effortless?
              </h2>
              <p className="mt-5 text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Let&apos;s evaluate your existing workflows and blueprint an automated growth engine.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 bg-ink text-ivory px-9 py-4 rounded-pill text-sm font-semibold tracking-wide shadow-subtle hover:bg-neutral-800 transition-all select-none min-h-[48px]"
                    aria-label="Start a project with Anvaya Automation"
                  >
                    <span>Start a project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-ink/30 text-ink px-8 py-4 rounded-pill text-sm font-medium hover:border-ink transition-all min-h-[48px]"
                >
                  <span>View all services</span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
