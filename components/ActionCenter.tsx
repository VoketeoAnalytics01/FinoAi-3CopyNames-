
import React from 'react';
import { Zap, Target, RefreshCw, ShieldCheck, ChevronRight } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  isPrimary?: boolean;
  icon: React.ReactNode;
  onClick?: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, description, buttonText, isPrimary, icon, onClick }) => (
  <div 
    onClick={onClick}
    className="min-w-[160px] h-[135px] bg-[#151c2c] border border-white/10 rounded-[22px] p-3 flex flex-col justify-between shadow-xl snap-center transition-all active:scale-[0.97] hover:bg-[#1a2335] group relative overflow-hidden cursor-pointer"
  >
    {/* Subtle Glow for Primary */}
    {isPrimary && (
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#bef264]/5 blur-2xl rounded-full"></div>
    )}

    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#bef264]/30 transition-colors">
          {/* Fix: Assert the correct element type to satisfy TypeScript when cloning the icon */}
          {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 16 })}
        </div>
        {isPrimary && (
          <div className="w-1.5 h-1.5 bg-[#bef264] rounded-full shadow-[0_0_8px_#bef264]"></div>
        )}
      </div>
      <div>
        <h4 className="text-[13px] font-black text-white tracking-tight leading-tight uppercase">
          {title}
        </h4>
        <p className="text-[10px] text-gray-500 font-bold leading-tight line-clamp-1 mt-1">
          {description}
        </p>
      </div>
    </div>
    
    <button className={`w-full py-2 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-1 ${
      isPrimary 
        ? "bg-[#bef264] text-black" 
        : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
    }`}>
      {buttonText}
      <ChevronRight size={10} strokeWidth={3} />
    </button>
  </div>
);

interface ActionCenterProps {
  onAction?: (action: string) => void;
}

const ActionCenter: React.FC<ActionCenterProps> = ({ onAction }) => {
  const actions = [
    {
      id: "fees",
      title: "Fee Optimization",
      description: "AI reduction sync",
      buttonText: "Execute",
      isPrimary: true,
      icon: <Zap className="text-[#bef264]" />
    },
    {
      id: "transfer",
      title: "Route Bridge",
      description: "Low gas liquidity",
      buttonText: "Route",
      isPrimary: false,
      icon: <Target className="text-blue-400" />
    },
    {
      id: "risk",
      title: "Wallet Shield",
      description: "Review safety",
      buttonText: "Scan",
      isPrimary: false,
      icon: <ShieldCheck className="text-red-400" />
    },
    {
      id: "planning",
      title: "Smart Plan",
      description: "Auto-saving sync",
      buttonText: "Plan",
      isPrimary: false,
      icon: <RefreshCw className="text-purple-400" />
    }
  ];

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1 snap-x snap-mandatory">
      {actions.map((action, i) => (
        <ActionCard 
          key={i} 
          {...action} 
          onClick={() => onAction && onAction(action.id)}
        />
      ))}
    </div>
  );
};

export default ActionCenter;