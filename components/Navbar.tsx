
import React from 'react';
import { NavItem } from '../types.ts';
import { NAV_ITEMS } from '../constants.tsx';

interface NavbarProps {
  activeNav: NavItem;
  onNavChange: (nav: NavItem) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeNav, onNavChange }) => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] z-50">
      <nav className="bg-[#0B1120] border-t border-white/5 px-2 py-3 shadow-2xl">
        <div className="flex justify-around items-end h-14">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavChange(item.id as NavItem)}
                className="flex flex-col items-center justify-center gap-1.5 flex-1 group transition-colors duration-200"
              >
                <div className={`relative ${isActive ? 'text-[#bef264]' : 'text-slate-400'}`}>
                  {isActive && (
                    <div className="absolute inset-0 bg-[#bef264]/20 blur-[8px] rounded-full scale-150"></div>
                  )}
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
                </div>
                <span className={`text-[11px] font-medium leading-none ${
                  isActive ? 'text-[#bef264]' : 'text-slate-400'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
