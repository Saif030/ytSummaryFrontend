import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Edit3, Bell } from 'lucide-react';

export default function Profile() {
  const [user] = useState({
    name: 'Alex Johnson',
    email: 'alex@example.com',
    plan: 'Pro',
    joined: 'Jan 2026',
    notesCount: 42,
  });

  const stats = [
    { label: 'Total Notes', value: user.notesCount },
    { label: 'Videos Processed', value: '38' },
    { label: 'Time Saved', value: '12h 30m' },
    { label: 'Streak', value: '7 days' },
  ];

  const recentNotes = [
    { title: 'The Future of AI in Education', date: '2 hours ago', type: 'Summary' },
    { title: 'React Server Components Explained', date: 'Yesterday', type: 'Detailed' },
    { title: 'Building Scalable Systems', date: '3 days ago', type: 'Summary' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
              {user.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>
              <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">{user.plan} Plan</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Joined {user.joined}</span>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition flex items-center gap-2">
              <Edit3 className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Notes</h2>
            <Link to="/converter" className="text-sm text-indigo-600 font-medium hover:text-indigo-500">View All</Link>
          </div>
          <div className="space-y-3">
            {recentNotes.map((note, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Play className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{note.title}</h4>
                    <p className="text-sm text-gray-500">{note.date}</p>
                  </div>
                </div>
                <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-600">{note.type}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <p className="font-medium text-gray-900 flex items-center gap-2"><Bell className="w-4 h-4" /> Email Notifications</p>
                <p className="text-sm text-gray-500">Receive weekly digest of your notes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Default Export Format</p>
                <p className="text-sm text-gray-500">Choose your preferred note format</p>
              </div>
              <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white">
                <option>Markdown</option>
                <option>PDF</option>
                <option>Notion</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}