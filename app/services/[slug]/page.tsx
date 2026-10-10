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
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/services"
            className="text-[12px] font-semibold tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>

        {/* Editorial Split Header (Compact image matching blog detail, no oversized banner) */}
        <FadeUp>
          <div className="pb-12 mb-10 border-b border-line">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (7 cols): Category, Title, Description, CTA */}
              <div className="lg:col-span-7">
                <div className="quiet-tag mb-4">{service.category} · Discipline {service.number}</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.04] pb-2">
                  {service.title}
                </h1>
                <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <Magnetic>
                    <Link
                      href="/contact"
                      className="luxury-btn-dark inline-flex items-center gap-2.5 px-8 py-3.5 rounded-pill text-sm font-semibold tracking-wide shadow-sm min-h-[46px]"
                    >
                      <span>Start a project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Magnetic>
                </div>
              </div>

              {/* Right Column (5 cols): Expanded Premium Photo Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[500px] h-64 sm:h-72 md:h-80 lg:h-[340px] rounded-[28px] overflow-hidden border border-line bg-card shadow-md relative group">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-ivory">
                    <span className="w-9 h-9 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center font-serif text-lg text-ink shadow-sm">
                      {service.iconSymbol}
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-pill text-ink border border-line shadow-sm">
                      Discipline {service.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* What We Deliver & Disciplines Split */}
        <section className="mt-8 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="quiet-tag mb-3">Core Scope</div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-6">
                Disciplines &amp; capabilities
              </h2>
              <div className="space-y-3">
                {service.disciplines.map((d, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-surface border border-line flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-xs text-muted font-bold bg-card">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-ink">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="quiet-card p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-ink block mb-6">What we deliver</h3>
                <div className="space-y-4">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <Check className="w-4 h-4 text-champagne mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted font-normal leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-line flex flex-wrap gap-2">
                <span className="text-xs uppercase tracking-wider text-muted font-semibold w-full mb-1">
                  Technologies
                </span>
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-pill bg-[#EDE9E0] text-ink font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="mt-24 pt-20 border-t border-line">
          <div className="quiet-tag mb-3">Structured Execution</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-10">
            Four-step delivery methodology
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="p-7 rounded-[26px] bg-surface border border-line flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-champagne mb-3 block">
                    STEP {step.step}
                  </span>
                  <h4 className="text-xl font-bold text-ink mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-24 pt-20 border-t border-line">
          <div className="quiet-tag mb-3">Common Inquiries</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-4 max-w-3xl">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="quiet-card rounded-2xl overflow-hidden border border-line"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-semibold text-base text-ink"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted transition-transform ${
                      openFaq === idx ? 'rotate-180 text-ink' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-sm sm:text-base text-muted font-light leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Next Service Navigation */}
        <div className="mt-24 pt-12 border-t border-line flex items-center justify-between">
          <Link
            href="/services"
            className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-muted hover:text-ink transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Services</span>
          </Link>

          <Link
            href={`/services/${nextService.slug}`}
            className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-ink hover:text-neutral-800 transition-colors flex items-center gap-1.5"
          >
            <span>Next: {nextService.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
