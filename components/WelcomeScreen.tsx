
import React, { useState, useEffect, useRef } from 'react';
import { Layers, Percent, ShieldCheck, ArrowRight, Zap, TrendingDown, Shield } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const FEATURE_CARDS = [
  {
    id: 'routing',
    title: 'Smart Routing',
    description: 'Find the fastest & cheapest route for any asset globally.',
    footer: 'Powered by Routing Engine v1.0',
    icon: (props: any) => (
      <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
        <Layers className="text-blue-400" size={32} />
      </div>
    ),
    glow: 'bg-blue-500/10'
  },
  {
    id: 'yield',
    title: 'AI Yield Optimizer',
    description: 'Boost your returns with intelligent lending & borrowing suggestions.',
    footer: 'Automated 24/7 scanning',
    icon: (props: any) => (
      <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30">
        <Percent className="text-emerald-400" size={32} />
      </div>
    ),
    glow: 'bg-emerald-500/10'
  },
  {
    id: 'risk',
    title: 'Risk Intelligence',
    description: 'Detect hidden risks, fees, and bad routes before they hurt your portfolio.',
    footer: 'Shield active on all chains',
    icon: (props: any) => (
      <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
        <ShieldCheck className="text-purple-400" size={32} />
      </div>
    ),
    glow: 'bg-purple-500/10'
  },
  {
    id: 'borrow',
    title: 'Smart Borrow opportunities',
    description: 'Access institutional-grade borrowing rates with AI-matched collateral optimization.',
    footer: 'Dynamic APR matching',
    icon: (props: any) => (
      <div className="w-14 h-14 bg-violet-500/20 rounded-2xl flex items-center justify-center border border-violet-500/30">
        <TrendingDown className="text-violet-400" size={32} />
      </div>
    ),
    glow: 'bg-violet-500/10'
  },
  {
    id: 'payments',
    title: 'Secure you payments with FinoAi',
    description: 'Ensure every transfer is protected by our non-custodial real-time security shield.',
    footer: 'Fraud protection active',
    icon: (props: any) => (
      <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30">
        <Shield className="text-orange-400" size={32} />
      </div>
    ),
    glow: 'bg-orange-500/10'
  }
];

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % FEATURE_CARDS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Sync scroll position with active card for auto-preview
  useEffect(() => {
    if (carouselRef.current) {
        const cardWidth = carouselRef.current.offsetWidth * 0.85; // matching min-w-[85%]
        carouselRef.current.scrollTo({
            left: activeCard * (cardWidth + 16), // 16 is the gap-4
            behavior: 'smooth'
        });
    }
  }, [activeCard]);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-[#0B1120] overflow-hidden text-white font-inter">
      {/* Visionary Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[100%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[60%] bg-teal-500/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle Scan Lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      <div className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 pt-12">
        {/* Top Branding / Breadcrumb */}
        <div className="flex flex-col items-center mb-8 opacity-60">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">FinoAi Intelligence</span>
            <div className="flex gap-1">
                {FEATURE_CARDS.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeCard === i ? 'w-6 bg-[#bef264]' : 'w-1.5 bg-gray-800'}`}></div>
                ))}
            </div>
        </div>

        {/* Main Header */}
        <div className="text-center mb-12">
          <h1 className="text-[32px] font-black leading-tight tracking-tighter mb-4 px-4">
            Welcome to the<br />Future of Finance
          </h1>
          <p className="text-sm text-gray-400 font-medium max-w-[280px] mx-auto leading-relaxed">
            FinoAi optimizes your transfers, yields, and risk — <span className="text-white">automatically.</span>
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="w-full relative py-4">
            <div 
                className="flex gap-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
                ref={carouselRef}
            >
                {FEATURE_CARDS.map((card, i) => (
                    <button
                        key={card.id}
                        onClick={onComplete}
                        className={`min-w-[85%] snap-center relative p-8 rounded-[40px] border transition-all duration-700 text-left overflow-hidden active:scale-95 group ${
                            activeCard === i 
                                ? 'bg-[#151c2c] border-white/10 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] scale-100' 
                                : 'bg-[#151c2c]/40 border-white/5 opacity-40 scale-90'
                        }`}
                    >
                        {/* Glow Background */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-20 rounded-full ${card.glow}`}></div>
                        
                        <div className="mb-8">
                            <card.icon />
                        </div>

                        <h3 className="text-xl font-black text-white mb-3 tracking-tight uppercase">{card.title}</h3>
                        <p className="text-[13px] text-gray-400 font-bold leading-relaxed mb-6 h-12">
                            {card.description}
                        </p>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-white/5">
                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic">{card.footer}</span>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#bef264] group-hover:text-black transition-all">
                                <ArrowRight size={14} strokeWidth={3} />
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {/* Navigation Actions */}
        <div className="w-full max-w-[320px] mt-16 space-y-6">
            <button 
                onClick={onComplete}
                className="w-full py-5 bg-white text-black rounded-[24px] font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
                Continue
                <ArrowRight size={16} strokeWidth={3} />
            </button>
            
            <button 
                onClick={onComplete}
                className="w-full text-center text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors"
            >
                Skip for now
            </button>
        </div>

        {/* Bottom Visions Branding */}
        <div className="mt-12 flex flex-col items-center gap-4 opacity-20">
            <div className="flex items-center gap-2">
                <Zap size={14} className="fill-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">Precision Execution</span>
            </div>
            <p className="text-[8px] font-black text-center max-w-[200px] uppercase tracking-widest leading-relaxed">
                Empowering the individual with institutional-grade AI intelligence
            </p>
        </div>
      </div>

      <style>{`
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
