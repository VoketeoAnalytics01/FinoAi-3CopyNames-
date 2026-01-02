
import React, { useState } from 'react';
import { Wallet, Mail, Smartphone, Github, Chrome, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import AuthModal from './AuthModal.tsx';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');

  const handleAuthTrigger = (mode: 'signup' | 'login') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-[#0B1120] overflow-hidden text-white font-inter">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3A] via-[#0B1120] to-[#091226]"></div>
        
        {/* Animated Particles/Stars */}
        <div className="stars-container absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="star absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`
              }}
            ></div>
          ))}
        </div>

        {/* Dynamic Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-[#14b8a6]/5 blur-[120px] rounded-full animate-pulse-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-1 items-center px-8 pt-24 pb-12">
        {/* Brand Logo - Interlocking Nodes */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-20 h-20 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70 20C65 15 55 15 50 20L30 40C25 45 25 55 30 60L50 80C55 85 65 85 70 80L85 65" stroke="white" strokeWidth="6" strokeLinecap="round" />
              <path d="M30 80C35 85 45 85 50 80L70 60C75 55 75 45 70 40L50 20C45 15 35 15 30 20L15 35" stroke="white" strokeWidth="6" strokeLinecap="round" />
              <circle cx="50" cy="50" r="8" fill="white" className="animate-pulse" />
            </svg>
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-2">FinoAi</h1>
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#bef264] to-transparent"></div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-16 mt-4">
          <h2 className="text-[40px] font-black leading-[1.1] tracking-tighter mb-4">
            AI-Powered<br />Global Finance
          </h2>
          <p className="text-base font-medium text-gray-400">
            Optimized, non-custodial, and secure
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-4 mt-auto">
          <button 
            onClick={() => handleAuthTrigger('signup')}
            className="w-full py-5 bg-gradient-to-r from-[#99f6e4] to-[#5eead4] rounded-[24px] text-black font-black text-lg uppercase tracking-wider shadow-[0_10px_30px_-5px_rgba(94,234,212,0.4)] active:scale-[0.98] transition-all"
          >
            Get Started
          </button>
          
          <button 
            onClick={() => handleAuthTrigger('login')}
            className="w-full py-4 text-white font-black text-sm uppercase tracking-[0.2em] active:opacity-60 transition-opacity"
          >
            Connect Wallet
          </button>
        </div>

        {/* Footer Tagline */}
        <div className="mt-12 flex items-center gap-3 opacity-40">
          <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Non-custodial</span>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Real-time</span>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Privacy-first</span>
        </div>
      </div>

      {/* Auth Pop-screen Modal */}
      <AuthModal 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)} 
        mode={authMode} 
        onSuccess={onComplete}
      />

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -20%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -10%) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Onboarding;
