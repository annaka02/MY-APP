import ScrollReveal from '@/components/ScrollReveal';
import PricingToggle from '@/components/PricingToggle';

export default function PricingPage() {
  return (
    <div className="px-4 py-24 max-w-7xl mx-auto">
      <ScrollReveal className="text-center mb-16">
        <div className="inline-block px-3 py-1 rounded-full border border-[#FF6D5B]/30 bg-[#FF6D5B]/10 text-[#FF6D5B] text-xs font-semibold mb-6 tracking-wide uppercase">
          Pricing
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">
          Start free, scale as you grow. No hidden fees, no lock-in.
          Cancel anytime.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <PricingToggle />
      </ScrollReveal>

      {/* FAQ teaser */}
      <ScrollReveal delay={0.2} className="mt-20 text-center">
        <p className="text-gray-500 text-sm">
          Questions?{' '}
          <a href="/#contact" className="text-[#FF6D5B] hover:underline">
            Talk to our team
          </a>{' '}
          — we typically respond within a few hours.
        </p>
      </ScrollReveal>
    </div>
  );
}
