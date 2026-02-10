
import React, { useContext } from 'react';
import { FadeIn } from './ui/FadeIn';
import { GlassCard } from './ui/GlassCard';
import { Instagram, TrendingUp, Clapperboard, ArrowRight, Youtube, TrendingUp as TrendingUpIcon } from 'lucide-react';
import { LanguageContext } from '../App';
import { CollaboratorsCarousel } from './CollaboratorsCarousel';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0-1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

export const AboutUs: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="bg-black min-h-screen pb-32">
      {/* Header Section */}
      <div className="relative pt-12 sm:pt-20 pb-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <FadeIn>
            <h1 className="text-5xl sm:text-8xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.85]">
              {t('about.title')}
            </h1>
            <p className="text-purple-500 font-black tracking-[0.3em] uppercase text-[10px] sm:text-base mb-12 animate-pulse max-w-4xl mx-auto">
              {t('about.subtitle')}
            </p>
          </FadeIn>

          {/* Main Narrative - Professional Bio */}
          <div className="max-w-5xl mx-auto space-y-8 text-left border-l-2 border-white/5 pl-6 sm:pl-12">
            <FadeIn delay={200}>
              <p className="text-white text-xl sm:text-3xl font-black uppercase tracking-tight leading-[1.15] mb-4">
                {t('about.bio_p1')}
              </p>
              <p className="text-gray-400 text-base sm:text-xl font-light leading-relaxed max-w-4xl italic">
                {t('about.bio_p2')}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-px bg-purple-500/50 mb-4" />
                    <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                      {t('about.bio_p3')}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-px bg-purple-500/50 mb-4" />
                    <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                      {t('about.bio_p4')}
                    </p>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Elite Collaborators Portfolio Section */}
        <div className="mt-12 sm:mt-16 scroll-mt-24" id="artists-section">
          <FadeIn className="text-center mb-6">
            <h2 className="text-2xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-2">
              {t('about.portfolio_title')}
            </h2>
            <div className="flex flex-col items-center gap-3">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-[10px] sm:text-sm font-black tracking-[0.1em] uppercase animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                  <TrendingUpIcon className="w-4 h-4" />
                  {t('about.stats_highlight')}
               </div>
               <div className="w-16 h-1 bg-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)]" />
            </div>
          </FadeIn>
          
          {/* Action Button - MOVED ABOVE PHOTOS AND COMPACTED */}
          <FadeIn delay={100} className="flex flex-col items-center mt-6 mb-4">
             <a 
               href="https://youtube.com/playlist?list=PLE3AyUAb-9ISDioqD_EtlENDrS_1es4oU&si=BpCLKA_SYuaSxdOQ" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative"
             >
               <div className="absolute -inset-1 bg-red-600 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
               <button className="relative px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-base uppercase tracking-tighter shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                 <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                 {t('about.playlist_btn')}
               </button>
             </a>
          </FadeIn>

          <CollaboratorsCarousel />

          <FadeIn className="text-center mt-2">
            <p className="text-white/40 text-[8px] sm:text-xs font-black tracking-[0.3em] uppercase">
              {t('about.portfolio_and_more')}
            </p>
          </FadeIn>
        </div>

        {/* Success Stories Section */}
        <div className="mt-24 border-t border-white/5 pt-24">
           <FadeIn className="text-center mb-16">
              <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                {t('about.creators_title')}
              </h2>
              <p className="text-gray-500 text-xl font-light uppercase tracking-widest">
                {t('about.creators_subtitle')}
              </p>
           </FadeIn>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FadeIn delay={0}>
                <GlassCard className="relative overflow-hidden border-purple-500/20 h-full flex flex-col group">
                  <div className="flex flex-col items-center gap-8 p-4">
                    <div className="shrink-0 w-full flex justify-center">
                      <div className="relative w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
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
                    <div className="text-center flex-1 flex flex-col items-center">
                      <div className="flex items-center justify-center gap-3 mb-3">
                          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Daniz</h3>
                          <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> {t('creators.success')}
                          </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed font-light text-lg mb-8 max-w-md mx-auto">
                        {t('creators.daniz_desc')}
                      </p>
                      <div className="mt-auto flex items-center justify-center gap-4">
                        <a href="https://www.instagram.com/danizvfx_/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50 transition-all">
                          <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#E1306C]" />
                          <span className="text-xs font-black uppercase tracking-widest">Instagram</span>
                        </a>
                        <a href="https://www.tiktok.com/@danizvfx" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all">
                          <TikTokIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                          <span className="text-xs font-black uppercase tracking-widest">TikTok</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={200}>
                <GlassCard className="relative overflow-hidden border-orange-500/20 h-full flex flex-col group">
                  <div className="flex flex-col items-center gap-8 p-4">
                    <div className="shrink-0 w-full flex justify-center">
                      <div className="relative w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
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
                    <div className="text-center flex-1 flex flex-col items-center">
                      <div className="flex items-center justify-center gap-3 mb-3">
                          <h3 className="text-3xl font-black text-white uppercase tracking-tight">Maldo</h3>
                          <div className="px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase flex items-center gap-1">
                            <Clapperboard className="w-3 h-3" /> {t('creators.director')}
                          </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed font-light text-lg mb-8 max-w-md mx-auto">
                        {t('creators.maldo_desc')}
                      </p>
                      <div className="mt-auto flex items-center justify-center gap-4">
                        <a href="https://www.instagram.com/maldo.av/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50 transition-all">
                          <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#E1306C]" />
                          <span className="text-xs font-black uppercase tracking-widest">Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
           </div>
        </div>

        {/* Discord Community Section */}
        <FadeIn delay={400}>
          <div className="mt-32 relative">
            <div className="absolute -inset-20 bg-purple-600/10 blur-[100px] rounded-full opacity-50 pointer-events-none" />
            <div className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 sm:p-20 overflow-hidden text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 text-[#5865F2] text-xs font-black uppercase tracking-widest mb-10 animate-pulse">
                <DiscordIcon className="w-5 h-5" />
                Discord VIP Community
              </div>
              <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9]">
                {t('store.community')}
              </h2>
              <p className="text-gray-400 text-base sm:text-xl font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                {t('store.community_desc')}
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="https://discord.com/invite/zEcFPBqy6s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-[#5865F2] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <button className="relative px-12 py-5 sm:py-6 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-black text-lg sm:text-2xl uppercase tracking-tighter shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4">
                    UNIRSE AHORA <ArrowRight className="w-6 h-6 sm:w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </button>
                </a>
                <div className="flex items-center gap-3 text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-4">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span>Acceso inmediato • Soporte 24/7 • Feedback VIP</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Final Branding Block */}
        <FadeIn className="text-center pt-24 border-t border-white/5 mt-24">
           <p className="text-gray-600 text-[8px] font-black uppercase tracking-[0.4em] mb-4">
             CLASHIVFX SYSTEMS • ESTABLECIDO EN 2019
           </p>
           <h3 className="text-xl sm:text-4xl font-black text-white/5 uppercase tracking-[0.3em]">
             EL ESTÁNDAR ES <span className="text-white/15 italic">LA PERFECCIÓN</span>
           </h3>
        </FadeIn>
      </div>
    </div>
  );
};
