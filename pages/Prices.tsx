
import React from 'react';
import { PRICE_LIST } from '../constants';

const PriceCard: React.FC<{ item: typeof PRICE_LIST[0] }> = ({ item }) => {
  const isPartner = item.plan.includes('Parceiro');
  const isSpecial = item.price.toLowerCase().includes('consulta') || item.price.toLowerCase().includes('negociável');
  
  const whatsappUrl = `https://wa.me/244944790744?text=Olá! Gostaria de solicitar informações sobre o serviço: ${item.service} - ${item.plan}`;
  const emailUrl = `mailto:essencikambas@gmail.com?subject=Solicitação de Serviço: ${item.service}&body=Olá, gostaria de saber mais sobre o plano ${item.plan} do serviço ${item.service}.`;

  return (
    <div className={`bg-white rounded-3xl p-6 border transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
      isPartner ? 'border-orange-100 bg-orange-50/10' : 'border-gray-100 shadow-sm'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#002B5B]">{item.service}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase mt-2 ${
            isPartner ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-[#002B5B]'
          }`}>
            {item.plan}
          </span>
        </div>
        <div className="w-10 h-10 bg-[#7BBCEB]/10 rounded-xl flex items-center justify-center text-[#7BBCEB]">
           <i className={`fas ${
             item.service.includes('GPS') ? 'fa-map-marker-alt' : 
             item.service.includes('Frotas') ? 'fa-truck' : 
             item.service.includes('Dados') ? 'fa-chart-line' :
             item.service.includes('Segurança') ? 'fa-video' :
             item.service.includes('Web') ? 'fa-laptop-code' : 'fa-satellite'
           }`}></i>
        </div>
      </div>

      {item.description && (
        <p className="text-gray-500 text-sm mt-2 mb-4 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      )}
      
      <div className="mb-8 mt-auto pt-4 border-t border-gray-50">
        <p className="text-gray-400 text-xs mb-1 font-medium uppercase tracking-wider">{isSpecial ? 'Condição' : 'Investimento'}</p>
        <p className={`text-2xl font-black ${isSpecial ? 'text-[#7BBCEB]' : 'text-[#002B5B]'}`}>
          {item.price}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white py-3 rounded-xl font-bold text-xs transition-all shadow-md"
        >
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a 
          href={emailUrl}
          className="flex items-center justify-center gap-2 bg-[#002B5B] hover:bg-black text-white py-3 rounded-xl font-bold text-xs transition-all shadow-md"
        >
          <i className="fas fa-envelope"></i> E-mail
        </a>
      </div>
    </div>
  );
};

const Prices: React.FC = () => {
  return (
    <div className="bg-white animate-fadeIn pb-24">
      <section className="bg-white py-20 px-4 text-center border-b border-gray-50">
        <h1 className="text-4xl font-extrabold text-[#002B5B] mb-4">Nossas Soluções e Preços</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Valores competitivos e transparentes. Da gestão básica de GPS à análise avançada de dados corporativos.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICE_LIST.map((item, idx) => (
            <PriceCard key={idx} item={item} />
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-xl font-bold text-[#002B5B] mb-6 flex items-center gap-2">
                <i className="fas fa-clipboard-list text-[#7BBCEB]"></i>
                Observações Importantes
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-check text-[10px] text-blue-600"></i>
                  </div>
                  <span>Integração de dados (Excel/Power BI) requer análise prévia do volume de dados.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-check text-[10px] text-blue-600"></i>
                  </div>
                  <span>Criação de sites e e-commerce são orçados com base em funcionalidades e agendamento.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-check text-[10px] text-blue-600"></i>
                  </div>
                  <span>Instalação de câmeras e segurança requer levantamento técnico local obrigatório.</span>
                </li>
              </ul>
           </div>
           <div className="bg-[#002B5B] p-8 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl transition-transform group-hover:scale-110">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Solicite um Orçamento Personalizado</h3>
              <p className="text-blue-200 mb-8 relative z-10">Nossa equipa está pronta para criar um plano que se ajuste perfeitamente à sua necessidade técnica e financeira.</p>
              <div className="flex flex-wrap gap-4 relative z-10">
                <a 
                  href="https://wa.me/244944790744" 
                  target="_blank"
                  className="bg-[#25D366] px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp: 944 790 744
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
