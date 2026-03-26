import ScrollReveal from '@/components/ScrollReveal';
import PricingToggle from '@/components/PricingToggle';
import CTABanner from '@/components/CTABanner';
import { Check } from 'lucide-react';

const allFeatures = [
  { label: 'WhatsApp voice note input', free: true, pro: true, team: true },
  { label: 'AI-generated post drafts', free: true, pro: true, team: true },
  { label: 'Review before publishing', free: true, pro: true, team: true },
  { label: 'LinkedIn posts', free: true, pro: true, team: true },
  { label: 'X (Twitter) threads', free: false, pro: true, team: true },
  { label: 'Substack articles', free: false, pro: true, team: true },
  { label: 'English & French support', free: false, pro: true, team: true },
  { label: 'Smart scheduling', free: false, pro: true, team: true },
  { label: 'Weekly analytics on WhatsApp', free: false, pro: true, team: true },
  { label: 'Priority support', free: false, pro: true, team: true },
  { label: 'Up to 5 team members', free: false, pro: false, team: true },
  { label: 'Shared brand voice', free: false, pro: false, team: true },
  { label: 'Custom tone profiles', free: false, pro: false, team: true },
  { label: 'Dedicated onboarding call', free: false, pro: false, team: true },
];

function Cell({ value }: { value: boolean }) {
  return (
    <td className="px-4 py-3.5 text-center">
      {value ? (
        <Check className="w-4 h-4 text-blue-600 mx-auto" />
      ) : (
        <span className="w-4 h-px bg-gray-300 mx-auto block rounded-full" />
      )}
    </td>
  );
}

export default function PricingPage() {
  return (
    <>
      <div className="px-4 py-24 max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold mb-6 tracking-widest uppercase">
            Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees.
            Cancel anytime. Free during beta for Mest entrepreneurs.
          </p>
        </ScrollReveal>

        {/* Toggle + Cards */}
        <ScrollReveal delay={0.1}>
          <PricingToggle />
        </ScrollReveal>

        {/* Feature comparison table */}
        <ScrollReveal delay={0.15} className="mt-20 overflow-x-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Full feature comparison
          </h3>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-4 py-3 text-gray-500 font-medium w-1/2">Feature</th>
                <th className="px-4 py-3 text-gray-900 font-bold text-center">Free</th>
                <th className="px-4 py-3 text-blue-900 font-bold text-center bg-blue-50 rounded-t-lg">Pro</th>
                <th className="px-4 py-3 text-gray-900 font-bold text-center">Team</th>
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <td className="px-4 py-3.5 text-gray-700">{row.label}</td>
                  <Cell value={row.free} />
                  <td className="bg-blue-50/50">
                    <div className="flex justify-center">
                      {row.pro ? (
                        <Check className="w-4 h-4 text-blue-600" />
                      ) : (
                        <span className="w-4 h-px bg-gray-300 block rounded-full" />
                      )}
                    </div>
                  </td>
                  <Cell value={row.team} />
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        {/* FAQ teaser */}
        <ScrollReveal delay={0.2} className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Questions about pricing?{' '}
            <a href="/#beta" className="text-orange-500 font-semibold hover:underline">
              Get in touch
            </a>{' '}
            — we respond within a few hours.
          </p>
        </ScrollReveal>
      </div>

      <CTABanner />
    </>
  );
}
