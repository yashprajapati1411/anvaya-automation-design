'use client';

import React, { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
}

interface Props {
  items: TOCItem[];
}

export default function ArticleTOC({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -65% 0px',
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex flex-col space-y-2.5">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`text-left text-xs sm:text-sm transition-colors py-1 pl-2 border-l-2 ${
              isActive
                ? 'border-[var(--ink)] font-semibold text-[var(--ink)]'
                : 'border-transparent text-[var(--mut)] hover:text-[var(--ink)]'
            }`}
          >
            {item.title}
          </button>
        );
      })}
    </nav>
  );
}
