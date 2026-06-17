'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface NavSection {
  id: string;
  label: string;
}

const sections: NavSection[] = [
  { id: 'hero', label: 'About' },
  { id: 'work', label: 'Selected Work' },
  { id: 'thinking', label: 'How I Think' },
  { id: 'experience', label: 'Experience' },
  { id: 'now', label: 'Now' },
  { id: 'contact', label: 'Contact' },
];

export function TopNavigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Initial */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            VA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === id
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl border border-gray-100">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-6 py-3 text-base font-medium transition-colors ${
                  activeSection === id
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
