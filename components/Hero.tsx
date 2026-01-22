
import React, { useRef, useEffect } from 'react';
import { FadeIn } from './ui/FadeIn';
import { LetterStagger } from './ui/LetterStagger';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16">
      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        <FadeIn delay={50}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(168,85,247,0.15)] group hover:border-purple-400/50 transition-all cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-purple-100 uppercase drop-shadow-sm">Formación exclusiva para editores</span>
          </div>
        </FadeIn>

        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.85] flex flex-col items-center">
            <div className="block text-glow-white text-center w-full">
              <LetterStagger text="Conviértete" delayBase={100} staggerTime={15} align="center" />
            </div>
            
            <div className="block mb-2 text-glow-white text-center w-full opacity-80">
              <LetterStagger text="en el" delayBase={250} staggerTime={15} align="center" />
            </div>
            
            <FadeIn delay={400} className="w-full text-center">
              <div className="block transform hover:scale-[1.01] transition-transform duration-500 relative inline-block">
                <span className="absolute inset-0 text-shimmer blur-lg opacity-40 select-none z-0" aria-hidden="true">
                  Top 1% de Editores
                </span>
                <span className="relative z-10 inline-block text-shimmer">
                  Top 1% de Editores
                </span>
              </div>
            </FadeIn>
          </h1>
        </div>

        <FadeIn delay={500}>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            El conocimiento exacto para trabajar con <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">Figuras Top Mundial</span> y posicionarte como un <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">Editor Reconocido</span>.
          </p>
        </FadeIn>

        <FadeIn delay={600} className="w-full flex justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-md">
              <a href="https://e08ff1-xx.myshopify.com/products/formacion-1-a-1" target="_blank" rel="noopener noreferrer" className="block relative group">
                <div className="absolute -inset-1 rounded-full blur-xl opacity-40 bg-white group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
                <button className="relative z-10 w-full text-lg md:text-2xl px-12 py-6 rounded-full font-black text-black uppercase tracking-tighter gold-white-btn flex items-center justify-center gap-3 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    VER FORMACIÓN
                    <ArrowRight className="w-7 h-7 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </button>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-wide opacity-80">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              <span>PLAZAS LIMITADAS DISPONIBLES</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
