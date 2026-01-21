
import React from 'react';
import { CONTACTS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          <div>
            <div className="flex flex-col mb-8">
               <div className="flex items-end">
                 <span className="text-[#7BBCEB] font-brand text-3xl leading-none">E</span>
                 <span className="text-white font-brand text-xl leading-none ml-[-2px] mb-[1px]">ssênciKambas</span>
               </div>
               <span className="sub-logo-text text-white font-bold uppercase tracking-[0.3em] mt-1 text-[7px]">PRESTAÇÃO DE SERVIÇOS</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soluções inteligentes que crescem com você. Especialistas em rastreamento GPS e gestão de frotas para o mercado angolano.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#7BBCEB]">Contactos</h4>
            <ul className="space-y-4">
              {CONTACTS.phones.map(phone => (
                <li key={phone} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fas fa-phone text-[#7BBCEB] w-5"></i>
                  {phone}
                </li>
              ))}
              {CONTACTS.emails.map(email => (
                <li key={email} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fas fa-envelope text-[#7BBCEB] w-5"></i>
                  {email}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#7BBCEB]">Localização</h4>
            <p className="text-gray-400 flex items-start gap-3">
              <i className="fas fa-map-marker-alt text-[#7BBCEB] mt-1"></i>
              {CONTACTS.address}
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7BBCEB] transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7BBCEB] transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#7BBCEB] transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Essêncikambas – Prestação de Serviços Lda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
