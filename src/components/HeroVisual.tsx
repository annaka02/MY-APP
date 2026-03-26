'use client';

import { motion } from 'framer-motion';
import { Mic, Zap, CheckCircle } from 'lucide-react';

const platforms = [
  { label: 'LinkedIn', color: '#0A66C2', short: 'in' },
  { label: 'X', color: '#000000', short: 'X' },
  { label: 'Substack', color: '#FF6719', short: 'S' },
];

function Connector({ delay }: { delay: number }) {
  return (
    <div className="relative flex items-center w-12 sm:w-20 shrink-0">
      {/* Dashed line */}
      <div className="w-full h-px border-t-2 border-dashed border-gray-300" />
      {/* Traveling dot */}
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-md shadow-emerald-200"
        initial={{ left: 0, opacity: 0 }}
        animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.4,
          delay,
          repeat: Infinity,
          ease: 'linear',
          times: [0, 0.1, 0.9, 1],
        }}
        style={{ translateX: '-50%', translateY: '-50%', top: '50%' }}
      />
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 w-full">
      {/* Step 1 — WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 shadow-md w-40 shrink-0"
      >
        <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-sm">
          <Mic className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <p className="text-xs font-bold text-gray-900">WhatsApp</p>
          <p className="text-xs text-gray-500 mt-0.5">Voice Note</p>
        </div>
        <div className="flex gap-1 items-end h-5">
          {[3, 5, 4, 6, 3, 5].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-green-400"
              animate={{ height: [`${h * 3}px`, `${h * 5}px`, `${h * 3}px`] }}
              transition={{ duration: 0.8, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>

      {/* Connector 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="hidden sm:flex"
      >
        <Connector delay={0.8} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="sm:hidden w-px h-8 border-l-2 border-dashed border-gray-300 relative"
      >
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-sm left-1/2 -translate-x-1/2"
          initial={{ top: 0, opacity: 0 }}
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.4, delay: 0.8, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Step 2 — AI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-blue-900 border border-blue-800 shadow-lg w-40 shrink-0"
      >
        <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <p className="text-xs font-bold text-white">VoicePost AI</p>
          <p className="text-xs text-blue-300 mt-0.5">Powered by n8n</p>
        </div>
        <motion.div
          className="text-xs text-blue-300 bg-blue-800 px-2 py-1 rounded-md font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          writing...
        </motion.div>
      </motion.div>

      {/* Connector 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="hidden sm:flex"
      >
        <Connector delay={1.4} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="sm:hidden w-px h-8 border-l-2 border-dashed border-gray-300 relative"
      >
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-sm left-1/2 -translate-x-1/2"
          initial={{ top: 0, opacity: 0 }}
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.4, delay: 1.4, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Step 3 — Platforms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 shadow-md w-40 shrink-0"
      >
        <div className="flex gap-2">
          {platforms.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-black shadow-sm"
              style={{ backgroundColor: p.color }}
            >
              {p.short}
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xs font-bold text-gray-900">Your Posts</p>
          <p className="text-xs text-gray-500 mt-0.5">Ready to review</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7 }}
          className="flex items-center gap-1 text-xs text-green-600 font-medium"
        >
          <CheckCircle className="w-3.5 h-3.5" />
          Draft ready
        </motion.div>
      </motion.div>
    </div>
  );
}
