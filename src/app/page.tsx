import Link from 'next/link';
import { Bot, Workflow, Zap, BarChart3, Shield, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';

const features = [
  {
    Icon: Bot,
    title: 'AI-Powered Decisions',
    description:
      'Advanced language models analyze context and make intelligent decisions in real time — no manual intervention required.',
  },
  {
    Icon: Workflow,
    title: 'n8n Workflow Engine',
    description:
      'Built on n8n, the most flexible open-source automation platform trusted by tens of thousands of businesses worldwide.',
  },
  {
    Icon: Zap,
    title: 'Instant Automation',
    description:
      'Trigger actions across hundreds of apps in milliseconds. Zero code, zero friction — set up in minutes.',
  },
  {
    Icon: BarChart3,
    title: 'Real-Time Analytics',
    description:
      'Monitor every run, every decision, and every outcome with a live dashboard engineered for complete clarity.',
  },
  {
    Icon: Shield,
    title: 'Enterprise Security',
    description:
      'SOC 2 compliant, end-to-end encrypted, with role-based access control and audit logs built in from day one.',
  },
  {
    Icon: Clock,
    title: '24/7 Autonomous Operation',
    description:
      "Your agent never sleeps — no downtime, no manual triggers, no delays. It runs around the clock so you don't have to.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center text-center px-4 pt-24 pb-36 overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="w-[700px] h-[500px] rounded-full bg-[#FF6D5B]/8 blur-[140px]" />
        </div>

        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6D5B]/30 bg-[#FF6D5B]/10 text-[#FF6D5B] text-xs font-semibold mb-7 tracking-wide">
            <Zap className="w-3 h-3" />
            Powered by n8n
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl">
            Your AI Agent,{' '}
            <span className="text-[#FF6D5B]">Fully Automated.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
            AgentFlow connects intelligence with action — automating complex workflows,
            decisions, and integrations so your team can focus on what actually matters.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.26}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <CTAButton />
            <Link
              href="#features"
              className="px-6 py-3 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:bg-white/5 transition-all"
            >
              See how it works
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.34}>
          <p className="mt-14 text-xs text-gray-600 tracking-widest uppercase">
            Trusted by 500+ teams &nbsp;·&nbsp; Built on open source &nbsp;·&nbsp; GDPR compliant
          </p>
        </ScrollReveal>
      </section>

      {/* ── Features ─────────────────────────────────────────────────── */}
      <section id="features" className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything your agent needs
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">
              From data ingestion to decision-making and action execution —
              AgentFlow handles the full pipeline, end to end.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ Icon, title, description }, i) => (
              <ScrollReveal key={title} delay={i * 0.07}>
                <div className="group h-full p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#FF6D5B]/25 hover:bg-[#FF6D5B]/5 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#FF6D5B] mb-4" />
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <section id="contact" className="px-4 py-24 bg-[#0d0d0d]">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Ready to automate? Tell us about your use case and we&apos;ll get
              back to you within 24 hours.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="p-8 rounded-2xl bg-[#111111] border border-white/5">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
