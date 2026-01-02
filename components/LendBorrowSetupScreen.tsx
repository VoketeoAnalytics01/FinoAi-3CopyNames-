
import React, { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, Wallet, ChevronDown, ShieldCheck, Zap, Info, Lock, Clock, Sparkles, Percent, Globe, ExternalLink, Check, Search, Filter, AlertTriangle, FileText, BarChart3, Activity } from 'lucide-react';
import BottomSheet from './BottomSheet.tsx';

interface LendBorrowSetupScreenProps {
  onBack: () => void;
}

const ASSETS = [
  { id: 'USDT', name: 'USDT', balance: '2,450.00', apy: '8.2%' },
  { id: 'ETH', name: 'ETH', balance: '4.20', apy: '4.5%' },
  { id: 'BTC', name: 'BTC', balance: '0.15', apy: '3.1%' },
  { id: 'SOL', name: 'SOL', balance: '145.00', apy: '7.8%' },
  { id: 'KES', name: 'KeSh', balance: '50,000.00', apy: '12.5%' },
  { id: 'EUR', name: 'Euro', balance: '1,200.00', apy: '2.4%' },
  { id: 'GBP', name: 'Pound', balance: '850.00', apy: '3.0%' },
];

const LENDING_PLATFORMS = [
  { id: 'aave', name: 'Aave V3', type: 'DeFi', apy: '8.2%', risk: 98, jurisdiction: 'Global', terms: 'Flexible • Non-custodial', tvl: '$8.2B', url: 'https://aave.com' },
  { id: 'compound', name: 'Compound', type: 'DeFi', apy: '6.5%', risk: 96, jurisdiction: 'Global', terms: 'Flexible • Protocol', tvl: '$2.1B', url: 'https://compound.finance' },
  { id: 'nexo', name: 'Nexo', type: 'CeFi', apy: '12.0%', risk: 85, jurisdiction: 'EU', terms: 'Lock 30d • Custodial', tvl: '$500M', url: 'https://nexo.io' },
  { id: 'morpho', name: 'Morpho', type: 'DeFi', apy: '9.1%', risk: 94, jurisdiction: 'Global', terms: 'Optimizer • P2P', tvl: '$1.5B', url: 'https://morpho.org' },
  { id: 'maker', name: 'MakerDAO', type: 'DeFi', apy: '5.0%', risk: 99, jurisdiction: 'US/Global', terms: 'Variable • DSR', tvl: '$5.5B', url: 'https://makerdao.com' },
  { id: 'spark', name: 'Spark', type: 'DeFi', apy: '5.5%', risk: 97, jurisdiction: 'Global', terms: 'Flexible • DAI focus', tvl: '$2.8B', url: 'https://spark.fi' },
  { id: 'fluid', name: 'Fluid', type: 'DeFi', apy: '7.8%', risk: 92, jurisdiction: 'Global', terms: 'New • Optimized', tvl: '$150M', url: 'https://fluid.instadapp.io' },
  { id: 'curve', name: 'Curve Lend', type: 'DeFi', apy: '10.5%', risk: 88, jurisdiction: 'Global', terms: 'CRV Incentivized', tvl: '$1.2B', url: 'https://curve.fi' },
  { id: 'yearn', name: 'Yearn', type: 'DeFi', apy: '7.2%', risk: 91, jurisdiction: 'Global', terms: 'Vaults • Auto-Compound', tvl: '$350M', url: 'https://yearn.fi' },
  { id: 'radiant', name: 'Radiant', type: 'DeFi', apy: '11.2%', risk: 89, jurisdiction: 'Global', terms: 'Omnichain • Loop', tvl: '$420M', url: 'https://radiant.capital' },
  { id: 'benqi', name: 'Benqi', type: 'DeFi', apy: '6.8%', risk: 90, jurisdiction: 'Global', terms: 'Avalanche Liquidity', tvl: '$280M', url: 'https://benqi.fi' },
  { id: 'venus', name: 'Venus', type: 'DeFi', apy: '9.5%', risk: 84, jurisdiction: 'Global', terms: 'BSC Dominant', tvl: '$1.8B', url: 'https://venus.io' },
  { id: 'kamino', name: 'Kamino', type: 'DeFi', apy: '8.8%', risk: 93, jurisdiction: 'Global', terms: 'Solana Auto-Vaults', tvl: '$900M', url: 'https://kamino.finance' },
  { id: 'marginfi', name: 'MarginFi', type: 'DeFi', apy: '7.9%', risk: 92, jurisdiction: 'Global', terms: 'Loyalty Points', tvl: '$600M', url: 'https://marginfi.com' },
  { id: 'liquity', name: 'Liquity', type: 'DeFi', apy: '4.5%', risk: 97, jurisdiction: 'Global', terms: 'Interest Free Borrow', tvl: '$700M', url: 'https://liquity.org' },
  { id: 'fraxlend', name: 'Frax Lend', type: 'DeFi', apy: '6.2%', risk: 95, jurisdiction: 'Global', terms: 'AMO Integration', tvl: '$400M', url: 'https://frax.finance' },
  { id: 'euler', name: 'Euler', type: 'DeFi', apy: '8.5%', risk: 89, jurisdiction: 'Global', terms: 'Modular Lending', tvl: '$120M', url: 'https://euler.finance' },
  { id: 'silo', name: 'Silo', type: 'DeFi', apy: '10.1%', risk: 91, jurisdiction: 'Global', terms: 'Isolated Markets', tvl: '$180M', url: 'https://silo.finance' },
];

