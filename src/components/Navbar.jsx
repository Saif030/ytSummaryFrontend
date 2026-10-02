import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FileText, Menu, X, LogOut, User } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Replace with your real auth state (Context/Redux/Zustand)
  const isLoggedIn = false;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Converter', path: '/converter' },
    { label: 'Pricing', path: '/pricing' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <FileText className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">NoteTube</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(l.path) ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {l.label}
              </Link>
            ))}
            {isLoggedIn && (
              <Link
                to="/profile"
                className={`text-sm font-medium transition-colors ${
                  isActive('/profile') ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Profile
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
              >
                {l.label}
              </Link>
            ))}
            {isLoggedIn && (
              <Link
                to="/profile"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
              >
                Profile
              </Link>
            )}
            {!isLoggedIn && (
              <div className="pt-2 space-y-2 border-t border-gray-100 mt-2">
                <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-600">Log in</Link>
                <Link to="/signup" className="block px-3 py-2 text-base font-medium text-indigo-600">Get Started</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}