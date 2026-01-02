
import React from 'react';
import { ShieldCheck, ArrowLeftRight, TrendingUp } from 'lucide-react';

interface QuickActionsProps {
  activeView?: 'transfer' | 'lend-borrow' | 'assistant' | 'home';
  onLendBorrowClick?: () => void;
  onTransferClick?: () => void;
  onAiSmartClick?: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ 
  activeView,
  onLendBorrowClick, 
  onTransferClick, 
  onAiSmartClick 
}) => {
  const getButtonStyle = (view: string) => {
    const isActive = activeView === view;
    return isActive 
      ? "bg-[#bef264] text-black border-[#bef264] shadow-[0_0_20px_rgba(190,242,100,0.2)]" 
      : "bg-[#141d2e] text-white border-gray-800 hover:bg-white/5";
  };

  const getIconColor = (view: string) => {
    return activeView === view ? "text-black" : "text-[#bef264]";
  };

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 px-1">
      <button 
        onClick={onTransferClick}
        className={`whitespace-nowrap flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-[12px] border transition-all active:scale-95 uppercase tracking-wider ${getButtonStyle('transfer')}`}
      >
        <ArrowLeftRight size={16} className={getIconColor('transfer')} />
        Smart Transfer
      </button>

      <button 
        onClick={onLendBorrowClick}
        className={`whitespace-nowrap flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-[12px] border transition-all active:scale-95 uppercase tracking-wider ${getButtonStyle('lend-borrow')}`}
      >
        <TrendingUp size={16} className={getIconColor('lend-borrow')} />
        Smart Lend/Borrow
      </button>

      <button 
        onClick={onAiSmartClick}
        className={`whitespace-nowrap flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-[12px] border transition-all active:scale-95 uppercase tracking-wider ${getButtonStyle('assistant')}`}
      >
        <ShieldCheck size={16} className={getIconColor('assistant')} />
        AI Smart
      </button>
    </div>
  );
};

export default QuickActions;
