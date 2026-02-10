
import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div 
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/10 shadow-2xl cursor-col-resize select-none group"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* AFTER IMAGE (The base) */}
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* BEFORE IMAGE (The overlay with clip) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* SLIDER LINE */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-white/20 shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-black/20 rounded-full" />
              <div className="w-1 h-3 bg-black/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* LABELS */}
        <div className="absolute bottom-4 left-4 z-30 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          SIN COLOR
        </div>
        <div className="absolute bottom-4 right-4 z-30 bg-purple-600/50 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          CON COLOR
        </div>
      </div>
    </div>
  );
};
