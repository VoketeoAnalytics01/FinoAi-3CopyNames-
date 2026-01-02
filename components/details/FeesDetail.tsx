
import React, { useState } from 'react';
import { ArrowUp, ArrowRight, Crown, Clock } from 'lucide-react';

const PERIOD_DATA = {
  Hourly: { value: "$0.12", percentage: "+1.2%", status: "Micro-Route Active" },
  Daily: { value: "$2.45", percentage: "+8.4%", status: "Intraday Optimized" },
  Weekly: { value: "$14.30", percentage: "+37%", status: "Peak Performance" },
  Monthly: { value: "$58.90", percentage: "+42%", status: "High Velocity" },
  Lifetime: { value: "$427.12", percentage: "+112%", status: "Compounded Savings" },
};

type PeriodKey = keyof typeof PERIOD_DATA;

const FeesDetail: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>('Weekly');

  return (
    <div className="text-white animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Header & Status */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-black text-[#4ade80] uppercase tracking-tighter">AI Fee Engine</h2>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Routing $200k/s Volume</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-2xl">
          <Clock size={12} className="text-gray-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Real-time Data</span>
        </div>
      </div>

      {/* Interactive Period Toggle */}
      <div className="bg-[#1a1c25] p-1 rounded-2xl border border-white/5 mb-8 flex overflow-hidden">
        {(Object.keys(PERIOD_DATA) as PeriodKey[]).map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`flex-1 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all relative ${
              selectedPeriod === period 
                ? "text-black bg-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.3)] scale-100" 
                : "text-gray-500 hover:text-gray-300 scale-95"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Main Savings Display */}
      <div className="flex justify-between items-center mb-10 px-1">
        <div className="relative">
          <div className="absolute -inset-10 bg-[#4ade80]/5 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1 block">
              Total {selectedPeriod} Savings
            </span>
            <div className="flex items-start gap-1">
              <span className="text-7xl font-black tracking-tighter leading-none text-white transition-all">
                {PERIOD_DATA[selectedPeriod].value}
              </span>
              <div className="text-[#4ade80] text-xl mt-1 animate-bounce">✨</div>
            </div>
            <p className="text-[#4ade80]/80 font-black text-[11px] uppercase tracking-widest mt-2 flex items-center gap-1.5">
              <span className="inline-block w-3 h-0.5 bg-[#4ade80]/30 rounded-full"></span>
              {PERIOD_DATA[selectedPeriod].status}
            </p>
          </div>
        </div>

        {/* Dynamic Uplift Indicator */}
        <div className="flex flex-col items-center">
            <div className="relative w-20 h-20">
                <ArrowUp size={80} strokeWidth={8} className="text-[#4ade80]/10" />
                <ArrowUp 
                  size={80} 
                  strokeWidth={6} 
                  className="text-[#4ade80] absolute top-0 left-0 drop-shadow-[0_0_20px_rgba(74,222,128,0.6)] animate-in slide-in-from-bottom-4 duration-500" 
                />
            </div>
            <div className="text-3xl font-black mt-1 text-white">{PERIOD_DATA[selectedPeriod].percentage}</div>
            <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Efficiency Uplift</div>
        </div>
      </div>

      {/* Secondary Data Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/5 border border-white/5 p-5 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <Crown size={16} className="text-yellow-500" />
            </div>
            <div className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Lifetime Total</div>
            <div className="text-2xl font-black text-white">$427.12</div>
            <div className="w-8 h-1 bg-[#4ade80]/20 rounded-full mt-2 group-hover:w-full transition-all duration-700"></div>
        </div>
        
        <button className="flex flex-col justify-center items-center gap-1.5 rounded-3xl border border-[#4ade80]/30 bg-[#4ade80]/5 text-[#4ade80] p-5 active:scale-[0.98] transition-all group">
            <span className="text-[10px] font-black uppercase tracking-widest">Analysis</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-black">Audit Savings</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
        </button>
      </div>

      {/* Bottom Disclaimer */}
      <div className="pt-6 border-t border-white/5 text-center">
        <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.2em] mb-1">
          Non-custodial execution • Automated route arbitrage
        </p>
        <p className="text-[8px] text-gray-700 font-medium italic">
          Values are calculated based on average gas and liquidity slippage on 12+ chains.
        </p>
      </div>
    </div>
  );
};

export default FeesDetail;
