
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PIE_DATA = [
  { name: 'CeFi', value: 60, color: '#4ade80' },
  { name: 'DeFi', value: 40, color: '#10b981' }
];

const LendingDetail: React.FC = () => {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Smart Lending</h2>
        <div className="bg-[#2d3139] px-2 py-1 rounded-full text-[10px] font-bold text-gray-400 border border-gray-700">
          AI-Optimized • Low Risk
        </div>
      </div>

      <div className="bg-[#2d3139]/40 border border-gray-800 rounded-2xl p-4 mb-6 grid grid-cols-2 gap-4">
        <div>
            <div className="text-xs text-gray-500 font-bold mb-1">Active Lending:</div>
            <div className="text-2xl font-bold text-[#4ade80]">$210.00</div>
            <div className="text-[10px] text-gray-600 font-mono mt-1">#66FFD9</div>
        </div>
        <div>
            <div className="text-xs text-gray-500 font-bold mb-1">Est. 30d Earnings:</div>
            <div className="text-2xl font-bold text-white">$7.40</div>
            <div className="text-[#4ade80] text-xs font-bold mt-1">↑ 7.40</div>
        </div>
      </div>

      <div className="relative bg-[#2d3139]/20 border border-gray-800 rounded-2xl p-4 mb-6">
        <div className="flex items-center justify-between h-40">
            <div className="flex flex-col justify-around h-full">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-bold">CeFi</span>
                    <span className="text-xl font-bold">60%</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-bold">DeFi</span>
                    <span className="text-xl font-bold">40%</span>
                </div>
            </div>
            
            <div className="w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={PIE_DATA} innerRadius={50} outerRadius={65} paddingAngle={5} dataKey="value" stroke="none">
                            {PIE_DATA.map((entry, index) => (
                                <Cell key={index} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    {/* Placeholder for center of donut */}
                </div>
            </div>

            <div className="flex flex-col justify-end h-full text-right">
                <div className="flex flex-col mb-4">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-xs font-bold">CeFi</span>
                        <div className="w-2 h-2 rounded bg-[#4ade80]"></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-xs font-bold">DeFi</span>
                        <div className="w-2 h-2 rounded bg-[#10b981]"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-800">
            <div>
                <div className="text-xs text-gray-500 font-bold uppercase">Avg APR</div>
                <div className="text-xl font-bold">4.2%</div>
            </div>
            <div>
                <div className="text-xs text-gray-500 font-bold uppercase">Locked</div>
                <div className="text-xl font-bold">14 days</div>
            </div>
        </div>
      </div>

      <div className="text-xs font-bold space-y-1">
        <p className="text-gray-400 font-medium">Your lending mix is balanced.</p>
        <p className="text-white">Rebalance recommended: <span className="text-[#4ade80]">No.</span> Earnings are estimated and updated by AI in real-time.</p>
      </div>
    </div>
  );
};

export default LendingDetail;
