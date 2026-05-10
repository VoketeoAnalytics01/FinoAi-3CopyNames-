import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Bot, Sparkles, ChevronRight, X, MessageSquare } from 'lucide-react';

interface BorrowScreenProps {
  onBack: () => void;
}

const PLATFORMS = [
  { id: 'aave', name: 'Aave V3', apy: '3.2%', type: 'DeFi', risk: 'Low', aiRecommended: true },
  { id: 'compound', name: 'Compound', apy: '3.5%', type: 'DeFi', risk: 'Low', aiRecommended: true },
  { id: 'maker', name: 'MakerDAO', apy: '4.1%', type: 'DeFi', risk: 'Medium', aiRecommended: false },
  { id: 'nexo', name: 'Nexo', apy: '5.9%', type: 'CeFi', risk: 'High', aiRecommended: false },
];

const BorrowScreen: React.FC<BorrowScreenProps> = ({ onBack }) => {
  const [filter, setFilter] = useState('all');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);

  const filteredPlatforms = PLATFORMS.filter(p => {
    if (filter === 'ai') return p.aiRecommended;
    if (filter === 'defi') return p.type === 'DeFi';
    if (filter === 'cefi') return p.type === 'CeFi';
    return true;
  });

  return (
    <div className="flex flex-col h-screen bg-[#0B1120] text-slate-100 animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-4 p-4 border-b border-white/10">
        <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-black tracking-tight uppercase">Borrow</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Platforms</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${filter === 'all' ? 'bg-[#bef264] text-black' : 'bg-white/5 text-slate-400'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1 ${filter === 'ai' ? 'bg-[#bef264] text-black' : 'bg-white/5 text-slate-400'}`}
            >
              <Sparkles size={12} /> AI Best
            </button>
            <button 
              onClick={() => setFilter('defi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${filter === 'defi' ? 'bg-[#bef264] text-black' : 'bg-white/5 text-slate-400'}`}
            >
              DeFi
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredPlatforms.map(platform => (
            <div key={platform.id} className="bg-[#141d2e] border border-white/5 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">{platform.name}</h3>
                  {platform.aiRecommended && (
                    <span className="bg-[#bef264]/20 text-[#bef264] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={10} /> AI Pick
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm text-slate-400">
                  <span>Borrow APY: <span className="text-white font-medium">{platform.apy}</span></span>
                  <span>•</span>
                  <span>Risk: <span className={platform.risk === 'Low' ? 'text-emerald-400' : platform.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'}>{platform.risk}</span></span>
                </div>
              </div>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Floating AI Chatbot Icon */}
      <button 
        onClick={() => setShowQuiz(true)}
        className="absolute bottom-6 right-6 w-14 h-14 bg-[#bef264] text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(190,242,100,0.3)] hover:scale-105 transition-transform z-40"
      >
        <Bot size={28} />
      </button>

      {/* AI Quiz Popup */}
      {showQuiz && (
        <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#141d2e] w-full max-w-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#bef264] rounded-full flex items-center justify-center text-black">
                  <Bot size={18} />
                </div>
                <h3 className="font-bold">AI Borrowing Assistant</h3>
              </div>
              <button onClick={() => setShowQuiz(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {quizStep === 0 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <p className="text-lg font-medium">What is your primary goal for borrowing?</p>
                  <div className="space-y-2">
                    <button onClick={() => setQuizStep(1)} className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-colors font-medium">Lowest Interest Rate</button>
                    <button onClick={() => setQuizStep(1)} className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-colors font-medium">Highest LTV (Loan-to-Value)</button>
                    <button onClick={() => setQuizStep(1)} className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-colors font-medium">Fixed Rate Options</button>
                  </div>
                </div>
              )}
              
              {quizStep === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <p className="text-lg font-medium">What collateral are you planning to use?</p>
                  <div className="space-y-2">
                    <button onClick={() => setQuizStep(2)} className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-colors font-medium">Stablecoins (USDC, USDT)</button>
                    <button onClick={() => setQuizStep(2)} className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-colors font-medium">Volatile Assets (ETH, BTC)</button>
                    <button onClick={() => setQuizStep(2)} className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-colors font-medium">Yield-bearing Tokens</button>
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 text-center py-4">
                  <div className="w-16 h-16 bg-[#bef264]/20 text-[#bef264] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#bef264]">Analysis Complete</h3>
                  <p className="text-slate-400">Based on your preferences, we recommend Aave V3 for the best rates on your collateral.</p>
                  <button 
                    onClick={() => {
                      setFilter('ai');
                      setShowQuiz(false);
                      setQuizStep(0);
                    }} 
                    className="w-full mt-6 p-4 bg-[#bef264] text-black font-black uppercase tracking-wider rounded-2xl hover:bg-[#a3e635] transition-colors"
                  >
                    View Recommendations
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowScreen;
