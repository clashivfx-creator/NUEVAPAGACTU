
import React, { useContext, useState, useEffect, useMemo, useRef } from 'react';
import { FadeIn } from './ui/FadeIn';
import { 
  Tv, Sparkles, Flame, Cloud, Banknote, Zap, 
  Palette, Smartphone, Layout, Scissors, Ghost, Volume2, Award, Check,
  Star, ChevronRight, Clock, Package, ShieldCheck, ZapIcon, MousePointer2, Plus, Minus,
  ArrowRight, ExternalLink, ShieldAlert, BadgeCheck, X, Music, ShoppingCart
} from 'lucide-react';
import { LanguageContext } from '../App';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';

declare global {
  interface Window {
    ShopifyBuy: any;
  }
}

interface BundleShowcaseProps {
  variant: 'elite' | 'platinum';
}

const SoftwareLogos = () => {
  const { t } = useContext(LanguageContext);
  const softwares = [
    { name: 'Lightroom', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg' },
    { name: 'Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { name: 'Premiere Pro', logo: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770214190/Adobe_Premiere_Pro_CC_icon.svg_um6zec.png' },
    { name: 'After Effects', logo: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770214189/Adobe_After_Effects_CC_icon.svg_1_okzvsz.png' },
    { name: 'Final Cut', logo: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770214188/97f5f4dfe6df84d78caacff68ec63538_dsu36n.png' },
    { name: 'DaVinci', logo: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770214187/DaVinci_Resolve_Studio_ebxpwn.png', scale: 'scale-[1.3]' },
    { name: 'Vegas Pro', logo: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770214187/Vegas_Pro_15.0_kbkgf6.png' },
    { name: 'Filmora', logo: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770214188/filmora-transparent-icon-free-png_vddcnn.webp', scale: 'scale-[1.5]' },
    { name: 'CapCut', logo: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770214189/Capcut-icon_zsrexg.png' }
  ];

  return (
    <div className="w-full mt-4 sm:mt-6">
      <FadeIn delay={300}>
        <div className="text-center mb-3 sm:mb-4">
          <h3 className="text-white/40 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-1">
            {t('bundle.compatible')}
          </h3>
          <div className="w-6 h-px bg-white/20 mx-auto" />
        </div>
        <div className="grid grid-cols-9 sm:grid-cols-5 md:grid-cols-9 gap-1 sm:gap-4 max-w-5xl mx-auto px-2 sm:px-4 items-center justify-center">
          {softwares.map((sw, i) => (
            <div key={sw.name} className="group relative flex flex-col items-center" title={sw.name}>
              <div className="relative w-full aspect-square rounded-lg sm:rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-0.5 sm:p-2 transition-all duration-500 group-hover:bg-white/[0.1] group-hover:border-white/30 group-hover:-translate-y-1 shadow-lg overflow-visible">
                <img src={sw.logo} alt={sw.name} className={`w-full h-full object-contain transition-all duration-500 ${sw.scale || ''}`} />
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export const CountdownTimer = () => {
  const INITIAL_HOURS = 0;
  const INITIAL_MINUTES = 30;
  const STORAGE_KEY = 'clashivfx_offer_timer_end_v30m'; 
  const [timeLeft, setTimeLeft] = useState({ h: INITIAL_HOURS, m: INITIAL_MINUTES, s: 0 });

  useEffect(() => {
    const getTargetTime = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return parseInt(stored, 10);
        const newTarget = Date.now() + (INITIAL_HOURS * 3600 + INITIAL_MINUTES * 60) * 1000;
        localStorage.setItem(STORAGE_KEY, newTarget.toString());
        return newTarget;
      } catch (e) {
        return Date.now() + (INITIAL_HOURS * 3600 + INITIAL_MINUTES * 60) * 1000;
      }
    };
    const calculate = () => {
      let target = getTargetTime();
      let now = Date.now();
      let diff = target - now;
      if (diff <= 0) {
        const newTarget = Date.now() + (INITIAL_HOURS * 3600 + INITIAL_MINUTES * 60) * 1000;
        try { localStorage.setItem(STORAGE_KEY, newTarget.toString()); } catch (e) {}
        diff = newTarget - now;
      }
      setTimeLeft({
        h: Math.floor((diff / (1000 * 60 * 60))),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60)
      });
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-1.5 font-black text-emerald-500 text-base sm:text-xl tracking-tighter">
      <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 rounded-md">{String(timeLeft.h).padStart(2, '0')}h</div>
      <span>:</span>
      <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 rounded-md">{String(timeLeft.m).padStart(2, '0')}m</div>
      <span>:</span>
      <div className="bg-emerald-500/10 border border-emerald-500/20 px-2 rounded-md">{String(timeLeft.s).padStart(2, '0')}s</div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left group">
        <span className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-purple-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && <p className="mt-4 text-gray-400 text-base leading-relaxed font-light">{answer}</p>}
    </div>
  );
};

export const BundleShowcase: React.FC<BundleShowcaseProps> = ({ variant }) => {
  const { lang, t, setActiveTab } = useContext(LanguageContext);
  const uiRef = useRef<any>(null);

  const productData = useMemo(() => {
    if (variant === 'platinum') {
      return {
        shopifyId: '8480949338287',
        nodeId: 'product-component-1770349141842',
        name: t('product.platinum_name'),
        oldPrice: '590',
        newPrice: '9',
        image: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770349061/6h765hn7_wxxjol.png',
        resourcesLabel: t('bundle.resources_platinum'),
        reviewsCount: '236',
        isBestSeller: true
      };
    }
    return {
      shopifyId: '8476233466031',
      nodeId: 'product-component-1770244709884',
      name: t('product.ultimate_name'),
      oldPrice: '299.99',
      newPrice: '29.99',
      image: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770687573/aaaaaaaaaxa_0-00-00-00_w2uo0s.png',
      resourcesLabel: t('bundle.resources_count'),
      reviewsCount: '374',
      isBestSeller: true
    };
  }, [variant, lang, t]);

  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const ShopifyBuyInit = () => {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) return;
      const node = document.getElementById(productData.nodeId);
      if (!node) return;
      node.innerHTML = '';
      const client = window.ShopifyBuy.buildClient({
        domain: 'e08ff1-xx.myshopify.com',
        storefrontAccessToken: '64026182325df844d6b96ce1f55661c5',
      });
      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        uiRef.current = ui;
        ui.createComponent('product', {
          id: productData.shopifyId,
          node: node,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "events": { "afterAddVariantToCart": () => window.dispatchEvent(new CustomEvent('openUpsellModal')) },
              "styles": {
                "button": {
                  "font-family": "Manrope, sans-serif",
                  "font-weight": "900",
                  "font-size": "13px",
                  "padding-top": "10px",
                  "padding-bottom": "10px",
                  "border-radius": "40px",
                  "background-color": "#22c55e",
                  "color": "#ffffff",
                  ":hover": { "background-color": "#16a34a" }
                }
              },
              "contents": { "img": false, "title": false, "price": false },
              "text": { "button": lang === 'es' ? "AGREGAR AL CARRITO" : "ADD TO CART" }
            },
            "cart": {
              "styles": {
                "cart": { "background-color": "#000000", "box-shadow": "0 0 50px rgba(0,0,0,0.8)" },
                "header": { "background-color": "#000000", "color": "#ffffff", "padding-top": "30px", "padding-bottom": "15px" },
                "title": { "color": "#ffffff", "font-family": "Manrope, sans-serif", "font-weight": "900", "font-size": "11px", "text-transform": "uppercase", "text-shadow": "none" },
                "footer": { "background-color": "#000000", "color": "#ffffff", "border-top": "1px solid rgba(255,255,255,0.15)", "padding-top": "24px" },
                "button": { "font-family": "Manrope, sans-serif", "font-weight": "900", "font-size": "18px", "background-color": "#22c55e", "color": "#ffffff", "border-radius": "14px", ":hover": { "background-color": "#16a34a" } },
                "close": { "color": "#ffffff" },
                "empty": { "color": "#ffffff" },
                "subtotalText": { "color": "#ffffff" },
                "subtotal": { "color": "#ffffff", "font-weight": "900", "font-size": "18px" },
                "notice": { 
                  "color": "#22c55e", 
                  "font-weight": "900", 
                  "font-size": "14px", 
                  "text-align": "center", 
                  "margin-bottom": "20px", 
                  "text-shadow": "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.4)" 
                },
                "currency": { "color": "#ffffff" },
                "discountText": { "color": "#ffffff", "font-weight": "900" },
                "discountAmount": { "color": "#ffffff", "font-weight": "900" },
                "discountIcon": { "fill": "#ffffff" }
              },
              "contents": { "title": true, "note": false, "footer": true, "notice": true },
              "text": {
                "total": "SUBTOTAL",
                "button": lang === 'es' ? "PAGAR AHORA" : "CHECKOUT",
                "title": "CARRITO",
                "notice": "¡AGREGA OTRO PRODUCTO CON 40% OFF!",
                "empty": lang === 'es' ? "Tu carrito está vacío" : "Your cart is empty"
              }
            },
            "lineItem": {
              "styles": {
                "title": { "color": "#ffffff", "font-weight": "800" },
                "price": { "color": "#ffffff", "font-weight": "900" },
                "discount": { "color": "#ffffff", "font-weight": "900" },
                "quantity": { "color": "#ffffff", "font-weight": "900" },
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
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    };
    loadScript();
  }, [lang, variant, productData]);

  const categories = [
    {
      id: 'vfx',
      title: variant === 'platinum' ? '' : t('vfx.title_main'),
      items: variant === 'platinum' ? [] : [
        { icon: Tv, name: 'CRT', desc: t('vfx.crt') },
        { icon: Sparkles, name: 'Film Burns', desc: t('vfx.burns') },
        { icon: Flame, name: 'Fuego', desc: t('vfx.fire') },
        { icon: Cloud, name: 'Humos', desc: t('vfx.smoke') },
        { icon: Banknote, name: 'Money', desc: t('vfx.money') },
        { icon: Zap, name: 'Glitches', desc: t('vfx.glitch') },
        { icon: Layout, name: 'Overlays', desc: t('vfx.all') }
      ],
      visual: variant === 'platinum' ? "" : "https://res.cloudinary.com/dbu9kzomq/image/upload/v1769800502/ghidd_pag_pewc99.gif",
      aspect: "aspect-[9/16]"
    }
  ];

  const handleVerClick = () => {
    setActiveTab('about');
    setTimeout(() => {
      const el = document.getElementById('artists-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCtaBuy = async () => {
    if (!uiRef.current) return;
    
    // IDs de variantes para agregar al carrito
    const eliteVariantId = 'gid://shopify/ProductVariant/45803273158927';
    const platinumVariantId = 'gid://shopify/ProductVariant/45826978513167';
    const variantId = variant === 'platinum' ? platinumVariantId : eliteVariantId;

    try {
      // Intentamos agregar a través del componente de producto o directamente al carrito
      const cart = uiRef.current.components.cart[0];
      const productComp = uiRef.current.components.product.find((p: any) => p.id[0] === productData.shopifyId);
      
      if (productComp) {
        await productComp.addVariantToCart({ id: variantId, quantity: 1 });
      } else if (cart) {
        await cart.addVariantToCart({ id: variantId, quantity: 1 });
      }
      
      uiRef.current.components.cart[0]?.open();
    } catch (e) {
      console.error("Error adding to cart:", e);
      document.getElementById(productData.nodeId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const renderTagline = () => {
    const text = t('bundle.title_shimmer');
    const artists = ["RAUW ALEJANDRO", "DUKI", "EMILIA MERNES", "MUCHOS MÁS", "RAUW ALEJANDRO,", "DUKI,", "EMILIA MERNES,", "MANY MORE"];
    let parts: (string | React.ReactNode)[] = [text];
    artists.forEach(artist => {
      const newParts: (string | React.ReactNode)[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`(${artist})`, 'g');
          const split = part.split(regex);
          split.forEach((s) => {
            if (s === artist) newParts.push(<span key={Math.random()} className="text-violet-shimmer">{s}</span>);
            else if (s !== "") newParts.push(s);
          });
        } else newParts.push(part);
      });
      parts = newParts;
    });
    return parts;
  };

  return (
    <div className="bg-black pb-32">
      <div className="relative pt-6 sm:pt-8 pb-0 overflow-hidden">
        <div className="w-full lg:container lg:mx-auto lg:max-w-7xl lg:px-4">
          <div className="flex flex-col items-center">
            
            {/* Top Badges */}
            <FadeIn delay={50} className="w-full flex flex-col items-center gap-1 mb-2.5 sm:mb-3.5 px-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/30">
                <span className="text-purple-400 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.12em] flex items-center gap-1.5">
                   <ShieldCheck className="w-3.5 h-3.5" /> {productData.resourcesLabel}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-emerald-400 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.12em] flex items-center gap-1.5">
                   <Clock className="w-3.5 h-3.5" /> {t('bundle.limited_offer')}
                </span>
              </div>
            </FadeIn>

            {/* Main Product Card */}
            <FadeIn delay={200} className="w-full max-w-7xl mx-auto px-4 lg:px-0 mb-3 sm:mb-4">
              <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch">
                <div className="w-full lg:w-[72%] aspect-[5/4] sm:aspect-square lg:aspect-auto relative bg-black border-r border-white/5 overflow-hidden">
                  <img src={productData.image} alt={productData.name} className="w-full h-full object-cover lg:object-contain bg-black transition-transform duration-700 hover:scale-[1.01]" />
                </div>
                <div className="w-full lg:w-[28%] p-6 sm:p-10 lg:p-6 xl:p-8 flex flex-col justify-center relative group">
                  <h2 className="text-[10px] sm:text-xs lg:text-[11px] xl:text-[12px] font-black text-white uppercase tracking-tight mb-4 text-center lg:text-left drop-shadow-xl opacity-80">
                    {variant === 'platinum' ? t('product.platinum_name') : t('bundle.title_main')}
                  </h2>
                  
                  {/* RESEÑAS Y ESTRELLAS */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 mb-4 bg-white/5 w-fit px-2.5 py-1 rounded-full border border-white/10 mx-auto lg:mx-0">
                    <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-emerald-500 fill-current" />)}</div>
                    <span className="text-white text-[7px] font-black tracking-tight uppercase flex items-center gap-1">
                      <span>Excellent <span className="text-emerald-500">4.9/5</span></span>
                      <span className="text-emerald-400">{productData.reviewsCount} {t('store.reviews_verified')}</span>
                    </span>
                  </div>

                  {/* LISTA DE BENEFICIOS */}
                  <div className="w-full space-y-1.5 mb-5">
                    {[t('bundle.benefit1'), t('bundle.benefit2'), t('bundle.benefit3'), t('bundle.benefit4')].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-left">
                        <Check className="w-3 h-3 text-emerald-500 mt-0.5" />
                        <span className="text-gray-300 text-[9px] font-bold uppercase tracking-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center lg:items-start gap-2 w-full">
                    <div className="flex items-baseline gap-2">
                      <span className="text-emerald-500 text-5xl sm:text-5xl xl:text-6xl font-black tracking-tighter leading-none">${productData.newPrice}</span>
                      <span className="text-gray-500 line-through text-[10px] font-bold opacity-50">${productData.oldPrice}</span>
                    </div>
                    
                    <div className="mt-1 flex items-center gap-1.5">
                       <Clock className="w-2.5 h-2.5 text-emerald-500 animate-pulse" />
                       <CountdownTimer />
                    </div>
                    
                    <div id={productData.nodeId} className="w-full"></div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={300} className="w-full text-center mb-2 px-4 max-w-4xl">
              <p className="text-[12px] sm:text-[15px] lg:text-[17px] font-black uppercase tracking-tight text-white/90">
                {renderTagline()}
                <button onClick={handleVerClick} className="text-red-600 hover:text-red-500 ml-2 inline-flex items-center gap-1 border-b border-red-600 pb-0.5 font-black">
                  {t('bundle.ver_mas')} <span>→</span>
                </button>
              </p>
            </FadeIn>
            <SoftwareLogos />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl mt-2 sm:mt-4">
        {variant !== 'platinum' && (
          <FadeIn className="mb-10 text-center">
            <h2 className="text-3xl sm:text-7xl font-black uppercase tracking-tighter leading-none">
              <span className="text-white opacity-40">{t('bundle.includes')}</span> <br />
              <span className="text-red-600 italic">{t('bundle.this_pack')}</span>
            </h2>
          </FadeIn>
        )}

        <div className="space-y-0">
          {variant !== 'platinum' && categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="pt-10 mb-10">
              {cat.title && (
                <FadeIn>
                  <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-8 inline-block relative">
                    {cat.title}
                    <div className="absolute -bottom-2 left-0 w-24 h-1 bg-purple-600" />
                  </h2>
                </FadeIn>
              )}

              <div className="flex flex-col gap-12 sm:gap-16">
                <div className="w-full">
                  <div className="text-[6px] sm:text-[8px] text-white/30 font-black uppercase text-left tracking-widest w-full mb-3">@PESALU</div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
                    <div className={`relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#050505] ${cat.aspect} w-full`}>
                      <img src={cat.visual} alt="VFX 1" className="w-full h-full object-cover" />
                    </div>
                    <div className={`relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#050505] ${cat.aspect} w-full`}>
                      <video src="https://res.cloudinary.com/dbu9kzomq/video/upload/v1770687966/sdwq2dewdwqew_fh4dw5.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 items-start text-center lg:text-left">
                    {cat.items.map((item, i) => (
                      <FadeIn key={i} delay={i * 30} className="flex flex-col items-center lg:items-start w-full">
                        <div className="flex flex-col items-center lg:items-start gap-1.5 group">
                          <div className="shrink-0 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                            <item.icon className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div className="flex flex-col items-center lg:items-start">
                            <h3 className="text-[13px] sm:text-base font-black text-white mb-0.5 uppercase tracking-tight leading-none text-center lg:text-left">{item.name}</h3>
                            <p className="text-gray-500 text-[10px] sm:text-xs font-light leading-snug text-center lg:text-left max-w-[210px]">{item.desc}</p>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                </div>
              </div>
            </div>
          ))}

          {/* COLOR SECTION */}
          <div className="mt-10 pt-4">
            <FadeIn>
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 mb-8 border-b border-white/10 pb-4">
                <Palette className="w-10 h-10 text-purple-500" />
                <div className="flex flex-col">
                  <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    {variant === 'platinum' ? 'DEMO DE LOS PLATINUM LUTs' : t('bundle.color_title')}
                  </h2>
                  <p className="text-[10px] sm:text-xs font-black text-purple-400 uppercase tracking-[0.2em] mt-2 text-center lg:text-left">
                    {variant === 'platinum' ? t('bundle.platinum_demo_subtitle') : ''}
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
              <FadeIn>
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                   <BeforeAfterSlider 
                     beforeImage="https://res.cloudinary.com/dbu9kzomq/image/upload/v1769797395/1_SIN_COLORR_duqhlg.png" 
                     afterImage="https://res.cloudinary.com/dbu9kzomq/image/upload/v1769797395/1_COLORR_pys6wd.png"
                   />
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)]">
                   <BeforeAfterSlider 
                     beforeImage="https://res.cloudinary.com/dbu9kzomq/image/upload/v1769797197/2_SIN_COLOR_vwa1ek.png" 
                     afterImage="https://res.cloudinary.com/dbu9kzomq/image/upload/v1769797198/2_COLOR_pb66sw.png"
                   />
                </div>
              </FadeIn>
            </div>
          </div>

          {/* SFX SECTION - ONLY FOR ELITE PACK */}
          {variant === 'elite' && (
            <div className="mt-20 pt-10">
              <FadeIn>
                <div className="flex items-center justify-center lg:justify-start gap-5 mb-8 border-b border-white/10 pb-4">
                  <Volume2 className="w-10 h-10 text-emerald-500" />
                  <h2 className="text-3xl sm:text-6xl font-black text-white uppercase tracking-tighter">
                    {t('sfx.title')}
                  </h2>
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl group">
                  <img 
                    src="https://res.cloudinary.com/dbu9kzomq/image/upload/v1769810913/mjghkjmgjhmg_rc8xe5.png" 
                    alt="Sound Effects Pack" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </FadeIn>
            </div>
          )}
        </div>

        <div className="mt-16 sm:mt-24 max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-4">{t('faq.title')}</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto" />
          </FadeIn>
          <div className="space-y-4">
            <FAQItem question={t('faq.q1')} answer={t('faq.a1')} />
            <FAQItem question={t('faq.q2')} answer={t('faq.a2')} />
          </div>
        </div>

        <FadeIn delay={200} className="mt-32 text-center">
           <div className="bg-gradient-to-br from-purple-900/40 to-black border border-white/10 rounded-[3rem] p-10 sm:p-32 shadow-2xl">
             <h2 className="text-3xl sm:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">{t('bundle.cta_ready')} <br /> <span className="text-purple-500 italic">{t('bundle.cta_level')}</span></h2>
             <button 
               onClick={handleCtaBuy}
               className="bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-[0_0_50px_rgba(34,197,94,0.6)] px-8 py-6 text-lg sm:text-3xl rounded-full font-black uppercase tracking-tighter flex items-center justify-center gap-4 mx-auto transition-all active:scale-95"
             >
               {t('bundle.cta_btn')} <ChevronRight className="w-8 h-8" />
             </button>
           </div>
        </FadeIn>
      </div>
    </div>
  );
};
