import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { blogsData } from '@/data/blogsData';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import ArticleTOC from '@/components/blog/ArticleTOC';
import ShareButtons from '@/components/blog/ShareButtons';
import FadeUp from '@/components/ui/FadeUp';
import Magnetic from '@/components/ui/Magnetic';
import { ArrowLeft, Clock, Calendar, ArrowRight, User } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogsData.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Article Not Found | Anvaya' };

  return {
    title: `${post.title} | Anvaya Automation`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Anvaya Automation`,
      description: post.summary,
      type: 'article',
      authors: [post.author.name],
    },
  };
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  // Schema.org Article data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: '2026-10-01',
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Anvaya Automation',
      url: 'https://anvayaautomation.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Interactive reading progress bar */}
      <ReadingProgressBar />

      <article className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-32 pb-24">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Breadcrumb & Back */}
          <FadeUp>
            <div className="flex items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase text-[var(--mut)] mb-8">
              <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-[var(--ink)] transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
              </Link>
              <span>/</span>
              <span>{post.category}</span>
            </div>
          </FadeUp>

          {/* Article Header */}
          <FadeUp delay={0.1}>
            <div className="max-w-4xl mb-12">
              <div className="flex flex-wrap items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase text-[var(--mut)] mb-6">
                <span className="px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] font-medium text-[var(--ink)]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime} read
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--ink)] mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Author Strip */}
              <div className="flex items-center justify-between pb-8 border-b border-[var(--line)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[var(--card)] border border-[var(--line)] flex items-center justify-center font-semibold text-sm text-[var(--ink)]">
                    {post.author.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--ink)]">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-[var(--mut)] font-normal">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <ShareButtons title={post.title} />
              </div>
            </div>
          </FadeUp>

          {/* Main Content Layout with 680px Reading Column + Sticky Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Reading Column: Exactly 680px wide maximum */}
            <div className="lg:col-span-8 max-w-[680px]">
              {/* Lead Intro */}
              <p className="text-xl sm:text-2xl text-[var(--ink)] font-normal leading-relaxed mb-10 pb-8 border-b border-[var(--line)]">
                {post.content.intro}
              </p>

              {/* Instrument Serif Pull Quote */}
              <blockquote className="my-12 pl-6 sm:pl-8 border-l-2 border-[var(--ink)] py-2">
                <p className="text-2xl sm:text-3xl italic font-serif leading-snug text-[var(--ink)]">
                  &ldquo;{post.pullQuote}&rdquo;
                </p>
                <cite className="block mt-4 text-[12px] uppercase tracking-[0.14em] text-[var(--mut)] not-italic font-medium">
                  — Principles of Quiet Automation
                </cite>
              </blockquote>

              {/* Article Content Sections */}
              <div className="space-y-12 text-base sm:text-lg leading-relaxed text-[var(--ink)] font-light">
                {post.content.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mb-5">
                      {section.title}
                    </h2>
                    <div className="space-y-5 text-[var(--ink)]">
                      {section.paragraphs.map((para, i) => (
                        <p key={i} className="leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}

                {/* Conclusion Block */}
                <div className="p-8 rounded-[24px] bg-[var(--card)] border border-[var(--line)] mt-12">
                  <h3 className="text-xl font-bold tracking-tight text-[var(--ink)] mb-3">
                    Conclusion &amp; Key Takeaway
                  </h3>
                  <p className="text-base text-[var(--mut)] font-normal leading-relaxed">
                    {post.content.conclusion}
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (Table of Contents & Meta) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              {/* Table of Contents Card */}
              <div className="quiet-card rounded-[24px] p-6 border border-[var(--line)] bg-[var(--card)]">
                <div className="text-[12px] uppercase tracking-[0.14em] font-medium text-[var(--mut)] mb-4">
                  Contents
                </div>
                <ArticleTOC items={post.toc} />
              </div>

              {/* About Author Card */}
              <div className="quiet-card rounded-[24px] p-6 border border-[var(--line)] bg-[var(--card)]">
                <div className="text-[12px] uppercase tracking-[0.14em] font-medium text-[var(--mut)] mb-3">
                  Author
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-[var(--line)] flex items-center justify-center font-medium text-sm text-[var(--ink)] flex-shrink-0">
                    <User className="w-4 h-4 text-[var(--mut)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--ink)]">
                      {post.author.name}
                    </h4>
                    <p className="text-xs text-[var(--mut)] leading-relaxed mt-1">
                      {post.author.role}. Focusing on calm, scalable workflows and resilient software architecture.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Strip */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 pt-16 border-t border-[var(--line)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[12px] uppercase tracking-[0.14em] font-medium text-[var(--mut)] block mb-1">
                    Related
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
                    Continue <em>reading.</em>
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-[12px] uppercase tracking-[0.14em] font-medium text-[var(--mut)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1"
                >
                  All articles <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} data-cursor="read" className="group block">
                    <div className="quiet-card rounded-[24px] overflow-hidden border border-[var(--line)] bg-[var(--card)] hover:border-[#d0ccc2] transition-all hover:-translate-y-1">
                      <div className="h-28 w-full bg-gradient-to-br from-[#ECE8E0] via-[#E4DFD5] to-[#D8D2C6] border-b border-line p-4 flex items-start justify-between relative overflow-hidden">
                        <div className="pearl-orb w-12 h-12 opacity-50 absolute -right-2 -bottom-2 pointer-events-none" />
                        <span className="text-[11px] font-medium tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-pill text-ink border border-line">
                          {related.category}
                        </span>
                        <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">
                          {related.readTime}
                        </span>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold tracking-tight text-[var(--ink)] group-hover:text-[#404040] transition-colors mb-2">
                          {related.title}
                        </h4>
                        <p className="text-xs text-[var(--mut)] line-clamp-2 leading-relaxed font-light">
                          {related.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-[32px] bg-[#121212] text-[#F4F2EE] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[12px] uppercase tracking-[0.14em] font-medium text-[#C9B99A] block mb-2">
                [ WORK WITH US ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
                Ready to automate your workflows?
              </h3>
              <p className="text-sm text-[#A8A59E] font-light">
                Speak directly with an AI architect. No sales pitch, just an honest systems evaluation.
              </p>
            </div>
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F4F2EE] text-[#121212] font-semibold text-sm hover:bg-white transition-all shadow-md flex-shrink-0 min-h-[44px]"
              >
                Schedule evaluation <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </article>
    </>
  );
}
