'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import { FadeUp } from '@/components/ui/FadeUp';
import { Magnetic } from '@/components/ui/Magnetic';

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center max-w-xl mx-auto px-6">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
        <p className="mt-4 text-muted">The requested case study could not be located.</p>
        <Link href="/projects" className="mt-6 inline-block bg-ink text-ivory px-6 py-3 rounded-pill text-sm">
          Return to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-[12px] font-semibold tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Case Studies</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <FadeUp>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="quiet-tag">{project.serviceTag}</span>
            <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-muted">· {project.year}</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6.5vw,5.25rem)] font-bold tracking-tight text-ink leading-[1.02] pb-2">
            {project.title}
          </h1>

          <p className="mt-6 text-muted text-base sm:text-xl max-w-3xl leading-relaxed font-light">
            {project.summary}
          </p>
        </FadeUp>

        {/* Hero Image Showcase */}
        <div className="mt-12 h-72 sm:h-96 md:h-[460px] w-full rounded-[32px] overflow-hidden relative border border-line bg-neutral-200 shadow-sm">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-ivory">
            <div className="text-sm sm:text-base font-semibold drop-shadow-sm">
              Client: {project.client}
            </div>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-pill text-ink border border-line">
              Verified Production Case
            </span>
          </div>
        </div>

        {/* Results / Key Metrics Row */}
        <section className="mt-14 pt-10 border-t border-line">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="quiet-card p-8">
                <span className="text-3xl sm:text-5xl font-bold tracking-tight text-ink block mb-2">
                  {metric.value}
                </span>
                <span className="text-[12px] uppercase tracking-[0.14em] text-muted font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge & Approach Split Grid */}
        <section className="mt-20 pt-16 border-t border-line grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="quiet-tag mb-3">The Challenge</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
              Operational friction before Anvaya
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          <div>
            <div className="quiet-tag mb-3">The Solution</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
              Engineering clarity &amp; systems
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Approach Detailed Narrative */}
        <section className="mt-16 p-8 sm:p-12 rounded-[28px] bg-surface border border-line">
          <div className="quiet-tag mb-3">Architecture &amp; Delivery</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
            How we designed the solution
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
            {project.approach}
          </p>

          {/* Tech Stack Tags */}
          <div className="mt-8 pt-8 border-t border-line flex flex-wrap gap-2.5 items-center">
            <span className="text-[12px] uppercase tracking-[0.14em] text-muted font-medium mr-2">Technologies Used:</span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-bg border border-line px-3.5 py-1.5 rounded-pill text-[12px] font-medium tracking-[0.14em] uppercase text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Testimonial Quote if present */}
        {project.testimonial && (
          <section className="mt-20 pt-16 border-t border-line">
            <div className="quiet-tag mb-4">Client Verification</div>
            <div className="quiet-card p-8 sm:p-14 relative overflow-hidden">
              <p className="text-xl sm:text-2xl text-ink font-normal leading-relaxed max-w-4xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
                <div>
                  <strong className="text-ink text-base block font-bold">{project.testimonial.author}</strong>
                  <span className="text-xs text-muted font-normal">{project.testimonial.role}, {project.client}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-champagne" />
                  <span className="text-[12px] font-semibold tracking-[0.14em] uppercase">Verified Deployment</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="mt-24 pt-16 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[12px] uppercase tracking-[0.14em] font-medium text-muted block mb-1">
              Have a similar operational challenge?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ink">
              Let&apos;s build an automated solution.
            </h3>
          </div>

          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink text-ivory px-8 py-3.5 rounded-pill text-sm font-semibold hover:bg-neutral-800 transition-all select-none min-h-[46px]"
            >
              <span>Discuss your requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>
        </section>
      </div>
    </div>
  );
}
