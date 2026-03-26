'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const DRAFT_KEY = 'agentflow_contact_draft';
const EMPTY: FormData = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hydrate draft from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) setForm(JSON.parse(raw) as FormData);
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist draft on every change
  useEffect(() => {
    if (!submitted) {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
    }
  }, [form, submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async submit — replace with n8n webhook URL when ready
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
    console.log('[AgentFlow] Contact form submission (ready for n8n webhook):', form);

    localStorage.removeItem(DRAFT_KEY);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle className="w-14 h-14 text-[#FF6D5B]" />
        <h3 className="text-2xl font-bold">Message sent!</h3>
        <p className="text-gray-400 max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm(EMPTY);
          }}
          className="mt-2 text-sm text-[#FF6D5B] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#FF6D5B] transition-colors text-sm';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your automation needs..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FF6D5B] text-white font-semibold text-sm hover:bg-[#e5503f] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
