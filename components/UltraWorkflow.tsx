
import React, { useRef, useState, useContext, useEffect } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Star, CheckCircle2, Zap } from 'lucide-react';
import { LanguageContext } from '../App';

const LazyVideo = ({ src, className, aspect }: { src: string, className?: string, aspect?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShouldLoad(true); observer.disconnect(); } }, { threshold: 0.01, rootMargin: '400px' });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${aspect || 'aspect-video'} ${className} bg-white/5`}>
      {shouldLoad ? <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={src} /> : <div className="w-full h-full bg-black/20 animate-pulse" />}
    </div>
  );
};

const VideoContainer = ({ src, aspect = "aspect-video", className = "" }: { src: string, aspect?: string, className?: string }) => (
  <div className={`relative p-[1px] rounded-[1.5rem] bg-[#050505] overflow-hidden border border-white/10 shadow-2xl ${className}`}><LazyVideo src={src} aspect={aspect} /></div>
);

export const UltraWorkflow: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const shopifyProductId = '8473627754671';
  const shopifyNodeId = 'workflow-buy-button-container';
  const mainVideoUrl = "https://res.cloudinary.com/dbu9kzomq/video/upload/v1769186159/VIDEO_PRINCIAL_AL_LADO_DEL_PRECIO_auh5rv.mp4";
  const videoAspect = "aspect-[1366/766]";

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const ShopifyBuyInit = () => {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) return;
      const node = document.getElementById(shopifyNodeId);
      if (!node) return;
      node.innerHTML = '';
      const client = window.ShopifyBuy.buildClient({ domain: 'e08ff1-xx.myshopify.com', storefrontAccessToken: '64026182325df844d6b96ce1f55661c5' });
      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent('product', {
          id: shopifyProductId, node: node, moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": { 
                "button": { 
                  "font-family": "Manrope, sans-serif", 
                  "font-weight": "900", 
                  "font-size": "15px", 
                  "padding": "22px", 
                  "border-radius": "20px", 
                  "background-color": "#311161", 
                  "color": "#ffffff", 
                  "width": "100%", 
                  ":hover": { "background-color": "#421a80" },
                  "box-shadow": "0 10px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                } 
              },
              "contents": { "img": false, "title": false, "price": false },
              "text": { "button": lang === 'es' ? "OBTENER ACCESO INMEDIATO" : "GET INSTANT ACCESS" }
            },
            "cart": {
              "styles": {
                "cart": { "background-color": "#000000" },
                "header": { "background-color": "#000000", "color": "#ffffff" },
                "title": { "color": "#ffffff", "text-shadow": "none" },
                "footer": { "background-color": "#000000", "color": "#ffffff", "border-top": "1px solid rgba(255,255,255,0.1)" },
                "button": { "background-color": "#22c55e", "color": "#ffffff", ":hover": { "background-color": "#16a34a" } },
                "subtotal": { "color": "#ffffff" },
                "notice": { 
                  "color": "#22c55e", 
                  "font-weight": "900", 
                  "font-size": "14px", 
                  "text-align": "center", 
                  "margin-bottom": "15px",
                  "text-shadow": "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.4)"
                },
                "discountText": { "color": "#22c55e", "font-weight": "900", "text-shadow": "0 0 10px rgba(34, 197, 94, 0.7)" },
                "discountAmount": { "color": "#22c55e", "font-weight": "900", "text-shadow": "0 0 10px rgba(34, 197, 94, 0.7)" },
                "discountIcon": { "fill": "#22c55e" },
                "close": { "color": "#ffffff" }
              },
              "contents": { "notice": true },
              "text": { "notice": "¡AGREGA OTRO PRODUCTO CON 40% OFF!" }
            },
            "lineItem": {
              "styles": {
                "title": { "color": "#ffffff", "font-weight": "800" },
                "discount": { "color": "#22c55e", "font-weight": "900", "text-shadow": "0 0 8px rgba(34, 197, 94, 0.5)" }
              }
            }
          }
        });
      });
    };
    const loadScript = () => {
      const existing = document.querySelector(`script[src="${scriptURL}"]`);
      if (existing) { if (window.ShopifyBuy && window.ShopifyBuy.UI) ShopifyBuyInit(); else existing.addEventListener('load', ShopifyBuyInit); return; }
      const script = document.createElement('script'); script.async = true; script.src = scriptURL; script.crossOrigin = "anonymous";
      document.head.appendChild(script); script.onload = ShopifyBuyInit;
    };
    loadScript();
  }, [lang]);

  const features = [
    "VFX en segundos, no horas",
    "Efectos profesionales y personalizables en 1 clic",
    "Ahorra un 80% de tiempo en After Effects",
    "Optimización inteligente del motor"
  ];

  return (
    <div className="relative bg-[#000000] min-h-screen text-white overflow-x-hidden pt-4 sm:pt-10">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1600px] pt-4 sm:pt-10 pb-20 relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start mb-20 relative z-10">
          <div className="lg:col-span-8 flex flex-col order-1">
            <FadeIn delay={100} className="w-full flex flex-col items-center">
              <VideoContainer src={mainVideoUrl} className="w-full" aspect={videoAspect} />
            </FadeIn>
          </div>
          
          <div className="lg:col-span-4 flex flex-col order-2">
            <FadeIn delay={300} className="h-full">
              <div className="relative bg-[#050408] border border-white/5 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                {/* Header: Stars + Featured */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <div className="bg-purple-900/40 border border-purple-500/30 px-4 py-1.5 rounded-full">
                    <span className="text-purple-400 text-[9px] font-black uppercase tracking-widest">FEATURED</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-10 text-white/90 uppercase leading-none">
                  ULTRAWORKFLOW
                </h2>

                {/* Features List */}
                <div className="space-y-6 mb-10">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-white/40" />
                      </div>
                      <p className="text-gray-400 text-sm sm:text-base font-bold tracking-tight leading-tight">
                        {f}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-white/5 mb-10" />

                {/* Price Section */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gray-600 line-through textxl font-bold">$50</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                    $39,99
                  </span>
                </div>

                {/* Promotional Badge */}
                <div className="bg-purple-900/20 border border-white/5 w-full py-3.5 rounded-2xl mb-4 text-center">
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">OFERTA DE LANZAMIENTO</span>
                </div>

                {/* CTA Button + Lightning Icon */}
                <div className="relative">
                  <div id={shopifyNodeId} className="w-full relative z-10"></div>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                     <Zap className="w-5 h-5 text-white/40" />
                  </div>
                </div>

                {/* Bottom Footer */}
                <p className="text-center text-gray-700 text-[10px] font-black uppercase tracking-widest mt-8">
                  DESCARGA INSTANTÁNEA • PAGO SEGURO
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};
