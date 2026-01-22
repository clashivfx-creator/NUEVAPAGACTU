
import React, { useState, createContext, useEffect } from 'react';
import { Hero } from './components/Hero';
import { WarningSection } from './components/WarningSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProgramHighlights } from './components/ProgramHighlights';
import { CreatorStory } from './components/CreatorStory';
import { CreatorsSection } from './components/CreatorsSection';
import { UltraWorkflow } from './components/UltraWorkflow';
import { LimitedPacks } from './components/LimitedPacks';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SocialFloatingButtons } from './components/SocialFloatingButtons';
import { LanguageSelector } from './components/LanguageSelector';
import { FloatingCTABlocks } from './components/FloatingCTABlocks';
import { ShoppingBag } from 'lucide-react';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

type ViewType = 'formation' | 'workflow';

export const LanguageContext = createContext<{
  lang: 'es' | 'en';
  t: (key: string) => string;
}>({ lang: 'es', t: (k) => k });

const translations = {
  es: {
    'nav.formacion': 'Formación',
    'nav.workflow': 'ULTRAWORKFLOW',
    'nav.store_short': 'TIENDA',
    'nav.comunidad': 'COMUNIDAD',
    'nav.new': 'NEW',
    'hero.exclusive': 'Formación exclusiva para editores',
    'hero.title1': 'Conviértete',
    'hero.title2': 'en el',
    'hero.title3': 'Top 1% de Editores',
    'hero.desc': 'El conocimiento exacto para trabajar con Figuras Top Mundial y posicionarte como un Editor Reconocido.',
    'hero.btn': 'VER FORMACIÓN',
    'hero.limited': 'PLAZAS LIMITADAS DISPONIBLES',
    'warning.title': 'Esta formación NO es para principiantes',
    'warning.desc': 'Este programa requiere mínimos conocimientos previos de After Effects & Premiere. Si buscas aprender desde cero, este no es el lugar.',
    'features.title': 'INCLUYE:',
    'features.f1_title': 'Edición Profesional',
    'features.f1_desc': 'Crea VFX y ediciones profesionales.',
    'features.f2_title': 'Sé un Editor Reconocido',
    'features.f2_desc': 'Conviértete en el editor que todos conocen.',
    'features.f3_title': 'Comunidad Activa',
    'features.f3_desc': 'Networking con editores que lideran el mercado.',
    'features.f4_title': 'Color Grading',
    'features.f4_desc': 'Logra acabados cinematográficos de estándar industrial.',
    'features.f5_title': 'Inteligencia Artificial',
    'features.f5_desc': 'Crea videos con IA ultra realistas de calidad cine.',
    'features.f6_title': 'Feedback Personalizado',
    'features.f6_desc': 'Correcciones directas sobre tus timelines.',
    'highlights.main_title': 'Esto no es un curso cualquiera',
    'highlights.h1_title': 'Feedback Directo',
    'highlights.h1_desc': 'Revisiones 1 a 1 de tus timelines para pulir esos detalles que marcan la diferencia.',
    'highlights.h2_title': 'Llamadas Grupales',
    'highlights.h2_desc': 'Sesiones semanales en vivo. Q&A, networking y análisis de proyectos reales.',
    'highlights.h3_title': 'Comunidad VIP',
    'highlights.h3_desc': 'Acceso exclusivo a un Discord privado con recursos, presets y ofertas laborales.',
    'highlights.h4_title': 'Software y Presets',
    'highlights.h4_desc': 'Incluye programas, plugins profesionales exclusivos y presets listos para usar.',
    'story.title': 'De editar gratis a trabajar con ',
    'story.title_span': 'los mejores',
    'story.p1': 'Antes cobraba $200 dólares por mes editando muchos videos que no me pagaban lo suficiente. Ahora, con solo 1 o 2 proyectos al mes, estoy cobrando más de $3,000, hasta $5,000 si el proyecto lo amerita.',
    'story.p2': 'Hoy, he trabajado con Rauw Alejandro, Emilia Mernes, Duki, Khea, Kun Agüero, YSY A, Tiago PZK, Lit Killah, y muchos más.',
    'story.quote': 'Trabajando con los mejores de la industria.',
    'story.btn_work': 'MIRA MIS TRABAJOS',
    'story.btn_store': 'TODA LA TIENDA',
    'creators.title': 'Creadores de ',
    'creators.title_span': 'Éxito',
    'creators.subtitle': 'Personas influyentes que han transformado su presencia digital.',
    'creators.success': 'Éxito',
    'creators.director': 'Director Top',
    'creators.daniz_desc': 'Dueño de una de las marcas de ropa más grandes de España. Un referente indiscutible en emprendimiento y creación de marca personal.',
    'creators.maldo_desc': 'Director de los proyectos audiovisuales más grandes de Argentina. Una figura clave en la industria trabajando con artistas y marcas de elite.',
    'packs.temporal': 'Oferta Temporal',
    'packs.title': 'PACKS ',
    'packs.title_shimmer': 'AVANZADOS',
    'packs.title_sub': 'POR TIEMPO LIMITADO',
    'packs.desc': 'Eleva tus producciones al siguiente nivel con nuestras herramientas exclusivas. Efectos que antes tomaban horas, ahora en un clic.',
    'packs.most_wanted': 'Lo más buscado',
    'packs.vfx_pack': 'PACK AVANZADO VFX',
    'packs.vfx_desc': 'Más de 5.000+ recursos premium incluyendo Presets, Overlays, SFX y Plugins configurados para máxima eficiencia.',
    'packs.li1': 'Workflows de alta velocidad',
    'packs.li2': 'Plugins Pro incluidos',
    'packs.li3': 'Actualizaciones de por vida',
    'packs.btn': 'OBTENER ACCESO',
    'packs.instant': 'ACCESO INSTANTÁNEO • DESCARGA DIGITAL',
    'workflow.vfx': 'VFX en segundos, no horas',
    'workflow.oneclick': 'Efectos profesionales y personalizables en 1 clic',
    'workflow.save_time': 'Ahorra un 80% de tiempo en After Effects',
    'workflow.optim': 'Optimización inteligente del motor',
    'workflow.offer': 'Oferta de Lanzamiento',
    'workflow.access': 'Obtener Acceso Inmediato',
    'workflow.download': 'Descarga instantánea • Pago seguro',
    'workflow.features_title': 'QUE TRAE ULTRAWORKFLOW',
    'workflow.features_desc': 'Optimiza cada segundo de tu proceso creativo',
    'workflow.f1_title': 'Motor de IA Integrado',
    'workflow.f1_desc': 'Analiza tus capas y proyectos en tiempo real para optimizar After Effects, permitiéndote editar composiciones pesadas sin lag.',
    'workflow.f2_title': 'Curvas Maestras',
    'workflow.f2_desc': 'Aplica curvas de movimiento fluidas con un solo clic. Olvida el editor de gráficos tedioso; selecciona el preset y deja que la herramienta haga la magia.',
    'workflow.f3_title': 'Optimización One-Click',
    'workflow.f3_desc': 'Limpia caché, optimiza RAM y configura AE para el máximo rendimiento con un solo botón. Diseñado para editores exigentes.',
    'workflow.f4_title': 'MÁS FUNCIONES',
    'workflow.f4_desc': 'Diseñado para ahorrarte horas de trabajo manual. Importa tus propios presets fácilmente para tenerlos a mano y disfruta de los +10 presets premium incluidos con la extensión.',
    'workflow.f5_title': 'BARRA DE BÚSQUEDA',
    'workflow.f5_desc': 'Busca recursos de todo tipo en distintas plataformas solo escribiendo en la barra de búsqueda y apretando enter.',
    'footer.rights': 'Todos los derechos reservados.'
  },
  en: {
    'nav.formacion': 'Training',
    'nav.workflow': 'ULTRAWORKFLOW',
    'nav.store_short': 'STORE',
    'nav.comunidad': 'COMMUNITY',
    'nav.new': 'NEW',
    'hero.exclusive': 'Exclusive training for editors',
    'hero.title1': 'Become',
    'hero.title2': 'part of the',
    'hero.title3': 'Top 1% of Editors',
    'hero.desc': 'The exact knowledge to work with World-Class figures and position yourself as a Recognized Editor.',
    'hero.btn': 'VIEW TRAINING',
    'hero.limited': 'LIMITED SLOTS AVAILABLE',
    'warning.title': 'This training is NOT for beginners',
    'warning.desc': 'This program requires minimal prior knowledge of After Effects & Premiere. If you want to learn from scratch, this is not the place.',
    'features.title': 'INCLUDES:',
    'features.f1_title': 'Professional Editing',
    'features.f1_desc': 'Create professional VFX and high-end edits.',
    'features.f2_title': 'Be a Recognized Editor',
    'features.f2_desc': 'Become the editor everyone in the industry knows.',
    'features.f3_title': 'Active Community',
    'features.f3_desc': 'Networking with top-tier editors leading the market.',
    'features.f4_title': 'Color Grading',
    'features.f4_desc': 'Achieve cinematic industrial-standard finishes.',
    'features.f5_title': 'Artificial Intelligence',
    'features.f5_desc': 'Create ultra-realistic AI videos with cinematic quality.',
    'features.f6_title': 'Personalized Feedback',
    'features.f6_desc': 'Direct corrections on your actual timelines.',
    'highlights.main_title': 'This is not just another course',
    'highlights.h1_title': 'Direct Feedback',
    'highlights.h1_desc': '1-on-1 reviews of your timelines to polish those details that make the difference.',
    'highlights.h2_title': 'Group Calls',
    'highlights.h2_desc': 'Weekly live sessions. Q&A, networking, and real project analysis.',
    'highlights.h3_title': 'VIP Community',
    'highlights.h3_desc': 'Exclusive access to a private Discord with resources, presets, and job offers.',
    'highlights.h4_title': 'Software and Presets',
    'highlights.h4_desc': 'Includes programs, exclusive professional plugins, and ready-to-use presets.',
    'story.title': 'From editing for free to working with ',
    'story.title_span': 'the best',
    'story.p1': 'I used to earn $200 dollars per month editing many videos that didn\'t pay enough. Now, with just 1 or 2 projects a month, I\'m earning more than $3,000, up to $5,000 if the project warrants it.',
    'story.p2': 'Today, I have worked with Rauw Alejandro, Emilia Mernes, Duki, Khea, Kun Agüero, YSY A, Tiago PZK, Lit Killah, and many more.',
    'story.quote': 'Working with the best in the industry.',
    'story.btn_work': 'MY WORKS',
    'story.btn_store': 'FULL STORE',
    'creators.title': 'Creators of ',
    'creators.title_span': 'Success',
    'creators.subtitle': 'Influential people who have transformed their digital presence.',
    'creators.success': 'Success',
    'creators.director': 'Top Director',
    'creators.daniz_desc': 'Owner of one of the largest clothing brands in Spain. An indisputable reference in entrepreneurship and personal branding.',
    'creators.maldo_desc': 'Director of the largest audiovisual projects in Argentina. A key figure in the industry working with elite artists and brands.',
    'packs.temporal': 'Limited Offer',
    'packs.title': 'ADVANCED ',
    'packs.title_shimmer': 'PACKS',
    'packs.title_sub': 'FOR A LIMITED TIME',
    'packs.desc': 'Elevate your productions to the next level with our exclusive tools. Effects that used to take hours, now in one click.',
    'packs.most_wanted': 'Most Wanted',
    'packs.vfx_pack': 'ADVANCED VFX PACK',
    'packs.vfx_desc': 'More than 5,000+ premium resources including Presets, Overlays, SFX, and Plugins configured for maximum efficiency.',
    'packs.li1': 'High-speed workflows',
    'packs.li2': 'Pro Plugins included',
    'packs.li3': 'Lifetime updates',
    'packs.btn': 'GET ACCESS',
    'packs.instant': 'INSTANT ACCESS • DIGITAL DOWNLOAD',
    'workflow.vfx': 'VFX in seconds, not hours',
    'workflow.oneclick': 'Professional & customizable effects in 1 click',
    'workflow.save_time': 'Save 80% time in After Effects',
    'workflow.optim': 'Smart engine optimization',
    'workflow.offer': 'LAUNCH OFFER',
    'workflow.access': 'GET INSTANT ACCESS',
    'workflow.download': 'Instant download • Secure checkout',
    'workflow.features_title': 'WHAT ULTRAWORKFLOW INCLUDES',
    'workflow.features_desc': 'Optimize every second of your creative process',
    'workflow.f1_title': 'AI-Powered Engine',
    'workflow.f1_desc': 'UltraWorkflow analyzes your layers and projects in real-time to optimize After Effects performance, allowing you to edit heavy compositions without lag.',
    'workflow.f2_title': 'Professional Curves',
    'workflow.f2_desc': 'Apply fluid motion curves with a single click. Forget the tedious graph editor; select the preset and let the tool do the magic.',
    'workflow.f3_title': 'One-Click Optimization',
    'workflow.f3_desc': 'Clear cache, optimize RAM memory, and configure AE for maximum performance with a single button. Designed for high-volume editors.',
    'workflow.f4_title': 'MORE FEATURES',
    'workflow.f4_desc': 'Designed to save you hours of manual work. Easily import your own custom presets easily and enjoy the +10 premium presets included with the extension.',
    'workflow.f5_title': 'SEARCH BAR',
    'workflow.f5_desc': 'Search for all types of resources across different platforms just by typing in the search bar and pressing enter.',
    'footer.rights': 'All rights reserved.'
  }
};

