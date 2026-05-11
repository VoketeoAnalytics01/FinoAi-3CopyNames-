
import React, { useState } from 'react';
import { CheckCircle2, Zap, Check, TrendingDown, Settings, Bell, Repeat, TrendingUp, ShieldAlert, Trash2, AlertTriangle, X, Edit3, Save, Info, Crown, Building2, Rocket, ArrowRight, Lock, Palette, Sparkles } from 'lucide-react';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <div className="flex items-start gap-1.5 mb-1.5 last:mb-0">
    <div className="mt-0.5 bg-[#bef264]/20 rounded-full p-0.5 shrink-0">
      <Check size={8} className="text-[#bef264] stroke-[4]" />
    </div>
    <span className="text-[10px] text-gray-300 font-bold leading-tight">{text}</span>
  </div>
);

const ToggleSwitch: React.FC<{ enabled: boolean; onChange: () => void }> = ({ enabled, onChange }) => (
  <button 
    onClick={onChange}
    className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-1 ${enabled ? 'bg-[#bef264]' : 'bg-gray-700'}`}
  >
    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0'}`} />
  </button>
);

const PreferenceItem: React.FC<{ 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  enabled: boolean; 
  onChange: () => void 
}> = ({ icon: Icon, title, description, enabled, onChange }) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-800/50 last:border-0">
    <div className="flex gap-4 items-center">
      <div className={`p-2 rounded-xl ${enabled ? 'bg-[#bef264]/10 text-[#bef264]' : 'bg-white/5 text-gray-500'}`}>
        <Icon size={18} />
      </div>
      <div>
        <h4 className="text-[13px] font-black text-white leading-tight uppercase tracking-tight">{title}</h4>
        <p className="text-[10px] text-gray-500 font-bold leading-tight mt-0.5">{description}</p>
      </div>
    </div>
    <ToggleSwitch enabled={enabled} onChange={onChange} />
  </div>
);

const ComparisonCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  isPrimary?: boolean;
  icon: React.ElementType;
  ctaLabel?: string;
  onSelect?: () => void;
}> = ({ title, price, features, isPrimary, icon: Icon, ctaLabel, onSelect }) => (
  <div className={`p-5 rounded-[32px] border transition-all flex flex-col justify-between relative overflow-hidden ${
    isPrimary 
      ? 'bg-[#1a2335] border-[#bef264]/40 shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(190,242,100,0.1)] scale-[1.02] z-10' 
      : 'bg-[#151c2c] border-white/5 shadow-xl'
  }`}>
    {isPrimary && (
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#bef264]/5 blur-[40px] rounded-full pointer-events-none"></div>
    )}
    
    <div>
      <div className="flex justify-between items-start mb-5">
        <div className={`p-2.5 rounded-2xl ${isPrimary ? 'bg-[#bef264]/10 text-[#bef264]' : 'bg-white/5 text-gray-400'}`}>
          <Icon size={18} />
        </div>
        {isPrimary && (
          <span className="bg-[#bef264] text-black text-[8px] font-black uppercase px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(190,242,100,0.5)] tracking-tighter">
            Recommended
          </span>
        )}
      </div>
      
      <h4 className={`text-sm font-black uppercase tracking-tight mb-1.5 ${isPrimary ? 'text-[#bef264]' : 'text-white'}`}>
        {title}
      </h4>
      
      <div className="flex items-baseline gap-1 mb-5">
        <span className="text-2xl font-black text-white">{price}</span>
        {price !== 'Custom' && <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">/mo</span>}
      </div>
      
      <div className="space-y-2.5 mb-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 ${isPrimary ? 'bg-[#bef264]/10' : 'bg-white/5'}`}>
               <Check size={8} className={`${isPrimary ? 'text-[#bef264]' : 'text-gray-600'} stroke-[4]`} />
            </div>
            <span className="text-[10px] font-bold text-gray-400 leading-none">{f}</span>
          </div>
        ))}
      </div>
    </div>
    
    {ctaLabel && (
      <button 
        onClick={onSelect}
        className={`group relative w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-[0.96] flex items-center justify-center gap-2 overflow-hidden ${
        isPrimary 
          ? "bg-[#bef264] text-black shadow-[0_10px_25px_rgba(190,242,100,0.3)]" 
          : "bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-md"
      }`}>
        {isPrimary && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
        )}
        
        <span className="relative z-10">{ctaLabel}</span>
        <ArrowRight size={12} strokeWidth={3} className={`relative z-10 transition-transform group-hover:translate-x-1 ${isPrimary ? 'text-black' : 'text-[#bef264]'}`} />
      </button>
    )}

    <style>{`
      @keyframes shimmer {
        100% {
          transform: translateX(100%);
        }
      }
    `}</style>
  </div>
);

