
import React from 'react';
import { FadeIn } from './ui/FadeIn';

interface LanguageSplashProps {
  onSelect: (lang: 'es' | 'en') => void;
}

export const LanguageSplash: React.FC<LanguageSplashProps> = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-3xl transition-all duration-700">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-black to-blue-900/10 opacity-60" />
      
      <div className="container max-w-4xl px-4 relative z-10 text-center">
        <FadeIn delay={100}>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
            Select your language
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl font-medium mb-12 uppercase tracking-widest">
            Selecciona tu idioma
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {/* SPAIN */}
          <FadeIn delay={200}>
            <button 
              onClick={() => onSelect('es')}
              className="group relative flex flex-col items-center gap-6 transition-transform hover:scale-105"
            >
              <div className="relative w-40 h-28 sm:w-64 sm:h-44 rounded-2xl sm:rounded-[2rem] overflow-hidden border-4 border-white/5 group-hover:border-white/20 shadow-2xl transition-all duration-500">
                <img 
                  src="https://flagcdn.com/w640/es.png" 
                  alt="Español" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white/60 group-hover:text-white uppercase tracking-tighter transition-colors">
                Español
              </span>
            </button>
          </FadeIn>

          {/* USA */}
          <FadeIn delay={300}>
            <button 
              onClick={() => onSelect('en')}
              className="group relative flex flex-col items-center gap-6 transition-transform hover:scale-105"
            >
              <div className="relative w-40 h-28 sm:w-64 sm:h-44 rounded-2xl sm:rounded-[2rem] overflow-hidden border-4 border-white/5 group-hover:border-white/20 shadow-2xl transition-all duration-500">
                <img 
                  src="https://flagcdn.com/w640/us.png" 
                  alt="English" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white/60 group-hover:text-white uppercase tracking-tighter transition-colors">
                English
              </span>
            </button>
          </FadeIn>
        </div>

        <FadeIn delay={500} className="mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5">
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
              ClashiVFX Premium Education
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
