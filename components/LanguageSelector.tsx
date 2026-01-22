
import React from 'react';

interface LanguageSelectorProps {
  currentLang: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 p-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col gap-2">
      <button
        onClick={() => onLanguageChange('es')}
        className={`w-10 h-7 md:w-12 md:h-8 rounded-md overflow-hidden transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 ${currentLang === 'es' ? 'border-white/40 scale-105 shadow-[0_0_10px_rgba(255,255,255,0.2)]' : 'border-transparent opacity-50 hover:opacity-100'}`}
        title="Español"
      >
        <img 
          src="https://flagcdn.com/w80/es.png" 
          alt="España" 
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`w-10 h-7 md:w-12 md:h-8 rounded-md overflow-hidden transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 ${currentLang === 'en' ? 'border-white/40 scale-105 shadow-[0_0_10px_rgba(255,255,255,0.2)]' : 'border-transparent opacity-50 hover:opacity-100'}`}
        title="English"
      >
        <img 
          src="https://flagcdn.com/w80/us.png" 
          alt="USA" 
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};
