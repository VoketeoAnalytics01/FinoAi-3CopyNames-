
import React from 'react';
import { TrendingUp, Wallet, Sparkles, Activity } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ElementType;
  onClick?: () => void;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon: Icon, onClick, className }) => (
  <button 
    onClick={onClick}
    className={`relative group bg-[#151c2c] border border-white/5 rounded-[24px] p-3 flex flex-col items-start justify-between min-h-[85px] flex-1 transition-all duration-300 active:scale-[0.96] hover:bg-white/[0.03] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] ${className}`}
  >
    {/* Background Decorative Glow */}
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#bef264]/5 blur-2xl group-active:bg-[#bef264]/10 transition-colors"></div>
    
    {/* Icon Background Watermark */}
    <Icon className="absolute -bottom-2 -right-2 text-white/5 group-hover:text-white/10 transition-colors" size={48} strokeWidth={1} />

    {/* Top Row: Label & Status */}
    <div className="flex justify-between items-center w-full relative z-10">
      <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.15em] leading-none">
        {label}
      </span>
      <div className="flex items-center gap-1">
        <div className="w-1 h-1 bg-[#bef264] rounded-full shadow-[0_0_5px_#bef264] animate-pulse"></div>
        <Activity size={8} className="text-gray-600" />
      </div>
    </div>

    {/* Bottom Row: Value */}
    <div className="mt-3 relative z-10">
      <div className="flex items-baseline gap-0.5">
        <span className="text-xl font-black text-[#bef264] tracking-tighter group-hover:shadow-[0_0_15px_rgba(190,242,100,0.2)] transition-all">
          {value}
        </span>
        {label.includes("APR") && <span className="text-[10px] font-black text-[#bef264]/60">%</span>}
      </div>
      <div className="w-4 h-[1px] bg-white/10 mt-1 group-hover:w-8 transition-all duration-500"></div>
    </div>
  </button>
);

interface StatsSectionProps {
  onStatClick: (type: string) => void;
}

const StatsSection: React.FC<StatsSectionProps> = ({ onStatClick }) => {
  return (
    <div className="flex gap-3 w-full px-1">
      <StatCard 
        label="AI Fee Saved" 
        value="$54.20" 
        icon={Sparkles} 
        onClick={() => onStatClick('fees')} 
      />
      <StatCard 
        label="Risk Score" 
        value="Safe" 
        className="text-[#bef264]"
        icon={TrendingUp} 
        onClick={() => {}} 
      />
      <StatCard 
        label="Protection" 
        value="Active" 
        icon={Wallet} 
        onClick={() => {}} 
      />
    </div>
  );
};

export default StatsSection;
