
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Rastreamento GPS – Protrack365",
      description: "Monitoramento em tempo real, relatórios automatizados, gestão de SIM cards e integração via API.",
      icon: "fa-satellite",
      details: ["Tempo Real", "Relatórios Automáticos", "Gestão de Chips", "API Aberta"]
    },
    {
      title: "Análise de Dados & Automação",
      description: "Sistemas inteligentes de análise integrando Excel, Power BI e Word para decisões baseadas em dados.",
      icon: "fa-chart-pie",
      details: ["Dashboard Power BI", "Automação Excel", "Relatórios Dinâmicos", "Integração Word"]
    },
    {
      title: "Gestão de Frotas",
      description: "Planos mensais escaláveis para empresas de pequeno, médio e grande porte. Controle total de custos.",
      icon: "fa-truck-moving",
      details: ["Controle de Combustível", "Rotas Inteligentes", "Alertas de Manutenção", "Scoring de Motorista"]
    },
    {
      title: "Criação de Sites",
      description: "Desenvolvimento de sites estáticos, portfólios e e-commerce modernos sob agendamento e negociação.",
      icon: "fa-code",
      details: ["Sites Institucionais", "E-commerce", "Portfólios", "Design Responsivo"]
    },
    {
      title: "Instalação de GPS",
      description: "Pacotes Standard, Pro e Premium, adaptados a diferentes necessidades de segurança e logística.",
      icon: "fa-tools",
      details: ["Carros Ligeiros", "Pesados", "Frotas Corporativas", "Motos"]
    },
    {
      title: "Câmeras de Segurança",
      description: "Instalação por agendamento, com orçamento conforme quantidade e complexidade técnica.",
      icon: "fa-video",
      details: ["Câmeras IP", "Analógicas", "Acesso Remoto", "Armazenamento Nuvem"]
    }
  ];

  return (
    <div className="bg-white animate-fadeIn">
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-[#002B5B] mb-6">Nossos Serviços</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de soluções tecnológicas para proteger seu patrimônio, otimizar sua operação e digitalizar sua presença.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="w-16 h-16 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                <i className={`fas ${s.icon} text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-[#002B5B] mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">{s.description}</p>
              <div className="grid grid-cols-1 gap-4">
                {s.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <i className="fas fa-check text-blue-500"></i>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#002B5B] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8 italic">"Soluções inteligentes que crescem com você."</h2>
          <p className="text-blue-200 mb-10 text-lg">
            Da segurança veicular à análise avançada de dados, somos seu parceiro tecnológico em Angola.
          </p>
          <a href="#/precos" className="bg-[#2563EB] hover:bg-blue-600 px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg">
            Ver Planos e Preços
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
