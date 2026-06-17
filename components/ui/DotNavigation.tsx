'use client';

import { useEffect, useState } from 'react';

interface NavSection {
  id: string;
  label: string;
}

const sections: NavSection[] = [
  { id: 'hero', label: 'Top' },
  { id: 'work', label: 'Work' },
  { id: 'thinking', label: 'How I Think' },
  { id: 'experience', label: 'Experience' },
  { id: 'now', label: 'Now' },
  { id: 'contact', label: 'Contact' },
];

export function DotNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
      aria-label="Page navigation"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative"
          aria-label={`Go to ${label}`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125 shadow-lg'
                : 'bg-gray-300 hover:bg-purple-400'
            }`}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
