
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
    <div className="flex flex-col min-h-screen bg-transparent p-4 pb-28 overflow-y-auto no-scrollbar">
      {/* 1. TOP HEADER SECTION */}
      <header className="flex justify-between items-center mt-4 mb-8 px-1">
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
      <div className="px-1 mb-8">
        <h2 className="text-3xl font-black text-white tracking-tight leading-none mb-2">Profile</h2>
        <p className="text-sm font-medium text-gray-400">Your AI-powered financial identity</p>
      </div>

      {/* 2. PROFILE IDENTITY CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group mb-8"
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#bef264]/10 via-cyan-500/10 to-[#bef264]/10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
        
        <div className="relative bg-[#151c2c]/80 backdrop-blur-xl border border-white/10 p-6 rounded-[32px] shadow-2xl overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#bef264] to-cyan-500 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#151c2c] rounded-[14px] flex items-center justify-center p-0.5">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" 
                      alt="Avatar" 
                      className="w-full h-full rounded-[12px] bg-slate-800" 
                    />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-black text-white tracking-tight">{userName}</h3>
                  <div className="bg-[#bef264] p-0.5 rounded-full shadow-[0_0_10px_#bef264]">
                    <CheckCircle2 size={12} className="text-black" />
                  </div>
                </div>
                {isPremium && (
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gradient-to-r from-amber-400/20 to-amber-600/20 border border-amber-400/30 rounded-full">
                    <Crown size={10} className="text-amber-400" />
                    <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Premium</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1 h-1 bg-[#bef264] rounded-full animate-ping"></div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Safety Score</span>
              </div>
              <span className="text-sm font-black text-[#bef264]">High</span>
            </div>
          </div>

          <div className="flex items-center gap-2 py-2 px-3 bg-white/5 border border-white/5 rounded-2xl mb-6">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span className="text-[10px] font-bold text-gray-400 italic">You control your assets at all times</span>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center gap-3">
            <Sparkles size={16} className="text-[#bef264]" />
            <p className="text-[11px] font-medium text-gray-300 leading-tight">
              AI optimization saved you <span className="text-[#bef264] font-black">$54.20</span> this week.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3. QUICK ACCOUNT STATUS SECTION */}
      <div className="grid grid-cols-3 gap-3 mb-8 px-1">
        {[
          { icon: Wallet, title: 'Wallet', val: 'Connected', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
          { icon: ShieldCheck, title: 'Security', val: 'Active', color: 'text-[#bef264]', bg: 'bg-[#bef264]/10' },
          { icon: Cpu, title: 'AI Mode', val: 'Auto AI', color: 'text-purple-400', bg: 'bg-purple-400/10' }
        ].map((item, i) => (
          <div key={i} className="bg-[#151c2c] border border-white/10 rounded-3xl p-4 flex flex-col items-center gap-2 group hover:bg-[#1a2335] transition-colors">
            <div className={`p-2 rounded-2xl ${item.bg} ${item.color}`}>
              <item.icon size={18} />
            </div>
            <div className="text-center">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-0.5">{item.title}</p>
              <p className={`text-[11px] font-black ${item.color}`}>{item.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. CONNECTED ACCOUNTS SECTION */}
      <div className="space-y-4 mb-8">
        <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em] px-2 mb-2">Connected Accounts</h4>
        <div className="bg-[#151c2c] border border-white/10 rounded-[32px] overflow-hidden">
          {[
            { icon: Globe, label: 'WalletConnect', status: 'Connected', statusColor: 'bg-[#bef264]/20 text-[#bef264]' },
            { icon: ArrowRightLeft, label: 'Exchange API', status: 'Read-only', statusColor: 'bg-cyan-500/20 text-cyan-400' },
            { icon: Building2, label: 'Bank Connection', status: 'Optional', statusColor: 'bg-gray-800 text-gray-500' }
          ].map((acc, i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white/5 rounded-2xl text-gray-400 group-hover:text-white transition-colors">
                  <acc.icon size={20} />
                </div>
                <div>
                  <h5 className="text-[13px] font-black text-white tracking-tight">{acc.label}</h5>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-tighter ${acc.statusColor}`}>
                  {acc.status}
                </span>
                <ChevronRight size={14} className="text-gray-600" />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-center text-gray-600 font-bold italic">
          “FinoAi never holds or moves your funds.”
        </p>
      </div>

      {/* 5. AI PREFERENCES SECTION */}
      <div className="space-y-4 mb-8">
        <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em] px-2 mb-2">AI Preferences</h4>
        <div className="bg-[#151c2c] border border-white/10 rounded-[32px] p-2">
          {[
            { label: 'Optimization Goal', val: 'Lowest Cost', type: 'select' },
            { label: 'Default Network', val: 'Solana (Auto)', type: 'select' },
            { label: 'Risk Preference', val: 'Balanced', type: 'select' },
            { label: 'AI Automation', val: true, type: 'toggle' },
            { label: 'Notifications', val: true, type: 'toggle' }
          ].map((pref, i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 group cursor-pointer">
              <span className="text-[13px] font-black text-white/80 tracking-tight">{pref.label}</span>
              <div className="flex items-center gap-2">
                {pref.type === 'select' ? (
                  <div className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
                    <span className="text-[11px] font-black text-[#bef264]">{pref.val}</span>
                    <ChevronRight size={12} className="text-gray-600 rotate-90" />
                  </div>
                ) : (
                  <div className={`w-10 h-5 rounded-full p-1 transition-colors ${pref.val ? 'bg-[#bef264]' : 'bg-gray-800'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full transition-transform ${pref.val ? 'translate-x-5' : 'translate-x-0'}`}></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. TRUST & SECURITY CARD */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-6 rounded-[32px] mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Shield size={64} className="text-cyan-400" />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-cyan-500/20 rounded-2xl text-cyan-400 shadow-[0_0_15px_#22d3ee20]">
            <Lock size={20} />
          </div>
          <h3 className="text-lg font-black text-white tracking-tight lowercase">Security & Privacy</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            'Non-custodial verified',
            'Encrypted AI routing',
            'Read-only permissions',
            'Scam protection'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{item}</span>
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
