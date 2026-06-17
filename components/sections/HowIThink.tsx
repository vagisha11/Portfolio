export function HowIThink() {
  return (
    <section id="thinking" className="min-h-screen px-6 py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12 w-full">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            How I Think
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Adoption problems are rarely feature problems
            </h3>
            <p className="text-gray-700 leading-relaxed">
              When a feature isn't being used, the instinct is to add more features. I start by
              diagnosing where users drop off — discovery, setup, first use, or return visit.
              More often than not, the fix is removing friction in the existing journey, not
              building something new.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center mb-4">
              <span className="text-2xl">✂️</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Prioritization is about what you deliberately don't build
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every product roadmap is a series of tradeoffs. Engineering can ship 2–3 things
              deeply or 6–8 things at "good enough" depth. I prioritize ruthlessly: what moves the
              metric that matters most? The hardest call isn't choosing what to build — it's
              defending what not to build.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              "Done" means instrumented and measurable
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Shipping a feature is not the same as shipping value. Every feature I scope includes
              its success metric and instrumentation plan up front — not as an afterthought. If we
              can't measure whether it worked, we shouldn't ship it.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center mb-4">
              <span className="text-2xl">🎪</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Depth beats breadth in competitive markets
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In crowded spaces, trying to match competitors feature-for-feature guarantees you'll
              differentiate nowhere. Customers don't buy the longest feature list — they buy the
              product that's substantially better at solving their specific problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
