
import React from 'react';
import { ShieldCheck, ArrowLeftRight, Zap, Shield } from 'lucide-react';

interface QuickActionsProps {
  activeView?: 'transfer' | 'risk' | 'home';
  onTransferClick?: () => void;
  onRiskClick?: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ 
  activeView,
  onTransferClick,
  onRiskClick
}) => {
  const getButtonStyle = (view: string) => {
    const isActive = activeView === view;
    return isActive 
      ? "bg-[#bef264] text-black border-[#bef264] shadow-[0_0_15px_rgba(190,242,100,0.2)]" 
      : "bg-[#141d2e] text-white border-gray-800 hover:bg-white/5";
  };

  const getIconColor = (view: string) => {
    return activeView === view ? "text-black" : "text-[#bef264]";
  };

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar py-1 px-1">
      <button 
        onClick={onTransferClick}
        className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-[11px] border transition-all active:scale-95 uppercase tracking-wider ${getButtonStyle('transfer')}`}
      >
        <Zap size={16} className={getIconColor('transfer')} />
        Smart Routing
      </button>

      <button 
        onClick={onRiskClick}
        className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-[11px] border transition-all active:scale-95 uppercase tracking-wider ${getButtonStyle('risk')}`}
      >
        <ShieldCheck size={16} className={getIconColor('risk')} />
        Risk Shield
      </button>
    </div>
  );
};

export default QuickActions;
