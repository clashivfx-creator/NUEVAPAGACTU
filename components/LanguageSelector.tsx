
import React, { useState, useEffect } from 'react';

interface LanguageSelectorProps {
  currentLang: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Desaparece después de 100px de scroll
      if (scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[100] p-3 md:p-4 rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="text-[9px] md:text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
        Select your language
      </div>
      <div className="flex gap-2 md:gap-3">
        <button
          onClick={() => onLanguageChange('es')}
          className={`w-12 h-8 md:w-16 md:h-11 rounded-lg md:rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 flex items-center justify-center border-2 ${
            currentLang === 'es' 
              ? 'border-white/60 scale-105 shadow-[0_0_15px_rgba(255,255,255,0.15)]' 
              : 'border-transparent opacity-40 hover:opacity-100'
          }`}
          title="Español"
        >
          <img 
            src="https://flagcdn.com/w160/es.png" 
            alt="España" 
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`w-12 h-8 md:w-16 md:h-11 rounded-lg md:rounded-xl overflow-hidden transition-all duration-500 hover:scale-110 flex items-center justify-center border-2 ${
            currentLang === 'en' 
              ? 'border-white/60 scale-105 shadow-[0_0_15px_rgba(255,255,255,0.15)]' 
              : 'border-transparent opacity-40 hover:opacity-100'
          }`}
          title="English"
        >
          <img 
            src="https://flagcdn.com/w160/us.png" 
            alt="USA" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
};
