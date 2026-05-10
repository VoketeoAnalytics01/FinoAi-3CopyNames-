
import React from 'react';
import { ArrowLeft, ChevronDown, X, Info } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface SmartLendBorrowScreenProps {
  onBack: () => void;
  onSetupClick?: () => void;
}

const YEAR_CHART_DATA = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 25 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 20 },
  { name: 'Jun', value: 45 },
  { name: 'Jul', value: 30 },
];

const VERIS_CHART_DATA = [
  { name: 'An', value: 5 },
  { name: 'P', value: 18 },
  { name: 'W', value: 12 },
  { name: 'M', value: 22 },
  { name: 'Jj', value: 15 },
  { name: 'At', value: 20 },
];

const StatCard: React.FC<{ label: string; value: string; trend: string; onClick?: () => void }> = ({ label, value, trend, onClick }) => (
  <button onClick={onClick} className={`bg-[#151c2c]/40 border border-white/5 rounded-2xl p-4 flex-1 min-w-[110px] relative overflow-hidden group text-left ${onClick ? 'active:scale-95 transition-transform cursor-pointer hover:bg-[#151c2c]/60' : ''}`}>
    {/* Subtle nebula effect */}
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-all"></div>
    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-2">{label}</p>
    <h3 className="text-xl font-black text-white tracking-tight">{value}</h3>
    <p className="text-[10px] text-teal-400 font-bold mt-1">{trend}</p>
  </button>
);

const MainActionButton: React.FC<{ label: string; glowColor: string }> = ({ label, glowColor }) => (
  <button className={`flex-1 py-4 rounded-2xl font-black text-[12px] text-white border border-white/10 transition-all active:scale-95 relative overflow-hidden bg-[#151c2c] group`}>
    {/* Dynamic Glow Overlay */}
    <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${glowColor}`}></div>
    <div className={`absolute -inset-1 blur-lg opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br ${glowColor}`}></div>
    <span className="relative z-10">{label}</span>
  </button>
);

const SmartLendBorrowScreen: React.FC<SmartLendBorrowScreenProps> = ({ onBack, onSetupClick }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white p-4 pb-32 overflow-y-auto no-scrollbar animate-in fade-in duration-500">
      
      {/* Updated Header */}
      <header className="flex flex-col items-start mb-8 pt-4">
         <button 
           onClick={onBack} 
           className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-1 hover:text-white transition-colors"
         >
           <ArrowLeft size={10} /> BACK
         </button>
         <h1 className="text-lg font-black tracking-tight text-white uppercase">Smart Lend</h1>
      </header>

      {/* STAT CARD SECTION */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">LENDING METRICS</span>
        </div>
        <div className="flex gap-3">
          <StatCard label="Total Value Locked" value="$45.2M" trend="12.4%" onClick={onSetupClick} />
          <StatCard label="Avg. APY" value="8.5%" trend="1.2%" />
          <StatCard label="Active Lenders" value="8,432" trend="5.1%" />
        </div>
      </section>

      {/* CHARTS SECTION */}
      <section className="grid grid-cols-2 gap-4 mb-8">
        {/* Year Chart */}
        <div className="bg-[#151c2c]/40 border border-white/5 rounded-3xl p-4 relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[11px] font-bold text-gray-400">Year</span>
            <span className="text-[8px] px-2 py-0.5 bg-white/5 rounded-full text-gray-500">On Tap</span>
          </div>
          <div className="h-24 w-full relative">
             {/* Callout Indicator */}
             <div className="absolute top-0 right-1/4 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 z-10">
                <span className="text-[9px] font-black">0.3s</span>
             </div>
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={YEAR_CHART_DATA}>
                 <defs>
                   <linearGradient id="yearGrad" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <Area type="monotone" dataKey="value" stroke="#2dd4bf" strokeWidth={2} fill="url(#yearGrad)" />
               </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Yield History Chart */}
        <div className="bg-[#151c2c]/40 border border-white/5 rounded-3xl p-4">
           <div className="flex justify-between items-center mb-4">
            <span className="text-[11px] font-bold text-gray-400">Yield History</span>
            <span className="text-[8px] px-2 py-0.5 bg-white/5 rounded-full text-gray-500">On Tap</span>
          </div>
          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={VERIS_CHART_DATA}>
                <Bar dataKey="value" fill="#2dd4bf" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* MAIN ACTION BUTTON SECTION */}
      <section className="mb-8">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">LENDING CONTROLS</h3>
        <div className="flex gap-3">
          <MainActionButton label="Auto-Lend (AI)" glowColor="from-teal-500 to-emerald-500" />
          <MainActionButton label="Manual Lend" glowColor="from-purple-500 to-indigo-500" />
          <MainActionButton label="AI Chatbot Assist" glowColor="from-blue-500 to-cyan-500" />
        </div>
      </section>

      {/* ACTION CENTER SECTION */}
      <section className="mb-8">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">PLATFORM SELECTION</h3>
        <div className="flex gap-3">
          <button className="flex-1 bg-[#151c2c] border border-white/5 rounded-xl py-3 px-4 flex justify-between items-center text-[11px] font-bold">
            Jurisdictions <ChevronDown size={14} className="text-gray-500" />
          </button>
          <button className="flex-1 bg-[#151c2c] border border-white/5 rounded-xl py-3 px-4 flex justify-between items-center text-[11px] font-bold">
            Preferred Platforms <ChevronDown size={14} className="text-gray-500" />
          </button>
          <div className="flex-1 border border-teal-500/30 rounded-xl py-3 px-4 flex items-center justify-center bg-teal-500/5">
            <span className="text-[11px] font-black text-teal-400">AI Confidence: 94%</span>
          </div>
        </div>
      </section>

      {/* AI RECOMMENDATIONS SECTION */}
      <section className="mb-10">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">AI RECOMMENDATIONS</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#151c2c]/40 border border-white/5 rounded-2xl p-5 relative group overflow-hidden">
             <button className="absolute top-3 right-3 text-gray-600 hover:text-white transition-colors">
               <X size={14} />
             </button>
             <h4 className="text-sm font-black text-white mb-2">High-Yield Stablecoins</h4>
             <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
               Earn up to 12% APY on USDC across top-rated DeFi protocols.
             </p>
          </div>
          <div className="bg-[#151c2c]/40 border border-white/5 rounded-2xl p-5 relative group overflow-hidden">
             <button className="absolute top-3 right-3 text-gray-600 hover:text-white transition-colors">
               <X size={14} />
             </button>
             <h4 className="text-sm font-black text-white mb-2">Low-Risk Staking</h4>
             <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
               Auto-compound your ETH with institutional-grade validators.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartLendBorrowScreen;
