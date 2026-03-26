import Link from 'next/link';
import { Mic } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import CTAButton from '@/components/CTAButton';
import HeroVisual from '@/components/HeroVisual';
import HowItWorks from '@/components/HowItWorks';
import FeaturesGrid from '@/components/FeaturesGrid';
import Testimonials from '@/components/Testimonials';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative px-4 pt-20 pb-16 overflow-hidden">
        {/* Background blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-50 blur-[100px] opacity-70 -z-10"
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-7 tracking-wide uppercase">
                <span>🇬🇭</span>
                Exclusive — Mest Africa
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] max-w-4xl">
                Send a voice note.{' '}
                <span className="text-emerald-600">Post everywhere.</span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={0.16}>
              <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
                You&apos;re building a startup. You don&apos;t have time to write LinkedIn posts,
                X threads, and Substack articles every week. VoicePost does it for you —
                in the time it takes to say what&apos;s on your mind.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.24}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                <CTAButton />
                <Link
                  href="#how-it-works"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-blue-900 hover:text-blue-900 transition-all"
                >
                  <Mic className="w-4 h-4" />
                  See how it works
                </Link>
              </div>
            </ScrollReveal>

            {/* Social proof strip */}
            <ScrollReveal delay={0.32}>
              <p className="mt-10 text-xs text-gray-400 tracking-widest uppercase">
                LinkedIn · X (Twitter) · Substack &nbsp;·&nbsp; WhatsApp only &nbsp;·&nbsp; No app needed
              </p>
            </ScrollReveal>

            {/* Animated visual */}
            <ScrollReveal delay={0.4} className="w-full mt-16">
              <HeroVisual />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <HowItWorks />

      {/* ── Features ─────────────────────────────────────────────────── */}
      <FeaturesGrid />

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── Pricing Preview ──────────────────────────────────────────── */}
      <section className="px-4 py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Start free. Upgrade when you&apos;re ready.
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Free during beta for all Mest entrepreneurs. No credit card required.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 border border-gray-200 w-full sm:w-56">
                <span className="text-3xl font-extrabold text-gray-900">Free</span>
                <span className="text-gray-400 text-sm mt-1">during beta</span>
                <ul className="mt-5 text-sm text-gray-600 text-left space-y-2">
                  <li>✓ 5 posts / month</li>
                  <li>✓ LinkedIn only</li>
                  <li>✓ WhatsApp review</li>
                </ul>
              </div>
              <div className="flex flex-col items-center p-8 rounded-2xl bg-blue-900 border border-blue-700 shadow-lg shadow-blue-100 w-full sm:w-56">
                <span className="text-3xl font-extrabold text-white">$19<span className="text-base font-medium text-blue-300">/mo</span></span>
                <span className="text-blue-300 text-sm mt-1">Pro plan</span>
                <ul className="mt-5 text-sm text-blue-100 text-left space-y-2">
                  <li>✓ Unlimited posts</li>
                  <li>✓ 3 platforms</li>
                  <li>✓ Smart scheduling</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-8">
            <Link
              href="/pricing"
              className="text-sm text-blue-700 font-semibold hover:underline"
            >
              See all plans and features →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <FAQAccordion />

      {/* ── Beta Signup ──────────────────────────────────────────────── */}
      <section id="beta" className="px-4 py-24 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Join the Beta
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Get early access today
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We&apos;re rolling out to a limited number of Mest entrepreneurs first.
              Sign up and we&apos;ll reach out on WhatsApp when your spot is ready.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
