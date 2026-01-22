
import React, { useContext } from 'react';
import { FadeIn } from './ui/FadeIn';
import { LetterStagger } from './ui/LetterStagger';
import { ArrowRight } from 'lucide-react';
import { LanguageContext } from '../App';

export const Hero: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4">
      <div className="relative z-10 container mx-auto text-center max-w-5xl">
        <FadeIn delay={50}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-md mb-6 md:mb-8">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
            </span>
            <span className="text-[9px] sm:text-xs font-bold tracking-widest text-purple-100 uppercase">{t('hero.exclusive')}</span>
          </div>
        </FadeIn>

        <div className="mb-8 md:mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] flex flex-col items-center">
            <div className="block text-glow-white text-center w-full">
              <LetterStagger text={t('hero.title1')} delayBase={100} staggerTime={15} align="center" />
            </div>
            <div className="block text-glow-white text-center w-full opacity-80">
              <LetterStagger text={t('hero.title2')} delayBase={250} staggerTime={15} align="center" />
            </div>
            <FadeIn delay={400} className="w-full text-center mt-2">
              <div className="relative inline-block">
                <span className="absolute inset-0 text-shimmer blur-lg opacity-40 select-none" aria-hidden="true">{t('hero.title3')}</span>
                <span className="relative z-10 text-shimmer">{t('hero.title3')}</span>
              </div>
            </FadeIn>
          </h1>
        </div>

        <FadeIn delay={500}>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
            {t('hero.desc')}
          </p>
        </FadeIn>

        <FadeIn delay={600} className="w-full flex justify-center px-4">
          <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-md">
            <a href="https://e08ff1-xx.myshopify.com/products/formacion-1-a-1" target="_blank" rel="noopener noreferrer" className="block relative group w-full">
              <div className="absolute -inset-1 rounded-full blur-xl opacity-30 bg-white animate-pulse"></div>
              <button className="relative z-10 w-full text-base sm:text-lg md:text-2xl px-6 sm:px-12 py-4 sm:py-6 rounded-full font-black text-black uppercase tracking-tighter gold-white-btn flex items-center justify-center gap-2 shadow-2xl overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.btn')}
                  <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />
                </span>
              </button>
            </a>
            <div className="flex items-center gap-2 text-[10px] sm:text-sm text-gray-500 font-medium tracking-wide uppercase">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span>{t('hero.limited')}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
