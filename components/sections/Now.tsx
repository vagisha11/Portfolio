import nowData from '@/content/now.json';

export function Now() {
  return (
    <section id="now" className="min-h-screen px-6 py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden flex items-center">
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12 w-full">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Now
          </h2>
          <p className="text-lg text-gray-600 italic">
            Updated{' '}
            {new Date(nowData.lastUpdated).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Exploring Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900">Exploring</h3>
            </div>
            <ul className="space-y-4">
              {nowData.exploring.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1 flex-shrink-0 text-xl">→</span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reading Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900">Reading</h3>
            </div>
            <ul className="space-y-4">
              {nowData.reading.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-1 flex-shrink-0 text-xl">→</span>
                  <span className="text-gray-700 leading-relaxed italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Building Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900">Building</h3>
            </div>
            <ul className="space-y-4">
              {nowData.building.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1 flex-shrink-0 text-xl">→</span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Making Card - NEW (Personal) */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900">Making</h3>
            </div>
            <ul className="space-y-4">
              {nowData.making.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1 flex-shrink-0 text-xl">→</span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
