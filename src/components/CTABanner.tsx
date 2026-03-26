import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="px-4 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mb-8">
          {['bg-orange-500', 'bg-white/40', 'bg-white/20'].map((c, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${c}`} />
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Ready to build your{' '}
          <span className="text-orange-400">online presence</span>?
        </h2>

        <p className="mt-5 text-blue-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Join the Mest entrepreneurs who publish consistently every week —
          without writing a single word. One voice note is all it takes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="#beta"
            className="px-7 py-4 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/30"
          >
            Join the Beta — It&apos;s Free
          </Link>
          <Link
            href="/pricing"
            className="px-7 py-4 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            View Pricing
          </Link>
        </div>

        <p className="mt-6 text-blue-300 text-xs">
          No credit card required · Cancel anytime · WhatsApp only
        </p>
      </div>
    </section>
  );
}
