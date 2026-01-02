
import React from 'react';
import { Compass, MoreHorizontal, AlertTriangle, Target, ChevronRight, Layers, Wallet, ShieldAlert, CalendarClock } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  description: string; 
  buttonText: string;
  icon: React.ReactNode;
  accentColor: string;
  glowClass: string;
  onClick?: () => void;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ 
  title, 
  description, 
  buttonText, 
  icon, 
  accentColor,
  glowClass,
  onClick
}) => (
  <button 
    onClick={onClick}
    className="min-w-[165px] h-[155px] bg-[#151c2c] border border-white/10 rounded-[24px] p-4 flex flex-col justify-between shadow-xl snap-center transition-all active:scale-[0.97] hover:bg-[#1a2335] group relative overflow-hidden text-left"
  >
    {/* Atmospheric Accent Glow */}
    <div className={`absolute -top-10 -right-10 w-20 h-20 blur-2xl rounded-full opacity-10 ${glowClass}`}></div>

    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className={`p-1.5 rounded-lg bg-white/5 border border-white/5 transition-colors group-hover:border-white/20 ${accentColor}`}>
          {/* Fix: Assert the correct element type to satisfy TypeScript when cloning the icon */}
          {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 16 })}
        </div>
        <div className={`w-1 h-1 rounded-full opacity-50 ${glowClass.replace('bg-', 'bg-')}`}></div>
      </div>
      
      <div>
        <h4 className="text-[13px] font-black text-white tracking-tight leading-tight uppercase">
          {title}
        </h4>
        <p className="text-[10px] text-gray-500 font-bold leading-tight line-clamp-2 mt-1">
          {description}
        </p>
      </div>
    </div>

    <div className="w-full py-2 rounded-xl bg-white/5 text-gray-400 border border-white/10 group-hover:bg-white/10 font-black text-[9px] uppercase tracking-widest transition-all flex items-center justify-center gap-1">
      {buttonText}
      <ChevronRight size={10} strokeWidth={3} className="opacity-60" />
    </div>
  </button>
);

interface RecommendationsProps {
  onAction?: (id: string) => void;
  context?: 'transfer' | 'lending';
}

const Recommendations: React.FC<RecommendationsProps> = ({ onAction, context = 'transfer' }) => {
  const recommendations = [
    {
      id: "smart-routing",
      title: "Smart Routing",
      description: "Best: USDT→KES via Binance. Safety: 99.8% (US).",
      buttonText: "Execute",
      icon: <Layers />,
      accentColor: "text-blue-400",
      glowClass: "bg-blue-500"
    },
    {
      id: "lending",
      title: "Lending & Borrowing Hub",
      description: "Rec: Aave V3 (99% Safe). Borrow: Compound (Save $12 fees).",
      buttonText: "Explore",
      icon: <Wallet />,
      accentColor: "text-emerald-400",
      glowClass: "bg-emerald-500"
    },
    {
      id: "risk",
      title: "Risk & Safety",
      description: "AI identified 3 rug-pull wallets, 1 fake platform & unsafe routes. Tap to secure.",
      buttonText: "Scan Now",
      icon: <ShieldAlert />,
      accentColor: "text-red-400",
      glowClass: "bg-red-500"
    },
    {
      id: "planning",
      title: context === 'transfer' ? "Routing Plans" : "Lend & Borrow Plans",
      description: context === 'transfer' 
        ? "Schedule recurring transfers & get optimized routing alerts."
        : "Plan your debt repayment or schedule automated lending.",
      buttonText: "Plan",
      icon: <CalendarClock />,
      accentColor: "text-orange-400",
      glowClass: "bg-orange-500"
    }
  ];

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1 snap-x snap-mandatory">
      {recommendations.map((rec, i) => (
        <RecommendationCard 
            key={i} 
            {...rec} 
            onClick={() => onAction && onAction(rec.id)}
        />
      ))}
    </div>
  );
};

export default Recommendations;
