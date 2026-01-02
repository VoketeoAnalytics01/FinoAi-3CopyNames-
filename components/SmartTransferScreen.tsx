
import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  ChevronDown, 
  Cpu, 
  Zap, 
  Shield, 
  ArrowRight, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Sparkles, 
  UserPlus, 
  Search, 
  TrendingDown, 
  TrendingUp, 
  Globe, 
  Banknote, 
  Coins,
  Building2,
  Smartphone,
  LayoutGrid,
  BarChart3,
  X,
  ArrowDown,
  ArrowUp,
  CreditCard,
  Layers,
  ShieldCheck,
  ZapOff,
  AlertCircle
} from 'lucide-react';

interface SmartTransferScreenProps {
  onBack: () => void;
}

const ASSETS = [
  { id: 'USDT', name: 'USDT', color: 'bg-emerald-500', type: 'Crypto' },
  { id: 'SOL', name: 'SOL', color: 'bg-purple-500', type: 'Crypto' },
  { id: 'USD', name: 'USD', color: 'bg-blue-500', type: 'TradFi' },
  { id: 'KES', name: 'KES', color: 'bg-red-500', type: 'TradFi' },
];

const JURISDICTIONS = [
  { id: 'US', name: 'US', flag: '🇺🇸' },
  { id: 'EU', name: 'EU', flag: '🇪🇺' },
  { id: 'UK', name: 'UK', flag: '🇬🇧' },
  { id: 'KE', name: 'KE', flag: '🇰🇪' },
  { id: 'CN', name: 'CN', flag: '🇨🇳' },
  { id: 'JP', name: 'JP', flag: '🇯🇵' },
];

type PlatformType = 'DEX' | 'CEX' | 'Bank' | 'Fintech' | 'MobilePay';

interface Platform {
  id: string;
  name: string;
  type: PlatformType;
  feeChange: 'down' | 'up' | 'stable';
  speed: 'fast' | 'slow';
  reliability: number;
  risk: 'low' | 'high';
  jurisdictions: string[];
  logo: string;
  analysis: string;
}

