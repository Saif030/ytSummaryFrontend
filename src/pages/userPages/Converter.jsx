import { useState } from 'react';
import { Sparkles, Copy, Download, Play } from 'lucide-react';

export default function Converter() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    if (!url) return;
    setLoading(true);
    setResult(null);
    // Replace with: fetch('/api/convert', { method: 'POST', body: JSON.stringify({ url }) })
    setTimeout(() => {
      setLoading(false);
      setResult({
        title: 'The Future of AI in Education',
        duration: '14:32',
        summary: 'This video explores how artificial intelligence is reshaping educational paradigms, from personalized learning paths to automated grading systems.',
        topics: [
          { name: 'Introduction to AI EdTech', time: '0:00' },
          { name: 'Personalized Learning Algorithms', time: '3:45' },
          { name: 'Automated Assessment Systems', time: '7:20' },
          { name: 'Ethical Considerations', time: '10:15' },
          { name: 'Future Predictions', time: '12:40' },
        ],
        keyPoints: [
          'AI can reduce teacher workload by 40% through automation of grading and scheduling.',
          'Adaptive learning platforms show 30% improvement in student retention rates.',
          'Data privacy remains the biggest challenge in EdTech adoption.',
          'Hybrid AI-human teaching models are predicted to dominate by 2030.',
        ],
        actionItems: [
          'Research adaptive learning platforms for your institution.',
          'Review data privacy policies before adopting AI tools.',
          'Attend the EdTech Summit 2026 for latest trends.',
        ],
      });
    }, 2500);
  };

  const copyToClipboard = () => {
    // Replace with actual copy logic
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">YouTube to Notes</h1>
          <p className="text-gray-600">Paste a YouTube URL and let AI do the rest</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">YouTube URL</label>
          <div className="flex gap-3">
            <input
              type="url"
              placeholder="https://youtube.com/watch?v=..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={handleConvert}
              disabled={loading || !url}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Processing...' : <><Sparkles className="w-4 h-4" /> Convert</>}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">Supports any public YouTube video with transcripts enabled</p>
        </div>

        {loading && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
              <p className="text-gray-500 text-sm mt-4">Fetching transcript... analyzing content... generating notes...</p>
            </div>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{result.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">Duration: {result.duration}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={copyToClipboard} className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Copy className="w-4 h-4" /> {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Download className="w-4 h-4" /> Export
                  </button>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">{result.summary}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Topics & Timestamps</h3>
              <div className="space-y-3">
                {result.topics.map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                      <span className="font-medium text-gray-900">{t.name}</span>
                    </div>
                    <span className="text-sm font-mono text-gray-500 bg-white px-2 py-1 rounded border">{t.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Points</h3>
              <ul className="space-y-3">
                {result.keyPoints.map((kp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                    <span className="text-gray-700">{kp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Action Items</h3>
              <ul className="space-y-3">
                {result.actionItems.map((ai, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded border-2 border-indigo-400 flex items-center justify-center text-indigo-600 text-xs font-bold">{i + 1}</span>
                    <span className="text-gray-700">{ai}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}