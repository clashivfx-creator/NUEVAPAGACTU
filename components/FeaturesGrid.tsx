
import React from 'react';
import { 
  Zap, 
  Users, 
  Palette, 
  Workflow, 
  MessageSquare,
  Crown 
} from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { FadeIn } from './ui/FadeIn';

const features = [
  {
    Icon: Zap,
    title: "Edición Profesional",
    desc: "Crea VFX y ediciones profesionales."
  },
  {
    Icon: Crown,
    title: "Sé un Editor Reconocido",
    desc: "Conviértete en el editor que todos conocen."
  },
  {
    Icon: Users,
    title: "Comunidad Activa",
    desc: "Networking con editores que lideran el mercado."
  },
  {
    Icon: Palette,
    title: "Color Grading",
    desc: "Logra acabados cinematográficos de estándar industrial."
  },
  {
    Icon: Workflow,
    title: "Inteligencia Artificial",
    desc: "Crea videos con IA ultra realistas de calidad cine."
  },
  {
    Icon: MessageSquare,
    title: "Feedback Personalizado",
    desc: "Correcciones directas sobre tus timelines."
  }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 flex flex-col items-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-gradient-yellow inline-block">
                INCLUYE:
              </span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 50}>
              <GlassCard variant="glow-border" className="h-full group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <div className="mb-4 relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-xl bg-white/5 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-pulse" />
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 ease-out shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
                     <feature.Icon 
                       className="w-7 h-7 icon-rainbow-neon" 
                       style={{ animationDelay: `${index * 0.5}s` }} 
                     />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-100 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
