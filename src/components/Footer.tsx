import Link from 'next/link';
import { Mic } from 'lucide-react';

const productLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact', href: '#beta' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-blue-900 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Mic className="w-4 h-4 text-white" />
              </div>
              VoicePost
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Turn your WhatsApp voice notes into polished LinkedIn, X, and Substack posts — powered by AI, reviewed by you.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-blue-900 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-blue-900 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} VoicePost. All rights reserved.</p>
          <p>Made with ❤️ for Mest Africa</p>
        </div>
      </div>
    </footer>
  );
}
