
import React, { useRef, useState, useContext, useEffect } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Star } from 'lucide-react';
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
              "styles": { "button": { "font-family": "Manrope, sans-serif", "font-weight": "900", "font-size": "16px", "padding": "20px", "border-radius": "50px", "background-color": "#22c55e", "color": "#ffffff", "width": "100%", ":hover": { "background-color": "#16a34a" } } },
              "contents": { "img": false, "title": false, "price": false },
              "text": { "button": lang === 'es' ? "AGREGAR AL CARRITO" : "ADD TO CART" }
            },
            "cart": {
              "styles": {
                "cart": { "background-color": "#000000" },
                "header": { "background-color": "#000000", "color": "#ffffff" },
                "title": { "color": "#ffffff", "text-shadow": "none" },
                "footer": { "background-color": "#000000", "color": "#ffffff", "border-top": "1px solid rgba(255,255,255,0.1)" },
                "button": { "background-color": "#22c55e", "color": "#ffffff", ":hover": { "background-color": "#16a34a" } },
                "subtotal": { "color": "#ffffff" },
                "subtotalText": { "color": "#ffffff" },
                "currency": { "color": "#ffffff" },
                "notice": { 
                  "color": "#22c55e", 
                  "font-weight": "900", 
                  "font-size": "14px", 
                  "text-align": "center", 
                  "margin-bottom": "15px",
                  "text-shadow": "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.4)"
                },
                "discountText": { "color": "#ffffff" },
                "discountAmount": { "color": "#ffffff" },
                "close": { "color": "#ffffff" }
              },
              "contents": { "notice": true },
              "text": { "notice": "¡AGREGA OTRO PRODUCTO CON 40% OFF!" }
            },
            "lineItem": { 
              "styles": { 
                "title": { "color": "#ffffff", "font-weight": "800" }, 
                "price": { "color": "#ffffff" }, 
                "quantity": { "color": "#ffffff" }, 
                "quantityIncrement": { "color": "#ffffff", "border-color": "#ffffff" }, 
                "quantityDecrement": { "color": "#ffffff", "border-color": "#ffffff" },
                "quantityInput": { "color": "#ffffff", "background": "transparent" }
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
  return (
    <div className="relative bg-[#000000] min-h-screen text-white overflow-x-hidden pt-4 sm:pt-10">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1600px] pt-4 sm:pt-10 pb-20 relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start mb-20 relative z-10">
          <div className="lg:col-span-8 flex flex-col order-1"><FadeIn delay={100} className="w-full flex flex-col items-center"><VideoContainer src={mainVideoUrl} className="w-full" aspect={videoAspect} /></FadeIn></div>
          <div className="lg:col-span-4 flex flex-col order-2 h-full"><FadeIn delay={300} className="h-full"><div className="h-full bg-violet-900/20 backdrop-blur-xl border border-violet-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl flex flex-col"><h2 className="text-3xl sm:text-5xl font-black tracking-tighter mb-6 italic uppercase">{t('product.workflow_name')}</h2><div className="pt-6 border-t border-white/10 mt-auto text-left"><div className="flex items-baseline gap-4 mb-6"><span className="text-gray-500 line-through text-lg font-medium">$50</span><span className="text-4xl sm:text-6xl font-black text-white tracking-tighter">$39,99</span></div><div id={shopifyNodeId} className="w-full"></div></div></div></FadeIn></div>
        </div>
      </div>
    </div>
  );
};
