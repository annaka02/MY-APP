'use client';

import { useState, useRef } from 'react';
import {
  Mic, Upload, Copy, Check, Loader2,
  ChevronDown, ChevronUp, AlertCircle, Zap,
} from 'lucide-react';
import type { GeneratedPosts, ProcessVoiceResponse, ProcessVoiceError } from '@/lib/types';

// ── Types ──────────────────────────────────────────────────────────────────

type Step = 'idle' | 'transcribing' | 'generating' | 'done' | 'error';

const STEPS: { key: Step; label: string }[] = [
  { key: 'transcribing', label: '🎙 Transcribing with Whisper...' },
  { key: 'generating',   label: '⚡ Claude is writing your posts...' },
  { key: 'done',         label: '✅ Done! Your posts are ready.' },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-blue-900 transition-colors"
    >
      {copied
        ? <><Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!</>
        : <><Copy className="w-3.5 h-3.5" /> Copy</>
      }
    </button>
  );
}

function PostCard({
  platform,
  badge,
  badgeColor,
  content,
  extra,
}: {
  platform: string;
  badge: string;
  badgeColor: string;
  content: string;
  extra?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div className={`flex items-center justify-between px-5 py-3 border-b border-gray-100 ${badgeColor}`}>
        <span className="text-sm font-bold">{platform}</span>
        <span className="text-xs font-medium opacity-70">{badge}</span>
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1">
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>
        {extra}
        <div className="flex justify-end pt-1 border-t border-gray-50">
          <CopyButton text={content} />
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [step, setStep]             = useState<Step>('idle');
  const [fileName, setFileName]     = useState('');
  const [transcript, setTranscript] = useState('');
  const [posts, setPosts]           = useState<GeneratedPosts | null>(null);
  const [error, setError]           = useState('');
  const [showTranscript, setShowTranscript] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setStep('idle');
    setFileName('');
    setTranscript('');
    setPosts(null);
    setError('');
    setShowTranscript(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const processFile = async (file: File) => {
    setFileName(file.name);
    setError('');
    setPosts(null);
    setTranscript('');

    try {
      setStep('transcribing');

      const formData = new FormData();
      formData.append('audio', file);

      // Simulate step transition for UX (real steps happen server-side)
      const generatingTimer = setTimeout(() => setStep('generating'), 4000);

      const res = await fetch('/api/process-voice', {
        method: 'POST',
        body: formData,
      });

      clearTimeout(generatingTimer);

      const data: ProcessVoiceResponse | ProcessVoiceError = await res.json();

      if (!res.ok || !('success' in data)) {
        throw new Error((data as ProcessVoiceError).error || 'Processing failed.');
      }

      setTranscript((data as ProcessVoiceResponse).transcript);
      setPosts((data as ProcessVoiceResponse).posts);
      setStep('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setStep('error');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const isProcessing = step === 'transcribing' || step === 'generating';

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-5 uppercase tracking-wide">
            <Zap className="w-3.5 h-3.5" />
            Live Demo
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Voice → 3 Posts in seconds
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Upload a voice note (mp3, m4a, wav, webm). Whisper transcribes it.
            Claude Opus 4.6 writes your LinkedIn, X, and Substack posts.
          </p>
        </div>

        {/* Upload Zone */}
        {step === 'idle' && (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="relative flex flex-col items-center justify-center gap-4 p-12 rounded-2xl border-2 border-dashed border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer group"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <Mic className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900 mb-1">Drop your voice note here</p>
              <p className="text-sm text-gray-400">or click to browse · mp3, m4a, wav, webm · max 25 MB</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Upload className="w-3.5 h-3.5" />
              Select audio file
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="flex flex-col items-center gap-6 p-12 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-blue-900 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900 mb-1">
                {STEPS.find(s => s.key === step)?.label}
              </p>
              <p className="text-sm text-gray-400">{fileName}</p>
            </div>
            {/* Step progress */}
            <div className="flex items-center gap-3 w-full max-w-sm">
              {STEPS.slice(0, 2).map((s, i) => (
                <div key={s.key} className="flex items-center gap-3 flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                    s.key === step
                      ? 'bg-blue-900 text-white scale-110'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {i + 1}
                  </div>
                  <div className={`h-px flex-1 transition-colors ${s.key === 'transcribing' && step === 'generating' ? 'bg-blue-900' : 'bg-gray-200'}`} />
                </div>
              ))}
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step === 'generating' ? 'bg-blue-900 text-white scale-110' : 'bg-gray-100 text-gray-400'}`}>
                2
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {step === 'error' && (
          <div className="flex flex-col items-center gap-4 p-10 rounded-2xl bg-red-50 border border-red-100">
            <AlertCircle className="w-10 h-10 text-red-500" />
            <div className="text-center">
              <p className="font-semibold text-red-700 mb-1">Something went wrong</p>
              <p className="text-sm text-red-500 max-w-sm">{error}</p>
            </div>
            <button
              onClick={reset}
              className="px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Results */}
        {step === 'done' && posts && (
          <div className="flex flex-col gap-6">
            {/* Success bar */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <Check className="w-4 h-4" />
                3 posts generated from &ldquo;{fileName}&rdquo;
              </div>
              <button
                onClick={reset}
                className="text-xs text-emerald-600 hover:underline font-medium"
              >
                Process another
              </button>
            </div>

            {/* Transcript toggle */}
            <button
              onClick={() => setShowTranscript(v => !v)}
              className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white border border-gray-100 shadow-sm text-sm font-medium text-gray-700 hover:border-blue-200 transition-colors"
            >
              <span>📝 View transcript</span>
              {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {showTranscript && (
              <div className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-600 leading-relaxed">
                {transcript}
              </div>
            )}

            {/* Post cards */}
            <div className="grid grid-cols-1 gap-5">
              {/* LinkedIn */}
              <PostCard
                platform="LinkedIn"
                badge="Professional post"
                badgeColor="bg-blue-50 text-blue-700"
                content={posts.linkedin.post}
                extra={
                  posts.linkedin.hashtags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {posts.linkedin.hashtags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )
                }
              />

              {/* X Thread */}
              <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-900 text-white">
                  <span className="text-sm font-bold">X (Twitter)</span>
                  <span className="text-xs opacity-60">{posts.x.thread.length}-tweet thread</span>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {posts.x.thread.map((tweet, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 leading-relaxed">{tweet}</p>
                        <p className={`text-xs mt-1 ${tweet.length > 260 ? 'text-red-500 font-semibold' : 'text-gray-400'}`}>
                          {tweet.length}/280
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end pt-2 border-t border-gray-50">
                    <CopyButton text={posts.x.thread.join('\n\n')} />
                  </div>
                </div>
              </div>

              {/* Substack */}
              <PostCard
                platform="Substack"
                badge="Article"
                badgeColor="bg-orange-50 text-orange-700"
                content={posts.substack.content}
                extra={
                  <div className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">Title</p>
                    <p className="font-bold text-gray-900">{posts.substack.title}</p>
                  </div>
                }
              />
            </div>
          </div>
        )}

        {/* API note */}
        <p className="text-center text-xs text-gray-400 mt-10">
          Pipeline: WhatsApp voice note → Whisper (transcription) → Claude Opus 4.6 (generation) → n8n (publish)
          <br />
          <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">POST /api/process-voice</span>
        </p>
      </div>
    </div>
  );
}
