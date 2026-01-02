
import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ArrowRight, Info, ShieldCheck } from 'lucide-react';

const DATA = [
  { v: 10 }, { v: 12 }, { v: 8 }, { v: 15 }, { v: 13 }, { v: 18 }, { v: 16 }, { v: 22 }, { v: 20 }
];

const YieldDetail: React.FC = () => {
  // Config for current state (Moderate)
  const riskLevels = {
    stable: { color: "#10b981", label: "Stable", glow: "rgba(16, 185, 129, 0.2)" },
    moderate: { color: "#3b82f6", label: "Moderate", glow: "rgba(59, 130, 246, 0.2)" },
    aggressive: { color: "#a855f7", label: "Aggressive", glow: "rgba(168, 85, 247, 0.2)" }
  };
  
  const currentRisk = riskLevels.moderate;

  return (
    <div className="text-white">
      {/* Header Info */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-black tracking-tighter uppercase">Yield Engine</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <ShieldCheck size={12} className="text-blue-400" />
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Optimized path active</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-2xl flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live APY Scan</span>
        </div>
      </div>

      {/* Main APR Display & Risk Gauge */}
      <div className="flex justify-between items-end mb-10 px-1">
        {/* Top Left: APR Indicator */}
        <div className="flex flex-col relative">
          {/* Back glow */}
          <div 
            className="absolute -inset-4 blur-2xl rounded-full opacity-40 transition-colors"
            style={{ backgroundColor: currentRisk.glow }}
          ></div>
          
          <div className="relative">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1 block">Net Yield APR</span>
            <div className="flex items-end gap-1.5">
              <span className="text-7xl font-black tracking-tighter leading-none transition-colors" style={{ color: currentRisk.color }}>
                6.8
              </span>
              <div className="flex flex-col mb-1.5">
                <span className="text-2xl font-black transition-colors leading-none" style={{ color: currentRisk.color }}>%</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-bold text-emerald-400">
                +1.2% vs peers
              </div>
            </div>
          </div>
        </div>

        {/* Top Right: Risk Gauge */}
        <div className="relative w-36 h-20 flex flex-col items-center">
            <svg viewBox="0 0 100 55" className="w-full h-full drop-shadow-lg">
                {/* Background Track */}
                <path d="M 15 45 A 35 35 0 0 1 85 45" fill="none" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" />
                
                {/* Colored Segments */}
                {/* Stable Segment */}
                <path d="M 15 45 A 35 35 0 0 1 35 20" fill="none" stroke="#10b981" strokeWidth="8" opacity="0.3" />
                {/* Moderate Segment */}
                <path d="M 35 20 A 35 35 0 0 1 65 20" fill="none" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
                {/* Aggressive Segment */}
                <path d="M 65 20 A 35 35 0 0 1 85 45" fill="none" stroke="#a855f7" strokeWidth="8" opacity="0.3" />
                
                {/* Active Indicator Arrow */}
                <circle cx="50" cy="15" r="3" fill="white" className="animate-pulse shadow-white" />
            </svg>
            <div className="mt-1 text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                  Moderate Risk
                </div>
            </div>
        </div>
      </div>

      {/* Metadata Row: AI Confidence Moved Here */}
      <div className="flex justify-between items-center mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">30-day Performance</span>
          <Info size={12} className="text-gray-700" />
        </div>
        <div className="flex items-center gap-2 bg-[#2d3139]/50 px-3 py-1.5 rounded-xl border border-white/5">
            <div className="w-1 h-1 rounded-full bg-emerald-400"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/90">AI Confidence: 91%</span>
        </div>
      </div>

      {/* Graph Area - Now Clear of Overlays */}
      <div className="relative h-28 mb-8 bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={DATA}>
            <defs>
              <linearGradient id="yieldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={currentRisk.color} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={currentRisk.color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="v" 
              stroke={currentRisk.color} 
              fill="url(#yieldGrad)" 
              strokeWidth={3} 
              dot={false}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <button className="w-full flex justify-between items-center py-5 px-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 text-sm font-black uppercase tracking-widest text-white/80 active:scale-[0.98] transition-all">
        View Optimization Routes 
        <ArrowRight size={18} className="text-blue-400" />
      </button>

      <p className="text-center text-[9px] text-gray-600 font-bold mt-6 uppercase tracking-widest">
        Non-custodial execution • Real-time AI rebalancing
      </p>
    </div>
  );
};

export default YieldDetail;
