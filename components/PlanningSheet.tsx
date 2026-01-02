
import React, { useState } from 'react';
import { Calendar, Clock, Bell, Lock, ChevronRight, CheckCircle2, Repeat } from 'lucide-react';

interface PlanningSheetProps {
  type: 'transfer' | 'lending';
  onClose: () => void;
}

const PlanningSheet: React.FC<PlanningSheetProps> = ({ type, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [isPremium, setIsPremium] = useState(false); // Simulate Premium Status
  const [reminder, setReminder] = useState(false);

  // Calendar Mock Data
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="text-white h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
            {type === 'transfer' ? 'Plan Routing' : 'Plan Lend/Borrow'}
          </h2>
          <div className="flex items-center gap-1.5 mt-1">
            <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${type === 'transfer' ? 'bg-blue-400' : 'bg-emerald-400'}`}></div>
            <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
              AI Scheduler
            </span>
          </div>
        </div>
        {!isPremium && (
          <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-lg">
            <Lock size={10} className="text-amber-500" />
            <span className="text-[8px] font-black text-amber-500 uppercase tracking-widest">Pro Feature</span>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
        
        {/* Action Toggle */}
        <div className="bg-[#0B1120] p-1 rounded-xl border border-white/5 flex">
          <button className="flex-1 py-2 rounded-lg bg-[#1a2335] text-[10px] font-black uppercase tracking-wider text-white shadow-lg">
            One-Time
          </button>
          <button className="flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-1">
            <Repeat size={10} /> Recurring
          </button>
        </div>

        {/* Integrated Calendar */}
        <div className="relative bg-[#151c2c] border border-white/10 rounded-[24px] p-5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select Date</span>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">October 2024</span>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['S','M','T','W','T','F','S'].map(d => (
              <div key={d} className="text-center text-[9px] font-black text-gray-600 mb-2">{d}</div>
            ))}
            {days.map(day => (
              <button
                key={day}
                onClick={() => isPremium && setSelectedDate(day)}
                disabled={!isPremium}
                className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  selectedDate === day 
                    ? 'bg-[#bef264] text-black shadow-[0_0_10px_#bef264]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Premium Lock Overlay */}
          {!isPremium && (
            <div className="absolute inset-0 bg-[#0B1120]/60 backdrop-blur-[2px] rounded-[24px] flex flex-col items-center justify-center z-10 p-6 text-center">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-3 border border-amber-500/30">
                <Lock size={20} className="text-amber-500" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">Unlock Calendar</h4>
              <p className="text-[10px] text-gray-400 font-medium mb-4 leading-tight">
                Schedule and automate your {type} activities with FinoAi Pro.
              </p>
              <button 
                onClick={() => setIsPremium(true)}
                className="bg-amber-500 text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform"
              >
                Upgrade to Pro
              </button>
            </div>
          )}
        </div>

        {/* Time & Notification */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#151c2c] border border-white/10 rounded-[20px] p-4">
            <div className="flex items-center gap-2 mb-2 text-gray-400">
              <Clock size={14} />
              <span className="text-[9px] font-black uppercase tracking-widest">Time</span>
            </div>
            <div className="text-xl font-black text-white">09:30 AM</div>
          </div>
          
          <button 
            onClick={() => isPremium && setReminder(!reminder)}
            className={`bg-[#151c2c] border border-white/10 rounded-[20px] p-4 flex flex-col justify-between transition-colors ${reminder ? 'border-[#bef264]/50' : ''}`}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Bell size={14} className={reminder ? 'text-[#bef264]' : ''} />
              <span className="text-[9px] font-black uppercase tracking-widest">Remind Me</span>
            </div>
            <div className={`w-8 h-4 rounded-full self-end relative transition-colors ${reminder ? 'bg-[#bef264]' : 'bg-gray-700'}`}>
               <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform ${reminder ? 'left-4.5' : 'left-0.5'}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <button 
          disabled={!isPremium}
          className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
            isPremium 
              ? 'bg-[#bef264] text-black shadow-xl hover:bg-[#bef264]/90' 
              : 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
          }`}
        >
          {isPremium ? 'Schedule Activity' : 'Pro Required to Schedule'}
          {isPremium ? <CheckCircle2 size={16} /> : <Lock size={14} />}
        </button>
      </div>
    </div>
  );
};

export default PlanningSheet;
