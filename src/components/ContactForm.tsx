'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  cohort: string;
  message: string;
}

const DRAFT_KEY = 'voicepost_beta_draft';
const EMPTY: FormData = { name: '', email: '', cohort: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) setForm(JSON.parse(raw) as FormData);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!submitted) {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
    }
  }, [form, submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise<void>((r) => setTimeout(r, 900));
    console.log('[VoicePost] Beta signup (ready for n8n webhook):', form);
    localStorage.removeItem(DRAFT_KEY);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">You&apos;re on the list!</h3>
        <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
          We&apos;ll reach out on WhatsApp as soon as your beta access is ready.
          Welcome to the future of effortless content creation.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(EMPTY); }}
          className="mt-2 text-sm text-orange-500 hover:underline font-medium"
        >
          Register another person
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-sm';

  const cohorts = Array.from({ length: 16 }, (_, i) => `Cohort ${i + 1}`);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Ama Kusi"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="ama@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cohort" className="text-sm font-medium text-gray-700">
          Mest Cohort <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <select
          id="cohort"
          name="cohort"
          value={form.cohort}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select your cohort</option>
          {cohorts.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
          <option value="Alumni">Alumni</option>
          <option value="Not from Mest">Not from Mest</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          What platforms do you want to grow?{' '}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="e.g. LinkedIn mainly, maybe X. I've been trying to post consistently but never find the time..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-orange-100"
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request Beta Access
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400">
        Free during beta · No credit card · We&apos;ll contact you on WhatsApp
      </p>
    </form>
  );
}
