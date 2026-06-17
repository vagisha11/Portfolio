'use client';

import Image from 'next/image';

const scrollToWork = () => {
  const element = document.getElementById('work');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
    >
      {/* Animated gradient orbs - MORE SUBTLE */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-300/30 rounded-full blur-2xl scale-110" />
            <Image
              src="/profile.png"
              alt="Vagisha Anand"
              width={280}
              height={280}
              className="relative rounded-full border-4 border-white shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border-2 border-emerald-500 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-emerald-900">
              Open to APM & Business Analyst Roles
            </span>
          </div>

          {/* Headline - DARK TEXT for contrast */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#1E2761] leading-tight">
            I ship the right fixes,
            <br />
            not just the obvious ones.
          </h1>

          {/* Subtext - DARK GRAY for readability */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-medium">
              Product Manager diagnosing where adoption breaks, not where features are missing.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              Specialized in AI-native products, enterprise SaaS, and strategic tradeoffs.
            </p>

            {/* Experience & Location */}
            <p className="text-base text-gray-600 font-medium">
              2+ years experience · Based in Bangalore
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={scrollToWork}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <a
              href="/Vagisha_Anand_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-[#1E2761] text-[#1E2761] font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 hover:bg-[#1E2761] hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
