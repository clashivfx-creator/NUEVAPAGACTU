
import React, { useRef, useEffect, useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { 
  Sparkles, 
  MousePointer2,
  Zap,
  Palette,
  Layers,
  Workflow,
  Cpu,
  Search
} from 'lucide-react';

const SidebarFeature = ({ 
  icon: Icon,
  title, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  icon: any,
  title: string, 
  onMouseEnter?: () => void,
  onMouseLeave?: () => void
}) => (
  <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative cursor-pointer"
  >
    {/* Subtle Background Glow */}
    <div className="absolute -inset-1 bg-violet-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative flex items-center gap-4 bg-[#0a0a0f]/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all duration-300 group-hover:border-violet-500/40 group-hover:-translate-x-1">
      <div className="shrink-0 relative w-10 h-10 flex items-center justify-center rounded-full bg-violet-600/10 border border-violet-500/20 group-hover:border-violet-400/50 transition-all">
        <Icon className="w-5 h-5 text-violet-400 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-sm font-bold text-white leading-tight transition-colors group-hover:text-violet-100">
        {title}
      </h3>
    </div>
  </div>
);

export const UltraWorkflow: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverVideoRef = useRef<HTMLVideoElement>(null);
  const perfVideoRef = useRef<HTMLVideoElement>(null);
  const optimizeVideoRef = useRef<HTMLVideoElement>(null);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.warn(err));
    }
  }, []);

  useEffect(() => {
    if (activeHover === 'curvas' && hoverVideoRef.current) {
      hoverVideoRef.current.currentTime = 0;
      hoverVideoRef.current.play().catch(err => console.warn(err));
    } else if (activeHover === 'capas' && perfVideoRef.current) {
      perfVideoRef.current.currentTime = 0;
      perfVideoRef.current.play().catch(err => console.warn(err));
    } else if (activeHover === 'optimizar' && optimizeVideoRef.current) {
      optimizeVideoRef.current.currentTime = 0;
      optimizeVideoRef.current.play().catch(err => console.warn(err));
    }
  }, [activeHover]);

  const mainVideoUrl = "https://cdn.discordapp.com/attachments/1393659131549978666/1463331970879848489/video_nashhh.mp4?ex=69717199&is=69702019&hm=95da9ff0264e02f524a914190754cc4c21ca8fb65e0331b4e30773ad04396833&";
  const curvesHoverVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463344913771925504/video_nashhh_5.mp4?ex=69717da7&is=69702c27&hm=67c4f732442025ab9317d22e6eed95c221dd8398e87ab793080dec642ec0870f&";
  const perfHoverVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463347243749740554/perf.mp4?ex=69717fd2&is=69702e52&hm=ebefc3ca148611a2ca34d49c589acd68d6a34237c15f393b0dcd170d099c37e2&";
  const optimizeHoverVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463350670634778666/BOTON_OPTIMIZAR.mp4?ex=69718303&is=69703183&hm=bc01c89f54128d5b34c995022b341ee428ea8debf0d9255aca09c62e3f65351e&";

  return (
    <div className="pt-32 pb-24 relative bg-black min-h-screen overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[100%] h-[50%] bg-violet-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-violet-800/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span className="text-[10px] font-black tracking-[0.2em] text-violet-200 uppercase">La herramienta definitiva para After Effects</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4 uppercase italic text-workflow-shimmer select-none animate-text-glow-pulse">
              ULTRAWORKFLOW
            </h1>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Video Section */}
          <div className="lg:col-span-8">
            <FadeIn delay={200}>
              <div className="relative group p-[1px] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.15)]">
                <div className="relative z-10 bg-[#050508] rounded-[2.45rem] overflow-hidden aspect-[16/10]">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeHover ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <source src={mainVideoUrl} type="video/mp4" />
                  </video>

                  <video ref={hoverVideoRef} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover z-20 transition-all duration-700 ease-in-out ${activeHover === 'curvas' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <source src={curvesHoverVideo} type="video/mp4" />
                  </video>
                  <video ref={perfVideoRef} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover z-20 transition-all duration-700 ease-in-out ${activeHover === 'capas' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <source src={perfHoverVideo} type="video/mp4" />
                  </video>
                  <video ref={optimizeVideoRef} muted loop playsInline className={`absolute inset-0 w-full h-full object-cover z-20 transition-all duration-700 ease-in-out ${activeHover === 'optimizar' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <source src={optimizeHoverVideo} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="relative group px-12 py-5 rounded-full text-white font-black text-xl uppercase tracking-widest bg-violet-600 hover:bg-violet-500 transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_70px_rgba(139,92,246,0.9)] overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-4">
                    INSTALAR EXTENSIÓN
                    <MousePointer2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Features Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <FadeIn delay={300}>
              <SidebarFeature 
                icon={Zap}
                title="Curvas de movimiento"
                onMouseEnter={() => setActiveHover('curvas')}
                onMouseLeave={() => setActiveHover(null)}
              />
            </FadeIn>
            <FadeIn delay={350}>
              <SidebarFeature 
                icon={Palette}
                title="Aplicar efectos en tiempo real con un clic"
              />
            </FadeIn>
            <FadeIn delay={400}>
              <SidebarFeature 
                icon={Layers}
                title="Capas mas pesadas en tiempo real"
                onMouseEnter={() => setActiveHover('capas')}
                onMouseLeave={() => setActiveHover(null)}
              />
            </FadeIn>
            <FadeIn delay={450}>
              <SidebarFeature 
                icon={Workflow}
                title="Añadir y aplicar presets con 1 clic"
              />
            </FadeIn>
            <FadeIn delay={500}>
              <SidebarFeature 
                icon={Cpu}
                title="Optimizar After Effects con un clic"
                onMouseEnter={() => setActiveHover('optimizar')}
                onMouseLeave={() => setActiveHover(null)}
              />
            </FadeIn>
            <FadeIn delay={550}>
              <SidebarFeature 
                icon={Search}
                title="Buscar recursos en distintas plataformas"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
