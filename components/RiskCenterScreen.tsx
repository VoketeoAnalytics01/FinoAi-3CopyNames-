
import React, { useState } from 'react';
import { ShieldCheck, ChevronRight, RefreshCw, Activity, Zap, Shield, Eye, Lock, ToggleLeft, ToggleRight } from 'lucide-react';

const RiskCenterScreen: React.FC = () => {
  const [fraudProtection, setFraudProtection] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white p-4 pb-24 overflow-y-auto no-scrollbar">
      {/* Header */}
      <header className="flex flex-col mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <ShieldCheck size={20} className="text-white" />
                </div>
                <div>
                    <h1 className="text-lg font-bold">FinoAi</h1>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">non custodial</p>
                </div>
            </div>
          </div>
          <button className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold active:scale-95 transition-transform uppercase tracking-tighter">
            Header <ChevronRight size={14} />
          </button>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-black tracking-tight">AI Risk Shield</h2>
            <div className="bg-[#10b981]/20 border border-[#10b981]/40 px-2 py-1 rounded flex items-center gap-1">
                <Activity size={12} className="text-[#10b981]" />
                <div className="flex gap-0.5">
                    {[1,2,3,4].map(i => <div key={i} className={`w-0.5 bg-[#10b981] ${i%2===0 ? 'h-2' : 'h-3'}`}></div>)}
                </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[#10b981] font-bold text-xs">
            Smart AI Active <Zap size={12} fill="#10b981" />
          </div>
        </div>
      </header>

      {/* Risk Overview Cards */}
      <section className="grid grid-cols-2 gap-3 mb-6">
        {/* Risk Score Gauge */}
        <div className="bg-[#141d2e] border border-gray-800 p-4 rounded-2xl flex flex-col items-center">
          <div className="flex justify-between w-full mb-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Risk Score</span>
            <RefreshCw size={14} className="text-gray-500" />
          </div>
          <div className="relative w-32 h-16 mb-4">
            <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-[0_0_8px_rgba(16,185,129,0.2)]">
              <path 
                d="M 10 45 A 35 35 0 0 1 90 45" 
                fill="none" 
                stroke="#1f2937" 
                strokeWidth="8" 
                strokeLinecap="round" 
              />
              <path 
                d="M 10 45 A 35 35 0 0 1 85 25" 
                fill="none" 
                stroke="url(#riskGradient)" 
                strokeWidth="10" 
                strokeLinecap="round" 
              />
              <defs>
                <linearGradient id="riskGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-black">85</span>
                <span className="text-xs text-gray-500 font-bold ml-0.5">/100</span>
              </div>
              <div className="text-[10px] text-[#10b981] font-black uppercase tracking-widest">Healthy</div>
            </div>
          </div>
          <div className="text-[9px] text-gray-500 font-bold uppercase">
            Live • Updated 8 s ago
          </div>
        </div>

        {/* Suspicious Alerts Card */}
        <div className="bg-[#141d2e] border border-gray-800 p-4 rounded-2xl">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tital</span>
            <span className="text-[10px] text-[#3b82f6] font-bold">1/4</span>
          </div>
          <div className="mb-4">
            <h4 className="text-[13px] font-bold leading-tight mb-1">Suspicious platform risky detected</h4>
            <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-mono">9/W</span>
                <span className="text-[10px] text-gray-600 font-mono">#0B1120</span>
            </div>
          </div>
          <div className="pt-3 border-t border-gray-800">
            <h4 className="text-[13px] font-bold leading-tight mb-1">2 phishing attempts</h4>
            <p className="text-[10px] text-gray-500">blocked this week</p>
          </div>
        </div>
      </section>

      {/* Swipe Carousel */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-3 px-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Swipe Carousel</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#3b82f6] font-bold">1/4</span>
            <span className="text-[10px] text-gray-600 font-medium italic tracking-tighter">Auto-rote avey 6 seconds</span>
          </div>
        </div>
        
        <div className="bg-[#141d2e] border border-gray-800 rounded-2xl p-4 relative overflow-hidden active:scale-[0.98] transition-transform">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-3">
                    <span className="text-2xl font-black text-gray-400">2</span>
                    <div>
                        <h3 className="text-lg font-bold leading-tight">You saved $12.50 from risky</h3>
                        <p className="text-sm text-gray-500">risky routes this week ✨</p>
                    </div>
                </div>
                <button className="bg-[#1e293b] text-white px-5 py-2 rounded-xl text-sm font-bold border border-white/5 active:scale-90 transition-transform">
                    Block
                </button>
            </div>

            <div className="flex items-center gap-2 mb-2">
                <div className="text-[#10b981] bg-[#10b981]/10 rounded p-0.5">
                    <ShieldCheck size={16} />
                </div>
                <div className="text-sm font-bold">2 phishing attempts <span className="text-red-500">|</span></div>
            </div>
            <p className="text-xs text-gray-500 font-medium">blocked this week</p>

            {/* Shield Decoration */}
            <div className="absolute right-4 bottom-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#3b82f6]/10 rounded-full animate-pulse"></div>
                    <Shield size={40} className="text-[#3b82f6] fill-[#3b82f6]/20" />
                    <div className="absolute top-0 right-0 text-[#10b981]">✨</div>
                </div>
            </div>
        </div>
      </section>

      {/* Safety Actions */}
      <section className="mb-6 grid grid-cols-3 gap-3">
        {[
          { icon: Shield, label: "Platform Safety Check", color: "text-[#10b981]" },
          { icon: Eye, label: "Transaction Risk Preview", color: "text-[#10b981]" },
          { icon: Lock, label: "Account Threat Scan", color: "text-[#10b981]" }
        ].map((item, i) => (
          <button key={i} className="bg-[#141d2e] border border-gray-800 rounded-2xl p-3 flex flex-col items-center justify-center text-center gap-2 aspect-square group active:scale-95 transition-all">
            <div className={`${i === 0 ? 'bg-[#10b981]/10 border border-[#10b981]/30' : 'bg-white/5 border border-white/10'} w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <item.icon size={20} className={item.color} />
            </div>
            <span className={`text-[11px] font-black leading-tight ${item.color} whitespace-pre-wrap`}>
                {item.label.split(' ').join('\n')}
            </span>
          </button>
        ))}
      </section>

      {/* Fraud Protection Toggle */}
      <section className="mb-6">
        <div className="bg-[#141d2e] border border-gray-800 rounded-2xl p-4 flex justify-between items-center active:bg-white/5 transition-colors">
            <div>
                <h4 className="text-lg font-black tracking-tight">AI Fraud Protection</h4>
                <p className="text-xs text-gray-500 font-bold">Real-time Fraud Protection • Always On</p>
            </div>
            <button 
                onClick={() => setFraudProtection(!fraudProtection)}
                className="transition-transform active:scale-90"
            >
                {fraudProtection ? (
                    <div className="flex items-center gap-1.5 bg-[#10b981] px-2 py-1.5 rounded-full">
                        <span className="text-[10px] font-black uppercase text-white">On</span>
                        <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 bg-gray-700 px-2 py-1.5 rounded-full">
                        <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                        <span className="text-[10px] font-black uppercase text-gray-400">Off</span>
                    </div>
                )}
            </button>
        </div>
      </section>

      {/* Footer text */}
      <footer className="flex items-center justify-between px-2 pt-2 pb-6">
        <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
            <span>Non-custodial</span>
            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            <span>We never touch your funds</span>
        </div>
        <ChevronRight size={14} className="text-gray-700" />
      </footer>
    </div>
  );
};

export default RiskCenterScreen;
