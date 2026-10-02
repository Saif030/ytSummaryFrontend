import { Link } from 'react-router-dom';
import { FileText, Server, Home, RotateCcw } from 'lucide-react';

export default function ErrorPage({ 
  status = 500, 
  title = 'Server Error', 
  message = 'Something went wrong on our end. We are working to fix it.' 
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Illustration */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-40" />
          <div className="relative w-24 h-24 bg-white rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center">
            <Server className="w-10 h-10 text-gray-400" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Error {status}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Footer branding */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-400">
          <FileText className="w-4 h-4" />
          <span className="text-sm">NoteTube</span>
        </div>
      </div>
    </div>
  );
}