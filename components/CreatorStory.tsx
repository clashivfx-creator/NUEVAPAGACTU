
import React from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export const CreatorStory: React.FC = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-glow-white">
              De editar gratis a trabajar con <span className="text-gradient drop-shadow-md">los mejores</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={50}>
            <div className="glass-panel rounded-2xl p-8 md:p-10 mb-8 max-w-3xl mx-auto shadow-[0_0_50px_-15px_rgba(168,85,247,0.1)]">
              <div className="space-y-6 text-gray-300 text-xl leading-relaxed font-light">
                <p>
                  Antes cobraba <span className="text-red-500 font-bold text-glow-red">$200</span> dólares por mes editando muchos videos que no me pagaban lo suficiente. Ahora, con solo 1 o 2 proyectos al mes, estoy cobrando más de <span className="text-emerald-400 font-bold text-glow-green">$3,000</span>, hasta <span className="text-yellow-400 font-bold text-glow-gold">$5,000</span> si el proyecto lo amerita.
                </p>
                <p>
                  Hoy, he trabajado con <strong className="block mt-4 text-2xl font-bold text-gold-shine leading-snug">Rauw Alejandro, Emilia Mernes, Duki, Khea, Kun Agüero, YSY A, Tiago PZK, Lit Killah, y muchos más.</strong>
                </p>
                <div className="pt-4">
                  <div className="inline-block p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                    <p className="text-purple-200 italic text-lg font-medium">
                      "Trabajando con los mejores de la industria."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
             <div className="flex justify-center pt-2 gap-4 flex-col sm:flex-row">
               <a href="https://youtube.com/playlist?list=PLE3AyUAb-9ISDioqD_EtlENDrS_1es4oU" target="_blank" rel="noopener noreferrer">
                 <Button className="text-lg px-8 py-4 !bg-none !bg-red-600 hover:!bg-red-500 shadow-[0_0_40px_-5px_rgba(220,38,38,0.4)] transform hover:scale-105 transition-all duration-300 border border-white/10">
                   MIRA MIS TRABAJOS
                 </Button>
               </a>
               <a href="https://e08ff1-xx.myshopify.com/" target="_blank" rel="noopener noreferrer">
                 <Button className="text-lg px-8 py-4 !bg-none !bg-green-500 hover:!bg-green-400 !text-white shadow-[0_0_40px_rgba(34,197,94,0.6)] transform hover:scale-105 transition-all duration-300 border border-white/10">
                    TODA LA TIENDA
                 </Button>
               </a>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
