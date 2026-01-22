
import React, { useRef, useState, useContext } from 'react';
import { FadeIn } from './ui/FadeIn';
import { 
  Check,
  Star,
  ZapIcon
} from 'lucide-react';
import { LanguageContext } from '../App';

const FeatureList = () => {
  const { t } = useContext(LanguageContext);
  return (
    <ul className="space-y-3 sm:space-y-5 mb-8 sm:mb-12">
      {[
        t('workflow.vfx'),
        t('workflow.oneclick'),
        t('workflow.save_time'),
        t('workflow.optim')
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3 sm:gap-5 text-gray-300 text-sm sm:text-base font-medium tracking-tight text-left">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white" />
          </div>
          {item}
        </li>
      ))}
    </ul>
  );
};

const SectionText = ({ number, title, desc, isHovered, align = 'left' }: { 
  number: string, 
  title: string, 
  desc: string, 
  isHovered: boolean, 
  align?: 'left' | 'right'
}) => {
  const { t } = useContext(LanguageContext);
  return (
    <div className={`flex flex-col justify-center max-w-md transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) relative
      ${isHovered ? (align === 'left' ? 'lg:-translate-x-12 lg:scale-105 z-[70]' : 'lg:translate-x-12 lg:scale-105 z-[70]') : 'translate-x-0 z-10 opacity-100 blur-0'}
    `}>
      <span className="text-purple-500 font-bold text-xs sm:text-sm tracking-widest mb-2 sm:mb-4 opacity-70 uppercase">{number}</span>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 leading-tight text-left">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6 sm:mb-10 text-base sm:text-lg font-light text-left">
        {desc}
      </p>
      <button className="btn-premium-3d w-full sm:w-fit py-4 sm:py-5 px-8 sm:px-12 text-sm">
        {t('workflow.access')}
      </button>
    </div>
  );
};

