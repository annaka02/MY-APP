'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface Plan {
  name: string;
  monthly: number | null;
  yearly: number | null;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    description: 'Get started and see the magic. Perfect for testing the waters.',
    features: [
      '5 posts per month',
      'LinkedIn only',
      'Manual review via WhatsApp',
      'English support',
      'Basic output quality',
    ],
    cta: 'Start for Free',
    ctaHref: '#beta',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthly: 19,
    yearly: 15,
    description: 'For entrepreneurs serious about building their personal brand.',
    features: [
      'Unlimited posts',
      'LinkedIn · X · Substack',
      'Review & approval on WhatsApp',
      'English & French support',
      'Smart scheduling',
      'Weekly performance analytics',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaHref: '#beta',
    highlighted: true,
    badge: 'Recommended',
  },
  {
    name: 'Team',
    monthly: 49,
    yearly: 39,
    description: 'For cohorts, incubators, and startup teams posting as one voice.',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Shared brand voice settings',
      'Team analytics dashboard',
      'Custom tone profiles',
      'Dedicated onboarding call',
    ],
    cta: 'Contact Us',
    ctaHref: '#beta',
    highlighted: false,
  },
];

export default function PricingToggle() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <span className={`text-sm font-medium transition-colors ${!yearly ? 'text-gray-900' : 'text-gray-400'}`}>
          Monthly
        </span>
        <button
          onClick={() => setYearly((v) => !v)}
          aria-label="Toggle billing period"
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
            yearly ? 'bg-emerald-600' : 'bg-gray-300'
          }`}
        >
          <motion.span
            className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
            animate={{ left: yearly ? '1.5rem' : '0.25rem' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>
        <span className={`text-sm font-medium transition-colors ${yearly ? 'text-gray-900' : 'text-gray-400'}`}>
          Yearly{' '}
          <span className="ml-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
            Save 20%
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              plan.highlighted
                ? 'bg-blue-900 border-blue-700 shadow-2xl shadow-blue-200'
                : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow">
                {plan.badge}
              </div>
            )}

            <h2 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
              {plan.name}
            </h2>
            <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? 'text-blue-300' : 'text-gray-500'}`}>
              {plan.description}
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <motion.span
                key={`${plan.name}-${yearly}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}
              >
                {plan.monthly === 0 ? 'Free' : `$${yearly ? plan.yearly : plan.monthly}`}
              </motion.span>
              {plan.monthly !== 0 && (
                <span className={`text-sm mb-1 ${plan.highlighted ? 'text-blue-300' : 'text-gray-400'}`}>
                  /mo
                </span>
              )}
            </div>
            {yearly && plan.monthly !== 0 && (
              <p className={`text-xs mb-6 ${plan.highlighted ? 'text-blue-400' : 'text-gray-400'}`}>
                billed annually
              </p>
            )}

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8 flex-1 mt-4">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? 'text-emerald-500' : 'text-blue-600'}`} />
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.ctaHref}
              className={`text-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
