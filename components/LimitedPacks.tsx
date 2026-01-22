
import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { GlassCard } from './ui/GlassCard';
import { Sparkles, ShoppingCart, Clock } from 'lucide-react';

export const LimitedPacks: React.FC = () => {
  return (
    <section id="packs" className="py-32 px-4 relative overflow-hidden bg-[#050505] border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 animate-pulse">
              <Clock className="w-3.5 h-3.5" />
              Oferta Temporal
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
              PACKS <span className="text-shimmer">AVANZADOS</span><br />
              <span className="text-white/60">POR TIEMPO LIMITADO</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Eleva tus producciones al siguiente nivel con nuestras herramientas exclusivas. 
              Efectos que antes tomaban horas, ahora en un clic.
            </p>
          </FadeIn>
        </div>

        <div className="flex justify-center">
          <FadeIn delay={200} className="w-full max-w-2xl">
            <div className="relative p-[3px] rounded-3xl group transition-all duration-700">
              {/* BLOOM GLOW LAYER */}
              <div className="absolute -inset-8 rainbow-card-border opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700 pointer-events-none z-0" />
              <div className="absolute -inset-1 rainbow-card-border opacity-30 blur-lg group-hover:opacity-60 transition-all duration-500 pointer-events-none z-0" />
              
              <div className="relative overflow-hidden rounded-[26px] z-10 flex flex-col md:flex-row bg-black">
                <div className="absolute inset-0 rainbow-card-border opacity-100" />
                
                <GlassCard className="!bg-[#070708] !border-none !rounded-[22px] m-[1.5px] p-8 relative z-20 flex flex-col md:flex-row gap-8 w-full">
                  {/* Left side: Video Preview */}
                  <div className="flex-1">
                    <div className="relative aspect-square w-full bg-black rounded-xl overflow-hidden border border-white/5 shadow-2xl group-hover:border-white/20 transition-all">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/aZVKFvUX1ns?autoplay=1&mute=1&loop=1&playlist=aZVKFvUX1ns&controls=0&modestbranding=1&rel=0&showinfo=0"
                        title="VFX Pack Preview"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full object-cover pointer-events-none"
                      ></iframe>
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Right side: Info and Purchase */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                        <span className="text-sm font-black tracking-widest text-yellow-400 uppercase">Lo más buscado</span>
                      </div>
                      <h3 className="text-4xl font-black tracking-tight text-white mb-2 leading-none">
                        PACK AVANZADO <span className="text-vfx-gold">VFX</span>
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Más de 5.000+ recursos premium incluyendo Presets, Overlays, SFX y Plugins configurados para máxima eficiencia.
                      </p>
                      
                      <ul className="space-y-2 mb-8 text-sm font-medium text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          Workflows de alta velocidad
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          Plugins Pro incluidos
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          Actualizaciones de por vida
                        </li>
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <a 
                        href="https://e08ff1-xx.myshopify.com/products/pack-de-efectos-esenciales" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <button className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl text-white font-black text-lg uppercase tracking-tighter rainbow-btn shadow-xl group/btn transform hover:scale-[1.02] transition-all">
                          <ShoppingCart className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                          OBTENER ACCESO
                        </button>
                      </a>
                      <p className="text-[10px] text-center text-gray-500 mt-4 font-bold uppercase tracking-[0.2em]">
                        ACCESO INSTANTÁNEO • DESCARGA DIGITAL
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