const AVAILABLE_PLATFORMS: Platform[] = [
  // DEX
  { id: 'jupiter', name: 'Jupiter', type: 'DEX', feeChange: 'down', speed: 'fast', reliability: 99.8, risk: 'low', jurisdictions: ['Global', 'US', 'EU', 'UK', 'KE', 'JP', 'CN'], logo: "https://jup.ag/svg/jupiter-logo.svg", analysis: "AI Optimized liquidity routing." },
  { id: 'uniswap', name: 'Uniswap', type: 'DEX', feeChange: 'up', speed: 'fast', reliability: 99.1, risk: 'low', jurisdictions: ['Global', 'US', 'EU', 'UK', 'JP'], logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png", analysis: "Leading Ethereum DEX aggregator." },
  { id: 'raydium', name: 'Raydium', type: 'DEX', feeChange: 'down', speed: 'fast', reliability: 97.5, risk: 'low', jurisdictions: ['Global'], logo: "https://cryptologos.cc/logos/raydium-ray-logo.png", analysis: "Solana AMM deep liquidity." },
  { id: 'orca', name: 'Orca', type: 'DEX', feeChange: 'down', speed: 'fast', reliability: 98.4, risk: 'low', jurisdictions: ['Global'], logo: "https://v2.orca.so/static/media/orca-logo.7f940b6e.svg", analysis: "Efficient stablecoin DEX." },
  { id: 'curve', name: 'Curve', type: 'DEX', feeChange: 'stable', speed: 'fast', reliability: 99.5, risk: 'low', jurisdictions: ['Global'], logo: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png", analysis: "Stable swap efficiency engine." },
  { id: 'pancakeswap', name: 'PancakeSwap', type: 'DEX', feeChange: 'down', speed: 'fast', reliability: 98.2, risk: 'low', jurisdictions: ['Global', 'EU', 'CN'], logo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.png", analysis: "Multi-chain liquidity rail." },
  { id: 'sushiswap', name: 'SushiSwap', type: 'DEX', feeChange: 'stable', speed: 'fast', reliability: 96.8, risk: 'low', jurisdictions: ['Global'], logo: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png", analysis: "Community driven liquidity." },
  
  // CEX
  { id: 'binance', name: 'Binance', type: 'CEX', feeChange: 'down', speed: 'fast', reliability: 99.2, risk: 'low', jurisdictions: ['EU', 'UK', 'JP', 'KE'], logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", analysis: "Global volume leader." },
  { id: 'coinbase', name: 'Coinbase', type: 'CEX', feeChange: 'up', speed: 'fast', reliability: 99.9, risk: 'low', jurisdictions: ['US', 'EU', 'UK'], logo: "https://logo.clearbit.com/coinbase.com", analysis: "US Regulated primary bridge." },
  { id: 'kraken', name: 'Kraken', type: 'CEX', feeChange: 'stable', speed: 'fast', reliability: 99.7, risk: 'low', jurisdictions: ['US', 'EU', 'UK', 'JP'], logo: "https://logo.clearbit.com/kraken.com", analysis: "Institutional security grade." },
  { id: 'okx', name: 'OKX', type: 'CEX', feeChange: 'down', speed: 'fast', reliability: 98.8, risk: 'low', jurisdictions: ['EU', 'KE', 'JP', 'CN'], logo: "https://logo.clearbit.com/okx.com", analysis: "Advanced crypto trading rails." },
  { id: 'bybit', name: 'Bybit', type: 'CEX', feeChange: 'down', speed: 'fast', reliability: 98.1, risk: 'low', jurisdictions: ['EU', 'JP'], logo: "https://logo.clearbit.com/bybit.com", analysis: "High-speed derivative rails." },
  { id: 'kucoin', name: 'KuCoin', type: 'CEX', feeChange: 'down', speed: 'fast', reliability: 95.4, risk: 'low', jurisdictions: ['Global', 'EU', 'KE'], logo: "https://logo.clearbit.com/kucoin.com", analysis: "Altcoin liquidity specialty." },
  { id: 'crypto-com', name: 'Crypto.com', type: 'CEX', feeChange: 'up', speed: 'fast', reliability: 99.3, risk: 'low', jurisdictions: ['US', 'EU', 'UK'], logo: "https://logo.clearbit.com/crypto.com", analysis: "Consumer-focused card rails." },
  
  // Banks
  { id: 'chase', name: 'Chase Bank', type: 'Bank', feeChange: 'up', speed: 'slow', reliability: 99.9, risk: 'low', jurisdictions: ['US'], logo: "https://logo.clearbit.com/chase.com", analysis: "Major US domestic rail." },
  { id: 'barclays', name: 'Barclays', type: 'Bank', feeChange: 'stable', speed: 'slow', reliability: 99.8, risk: 'low', jurisdictions: ['UK'], logo: "https://logo.clearbit.com/barclays.co.uk", analysis: "UK primary banking rail." },
  { id: 'equity', name: 'Equity Bank', type: 'Bank', feeChange: 'down', speed: 'slow', reliability: 96.5, risk: 'low', jurisdictions: ['KE', 'UK'], logo: "https://logo.clearbit.com/equitygroupholdings.com", analysis: "Kenya mobile-bank bridge." },
  { id: 'kcb', name: 'KCB Bank', type: 'Bank', feeChange: 'stable', speed: 'slow', reliability: 97.2, risk: 'low', jurisdictions: ['KE'], logo: "https://logo.clearbit.com/kcbgroup.com", analysis: "Regional trade finance." },
  { id: 'hsbc', name: 'HSBC', type: 'Bank', feeChange: 'up', speed: 'slow', reliability: 99.9, risk: 'low', jurisdictions: ['UK', 'EU', 'JP', 'CN'], logo: "https://logo.clearbit.com/hsbc.com", analysis: "Global corporate network." },
  { id: 'mizuho', name: 'Mizuho', type: 'Bank', feeChange: 'stable', speed: 'slow', reliability: 99.4, risk: 'low', jurisdictions: ['JP'], logo: "https://logo.clearbit.com/mizuhogroup.com", analysis: "Japan domestic settlement." },
  { id: 'icbc', name: 'ICBC', type: 'Bank', feeChange: 'stable', speed: 'slow', reliability: 99.8, risk: 'low', jurisdictions: ['CN'], logo: "https://logo.clearbit.com/icbc.com.cn", analysis: "China commercial network." },
  { id: 'lloyds', name: 'Lloyds Bank', type: 'Bank', feeChange: 'up', speed: 'slow', reliability: 99.6, risk: 'low', jurisdictions: ['UK'], logo: "https://logo.clearbit.com/lloydsbank.com", analysis: "UK retail banking rail." },
  { id: 'bnp', name: 'BNP Paribas', type: 'Bank', feeChange: 'stable', speed: 'slow', reliability: 99.7, risk: 'low', jurisdictions: ['EU'], logo: "https://logo.clearbit.com/bnpparibas.com", analysis: "EU regional settlement." },
  { id: 'standard-chartered', name: 'Standard Chartered', type: 'Bank', feeChange: 'down', speed: 'slow', reliability: 98.9, risk: 'low', jurisdictions: ['UK', 'KE', 'CN', 'JP'], logo: "https://logo.clearbit.com/sc.com", analysis: "Emerging markets bridge." },
  
  // Fintech
  { id: 'revolut', name: 'Revolut', type: 'Fintech', feeChange: 'down', speed: 'fast', reliability: 98.8, risk: 'low', jurisdictions: ['EU', 'UK', 'US', 'JP'], logo: "https://logo.clearbit.com/revolut.com", analysis: "Digital FX optimization." },
  { id: 'wise', name: 'Wise', type: 'Fintech', feeChange: 'down', speed: 'fast', reliability: 99.1, risk: 'low', jurisdictions: ['Global', 'US', 'EU', 'UK', 'JP'], logo: "https://logo.clearbit.com/wise.com", analysis: "Low cost cross-border." },
  { id: 'paypal', name: 'PayPal', type: 'Fintech', feeChange: 'up', speed: 'fast', reliability: 99.5, risk: 'low', jurisdictions: ['Global', 'US', 'EU', 'UK'], logo: "https://logo.clearbit.com/paypal.com", analysis: "Legacy global P2P bridge." },
  { id: 'payoneer', name: 'Payoneer', type: 'Fintech', feeChange: 'stable', speed: 'fast', reliability: 98.2, risk: 'low', jurisdictions: ['Global', 'US', 'EU', 'KE'], logo: "https://logo.clearbit.com/payoneer.com", analysis: "Freelance rail specialist." },
  { id: 'n26', name: 'N26', type: 'Fintech', feeChange: 'down', speed: 'fast', reliability: 98.5, risk: 'low', jurisdictions: ['EU'], logo: "https://logo.clearbit.com/n26.com", analysis: "Mobile-first EU banking." },
  { id: 'monzo', name: 'Monzo', type: 'Fintech', feeChange: 'stable', speed: 'fast', reliability: 99.0, risk: 'low', jurisdictions: ['UK'], logo: "https://logo.clearbit.com/monzo.com", analysis: "Modern UK retail rail." },
  { id: 'stripe', name: 'Stripe', type: 'Fintech', feeChange: 'down', speed: 'fast', reliability: 99.9, risk: 'low', jurisdictions: ['Global', 'US', 'EU', 'UK', 'JP'], logo: "https://logo.clearbit.com/stripe.com", analysis: "Universal fiat-crypto gate." },

  // Mobile Payments
  { id: 'mpesa', name: 'M-Pesa', type: 'MobilePay', feeChange: 'down', speed: 'fast', reliability: 98.4, risk: 'low', jurisdictions: ['KE'], logo: "https://logo.clearbit.com/safaricom.co.ke", analysis: "Primary African liquidity." },
  { id: 'cashapp', name: 'CashApp', type: 'MobilePay', feeChange: 'down', speed: 'fast', reliability: 98.2, risk: 'low', jurisdictions: ['US', 'UK'], logo: "https://logo.clearbit.com/cash.app", analysis: "US social P2P network." },
  { id: 'venmo', name: 'Venmo', type: 'MobilePay', feeChange: 'down', speed: 'fast', reliability: 98.0, risk: 'low', jurisdictions: ['US'], logo: "https://logo.clearbit.com/venmo.com", analysis: "Major US wallet rail." },
  { id: 'alipay', name: 'Alipay', type: 'MobilePay', feeChange: 'down', speed: 'fast', reliability: 99.8, risk: 'low', jurisdictions: ['CN'], logo: "https://logo.clearbit.com/alipay.com", analysis: "China standard wallet." },
  { id: 'wechat', name: 'WeChat Pay', type: 'MobilePay', feeChange: 'down', speed: 'fast', reliability: 99.7, risk: 'low', jurisdictions: ['CN'], logo: "https://logo.clearbit.com/wechat.com", analysis: "Universal Chinese rail." },
  { id: 'gcash', name: 'GCash', type: 'MobilePay', feeChange: 'stable', speed: 'fast', reliability: 97.4, risk: 'low', jurisdictions: ['Global'], logo: "https://logo.clearbit.com/gcash.com", analysis: "SEA liquidity node." },
];

const SmartTransferScreen: React.FC<SmartTransferScreenProps> = ({ onBack }) => {
  const [jurisdiction, setJurisdiction] = useState('US');
  const [speed, setSpeed] = useState('Auto-AI');
  const [transferMode, setTransferMode] = useState<'send' | 'receive'>('send');
  const [selectedAsset, setSelectedAsset] = useState(ASSETS[0]);
  const [amount, setAmount] = useState('1,250.00');
  const [searchQuery, setSearchQuery] = useState('');
  const [jurisdictionSearch, setJurisdictionSearch] = useState('');
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  const [activeTab, setActiveTab] = useState<PlatformType | 'All'>('All');

  const getDynamicSavings = (plat: Platform) => {
    const baseAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    const isCrypto = selectedAsset.type === 'Crypto';
    let savingsFactor = plat.feeChange === 'down' ? 0.008 : -0.004;
    if (isCrypto && plat.type === 'DEX') savingsFactor += 0.002;
    if (jurisdiction === 'KE' && plat.type === 'MobilePay') savingsFactor += 0.005;
    const estimatedSaved = baseAmount * savingsFactor;
    return estimatedSaved > 0 ? `$${estimatedSaved.toFixed(2)}` : null;
  };

  const filteredPlatforms = useMemo(() => {
    return AVAILABLE_PLATFORMS.filter(p => 
      (p.jurisdictions.includes(jurisdiction) || p.jurisdictions.includes('Global')) && 
      (searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (activeTab === 'All' || p.type === activeTab)
    ).sort((a, b) => b.reliability - a.reliability);
  }, [jurisdiction, searchQuery, activeTab]);

  const displayedJurisdictions = useMemo(() => {
    return JURISDICTIONS.filter(j => j.name.toLowerCase().includes(jurisdictionSearch.toLowerCase()));
  }, [jurisdictionSearch]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white p-4 pb-28 overflow-y-auto no-scrollbar">
      {/* Header Area - Refined for Professional UI */}
      <div className="flex items-start gap-4 mt-6 mb-8 px-1">
        <button 
          onClick={onBack} 
          className="p-2.5 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all shrink-0 active:scale-95"
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex flex-col">
          <h1 className="text-xl font-black tracking-tight uppercase italic leading-none text-white/90">Smart Routing</h1>
          <p className="text-[11px] text-gray-500 font-bold mt-1.5 leading-tight">AI powered Optimal route for your assets</p>
        </div>
      </div>

      {/* Mode Toggle Bar */}
      <div className="flex bg-[#141d2e] p-1 rounded-2xl border border-gray-800 mb-5 max-w-[300px] mx-auto w-full">
        <button 
          onClick={() => setTransferMode('send')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            transferMode === 'send' ? 'bg-[#bef264] text-black shadow-lg shadow-[#bef264]/20' : 'text-gray-500'
          }`}
        >
          <ArrowUpRight size={14} /> Send
        </button>
        <button 
          onClick={() => setTransferMode('receive')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            transferMode === 'receive' ? 'bg-[#bef264] text-black shadow-lg shadow-[#bef264]/20' : 'text-gray-500'
          }`}
        >
          <ArrowDownLeft size={14} /> Receive
        </button>
      </div>

      {/* Asset Input Module */}
      <section className="bg-[#141d2e] border border-gray-800 rounded-[32px] p-5 mb-5 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full"></div>
        
        <div className="flex justify-between items-center mb-6 px-1">
          <h2 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">Asset Input Module</h2>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-[#bef264] rounded-full animate-pulse"></div>
            <span className="text-[8px] font-black text-[#bef264] uppercase tracking-widest">Live Rates</span>
          </div>
        </div>
        
        <div className="space-y-3">
            <div className="flex gap-3">
                <div className="flex-[1.2] bg-[#0B1120] border border-gray-800/50 rounded-2xl p-4 transition-all hover:border-[#bef264]/30">
                    <label className="text-[9px] font-black text-gray-500 block mb-2 uppercase tracking-widest px-1">Select Asset</label>
                    <div className="flex items-center justify-between cursor-pointer group/asset">
                        <div className="flex items-center gap-2.5">
                            <div className="relative">
                                <div className={`w-8 h-8 ${selectedAsset.color} rounded-full border-2 border-[#141d2e] shadow-lg shadow-black/40 flex items-center justify-center`}>
                                    <span className="text-[10px] font-black">{selectedAsset.name[0]}</span>
                                </div>
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue-500 rounded-full border border-[#0B1120] flex items-center justify-center">
                                    <Cpu size={6} className="text-white" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-sm uppercase text-white leading-none">{selectedAsset.name}</span>
                                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter mt-1">{selectedAsset.type}</span>
                            </div>
                        </div>
                        <ChevronDown size={14} className="text-gray-500 group-hover/asset:text-[#bef264] transition-colors" />
                    </div>
                </div>

                <div className="flex-1 bg-[#0B1120] border border-gray-800/50 rounded-2xl p-4 transition-all hover:border-[#bef264]/30 focus-within:border-blue-500/50">
                    <label className="text-[9px] font-black text-gray-500 block mb-2 uppercase tracking-widest px-1">Amount</label>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xs font-black text-gray-600">$</span>
                        <input 
                          type="text" 
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="bg-transparent border-none outline-none text-xl font-black text-white w-full placeholder-gray-800"
                        />
                    </div>
                </div>
            </div>

            <div className={`transition-all duration-500 rounded-2xl p-5 border ${
              transferMode === 'send' 
                ? 'bg-[#0B1120]/60 border-gray-800' 
                : 'bg-[#bef264]/5 border-[#bef264]/20 shadow-inner'
            }`}>
                {transferMode === 'send' ? (
                  <div className="flex justify-between items-center">
                    <div>
                        <label className="text-[9px] font-black text-gray-500 block mb-1 uppercase tracking-widest">You Receive (Approx)</label>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-white">$1,248.90</span>
                            <div className="flex items-center gap-1 bg-[#bef264]/10 px-2 py-0.5 rounded-lg border border-[#bef264]/20">
                                <Sparkles size={10} className="text-[#bef264]" />
                                <span className="text-[9px] font-black text-[#bef264] uppercase">+ $1.10 saved</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                        <ArrowRight size={20} className="text-blue-500" />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center group/request">
                    <div>
                        <label className="text-[9px] font-black text-[#bef264] block mb-1 uppercase tracking-widest">Request Transfer</label>
                        <p className="text-xs font-bold text-white/80 leading-snug max-w-[180px]">
                            AI will optimize the best platform for your contact to fulfill this request.
                        </p>
                    </div>
                    <button className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#bef264] text-black active:scale-95 transition-all shadow-[0_10px_20px_rgba(190,242,100,0.2)]">
                        <UserPlus size={20} strokeWidth={3} />
                        <span className="text-[8px] font-black uppercase tracking-tighter">Invite/Request</span>
                    </button>
                  </div>
                )}
            </div>
        </div>

        {/* Platform Selection Section */}
        <div className="space-y-5 mt-6">
            <div>
                <label className="text-xs font-bold text-gray-400 block mb-2 px-1 uppercase tracking-widest text-[9px]">Select Jurisdiction</label>
                <div className="flex items-center gap-2 bg-[#0B1120] p-1.5 rounded-2xl border border-gray-800">
                    <div className="flex gap-1 overflow-x-auto no-scrollbar flex-1 pr-2 items-center">
                        {displayedJurisdictions.map(jur => (
                            <button 
                                key={jur.id}
                                onClick={() => setJurisdiction(jur.id)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all whitespace-nowrap ${
                                    jurisdiction === jur.id 
                                        ? 'bg-[#1e293b] text-white border border-white/10 shadow-lg' 
                                        : 'text-gray-500 hover:text-gray-400'
                                }`}
                            >
                                <span className="text-xs">{jur.flag}</span>
                                {jur.name}
                            </button>
                        ))}
                        <div className="flex items-center gap-2 bg-[#141d2e] px-2.5 py-1.5 rounded-xl border border-gray-800 focus-within:border-[#bef264]/40 transition-all min-w-[100px]">
                            <Search size={10} className="text-gray-600 shrink-0" />
                            <input 
                                type="text" 
                                placeholder="Find..."
                                value={jurisdictionSearch}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-[8px] font-black text-white w-full placeholder-gray-700 uppercase"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Platform Cards - Preview Only 5 */}
            <div>
                <div className="flex justify-between items-center mb-3 px-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest text-[9px]">Available Platform</label>
                    <button 
                        onClick={() => setShowAllPlatforms(true)}
                        className="text-[9px] font-black text-[#bef264] uppercase tracking-widest flex items-center gap-1 hover:bg-[#bef264]/5 px-2 py-1 rounded-lg transition-colors"
                    >
                        See All <ChevronDown size={10} />
                    </button>
                </div>
                
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1 snap-x snap-mandatory">
                    {filteredPlatforms.length > 0 ? filteredPlatforms.slice(0, 5).map((plat) => {
                        const aiSavings = getDynamicSavings(plat);
                        return (
                            <div key={plat.id} className="min-w-[180px] snap-center bg-[#0B1120] border border-gray-800/50 rounded-[24px] p-4 flex flex-col justify-between group/plat hover:border-[#bef264]/30 transition-all cursor-pointer relative overflow-hidden shadow-lg h-[140px]">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-white/[0.01] rounded-full -mr-8 -mt-8"></div>
                                
                                <div className="flex justify-between items-start mb-3 relative z-10">
                                    <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex items-center justify-center p-1.5 border border-white/10 group-hover/plat:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all">
                                        <img src={plat.logo} alt={plat.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        {plat.feeChange === 'down' ? (
                                            <div className="flex items-center gap-0.5 text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md border border-emerald-500/20">
                                                <ArrowDown size={10} strokeWidth={3} />
                                                <span className="text-[7px] font-black uppercase">Low</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-0.5 text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded-md border border-red-500/20">
                                                <ArrowUp size={10} strokeWidth={3} />
                                                <span className="text-[7px] font-black uppercase">High</span>
                                            </div>
                                        )}
                                        {aiSavings && (
                                            <div className="flex items-center gap-0.5 text-[#bef264] bg-[#bef264]/10 px-1.5 py-0.5 rounded-md border border-[#bef264]/20">
                                                <Sparkles size={8} />
                                                <span className="text-[7px] font-black uppercase">{aiSavings}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h4 className="text-[12px] font-black text-white uppercase tracking-tight truncate mb-0.5">{plat.name}</h4>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{plat.type}</span>
                                        <span className={`text-[9px] font-black ${plat.reliability >= 98 ? 'text-blue-400' : 'text-orange-400'}`}>
                                            {plat.reliability}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    }) : (
                        <div className="w-full py-12 text-center bg-[#0B1120] border border-dashed border-gray-800 rounded-[28px] flex flex-col items-center justify-center">
                            <ZapOff size={32} className="text-gray-800 mb-3 opacity-20" />
                            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic px-4">No specific rails found for {jurisdiction}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Speeds Selection */}
            <div>
                <label className="text-[9px] font-bold text-gray-400 block mb-2 px-1 uppercase tracking-widest">Execution Speeds</label>
                <div className="flex gap-2">
                    {['Cheaply', 'Balanced', 'Auto-AI'].map(s => (
                        <button 
                            key={s}
                            onClick={() => setSpeed(s)}
                            className={`flex-1 py-2.5 rounded-xl text-[10px] font-black transition-all border ${speed === s ? 'bg-white/10 border-white/20 text-white' : 'bg-transparent border-gray-800 text-gray-500 hover:border-gray-700'}`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        <button className="w-full mt-10 bg-[#bef264] hover:bg-[#bef264]/90 text-black py-4.5 rounded-[24px] font-black text-xs shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-[0.1em]">
            Execute Route via FinoAi 
            <div className="w-6 h-6 bg-black/10 rounded-full flex items-center justify-center">
              <ArrowRight size={16} />
            </div>
        </button>
      </section>

      {/* Best Route Summary Card */}
      <section className="bg-[#141d2e] border border-gray-800 rounded-[32px] p-6 relative overflow-hidden shadow-2xl mb-8">
        <div className="absolute top-0 right-0 p-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-[8px] font-black px-3 py-1.5 rounded-full text-white uppercase tracking-tighter flex items-center gap-1.5 shadow-lg shadow-blue-500/20">
                <Sparkles size={10} /> AI Optimal
            </div>
        </div>

        <div className="mb-8">
            <h3 className="text-lg font-black uppercase tracking-tight italic">Routing Analysis</h3>
            <div className="flex items-center gap-1.5 text-[#bef264]/80 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse"></div>
              <p className="text-[9px] font-black uppercase tracking-widest">Non-Custodial • Verified</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-y-6 gap-x-6 mb-8">
            <div>
                <p className="text-[9px] font-black text-gray-600 uppercase mb-1.5 tracking-widest">Platform</p>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <p className="text-sm font-black text-white uppercase tracking-tight">Jupiter Protocol</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-[9px] font-black text-gray-600 uppercase mb-1.5 tracking-widest">Est. Gas</p>
                <div className="flex items-center justify-end gap-1">
                    <ArrowDown size={12} className="text-[#bef264]" />
                    <p className="text-sm font-black text-[#bef264] tracking-tight">$0.12</p>
                </div>
            </div>
            <div>
                <p className="text-[9px] font-black text-gray-600 uppercase mb-1.5 tracking-widest">Settlement</p>
                <div className="flex items-center gap-1.5">
                    <Zap size={10} className="text-blue-400" fill="currentColor" />
                    <p className="text-sm font-black text-white tracking-tight">~ 2.4s</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-[9px] font-black text-gray-600 uppercase mb-1.5 tracking-widest">Reliability</p>
                <p className="text-sm font-black text-blue-400">99.8%</p>
            </div>
        </div>

        <div className="flex gap-3">
            <button className="flex-[2] bg-white text-black py-4 rounded-[18px] font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2">
                Settle Now
                <ArrowRight size={14} strokeWidth={3} />
            </button>
            <button className="flex-1 bg-white/5 border border-white/10 text-white py-4 rounded-[18px] font-black text-[11px] uppercase tracking-widest active:bg-white/10 transition-all">
                Details
            </button>
        </div>
      </section>

      {/* See All Platforms Full View Overlay */}
      {showAllPlatforms && (
        <div className="fixed inset-0 z-[110] flex flex-col bg-[#0B1120] animate-in slide-in-from-bottom-full duration-500">
            <div className="p-6 pb-2">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter">Platform Explorer</h2>
                        <p className="text-[10px] text-[#bef264] font-black uppercase tracking-widest">Intelligence Filter • {jurisdiction}</p>
                    </div>
                    <button 
                        onClick={() => setShowAllPlatforms(false)}
                        className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 active:scale-90 transition-transform"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="bg-[#141d2e] p-3 rounded-2xl border border-gray-800 mb-5 flex items-center gap-3 focus-within:border-[#bef264]/40 transition-all shadow-inner">
                    <Search size={16} className="text-gray-600" />
                    <input 
                        type="text" 
                        placeholder="Search across all global rails..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none text-xs font-black text-white w-full placeholder-gray-700 uppercase"
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3">
                    {['All', 'DEX', 'CEX', 'Bank', 'Fintech', 'MobilePay'].map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                                activeTab === tab 
                                    ? 'bg-[#bef264] text-black border-[#bef264] shadow-md' 
                                    : 'bg-white/5 text-gray-500 border-white/5'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 pt-2">
                {filteredPlatforms.length > 0 ? (
                    <div className="space-y-3">
                        {filteredPlatforms.map((plat, idx) => {
                            const aiSavings = getDynamicSavings(plat);
                            return (
                                <div key={plat.id} className="bg-[#141d2e] border border-gray-800 rounded-[28px] p-4 flex items-center justify-between group active:scale-[0.99] transition-all relative overflow-hidden min-h-[96px]">
                                    {idx < 3 && (
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#bef264]/30"></div>
                                    )}
                                    <div className="flex items-center gap-4 flex-1 min-w-0">
                                        <div className="text-xl font-black text-gray-800 italic pr-3 border-r border-gray-800 w-9 text-center shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div className="w-12 h-12 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-2 border border-white/10 shrink-0">
                                            <img src={plat.logo} alt={plat.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col justify-center min-w-0 pr-1">
                                            <h4 className="text-[13px] font-black text-white uppercase tracking-tight leading-none mb-1.5 truncate">
                                                {plat.name}
                                            </h4>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest px-1.5 py-0.5 bg-white/5 rounded-md whitespace-nowrap">{plat.type}</span>
                                                <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                                                <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest whitespace-nowrap">{plat.reliability}% Reliability</span>
                                            </div>
                                            <p className="text-[8px] text-gray-500 font-bold uppercase tracking-tight line-clamp-1 italic">
                                                {plat.analysis}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-1.5 shrink-0 justify-center ml-2">
                                        <div className="flex flex-col items-end gap-1">
                                            {plat.feeChange === 'down' ? (
                                                <div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-lg flex items-center gap-1 border border-emerald-500/20">
                                                    <ArrowDown size={10} strokeWidth={4} />
                                                    <span className="text-[7px] font-black uppercase">Low</span>
                                                </div>
                                            ) : plat.feeChange === 'up' ? (
                                                <div className="bg-red-500/10 text-red-500 px-2 py-1 rounded-lg flex items-center gap-1 border border-red-500/20">
                                                    <ArrowUp size={10} strokeWidth={4} />
                                                    <span className="text-[7px] font-black uppercase">High</span>
                                                </div>
                                            ) : (
                                                <div className="bg-gray-500/10 text-gray-400 px-2 py-1 rounded-lg flex items-center gap-1 border border-gray-500/20">
                                                    <div className="w-2 h-[2px] bg-gray-400 rounded-full"></div>
                                                    <span className="text-[7px] font-black uppercase">Stable</span>
                                                </div>
                                            )}
                                            {aiSavings && (
                                                <div className="bg-[#bef264]/10 text-[#bef264] px-2 py-1 rounded-lg flex items-center gap-1 border border-[#bef264]/20 animate-pulse">
                                                    <Sparkles size={10} />
                                                    <span className="text-[7px] font-black uppercase">-{aiSavings}</span>
                                                </div>
                                            )}
                                        </div>
                                        <button className="text-[10px] font-black text-[#bef264] uppercase tracking-widest flex items-center gap-0.5 hover:text-white transition-colors">
                                          Select <ArrowRight size={12} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center px-8">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/5">
                            <AlertCircle size={40} className="text-gray-700 opacity-30" />
                        </div>
                        <h3 className="text-lg font-black text-gray-500 uppercase mb-2 tracking-widest italic">No Optimized Routes</h3>
                        <p className="text-[11px] text-gray-600 font-bold max-w-[220px] leading-relaxed uppercase">FinoAi currently has no verified liquidity nodes for {jurisdiction} matching your search.</p>
                    </div>
                )}
            </div>

            {/* Bottom Floating Branding */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#0B1120]/95 border-t border-gray-800 backdrop-blur-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-[#bef264]" />
                    <div>
                        <p className="text-[10px] font-black text-white uppercase tracking-[0.1em]">AI Engine Verified</p>
                        <p className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">{jurisdiction} Scan Active • Non-Custodial</p>
                    </div>
                </div>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center opacity-40">
                    <Zap size={12} className="fill-white text-white" />
                </div>
            </div>
        </div>
      )}

      {/* Footer Branding */}
      <div className="mt-10 flex justify-end opacity-20">
        <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center shadow-xl">
                <Zap size={10} className="fill-white" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] italic">FinoAi</span>
        </div>
      </div>
    </div>
  );
};

export default SmartTransferScreen;
