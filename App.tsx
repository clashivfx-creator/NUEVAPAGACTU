"use client";

import React, { useState, createContext, useEffect } from 'react';
import { CommercialStore } from './components/CommercialStore';
import { BundleShowcase } from './components/BundleShowcase';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SocialFloatingButtons } from './components/SocialFloatingButtons';
import { LanguageSelector } from './components/LanguageSelector';
import { UpsellModal } from './components/UpsellModal';
import { CustomCheckout } from './components/CustomCheckout';
import { UltraWorkflow } from './components/UltraWorkflow';
import { ProductDetailView } from './components/ProductDetailView';
import { Menu, X, Star } from 'lucide-react';

declare global {
  interface Window {
    goToStore: () => void;
  }
}

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0-1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

export type ActiveTab = 'about' | 'products' | 'platinum' | 'store' | 'checkout' | 'ultra' | 'detail';

export const LanguageContext = createContext<{
  lang: 'es' | 'en';
  t: (key: string) => string;
  setActiveTab: (tab: ActiveTab, product?: any) => void;
  selectedProduct?: any;
}>({ lang: 'es', t: (k) => k, setActiveTab: () => {} });

const translations = {
  es: {
    'nav.about': 'INICIO',
    'nav.products': 'EL PACK DE ÉLITE',
    'nav.platinum': 'PLATINUM PACKS',
    'nav.store': 'TIENDA COMPLETA',
    'nav.comunidad': 'COMUNIDAD',
    'nav.checkout': 'PAGO',
    'nav.bestseller': 'MÁS VENDIDO',
    'nav.store_mobile': 'TIENDA COMPLETA',
    'about.title': 'QUIÉN ES CLASHIVFX',
    'about.subtitle': 'AUTORIDAD AUDIOVISUAL Y ESTÁNDAR DE INDUSTRIA.',
    'about.portfolio_title': 'Clientes de ClashiVFX',
    'about.portfolio_and_more': 'Y MUCHÍSIMOS MÁS',
    'about.stats_highlight': 'MÁS DE 1 BILLÓN DE VISITAS GENERADAS',
    'about.playlist_btn': 'VER VIDEOS DE CLASHIVFX',
    'about.bio_p1': 'ClashiVFX es un editor audiovisual especializado en videoclips musicales, con experiencia trabajando tanto para artistas de proyección internacional como para marcas y empresas de alto nivel.',
    'about.bio_p2': 'Su trabajo se distingue por un enfoque profesional, orientado a resultados y optimizado para los estándares actuales de la industria audiovisual.',
    'about.bio_p3': 'Además de su labor en producciones de gran escala, ClashiVFX impulsa activamente el crecimiento de nuevos editores a través de una comunidad gratuita, creada para quienes buscan dar sus primeros pasos en el mundo de la edición de video.',
    'about.bio_p4': 'Como extensión de su experiencia profesional, también desarrolla packs avanzados de recursos de edición, compuestos por herramientas reales utilizadas en proyectos comerciales y musicales de alto nivel, diseñadas para optimizar el flujo de trabajo y elevar la calidad final de las producciones.',
    'about.creators_title': 'Testimonios',
    'about.creators_subtitle': 'Lo que dicen quienes ya están en el siguiente nivel.',
    'creators.success': 'CRECIMIENTO EXPONENCIAL',
    'creators.director': 'DIRECTOR CREATIVO',
    'creators.daniz_desc': 'Dueño de una de las marcas de ropa más grandes de España. Un referente indiscedible en emprendimiento y creación de marca personal.',
    'creators.maldo_desc': 'Es de los directores más importantes de Argentina trabajando con artistas y marcas top, representando la excelencia técnica y estética que promovemos.',
    'store.banner': '¡OFERTA DE LANZAMIENTO: 90% DE DESCUENTO POR TIEMPO LIMITADO!',
    'store.title': 'RECURSOS PROFESIONALES',
    'store.community': 'unete a la comunidad de editores',
    'store.community_desc': 'Más de 5,000 editores ya están escalando sus resultados con herramientas de nivel industria. No te quedes atrás.',
    'store.oferta': 'Oferta',
    'store.ends_in': 'ESTA OFERTA TERMINA EN:',
    'store.reviews_verified': 'RESEÑAS VERIFICADAS',
    'store.cart_notification': 'Tienes productos en el carrito',
    'store.auto_discounts': 'Descuentos aplicados automáticos',
    'store.pay_now': 'PAGAR AHORA',
    'footer.rights': 'ClashiVFX - Herramientas de nivel industria para editores exigentes.',
    'bundle.tagline': 'LA HERRAMIENTA DEFINITIVA PARA EDITORES',
    'bundle.reviews': '374 reseñas verificadas',
    'bundle.reviews_platinum': '236 reseñas verificadas',
    'bundle.rated': 'Excelente',
    'bundle.compatible': 'Compatible y testeado en todos los programas de edición',
    'bundle.title_main': 'El pack definitivo para editar más rápido con calidad profesional',
    'bundle.title_shimmer': 'RECURSOS USADOS EN PROYECTOS DE RAUW ALEJANDRO, DUKI, EMILIA MERNES Y MUCHOS MÁS.',
    'bundle.ver_mas': 'ver',
    'bundle.resources_count': '+5,000 RECURSOS DRAG & DROP PROFESIONALES',
    'bundle.resources_platinum': '+500 LUTs PROFESIONALES',
    'bundle.buy': 'OBTENER',
    'bundle.save': '90% DE DESCUENTO',
    'bundle.guarantee': 'PAGO ÚNICO • ACCESO DE POR VIDA • DESCARGA INSTANTÁNEA',
    'bundle.guarantee_title': 'Garantía total',
    'bundle.guarantee_desc': 'Si no te sirve te devolvemos el 100% de tu dinero',
    'bundle.satisfaction': 'Garantía de satisfacción. Si no te sirve te devolvemos el 100% de tu dinero',
    'bundle.includes': 'CON ESTO VAS A PODER...',
    'bundle.this_pack': ' LLEVAR TUS VÍDEOS AL SIGUIENTE NIVEL',
    'bundle.audio_quote': 'El audio es el 50% del video. No lo descuides.',
    'bundle.color_title': 'POSTPRODUCCIÓN DE NIVEL CINE (LUTs)',
    'bundle.platinum_demo_subtitle': 'SON MÁS DE 500 LUTS PROFESIONALES CON ESTILOS DE TODO TIPO',
    'bundle.color_desc': 'Logra el look de los mejores vídeos musicales en segundos. LUTs optimizados para cámaras profesionales y smartphones.',
    'bundle.cta_ready': '¿LISTO PARA DIFERENCIARTE DE LA ',
    'bundle.cta_level': 'COMPETENCIA?',
    'bundle.cta_btn': 'ADQUIRIR EL PACK AHORA',
    'bundle.best_seller': 'MÁS VENDIDO',
    'bundle.limited_offer': 'OFERTA POR TIEMPO LIMITADO',
    'bundle.benefit1': 'Ahorra horas de trabajo repetitivo',
    'bundle.benefit2': 'Look profesional sin necesidad de plugins',
    'bundle.benefit3': 'Usado en producciones de alto nivel',
    'bundle.benefit4': 'Actualizaciones gratuitas para siempre',
    'faq.title': 'PREGUNTAS FRECUENTES',
    'faq.q1': '¿En qué programas funciona?',
    'faq.a1': 'Es 100% compatible con todos los programas de edición (PC/Mac/Móvil).',
    'faq.q2': '¿Necesito experiencia previa?',
    'faq.a2': 'No. Todo es "Drag & Drop". Solo arrastras el recurso a tu línea de tiempo y listo.',
    'faq.q3': '¿Es un solo pago?',
    'faq.a3': 'Sí. Pagas una vez y tienes acceso para siempre, incluyendo futuras actualizaciones.',
    'faq.q4': '¿Puedo usarlo en trabajos comerciales?',
    'faq.a4': 'Absolutamente. Todos los recursos incluyen licencia comercial para tus proyectos y los de tus clientes.',
    'checkout.title': 'FINALIZAR PEDIDO',
    'checkout.subtitle': 'Estás a un paso de revolucionar tus producciones.',
    'workflow.hero_desc': 'La herramienta más potente para After Effects de 2026',
    'detail.back': 'FINALIZAR PEDIDO',
    'detail.professional': 'NIVEL PROFESIONAL',
    'detail.instant': 'ACCESO INSTANTÁNEO',
    'detail.winmac': 'Compatible con Win/Mac',
    'detail.software': 'After Effects & Premiere Pro 2025',
    'detail.secure': 'PAGO SEGURO • DESCARGA INMEDIATA',
    'detail.add': 'AGREGAR AL CARRITO',
    'product.ultimate_name': '2026 Ultimate Editing Pack',
    'product.platinum_name': 'PLATINUM LUTs PACK',
    'product.reel_name': 'REEL EDITABLE',
    'product.advanced_name': 'PACK AVANZADO',
    'product.mixed_name': 'PROYECTO MIXED MEDIA',
    'product.yeat_name': 'YEAT PROJECT',
    'product.shakes_name': 'SHAKES',
    'product.title3d_name': 'TITULO 3D',
    'product.workflow_name': 'ULTRAWORKFLOW',
    'product.advanced_desc': '- Premiere Pro 2025 y After Effects 2025 + tutorial de instalación.\n- Pack de Shakes para transiciones dinámicas.\n- Pack completo de VFX para efectos visuales profesionales.\n- Título 3D editable + Plugin Element 3D + DeepGlow.\n- Modelos 3D: armas, balas, naves y más.\n- LUTs para corrección y gradación de color.\n- Acceso a un grupo exclusivo de editores VIP.',
    'product.reel_desc': 'Proyecto editable del Reel Project para After Effects.',
    'product.mixed_desc': 'Proyecto editable del Mix Media Project para After Effects.',
    'product.yeat_desc': 'Proyecto editable del Yeat Project para After Effects.',
    'product.shakes_desc': 'Pre-made shakes para After Effects. Aplica con un solo clic.',
    'product.title3d_desc': 'Editable 3D Title para After Effects. Aplica con un solo clic.',
    'product.workflow_desc': 'Optimiza todo tu flujo de trabajo en After Effects.',
    'sfx.title': 'DISEÑO SONORO (SFX)',
    'sfx.count': '+4000 EFECTOS DE SONIDO',
    'sfx.folders': '+70 CARPETAS CON MILES DE EFECTOS DE SONIDO',
    'vfx.title_main': 'VFX & Overlays para impacto total',
    'vfx.crt': 'Televisores antiguos, líneas de escaneo y estática.',
    'vfx.burns': 'Destellos de luz orgánicos para transiciones vintage.',
    'vfx.fire': 'Llamas, chispas e incendios hiper realistas.',
    'vfx.smoke': 'Superposiciones de neblina y vapor atmosférico.',
    'vfx.money': 'Billetes volando y fondos de temática financiera.',
    'vfx.glitch': 'Distorsiones digitales y errores de señal rítmicos.',
    'vfx.all': 'Texturas, polvos, ruidos y elementos visuales versátiles.'
  },
  en: {
    'nav.about': 'HOME',
    'nav.products': 'ELITE PACK',
    'nav.platinum': 'PLATINUM PACKS',
    'nav.store': 'FULL STORE',
    'nav.comunidad': 'COMMUNITY',
    'nav.checkout': 'PAYMENT',
    'nav.bestseller': 'BEST SELLER',
    'nav.store_mobile': 'FULL STORE',
    'about.title': 'WHO IS CLASHIVFX',
    'about.subtitle': 'AUDIOVISUAL AUTHORITY AND INDUSTRY STANDARD.',
    'about.portfolio_title': 'ClashiVFX Clients',
    'about.portfolio_and_more': 'AND MANY MORE',
    'about.stats_highlight': 'OVER 1 BILLION VIEWS GENERATED',
    'about.playlist_btn': 'VIEW CLASHIVFX VIDEOS',
    'about.bio_p1': 'ClashiVFX is an audiovisual editor specialized in music videos, with experience working for internationally projected artists as well as high-level brands and companies.',
    'about.bio_p2': 'Their work is distinguished by a professional approach, result-oriented and optimized for current audiovisual industry standards.',
    'about.bio_p3': 'In addition to their work in large-scale productions, ClashiVFX actively promotes the growth of new editors through a free community, created for those seeking to take their first steps in the world of video editing.',
    'about.bio_p4': 'As an extension of their professional experience, they also develop advanced editing resource packs, composed of real tools used in high-level commercial and musical projects, designed to optimize workflow and elevate final production quality.',
    'about.creators_title': 'Testimonials',
    'about.creators_subtitle': 'What those already at the next level are saying.',
    'creators.success': 'EXPONENTIAL GROWTH',
    'creators.director': 'CREATIVE DIRECTOR',
    'creators.daniz_desc': 'Owner of one of the largest clothing brands in Spain. An indisputable reference in entrepreneurship and personal branding.',
    'creators.maldo_desc': 'One of the most important directors in Argentina working with top artists and brands, representing the excellence we promote.',
    'store.banner': 'LAUNCH OFFER: 90% OFF FOR A LIMITED TIME!',
    'store.title': 'PROFESSIONAL RESOURCES',
    'store.community': 'join the editing community',
    'store.community_desc': 'Over 5,000 editors are already scaling their results with industry-level tools. Don\'t get left behind.',
    'store.oferta': 'Sale',
    'store.ends_in': 'OFFER ENDS IN:',
    'store.reviews_verified': 'VERIFIED REVIEWS',
    'store.cart_notification': 'You have products in your cart',
    'store.auto_discounts': 'Automatic discounts applied',
    'store.pay_now': 'PAY NOW',
    'footer.rights': 'ClashiVFX - Industry-level tools for demanding editors.',
    'bundle.tagline': 'THE ULTIMATE TOOL FOR EDITORS',
    'bundle.reviews': '374 verified reviews',
    'bundle.reviews_platinum': '236 verified reviews',
    'bundle.rated': 'Excellent',
    'bundle.compatible': 'Compatible and tested on all editing software',
    'bundle.title_main': 'The ultimate pack to edit faster with professional quality',
    'bundle.title_shimmer': 'RESOURCES USED IN PROJECTS FOR RAUW ALEJANDRO, DUKI, EMILIA MERNES AND MORE.',
    'bundle.ver_mas': 'view',
    'bundle.resources_count': '+5,000 PROFESSIONAL DRAG & DROP RESOURCES',
    'bundle.resources_platinum': '+500 PROFESSIONAL LUTs',
    'bundle.buy': 'GET IT',
    'bundle.save': '90% OFF',
    'bundle.guarantee': 'ONE-TIME PAYMENT • LIFETIME ACCESS • INSTANT DOWNLOAD',
    'bundle.guarantee_title': 'Total Guarantee',
    'bundle.guarantee_desc': "If it doesn't work for you, we'll refund 100% of your money",
    'bundle.satisfaction': "Satisfaction guarantee. If it doesn't work for you, we'll refund 100% of your money",
    'bundle.includes': 'WITH THIS YOU WILL BE ABLE TO...',
    'bundle.this_pack': ' TAKE YOUR VIDEOS TO THE NEXT LEVEL',
    'bundle.audio_quote': 'Audio is 50% of the video. Don\'t neglect it.',
    'bundle.color_title': 'CINEMA-LEVEL POST-PRODUCTION (LUTs)',
    'bundle.platinum_demo_subtitle': 'OVER 500 PROFESSIONAL LUTs WITH ALL KINDS OF STYLES',
    'bundle.color_desc': 'Achieve the look of top music videos in seconds. Optimized LUTs for professional cameras and smartphones.',
    'bundle.cta_ready': 'READY TO STAND OUT FROM THE ',
    'bundle.cta_level': 'COMPETITION?',
    'bundle.cta_btn': 'GET THE PACK NOW',
    'bundle.best_seller': 'BEST SELLER',
    'bundle.limited_offer': 'LIMITED TIME OFFER',
    'bundle.benefit1': 'Save hours of repetitive work',
    'bundle.benefit2': 'Professional look without plugins',
    'bundle.benefit3': 'Used in high-level productions',
    'bundle.benefit4': 'Free updates forever',
    'faq.title': 'FREQUENTLY ASKED QUESTIONS',
    'faq.q1': 'What software does it work with?',
    'faq.a1': 'It is 100% compatible with all editing programs (PC/Mac/Mobile).',
    'faq.q2': 'Do I need previous experience?',
    'faq.a2': 'No. Everything is "Drag & Drop". Just drag the resource to your timeline and that\'s it.',
    'faq.q3': 'Is it a one-time payment?',
    'faq.a3': 'Yes. You pay once and have access forever, including all future updates.',
    'faq.q4': 'Can I use for commercial work?',
    'faq.a4': 'Absolutely. All resources include a commercial license for your projects and your clients\'.',
    'checkout.title': 'COMPLETE ORDER',
    'checkout.subtitle': 'You are one step away from revolutionizing your productions.',
    'workflow.hero_desc': 'The most powerful tool for After Effects 2026',
    'detail.back': 'BACK TO STORE',
    'detail.professional': 'PROFESSIONAL LEVEL',
    'detail.instant': 'INSTANT ACCESS',
    'detail.winmac': 'Win/Mac Compatible',
    'detail.software': 'After Effects & Premiere Pro 2025',
    'detail.secure': 'SECURE PAYMENT • INSTANT DOWNLOAD',
    'detail.add': 'ADD TO CART',
    'product.ultimate_name': '2026 Ultimate Editing Pack',
    'product.platinum_name': 'PLATINUM LUTs PACK',
    'product.reel_name': 'REEL EDITABLE',
    'product.advanced_name': 'ADVANCED PACK',
    'product.mixed_name': 'MIXED MEDIA PROJECT',
    'product.yeat_name': 'YEAT PROJECT',
    'product.shakes_name': 'SHAKES',
    'product.title3d_name': '3D TITLE',
    'product.workflow_name': 'ULTRAWORKFLOW',
    'product.advanced_desc': '- Premiere Pro 2025 and After Effects 2025 + installation tutorial.\n- Pack of Shakes for dynamic transitions.\n- Complete VFX Pack for professional visual effects.\n- Editable 3D Title + Element 3D Plugin + DeepGlow.\n- 3D Models: weapons, bullets, ships and more.\n- LUTs for color correction and grading.\n- Access to an exclusive VIP editor group.',
    'product.reel_desc': 'Editable project of the Reel Project for After Effects.',
    'product.mixed_desc': 'Editable project of the Mix Media Project for After Effects.',
    'product.yeat_desc': 'Editable project of the Yeat Project for After Effects.',
    'product.shakes_desc': 'Pre-made shakes for After Effects. Apply with one click.',
    'product.title3d_desc': 'Editable 3D Title for After Effects. Apply with one click.',
    'product.workflow_desc': 'Optimize your entire workflow in After Effects.',
    'sfx.title': 'SOUND DESIGN (SFX)',
    'sfx.count': '+4000 SOUND EFFECTS',
    'sfx.folders': '+70 FOLDERS WITH THOUSANDS OF SOUND EFFECTS',
    'vfx.title_main': 'VFX & Overlays for Total Impact',
    'vfx.crt': 'Retro TVs, scanlines and static overlays.',
    'vfx.burns': 'Organic film burns for vintage transitions.',
    'vfx.fire': 'Hyper-realistic flames, sparks and fire.',
    'vfx.smoke': 'Atmospheric mist and steam overlays.',
    'vfx.money': 'Flying bills and finance-themed backgrounds.',
    'vfx.glitch': 'Digital distortions and signal errors.',
    'vfx.all': 'Textures, dust, noise and versatile visual elements.'
  }
};

