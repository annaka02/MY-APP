'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  label?: string;
  href?: string;
}

export default function CTAButton({
  label = 'Join the Beta — It\'s Free',
  href = '#beta',
}: Props) {
  return (
    <motion.div
      className="relative inline-flex"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Pulsing glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-orange-500 blur-lg"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Link
        href={href}
        className="relative px-6 py-3.5 rounded-xl bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
      >
        {label}
      </Link>
    </motion.div>
  );
}
