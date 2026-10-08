'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { blogsData } from '@/data/blogsData';
import FadeUp from '@/components/ui/FadeUp';
import PearlSphere from '@/components/ui/PearlSphere';
import Magnetic from '@/components/ui/Magnetic';

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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] pt-32 pb-24">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <FadeUp>
          <div className="mb-12">
            <div className="quiet-tag mb-4">
              [ Editorial · Insights ]
            </div>
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] mb-4 pb-2">
              Insights &amp; <em>ideas.</em>
            </h1>
            <p className="text-base sm:text-lg text-[var(--mut)] max-w-2xl font-light leading-relaxed">
              Calm, practical essays on artificial intelligence, technical software architecture, and compound organizational growth.
            </p>
          </div>
        </FadeUp>

        {/* Filter and Search Bar */}
        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--line)] mb-12">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap min-h-[40px] ${
                      isActive
                        ? 'text-[var(--ink)] font-semibold'
                        : 'text-[var(--mut)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeBlogFilter"
                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-[var(--line)]"
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
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--mut)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[var(--card)] border border-[var(--line)] rounded-full pl-10 pr-4 py-2.5 text-sm text-[var(--ink)] placeholder-[var(--mut)] focus:outline-none focus:border-[var(--ink)] transition-colors min-h-[44px]"
              />
            </div>
          </div>
        </FadeUp>

        {/* Featured Post Card */}
        {selectedCategory === 'All' && !searchQuery.trim() && featuredPost && (
          <FadeUp delay={0.15}>
            <div className="mb-16">
              <Link href={`/blog/${featuredPost.slug}`} data-cursor="read" className="group block">
                <div className="quiet-card rounded-[32px] overflow-hidden border border-[var(--line)] bg-[var(--card)] p-8 sm:p-12 transition-all duration-500 hover:shadow-xl hover:border-[#d0ccc2]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual Orb Container */}
                    <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl bg-[#EFECE6] border border-[var(--line)] flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#c9b99a_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className="relative z-10 scale-90 group-hover:scale-100 transition-transform duration-700 ease-out">
                        <PearlSphere size={160} />
                      </div>
                      <div className="absolute bottom-4 left-4 text-[12px] font-medium tracking-[0.14em] uppercase text-[var(--mut)] bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full border border-[var(--line)]">
                        FEATURED ESSAY
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-[12px] font-medium tracking-[0.14em] uppercase text-[var(--mut)] mb-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-white border border-[var(--line)] text-[var(--ink)]">
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

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)] mb-4 group-hover:text-[#2A2A2A] transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      <p className="text-base sm:text-lg text-[var(--mut)] mb-6 font-light leading-relaxed">
                        {featuredPost.summary}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[var(--line)]">
                        <div className="text-sm font-semibold text-[var(--ink)]">
                          {featuredPost.author.name}
                          <span className="block text-xs font-normal text-[var(--mut)]">
                            {featuredPost.author.role}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] group-hover:translate-x-1 transition-transform">
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

        {/* Blog Post Grid with Thumbnail Header & Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <Link href={`/blog/${post.slug}`} data-cursor="read" className="group block h-full">
                  <div className="quiet-card h-full rounded-[28px] overflow-hidden flex flex-col justify-between border border-[var(--line)] bg-[var(--card)] hover:border-[#d0ccc2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div>
                      {/* Soft Pearl Thumbnail Header */}
                      <div className="h-36 w-full bg-gradient-to-br from-[#ECE8E0] via-[#E4DFD5] to-[#D8D2C6] border-b border-line p-5 flex items-start justify-between relative overflow-hidden">
                        <div className="pearl-orb w-16 h-16 opacity-50 absolute -right-3 -bottom-3 pointer-events-none" />
                        <span className="text-[11px] font-medium tracking-[0.14em] uppercase bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-pill text-ink border border-line">
                          {post.category}
                        </span>
                        <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-muted">
                          {post.readTime}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-7">
                        <h3 className="text-xl font-bold tracking-tight text-[var(--ink)] mb-3 group-hover:text-[#404040] transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-sm text-[var(--mut)] font-light leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="p-7 pt-0 border-t border-[var(--line)]/50 flex items-center justify-between text-xs text-[var(--mut)] mt-auto">
                      <span className="text-[12px] font-medium tracking-[0.14em] uppercase">{post.date}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[var(--ink)] group-hover:translate-x-0.5 transition-transform">
                        Read <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-24 bg-[var(--card)] rounded-[32px] border border-[var(--line)]">
            <p className="text-lg font-medium text-[var(--ink)] mb-2">No dispatches found</p>
            <p className="text-sm text-[var(--mut)] mb-6">
              We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--ink)] text-[var(--bg)] hover:bg-black transition-colors min-h-[44px]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <FadeUp delay={0.2}>
          <div className="mt-24 p-8 sm:p-12 rounded-[32px] bg-[#121212] text-[#F4F2EE] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-xl">
              <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-[#C9B99A] mb-3 block">
                [ STUDIO DISPATCHES ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Have a specific architecture question?
              </h3>
              <p className="text-sm text-[#A8A59E] font-light leading-relaxed">
                We write based on real systems we build for growing businesses. Book a quick technical review with our engineering leads.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F4F2EE] text-[#121212] font-semibold text-sm hover:bg-white transition-all shadow-md min-h-[44px]"
                >
                  Start a conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