const LendBorrowSetupScreen: React.FC<LendBorrowSetupScreenProps> = ({ onBack }) => {
  const [mode, setMode] = useState<'lend' | 'borrow'>('lend');
  const [amount, setAmount] = useState<number>(1000);
  const [strategy, setStrategy] = useState<'safe' | 'balanced' | 'aggressive'>('balanced');
  const [selectedAsset, setSelectedAsset] = useState(ASSETS[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Platform Selection State
  const [showLendSheet, setShowLendSheet] = useState(false);
  const [manualPlatform, setManualPlatform] = useState<typeof LENDING_PLATFORMS[0] | null>(null);
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'apy' | 'risk'>('apy');

  // Simulate AI recalculation when inputs change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [mode, strategy, selectedAsset, amount, manualPlatform]);

  const handleLendClick = () => {
    setMode('lend');
    setShowLendSheet(true);
  };

  const handlePlatformSelect = (platform: typeof LENDING_PLATFORMS[0] | null) => {
    setManualPlatform(platform);
    setShowLendSheet(false);
    if (platform) setStrategy('balanced'); // Reset strategy visual if manual override
  };

  const getAIPreview = () => {
    if (mode === 'lend') {
      if (manualPlatform) {
        return {
          platform: manualPlatform.name,
          rateLabel: 'Est. APR',
          rate: manualPlatform.apy,
          secondaryMetricLabel: 'Lock Duration',
          secondaryMetric: manualPlatform.terms.includes('Lock') ? '30 Days' : 'No Lock',
          risk: manualPlatform.risk > 95 ? 'Low' : manualPlatform.risk > 90 ? 'Medium' : 'High',
          riskScore: manualPlatform.risk,
          tvl: manualPlatform.tvl,
          terms: manualPlatform.terms,
          protocolType: manualPlatform.type,
          isManual: true
        };
      }
      return {
        platform: strategy === 'aggressive' ? 'DeFi Aggregator v3' : strategy === 'safe' ? 'Aave V3' : 'Composite Yield',
        rateLabel: 'Est. APR',
        rate: strategy === 'aggressive' ? '12.4%' : strategy === 'safe' ? '4.2%' : '8.2%',
        secondaryMetricLabel: 'Lock Duration',
        secondaryMetric: strategy === 'aggressive' ? '14 Days' : 'No Lock',
        risk: strategy === 'aggressive' ? 'High' : strategy === 'safe' ? 'Low' : 'Medium',
        riskScore: strategy === 'aggressive' ? 88 : strategy === 'safe' ? 98 : 94,
        tvl: '$14.2B',
        terms: 'Smart Contract • Auto',
        protocolType: 'Aggregator',
        isManual: false
      };
    } else {
      return {
        platform: 'Liquidity Protocol',
        rateLabel: 'Est. Interest',
        rate: strategy === 'aggressive' ? '2.1%' : strategy === 'safe' ? '5.5%' : '3.8%',
        secondaryMetricLabel: 'Max LTV',
        secondaryMetric: strategy === 'aggressive' ? '85%' : strategy === 'safe' ? '50%' : '75%',
        risk: strategy === 'aggressive' ? 'High' : strategy === 'safe' ? 'Low' : 'Medium',
        riskScore: strategy === 'aggressive' ? 85 : strategy === 'safe' ? 98 : 92,
        tvl: '$5.5B',
        terms: 'Flexible Repayment',
        protocolType: 'Protocol',
        isManual: false
      };
    }
  };

  const preview = getAIPreview();
  const sortedPlatforms = [...LENDING_PLATFORMS].sort((a, b) => {
    if (sortOrder === 'apy') return parseFloat(b.apy) - parseFloat(a.apy);
    return b.risk - a.risk;
  });

  return (
    <div className="flex flex-col h-screen bg-[#0B1120] text-white p-5 pb-40 overflow-y-auto no-scrollbar animate-in slide-in-from-right duration-500">
      
      {/* 1. Header Section */}
      <header className="flex items-center gap-4 mb-8 pt-2 relative shrink-0">
         {/* Subtle AI Glow Accent */}
        <div className="absolute top-0 left-10 w-32 h-32 bg-[#bef264]/10 blur-[60px] rounded-full pointer-events-none"></div>

        <button 
          onClick={onBack}
          className="p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all active:scale-95 z-10"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="z-10">
          <h1 className="text-xl font-black tracking-tight leading-none uppercase">Lend or Borrow</h1>
          <div className="flex items-center gap-1.5 mt-1.5">
            <Zap size={10} className="text-[#bef264] fill-[#bef264]" />
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">AI-assisted lending & borrowing</span>
          </div>
        </div>
      </header>

      {/* 2. Primary Mode Selector */}
      <section className="flex gap-4 mb-8 shrink-0">
        <button 
          onClick={handleLendClick}
          className={`flex-1 relative p-5 rounded-[24px] border transition-all duration-300 group overflow-hidden ${
            mode === 'lend' 
              ? 'bg-[#1a2335] border-[#bef264] shadow-[0_0_20px_rgba(190,242,100,0.15)]' 
              : 'bg-[#151c2c] border-white/5 opacity-60 hover:opacity-100'
          }`}
        >
          <div className="absolute top-3 right-3 bg-[#bef264]/20 px-2 py-0.5 rounded-full border border-[#bef264]/30">
            <span className="text-[7px] font-black text-[#bef264] uppercase tracking-widest">Tap to Setup</span>
          </div>
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
            mode === 'lend' ? 'bg-[#bef264] text-black' : 'bg-white/5 text-gray-400'
          }`}>
            <TrendingUp size={20} strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <h3 className={`text-sm font-black uppercase tracking-tight mb-1.5 ${mode === 'lend' ? 'text-white' : 'text-gray-400'}`}>Lend — Earn Yield</h3>
            <p className="text-[9px] font-bold text-gray-500 leading-tight">Put idle savings to work</p>
          </div>
        </button>

        <button 
          onClick={() => setMode('borrow')}
          className={`flex-1 relative p-5 rounded-[24px] border transition-all duration-300 group overflow-hidden ${
            mode === 'borrow' 
              ? 'bg-[#1a2335] border-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.15)]' 
              : 'bg-[#151c2c] border-white/5 opacity-60 hover:opacity-100'
          }`}
        >
          <div className="absolute top-3 right-3 bg-blue-500/20 px-2 py-0.5 rounded-full border border-blue-500/30">
            <span className="text-[7px] font-black text-blue-400 uppercase tracking-widest">AI Assisted</span>
          </div>
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
            mode === 'borrow' ? 'bg-blue-400 text-black' : 'bg-white/5 text-gray-400'
          }`}>
            <Wallet size={20} strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <h3 className={`text-sm font-black uppercase tracking-tight mb-1.5 ${mode === 'borrow' ? 'text-white' : 'text-gray-400'}`}>Borrow — Liquidity</h3>
            <p className="text-[9px] font-bold text-gray-500 leading-tight">Get funds without selling assets</p>
          </div>
        </button>
      </section>

      {/* 3. Asset & Amount Input Module */}
      <section className="bg-[#151c2c] border border-white/5 rounded-[32px] p-6 mb-6 relative overflow-hidden shrink-0">
        <div className="flex justify-between items-center mb-6">
           <div className="flex flex-col">
             <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Select Asset</label>
             <button className="flex items-center gap-2 text-xl font-black text-white hover:text-[#bef264] transition-colors group">
               <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] border border-white/10">{selectedAsset.name[0]}</div>
               {selectedAsset.name} 
               <ChevronDown size={16} className="text-gray-500 group-hover:text-[#bef264]" />
             </button>
           </div>
           <div className="text-right">
             <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Available</label>
             <p className="text-sm font-bold text-white">{selectedAsset.balance} {selectedAsset.id}</p>
           </div>
        </div>

        <div className="mb-6">
           <div className="flex items-baseline gap-1 mb-4 justify-center">
             <span className="text-2xl font-black text-gray-600">$</span>
             <input 
               type="number" 
               value={amount}
               onChange={(e) => setAmount(Number(e.target.value))}
               className="bg-transparent text-5xl font-black text-white text-center w-full focus:outline-none placeholder-gray-700"
               placeholder="0"
             />
           </div>
           <input 
             type="range" 
             min="0" 
             max="5000" 
             value={amount} 
             onChange={(e) => setAmount(Number(e.target.value))}
             className={`w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer ${mode === 'lend' ? 'accent-[#bef264]' : 'accent-blue-400'}`} 
           />
           <div className="flex justify-between mt-2 px-1">
             <span className="text-[9px] font-black text-gray-600 uppercase">Min $100</span>
             <span className="text-[9px] font-black text-gray-600 uppercase">Max $50k</span>
           </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 bg-white/5 py-2.5 rounded-xl border border-white/5">
           <Zap size={10} className="text-[#bef264]" />
           <p className="text-[10px] font-bold text-gray-400">Suggested based on your risk profile</p>
        </div>
      </section>

      {/* 4. AI Optimization Preview Card */}
      <section className="mb-8 shrink-0">
        <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 overflow-hidden transition-all duration-500 ${isAnimating ? 'opacity-80 scale-[0.99]' : 'opacity-100 scale-100'}`}>
           {/* Animated Gradient Background */}
           <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-emerald-500/10 opacity-50 blur-2xl transition-opacity duration-700 ${isAnimating ? 'opacity-20' : 'opacity-50'}`}></div>
           
           <div className="relative z-10">
             <div className="flex justify-between items-start mb-6">
                <div>
                   <span className="text-[9px] font-black text-[#bef264] uppercase tracking-[0.2em] mb-1 block">
                     {preview.isManual ? 'Manual Selection' : 'AI Optimal Path'}
                   </span>
                   <div className="flex items-center gap-2">
                     <h3 className="text-xl font-black text-white tracking-tight">{preview.platform}</h3>
                     {preview.isManual && (
                       <span className="bg-white/10 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase text-gray-400 border border-white/5">
                         {preview.protocolType}
                       </span>
                     )}
                   </div>
                </div>
                <div className={`px-3 py-1.5 rounded-full border flex items-center gap-1.5 ${
                  preview.risk === 'Low' || preview.risk === 'Conservative' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                  preview.risk === 'Medium' || preview.risk === 'Optimized' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                  'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                  <ShieldCheck size={10} />
                  <span className="text-[9px] font-black uppercase tracking-widest">{preview.risk} Risk</span>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-3">
                {/* Metric 1: Rate */}
                <div className="bg-[#0B1120]/40 rounded-2xl p-4 border border-white/5 flex flex-col justify-between min-h-[90px]">
                   <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                     <Activity size={10} /> {preview.rateLabel}
                   </p>
                   <div className="flex items-center gap-2">
                     <span className={`text-2xl font-black ${mode === 'lend' ? 'text-emerald-400' : 'text-blue-400'}`}>
                       {isAnimating ? '...' : preview.rate}
                     </span>
                     {mode === 'lend' && <TrendingUp size={14} className="text-emerald-400" />}
                   </div>
                </div>

                {/* Metric 2: Safety Score */}
                <div className="bg-[#0B1120]/40 rounded-2xl p-4 border border-white/5 flex flex-col justify-between min-h-[90px]">
                   <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                     <ShieldCheck size={10} /> Safety Score
                   </p>
                   <div className="flex items-end gap-1.5">
                     <span className={`text-xl font-black ${preview.riskScore >= 90 ? 'text-emerald-400' : preview.riskScore >= 80 ? 'text-amber-400' : 'text-red-400'}`}>
                       {isAnimating ? '...' : preview.riskScore}
                     </span>
                     <span className="text-[10px] font-bold text-gray-600 mb-1">/100</span>
                   </div>
                </div>

                {/* Metric 3: TVL */}
                <div className="bg-[#0B1120]/40 rounded-2xl p-4 border border-white/5 flex flex-col justify-between min-h-[90px]">
                   <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                     <BarChart3 size={10} /> Total Liquidity
                   </p>
                   <span className="text-lg font-black text-white">
                     {isAnimating ? '...' : preview.tvl}
                   </span>
                </div>

                {/* Metric 4: Terms */}
                <div className="bg-[#0B1120]/40 rounded-2xl p-4 border border-white/5 flex flex-col justify-between min-h-[90px]">
                   <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                     <FileText size={10} /> Terms
                   </p>
                   <span className="text-xs font-bold text-white leading-snug">
                     {isAnimating ? '...' : preview.terms}
                   </span>
                </div>
             </div>
             
             <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                  {preview.isManual ? 'Selected via FinoAi Connect' : 'Optimized across platforms and chains in real time'}
                </p>
                <div className="flex gap-0.5">
                   <div className="w-1 h-1 bg-[#bef264] rounded-full animate-pulse"></div>
                   <div className="w-1 h-1 bg-[#bef264] rounded-full animate-pulse delay-75"></div>
                   <div className="w-1 h-1 bg-[#bef264] rounded-full animate-pulse delay-150"></div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Strategy Selector (Hidden if Manual) */}
      {!manualPlatform && (
        <section className="mb-8 shrink-0">
          <div className="bg-[#151c2c] border border-white/5 rounded-[24px] p-2 flex relative">
             <div 
               className="absolute top-2 bottom-2 bg-white/10 rounded-xl transition-all duration-300 ease-out"
               style={{
                 left: strategy === 'safe' ? '0.5rem' : strategy === 'balanced' ? '33.33%' : '66.66%',
                 width: 'calc(33.33% - 0.66rem)'
               }}
             ></div>
             
             {['safe', 'balanced', 'aggressive'].map((s) => (
               <button
                 key={s}
                 onClick={() => setStrategy(s as any)}
                 className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest z-10 transition-colors ${
                   strategy === s ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                 }`}
               >
                 {s}
               </button>
             ))}
          </div>
        </section>
      )}

      {/* 6. Primary Action Button */}
      <button className={`w-full py-5 rounded-[24px] font-black text-sm uppercase tracking-[0.2em] shadow-xl active:scale-[0.98] transition-all relative overflow-hidden group shrink-0 ${
        mode === 'lend' 
          ? 'bg-gradient-to-r from-[#bef264] to-[#a3e635] text-black shadow-[#bef264]/20' 
          : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-blue-500/20'
      }`}>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-xl"></div>
        <span className="relative z-10">
          {mode === 'lend' ? 'Start Earning' : 'Proceed to Borrow'}
        </span>
      </button>

      {/* 7. Footer */}
      <div className="mt-6 text-center opacity-40 shrink-0">
        <div className="flex items-center justify-center gap-2 mb-1">
           <ShieldCheck size={12} />
           <span className="text-[9px] font-black uppercase tracking-widest">Non-custodial execution</span>
        </div>
        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">You always control your assets</p>
      </div>

      {/* BOTTOM SHEET - Lend Selection */}
      <BottomSheet isOpen={showLendSheet} onClose={() => setShowLendSheet(false)}>
        <div className="h-full flex flex-col px-1 pb-6">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="text-xl font-black uppercase tracking-tight text-white">Select Lending Platform</h2>
            <div className="flex items-center gap-1 bg-[#151c2c] border border-white/10 rounded-lg px-2 py-1">
              <Globe size={12} className="text-gray-400" />
              <span className="text-[9px] font-bold text-gray-400 uppercase">Global</span>
            </div>
          </div>

          {/* AI Auto-Pilot Card */}
          <button 
            onClick={() => handlePlatformSelect(null)}
            className="shrink-0 w-full bg-gradient-to-r from-[#bef264]/20 to-[#bef264]/5 border border-[#bef264]/30 rounded-[24px] p-5 mb-6 text-left relative overflow-hidden group active:scale-[0.98] transition-all"
          >
             <div className="absolute top-0 right-0 p-3 opacity-30">
               <Zap size={24} className="text-[#bef264]" />
             </div>
             <div className="relative z-10">
               <h3 className="text-lg font-black text-[#bef264] uppercase tracking-tight mb-1">FinoAi Auto-Pilot</h3>
               <p className="text-[10px] text-gray-300 font-bold leading-tight max-w-[200px] mb-3">
                 Let AI automatically select the best pool based on real-time risk, APY, and deep due diligence.
               </p>
               <div className="flex items-center gap-2">
                 <div className="bg-[#bef264] text-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                   Auto-Select
                 </div>
                 <span className="text-[9px] font-bold text-[#bef264]/70 uppercase tracking-wider flex items-center gap-1">
                   <ShieldCheck size={10} /> Risk Center Verified
                 </span>
               </div>
             </div>
          </button>

          {/* Filters */}
          <div className="flex items-center justify-between mb-4 px-1 shrink-0">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Available Platforms</span>
            <div className="flex gap-2">
               <button onClick={() => setSortOrder('apy')} className={`text-[9px] font-bold uppercase px-2 py-1 rounded transition-colors ${sortOrder === 'apy' ? 'text-[#bef264] bg-[#bef264]/10' : 'text-gray-500'}`}>APY</button>
               <button onClick={() => setSortOrder('risk')} className={`text-[9px] font-bold uppercase px-2 py-1 rounded transition-colors ${sortOrder === 'risk' ? 'text-blue-400 bg-blue-400/10' : 'text-gray-500'}`}>Safety</button>
            </div>
          </div>

          {/* Platform List */}
          <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar pb-20">
            {sortedPlatforms.map((plat) => (
              <div key={plat.id} className="bg-[#151c2c] border border-white/5 rounded-[24px] overflow-hidden transition-all shrink-0">
                {/* Main Row */}
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer active:bg-white/5"
                  onClick={() => setExpandedPlatform(expandedPlatform === plat.id ? null : plat.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-xs text-gray-400">
                      {plat.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-black text-white uppercase tracking-tight">{plat.name}</h4>
                        <span className="text-[8px] font-bold text-gray-500 bg-white/5 px-1.5 py-0.5 rounded uppercase">{plat.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                         <Globe size={10} className="text-gray-600" />
                         <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{plat.jurisdiction}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-black text-[#bef264]">{plat.apy}</div>
                    <div className="flex items-center justify-end gap-1">
                      <ShieldCheck size={10} className={plat.risk >= 95 ? "text-emerald-500" : "text-amber-500"} />
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${plat.risk >= 95 ? "text-emerald-500" : "text-amber-500"}`}>
                        {plat.risk}/100 Risk
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedPlatform === plat.id && (
                  <div className="px-4 pb-4 pt-0 animate-in slide-in-from-top-2">
                    <div className="bg-[#0B1120] rounded-xl p-3 mb-3 border border-white/5">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Terms</span>
                          <span className="text-[9px] font-bold text-white uppercase tracking-wider">{plat.terms}</span>
                       </div>
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">TVL Liquidity</span>
                          <span className="text-[9px] font-bold text-white uppercase tracking-wider">{plat.tvl}</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">AI Audit</span>
                          <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                            <Check size={10} /> Passed
                          </span>
                       </div>
                    </div>

                    <div className="flex gap-2">
                       <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-gray-300 hover:bg-white/10 flex items-center justify-center gap-1.5">
                         <ExternalLink size={10} /> Visit Site
                       </button>
                       <button 
                         onClick={() => handlePlatformSelect(plat)}
                         className="flex-[2] py-3 bg-[#bef264] text-black rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#bef264]/90 flex items-center justify-center gap-1.5 shadow-lg"
                       >
                         Connect & Select
                       </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </BottomSheet>

    </div>
  );
};

export default LendBorrowSetupScreen;
