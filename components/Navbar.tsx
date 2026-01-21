
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.hash = '#/'}>
            {/* Logo Visual Representation */}
            <div className="relative flex flex-col items-center">
               <div className="flex items-end">
                 <span className="text-[#7BBCEB] font-brand text-4xl leading-none">E</span>
                 <span className="text-black font-brand text-2xl leading-none ml-[-2px] mb-[2px]">ssênciKambas</span>
               </div>
               <span className="sub-logo-text text-black font-bold uppercase tracking-[0.3em] mt-1 text-[8px]">PRESTAÇÃO DE SERVIÇOS</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#/" className="text-gray-700 hover:text-[#7BBCEB] px-3 py-2 font-medium transition-colors">Home</a>
              <a href="#/servicos" className="text-gray-700 hover:text-[#7BBCEB] px-3 py-2 font-medium transition-colors">Serviços</a>
              <a href="#/precos" className="text-gray-700 hover:text-[#7BBCEB] px-3 py-2 font-medium transition-colors">Preços</a>
              <a href="#/parcerias" className="text-gray-700 hover:text-[#7BBCEB] px-3 py-2 font-medium transition-colors">Parcerias</a>
              <a href="#/precos" className="bg-[#002B5B] hover:bg-black text-white px-6 py-2 rounded-lg font-bold transition-all shadow-md">
                Solicitar Cotação
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-xl">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            <a href="#/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-50">Home</a>
            <a href="#/servicos" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-50">Serviços</a>
            <a href="#/precos" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-50">Preços</a>
            <a href="#/parcerias" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-gray-50">Parcerias</a>
            <div className="px-3 pt-4">
              <a href="#/precos" onClick={() => setIsOpen(false)} className="block w-full text-center bg-[#002B5B] text-white py-3 rounded-xl font-bold">Solicitar Cotação</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