const App = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [activeTab, setActiveTab] = useState<ActiveTab>('products');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    window.goToStore = () => {
      setActiveTab('store');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleOpenUpsell = () => {
      setTimeout(() => setShowUpsell(true), 500);
    };

    const handleInterceptCheckout = () => {
      setActiveTab('checkout');
    };

    window.addEventListener('openUpsellModal', handleOpenUpsell);
    window.addEventListener('customCheckoutTrigger', handleInterceptCheckout);
    
    return () => {
      window.removeEventListener('openUpsellModal', handleOpenUpsell);
      window.removeEventListener('customCheckoutTrigger', handleInterceptCheckout);
    };
  }, []);

  const t = (key: string) => {
    return (translations[lang] as any)[key] || key;
  };

  const handleSetTab = (tab: ActiveTab, product?: any) => {
    if (product) setSelectedProduct(product);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NavButtons = () => (
    <div className="flex items-center justify-center gap-4 sm:gap-10 px-2 h-full">
      <button 
        onClick={() => handleSetTab('about')}
        className={`text-[9px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all whitespace-nowrap ${activeTab === 'about' ? 'text-purple-500 opacity-100 scale-105' : 'text-white opacity-40 hover:opacity-100'}`}
      >
        {t('nav.about')}
      </button>
      <button 
        onClick={() => handleSetTab('products')}
        className={`relative flex flex-col items-center justify-center group/nav text-[9px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all whitespace-nowrap h-full`}
      >
        <span className={`leading-none ${activeTab === 'products' ? 'text-purple-500 opacity-100 scale-105' : 'text-white opacity-40 group-hover/nav:opacity-100'}`}>
          {t('nav.products')}
        </span>
        <span className="absolute top-[68%] left-1/2 -translate-x-1/2 text-[5.5px] sm:text-[6.5px] text-amber-500 font-black animate-pulse whitespace-nowrap tracking-tighter uppercase pointer-events-none drop-shadow-[0_0_10px_rgba(245,158,11,1)] opacity-100 z-10">
          {t('nav.bestseller')}
        </span>
      </button>
      <button 
        onClick={() => handleSetTab('store')}
        className={`text-[9px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all whitespace-nowrap px-2 py-1 rounded-md ${activeTab === 'store' ? 'text-purple-500 bg-purple-500/10' : 'text-white opacity-40 hover:opacity-100'}`}
      >
        {t('nav.store')}
      </button>
    </div>
  );

  return (
    <LanguageContext.Provider value={{ lang, t, setActiveTab: handleSetTab, selectedProduct }}>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
        <ScrollProgress />
        <AnimatedBackground />
        <LanguageSelector currentLang={lang} onLanguageChange={setLang} activeTab={activeTab === 'about' ? 'products' : activeTab as any} />
        <SocialFloatingButtons />
        
        <nav className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center">
            
            {/* Espaciador Izquierdo para equilibrar el botón de Discord y centrar el menú */}
            <div className="flex-1 flex justify-start items-center">
               <span className="hidden lg:block text-[10px] font-black opacity-20 tracking-[0.3em] uppercase">CLASHIVFX</span>
            </div>

            {/* Menú Principal Centrado */}
            <div className="flex-[2] flex items-center justify-center h-full">
               <NavButtons />
            </div>

            {/* Acciones Derecha (Discord) */}
            <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3">
              <a 
                href="https://discord.com/invite/zEcFPBqy6s" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 px-3 sm:px-5 md:px-6 py-2 rounded-lg sm:rounded-xl bg-[#5865F2] hover:bg-[#4752C4] transition-all shadow-[0_0_15px_rgba(88,101,242,0.3)] active:scale-95"
              >
                <DiscordIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-[9px] sm:text-xs font-black tracking-tight text-white uppercase hidden md:block">
                  {t('nav.comunidad')}
                </span>
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-16 md:pt-20 overflow-x-hidden">
          {activeTab === 'about' ? (
            <AboutUs />
          ) : activeTab === 'products' ? (
            <BundleShowcase variant="elite" />
          ) : activeTab === 'platinum' ? (
            <BundleShowcase variant="platinum" />
          ) : activeTab === 'store' ? (
            <CommercialStore />
          ) : activeTab === 'ultra' ? (
            <UltraWorkflow />
          ) : activeTab === 'detail' ? (
            <ProductDetailView />
          ) : (
            <CustomCheckout />
          )}
        </main>
        <Footer />

        <UpsellModal isOpen={showUpsell} onClose={() => setShowUpsell(false)} />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
