
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import StatsSection from './components/StatsSection.tsx';
import ChartSection from './components/ChartSection.tsx';
import QuickActions from './components/QuickActions.tsx';
import ActionCenter from './components/ActionCenter.tsx';
import Recommendations from './components/Recommendations.tsx';
import Navbar from './components/Navbar.tsx';
import BottomSheet from './components/BottomSheet.tsx';
import FeesDetail from './components/details/FeesDetail.tsx';
import RiskCenterScreen from './components/RiskCenterScreen.tsx';
import SmartTransferScreen from './components/SmartTransferScreen.tsx';
import ProfileScreen from './components/ProfileScreen.tsx';
import PlanningSheet from './components/PlanningSheet.tsx';
import Onboarding from './components/Onboarding.tsx';
import WelcomeScreen from './components/WelcomeScreen.tsx';
import { NavItem } from './types.ts';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);
  const [activeNav, setActiveNav] = useState<NavItem>(NavItem.Home);
  const [activeDetail, setActiveDetail] = useState<null | 'fees'>(null);
  const [currentView, setCurrentView] = useState<'home' | 'transfer'>('home');
  const [theme, setTheme] = useState('dark');
  
  // New State for Context and Planning
  const [interestContext, setInterestContext] = useState<'transfer' | 'risk'>('transfer');
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
      case NavItem.SmartRouting:
        return <SmartTransferScreen onBack={() => setActiveNav(NavItem.Home)} />;
      case NavItem.Profile:
        return <ProfileScreen theme={theme} onThemeChange={setTheme} />;
      case NavItem.Home:
      default:
        if (currentView === 'transfer') return <SmartTransferScreen onBack={() => setCurrentView('home')} />;

        return (
          <>
            <Header />
            <main className="flex-1 px-4 pt-1 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              <StatsSection onStatClick={(type) => setActiveDetail(type as any)} />
              <ChartSection />
              <QuickActions 
                activeView={currentView === 'home' ? undefined : currentView}
                onTransferClick={() => {
                  setInterestContext('transfer');
                  setCurrentView('transfer');
                }}
                onRiskClick={() => setActiveNav(NavItem.RiskCenter)}
              />

              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <h2 className="text-sm font-black tracking-widest uppercase text-gray-500">Optimizations</h2>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse"></div>
                </div>
                <ActionCenter onAction={(id) => {
                  if (id === 'fees') setActiveDetail('fees');
                  if (id === 'transfer') {
                    setInterestContext('transfer');
                    setCurrentView('transfer');
                  }
                  if (id === 'risk') setActiveNav(NavItem.RiskCenter);
                  if (id === 'planning') setShowPlanningSheet(true);
                }} />
              </div>

              <div className="space-y-3 pb-2">
                 <div className="flex justify-between items-center px-1">
                  <h2 className="text-sm font-black tracking-widest uppercase text-gray-500">AI Feed</h2>
                  <span className="text-[10px] font-black text-[#bef264] uppercase tracking-widest">Live</span>
                </div>
                <Recommendations 
                  context={interestContext}
                  onAction={(id) => {
                    if (id === 'smart-routing') {
                      setInterestContext('transfer');
                      setCurrentView('transfer');
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
        {activeDetail === 'fees' && <FeesDetail />}
      </BottomSheet>

      {/* New Planning Sheet */}
      <BottomSheet isOpen={showPlanningSheet} onClose={() => setShowPlanningSheet(false)}>
        <PlanningSheet type={interestContext} onClose={() => setShowPlanningSheet(false)} />
      </BottomSheet>
    </div>
  );
};

export default App;