const VideoContainer = ({ 
  src, 
  isHovered, 
  onHover, 
  onLeave, 
  noZoom = false,
  aspect = "aspect-video",
  className = "",
  side = "right" 
}: { 
  src: string, 
  isHovered: boolean, 
  onHover?: () => void, 
  onLeave?: () => void, 
  noZoom?: boolean, 
  aspect?: string,
  className?: string,
  side?: "left" | "right"
}) => {
  const translation = side === "right" ? "lg:translate-x-12" : "lg:-translate-x-12";
  
  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative group p-[1px] rounded-[1.5rem] sm:rounded-[2.5rem] origin-center transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) 
        ${!noZoom && isHovered ? `lg:scale-[1.25] ${translation} z-[100] shadow-[0_30px_100px_rgba(0,0,0,0.8)]` : 'z-10 scale-100 translate-x-0'}
        ${className}
      `}
    >
      {!noZoom && (
        <div className={`absolute -inset-4 sm:-inset-10 bg-purple-500/20 blur-[40px] sm:blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      )}
      
      <div className={`relative z-10 bg-[#050505] rounded-[1.45rem] sm:rounded-[2.45rem] overflow-hidden ${aspect} border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-purple-500/40`}>
        <video 
          key={src}
          autoPlay 
          muted 
          loop 
          playsInline 
          src={src}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export const UltraWorkflow: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { t } = useContext(LanguageContext);

  const curvesVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463344913771925504/video_nashhh_5.mp4?ex=69722667&is=6970d4e7&hm=057bc4b26f2a179e0357bbf6708d8df641ef026170d2ff23353d035920da99a1&";
  const layersVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463347243749740554/perf.mp4?ex=69722892&is=6970d712&hm=e58d3f1ff39743d951c84b55829e227f04720b915393cce10aaf74b12e9161e8&";
  const optimizeVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463350670634778666/BOTON_OPTIMIZAR.mp4?ex=69722bc3&is=6970da43&hm=13de679231f0c36e51cf0fed7f1004579070f2c7507d907ca6d70d71cfd9db80&";
  const moreFeaturesVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463672404940296246/MAS_FUNCIONES.mp4?ex=6972aea7&is=69715d27&hm=0b6889bb806eb976ccb6f8b1f138a0d2414f01c23e9139e87f47e9ff242ead2d&";
  const searchBarVideo = "https://cdn.discordapp.com/attachments/1393659131549978666/1463680890063556770/BARRA_DE_BUSQUEDA.mp4?ex=6972b68e&is=6971650e&hm=914cbfc57d7d23945034f1e473ffcff48f20a042f4baa9930f83273e5302aacd&";
  const mainVideoUrl = "https://cdn.discordapp.com/attachments/1393659131549978666/1463716675068235931/presetnacion_final_1.mp4?ex=6972d7e1&is=69718661&hm=f146d09bac6290c64e73e1a4e0839ff0deeac542facccc1447666080f7cafe1e&";

  const videoAspect = "aspect-[1366/766]";

  return (
    <div className="relative bg-[#000000] min-h-screen text-white overflow-x-hidden pt-4 sm:pt-10">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[80%] h-[70%] bg-purple-500/5 blur-[100px] sm:blur-[180px] rounded-full animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1600px] pt-4 sm:pt-10 pb-20 sm:pb-40 relative z-[1]">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-stretch mb-20 sm:mb-40 relative z-10">
          <div className="lg:col-span-8 flex flex-col order-1">
             <FadeIn delay={100} className="flex-1 flex items-center justify-center">
                <VideoContainer src={mainVideoUrl} isHovered={false} noZoom={true} className="w-full" aspect={videoAspect} />
             </FadeIn>
          </div>

          <div className="lg:col-span-4 flex flex-col order-2">
            <FadeIn delay={300} className="h-full">
              <div 
                className="h-full bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 lg:p-10 xl:p-12 shadow-2xl flex flex-col overflow-hidden"
                style={{ containerType: 'inline-size' } as React.CSSProperties}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1 text-yellow-500/80">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 sm:w-5 h-3.5 sm:h-5 fill-current" />)}
                  </div>
                  <div className="bg-purple-500/10 text-purple-400 text-[8px] sm:text-xs font-bold px-2 sm:px-4 py-1 rounded-full border border-purple-500/20 uppercase tracking-widest shrink-0 ml-4">Featured</div>
                </div>
                {/* Título ULTRAWORKFLOW: Ajustado para ser gigante pero achicarse si toca los bordes */}
                <h2 className="text-[min(11.8cqw,3rem)] sm:text-[min(11.8cqw,4.5rem)] font-black tracking-tighter mb-6 sm:mb-10 text-left whitespace-nowrap overflow-hidden">
                  ULTRAWORKFLOW
                </h2>
                <div className="flex-1"><FeatureList /></div>
                <div className="pt-6 sm:pt-10 border-t border-white/10 mt-auto text-left">
                  <div className="flex items-baseline gap-2 sm:gap-4 mb-6 sm:mb-10">
                    <span className="text-gray-500 line-through text-lg sm:text-xl font-medium">$90</span>
                    <span className="text-4xl sm:text-6xl font-black text-white tracking-tighter">$49,99</span>
                  </div>
                  <div className="bg-purple-500/10 text-purple-300 text-[10px] sm:text-xs font-bold py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-center uppercase tracking-widest border border-purple-500/20 mb-4 sm:mb-8">
                    {t('workflow.offer')}
                  </div>
                  <button className="btn-premium-3d w-full py-4 sm:py-6 text-sm">
                    {t('workflow.access')} <ZapIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  </button>
                  <p className="text-[8px] sm:text-xs text-center text-gray-500 mt-6 sm:mt-10 font-bold uppercase tracking-widest">{t('workflow.download')}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* FEATURES HEADER */}
        <div className="text-center mb-16 sm:mb-32 mt-16 sm:mt-48">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 sm:mb-8">
              {t('workflow.features_title')}
            </h2>
            <p className="text-gray-500 text-base sm:text-xl font-medium tracking-tight px-4">{t('workflow.features_desc')}</p>
          </FadeIn>
        </div>

        {/* FEATURES LISTING */}
        <div className="space-y-24 sm:space-y-48 mb-20 sm:mb-80">
          {/* Feature 01 */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-24 items-center relative z-10`}>
            <div className="relative flex justify-center lg:justify-end lg:pr-10 order-2 lg:order-1">
              <FadeIn>
                <SectionText number="01" title={t('workflow.f1_title')} desc={t('workflow.f1_desc')} isHovered={hoveredSection === '01'} align="left" />
              </FadeIn>
            </div>
            <div className="relative flex justify-center lg:justify-start order-1 lg:order-2">
              <FadeIn className="w-full max-w-2xl">
                <VideoContainer src={layersVideo} isHovered={hoveredSection === '01'} onHover={() => setHoveredSection('01')} onLeave={() => setHoveredSection(null)} side="right" aspect={videoAspect} />
              </FadeIn>
            </div>
          </div>

          {/* Feature 02 */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-24 items-center relative z-10`}>
            <div className="order-1 lg:order-1 relative flex justify-center lg:justify-end">
              <FadeIn className="w-full max-w-2xl">
                <VideoContainer src={curvesVideo} isHovered={hoveredSection === '02'} onHover={() => setHoveredSection('02')} onLeave={() => setHoveredSection(null)} side="left" aspect={videoAspect} />
              </FadeIn>
            </div>
            <div className="order-2 lg:order-2 relative flex justify-center lg:justify-start lg:pl-10">
              <FadeIn>
                <SectionText number="02" title={t('workflow.f2_title')} desc={t('workflow.f2_desc')} isHovered={hoveredSection === '02'} align="right" />
              </FadeIn>
            </div>
          </div>

          {/* Feature 03 */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-24 items-center relative z-10`}>
            <div className="relative flex justify-center lg:justify-end lg:pr-10 order-2 lg:order-1">
              <FadeIn>
                <SectionText number="03" title={t('workflow.f3_title')} desc={t('workflow.f3_desc')} isHovered={hoveredSection === '03'} align="left" />
              </FadeIn>
            </div>
            <div className="relative flex justify-center lg:justify-start order-1 lg:order-2">
              <FadeIn className="w-full max-w-2xl">
                <VideoContainer src={optimizeVideo} isHovered={hoveredSection === '03'} onHover={() => setHoveredSection('03')} onLeave={() => setHoveredSection(null)} side="right" aspect={videoAspect} />
              </FadeIn>
            </div>
          </div>

          {/* Feature 04 */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-24 items-center relative z-10`}>
            <div className="order-1 lg:order-1 relative flex justify-center lg:justify-end">
              <FadeIn className="w-full max-w-2xl">
                <VideoContainer src={moreFeaturesVideo} isHovered={hoveredSection === '04'} onHover={() => setHoveredSection('04')} onLeave={() => setHoveredSection(null)} side="left" aspect={videoAspect} />
              </FadeIn>
            </div>
            <div className="order-2 lg:order-2 relative flex justify-center lg:justify-start lg:pl-10">
              <FadeIn>
                <SectionText number="04" title={t('workflow.f4_title')} desc={t('workflow.f4_desc')} isHovered={hoveredSection === '04'} align="right" />
              </FadeIn>
            </div>
          </div>

          {/* Feature 05 */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-24 items-center relative z-10`}>
            <div className="relative flex justify-center lg:justify-end lg:pr-10 order-2 lg:order-1">
              <FadeIn>
                <SectionText number="05" title={t('workflow.f5_title')} desc={t('workflow.f5_desc')} isHovered={hoveredSection === '05'} align="left" />
              </FadeIn>
            </div>
            <div className="relative flex justify-center lg:justify-start order-1 lg:order-2">
              <FadeIn className="w-full max-w-2xl">
                <VideoContainer src={searchBarVideo} isHovered={hoveredSection === '05'} onHover={() => setHoveredSection('05')} onLeave={() => setHoveredSection(null)} side="right" aspect={videoAspect} />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
