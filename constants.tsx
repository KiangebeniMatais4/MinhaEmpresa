
import { PriceItem, GrowthData } from './types';

export const COLORS = {
  darkBlue: '#002B5B',
  brandBlue: '#7BBCEB', // Matching the sky blue 'E' in the logo
  normalBlue: '#2563EB',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#F3F4F6'
};

export const CONTACTS = {
  emails: ['kiangebenimatias4@gmail.com', 'essencikambas@gmail.com'],
  phones: ['954 078 332', '944 790 744', '929 254 473'],
  address: 'Luanda, Angola'
};

export const PRICE_LIST: PriceItem[] = [
  { 
    service: 'Protrack365', 
    plan: 'Cliente Final', 
    price: '30.000,00 Kz / ano',
    description: 'Acesso individual à plataforma de rastreamento com saldo incluso.'
  },
  { 
    service: 'Protrack365', 
    plan: 'Parceiro – Novo', 
    price: '5.500,00 Kz',
    description: 'Taxa de ativação de novo dispositivo para contas de revendedores.'
  },
  { 
    service: 'Protrack365', 
    plan: 'Parceiro – Anual', 
    price: '8.500,00 Kz / ano',
    description: 'Renovação anual de licença para parceiros e distribuidores.'
  },
  { 
    service: 'GPS', 
    plan: 'Kit Standard', 
    price: '70.000,00 Kz',
    description: 'Rastreamento em tempo real e histórico de trajetos básico.'
  },
  { 
    service: 'GPS', 
    plan: 'Kit Pro', 
    price: '87.000,00 Kz',
    description: 'Inclui bloqueio remoto do motor e alertas de ignição.'
  },
  { 
    service: 'GPS', 
    plan: 'Kit Premium', 
    price: '95.000,00 Kz',
    description: 'GPS + funções de alarme anti-roubo e sensores de segurança.'
  },
  { 
    service: 'Frotas', 
    plan: 'Standard 1GB', 
    price: '42.300,00 Kz / mês',
    description: 'Gestão essencial de frota com tráfego de dados para rastreio.'
  },
  { 
    service: 'Frotas', 
    plan: 'Pro 1GB', 
    price: '59.700,00 Kz / mês',
    description: 'Controle de rotas avançado e relatórios detalhados de desempenho.'
  },
  { 
    service: 'Frotas', 
    plan: 'Premium 10GB', 
    price: '130.800,00 Kz / mês',
    description: 'Alta disponibilidade de dados para frotas com monitoramento intenso.'
  },
  { 
    service: 'Análise de Dados', 
    plan: 'Excel, Power BI, Word', 
    price: 'Sob Consulta',
    description: 'Automação de relatórios e criação de dashboards inteligentes.'
  },
  { 
    service: 'Segurança', 
    plan: 'Instalação de Câmeras', 
    price: 'Sob Consulta',
    description: 'Sistemas de videovigilância (CFTV) com acesso remoto via app.'
  },
  { 
    service: 'Web Design', 
    plan: 'Sites & E-commerce', 
    price: 'Negociável',
    description: 'Criação de portfólios e lojas online modernas e responsivas.'
  },
];

export const GROWTH_HISTORY: GrowthData[] = [
  { month: 'Jan 23', clients: 45, type: 'history' },
  { month: 'Abr 23', clients: 80, type: 'history' },
  { month: 'Jul 23', clients: 120, type: 'history' },
  { month: 'Out 23', clients: 190, type: 'history' },
  { month: 'Jan 24', clients: 250, type: 'history' },
  { month: 'Abr 24', clients: 340, type: 'history' },
  { month: 'Jul 24', clients: 480, type: 'history' },
  { month: 'Out 24', clients: 650, type: 'history' },
  { month: 'Jan 25', clients: 820, type: 'history' },
  { month: 'Abr 25 (Proj)', clients: 1100, type: 'trend' },
  { month: 'Jul 25 (Proj)', clients: 1450, type: 'trend' },
  { month: 'Out 25 (Proj)', clients: 1900, type: 'trend' },
];
