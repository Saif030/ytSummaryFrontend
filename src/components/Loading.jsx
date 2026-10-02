import { FileText } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        {/* Logo with pulse */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-indigo-400 rounded-2xl blur-xl opacity-20 animate-pulse" />
          <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
            <FileText className="w-10 h-10 text-indigo-600 animate-bounce" />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading NoteTube</h2>
        <p className="text-sm text-gray-500 mb-8">Preparing your workspace...</p>

        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
               style={{ animation: 'loading 1.5s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 70%; margin-left: 15%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}