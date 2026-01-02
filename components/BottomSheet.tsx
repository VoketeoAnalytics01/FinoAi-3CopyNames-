
import React, { useEffect, useState } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" 
        onClick={onClose} 
      />
      <div 
        onAnimationEnd={onAnimationEnd}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[450px] bg-[#1a1c25] rounded-t-[32px] transition-transform duration-300 ease-out p-6 shadow-2xl flex flex-col ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '90vh', minHeight: '60vh' }}
      >
        <div className="w-12 h-1.5 bg-gray-700 rounded-full mx-auto mb-6 shrink-0 cursor-pointer" onClick={onClose} />
        <div className="flex-1 overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
