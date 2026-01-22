
import React, { useContext } from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { LanguageContext } from '../App';

export const CreatorStory: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight tracking-tight text-glow-white">
              {t('story.title')}<span className="text-gradient drop-shadow-sm">{t('story.title_span')}</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="glass-panel rounded-[2.5rem] p-10 md:p-14 mb-12 max-w-3xl mx-auto shadow-2xl">
              <div className="space-y-8 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  {t('story.p1')}
                </p>
                <p>
                  <strong className="block mt-6 text-2xl md:text-3xl font-bold text-gold-shine leading-snug">
                    {t('story.p2')}
                  </strong>
                </p>
                <div className="pt-6">
                  <div className="inline-block px-6 py-4 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                    <p className="text-purple-200 italic text-lg font-medium">
                      "{t('story.quote')}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
             <div className="flex justify-center pt-4 gap-6 flex-col sm:flex-row">
               <a href="https://youtube.com/playlist?list=PLE3AyUAb-9ISDioqD_EtlENDrS_1es4oU" target="_blank" rel="noopener noreferrer">
                 <button className="text-lg px-10 py-5 rounded-full font-black bg-[#ff0000] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3">
                   {t('story.btn_work')}
                 </button>
               </a>
               <a href="https://e08ff1-xx.myshopify.com/" target="_blank" rel="noopener noreferrer">
                 <button className="text-lg px-10 py-5 rounded-full font-black bg-[#22c55e] text-white transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3">
                    {t('story.btn_store')}
                 </button>
               </a>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
