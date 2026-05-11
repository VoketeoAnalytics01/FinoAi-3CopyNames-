
import React from 'react';
import { Crown, ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  return (
            <header className="flex items-center justify-between px-4 pt-4 pb-2 sticky top-0 bg-[#0B1120]/95 backdrop-blur-2xl z-40 border-b border-white/5">
      {/* Brand Identity - Logo removed to fit content on mobile */}
      <div className="flex flex-col group cursor-pointer shrink-0">
        <h1 className="text-2xl font-black tracking-tighter text-white leading-none">
          Fino<span className="text-[#bef264]">Ai</span>
        </h1>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="w-1 h-1 bg-[#bef264] rounded-full animate-pulse shadow-[0_0_5px_#bef264]"></div>
          <span className="text-[7.5px] font-black text-[#bef264]/80 uppercase tracking-[0.22em] leading-none">
            AI Optimizer Active
          </span>
        </div>
      </div>

      {/* Utility Section */}
      <div className="flex items-center gap-3">
        {/* Sleek "BEST CUSTOM" Premium Badge */}
        <button className="group relative flex items-center gap-1.5 bg-[#1a2335]/40 hover:bg-[#1a2335]/80 border border-white/10 px-2 py-1.5 rounded-xl transition-all duration-300 active:scale-95 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite] pointer-events-none"></div>
          
          <Crown size={9} className="text-[#bef264] drop-shadow-[0_0_4px_#bef264]" fill="currentColor" fillOpacity={0.15} />
          <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/80">
            Best
          </span>
          <div className="w-1 h-1 bg-[#bef264] rounded-full shadow-[0_0_6px_#bef264]"></div>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-2 pl-0.5 border-l border-white/5">
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-white/90 leading-none tracking-wide uppercase">
              Alex M.
            </span>
            <span className="text-[6px] font-black text-[#bef264] leading-none uppercase tracking-[0.2em] mt-1.5 flex items-center gap-0.5 filter drop-shadow-[0_0_8px_rgba(190,242,100,0.9)]">
              <ShieldCheck size={7} strokeWidth={3} />
              Verified
            </span>
          </div>
          
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-[#bef264]/15 rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://picsum.photos/seed/user/64/64" 
              alt="Profile" 
              className="w-7 h-7 rounded-full border border-white/10 group-hover:border-[#bef264]/60 transition-all relative z-10 shadow-lg"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
