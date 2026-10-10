'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { blogsData } from '@/data/blogsData';
import { FadeUp } from '@/components/ui/FadeUp';

const categories = ['All', 'AI', 'Automation', 'Web', 'Cloud', 'SEO', 'Marketing'] as const;

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogsData.find((p) => p.featured) || blogsData[0];

  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-bg text-ink pt-32 pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="mb-12">
            <div className="quiet-tag mb-4">Editorial Dispatches</div>
            <h1 className="text-[clamp(2.5rem,6vw,5.25rem)] font-bold tracking-tight leading-[1.02] mb-4 pb-2">
              Insights &amp; ideas.
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl font-light leading-relaxed">
              Calm, practical essays on artificial intelligence, technical software architecture, and compound organizational growth.
            </p>
          </div>
        </FadeUp>

        {/* Filter and Search Bar */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-line mb-12">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap min-h-[40px] ${
                      isActive
                        ? 'text-ink font-bold'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeBlogFilter"
                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-line"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-card border border-line rounded-full pl-10 pr-4 py-2.5 text-sm text-ink placeholder-muted focus:outline-none focus:border-ink transition-colors min-h-[44px]"
              />
            </div>
          </div>
        </FadeUp>

        {/* Featured Post Card with Real Image */}
        {selectedCategory === 'All' && !searchQuery.trim() && featuredPost && (
          <FadeUp delay={0.15}>
            <div className="mb-16">
              <Link href={`/blog/${featuredPost.slug}`} data-cursor="read" className="group block">
                <div className="quiet-card rounded-[32px] overflow-hidden border border-line bg-card p-8 sm:p-12 transition-all duration-500 hover:shadow-xl hover:border-[#d0ccc2]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Container */}
                    <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-[24px] bg-neutral-200 border border-line overflow-hidden">
                      <img
                        src={featuredPost.imageUrl}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 text-[11px] font-semibold tracking-[0.14em] uppercase text-ink bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-line">
                        FEATURED ESSAY
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase text-muted mb-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-white border border-line text-ink font-semibold">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 group-hover:text-neutral-900 transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      <p className="text-base sm:text-lg text-muted mb-6 font-light leading-relaxed">
                        {featuredPost.summary}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-line">
                        <div className="text-sm font-semibold text-ink">
                          {featuredPost.author.name}
                          <span className="block text-xs font-normal text-muted">
                            {featuredPost.author.role}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:translate-x-1 transition-transform">
                          Read article <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </FadeUp>
        )}

        {/* Blog Post Grid with Thematic Image Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link href={`/blog/${post.slug}`} data-cursor="read" className="group block h-full">
                  <div className="quiet-card h-full rounded-[28px] overflow-hidden flex flex-col justify-between border border-line bg-card hover:border-[#cfcbc1] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div>
                      {/* Thematic Image Header */}
                      <div className="h-48 w-full relative overflow-hidden bg-neutral-200">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-pill text-ink border border-line shadow-sm">
                            {post.category}
                          </span>
                          <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-ivory drop-shadow-md">
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-7">
                        <h3 className="text-xl font-bold tracking-tight text-ink mb-3 group-hover:text-neutral-900 transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted font-light leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="p-7 pt-0 border-t border-line/50 flex items-center justify-between text-xs sm:text-sm text-muted mt-auto">
                      <span className="text-[12px] font-medium tracking-[0.14em] uppercase">{post.date}</span>
                      <span className="inline-flex items-center gap-1 font-bold text-ink group-hover:translate-x-1 transition-transform">
                        Read Essay <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
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
