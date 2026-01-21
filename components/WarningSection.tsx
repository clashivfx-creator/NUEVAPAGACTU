
import React from 'react';
import { TriangleAlert } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { FadeIn } from './ui/FadeIn';

export const WarningSection: React.FC = () => {
  return (
    <section className="pt-4 pb-12 px-4 relative flex justify-center">
      <div className="container max-w-3xl">
        <FadeIn>
          <GlassCard className="!bg-black/40 !backdrop-blur-3xl animate-alert-breathe">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                   <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-ping"></div>
                   <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-orange-500/20 to-transparent flex items-center justify-center border border-orange-500/40">
                      <TriangleAlert className="w-8 h-8 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
                   </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-orange-100 mb-1 tracking-tight drop-shadow-md">Esta formación NO es para principiantes</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-base">
                    Este programa requiere minimos conocimientos previos de <span className="text-gray-200 font-medium border-b border-orange-500/30">After Effects & Premiere</span>. 
                    Si buscas aprender desde cero, este no es el lugar.
                  </p>
                </div>
              </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
};
