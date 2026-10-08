'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Clock, MapPin, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';
import Magnetic from '@/components/ui/Magnetic';
import { submitContactAction, ContactActionResult } from '@/app/actions/contact';

const serviceOptions = [
  'AI Automation',
  'Web Applications',
  'Mobile Apps',
  'Cloud & DevOps',
  'SEO & Authority',
  'Digital Marketing',
];

const budgetOptions = ['< $2k', '$2–10k', '$10k–25k', '$25k+'];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['AI Automation']);
  const [selectedBudget, setSelectedBudget] = useState<string>('$2–10k');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactActionResult | null>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    formData.delete('services');
    selectedServices.forEach((s) => formData.append('services', s));
    formData.set('budget', selectedBudget);

    const res = await submitContactAction(null, formData);
    setIsSubmitting(false);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-32 pb-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS & EDITORIAL */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="quiet-tag mb-4">
                [ 01 / 02 · Contact Studio ]
              </div>
              <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] text-[var(--ink)] mb-6 leading-[1.05] pb-2">
                Let&apos;s start a <em>conversation.</em>
              </h1>
              <p className="text-base sm:text-lg text-[var(--mut)] font-light leading-relaxed mb-10">
                Whether you need an automated backend workflow, a modern web application, or full growth infrastructure—we’re here to engineer it cleanly.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-6 pb-10 border-b border-[var(--line)]">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[var(--mut)] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] block font-medium">Email</span>
                    <a
                      href="mailto:hello@anvayaautomation.com"
                      className="text-base font-semibold text-[var(--ink)] hover:underline"
                    >
                      hello@anvayaautomation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[var(--mut)] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] block font-medium">Direct Phone</span>
                    <span className="text-base font-medium text-[var(--ink)]">
                      +91 98765 43210 {/* TODO: Replace with official phone number */}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[var(--mut)] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] block font-medium">Hours</span>
                    <span className="text-sm text-[var(--ink)]">
                      Monday – Saturday, 10:00 AM – 7:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[var(--mut)] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] block font-medium">Location</span>
                    <span className="text-sm text-[var(--ink)] font-light">
                      Mumbai &amp; Bangalore, India (Working with global clients)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-8 space-y-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[var(--line)] bg-[var(--card)] hover:border-[var(--ink)] text-sm font-semibold transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 text-champagne" /> Chat on WhatsApp
                </a>

                <div className="p-5 rounded-2xl bg-white/60 border border-[var(--line)] text-xs text-[var(--mut)] leading-relaxed mt-4">
                  <strong className="text-[var(--ink)] block mb-1">Our Response Commitment</strong>
                  You will speak directly with an engineer or systems architect. We never send junior sales scripts or automated follow-up bombardment.
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <div className="quiet-card rounded-[32px] p-8 sm:p-12 border border-[var(--line)] bg-[var(--card)] shadow-sm">
                {result?.success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-surface border border-line flex items-center justify-center text-ink mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-champagne" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--ink)] mb-3">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-base text-[var(--mut)] max-w-md mx-auto leading-relaxed mb-8 font-light">
                      {result.message}
                    </p>
                    <button
                      onClick={() => setResult(null)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--ink)] text-[var(--bg)] hover:bg-black transition-colors min-h-[44px]"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {result?.success === false && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        {result.message}
                      </div>
                    )}

                    {/* Name Field */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium mb-2">
                        Your Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="e.g. Elena Rostova"
                        className="w-full bg-white border border-[var(--line)] rounded-xl px-4 py-3.5 text-base text-[var(--ink)] placeholder-[var(--mut)] focus:outline-none focus:border-[var(--ink)] transition-colors min-h-[44px]"
                      />
                      {result?.errors?.name && (
                        <p className="text-xs text-red-600 mt-1">{result.errors.name[0]}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium mb-2">
                        Work Email *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="e.g. elena@company.com"
                        className="w-full bg-white border border-[var(--line)] rounded-xl px-4 py-3.5 text-base text-[var(--ink)] placeholder-[var(--mut)] focus:outline-none focus:border-[var(--ink)] transition-colors min-h-[44px]"
                      />
                      {result?.errors?.email && (
                        <p className="text-xs text-red-600 mt-1">{result.errors.email[0]}</p>
                      )}
                    </div>

                    {/* Company / Website Field */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium mb-2">
                        Company or Website (Optional)
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="e.g. Acme Corp / acme.com"
                        className="w-full bg-white border border-[var(--line)] rounded-xl px-4 py-3.5 text-base text-[var(--ink)] placeholder-[var(--mut)] focus:outline-none focus:border-[var(--ink)] transition-colors min-h-[44px]"
                      />
                    </div>

                    {/* Service Selection Pills */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium mb-3">
                        I&apos;m interested in *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => toggleService(service)}
                              className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all min-h-[44px] ${
                                isSelected
                                  ? 'bg-[var(--ink)] text-[var(--bg)] shadow-sm'
                                  : 'bg-white border border-[var(--line)] text-[var(--ink)] hover:border-[var(--ink)]'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                      {result?.errors?.services && (
                        <p className="text-xs text-red-600 mt-1">{result.errors.services[0]}</p>
                      )}
                    </div>

                    {/* Budget Selection Pills */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium mb-3">
                        Estimated Budget *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((b) => {
                          const isSelected = selectedBudget === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setSelectedBudget(b)}
                              className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all min-h-[44px] ${
                                isSelected
                                  ? 'bg-[var(--ink)] text-[var(--bg)] shadow-sm'
                                  : 'bg-white border border-[var(--line)] text-[var(--ink)] hover:border-[var(--ink)]'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] font-medium mb-2">
                        Tell us about your project *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="Brief overview of your operational bottleneck or goals..."
                        className="w-full bg-white border border-[var(--line)] rounded-xl px-4 py-3 text-base text-[var(--ink)] placeholder-[var(--mut)] focus:outline-none focus:border-[var(--ink)] transition-colors resize-none"
                      />
                      {result?.errors?.message && (
                        <p className="text-xs text-red-600 mt-1">{result.errors.message[0]}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Magnetic>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-sm hover:bg-black transition-all shadow-md disabled:opacity-50 min-h-[44px]"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
                            </>
                          ) : (
                            <>
                              Send message <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </Magnetic>
                    </div>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
