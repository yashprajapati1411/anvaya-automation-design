'use client';

import React, { useState } from 'react';
import { Copy, Check, Twitter, Linkedin } from 'lucide-react';

interface Props {
  title: string;
}

export default function ShareButtons({ title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== 'undefined') {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const handleTwitter = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`"${title}" via @AnvayaAutomation`);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    }
  };

  const handleLinkedin = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--card)] hover:border-[var(--ink)] flex items-center justify-center text-[var(--mut)] hover:text-[var(--ink)] transition-colors relative"
        title="Copy article link"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-ink" /> : <Copy className="w-3.5 h-3.5" />}
      </button>

      <button
        onClick={handleTwitter}
        aria-label="Share on X / Twitter"
        className="w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--card)] hover:border-[var(--ink)] flex items-center justify-center text-[var(--mut)] hover:text-[var(--ink)] transition-colors"
        title="Share on X"
      >
        <Twitter className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={handleLinkedin}
        aria-label="Share on LinkedIn"
        className="w-8 h-8 rounded-full border border-[var(--line)] bg-[var(--card)] hover:border-[var(--ink)] flex items-center justify-center text-[var(--mut)] hover:text-[var(--ink)] transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
