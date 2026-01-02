
import React from 'react';
import { Activity, ShieldCheck, Zap, Star, ChevronRight, Share2 } from 'lucide-react';

const ConfidenceBadge: React.FC<{ text?: string; star?: boolean }> = ({ text = "AI Confidence", star = false }) => (
  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm self-start mt-2`}>
    {star && <Star size={10} className="text-yellow-400 fill-yellow-400" />}
    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{text}</span>
  </div>
);

const CrerapyTag: React.FC = () => (
  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Crerapy</span>
  </div>
);

const SmartToolsScreen: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white p-5 pb-32 overflow-y-auto no-scrollbar animate-in fade-in duration-700">
      {/* Precision Header */}
      <header className="flex justify-between items-center mb-10 pt-2">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-2 gap-0.5">
            {[1, 2, 3, 4].map(i => <div key={i} className="w-1.5 h-1.5 bg-white rounded-sm"></div>)}
          </div>
          <span className="text-xl font-black italic tracking-tighter">FinoAi</span>
        </div>
        
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">HEADER</span>
        
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
              <Activity size={18} className="text-gray-400" />
            </div>
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#bef264] rounded-full shadow-[0_0_8px_#bef264] animate-pulse"></div>
          </div>
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest mt-1">AI signal</span>
        </div>
      </header>

      {/* Main Title Section */}
      <div className="mb-10">
        <h1 className="text-[44px] font-black tracking-tighter leading-none mb-3">Smart Tools</h1>
        <p className="text-sm font-bold text-gray-400 max-w-[280px]">Execute AI-powered optimizations in one tap</p>
      </div>

      {/* Top Grid: Routing & Fee Optimization */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        {/* Smart Routing Engine */}
        <div className="col-span-3 relative group active:scale-[0.98] transition-transform">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-[32px] blur-xl group-hover:blur-2xl transition-all"></div>
          <div className="relative h-full bg-[#151c2c]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between shadow-2xl overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-400/10 blur-[40px] rounded-full"></div>
            <div>
              <h3 className="text-xl font-black mb-3 leading-tight tracking-tight">Smart Routing Engine</h3>
              <p className="text-[11px] text-gray-400 font-bold leading-relaxed mb-4">
                Find the most efficient route across banks, centralized exchanges, decentralized exchanges, and blockchains.
              </p>
              <div className="space-y-1 mb-4">
                <div className="text-[9px] font-black text-white/60 uppercase tracking-wider">• Lowest fees</div>
                <div className="text-[9px] font-black text-white/60 uppercase tracking-wider">• Fastest settlement</div>
                <div className="text-[9px] font-black text-white/60 uppercase tracking-wider">• Compliance-aware</div>
              </div>
            </div>
            <ConfidenceBadge />
          </div>
        </div>

        {/* Fee Optimization Tool */}
        <div className="col-span-2 group active:scale-[0.98] transition-transform">
          <div className="h-full bg-[#151c2c]/40 border border-white/5 rounded-[32px] p-6 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-base font-black mb-3 leading-tight tracking-tight">Fee Optimization Tool</h3>
              <p className="text-[10px] text-gray-500 font-bold leading-tight">
                Automatically reduce transaction and gas fees before execution. Estimated savings shown transparently before confirmation.
              </p>
            </div>
            <ConfidenceBadge />
          </div>
        </div>
      </div>

      {/* List Layout: Optimizer, Risk, Value */}
      <div className="space-y-4">
        {/* Smart Lend & Borrow Optimizer */}
        <div className="group active:scale-[0.98] transition-transform">
          <div className="bg-[#151c2c]/40 border border-white/5 rounded-[28px] p-6 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-black tracking-tight">Smart Lend & Borrow Optimizer</h3>
              <CrerapyTag />
            </div>
            <p className="text-[11px] text-gray-400 font-bold leading-relaxed pr-8">
              Compare lending and borrowing opportunities across trusted platforms. Best APR selected based on risk profile and duration.
            </p>
          </div>
        </div>

        {/* Risk & Scam Protection Tool */}
        <div className="group active:scale-[0.98] transition-transform">
          <div className="bg-[#151c2c]/40 border border-white/5 rounded-[28px] p-6 shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-black tracking-tight">Risk & Scam Protection Tool</h3>
              <CrerapyTag />
            </div>
            <p className="text-[11px] text-gray-400 font-bold leading-relaxed mb-3">
              Assess platform and transaction risk before proceeding. Detects suspicious behavior and unsafe platforms.
            </p>
            <ConfidenceBadge />
          </div>
        </div>

        {/* Value Tracker */}
        <div className="group active:scale-[0.98] transition-transform">
          <div className="bg-[#151c2c]/40 border border-white/5 rounded-[28px] p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-black tracking-tight">Value Tracker</h3>
              <ConfidenceBadge text="High Confidence" star={true} />
            </div>
            <p className="text-[11px] text-gray-400 font-bold leading-relaxed mb-6">
              See how much value FinoAi has helped you retain. Fees saved, optimized routes, and more.
            </p>
            <div className="flex justify-end">
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2.5 rounded-full transition-all flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest">Track Value</span>
                <ChevronRight size={14} className="text-[#bef264]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grok Watermark Footer */}
      <div className="mt-12 flex justify-end opacity-20">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
            <Zap size={10} className="fill-white" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.3em]">Grok</span>
        </div>
      </div>
    </div>
  );
};

export default SmartToolsScreen;
