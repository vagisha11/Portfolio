'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { caseStudies } from '@/content/case-studies';

export function SelectedWork() {
  const pathname = usePathname();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Handle direct links to case studies
  useEffect(() => {
    if (pathname.startsWith('/work/')) {
      const id = pathname.replace('/work/', '');
      if (caseStudies.find((cs) => cs.id === id)) {
        setExpandedId(id);
      }
    } else if (pathname === '/' || pathname === '/work') {
      setExpandedId(null);
    }
  }, [pathname]);

  return (
    <section id="work" className="min-h-screen px-6 py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Three deep case studies that demonstrate diagnostic thinking, strategic tradeoffs,
            and measurable outcomes.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              isExpanded={expandedId === caseStudy.id}
              onToggle={setExpandedId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
