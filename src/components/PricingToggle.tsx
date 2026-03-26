'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface Plan {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 29,
    yearly: 23,
    description: 'Perfect for solo builders and small teams exploring automation.',
    features: [
      '500 workflow runs / month',
      '5 active workflows',
      '50+ community integrations',
      'Email support',
      'Basic analytics dashboard',
    ],
    cta: 'Get Started',
    ctaHref: '/',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthly: 79,
    yearly: 63,
    description: 'For growing teams that need power, speed, and priority support.',
    features: [
      '10,000 workflow runs / month',
      'Unlimited active workflows',
      '200+ integrations',
      'Priority email & live chat',
      'Advanced analytics',
      'Custom webhooks',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    ctaHref: '/',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthly: 249,
    yearly: 199,
    description: 'Mission-critical automation for large orgs with custom needs.',
    features: [
      'Unlimited workflow runs',
      'Unlimited workflows',
      'All integrations + custom builds',
      'Dedicated account manager',
      '99.99% SLA guarantee',
      'SSO & advanced RBAC',
      'On-premise deployment option',
      'Custom AI model fine-tuning',
    ],
    cta: 'Contact Sales',
    ctaHref: '/#contact',
    highlighted: false,
  },
];

export default function PricingToggle() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <span className={`text-sm font-medium transition-colors ${!yearly ? 'text-white' : 'text-gray-500'}`}>
          Monthly
        </span>
        <button
          onClick={() => setYearly((v) => !v)}
          aria-label="Toggle billing period"
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
            yearly ? 'bg-[#FF6D5B]' : 'bg-white/20'
          }`}
        >
          <motion.span
            className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
            animate={{ left: yearly ? '1.5rem' : '0.25rem' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>
        <span className={`text-sm font-medium transition-colors ${yearly ? 'text-white' : 'text-gray-500'}`}>
          Yearly{' '}
          <span className="ml-1 px-1.5 py-0.5 rounded bg-[#FF6D5B]/20 text-[#FF6D5B] text-xs font-bold">
            Save 20%
          </span>
        </span>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
              plan.highlighted
                ? 'bg-[#FF6D5B]/10 border-[#FF6D5B]/40 shadow-[0_0_50px_rgba(255,109,91,0.12)]'
                : 'bg-[#111111] border-white/8 hover:border-white/20'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF6D5B] text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                Most Popular
              </div>
            )}

            <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.description}</p>

            {/* Price */}
            <div className="mb-6 flex items-end gap-1">
              <motion.span
                key={`${plan.name}-${yearly}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-4xl font-extrabold"
              >
                ${yearly ? plan.yearly : plan.monthly}
              </motion.span>
              <span className="text-gray-500 text-sm mb-1">/mo</span>
            </div>
            {yearly && (
              <p className="text-xs text-gray-500 -mt-4 mb-6">billed annually</p>
            )}

            {/* Feature list */}
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-[#FF6D5B] mt-0.5 shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <Link
              href={plan.ctaHref}
              className={`text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-[#FF6D5B] text-white hover:bg-[#e5503f]'
                  : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
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
