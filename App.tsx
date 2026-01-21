
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Prices from './pages/Prices';
import Partners from './pages/Partners';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/precos" element={<Prices />} />
            <Route path="/parcerias" element={<Partners />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky CTA for Mobile */}
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <a 
            href="https://wa.me/244954078332" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
          </a>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
