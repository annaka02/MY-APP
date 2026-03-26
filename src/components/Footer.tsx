import Link from 'next/link';
import { Zap } from 'lucide-react';

const productLinks = ['Features', 'Pricing', 'Changelog', 'Roadmap'];
const companyLinks = ['About', 'Blog', 'Careers', 'Contact'];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-3">
              <Zap className="w-5 h-5 text-[#FF6D5B]" />
              AgentFlow
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Intelligent automation powered by n8n. Streamline your workflows and grow your business without writing a line of code.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} AgentFlow. All rights reserved.</p>
          <p>
            Powered by{' '}
            <span className="text-[#FF6D5B] font-medium">n8n</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
