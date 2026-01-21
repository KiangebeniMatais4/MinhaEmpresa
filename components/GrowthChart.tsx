
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { GROWTH_HISTORY } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const isTrend = payload[0].payload.type === 'trend';
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg">
        <p className="text-sm font-bold text-gray-600">{label}</p>
        <p className={`text-lg font-bold ${isTrend ? 'text-blue-400' : 'text-blue-800'}`}>
          {payload[0].value} Clientes
        </p>
        <p className="text-xs text-gray-400 italic">
          {isTrend ? 'Simulação de Tendência' : 'Dados Históricos'}
        </p>
      </div>
    );
  }
  return null;
};

const GrowthChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] mt-8 bg-white rounded-xl p-6 shadow-inner border border-gray-100">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={GROWTH_HISTORY}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorClients" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#93C5FD" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#93C5FD" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis 
            dataKey="month" 
            stroke="#9CA3AF" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
          />
          <YAxis 
            stroke="#9CA3AF" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="clients"
            stroke="#002B5B"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorClients)"
            animationDuration={2000}
          />
          <ReferenceLine x="Jan 25" stroke="#000" strokeDasharray="3 3" label={{ position: 'top', value: 'HOJE', fill: '#000', fontSize: 10 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
