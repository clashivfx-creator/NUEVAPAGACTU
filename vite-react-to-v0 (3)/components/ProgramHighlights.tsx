
import React, { useContext } from 'react';
import { Video, Target, UsersRound, Package } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { FadeIn } from './ui/FadeIn';
import { LanguageContext } from '../App';

export const ProgramHighlights: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                {t('highlights.main_title')}
              </h2>
            </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <FadeIn delay={0} className="h-full">
              <GlassCard hoverEffect className="flex flex-col items-center text-center py-8 px-6 h-full group !border-pink-500/20 bg-gradient-to-b from-pink-500/5 to-transparent hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]">
                  <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-pink-500/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                    <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-pink-500/50 transition-all duration-500 ease-out">
                       <Target className="w-7 h-7 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-pink-100">{t('highlights.h1_title')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{t('highlights.h1_desc')}</p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={50} className="h-full">
              <GlassCard hoverEffect className="flex flex-col items-center text-center py-8 px-6 h-full group !border-indigo-500/20 bg-gradient-to-b from-indigo-500/5 to-transparent hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
                  <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-indigo-500/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                    <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-500 ease-out">
                       <Video className="w-7 h-7 text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-indigo-100">{t('highlights.h2_title')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{t('highlights.h2_desc')}</p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={100} className="h-full">
              <GlassCard hoverEffect className="flex flex-col items-center text-center py-8 px-6 h-full group !border-orange-500/20 bg-gradient-to-b from-orange-500/5 to-transparent hover:shadow-[0_0_30px_-5px_rgba(249,115,60,0.3)]">
                  <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                    <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-orange-500/50 transition-all duration-500 ease-out">
                       <UsersRound className="w-7 h-7 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,60,0.5)]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-orange-100">{t('highlights.h3_title')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{t('highlights.h3_desc')}</p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={150} className="h-full">
              <GlassCard hoverEffect className="flex flex-col items-center text-center py-8 px-6 h-full group !border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
                  <div className="mb-6 relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                    <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-500 ease-out">
                       <Package className="w-7 h-7 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-emerald-100">{t('highlights.h4_title')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{t('highlights.h4_desc')}</p>
              </GlassCard>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};
