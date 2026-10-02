import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">NoteTube</span>
            </div>
            <p className="text-sm text-gray-400">
              Transform YouTube videos into structured notes with AI.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/converter" className="hover:text-white">Converter</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><span className="hover:text-white cursor-pointer">API</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">About</Link></li>
              <li><span className="hover:text-white cursor-pointer">Blog</span></li>
              <li><span className="hover:text-white cursor-pointer">Contact</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white cursor-pointer">Privacy</span></li>
              <li><span className="hover:text-white cursor-pointer">Terms</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 NoteTube. All rights reserved.
        </div>
      </div>
    </footer>
  );
}