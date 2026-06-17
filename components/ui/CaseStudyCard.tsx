'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

interface CaseStudyCardProps {
  caseStudy: {
    id: string;
    title: string;
    company: string;
    hook: string;
    tags: string[];
    pdfPath: string;
  };
  isExpanded: boolean;
  onToggle: (id: string | null) => void;
}

export function CaseStudyCard({ caseStudy, isExpanded, onToggle }: CaseStudyCardProps) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (isExpanded) {
      onToggle(null);
      router.push('/#work', { scroll: false });
    } else {
      onToggle(caseStudy.id);
      router.push(`/work/${caseStudy.id}`, { scroll: false });

      // Don't auto-scroll - let user stay where they are
    }
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
    >
      <motion.button
        layout="position"
        onClick={handleToggle}
        className="w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="text-sm font-medium text-purple-600 mb-2">{caseStudy.company}</div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3 leading-tight">
              {caseStudy.title}
            </h3>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">{caseStudy.hook}</p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-white/80 text-purple-700 rounded-full border border-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-purple-600"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="p-8 bg-white border-t border-purple-100">
              {/* PDF Embed */}
              <div className="pdf-container mb-6">
                <iframe
                  src={`${caseStudy.pdfPath}#view=FitH`}
                  className="w-full"
                  style={{ minHeight: '800px' }}
                  title={`${caseStudy.title} - Case Study`}
                />
              </div>

              {/* Close Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleToggle}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
