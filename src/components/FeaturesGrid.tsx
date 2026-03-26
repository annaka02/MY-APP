import { Mic, Layout, Eye, Clock, BarChart2, Lock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    Icon: Mic,
    title: 'Multilingual Voice-to-Text',
    description:
      'Speak in English or French. Our transcription engine handles accents, filler words, and natural speech patterns common to West African entrepreneurs.',
    color: 'bg-green-50 text-green-600',
  },
  {
    Icon: Layout,
    title: 'Format-Native Writing',
    description:
      'Each post is written in the native style of its platform — professional tone for LinkedIn, concise punchy lines for X, and narrative depth for Substack.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    Icon: Eye,
    title: 'Review Before You Publish',
    description:
      'Nothing goes live without your explicit approval. Read every draft on WhatsApp, request edits in plain language, and publish only when you\'re happy.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    Icon: Clock,
    title: 'Smart Scheduling',
    description:
      'VoicePost automatically schedules your posts at optimal engagement times — so your content reaches your audience when they\'re most active.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    Icon: BarChart2,
    title: 'Performance Analytics',
    description:
      'Track reach, impressions, and engagement across all three platforms in one simple weekly summary, delivered straight to your WhatsApp.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    Icon: Lock,
    title: '100% Private & Secure',
    description:
      'Your voice notes are processed and deleted immediately. We never store your audio. Your data is yours — always.',
    color: 'bg-gray-100 text-gray-700',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything you need to stay visible
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Stop letting a busy schedule silence your voice. VoicePost keeps you
            consistently present on every platform that matters.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, description, color }, i) => (
            <ScrollReveal key={title} delay={i * 0.07}>
              <div className="group h-full p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-blue-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
