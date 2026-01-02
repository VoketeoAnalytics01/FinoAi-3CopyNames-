
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import StatsSection from './components/StatsSection.tsx';
import ChartSection from './components/ChartSection.tsx';
import QuickActions from './components/QuickActions.tsx';
import ActionCenter from './components/ActionCenter.tsx';
import Recommendations from './components/Recommendations.tsx';
import Navbar from './components/Navbar.tsx';
import BottomSheet from './components/BottomSheet.tsx';
import YieldDetail from './components/details/YieldDetail.tsx';
import FeesDetail from './components/details/FeesDetail.tsx';
import LendingDetail from './components/details/LendingDetail.tsx';
import SmartLendBorrowScreen from './components/SmartLendBorrowScreen.tsx';
import RiskCenterScreen from './components/RiskCenterScreen.tsx';
import SmartTransferScreen from './components/SmartTransferScreen.tsx';
import SmartAssistantScreen from './components/SmartAssistantScreen.tsx';
import SmartToolsScreen from './components/SmartToolsScreen.tsx';
import ProfileScreen from './components/ProfileScreen.tsx';
import PlanningSheet from './components/PlanningSheet.tsx';
import Onboarding from './components/Onboarding.tsx';
import WelcomeScreen from './components/WelcomeScreen.tsx';
import LendBorrowSetupScreen from './components/LendBorrowSetupScreen.tsx';
import { NavItem } from './types.ts';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);
  const [activeNav, setActiveNav] = useState<NavItem>(NavItem.Home);
  const [activeDetail, setActiveDetail] = useState<null | 'yield' | 'lending' | 'fees'>(null);
  const [currentView, setCurrentView] = useState<'home' | 'lend-borrow' | 'transfer' | 'assistant' | 'lend-borrow-setup'>('home');
  const [theme, setTheme] = useState('dark');
  
  // New State for Context and Planning
  const [interestContext, setInterestContext] = useState<'transfer' | 'lending'>('transfer');
  const [showPlanningSheet, setShowPlanningSheet] = useState(false);

  const handleNavChange = (nav: NavItem) => {
    setActiveNav(nav);
    setCurrentView('home');
  };

  const getThemeStyles = () => {
    switch(theme) {
      case 'light': return 'bg-slate-50 text-slate-900';
      case 'midnight': return 'bg-[#020617] text-slate-100';
      case 'forest': return 'bg-[#052e16] text-emerald-50';
      case 'nebula': return 'bg-[#1e1b4b] text-indigo-50';
      case 'dark':
      default: return 'bg-[#0B1120] text-slate-100';
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return <Onboarding onComplete={() => setIsLoggedIn(true)} />;
    }

    if (!hasSeenWelcome) {
      return <WelcomeScreen onComplete={() => setHasSeenWelcome(true)} />;
    }

    switch (activeNav) {
      case NavItem.RiskCenter:
        return <RiskCenterScreen />;
      case NavItem.AIHub:
        return <SmartAssistantScreen onBack={() => setActiveNav(NavItem.Home)} />;
      case NavItem.SmartTools:
        return <SmartToolsScreen />;
      case NavItem.Profile:
        return <ProfileScreen theme={theme} onThemeChange={setTheme} />;
      case NavItem.Home:
      default:
        if (currentView === 'assistant') return <SmartAssistantScreen onBack={() => setCurrentView('home')} />;
        if (currentView === 'lend-borrow') return <SmartLendBorrowScreen onBack={() => setCurrentView('home')} onSetupClick={() => setCurrentView('lend-borrow-setup')} />;
        if (currentView === 'lend-borrow-setup') return <LendBorrowSetupScreen onBack={() => setCurrentView('lend-borrow')} />;
        if (currentView === 'transfer') return <SmartTransferScreen onBack={() => setCurrentView('home')} />;

        return (
          <>
            <Header />
            <main className="flex-1 px-4 pt-2 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
              <StatsSection onStatClick={(type) => setActiveDetail(type as any)} />
              <ChartSection />
              <QuickActions 
                activeView={currentView === 'home' ? undefined : currentView}
                onLendBorrowClick={() => {
                  setInterestContext('lending');
                  setCurrentView('lend-borrow');
                }} 
                onTransferClick={() => {
                  setInterestContext('transfer');
                  setCurrentView('transfer');
                }}
                onAiSmartClick={() => setCurrentView('assistant')}
              />

              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <h2 className="text-xl font-black tracking-tight uppercase">Action Center</h2>
                  <button className="text-[10px] font-black text-[#bef264] uppercase tracking-widest bg-[#bef264]/5 px-2 py-1 rounded-lg border border-[#bef264]/20">Explore</button>
                </div>
                <ActionCenter />
              </div>

              <div className="space-y-4 pb-4">
                 <div className="flex justify-between items-center px-1">
                  <h2 className="text-xl font-black tracking-tight uppercase">AI Recommendations</h2>
                  <button className="text-[10px] font-black text-[#bef264] uppercase tracking-widest bg-[#bef264]/5 px-2 py-1 rounded-lg border border-[#bef264]/20">See More</button>
                </div>
                <Recommendations 
                  context={interestContext}
                  onAction={(id) => {
                    if (id === 'smart-routing') {
                      setInterestContext('transfer');
                      setCurrentView('transfer');
                    }
                    if (id === 'lending') {
                      setInterestContext('lending');
                      setCurrentView('lend-borrow');
                    }
                    if (id === 'risk') setActiveNav(NavItem.RiskCenter);
                    if (id === 'planning') setShowPlanningSheet(true);
                  }} 
                />
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className={`flex flex-col min-h-screen max-w-[450px] mx-auto shadow-2xl relative overflow-x-hidden transition-colors duration-500 ${getThemeStyles()}`}>
      {renderContent()}
      {isLoggedIn && hasSeenWelcome && <Navbar activeNav={activeNav} onNavChange={handleNavChange} />}
      
      {/* Existing Detail Sheets */}
      <BottomSheet isOpen={activeDetail !== null} onClose={() => setActiveDetail(null)}>
        {activeDetail === 'yield' && <YieldDetail />}
        {activeDetail === 'fees' && <FeesDetail />}
        {activeDetail === 'lending' && <LendingDetail />}
      </BottomSheet>

      {/* New Planning Sheet */}
      <BottomSheet isOpen={showPlanningSheet} onClose={() => setShowPlanningSheet(false)}>
        <PlanningSheet type={interestContext} onClose={() => setShowPlanningSheet(false)} />
      </BottomSheet>
    </div>
  );
};

export default App;
