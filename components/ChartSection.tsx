
import React, { useState, useMemo } from 'react';
import { 
  AreaChart, Area, 
  BarChart, Bar, 
  LineChart, Line,
  XAxis, YAxis, 
  ResponsiveContainer, Tooltip,
  Cell
} from 'recharts';
import { ArrowUpRight, ChevronDown, Lock, Sparkles, X, Clock } from 'lucide-react';
import { CHART_DATA } from '../constants.tsx';

type ChartType = 'Yield' | 'Liquidity' | 'Fees' | 'Settlement';
type Period = 'Daily' | 'Weekly' | 'Monthly' | 'Custom';

const SAVINGS_DATA = {
  Daily: '$2.45',
  Weekly: '$14.30',
  Monthly: '$58.90',
  Custom: '$---'
};

const CHART_CONFIGS = {
  Yield: {
    title: 'Top Lending Protocols',
    subtitle: 'Yield velocity track',
    color: '#10b981',
    bg: 'linear-gradient(135deg, #141d2e 0%, #064e3b 100%)',
    animation: 'pulse-slow'
  },
  Liquidity: {
    title: 'Major CEX Liquidity',
    subtitle: 'Deep depth analysis',
    color: '#3b82f6',
    bg: 'linear-gradient(135deg, #141d2e 0%, #1e3a8a 100%)',
    animation: 'none'
  },
  Fees: {
    title: 'DEX Gas Efficiency',
    subtitle: 'Routing cost trends',
    color: '#bef264',
    bg: 'linear-gradient(135deg, #141d2e 0%, #3f6212 100%)',
    animation: 'pulse-slow'
  },
  Settlement: {
    title: 'Global Bank Settlement',
    subtitle: 'Cross-border speed',
    color: '#a855f7',
    bg: 'linear-gradient(135deg, #141d2e 0%, #581c87 100%)',
    animation: 'none'
  }
};

const ChartSection: React.FC = () => {
  const [activeChart, setActiveChart] = useState<ChartType>('Yield');
  const [period, setPeriod] = useState<Period>('Weekly');
  const [showSelector, setShowSelector] = useState(false);
  const [isPremium, setIsPremium] = useState(false); // Simulated
  const [showPeriodMenu, setShowPeriodMenu] = useState(false);

  const config = CHART_CONFIGS[activeChart];

  const renderChart = () => {
    switch (activeChart) {
      case 'Liquidity':
        return (
          <BarChart data={CHART_DATA}>
            <XAxis dataKey="name" hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {CHART_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? config.color : `${config.color}88`} />
              ))}
            </Bar>
          </BarChart>
        );
      case 'Fees':
        return (
          <LineChart data={CHART_DATA}>
            <XAxis dataKey="name" hide />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="value" stroke={config.color} strokeWidth={4} dot={{ r: 4, fill: config.color }} />
          </LineChart>
        );
      default:
        return (
          <AreaChart data={CHART_DATA}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={config.color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={config.color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" stroke={config.color} strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        );
    }
  };

  return (
    <div 
      className={`relative p-5 rounded-3xl border border-gray-800 shadow-xl overflow-hidden transition-all duration-700 ease-in-out ${config.animation === 'pulse-slow' ? 'animate-background-pulse' : ''}`}
      style={{ background: config.bg }}
    >
      {/* Chart Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h3 className="text-lg font-black text-white tracking-tight">{config.title}</h3>
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{config.subtitle}</p>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="relative">
            <button 
              onClick={() => setShowPeriodMenu(!showPeriodMenu)}
              className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-black text-white active:bg-white/10 transition-all uppercase"
            >
              Saved: <span className="text-[#bef264]">{SAVINGS_DATA[period]}</span>
              <ChevronDown size={12} className={`transition-transform ${showPeriodMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showPeriodMenu && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-[#1a2335] border border-white/10 rounded-2xl shadow-2xl z-50 p-1 animate-in fade-in slide-in-from-top-2">
                {(Object.keys(SAVINGS_DATA) as Period[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setPeriod(p);
                      setShowPeriodMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors ${
                      period === p ? 'bg-[#bef264] text-black' : 'text-gray-400 hover:bg-white/5'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="h-40 w-full -ml-4 relative z-10">
        <ResponsiveContainer width="110%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>

      {/* Chart Selector Button */}
      <button 
        onClick={() => setShowSelector(true)}
        className="absolute right-5 bottom-12 bg-[#10b981] p-3 rounded-2xl shadow-2xl shadow-emerald-500/20 active:scale-90 transition-transform text-white z-20"
      >
        <ArrowUpRight size={24} strokeWidth={3} />
      </button>

      {/* Chart Selector Overlay */}
      {showSelector && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowSelector(false)}></div>
          <div className="relative bg-[#1a1d25] border border-white/10 rounded-[40px] p-6 max-w-[340px] w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-white tracking-tight">Intelligence Charts</h3>
              <button onClick={() => setShowSelector(false)} className="p-2 text-gray-500 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              {(Object.keys(CHART_CONFIGS) as ChartType[]).map((type) => {
                const c = CHART_CONFIGS[type];
                const isActive = activeChart === type;
                return (
                  <button
                    key={type}
                    onClick={() => {
                      if (!isPremium && !isActive) {
                        // Logic for applying: only premium can apply
                        // For trial logic, we allow "Preview" always, but application might be blocked.
                        // Here we just toggle for demo but show UI locks.
                      }
                      setActiveChart(type);
                    }}
                    className={`w-full p-4 rounded-3xl border flex items-center justify-between transition-all group ${
                      isActive 
                        ? 'bg-[#bef264] border-[#bef264] text-black shadow-lg shadow-[#bef264]/20' 
                        : 'bg-white/5 border-white/5 text-white hover:border-white/20'
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                        {type} Analysis
                      </span>
                      <span className="text-sm font-black">{c.title}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {type !== 'Yield' && !isPremium && (
                        <div className="bg-amber-500/20 text-amber-500 p-1 rounded-lg">
                          <Lock size={12} />
                        </div>
                      )}
                      {isActive && <Sparkles size={16} className="text-black animate-pulse" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 space-y-3">
              {!isPremium && (
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center">
                    New User Offer: 3-Day Pro Trial Active
                  </p>
                  <p className="text-[8px] text-gray-500 font-bold uppercase mt-1 text-center">No payment info required</p>
                </div>
              )}
              <button 
                onClick={() => {
                  setIsPremium(true);
                  setShowSelector(false);
                }}
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-[0.98] ${
                  isPremium ? 'bg-white/10 text-white cursor-default' : 'bg-[#bef264] text-black shadow-xl'
                }`}
              >
                {isPremium ? 'Pro Features Active' : 'Apply Selected (Pro Only)'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes backgroundPulse {
          0% { filter: brightness(1) saturate(1); }
          50% { filter: brightness(1.1) saturate(1.2); }
          100% { filter: brightness(1) saturate(1); }
        }
        .animate-background-pulse {
          animation: backgroundPulse 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1f2937] px-3 py-2 rounded-2xl border border-[#374151] shadow-2xl">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{payload[0].payload.name}</p>
        <p className="text-sm font-black text-white leading-none">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default ChartSection;
