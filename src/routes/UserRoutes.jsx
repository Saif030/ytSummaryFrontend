import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/userPages/Home';
import Pricing from '../pages/userPages/Pricing';
import Converter from '../pages/userPages/Converter';
import Profile from '../pages/userPages/Profile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function UserRoutes() {
  return (
          <>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/converter" element={<Converter />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </>

  );
}