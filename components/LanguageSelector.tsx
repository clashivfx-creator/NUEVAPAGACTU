
import React, { useState, useEffect } from 'react';

interface LanguageSelectorProps {
  currentLang: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
  // Updated type to include 'checkout' as it is a valid active tab in the main application
  activeTab: 'products' | 'store' | 'checkout';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange, activeTab }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // En el Pack de Elite (products), al estar abajo, es menos intrusivo, 
      // pero aún así lo ocultamos un poco más tarde para que sea accesible.
      const threshold = activeTab === 'products' ? 300 : 50;
      if (scrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // Posicionamiento dinámico:
  // - Si es 'products' (Elite Pack), lo mandamos abajo a la izquierda (lejos del hero y de los botones sociales).
  // - Si es 'store' o 'checkout', lo dejamos arriba a la derecha donde no tape la grilla de productos inicial.
  const positionClasses = activeTab === 'products' 
    ? 'bottom-6 left-4 sm:left-10' 
    : 'top-24 right-2 sm:right-8';

  return (
    <div 
      className={`fixed ${positionClasses} z-[110] p-1.5 sm:p-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="flex gap-1.5 sm:gap-2">
        <button
          onClick={() => onLanguageChange('es')}
          className={`w-8 h-5 sm:w-11 sm:h-7 rounded-md overflow-hidden transition-all duration-300 hover:scale-110 flex items-center justify-center border ${
            currentLang === 'es' 
              ? 'border-white/80 scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
              : 'border-transparent opacity-40 hover:opacity-100'
          }`}
          title="Español"
        >
          <img 
            src="https://flagcdn.com/w80/es.png" 
            alt="ES" 
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`w-8 h-5 sm:w-11 sm:h-7 rounded-md overflow-hidden transition-all duration-300 hover:scale-110 flex items-center justify-center border ${
            currentLang === 'en' 
              ? 'border-white/80 scale-105 shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
              : 'border-transparent opacity-40 hover:opacity-100'
          }`}
          title="English"
        >
          <img 
            src="https://flagcdn.com/w80/us.png" 
            alt="EN" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
};
