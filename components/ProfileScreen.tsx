
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Zap, 
  Sparkles, 
  ChevronRight, 
  Wallet, 
  Building2, 
  ArrowRightLeft, 
  Settings, 
  HelpCircle, 
  Info, 
  LogOut, 
  Lock, 
  ShieldCheck,
  CheckCircle2,
  Globe,
  Bell,
  Cpu,
  Crown
} from 'lucide-react';

interface ProfileScreenProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ theme, onThemeChange }) => {
  const [userName] = useState('Kevin Teo');
  const [isPremium] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-transparent p-4 pb-28 overflow-y-auto no-scrollbar scroll-smooth">
      {/* 1. TOP HEADER SECTION */}
      <header className="flex justify-between items-center mt-2 mb-8 px-1">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black tracking-tighter text-white leading-none">
            Fino<span className="text-[#bef264]">Ai</span>
          </h1>
          <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-widest">Global Optimizer</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#141d2e] px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
            <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest leading-none">AI Protection Active</span>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-[#bef264]/30 p-0.5 overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" 
              alt="Avatar" 
              className="w-full h-full rounded-full bg-slate-800" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Title & Subtitle */}
      <div className="px-1 mb-6">
        <h2 className="text-3xl font-black text-white tracking-tight leading-none mb-2">Profile</h2>
        <p className="text-sm font-medium text-gray-400">Your AI-powered financial identity</p>
      </div>

      {/* 2. PROFILE IDENTITY CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group mb-8"
      >
        <div className="relative bg-[#141d2e] border border-white/5 p-6 rounded-[28px] shadow-2xl overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#bef264]/20 to-cyan-500/20 p-0.5">
                <div className="w-full h-full bg-[#0B1120] rounded-[14px] flex items-center justify-center p-0.5 overflow-hidden">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" 
                      alt="Avatar" 
                      className="w-full h-full rounded-[12px] bg-slate-800" 
                    />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-white tracking-tight leading-none">{userName}</h3>
                  <div className="bg-[#bef264] p-0.5 rounded-full">
                    <CheckCircle2 size={10} className="text-black" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isPremium && (
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-amber-400/10 border border-amber-400/20 rounded-lg">
                      <Crown size={8} className="text-amber-400" />
                      <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest leading-none">Premium</span>
                    </div>
                  )}
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <Cpu size={8} className="text-purple-400" />
                    <span className="text-[8px] font-black text-purple-400 uppercase tracking-widest leading-none">Auto AI Active</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Safety Status</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#bef264] rounded-full shadow-[0_0_5px_#bef264]"></div>
                <span className="text-xs font-black text-[#bef264] uppercase tracking-tighter">High Tier</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 py-2.5 px-3.5 bg-white/5 border border-white/5 rounded-2xl mb-6">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Non-Custodial Account Verified</span>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-[#bef264]" />
              <p className="text-[11px] font-medium text-gray-300 leading-tight">
                AI optimization saved <span className="text-[#bef264] font-black">$54.20</span> this week
              </p>
            </div>
            <ChevronRight size={14} className="text-gray-700" />
          </div>
        </div>
      </motion.div>

      {/* 3. QUICK ACCOUNT STATUS SECTION */}
      <div className="grid grid-cols-2 gap-3 mb-10 px-1">
        {[
          { icon: Wallet, title: 'Wallet Account', val: 'Active Connection', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
          { icon: ShieldCheck, title: 'Security Protocol', val: 'Safe & Verified', color: 'text-[#bef264]', bg: 'bg-[#bef264]/10' }
        ].map((item, i) => (
          <div key={i} className="bg-[#141d2e] border border-white/5 rounded-3xl p-4 flex flex-col items-center gap-2 transition-all">
            <div className={`p-2.5 rounded-2xl ${item.bg} ${item.color}`}>
              <item.icon size={18} />
            </div>
            <div className="text-center">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1 leading-none">{item.title}</p>
              <p className={`text-[11px] font-black ${item.color} leading-none truncate`}>{item.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. CONNECTED ACCOUNTS SECTION */}
      <div className="space-y-3 mb-10">
        <div className="flex items-center justify-between px-2 mb-2">
          <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.25em]">Connected Accounts</h4>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        </div>
        <div className="bg-[#141d2e] border border-white/5 rounded-[24px] overflow-hidden list-none">
          {[
            { icon: Globe, label: 'WalletConnect', status: 'Connected', statusColor: 'bg-[#bef264]/10 text-[#bef264]' },
            { icon: ArrowRightLeft, label: 'Exchange API', status: 'Read-only', statusColor: 'bg-cyan-500/10 text-cyan-400' }
          ].map((acc, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-transparent hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded-xl text-gray-400">
                  <acc.icon size={18} />
                </div>
                <h5 className="text-[13px] font-black text-white tracking-tight">{acc.label}</h5>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[8px] font-black px-2 py-1 rounded-lg uppercase tracking-tight ${acc.statusColor}`}>
                  {acc.status}
                </span>
                <ChevronRight size={14} className="text-gray-700 group-hover:text-gray-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-center text-gray-600 font-bold italic mt-2">
          “FinoAi decision engine maintains non-custodial link”
        </p>
      </div>

      {/* 5. AI PREFERENCES SECTION */}
      <div className="space-y-3 mb-10">
        <div className="flex items-center justify-between px-2 mb-2">
          <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.25em]">AI Preferences</h4>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        </div>
        <div className="bg-[#141d2e] border border-white/5 rounded-[24px] p-1 shadow-sm">
          {[
            { label: 'Optimization Goal', val: 'Lowest Cost' },
            { label: 'Default Network', val: 'Solana (Auto)' },
            { label: 'Risk Preference', val: 'Balanced' }
          ].map((pref, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-transparent border-b border-white/5 last:border-0 group cursor-pointer hover:bg-white/[0.02] transition-colors rounded-xl mx-0">
              <span className="text-[13px] font-bold text-white/80 tracking-tight">{pref.label}</span>
              <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1.5 rounded-xl border border-white/5 group-hover:border-[#bef264]/20 transition-all">
                <span className="text-[10px] font-black text-[#bef264] uppercase">{pref.val}</span>
                <ChevronRight size={12} className="text-gray-700 rotate-90" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. TRUST & SECURITY CARD */}
      <div className="bg-[#141d2e] border border-[#bef264]/10 p-6 rounded-[28px] mb-10 shadow-xl overflow-hidden relative">
        <div className="absolute -right-6 -top-6 opacity-5 rotate-12">
            <Shield size={100} className="text-[#bef264]" />
        </div>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#bef264]/10 rounded-2xl text-[#bef264]">
            <Lock size={18} />
          </div>
          <h3 className="text-base font-black text-white tracking-tight leading-none uppercase italic">Security & Privacy</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            'Non-Custodial',
            'Encrypted Ops',
            'Read-Only API',
            'Scam Shield'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#bef264]/40"></div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. BOTTOM SECTION */}
      <div className="space-y-2 mb-4 px-2">
        {[
          { label: 'Settings', icon: Settings },
          { label: 'Help Center', icon: HelpCircle },
          { label: 'Legal & Privacy', icon: Info },
          { label: 'Logout', icon: LogOut, danger: true }
        ].map((item, i) => (
          <button 
            key={i} 
            className={`w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all group ${item.danger ? 'text-red-400' : 'text-gray-400 hover:text-white'}`}
          >
            <div className="flex items-center gap-4">
              <item.icon size={20} className={item.danger ? 'text-red-400' : 'text-gray-500 group-hover:text-white'} />
              <span className="text-sm font-black tracking-tight">{item.label}</span>
            </div>
            <ChevronRight size={16} className="text-gray-700" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
