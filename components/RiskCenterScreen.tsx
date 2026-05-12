
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Zap, 
  Activity, 
  Smartphone, 
  Globe, 
  Lock, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Scan, 
  Fingerprint, 
  Bell, 
  Eye, 
  Search,
  Sparkles,
  Info,
  Wallet
} from 'lucide-react';

const RiskCenterScreen: React.FC = () => {
  const [safetyScore] = useState(4.7);
  const [isMonitoringActive] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-transparent p-4 pb-28 overflow-y-auto no-scrollbar scroll-smooth">
      {/* 1. TOP HEADER */}
      <header className="flex justify-between items-center mt-2 mb-8 px-1">
        <div className="flex flex-col">
          <h1 className="text-2xl font-black tracking-tighter text-white leading-none">
            Fino<span className="text-[#bef264]">Ai</span>
          </h1>
          <p className="text-[10px] text-gray-500 font-bold mt-1 uppercase tracking-widest">Security Layer</p>
        </div>
        
        <div className="flex items-center gap-2 bg-[#141d2e] px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
          <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest leading-none">AI Protection Active</span>
        </div>
      </header>

      <div className="px-1 mb-8">
        <h2 className="text-3xl font-black text-white tracking-tight leading-none mb-2">Risk Center</h2>
        <p className="text-sm font-medium text-gray-400">AI-powered protection for your financial activity</p>
      </div>

      {/* 2. MAIN AI SAFETY SCORE CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group mb-10"
      >
        <div className="relative bg-[#141d2e] border border-white/5 p-6 rounded-[32px] shadow-2xl overflow-hidden">
          {/* Subtle Background Decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Shield size={120} className="text-[#bef264]" />
          </div>
          
          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className="relative w-40 h-40 mb-4">
              {/* Score Ring */}
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="12"
                />
                <motion.circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#bef264"
                  strokeWidth="12"
                  strokeDasharray="440"
                  initial={{ strokeDashoffset: 440 }}
                  animate={{ strokeDashoffset: 440 - (440 * (safetyScore / 10)) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_12px_rgba(190,242,100,0.4)]"
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-white tracking-tighter leading-none">{safetyScore}</span>
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest mt-1">/ 10</span>
              </div>

              {/* Animated Glow behind ring */}
              <div className="absolute inset-0 bg-[#bef264]/5 blur-3xl -z-10 rounded-full animate-pulse"></div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#bef264]/10 border border-[#bef264]/20 rounded-full mb-3">
                <ShieldCheck size={14} className="text-[#bef264]" />
                <span className="text-[11px] font-black text-[#bef264] uppercase tracking-widest">Low Risk Status</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#bef264] rounded-full animate-pulse"></div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">AI Monitoring Active</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 mb-6">
            <p className="text-[12px] font-medium text-gray-300 leading-relaxed text-center">
              Your connected accounts and routing activity currently show <span className="text-[#bef264] font-black italic">low exposure</span> to risk.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Scam Protection', val: 'Active', color: 'text-cyan-400' },
              { label: 'Route Verification', val: 'Enabled', color: 'text-[#bef264]' },
              { label: 'API Safety', val: 'Read-only', color: 'text-blue-400' }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 p-2 bg-white/5 rounded-xl border border-white/5">
                <p className="text-[8px] font-black text-gray-500 uppercase tracking-tighter text-center leading-none">{metric.label}</p>
                <p className={`text-[10px] font-black ${metric.color} uppercase tracking-widest leading-none`}>{metric.val}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3. LIVE RISK MONITOR SECTION */}
      <div className="mb-10 px-1">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em]">Live Risk Monitor</h4>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Wallet, title: 'Wallet Activity', status: 'Normal', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
            { icon: Globe, title: 'Connected APIs', status: 'Secure', color: 'text-[#bef264]', bg: 'bg-[#bef264]/10' },
            { icon: ShieldCheck, title: 'Routing Safety', status: 'Verified', color: 'text-blue-400', bg: 'bg-blue-500/10' }
          ].map((item, i) => (
            <div key={i} className="bg-[#141d2e] border border-white/5 rounded-2xl p-3 flex flex-col items-center gap-2 group hover:bg-[#1a253a] transition-all cursor-default">
              <div className={`p-2 rounded-xl ${item.bg} ${item.color} shadow-sm group-hover:shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all`}>
                <item.icon size={16} />
              </div>
              <div className="text-center">
                <p className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter mb-0.5 leading-none">{item.title}</p>
                <div className="flex items-center justify-center gap-1">
                   <div className={`w-1 h-1 rounded-full ${item.color} animate-pulse`}></div>
                   <p className={`text-[10px] font-black ${item.color} uppercase tracking-widest`}>{item.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. RISK ALERTS SECTION */}
      <div className="mb-10 px-1">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em]">AI Risk Alerts</h4>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        </div>

        <div className="space-y-3">
          {[
            { 
              priority: 'Low', 
              priorityColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
              msg: 'High network fees detected on selected route.', 
              time: '2m ago',
              icon: AlertCircle
            },
            { 
              priority: 'Medium', 
              priorityColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
              msg: 'New device login detected.', 
              time: '1h ago',
              icon: AlertCircle
            },
            { 
              priority: 'Safe', 
              priorityColor: 'text-[#bef264] bg-[#bef264]/10 border-[#bef264]/20',
              msg: 'AI found a lower-risk execution path.', 
              time: '4h ago',
              icon: CheckCircle2
            }
          ].map((alert, i) => (
            <div key={i} className="bg-[#141d2e] border border-white/5 rounded-[24px] p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-white/5 ${alert.priorityColor.split(' ')[0]}`}>
                  <alert.icon size={18} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-tighter border ${alert.priorityColor}`}>
                      {alert.priority} Priority
                    </span>
                    <span className="text-[9px] font-bold text-gray-600 uppercase">{alert.time}</span>
                  </div>
                  <p className="text-[12px] font-bold text-white tracking-tight">{alert.msg}</p>
                </div>
              </div>
              <ChevronRight size={14} className="text-gray-700" />
            </div>
          ))}
        </div>
      </div>

      {/* 5. SCAM & ROUTE PROTECTION SECTION */}
      <div className="bg-[#141d2e] border border-[#bef264]/10 p-6 rounded-[32px] mb-10 shadow-xl relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 opacity-[0.03] rotate-12 group-hover:rotate-6 transition-transform duration-700">
            <Shield size={120} className="text-[#bef264]" />
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#bef264]/10 rounded-2xl text-[#bef264]">
              <Lock size={18} />
            </div>
            <h3 className="text-base font-black text-white tracking-tight lowercase">Smart Protection</h3>
          </div>
          <div className="w-1.5 h-1.5 bg-[#bef264] rounded-full shadow-[0_0_8px_#bef264]"></div>
        </div>

        <div className="space-y-4 mb-8">
          {[
            'Scam detection enabled',
            'Unsafe route blocking',
            'Suspicious platform monitoring',
            'AI route verification'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-full">
                 <CheckCircle2 size={12} className="text-[#bef264]" />
              </div>
              <span className="text-[12px] font-bold text-gray-400">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#bef264] hover:bg-[#bef264]/90 text-[#0B1120] py-4 rounded-[20px] font-black text-xs uppercase tracking-[0.1em] shadow-[0_4px_20px_rgba(190,242,100,0.2)] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          Run Full Safety Check
          <Activity size={14} />
        </button>
      </div>

      {/* 6. AI SAFETY INSIGHTS SECTION */}
      <div className="mb-10 px-1">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.25em]">AI Safety Insights</h4>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        </div>
        
        <div className="space-y-3">
          {[
            { msg: 'AI recommends safer routing for large transfers.', icon: Sparkles },
            { msg: 'Read-only APIs reduce account exposure.', icon: ShieldCheck },
            { msg: 'Low-risk platforms prioritized.', icon: Activity }
          ].map((insight, i) => (
            <div key={i} className="bg-[#141d2e]/50 border border-white/5 rounded-[22px] p-4 flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-xl text-purple-400">
                <insight.icon size={16} />
              </div>
              <p className="text-[11px] font-bold text-gray-300 tracking-tight leading-none italic">“{insight.msg}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. SECURITY SETTINGS SECTION */}
      <div className="space-y-3 mb-10">
        <div className="flex items-center justify-between px-2 mb-2">
          <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.25em]">Security Settings</h4>
          <div className="w-1 h-1 rounded-full bg-gray-700"></div>
        </div>
        <div className="bg-[#141d2e] border border-white/5 rounded-[28px] p-1 shadow-sm">
          {[
            { label: 'Biometric Security', val: true, type: 'toggle', icon: Fingerprint },
            { label: 'Login Alerts', val: true, type: 'toggle', icon: Bell },
            { label: 'AI Monitoring', val: 'Advanced', type: 'select', icon: Scan },
            { label: 'Auto Route Verification', val: 'All Routes', type: 'select', icon: ShieldCheck }
          ].map((pref, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-transparent border-b border-white/5 last:border-0 group cursor-pointer hover:bg-white/[0.02] transition-colors rounded-xl mx-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-gray-500 group-hover:text-gray-300 transition-colors">
                  <pref.icon size={18} />
                </div>
                <span className="text-[13px] font-black text-white/80 tracking-tight">{pref.label}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {pref.type === 'select' ? (
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 group-hover:border-[#bef264]/20 transition-all">
                    <span className="text-[10px] font-black text-[#bef264] uppercase tracking-tighter">{pref.val}</span>
                    <ChevronRight size={12} className="text-gray-700 rotate-90" />
                  </div>
                ) : (
                  <div className={`w-10 h-5 rounded-full p-1 transition-all ${pref.val ? 'bg-[#bef264]' : 'bg-gray-800'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full transition-transform ${pref.val ? 'translate-x-5' : 'translate-x-0'}`}></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-4 mb-4 text-center">
        <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Shield size={10} className="text-[#bef264]" />
          Shielded by FinoAi Protocol
        </p>
      </div>
    </div>
  );
};

export default RiskCenterScreen;
