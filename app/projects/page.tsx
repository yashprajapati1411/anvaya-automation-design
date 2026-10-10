'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { FadeUp } from '@/components/ui/FadeUp';

const CATEGORIES = ['All', 'AI', 'Engineering'] as const;

export default function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredProjects =
    selectedCat === 'All'
      ? projectsData
      : projectsData.filter((p) => p.serviceCategory === selectedCat);

  return (
    <div className="pt-32 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Projects Header */}
        <FadeUp>
          <div className="quiet-tag mb-4">Selected Systems</div>
          <h1 className="text-[clamp(2.5rem,6vw,5.25rem)] font-bold tracking-tight text-ink leading-[1.02] pb-2">
            Crafted for clarity.
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            Three core production case studies in modern web application engineering, intelligent IVR telephony scheduling, and autonomous conversational voice AI.
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

        {/* Grid of the 3 Case Studies with Thematic Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="h-full"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="view"
                  className="quiet-card overflow-hidden block group h-full flex flex-col justify-between border border-line bg-card hover:border-[#cfcbc1] transition-all duration-300"
                >
                  <div>
                    {/* Thematic Project Image Header (replacing blank off-white top section) */}
                    <div className="h-60 sm:h-64 w-full relative overflow-hidden bg-neutral-200">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-md px-3 py-1 rounded-pill text-ink border border-line shadow-sm">
                          {project.serviceTag}
                        </span>
                        <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-ivory drop-shadow-md">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-2xl font-bold tracking-tight text-ink block mb-3 group-hover:text-neutral-900 transition-colors">
                        {project.title.split(':')[0]}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed font-light mb-6">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-4 border-t border-line flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-ink text-base block">
                        {project.metrics[0].value}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-muted font-medium">
                        {project.metrics[0].label}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-ivory transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
