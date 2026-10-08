'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PearlSphere } from '@/components/ui/PearlSphere';
import { HairlineRing } from '@/components/ui/HairlineRing';
import { FadeUp } from '@/components/ui/FadeUp';
import { CountUp } from '@/components/ui/CountUp';
import { Magnetic } from '@/components/ui/Magnetic';
import { servicesData } from '@/data/servicesData';
import { projectsData } from '@/data/projectsData';
import { blogsData } from '@/data/blogsData';
import { philosophyStats } from '@/data/teamData';

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const latestBlogs = blogsData.slice(0, 3);

  return (
    <div className="relative overflow-hidden w-full">
      {/* ================= 1. HERO SECTION ([ 01 / 05 ]) ================= */}
      <section className="relative min-h-[100svh] flex flex-col justify-between items-center px-6 md:px-10 pt-24 md:pt-28 pb-8 md:pb-12 overflow-hidden">
        {/* Main Content Area: Centered Sphere + Headline */}
        <div className="w-full max-w-[1280px] mx-auto flex-1 flex flex-col justify-center items-center relative my-auto py-4">
          {/* Sized Sphere and Orbit Container: Never touches navbar or CTA */}
          <div className="relative flex items-center justify-center" style={{ width: 'min(68vh, 62vw)', height: 'min(68vh, 62vw)', maxWidth: '480px', maxHeight: '480px' }}>
            {/* Hairline Orbit Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-125">
              <HairlineRing size="100%" />
            </div>

            {/* Signature Pearl Sphere */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <PearlSphere size="100%" />
            </div>

            {/* Hero Big Headline Centered on the Sphere */}
            <div className="relative z-10 px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.75rem,7.5vw,5.5rem)] font-bold tracking-[-0.035em] leading-[0.96] text-ink select-none pb-2"
              >
                Intelligence,
                <br />
                <em>refined.</em>
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Hero Bottom Row: Shares identical max-w-[1280px] and side padding with navbar */}
        <div className="w-full max-w-[1280px] mx-auto relative z-10 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-xs text-muted border-t border-line/60 pt-6">
            {/* Left Description */}
            <div className="text-center md:text-left leading-relaxed max-w-[320px] text-[13px] text-muted font-normal order-2 md:order-1">
              AI automation, web, cloud, mobile and growth marketing, composed into one seamless studio.
            </div>

            {/* Centre CTA Button with Clear Gap */}
            <div className="order-1 md:order-2">
              <Magnetic>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-ink text-ivory px-7 py-3.5 rounded-pill text-[13px] font-semibold tracking-wide shadow-sm hover:bg-neutral-800 transition-all select-none min-h-[44px]"
                  aria-label="Explore Anvaya Automation services"
                >
                  <span>Explore services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>

            {/* Right Scroll Indicator */}
            <div className="text-center md:text-right text-[12px] font-medium tracking-[0.14em] uppercase text-muted order-3">
              Scroll to discover
              <span className="block text-ink font-semibold mt-0.5">[ 01 / 05 ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. WHAT WE DO ([ 02 / 05 ]) ================= */}
      <section className="py-20 md:py-28 border-t border-line">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
          <FadeUp>
            <div className="quiet-tag mb-4">[ 02 / 05 ] What we do</div>
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] max-w-3xl text-ink pb-2">
              Everything your business needs to <em>scale.</em>
            </h2>
            <p className="mt-4 text-muted text-base max-w-2xl leading-relaxed font-light">
              Six core disciplines, unified under one studio. Designed to remove operational drag and engineer compounding revenue.
            </p>
          </FadeUp>

          {/* Horizontal Scroll Row of 6 Cards */}
          <div className="flex gap-5 mt-12 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex-none w-[270px] sm:w-[300px]"
              >
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="view"
                  className="quiet-card block p-7 min-h-[290px] flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full border border-ink flex items-center justify-center font-serif text-lg text-ink group-hover:bg-ink group-hover:text-ivory transition-colors">
                      {service.iconSymbol}
                    </div>
                    <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <b className="font-bold text-xl tracking-tight text-ink block mb-2 group-hover:text-neutral-900 transition-colors">
                      {service.title}
                    </b>
                    <small className="text-muted text-[13px] leading-relaxed block font-light">
                      {service.summary}
                    </small>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. PHILOSOPHY DARK SECTION ([ 03 / 05 ]) ================= */}
      <section className="py-24 md:py-32 bg-dark text-ivory relative overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
          <FadeUp>
            <div className="text-[12px] font-medium tracking-[0.14em] uppercase text-champagne mb-4">
              [ 03 / 05 ] Philosophy
            </div>
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] max-w-4xl text-ivory pb-2">
              We don&apos;t just build software. We build systems that{' '}
              <em>think</em>, <em>run</em> and <em>grow</em> your business.
            </h2>
          </FadeUp>

          {/* 4 Stats Grid with CountUp */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-16 pt-12 border-t border-white/10">
            {philosophyStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-ivory">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[12px] text-[#A8A49B] mt-2 font-medium tracking-[0.14em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. FEATURED PROJECTS ================= */}
      <section className="py-24 md:py-32 border-t border-line">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <FadeUp>
              <div className="quiet-tag mb-4">[ Selected Work ]</div>
              <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] text-ink leading-[1.05] pb-2">
                Crafted for <em>clarity.</em>
              </h2>
            </FadeUp>

            <Link
              href="/projects"
              className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <span>View all case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="view"
                  className="quiet-card overflow-hidden block group h-full flex flex-col justify-between"
                >
                  <div
                    className="h-48 w-full p-6 flex flex-col justify-between"
                    style={{ background: project.coverGradient }}
                  >
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase bg-surface/85 backdrop-blur-sm px-3 py-1 rounded-pill w-fit text-ink border border-line">
                      {project.serviceTag}
                    </span>
                    <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">
                      {project.year}
                    </span>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <b className="text-xl font-bold tracking-tight text-ink block mb-2 group-hover:text-neutral-900 transition-colors">
                        {project.title.split(':')[0]}
                      </b>
                      <p className="text-sm text-muted leading-relaxed line-clamp-3 font-light">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-xs">
                      <span className="text-ink font-semibold">
                        {project.metrics[0].value} {project.metrics[0].label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. PROCESS TIMELINE ([ 04 / 05 ]) ================= */}
      <section className="py-24 md:py-32 border-t border-line">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
          <FadeUp>
            <div className="quiet-tag mb-4">[ 04 / 05 ] Process</div>
            <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] text-ink leading-[1.05] pb-2">
              How we <em>work.</em>
            </h2>
            <p className="mt-4 text-muted text-base max-w-xl leading-relaxed font-light">
              Predictable, calm, and communicative delivery. No sudden surprises, no abandoned handovers.
            </p>
          </FadeUp>

          {/* Vertical Timeline Steps */}
          <div className="mt-14 ml-4 pl-8 border-l border-[#CFCBC1] space-y-10 relative">
            <div className="relative">
              <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-ink" />
              <b className="text-xl font-bold tracking-tight text-ink block">Discover</b>
              <small className="text-muted text-sm leading-relaxed block mt-1 font-light">
                We learn your business, map daily operations, and find what to automate first.
              </small>
            </div>

            <div className="relative">
              <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-ink" />
              <b className="text-xl font-bold tracking-tight text-ink block">Design</b>
              <small className="text-muted text-sm leading-relaxed block mt-1 font-light">
                Architecture and interface, agreed in full detail before we build.
              </small>
            </div>

            <div className="relative">
              <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-ink" />
              <b className="text-xl font-bold tracking-tight text-ink block">Build</b>
              <small className="text-muted text-sm leading-relaxed block mt-1 font-light">
                Weekly staging releases, clean modular code, no surprises.
              </small>
            </div>

            <div className="relative">
              <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-ink" />
              <b className="text-xl font-bold tracking-tight text-ink block">Evolve</b>
              <small className="text-muted text-sm leading-relaxed block mt-1 font-light">
                Continuous telemetry monitoring, SLA support, and proactive improvements.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. TESTIMONIALS & BLOG TEASER ================= */}
      <section className="py-20 md:py-28 border-t border-line bg-surface/50">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Testimonials slot */}
          <div className="mb-20">
            <div className="quiet-tag mb-4">[ Partnership Trust ]</div>
            <div className="quiet-card p-8 sm:p-12 relative overflow-hidden">
              <p className="text-xl sm:text-2xl text-ink font-serif italic leading-relaxed max-w-3xl">
                &ldquo;Anvaya transformed our operational workflow from fragile manual chaos into a silent, predictable engine. Our team now focuses on clients rather than administrative busywork.&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between text-xs text-muted gap-4">
                <div>
                  <strong className="text-ink block font-sans text-sm font-semibold">Managing Director</strong>
                  <span className="text-xs text-muted">Global Logistics &amp; Health Partner</span>
                </div>
                {/* On-theme Champagne Accent Badge (replacing green) */}
                <div className="text-ink font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne" />
                  <span>73% Operational Time Saved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Dispatches Teaser */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="quiet-tag mb-2">[ Editorial Dispatches ]</div>
                <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] text-ink pb-2">
                  Insights &amp; <em>ideas.</em>
                </h2>
              </div>
              <Link href="/blog" className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted hover:text-ink flex items-center gap-1">
                Read all dispatches →
              </Link>
            </div>

            {/* Equal Height Cards with Soft Pearl Thumbnail Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestBlogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  data-cursor="read"
                  className="quiet-card overflow-hidden group flex flex-col justify-between h-full min-h-[340px]"
                >
                  <div>
                    {/* Soft Pearl-Gradient Thumbnail Area */}
                    <div className="h-32 w-full bg-gradient-to-br from-[#ECE8E0] via-[#E4DFD5] to-[#D8D2C6] border-b border-line p-5 flex items-start justify-between relative overflow-hidden">
                      <div className="pearl-orb w-14 h-14 opacity-60 absolute -right-3 -bottom-3 pointer-events-none" />
                      <span className="text-[11px] font-medium tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-pill text-ink border border-line">
                        {post.category}
                      </span>
                      <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">
                        {post.readTime}
                      </span>
                    </div>

                    <div className="p-6">
                      <b className="font-bold text-lg text-ink block group-hover:text-neutral-900 transition-colors leading-snug mb-2">
                        {post.title}
                      </b>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2 font-light">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-line/40 flex items-center justify-between text-xs text-muted mt-auto">
                    <span className="text-[12px] font-medium tracking-[0.14em] uppercase">{post.date}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:translate-x-0.5 transition-transform">
                      Read <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. CTA SECTION ([ 05 / 05 ]) ================= */}
      <section className="relative text-center py-28 md:py-36 border-t border-line overflow-hidden bg-bg">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="quiet-tag mb-4">[ 05 / 05 ] Project Initiation</div>
            <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold tracking-[-0.02em] text-ink leading-[1.05] pb-2">
              Ready to make your business <em>effortless?</em>
            </h2>
            <p className="mt-4 text-muted text-base max-w-xl mx-auto leading-relaxed font-light">
              Let&apos;s evaluate your existing workflows and blueprint an automated growth engine.
            </p>

            <div className="mt-10">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-ink text-ivory px-9 py-4 rounded-pill text-sm font-semibold tracking-wide shadow-subtle hover:bg-neutral-800 transition-all select-none min-h-[44px]"
                  aria-label="Start a project with Anvaya Automation"
                >
                  <span>Start a project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
