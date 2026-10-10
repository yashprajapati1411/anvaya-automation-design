'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { FadeUp } from '@/components/ui/FadeUp';

const CATEGORIES = ['All', 'AI', 'Engineering', 'Growth'] as const;

export default function ServicesPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredServices =
    selectedCat === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCat);

  return (
    <div className="pt-32 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Services Hub Header */}
        <FadeUp>
          <div className="quiet-tag mb-4">Services Hub</div>
          <h1 className="text-[clamp(2.5rem,6vw,5.25rem)] font-bold tracking-tight text-ink leading-[1.02] pb-2">
            Our services.
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            Five core disciplines, unified under one studio. Built to eliminate operational friction and engineer compounding digital growth.
          </p>

          {/* Filter Pills */}
          <div className="flex gap-2 flex-wrap mt-8">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2.5 rounded-pill text-[13px] font-semibold transition-all select-none border min-h-[44px] ${
                    isSelected
                      ? 'bg-ink text-ivory border-ink shadow-sm'
                      : 'bg-surface text-ink border-line hover:border-neutral-400'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* Grid of 6 Services Cards with Thematic Header Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                key={service.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="view"
                  className="quiet-card overflow-hidden block group h-full flex flex-col justify-between border border-line bg-card hover:border-[#cfcbc1] transition-all duration-300"
                >
                  <div>
                    {/* Thematic Image Header (Replacing blank off-white top section) */}
                    <div className="h-52 w-full relative overflow-hidden bg-neutral-200">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                      {/* Header Overlays */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-md px-3 py-1 rounded-pill text-ink border border-line">
                          {service.category}
                        </span>
                        <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-ivory drop-shadow-md">
                          {service.number}
                        </span>
                      </div>

                      {/* Icon Mark */}
                      <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center font-serif text-lg text-ink shadow-sm border border-line">
                        {service.iconSymbol}
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-2xl font-bold tracking-tight text-ink block mb-2.5 group-hover:text-neutral-900 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted text-sm sm:text-base leading-relaxed font-light mb-4">
                        {service.summary}
                      </p>
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

                  <div className="p-7 pt-4 border-t border-line flex items-center justify-between text-xs sm:text-sm text-ink font-semibold group-hover:text-neutral-900 transition-colors">
                    <span className="tracking-wide">Explore discipline</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Featured Service Detail Teaser */}
        <section className="mt-28 pt-20 border-t border-line">
          <div className="quiet-tag mb-4">Specification Overview</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] font-bold tracking-tight leading-[1.04] text-ink pb-2">
                AI Automation
              </h2>
              <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed font-light">
                Autonomous workflows and intelligent agent swarms that quietly do the work without human intervention.
              </p>
              <div className="mt-8">
                <Link
                  href="/services/ai-automation"
                  className="inline-flex items-center gap-2 bg-ink text-ivory px-7 py-3.5 rounded-pill text-sm font-semibold hover:bg-neutral-800 transition-all min-h-[44px]"
                >
                  <span>View full AI specification</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {servicesData[0].deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-[18px] bg-surface border border-line">
                  <Check className="w-4 h-4 text-champagne mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-ink font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
