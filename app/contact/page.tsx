'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Clock, MapPin, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';
import { Magnetic } from '@/components/ui/Magnetic';
import { submitContactAction, ContactActionResult } from '@/app/actions/contact';
import { siteConfig } from '@/data/siteData';

const serviceOptions = [
  'AI Automation',
  'Web Applications',
  'Cloud & DevOps',
  'SEO & Authority',
  'Digital Marketing',
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['AI Automation']);
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

    const res = await submitContactAction(null, formData);
    setIsSubmitting(false);
    setResult(res);
  };

  return (
    <div className="min-h-screen bg-bg text-ink pt-32 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS & EDITORIAL */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="quiet-tag mb-4">Contact Studio</div>
              <h1 className="text-[clamp(2.5rem,6vw,5.25rem)] font-bold tracking-tight text-ink mb-6 leading-[1.02] pb-2">
                Let&apos;s start a conversation.
              </h1>
              <p className="text-base sm:text-lg text-muted font-light leading-relaxed mb-10">
                Whether you need autonomous backend workflows, an intelligent IVR scheduling system, or custom enterprise web applications—we are here to engineer it cleanly.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-6 pb-10 border-b border-line">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-muted mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-muted block font-semibold">Email</span>
                    <a
                      href="mailto:contact@anvayaautomation.com"
                      className="text-base font-bold text-ink hover:underline"
                    >
                      contact@anvayaautomation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-muted mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-muted block font-semibold">Direct Phones</span>
                    <div className="space-y-1">
                      <a href="tel:+919313220796" className="text-base font-bold text-ink block hover:underline">
                        +91 9313220796
                      </a>
                      <a href="tel:+919624865617" className="text-base font-bold text-ink block hover:underline">
                        +91 9624865617
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-muted mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-muted block font-semibold">Hours</span>
                    <span className="text-sm sm:text-base text-ink font-medium">
                      Monday – Saturday, 10:00 AM – 7:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-muted mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[12px] uppercase tracking-[0.14em] text-muted block font-semibold">Location</span>
                    <span className="text-sm sm:text-base text-ink font-light">
                      Mumbai &amp; Bangalore, India (Partnering with global clients)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-8 space-y-4">
                <a
                  href="https://wa.me/919313220796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-line bg-card hover:border-ink text-sm font-semibold transition-colors min-h-[46px]"
                >
                  <MessageSquare className="w-4 h-4 text-champagne" />
                  <span>Chat on WhatsApp (+91 9313220796)</span>
                </a>

                <div className="p-6 rounded-[22px] bg-white/70 border border-line text-xs sm:text-sm text-muted leading-relaxed mt-4">
                  <strong className="text-ink block mb-1 font-bold">Our Response Commitment</strong>
                  You will speak directly with an engineer or systems architect. We never send sales reps or automated follow-up sequences.
                </div>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM (WITHOUT BUDGET FIELD) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <div className="quiet-card rounded-[32px] p-8 sm:p-12 border border-line bg-card shadow-sm">
                {result?.success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-surface border border-line flex items-center justify-center text-ink mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-champagne" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-3">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-base text-muted max-w-md mx-auto leading-relaxed mb-8 font-light">
                      {result.message}
                    </p>
                    <button
                      onClick={() => setResult(null)}
                      className="px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-ink text-ivory hover:bg-neutral-800 transition-colors min-h-[44px]"
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
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-muted font-semibold mb-2">
                        Your Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="e.g. Vikram Sethi"
                        className="w-full bg-white border border-line rounded-xl px-5 py-3.5 text-base text-ink placeholder-muted focus:outline-none focus:border-ink transition-colors min-h-[46px]"
                      />
                      {result?.errors?.name && (
                        <p className="text-xs text-red-600 mt-1">{result.errors.name[0]}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-muted font-semibold mb-2">
                        Work Email *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="e.g. vikram@company.com"
                        className="w-full bg-white border border-line rounded-xl px-5 py-3.5 text-base text-ink placeholder-muted focus:outline-none focus:border-ink transition-colors min-h-[46px]"
                      />
                      {result?.errors?.email && (
                        <p className="text-xs text-red-600 mt-1">{result.errors.email[0]}</p>
                      )}
                    </div>

                    {/* Company / Website Field */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-muted font-semibold mb-2">
                        Company or Website (Optional)
                      </label>
                      <input
                        name="company"
                        type="text"
                        placeholder="e.g. Acme Corp / acme.com"
                        className="w-full bg-white border border-line rounded-xl px-5 py-3.5 text-base text-ink placeholder-muted focus:outline-none focus:border-ink transition-colors min-h-[46px]"
                      />
                    </div>

                    {/* Service Selection Pills */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-muted font-semibold mb-3">
                        I&apos;m interested in *
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {serviceOptions.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => toggleService(service)}
                              className={`px-5 sm:px-6 py-2.5 rounded-pill text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all select-none min-h-[44px] ${
                                isSelected
                                  ? 'bg-ink text-ivory border border-ink shadow-sm'
                                  : 'luxury-btn-light bg-white border border-line text-ink hover:border-ink'
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

                    {/* Message Area */}
                    <div>
                      <label className="block text-[12px] uppercase tracking-[0.14em] text-muted font-semibold mb-2">
                        Tell us about your project *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="Brief overview of your operational bottleneck or goals..."
                        className="w-full bg-white border border-line rounded-xl px-5 py-3.5 text-base text-ink placeholder-muted focus:outline-none focus:border-ink transition-colors resize-none"
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
                          className="w-full sm:w-auto luxury-btn-dark px-9 py-4 rounded-pill font-semibold text-sm shadow-md disabled:opacity-50 min-h-[46px] inline-flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Transmitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Send inquiry</span>
                              <ArrowRight className="w-4 h-4" />
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