const App = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [view, setView] = useState<ViewType>('workflow');

  const t = (key: string) => {
    return (translations[lang] as any)[key] || key;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
        <ScrollProgress />
        <AnimatedBackground />
        <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
        <SocialFloatingButtons />
        
        {view === 'formation' && (
          <FloatingCTABlocks onWorkflowClick={() => setView('workflow')} />
        )}
        
        <nav className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
            <div className="flex-1 flex justify-start">
              <a 
                href="https://www.instagram.com/clashivfx/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center group transition-transform hover:scale-105"
              >
                <span className="font-black text-base sm:text-xl tracking-tighter uppercase whitespace-nowrap">
                  CLASHI<span className="text-purple-500">VFX</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
              <button onClick={() => setView('formation')} className={`text-[9px] sm:text-xs font-bold tracking-widest transition-all uppercase ${view === 'formation' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                {t('nav.formacion')}
              </button>
              <button onClick={() => setView('workflow')} className={`text-[9px] sm:text-xs font-bold tracking-widest transition-all uppercase relative group/nav ${view === 'workflow' ? 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]' : 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] hover:text-purple-300'}`}>
                {t('nav.workflow')}
                <span className="absolute top-[calc(100%+4px)] left-1/2 -translate-x-1/2 bg-red-600 text-[5px] sm:text-[6px] px-1 py-0.5 rounded-sm font-black text-white animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.7)] pointer-events-none tracking-normal">
                  {t('nav.new')}
                </span>
              </button>
            </div>

            <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3">
              <a href="https://e08ff1-xx.myshopify.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl bg-green-600 hover:bg-green-500 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-[9px] sm:text-xs font-black tracking-tight text-white uppercase hidden sm:inline">
                  {t('nav.store_short')}
                </span>
              </a>
              <a href="https://discord.com/invite/zEcFPBqy6s" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-3 sm:px-6 py-2 rounded-lg sm:rounded-xl bg-[#5865F2] hover:bg-[#4752C4] transition-all shadow-[0_0_15px_rgba(88,101,242,0.3)]">
                <DiscordIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-xs font-black tracking-tight text-white uppercase hidden lg:block">
                  {t('nav.comunidad')}
                </span>
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-16 md:pt-20 overflow-x-hidden">
          {view === 'formation' ? (
            <div className="view-container">
              <Hero />
              <WarningSection />
              <FeaturesGrid />
              <ProgramHighlights />
              <CreatorStory />
              <CreatorsSection />
              <LimitedPacks />
            </div>
          ) : (
            <div className="view-container">
              <UltraWorkflow />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
