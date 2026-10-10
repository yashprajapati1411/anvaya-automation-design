import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

export const metadata = {
  title: 'Terms of Service — Anvaya Automation',
  description: 'Terms of Service governing engineering engagements, intellectual property ownership, and client deliverables with Anvaya Automation.',
};

export default function TermsPage() {
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
          <div className="quiet-tag mb-4">Legal &amp; Governance</div>
          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight text-ink leading-[1.04] pb-2">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed font-light">
            Effective Date: October 2026 · Anvaya Automation, Ahmedabad, Gujarat, India
          </p>
        </div>

        {/* Core Principles Callout */}
        <div className="p-8 rounded-[24px] bg-surface border border-line mb-12 flex items-start gap-5">
          <ShieldCheck className="w-7 h-7 text-ink mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg text-ink mb-1">Total Intellectual Property Sovereignty</h3>
            <p className="text-muted text-sm sm:text-base font-light leading-relaxed">
              Every client engagement with Anvaya Automation guarantees 100% intellectual property transfer upon final delivery. We do not lock clients into proprietary hosting or closed runtimes.
            </p>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-12 text-ink font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">1. Acceptance of Terms</h2>
            <p className="text-muted text-base sm:text-lg">
              By accessing the website at anvayaautomation.com or entering into a Statement of Work (SOW) with Anvaya Automation (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue use of our site and services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">2. Professional Services &amp; Scope of Work</h2>
            <p className="text-muted text-base sm:text-lg">
              Anvaya Automation specializes in AI automation workflows, full-stack web and SaaS applications, cloud infrastructure architecture, programmatic search optimization, and performance growth systems.
            </p>
            <p className="text-muted text-base sm:text-lg">
              All client deliverables, project phases, sprint schedules, and acceptance criteria are formally governed by mutual Statements of Work. Any additions or revisions to project scope require written approval from both parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">3. Intellectual Property Ownership</h2>
            <p className="text-muted text-base sm:text-lg">
              <strong>Client Work Product:</strong> Upon full and final settlement of agreed fees, all custom software, bespoke code repositories, customized AI agent workflows, and database schemas authored specifically for the client become the sole and exclusive intellectual property of the client.
            </p>
            <p className="text-muted text-base sm:text-lg">
              <strong>Pre-Existing Tools:</strong> Anvaya Automation retains ownership of open-source frameworks, generalized libraries, and foundational boilerplate routines developed prior to or independently of the engagement. Clients receive an irrevocable, royalty-free, perpetual license to utilize such components as embedded within their deliverable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">4. Confidentiality &amp; Proprietary Information</h2>
            <p className="text-muted text-base sm:text-lg">
              Both parties agree to protect and maintain the strict confidentiality of all proprietary business data, operational schematics, customer databases, API keys, and strategic plans disclosed during the course of engagement.
            </p>
            <p className="text-muted text-base sm:text-lg">
              Anvaya Automation enforces strict least-privilege access across internal environments and executes formal Non-Disclosure Agreements (NDAs) prior to client onboarding.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">5. AI Ethics, Data Isolation &amp; Zero Retention</h2>
            <p className="text-muted text-base sm:text-lg">
              We configure all commercial AI models and private inference endpoints with explicit zero-data-retention parameters. Client proprietary data, prompts, and document embeddings are never permitted to train public base models.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">6. Limitation of Liability</h2>
            <p className="text-muted text-base sm:text-lg">
              To the fullest extent permitted by applicable law, Anvaya Automation shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from downtime of third-party cloud vendors (e.g., AWS, GCP, Vercel), external API outages, or unexpected foundation model modifications beyond our reasonable control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-ink">7. Governing Law &amp; Jurisdiction</h2>
            <p className="text-muted text-base sm:text-lg">
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India. The courts of Ahmedabad, Gujarat, India shall have exclusive jurisdiction.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-line">
            <h2 className="text-2xl font-bold tracking-tight text-ink">8. Contact &amp; Legal Notices</h2>
            <p className="text-muted text-base sm:text-lg">
              For any questions, legal notices, or clarifications regarding these Terms of Service, please reach out to:
            </p>
            <div className="p-6 rounded-[20px] bg-card border border-line space-y-2 text-sm sm:text-base">
              <div><strong>Anvaya Automation</strong></div>
              <div>Location: {siteConfig.address}</div>
              <div>Email: <a href="mailto:contact@anvayaautomation.com" className="text-ink font-semibold underline">contact@anvayaautomation.com</a></div>
              <div>Telephone: {siteConfig.phone} / {siteConfig.secondaryPhone}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
