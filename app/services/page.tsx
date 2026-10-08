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
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Services Hub Header */}
        <FadeUp>
          <div className="quiet-tag mb-4">[ Services Hub ]</div>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] text-ink leading-[1.05] pb-2">
            Our <em>services.</em>
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl leading-relaxed font-light">
            Six disciplines, one studio. Choose a dedicated focus or combine them into a unified growth engine.
          </p>

          {/* Filter Pills */}
          <div className="flex gap-2 flex-wrap mt-8">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-5 py-2.5 rounded-pill text-[13px] font-medium transition-all select-none border min-h-[44px] ${
                    isSelected
                      ? 'bg-ink text-ivory border-ink'
                      : 'bg-surface text-ink border-line hover:border-neutral-400'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* Grid of 6 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                key={service.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  data-cursor="view"
                  className="quiet-card block p-8 min-h-[320px] flex flex-col justify-between group h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-full border border-ink flex items-center justify-center font-serif text-xl text-ink group-hover:bg-ink group-hover:text-ivory transition-colors">
                      {service.iconSymbol}
                    </div>
                    <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <b className="text-2xl font-bold tracking-tight text-ink block mb-2 group-hover:text-neutral-900 transition-colors">
                      {service.title}
                    </b>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed font-light">
                      {service.disciplines.join(' · ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line flex items-center justify-between text-xs text-muted group-hover:text-ink transition-colors">
                    <span className="text-[12px] font-medium tracking-[0.14em] uppercase">Explore discipline</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Featured Service Detail Teaser */}
        <section className="mt-24 pt-20 border-t border-line">
          <div className="quiet-tag mb-4">[ Specification Overview ]</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.05] text-ink pb-2">
                AI <em>Automation</em>
              </h2>
              <p className="mt-3 text-muted text-base leading-relaxed font-light">
                Autonomous workflows and intelligent agent swarms that quietly do the work.
              </p>
              <div className="mt-6">
                <Link
                  href="/services/ai-automation"
                  className="inline-flex items-center gap-2 bg-ink text-ivory px-6 py-3.5 rounded-pill text-sm font-semibold hover:bg-neutral-800 transition-all min-h-[44px]"
                >
                  <span>View full AI specification</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="quiet-card p-8">
              <b className="text-lg font-bold text-ink block mb-4">What we deliver</b>
              <ul className="space-y-3 text-xs sm:text-sm text-muted font-light">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-ink flex-shrink-0" />
                  <span>Process audit and friction mapping</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-ink flex-shrink-0" />
                  <span>Custom workflows and autonomous agents</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-ink flex-shrink-0" />
                  <span>Integrations with your existing tools</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-ink flex-shrink-0" />
                  <span>Monitoring, error recovery and handover</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech stack pills marquee */}
          <div className="flex gap-2.5 flex-wrap mt-10">
            {['n8n', 'OpenAI', 'Anthropic', 'React', 'Node', 'AWS', 'Flutter', 'Next.js', 'PostgreSQL'].map((t) => (
              <span
                key={t}
                className="border border-line bg-surface px-4 py-2 rounded-pill text-[12px] font-medium tracking-[0.14em] uppercase text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
