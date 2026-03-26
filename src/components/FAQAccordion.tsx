'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'Do I need to download any app?',
    answer:
      'No. VoicePost works entirely through WhatsApp — an app you already have. You send a voice note to the VoicePost bot, and you receive your post drafts back in the same chat. No sign-ups, no dashboards, no extra installs required.',
  },
  {
    question: 'Which languages are supported?',
    answer:
      'Currently English and French are fully supported, with strong performance on West African accents and dialects. We are actively expanding to include Twi, Pidgin, and Wolof based on demand from the Mest community.',
  },
  {
    question: 'Are my voice notes stored or shared?',
    answer:
      'Never. Your audio is transcribed in real time and permanently deleted immediately after processing. We do not store, listen to, or share your voice recordings. Your ideas are yours — we just help you express them.',
  },
  {
    question: 'Can I edit the post before it gets published?',
    answer:
      'Absolutely — and this is a core feature. After VoicePost generates your drafts, you review every single one on WhatsApp before anything is published. You can approve as-is, request a specific change in plain language ("make the LinkedIn post shorter"), or reject entirely. Nothing goes live without your say-so.',
  },
  {
    question: 'How does the AI adapt the tone for each platform?',
    answer:
      'Each platform has a distinct content culture. LinkedIn rewards professional insight and storytelling. X rewards brevity, wit, and provocation. Substack rewards depth and narrative. VoicePost is trained on thousands of high-performing posts from each platform and automatically adapts the same core idea into the right format, length, and register for each audience.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Questions? We&apos;ve got answers.
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className={`rounded-xl border transition-colors duration-200 ${isOpen ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-semibold text-sm sm:text-base leading-snug ${isOpen ? 'text-blue-900' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
