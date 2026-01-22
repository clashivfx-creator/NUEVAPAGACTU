
import React, { useContext } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Sparkles, ShoppingCart, Clock } from 'lucide-react';
import { LanguageContext } from '../App';

export const LimitedPacks: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="packs" className="py-20 sm:py-40 px-4 sm:px-6 relative overflow-hidden bg-[#000000] border-t border-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest mb-6 sm:mb-8">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              {t('packs.temporal')}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 sm:mb-8">
              {t('packs.title')}<span className="text-shimmer">{t('packs.title_shimmer')}</span><br />
              <span className="text-white/40">{t('packs.title_sub')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal px-4">
              {t('packs.desc')}
            </p>
          </FadeIn>
        </div>

        <div className="flex justify-center">
          <FadeIn delay={200} className="w-full max-w-4xl">
            <div className="relative p-[1px] rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-white/20 to-transparent shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.4rem] sm:rounded-[2.45rem] z-10 flex flex-col bg-[#050505]">
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="w-full lg:w-1/2 p-3">
                    <div className="relative aspect-[4/5] w-full bg-black rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/aZVKFvUX1ns?autoplay=1&mute=1&loop=1&playlist=aZVKFvUX1ns&controls=0&modestbranding=1&rel=0&showinfo=0"
                        title="VFX Pack Preview"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full object-cover pointer-events-none scale-110"
                      ></iframe>
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12">
                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500/80" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest text-yellow-500/80 uppercase">{t('packs.most_wanted')}</span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
                        {t('packs.vfx_pack')}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">
                        {t('packs.vfx_desc')}
                      </p>
                      
                      <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-12 text-[13px] sm:text-sm font-medium text-gray-300">
                        {[t('packs.li1'), t('packs.li2'), t('packs.li3')].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <a href="https://e08ff1-xx.myshopify.com/products/pack-de-efectos-esenciales" target="_blank" rel="noopener noreferrer" className="block w-full">
                        <button className="w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-full text-black font-bold text-base sm:text-lg bg-white transition-all shadow-xl">
                          <ShoppingCart className="w-5 sm:w-6 h-5 sm:h-6" />
                          {t('packs.btn')}
                        </button>
                      </a>
                      <p className="text-[8px] sm:text-[10px] text-center text-gray-500 mt-4 sm:mt-6 font-bold uppercase tracking-widest">
                        {t('packs.instant')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
