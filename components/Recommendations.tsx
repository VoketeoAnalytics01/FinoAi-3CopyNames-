
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

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
    className="min-w-[160px] h-[135px] bg-[#151c2c] border border-white/10 rounded-[22px] p-3 flex flex-col justify-between shadow-xl snap-center transition-all active:scale-[0.97] hover:bg-[#1a2335] group relative overflow-hidden text-left"
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
  context?: 'transfer' | 'risk';
}

const Recommendations: React.FC<RecommendationsProps> = ({ onAction, context = 'transfer' }) => {
  const recommendation = {
    id: "solana-route",
    title: "AI Suggestion",
    description: "Solana currently offers lower transfer costs & faster settlement.",
    buttonText: "Review",
    icon: <Sparkles />,
    accentColor: "text-[#bef264]",
    glowClass: "bg-[#bef264]"
  };

  return (
    <div className="px-1 snap-x snap-mandatory">
      <div 
        onClick={() => onAction && onAction(recommendation.id)}
        className="w-full flex items-center justify-between bg-[#151c2c] border border-white/10 rounded-[28px] p-4 shadow-xl transition-all active:scale-[0.98] hover:bg-[#1a2335] group relative overflow-hidden cursor-pointer"
      >
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#bef264]/5 blur-2xl rounded-full opacity-20"></div>
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-[#bef264]/10 border border-[#bef264]/20 text-[#bef264]">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="text-[11px] font-black text-gray-500 tracking-widest uppercase leading-none mb-1.5">
              {recommendation.title}
            </h4>
            <p className="text-[13px] font-black text-white tracking-tight leading-tight">
              {recommendation.description}
            </p>
          </div>
        </div>

        <button className="px-4 py-2 rounded-xl bg-[#bef264] text-black font-black text-[10px] uppercase tracking-widest shadow-lg shadow-[#bef264]/10 flex items-center gap-1 shrink-0">
          {recommendation.buttonText}
          <ChevronRight size={12} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
