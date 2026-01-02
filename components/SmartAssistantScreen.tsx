
import React from 'react';
import { ArrowLeft, Settings, Activity, Zap, Shield, Repeat, TrendingDown, ShieldAlert, ArrowUpRight, MessageCircle, ChevronRight } from 'lucide-react';

interface SmartAssistantScreenProps {
  onBack: () => void;
}

const SmartAssistantScreen: React.FC<SmartAssistantScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white p-4 pb-28 overflow-y-auto no-scrollbar">
      {/* Top Header */}
      <header className="flex justify-between items-center mt-4 mb-6">
        <button onClick={onBack} className="p-2 bg-white/5 rounded-full active:scale-90 transition-transform">
          <ArrowLeft size={20} />
        </button>
        <button className="p-2 bg-white/5 rounded-full active:scale-90 transition-transform">
          <Settings size={20} />
        </button>
      </header>

      {/* Hero Title Area */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-1">
          <h1 className="text-2xl font-black tracking-tight">FinoAi Smart Assistant</h1>
          <div className="flex items-center gap-1.5 bg-[#10b981]/10 px-3 py-1 rounded-full border border-[#10b981]/20">
            <Activity size={14} className="text-[#10b981] animate-pulse" />
            <span className="text-[10px] font-black text-[#10b981] uppercase tracking-wider">Active</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 font-medium">Live monitoring platforms, routes, and conversion rates...</p>
      </div>

      {/* Horizontal Action Chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 -mx-1 px-1">
        {[
          { label: "Atk FinoAi anything...", color: "bg-white/5", text: "text-gray-400" },
          { label: "Find cheapest route now...", color: "bg-[#14b8a6]/20 text-[#14b8a6] border border-[#14b8a6]/30 shadow-[0_0_15px_rgba(20,184,166,0.2)]" },
          { label: "Scan risk on a platform...", color: "bg-white/5", text: "text-gray-400" },
          { label: "Best USD → KES conversion...", color: "bg-white/5", text: "text-gray-400" }
        ].map((chip, i) => (
          <button key={i} className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all active:scale-95 ${chip.color} ${chip.text || ''}`}>
            {chip.label}
          </button>
        ))}
      </div>

      {/* Recommended by AI Tiles */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4 px-1">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-400">Recommended by AI</h2>
          <span className="text-[10px] font-bold text-gray-600 uppercase italic">Bespociy</span>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <button className="col-span-3 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] p-4 rounded-3xl h-36 flex flex-col justify-between active:scale-95 transition-transform shadow-lg shadow-[#14b8a6]/10 group">
            <div className="bg-white/20 w-8 h-8 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Activity size={18} />
            </div>
            <div className="text-left">
              <p className="text-xs font-black text-white/80 leading-tight">Best Transfer</p>
              <h3 className="text-base font-black leading-tight">Route</h3>
            </div>
          </button>
          <button className="col-span-1 bg-[#10b981] p-3 rounded-3xl h-36 flex flex-col items-center justify-between active:scale-95 transition-transform group">
            <div className="bg-white/20 w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Repeat size={18} />
            </div>
            <div className="rotate-[-90deg] whitespace-nowrap mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest">Conversion</span>
            </div>
          </button>
          <button className="col-span-2 bg-[#1f2937] border border-gray-800 p-4 rounded-3xl h-36 flex flex-col justify-between active:scale-95 transition-transform group">
             <div className="bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center group-hover:shake transition-transform">
              <ShieldAlert size={18} className="text-[#a855f7]" />
            </div>
            <div className="text-left">
              <p className="text-xs font-black text-gray-400 leading-tight">Risk Alert</p>
              <h3 className="text-[11px] font-bold text-gray-500 leading-none mt-1">Compted isigites</h3>
            </div>
          </button>
          
          <button className="col-span-3 bg-[#334155] border border-gray-800 p-4 rounded-3xl h-32 flex flex-col justify-between active:scale-95 transition-transform">
             <div className="bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center">
              <Zap size={18} className="text-orange-400" />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-black leading-tight">Optimize Accounts</h3>
              <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase">And ireges</p>
            </div>
          </button>
          <button className="col-span-3 bg-[#4c1d95] p-4 rounded-3xl h-32 flex flex-col justify-between active:scale-95 transition-transform">
             <div className="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center">
              <TrendingDown size={18} />
            </div>
            <div className="text-left">
              <h3 className="text-sm font-black leading-tight">Borrowing Opportunity</h3>
              <p className="text-[10px] font-bold text-gray-300 mt-1 uppercase opacity-60">And sraigess</p>
            </div>
          </button>
        </div>
      </section>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 px-1">
        {['Smart Transfer', 'Lend Smart', 'Borrow Smart', 'Scan Risk', 'Conversion Check'].map((cat, i) => (
          <button key={i} className="whitespace-nowrap bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider text-gray-400 active:bg-white/10 transition-colors">
            {cat}
          </button>
        ))}
      </div>

      {/* Impact Summary Card */}
      <section className="mb-8">
        <div className="bg-[#141d2e] border border-gray-800 rounded-3xl p-6 relative overflow-hidden flex justify-between items-center group">
          <div className="relative z-10">
            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">This Week's Impact</h4>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-black">You saved $14.10</span>
            </div>
            <p className="text-xs text-[#10b981] font-bold mb-3">this week using FinoAi</p>
            <p className="text-[9px] text-gray-600 font-medium leading-tight max-w-[180px]">
              The pooks offfereisks al doy rowing row ord
            </p>
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            <div className="bg-[#10b981]/10 border border-[#10b981]/20 px-3 py-2.5 rounded-2xl flex items-center gap-2 group-hover:scale-105 transition-transform">
              <div className="w-5 h-5 bg-[#10b981] rounded flex items-center justify-center">
                <Repeat size={12} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-tighter text-[#10b981]">Smart Transperv</span>
                <span className="w-8 h-0.5 bg-[#10b981]/30 rounded-full mt-0.5"></span>
              </div>
            </div>
             <div className="bg-white/5 border border-white/5 px-3 py-2.5 rounded-2xl flex items-center gap-2">
               <div className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center">
                <ArrowUpRight size={12} className="text-gray-400" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-tighter text-gray-500">Sonrt Prediction</span>
            </div>
          </div>

          {/* Abstract glow */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 blur-[50px] rounded-full group-hover:bg-emerald-500/15 transition-colors"></div>
        </div>
      </section>

      {/* Smart Insights Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4 px-1">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-400">Smart Insights Today</h2>
          <div className="flex items-center gap-1.5 text-[#10b981]">
            <Activity size={14} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase">Live</span>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="flex-1 space-y-3">
             {[
               { title: "Fee Trends", sub: "Fen Inwts", color: "bg-teal-500/20 text-teal-400" },
               { title: "Cost Changes", sub: "Hede Cancs", color: "bg-blue-500/20 text-blue-400" },
               { title: "Platform Safety", sub: "Route Predicw", color: "bg-emerald-500/20 text-emerald-400" }
             ].map((item, i) => (
               <div key={i} className="bg-[#141d2e] border border-gray-800 p-3 rounded-2xl flex items-center justify-between active:bg-white/5 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className={`${item.color} w-6 h-6 rounded-lg flex items-center justify-center`}>
                      <TrendingDown size={14} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black leading-none mb-0.5">{item.title}</h4>
                      <p className="text-[9px] text-gray-500 font-bold uppercase">{item.sub}</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-700" />
               </div>
             ))}
          </div>

          <div className="w-32 flex flex-col items-center gap-2">
            <div className="bg-[#141d2e] border border-gray-800 p-4 rounded-3xl relative flex flex-col items-center justify-center text-center shadow-xl">
               <div className="text-[#10b981] mb-2">
                 <MessageCircle size={24} fill="currentColor" fillOpacity={0.2} />
               </div>
               <p className="text-[11px] font-bold leading-tight mb-1">I found a cheaper route</p>
               <span className="text-[8px] text-gray-600 font-black uppercase tracking-wider">Need help deciding?</span>
               <div className="absolute -top-1 -right-1">
                 <div className="relative">
                   <div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute inset-0"></div>
                   <div className="w-2 h-2 bg-red-500 rounded-full relative"></div>
                 </div>
               </div>
            </div>
            <button className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-500 active:text-white active:bg-white/10 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Grok Watermark */}
      <div className="mt-4 flex justify-end opacity-20">
        <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                <Zap size={8} className="fill-white" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Grok</span>
        </div>
      </div>
    </div>
  );
};

export default SmartAssistantScreen;
