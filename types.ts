
export interface PriceItem {
  service: string;
  plan: string;
  price: string;
  description?: string;
}

export interface GrowthData {
  month: string;
  clients: number;
  type: 'history' | 'trend';
}
