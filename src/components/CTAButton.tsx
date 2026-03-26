'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTAButton() {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Pulsing glow ring */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-[#FF6D5B] blur-lg"
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Link
        href="/pricing"
        className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF6D5B] text-white text-sm font-semibold hover:bg-[#e5503f] transition-colors"
      >
        Start Automating
        <span aria-hidden="true">→</span>
      </Link>
    </motion.div>
  );
}
