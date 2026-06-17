export function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

      <div className="relative z-10 max-w-4xl mx-auto w-full space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Open to PM roles in AI-native products, enterprise SaaS, or diagnostic product
            strategy work.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:anandvagisha11@gmail.com"
            className="group flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-purple-100 w-full max-w-md"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-gray-900 font-medium group-hover:text-purple-600 transition-colors">
              anandvagisha11@gmail.com
            </span>
          </a>

          <a
            href="https://linkedin.com/in/vagisha-anand"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-purple-100 w-full max-w-md"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="text-gray-900 font-medium group-hover:text-indigo-600 transition-colors">
              LinkedIn Profile
            </span>
          </a>

          <a
            href="tel:+917338539406"
            className="group flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-purple-100 w-full max-w-md"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-gray-900 font-medium group-hover:text-pink-600 transition-colors">
              +91 733 853 9406
            </span>
          </a>
        </div>

        <div className="text-center pt-8">
          <p className="text-gray-600 text-lg">📍 Bangalore, India</p>
        </div>
      </div>
    </section>
  );
}
