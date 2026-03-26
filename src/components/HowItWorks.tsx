import { Mic, Zap, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    Icon: Mic,
    title: 'Send a Voice Note',
    description:
      'Open WhatsApp and send a voice message to the VoicePost bot. Speak naturally in English or French — your thoughts, your ideas, your story. As short as 30 seconds or as long as 5 minutes.',
    color: 'bg-green-100 text-green-700',
    badge: 'WhatsApp',
    badgeColor: 'bg-green-50 text-green-700 border-green-200',
  },
  {
    number: '02',
    Icon: Zap,
    title: 'AI Writes for You',
    description:
      'Our n8n-powered agent transcribes your audio, extracts the key ideas, and crafts three tailored posts — a professional LinkedIn post, a punchy X thread, and a long-form Substack piece — each with the right tone for its platform.',
    color: 'bg-blue-100 text-blue-700',
    badge: 'VoicePost AI',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Review & Approve',
    description:
      'You receive the drafts directly on WhatsApp. Read through, approve with a simple reply — or ask for edits in plain language. Once you say yes, VoicePost schedules and publishes everything automatically. No extra app needed.',
    color: 'bg-orange-100 text-orange-700',
    badge: 'You\'re in control',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            3 steps, that&apos;s it.
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            No dashboards to learn. No new apps to download. Just WhatsApp — the tool
            you already use every day.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div className="relative flex flex-col h-full">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-8 h-px bg-gray-200 z-10 -translate-y-1/2" />
                )}

                <div className="flex flex-col h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Number */}
                  <span className="text-5xl font-black text-gray-100 leading-none mb-4 select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${step.color}`}>
                    <step.Icon className="w-6 h-6" />
                  </div>

                  {/* Badge */}
                  <span className={`inline-flex w-fit text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${step.badgeColor}`}>
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
