
import React, { useState, useEffect, useContext } from 'react';
import { Zap, Package, Flame } from 'lucide-react';
import { LanguageContext } from '../App';

interface FloatingCTABlocksProps {
  onWorkflowClick: () => void;
}

export const FloatingCTABlocks: React.FC<FloatingCTABlocksProps> = ({ onWorkflowClick }) => {
  const { t } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPacks = () => {
    const element = document.getElementById('packs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed left-2 sm:left-4 md:left-10 top-20 sm:top-24 z-[80] flex flex-row sm:flex-col gap-2 sm:gap-6 transition-all duration-700 pointer-events-none ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      {/* Block 1: ULTRAWORKFLOW */}
      <button 
        onClick={onWorkflowClick}
        className="pointer-events-auto group flex flex-col items-start p-2 sm:p-6 rounded-xl sm:rounded-[2rem] bg-violet-600/20 backdrop-blur-2xl border border-violet-500/40 shadow-xl hover:bg-violet-600/30 transition-all text-left w-36 sm:w-64 md:w-80 animate-warning-blink"
      >
        <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-3">
          <span className="text-[5px] sm:text-[10px] font-black tracking-widest text-red-500 uppercase bg-red-500/15 px-1.5 py-0.5 rounded-full border border-red-500/30 whitespace-nowrap">
            NUEVO
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[9px] sm:text-2xl md:text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap">
            ULTRAWORKFLOW
          </span>
          <Zap className="w-2.5 h-2.5 sm:w-8 sm:h-8 text-violet-400 shrink-0 ml-1" />
        </div>
      </button>

      {/* Block 2: PACKS (RED) */}
      <button 
        onClick={scrollToPacks}
        className="pointer-events-auto group flex flex-col items-start p-2 sm:p-6 rounded-xl sm:rounded-[2rem] bg-red-600/20 backdrop-blur-2xl border border-red-500/40 shadow-xl hover:bg-red-600/30 transition-all text-left w-36 sm:w-64 md:w-80 animate-warning-blink"
        style={{ animationDelay: '0.75s' }}
      >
        <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-3">
          <span className="text-[5px] sm:text-[10px] font-black tracking-widest text-red-400 uppercase bg-red-400/15 px-1.5 py-0.5 rounded-full border border-red-400/30 flex items-center gap-1 whitespace-nowrap">
            <Flame className="w-2 sm:w-3.5 h-2 sm:h-3.5" /> PACK AVANZADOS DISPONIBLES
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[7px] sm:text-lg font-black text-white leading-tight uppercase tracking-tight whitespace-nowrap">
            OFERTA UNICA <br className="hidden sm:block" /> <span className="text-red-500">IRRESISTIBLE</span>
          </span>
          <Package className="w-2.5 h-2.5 sm:w-8 sm:h-8 text-red-400 shrink-0 ml-1" />
        </div>
      </button>
    </div>
  );
};
