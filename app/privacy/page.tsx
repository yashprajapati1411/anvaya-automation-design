import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, Mail, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

export const metadata = {
  title: 'Privacy Policy — Anvaya Automation',
  description: 'Privacy Policy explaining how Anvaya Automation collects, protects, and handles client data and enterprise information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-[12px] font-semibold tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-line pb-10 mb-12">
          <div className="quiet-tag mb-4">Data Governance</div>
          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-ink leading-[1.04] pb-2">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed font-light">
            Effective Date: October 2026 · Anvaya Automation, Ahmedabad, Gujarat, India
          </p>
        </div>

        {/* Privacy Highlight Callout */}
        <div className="p-8 rounded-[24px] bg-surface border border-line mb-12 flex items-start gap-5">
          <Lock className="w-7 h-7 text-ink mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg text-ink mb-1">Strict Zero-Data Retention Standard</h3>
            <p className="text-muted text-sm sm:text-base font-light leading-relaxed">
              We never use client proprietary code, internal business data, or conversation logs to train public foundation models. All private inference endpoints and database connections are strictly isolated within your authorized tenant.
            </p>
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-12 text-ink font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">1. Overview &amp; Commitment</h2>
            <p className="text-muted text-base sm:text-lg">
              At Anvaya Automation (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), protecting your privacy and confidential business information is foundational to our engineering practice. This Privacy Policy details the types of information we collect when you visit anvayaautomation.com or partner with us for professional services, and how we safeguard that data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">2. Information We Collect</h2>
            <p className="text-muted text-base sm:text-lg">
              We collect information that you voluntarily provide to us when submitting an inquiry through our contact form, scheduling a consultation, or entering into an engineering engagement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted text-base sm:text-lg">
              <li><strong>Contact Information:</strong> Full name, professional email address, company name, and phone number.</li>
              <li><strong>Project Specifications:</strong> Selected disciplines (AI Automation, Web Applications, Cloud, SEO, Marketing) and detailed project descriptions.</li>
              <li><strong>Technical Telemetry:</strong> Standard non-identifying server logs including browser type, operating system, and anonymized performance metrics to ensure sub-second page delivery.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">3. How We Use Your Information</h2>
            <p className="text-muted text-base sm:text-lg">
              Information collected is utilized exclusively for genuine operational purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted text-base sm:text-lg">
              <li>To evaluate project feasibility and prepare comprehensive technical proposals.</li>
              <li>To execute agreed software development sprints, telephony setups, and cloud integrations.</li>
              <li>To communicate project milestones, staging preview links, and production deployment reports.</li>
              <li>To maintain compliance with applicable taxation, corporate recordkeeping, and cybersecurity standards.</li>
            </ul>
            <p className="text-muted text-base sm:text-lg font-medium pt-2">
              We never sell, lease, or monetize your contact details or business information to third-party data brokers or advertisers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">4. Third-Party AI Services &amp; API Guardrails</h2>
            <p className="text-muted text-base sm:text-lg">
              When engineering autonomous voice bots, document extractors, or intelligent agents, we interface only with enterprise-grade API providers (e.g., OpenAI Enterprise, Anthropic, Deepgram, Twilio) that adhere to strict zero-data retention policies.
            </p>
            <p className="text-muted text-base sm:text-lg">
              Your proprietary database records, confidential transcripts, and operational workflows are never logged in persistent public training sets.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">5. Data Storage, Security &amp; Encryption</h2>
            <p className="text-muted text-base sm:text-lg">
              We implement industry-standard encryption protocols across all systems. All data transmitted between your browser and our servers is encrypted using modern TLS 1.3 standards. Backend databases and backups are encrypted at rest with AES-256 encryption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">6. Your Data Rights</h2>
            <p className="text-muted text-base sm:text-lg">
              You maintain the absolute right to request an extract of any personal data we hold about you, request corrections to erroneous records, or request complete deletion of your information from our active databases, subject to applicable regulatory retention requirements.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-line">
            <h2 className="text-2xl font-bold tracking-tight text-ink">7. Contact Our Privacy Team</h2>
            <p className="text-muted text-base sm:text-lg">
              For any privacy inquiries, data deletion requests, or data protection questions, please contact:
            </p>
            <div className="p-6 rounded-[20px] bg-card border border-line space-y-2 text-sm sm:text-base">
              <div><strong>Anvaya Automation</strong></div>
              <div>Privacy &amp; Data Protection Officer</div>
              <div>Location: {siteConfig.address}</div>
              <div>Email: <a href="mailto:contact@anvayaautomation.com" className="text-ink font-semibold underline">contact@anvayaautomation.com</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
