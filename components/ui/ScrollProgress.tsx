
import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-white/5">
      <div 
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(236,72,153,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};
