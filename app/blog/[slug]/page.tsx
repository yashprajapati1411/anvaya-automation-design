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
  if (!post) return { title: 'Article Not Found | Anvaya Automation' };

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
      <ReadingProgressBar />

      <article className="min-h-screen bg-bg text-ink pt-32 pb-24">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Breadcrumb & Back */}
          <FadeUp>
            <div className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-muted mb-8">
              <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-ink transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
              </Link>
              <span>/</span>
              <span>{post.category}</span>
            </div>
          </FadeUp>

          {/* Article Header & Compact Editorial Layout */}
          <FadeUp delay={0.1}>
            <div className="pb-10 mb-12 border-b border-line">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Article Title, Meta, Author */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold tracking-[0.14em] uppercase text-muted mb-5">
                    <span className="px-3 py-1 rounded-pill bg-card border border-line text-ink">
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

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink mb-6 leading-[1.08]">
                    {post.title}
                  </h1>

                  {/* Author Strip & Share */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-ink text-ivory flex items-center justify-center font-bold text-sm shadow-xs">
                        {post.author.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">
                          {post.author.name}
                        </div>
                        <div className="text-xs text-muted font-normal">
                          {post.author.role}
                        </div>
                      </div>
                    </div>

                    <ShareButtons title={post.title} />
                  </div>
                </div>

                {/* Right: Sleek Compact Editorial Visual (No oversized banner) */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="w-full max-w-[380px] h-48 sm:h-56 rounded-[24px] overflow-hidden border border-line bg-card shadow-sm relative group">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Main Content Layout with 680px Reading Column + Sticky Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Reading Column */}
            <div className="lg:col-span-8 max-w-[700px]">
              <p className="text-xl sm:text-2xl text-ink font-normal leading-relaxed mb-10 pb-8 border-b border-line">
                {post.content.intro}
              </p>

              {/* Pull Quote without cursive fonts */}
              <blockquote className="my-12 pl-6 sm:pl-8 border-l-2 border-ink py-2">
                <p className="text-2xl sm:text-3xl font-semibold leading-snug text-ink">
                  &ldquo;{post.pullQuote}&rdquo;
                </p>
                <cite className="block mt-4 text-[12px] uppercase tracking-[0.14em] text-muted not-italic font-medium">
                  — Principles of Quiet Automation
                </cite>
              </blockquote>

              {/* Article Content Sections */}
              <div className="space-y-12 text-base sm:text-lg leading-relaxed text-ink font-light">
                {post.content.sections.map((section) => (
                  <FadeUp key={section.id}>
                    <section id={section.id} className="scroll-mt-32">
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-5">
                        {section.title}
                      </h2>
                      <div className="space-y-5 text-ink">
                        {section.paragraphs.map((para, i) => (
                          <p key={i} className="leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </section>
                  </FadeUp>
                ))}

                {/* Conclusion Block */}
                <FadeUp>
                  <div className="p-8 rounded-[24px] bg-card border border-line mt-12">
                    <h3 className="text-xl font-bold tracking-tight text-ink mb-3">
                      Conclusion &amp; Key Takeaway
                    </h3>
                    <p className="text-base text-muted font-normal leading-relaxed">
                      {post.content.conclusion}
                    </p>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="quiet-card rounded-[24px] p-6 border border-line bg-card">
                <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-muted mb-4">
                  Contents
                </div>
                <ArticleTOC items={post.toc} />
              </div>

              <div className="quiet-card rounded-[24px] p-6 border border-line bg-card">
                <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-muted mb-3">
                  Author
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center font-medium text-sm text-ink flex-shrink-0">
                    <User className="w-4 h-4 text-muted" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">
                      {post.author.name}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed mt-1">
                      {post.author.role}. Focusing on calm, scalable workflows and resilient software architecture.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Strip */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 pt-16 border-t border-line">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[12px] uppercase tracking-[0.14em] font-semibold text-muted block mb-1">
                    Related
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                    Continue reading.
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-[12px] uppercase tracking-[0.14em] font-semibold text-muted hover:text-ink transition-colors inline-flex items-center gap-1"
                >
                  All articles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} data-cursor="read" className="group block">
                    <div className="quiet-card rounded-[24px] overflow-hidden border border-line bg-card hover:border-[#d0ccc2] transition-all hover:-translate-y-1">
                      <div className="h-44 w-full relative overflow-hidden bg-neutral-200">
                        <img
                          src={related.imageUrl}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-pill text-ink border border-line">
                            {related.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold tracking-tight text-ink group-hover:text-neutral-900 transition-colors mb-2">
                          {related.title}
                        </h4>
                        <p className="text-xs text-muted line-clamp-2 leading-relaxed font-light">
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
              <span className="text-[12px] uppercase tracking-[0.16em] font-semibold text-[#C9B99A] block mb-2">
                WORK WITH US
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 text-white">
                Ready to automate your workflows?
              </h3>
              <p className="text-sm text-[#A8A59E] font-light">
                Speak directly with an AI architect. No sales pitch, just an honest systems evaluation.
              </p>
            </div>
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F4F2EE] text-[#121212] font-semibold text-sm hover:bg-white transition-all shadow-md flex-shrink-0 min-h-[46px]"
              >
                <span>Schedule evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </article>
    </>
  );
}
