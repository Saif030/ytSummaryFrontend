import { Link } from 'react-router-dom';
import { FileText, Sparkles, Play, Clock, BookOpen, Upload, Globe, CheckSquare } from 'lucide-react';
import PricingSection from './Pricing';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          Powered by Advanced AI
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Turn YouTube Videos into <span className="text-indigo-600">Smart Notes</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Paste any YouTube URL and get structured, summarized notes with key timestamps, topics, and action items in seconds.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/converter"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
          >
            Start Converting
          </Link>
          <Link
            to="/pricing"
            className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { title: 'AI Summarization', desc: 'Extract key points and summaries using state-of-the-art language models.', icon: Sparkles },
    { title: 'Timestamp Mapping', desc: 'Every note is linked to the exact moment in the video for easy reference.', icon: Clock },
    { title: 'Topic Clustering', desc: 'Automatically groups content by topics and subtopics for clarity.', icon: BookOpen },
    { title: 'Export Anywhere', desc: 'Download as PDF, Markdown, Notion, or copy to clipboard instantly.', icon: Upload },
    { title: 'Multi-Language', desc: 'Supports 50+ languages with automatic translation of transcripts.', icon: Globe },
    { title: 'Action Items', desc: 'AI identifies tasks, decisions, and follow-ups from the video content.', icon: CheckSquare },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need</h2>
          <p className="text-lg text-gray-600">Powerful features to supercharge your learning and research</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <f.icon className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About NoteTube</h2>
            <p className="text-lg text-gray-600 mb-4">
              NoteTube was born from a simple frustration: spending hours watching educational videos only to forget the key insights days later.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We built an AI-powered platform that listens to YouTube transcripts, understands context, and generates structured notes that actually help you learn, reference, and share knowledge efficiently.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div><div className="text-3xl font-bold text-indigo-600">50K+</div><div className="text-sm text-gray-500">Videos Processed</div></div>
              <div><div className="text-3xl font-bold text-indigo-600">12K+</div><div className="text-sm text-gray-500">Happy Users</div></div>
              <div><div className="text-3xl font-bold text-indigo-600">99.9%</div><div className="text-sm text-gray-500">Uptime</div></div>
              <div><div className="text-3xl font-bold text-indigo-600">50+</div><div className="text-sm text-gray-500">Languages</div></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-sm opacity-75 mb-1">Mission</div>
                <p className="font-medium">Democratize knowledge by making video content searchable, shareable, and actionable.</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-sm opacity-75 mb-1">Vision</div>
                <p className="font-medium">Become the default knowledge companion for every learner, researcher, and professional worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
    </div>
  );
}