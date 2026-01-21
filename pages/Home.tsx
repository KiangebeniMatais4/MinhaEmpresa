import React from 'react';
import GrowthChart from '../components/GrowthChart';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn font-sans">
      {/* Hero Section */}
      <section className="relative bg-white text-black overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#7BBCEB] rounded-full opacity-5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-[#7BBCEB]/10 text-[#002B5B] text-sm font-bold mb-6 border border-[#7BBCEB]/20">
                Empresa Jovem Inovador E Em Crescimento Contínuo
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-[#002B5B]">
                Soluções Inteligentes que <span className="text-[#7BBCEB]">Crescem</span> com Você
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Somos uma equipa jovem, inovadora e dedicada a facilitar a vida dos nossos clientes em Angola através de suporte técnico local e tecnologia global.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#/servicos" className="bg-[#002B5B] hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:-translate-y-1">
                  Ver Nossos Serviços
                </a>
                <a href="#/parcerias" className="bg-white border-2 border-gray-100 text-[#002B5B] hover:border-[#7BBCEB] px-8 py-4 rounded-xl font-bold transition-all shadow-sm">
                  Quero ser Parceiro
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center relative">
               <div className="relative w-full max-w-md">
                 {/* Visual mimic of the logo's circuit head */}
                 <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#7BBCEB]/10 rounded-full blur-xl animate-pulse"></div>
                 <div className="bg-gray-50 rounded-[3rem] p-8 border border-gray-100 shadow-2xl relative z-10">
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-[2rem] shadow-inner mb-6">
                       <div className="flex items-end mb-2">
                         <span className="text-[#7BBCEB] font-brand text-6xl leading-none">E</span>
                         <span className="text-black font-brand text-3xl leading-none ml-[-3px] mb-[3px]">ssênciKambas</span>
                       </div>
                       <span className="sub-logo-text text-black font-bold uppercase tracking-[0.4em] text-[10px]">PRESTAÇÃO DE SERVIÇOS</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[#002B5B] font-semibold">
                         <i className="fas fa-check-circle text-[#7BBCEB]"></i>
                         <span>Suporte Técnico em Português</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#002B5B] font-semibold">
                         <i className="fas fa-check-circle text-[#7BBCEB]"></i>
                         <span>Distribuidor Oficial Protrack365</span>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Presentation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002B5B] mb-8">Equipa Jovem, Inovadora e Dedicada</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Nosso diferencial é o foco absoluto na experiência do cliente. Combinamos o dinamismo de uma equipa jovem com o rigor técnico de especialistas para entregar soluções que realmente facilitam o dia a dia de frotas e empresas angolanas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#7BBCEB]/10 text-[#7BBCEB] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4 className="font-bold text-[#002B5B]">Dinamismo</h4>
                <p className="text-sm text-gray-500 mt-2">Agilidade no atendimento e nas instalações técnicas.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#7BBCEB]/10 text-[#7BBCEB] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4 className="font-bold text-[#002B5B]">Inovação</h4>
                <p className="text-sm text-gray-500 mt-2">Processos 100% digitais e relatórios automatizados.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#7BBCEB]/10 text-[#7BBCEB] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="font-bold text-[#002B5B]">Segurança</h4>
                <p className="text-sm text-gray-500 mt-2">Compromisso com a proteção do seu patrimônio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Visualization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#002B5B] mb-4">Crescendo Lado a Lado com Nossos Clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja a evolução da Essêncikambas. Nossa trajetória reflete a confiança que o mercado angolano deposita em nossa tecnologia.
            </p>
          </div>
          
          <GrowthChart />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 transition-all hover:scale-105">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Ano 1 (Início)</p>
              <p className="text-4xl font-extrabold text-[#002B5B]">45+</p>
              <p className="text-sm text-gray-500 mt-2 font-medium">Clientes Iniciais</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 transition-all hover:scale-105">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Hoje ({new Date().getFullYear()})</p>
              <p className="text-4xl font-extrabold text-[#002B5B]">820+</p>
              <p className="text-sm text-gray-500 mt-2 font-medium">Sistemas Ativos</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 transition-all hover:scale-105">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Simulação (Final de 2025)</p>
              <p className="text-4xl font-extrabold text-[#7BBCEB]">1.900+</p>
              <p className="text-sm text-gray-500 mt-2 font-medium">Meta de Expansão</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-[#7BBCEB]/5 border-t border-b border-[#7BBCEB]/10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
               <h3 className="text-2xl font-bold text-[#002B5B] mb-2">Pronto para dar o próximo passo?</h3>
               <p className="text-gray-600">Fale com um de nossos consultores técnicos agora mesmo.</p>
            </div>
            <div className="flex gap-4">
               <a href="tel:+244954078332" className="bg-[#002B5B] text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all">Ligar Agora</a>
               <a href="https://wa.me/244944790744" className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center gap-2">
                 <i className="fab fa-whatsapp"></i> WhatsApp
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
