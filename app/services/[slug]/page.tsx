'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { projectsData } from '@/data/projectsData';
import { FadeUp } from '@/components/ui/FadeUp';
import { Magnetic } from '@/components/ui/Magnetic';

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const service = servicesData.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center max-w-xl mx-auto px-6">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <p className="mt-4 text-muted">The requested service discipline does not exist.</p>
        <Link href="/services" className="mt-6 inline-block bg-ink text-ivory px-6 py-3 rounded-pill text-sm">
          Return to services
        </Link>
      </div>
    );
  }

  // Find next service in sequence
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  // Related project (by category)
  const relatedProject =
    projectsData.find((p) => p.serviceCategory === service.category) || projectsData[0];

  return (
    <div className="pt-32 pb-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/services"
            className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>

        {/* Hero Header */}
        <FadeUp>
          <div className="quiet-tag mb-4">[ {service.category} · Discipline {service.number} ]</div>
          <h1 className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold tracking-[-0.03em] text-ink leading-[1] pb-2">
            {service.title.split(' ')[0]}{' '}
            <em>{service.emphasizedTitle}</em>
          </h1>
          <p className="mt-5 text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            {service.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-ivory px-7 py-3.5 rounded-pill text-sm font-semibold tracking-wide shadow-sm hover:bg-neutral-800 transition-all select-none min-h-[44px]"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </FadeUp>

        {/* What We Deliver & Disciplines Split */}
        <section className="mt-20 pt-16 border-t border-line">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="quiet-tag mb-3">[ Core Scope ]</div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-6">
                Disciplines &amp; capabilities
              </h2>
              <div className="space-y-3">
                {service.disciplines.map((d, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-surface border border-line flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-line flex items-center justify-center text-xs text-muted font-medium">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-ink">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="quiet-card p-8 flex flex-col justify-between">
              <div>
                <b className="text-xl font-bold text-ink block mb-6">What we deliver</b>
                <ul className="space-y-4">
                  {service.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-neutral-800 font-light">
                      <Check className="w-4 h-4 text-ink mt-0.5 flex-shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-line text-xs text-muted">
                Includes comprehensive technical documentation &amp; handover.
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Pills */}
        <section className="mt-20 pt-16 border-t border-line">
          <div className="quiet-tag mb-4">[ Technologies &amp; Integrations ]</div>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="border border-line bg-surface px-4 py-2 rounded-pill text-[12px] font-medium tracking-[0.14em] uppercase text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Execution Process Steps */}
        <section className="mt-20 pt-16 border-t border-line">
          <div className="quiet-tag mb-3">[ Delivery Framework ]</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-10">
            How we execute {service.title.toLowerCase()}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="quiet-card p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted block mb-3">{step.step}</span>
                  <b className="text-lg font-bold text-ink block mb-1">{step.title}</b>
                  <p className="text-xs text-muted leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Project Showcase */}
        {relatedProject && (
          <section className="mt-20 pt-16 border-t border-line">
            <div className="quiet-tag mb-3">[ Case Study ]</div>
            <div className="quiet-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">{relatedProject.serviceTag}</span>
                <h3 className="text-2xl font-bold text-ink mt-1">
                  {relatedProject.title.split(':')[0]}
                </h3>
                <p className="text-xs sm:text-sm text-muted max-w-lg mt-2 font-light">
                  {relatedProject.summary}
                </p>
              </div>
              <Link
                href={`/projects/${relatedProject.slug}`}
                className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 rounded-pill text-xs font-semibold hover:bg-ink hover:text-ivory transition-colors whitespace-nowrap min-h-[44px]"
              >
                <span>View case study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        )}

        {/* Smooth FAQ Accordion */}
        <section className="mt-20 pt-16 border-t border-line">
          <div className="quiet-tag mb-3">[ Answers ]</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className="quiet-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none min-h-[44px]"
                  >
                    <span className="font-bold text-base sm:text-lg text-ink">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-muted leading-relaxed border-t border-line/60 pt-4 font-light">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Next Service Link & Bottom CTA */}
        <section className="mt-24 pt-16 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[12px] uppercase tracking-[0.14em] font-medium text-muted block mb-1">Next Discipline</span>
            <Link
              href={`/services/${nextService.slug}`}
              className="text-2xl font-bold text-ink hover:text-neutral-700 transition-colors flex items-center gap-2"
            >
              <span>{nextService.title}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink text-ivory px-7 py-3.5 rounded-pill text-sm font-semibold hover:bg-neutral-800 transition-all min-h-[44px]"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
