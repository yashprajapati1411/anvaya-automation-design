'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { FadeUp } from '@/components/ui/FadeUp';

const CATEGORIES = ['All', 'AI', 'Engineering', 'Growth'] as const;

export default function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredProjects =
    selectedCat === 'All'
      ? projectsData
      : projectsData.filter((p) => p.serviceCategory === selectedCat);

  return (
    <div className="pt-32 pb-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Projects Header */}
        <FadeUp>
          <div className="quiet-tag mb-4">[ Selected Work ]</div>
          <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] text-ink leading-[1.05] pb-2">
            Crafted for <em>clarity.</em>
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-xl leading-relaxed font-light">
            Case studies in autonomous workflows, bespoke software platforms, and compound growth.
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

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="view"
                  className="quiet-card overflow-hidden block group h-full flex flex-col justify-between"
                >
                  <div
                    className="h-60 sm:h-72 w-full p-8 flex flex-col justify-between relative overflow-hidden"
                    style={{ background: project.coverGradient }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-sm px-3.5 py-1 rounded-pill text-ink border border-line">
                        {project.serviceTag}
                      </span>
                      <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-neutral-800 bg-surface/70 px-2.5 py-1 rounded-full">
                        {project.client}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <b className="text-2xl font-bold tracking-tight text-ink block mb-3 group-hover:text-neutral-900 transition-colors">
                        {project.title}
                      </b>
                      <p className="text-sm text-muted leading-relaxed font-light">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-line flex items-center justify-between text-xs">
                      <div className="flex items-center gap-6">
                        {project.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx}>
                            <span className="font-bold text-ink text-sm block">{m.value}</span>
                            <span className="text-[12px] uppercase tracking-[0.14em] text-muted font-medium">{m.label}</span>
                          </div>
                        ))}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-ink transition-colors" />
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