interface ProfileScreenProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ theme, onThemeChange }) => {
  const [isPremium, setIsPremium] = useState(false); // Simulated status
  const [profileName, setProfileName] = useState('Alex M.');
  const [tempName, setTempName] = useState('Alex M.');
  const [prefs, setPrefs] = useState({
    routes: true,
    lending: true,
    security: true
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmSaveModal, setShowConfirmSaveModal] = useState(false);

  const THEMES = [
    { id: 'dark', name: 'Dark', color: '#0B1120', premium: false },
    { id: 'light', name: 'Light', color: '#F8FAFC', premium: false },
    { id: 'midnight', name: 'Midnight', color: '#020617', premium: true },
    { id: 'forest', name: 'Forest', color: '#052e16', premium: true },
    { id: 'nebula', name: 'Nebula', color: '#1e1b4b', premium: true },
  ];

  const handleThemeSelect = (themeId: string, isThemePremium: boolean) => {
    if (isThemePremium && !isPremium) {
      alert("Upgrade to Pro AI to unlock premium themes!");
      return;
    }
    onThemeChange(themeId);
  };

  const handleEditOpen = () => {
    setTempName(profileName);
    setShowEditModal(true);
  };

  const handleSaveAttempt = () => {
    setShowConfirmSaveModal(true);
  };

  const handleConfirmSave = () => {
    setProfileName(tempName);
    setShowConfirmSaveModal(false);
    setShowEditModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-transparent p-6 pb-28 overflow-y-auto no-scrollbar animate-in fade-in duration-500">
      {/* Top Navigation / Status */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-1 bg-[#bef264] rounded-full shadow-[0_0_8px_rgba(190,242,100,0.5)]"></div>
          <span className="text-xl font-black tracking-tight uppercase">FinoAi</span>
        </div>
        <div className="bg-[#bef264] text-black px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow-[0_0_20px_rgba(190,242,100,0.3)] flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
          AI Active
        </div>
      </div>

      {/* Hero Header - Left Aligned and Smaller Font */}
      <div className="text-left mb-6">
        <h1 className="text-4xl font-black tracking-tighter mb-1 leading-none">Profile</h1>
        <h2 className="text-base font-bold text-gray-400 mb-1">Your AI-powered financial identity</h2>
        <p className="text-[9px] text-gray-500 font-black uppercase tracking-[0.25em]">Non-custodial • Performance AI</p>
      </div>

      {/* Identity Block */}
      <div className="bg-[#151c2c] border border-gray-800 rounded-[32px] p-6 mb-6 flex items-center justify-between shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#bef264]/5 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:bg-[#bef264]/10 transition-colors"></div>
        <div className="flex items-center gap-5 relative z-10">
          <div className="relative">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-br from-[#bef264] to-gray-800 shadow-xl">
              <img 
                src="https://picsum.photos/seed/alex/120/120" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-2 border-[#151c2c]"
              />
            </div>
            <div className={`absolute -bottom-1 -right-1 rounded-full p-1 border-2 border-[#151c2c] bg-[#10b981]`}>
              <CheckCircle2 size={10} className="text-white" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-black text-white leading-tight">{profileName}</h3>
              <button 
                onClick={handleEditOpen}
                className="p-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-[#bef264]/10 hover:text-[#bef264] transition-all"
              >
                <Edit3 size={14} />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-1.5 bg-[#0B1120] px-3 py-1 rounded-full border border-gray-800">
               <CheckCircle2 size={10} className="text-[#bef264]" />
               <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider">
                 Private Wallet Verified
               </span>
            </div>
          </div>
        </div>
        <div className="text-right relative z-10">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-1">Status</p>
          <p className="text-xl font-black text-[#bef264] tracking-tight">Protected</p>
        </div>
      </div>

      {/* Non-Custodial Trust Block */}
      <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-[32px] p-6 mb-6 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-white tracking-tight mb-1">Non-Custodial Architecture</h3>
            <p className="text-[11px] text-gray-400 font-bold leading-relaxed">
              FinoAi never touches your private keys. You retain 100% control over your assets. We only provide optimal routing intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Theme Studio Section */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-4 px-1">
          <div className="flex items-center gap-2">
            <Palette size={20} className="text-[#bef264]" />
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">App Studio</h2>
          </div>
        </div>
        
        <div className="bg-[#151c2c] border border-gray-800 rounded-[32px] p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-3xl pointer-events-none"></div>
          
          <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4 px-1">Global Background Theme</h4>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeSelect(t.id, false)}
                className={`flex flex-col items-center gap-2 group shrink-0 transition-all opacity-100`}
              >
                <div className={`w-14 h-14 rounded-2xl border-2 p-1 transition-all flex items-center justify-center relative ${
                  theme === t.id ? 'border-[#bef264] scale-110 shadow-[0_0_15px_rgba(190,242,100,0.3)]' : 'border-white/10 group-hover:border-white/30'
                }`} style={{ backgroundColor: t.color }}>
                  {theme === t.id && (
                    <div className="w-2 h-2 bg-[#bef264] rounded-full shadow-[0_0_8px_#bef264]"></div>
                  )}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-widest ${theme === t.id ? 'text-[#bef264]' : 'text-gray-500'}`}>
                  {t.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-4 px-1">
          <h2 className="text-2xl font-black text-white tracking-tight uppercase">Preferences</h2>
          <Settings size={18} className="text-gray-600 mb-1" />
        </div>
        <div className="bg-[#151c2c] border border-gray-800 rounded-[32px] p-6 shadow-xl">
          <PreferenceItem 
            icon={Repeat} 
            title="Routing Intelligence" 
            description="Alert when AI finds an optimal transfer path."
            enabled={prefs.routes}
            onChange={() => setPrefs(p => ({...p, routes: !p.routes}))}
          />
          <PreferenceItem 
            icon={ShieldAlert} 
            title="Security Shield" 
            description="Real-time alerts for suspicious behavior."
            enabled={prefs.security}
            onChange={() => setPrefs(p => ({...p, security: !p.security}))}
          />
        </div>
      </div>

      {/* Privacy & Safety Section */}
      <div className="mb-0">
        <div className="flex justify-between items-end mb-4 px-1">
          <h2 className="text-2xl font-black text-white tracking-tight uppercase">Privacy & Security</h2>
          <ShieldAlert size={18} className="text-red-500/50 mb-1" />
        </div>
        <div className="bg-[#151c2c] border border-red-500/10 rounded-[32px] p-6 shadow-xl mb-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-[13px] font-black text-white leading-tight uppercase tracking-tight">Delete Account</h4>
              <p className="text-[10px] text-gray-500 font-bold leading-tight mt-1">Permanently remove your AI profile and data.</p>
            </div>
            <button 
              onClick={() => setShowDeleteModal(true)}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-500 p-3 rounded-2xl border border-red-500/20 transition-all active:scale-95"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
        
        <div className="px-4 flex gap-2 items-start opacity-60">
          <Info size={12} className="text-gray-500 mt-0.5" />
          <p className="text-[9px] text-gray-500 font-bold leading-relaxed uppercase tracking-wider">
            GDPR COMPLIANT: DELETING YOUR ACCOUNT PURGES ALL ON-CHAIN SIGNATURES, AI MODELS, AND SESSION METADATA FROM OUR SECURE SERVERS.
          </p>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowEditModal(false)}></div>
          <div className="relative bg-[#1a1d25] border border-white/10 rounded-[40px] p-8 max-w-[340px] w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Edit Profile</h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1.5 block px-1">Display Name</label>
                <input 
                  type="text" 
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full bg-[#0B1120] border border-gray-800 rounded-2xl px-5 py-3.5 text-white font-bold outline-none focus:border-[#bef264] transition-colors"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleSaveAttempt}
                className="w-full bg-[#bef264] text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Save size={18} />
                Save Changes
              </button>
              <button 
                onClick={() => setShowEditModal(false)}
                className="w-full bg-white/5 border border-white/10 text-gray-400 py-4 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-[0.98] transition-all"
              >
                Cancel
              </button>
            </div>

            <button 
              onClick={() => setShowEditModal(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Confirm Save Modal */}
      {showConfirmSaveModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowConfirmSaveModal(false)}></div>
          <div className="relative bg-[#2d3139] border border-white/10 rounded-[32px] p-6 max-w-[300px] w-full shadow-2xl animate-in fade-in zoom-in-90 duration-200">
            <h4 className="text-lg font-black text-white mb-2 tracking-tight text-center">Confirm Updates?</h4>
            <p className="text-xs text-gray-400 text-center mb-6">Your identity profile will be updated across the FinoAi network.</p>
            <div className="flex gap-3">
              <button 
                onClick={handleConfirmSave}
                className="flex-1 bg-[#bef264] text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-wider active:scale-95"
              >
                Confirm
              </button>
              <button 
                onClick={() => setShowConfirmSaveModal(false)}
                className="flex-1 bg-white/5 text-white py-3 rounded-xl font-black text-[10px] uppercase tracking-wider active:scale-95 border border-white/10"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal (Delete) */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowDeleteModal(false)}></div>
          <div className="relative bg-[#1a1d25] border border-white/10 rounded-[40px] p-8 max-w-[340px] w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
              <AlertTriangle className="text-red-500" size={32} />
            </div>
            
            <h3 className="text-2xl font-black text-white text-center mb-3 tracking-tight">Are you sure?</h3>
            <p className="text-sm text-gray-400 text-center mb-8 font-medium leading-relaxed">
              This action is permanent. All your AI learning models, saved routes, and history will be wiped.
            </p>

            <div className="space-y-3">
              <button 
                onClick={() => {
                  console.log("Account deletion triggered");
                  setShowDeleteModal(false);
                }}
                className="w-full bg-red-500 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(239,68,68,0.2)]"
              >
                Confirm Delete
              </button>
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="w-full bg-white/5 border border-white/10 text-gray-400 py-4 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-[0.98] transition-all"
              >
                Keep My Account
              </button>
            </div>

            <button 
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
