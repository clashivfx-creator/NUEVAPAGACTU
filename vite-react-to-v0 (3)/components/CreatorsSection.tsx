
import React, { useContext } from 'react';
import { TrendingUp, Instagram, Clapperboard } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { FadeIn } from './ui/FadeIn';
import { LanguageContext } from '../App';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const CreatorsSection: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              {t('creators.title')}<span className="text-gradient">{t('creators.title_span')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('creators.subtitle')}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          <FadeIn delay={0} className="h-full">
            <GlassCard className="relative overflow-hidden border-purple-500/20 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex flex-col items-center gap-8 relative z-10 flex-1 p-2">
                <div className="shrink-0 w-full flex justify-center">
                  <div className="relative w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/2ZIbooV2QMo"
                      title="Daniz - YouTube Short"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="relative z-10 w-full h-full"
                    ></iframe>
                  </div>
                </div>
                <div className="flex-1 text-center w-full flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-white">Daniz</h3>
                      <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> {t('creators.success')}
                      </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light text-lg mb-6 max-w-md">
                    {t('creators.daniz_desc')}
                  </p>
                  <div className="mt-auto flex items-center justify-center gap-4">
                    <a href="https://www.instagram.com/danizvfx_/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50 transition-all duration-300 transform hover:scale-105">
                      <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#E1306C] transition-colors" />
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Instagram</span>
                    </a>
                    <a href="https://www.tiktok.com/@danizvfx" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#00f2ea]/10 hover:border-[#00f2ea]/50 transition-all duration-300 transform hover:scale-105">
                      <TikTokIcon className="w-5 h-5 text-gray-400 group-hover:text-[#00f2ea] transition-colors" />
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-white">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={100} className="h-full">
            <GlassCard className="relative overflow-hidden border-orange-500/20 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="flex flex-col items-center gap-8 relative z-10 flex-1 p-2">
                <div className="shrink-0 w-full flex justify-center">
                  <div className="relative w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 to-red-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/5HIresHSTZM"
                      title="Maldo - YouTube Short"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="relative z-10 w-full h-full"
                    ></iframe>
                  </div>
                </div>
                <div className="flex-1 text-center w-full flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                      <h3 className="text-3xl font-bold text-white">Maldo</h3>
                      <div className="px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium flex items-center gap-1">
                        <Clapperboard className="w-3 h-3" /> {t('creators.director')}
                      </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-light text-lg mb-6 max-w-md">
                    {t('creators.maldo_desc')}
                  </p>
                  <div className="mt-auto flex items-center justify-center gap-4">
                    <a href="https://www.instagram.com/maldo.av/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50 transition-all duration-300 transform hover:scale-105">
                      <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#E1306C] transition-colors" />
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
