
import React, { useState } from 'react';

const Partners: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real production environment, this would call an API.
    // For this static version, we simulate a success state and provide a mailto fallback.
    const subject = `Interesse em Parceria - ${formData.company || formData.name}`;
    const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0AEmpresa: ${formData.company}%0D%0AMensagem: ${formData.message}`;
    
    window.location.href = `mailto:essencikambas@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white animate-fadeIn">
      {/* Hero & Benefits */}
      <section className="py-20 bg-[#F3F4F6] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#002B5B] mb-8">Seja nosso parceiro</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Oferecemos condições especiais para revendedores, suporte técnico local e a possibilidade de crescimento conjunto utilizando a melhor plataforma do mercado.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Preços Wholesale", icon: "fa-tags" },
                { title: "Suporte Local", icon: "fa-headset" },
                { title: "Marca Branca", icon: "fa-fingerprint" },
                { title: "Alta Escala", icon: "fa-expand-arrows-alt" }
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 text-[#2563EB] rounded-xl flex items-center justify-center">
                    <i className={`fas ${benefit.icon}`}></i>
                  </div>
                  <span className="font-bold text-[#002B5B]">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#002B5B] p-10 rounded-[3rem] text-white shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">
                 <i className="fas fa-handshake"></i>
               </div>
               <h3 className="text-2xl font-bold mb-6">Benefícios Exclusivos</h3>
               <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                   <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0"><i className="fas fa-check"></i></div>
                   <div>
                     <p className="font-bold">Conta de Distribuição</p>
                     <p className="text-blue-200 text-sm">Gerencie todos os seus clientes em uma única interface centralizada.</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0"><i className="fas fa-check"></i></div>
                   <div>
                     <p className="font-bold">Possibilidade de Marca Branca</p>
                     <p className="text-blue-200 text-sm">Utilize sua própria marca (white-label) na plataforma Protrack365.</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0"><i className="fas fa-check"></i></div>
                   <div>
                     <p className="font-bold">Treinamento Técnico</p>
                     <p className="text-blue-200 text-sm">Capacitação para sua equipe técnica realizar instalações padrão Essêncikambas.</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Interessado em revender nossas soluções?</h2>
            <p className="text-gray-500 text-lg">
              Preencha o formulário abaixo para iniciarmos uma parceria de sucesso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7BBCEB] focus:ring-2 focus:ring-[#7BBCEB]/20 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail Corporativo</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7BBCEB] focus:ring-2 focus:ring-[#7BBCEB]/20 outline-none transition-all"
                  placeholder="exemplo@empresa.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7BBCEB] focus:ring-2 focus:ring-[#7BBCEB]/20 outline-none transition-all"
                  placeholder="9XX XXX XXX"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Empresa (Opcional)</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7BBCEB] focus:ring-2 focus:ring-[#7BBCEB]/20 outline-none transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">Sua Mensagem</label>
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7BBCEB] focus:ring-2 focus:ring-[#7BBCEB]/20 outline-none transition-all resize-none"
                placeholder="Como podemos ajudar o seu negócio?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 ${
                submitted ? 'bg-green-500' : 'bg-[#002B5B] hover:bg-black'
              }`}
            >
              {submitted ? (
                <><i className="fas fa-check"></i> Enviado com Sucesso</>
              ) : (
                <><i className="fas fa-paper-plane"></i> Enviar Solicitação</>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Direct Contact Cards */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-12">Ou se preferir, fale connosco agora</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a 
              href="tel:+244954078332"
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#7BBCEB] hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <i className="fas fa-phone-alt text-2xl"></i>
              </div>
              <p className="font-bold text-[#002B5B]">Ligar agora</p>
              <p className="text-gray-400 text-sm mt-1">954 078 332</p>
            </a>
            <a 
              href="https://wa.me/244944790744"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#25D366] hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-all">
                <i className="fab fa-whatsapp text-2xl"></i>
              </div>
              <p className="font-bold text-[#002B5B]">WhatsApp</p>
              <p className="text-gray-400 text-sm mt-1">Falar direto no 944 790 744</p>
            </a>
            <a 
              href="mailto:essencikambas@gmail.com"
              className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-orange-500 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <p className="font-bold text-[#002B5B]">E-mail</p>
              <p className="text-gray-400 text-xs mt-1 break-all">essencikambas@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
