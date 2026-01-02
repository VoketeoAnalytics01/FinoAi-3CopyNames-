
import React, { useState } from 'react';
import { X, Mail, Smartphone, Github, Chrome, ArrowRight, ShieldCheck, Globe, User, MessageCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signup' | 'login';
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onSuccess }) => {
  const [step, setStep] = useState<'method' | 'details'>(mode === 'signup' ? 'method' : 'method');
  const [formData, setFormData] = useState({
    username: '',
    emailOrPhone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-[450px] bg-[#0B1120] rounded-t-[40px] border-t border-white/10 p-8 pt-4 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-full duration-500">
        <div className="w-12 h-1.5 bg-gray-800 rounded-full mx-auto mb-8 cursor-pointer" onClick={onClose} />
        
        <div className="flex justify-between items-start mb-10">
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic leading-none mb-2">
              {mode === 'signup' ? 'Join FinoAi' : 'Welcome Back'}
            </h3>
            <p className="text-[10px] text-[#bef264] font-black uppercase tracking-[0.2em]">
              Jurisdiction: Global Compliant
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 active:scale-90 transition-all"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {step === 'method' ? (
          <div className="space-y-4 mb-8">
            <button 
              onClick={() => setStep('details')}
              className="w-full flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all active:scale-[0.98] group"
            >
              <div className="w-10 h-10 bg-[#bef264]/10 rounded-xl flex items-center justify-center border border-[#bef264]/20 group-hover:border-[#bef264]/40 transition-colors">
                <Mail size={18} className="text-[#bef264]" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-black text-white uppercase tracking-tight">Email or Phone</h4>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Recommended</p>
              </div>
              <ArrowRight size={16} className="text-gray-700 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={onSuccess}
              className="w-full flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all active:scale-[0.98] group"
            >
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                <Globe size={18} className="text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-black text-white uppercase tracking-tight">Social Accounts</h4>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Google • Apple • X</p>
              </div>
              <ArrowRight size={16} className="text-gray-700 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={onSuccess}
              className="w-full flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all active:scale-[0.98] group"
            >
              <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                <ShieldCheck size={18} className="text-purple-400" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-black text-white uppercase tracking-tight">Wallet Connect</h4>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Non-custodial login</p>
              </div>
              <ArrowRight size={16} className="text-gray-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mb-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">First Time Username</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Enter username"
                  className="w-full bg-white/5 border border-white/10 rounded-[20px] py-4 pl-12 pr-4 text-white font-bold outline-none focus:border-[#bef264]/50 transition-colors"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">Mobile or Email</label>
              <div className="relative">
                <Smartphone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="+1... or example@fino.ai"
                  className="w-full bg-white/5 border border-white/10 rounded-[20px] py-4 pl-12 pr-4 text-white font-bold outline-none focus:border-[#bef264]/50 transition-colors"
                  value={formData.emailOrPhone}
                  onChange={(e) => setFormData({...formData, emailOrPhone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full py-5 bg-[#bef264] text-black rounded-[24px] font-black text-sm uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(190,242,100,0.2)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Access Platform
                <ArrowRight size={16} strokeWidth={3} />
              </button>
            </div>
            
            <button 
              type="button" 
              onClick={() => setStep('method')}
              className="w-full text-center text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
            >
              Go Back
            </button>
          </form>
        )}

        <div className="flex items-center gap-3 justify-center pt-4 opacity-30">
          <ShieldCheck size={12} className="text-[#bef264]" />
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">Encrypted • Non-custodial Session</span>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
