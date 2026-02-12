
import React, { useContext, useRef, useState, useEffect, useMemo } from 'react';
import { FadeIn } from './ui/FadeIn';
import { Flame, Star, ArrowRight, Award, ShoppingCart, Clock } from 'lucide-react';
import { LanguageContext } from '../App';
import { CountdownTimer } from './BundleShowcase';

interface Product {
  id: string;
  shopifyId: string;
  nodeId: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  mediaUrl: string;
  isVideo: boolean;
  link: string;
  isBestSeller?: boolean;
  customAction?: 'elite' | 'platinum' | 'ultra' | 'detail';
  description?: string;
}

const ProductMedia: React.FC<{ url: string; isVideo: boolean; alt: string }> = ({ url, isVideo, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  if (hasError) return <div className="w-full h-full bg-black flex items-center justify-center p-6 text-center"><span className="text-gray-700 font-black text-[10px] uppercase tracking-widest">{alt}</span></div>;
  if (isVideo) {
    return (
      <div className="relative w-full h-full bg-[#0a0a0c]">
        <video ref={videoRef} src={url} autoPlay muted loop playsInline className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} onLoadedData={() => setIsLoaded(true)} onError={() => setHasError(true)} />
      </div>
    );
  }
  return <img src={url} alt={alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" onLoad={() => setIsLoaded(true)} onError={() => setHasError(true)} />;
};

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0-1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
  </svg>
);

export const CommercialStore: React.FC = () => {
  const { t, lang, setActiveTab } = useContext(LanguageContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [addingToCart, setAddingToCart] = useState<string | null>(null);
  const shopifyClientRef = useRef<any>(null);
  const shopifyCartRef = useRef<any>(null);
  const products = useMemo<Product[]>(() => [
    { 
      id: 'ultimate-2026', 
      shopifyId: '8476233466031', 
      nodeId: 'product-component-ultimate-2026', 
      name: t('product.ultimate_name'), 
      oldPrice: '690', 
      newPrice: '29.99', 
      mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770737015/aaaaaaaaaxa_0-00-00-00_.00_00_00_00.Imagen_fija001_hmnkuf.png', 
      isVideo: false, 
      link: 'https://clashivfx.myshopify.com/products/2026-ultimate-editing-pack', 
      isBestSeller: true, 
      customAction: 'elite' 
    },
    { id: 'platinum-luts', shopifyId: '8480949338287', nodeId: 'product-component-1770349141842', name: t('product.platinum_name'), oldPrice: '590', newPrice: '9', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770735767/Gemini_Generated_Image_415qgo415qgo415q_0-00-00-00_ddzyye.png', isVideo: false, link: 'https://clashivfx.myshopify.com/products/platinum-luts-pack', isBestSeller: true, customAction: 'platinum' },
    { id: 'pack-avanzado', shopifyId: '8170902323375', nodeId: 'product-component-1770243396499', name: t('product.advanced_name'), oldPrice: '79.99', newPrice: '19.99', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787956/PACK_AVANZADO_krghxs.gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/pack-de-efectos-esenciales', isBestSeller: true, customAction: 'detail', description: t('product.advanced_desc') },
    { id: 'reel-editable', shopifyId: '8239170584751', nodeId: 'product-component-1770348980660', name: t('product.reel_name'), oldPrice: '49.99', newPrice: '19.99', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770334329/ssstik.io__clashivfx_1765467778171_sdxohb.gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/reel-editable-proyecto', customAction: 'detail', description: t('product.reel_desc') },
    { id: 'mixed-media', shopifyId: '8211512656047', nodeId: 'product-component-1770243459634', name: t('product.mixed_name'), oldPrice: '49.99', newPrice: '14.99', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787956/mixmedia_xcb5po.gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/proyecto-mixed-media', customAction: 'detail', description: t('product.mixed_desc') },
    { id: 'yeat-project-renamed', shopifyId: '8448020152495', nodeId: 'product-component-yeat-renamed', name: t('product.yeat_name'), oldPrice: '49.99', newPrice: '19.99', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/YEAT_oqvxyf.gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/proyecto-mixed-media-copia', customAction: 'detail', description: t('product.yeat_desc') },
    { id: 'shakes', shopifyId: '8476755034287', nodeId: 'product-component-1770243514859', name: t('product.shakes_name'), oldPrice: '49.99', newPrice: '9.99', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/SHAKES_dimjeh.gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/shakes', customAction: 'detail', description: t('product.shakes_desc') },
    { id: 'titulo-3d', shopifyId: '8277720498351', nodeId: 'product-component-1770243528146', name: t('product.title3d_name'), oldPrice: '19.99', newPrice: '4.99', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787941/TITULO_xecwfj.gif', isVideo: false, link: 'https://clashivfx.myshopify.com/products/pack-avanzado-copia', customAction: 'detail', description: t('product.title3d_desc') },
    { id: 'ultraworkflow', shopifyId: '8473627754671', nodeId: 'product-component-1770243547561', name: t('product.workflow_name'), oldPrice: '50.00', newPrice: '39.99', mediaUrl: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787944/ultraworkflow_ocxa8x.gif', isVideo: false, link: 'https://e08ff1-xx.myshopify.com/products/pack-avanzado-copia-1', customAction: 'ultra', description: t('product.workflow_desc') }
  ], [lang, t]);

  // Initialize Shopify client only (no iframes) for programmatic cart
  useEffect(() => {
    let cancelled = false;
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const init = () => {
      if (cancelled || !window.ShopifyBuy) return;
      const client = window.ShopifyBuy.buildClient({ domain: 'e08ff1-xx.myshopify.com', storefrontAccessToken: '64026182325df844d6b96ce1f55661c5' });
      shopifyClientRef.current = client;
    };
    const existing = document.querySelector(`script[src="${scriptURL}"]`);
    if (existing) { if (window.ShopifyBuy) init(); else existing.addEventListener('load', init); }
    else {
      const script = document.createElement('script'); script.async = true; script.src = scriptURL; script.crossOrigin = "anonymous";
      (document.head || document.body).appendChild(script);
      script.onload = init;
    }
    return () => { cancelled = true; };
  }, []);

  const handleAddToCart = async (product: Product) => {
    setAddingToCart(product.id);
    try {
      const client = shopifyClientRef.current;
      if (!client) { window.open(product.link, '_blank'); return; }
      // Fetch product and add first variant to a checkout
      const shopifyProduct = await client.product.fetch('gid://shopify/Product/' + product.shopifyId);
      const variant = shopifyProduct.variants[0];
      let checkout = shopifyCartRef.current;
      if (!checkout) {
        checkout = await client.checkout.create();
        shopifyCartRef.current = checkout;
      }
      checkout = await client.checkout.addLineItems(checkout.id, [{ variantId: variant.id, quantity: 1 }]);
      shopifyCartRef.current = checkout;
      // Fire Meta Pixel
      const title = shopifyProduct.title || product.name;
      const price = variant.price?.amount || product.newPrice;
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'AddToCart', { content_name: title, value: parseFloat(price), currency: 'USD' });
      }
      setIsCartVisible(true);
      window.dispatchEvent(new CustomEvent('openUpsellModal', { detail: { productId: product.shopifyId } }));
    } catch (err) {
      window.open(product.link, '_blank');
    } finally {
      setAddingToCart(null);
    }
  };

  const handleCustomCheckout = () => {
    const checkout = shopifyCartRef.current;
    if (checkout?.webUrl) window.open(checkout.webUrl, '_blank');
    else window.dispatchEvent(new CustomEvent('customCheckoutTrigger'));
  };
  const handleProductClick = (product: Product) => {
    if (product.customAction === 'elite') setActiveTab('products');
    else if (product.customAction === 'platinum') setActiveTab('platinum');
    else if (product.customAction === 'ultra') setActiveTab('ultra');
    else if (product.customAction === 'detail') setActiveTab('detail', product);
  };

  return (
    <div className="bg-black min-h-screen pb-24 overflow-x-hidden">
      <div className={`fixed bottom-0 left-0 w-full z-[120] p-4 bg-black/80 backdrop-blur-xl border-t border-white/10 transition-all duration-500 ${isCartVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20"><ShoppingCart className="w-6 h-6 text-white" /></div>
              <div><p className="text-white font-black uppercase text-xs tracking-widest">{t('store.cart_notification')}</p><p className="text-gray-400 font-bold text-[10px] uppercase">{t('store.auto_discounts')}</p></div>
           </div>
           <button onClick={handleCustomCheckout} className="px-10 py-4 bg-white hover:bg-gray-200 text-black font-black uppercase tracking-tighter rounded-full transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]">{t('store.pay_now')} <ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="bg-red-600 py-4 overflow-hidden relative border-y border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]"><div className="flex justify-center sm:whitespace-nowrap sm:animate-marquee"><div className="flex items-center gap-10 mx-6"><span className="text-white text-sm sm:text-xl font-black tracking-tighter uppercase italic flex items-center gap-3"><Flame className="w-5 h-5 sm:w-7 sm:h-7 fill-current animate-pulse" /> {t('store.banner')}</span></div></div></div>
      <div className="flex flex-col items-center mt-8 sm:mt-12"><p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{t('store.ends_in')}</p><CountdownTimer /></div>
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl mt-12 sm:mt-24">
        <FadeIn><div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-10"><div><h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-4">{t('store.title')}</h2><p className="text-red-500 font-bold tracking-widest uppercase text-xs sm:text-sm animate-pulse">Ofertas por tiempo limitado • Actualización 2026</p></div><div className="flex flex-col gap-3"><div className="flex flex-wrap items-center gap-4"><div className="flex gap-0.5 sm:gap-1 text-amber-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 sm:w-7 sm:h-7 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />)}</div><div className="text-white text-sm sm:text-[1.1rem] leading-none"><span className="flex items-center gap-2"><span className="opacity-80">Rated</span> <span className="font-black text-white">4.9/5 Excellent</span> <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-black text-emerald-500 text-[10px] sm:text-xs uppercase">678 {t('store.reviews_verified')}</span></span></div></div></div></div></FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 sm:gap-10">
          {products.map((product, index) => (
            <FadeIn key={product.id + lang} delay={index * 50}>
              <div className="relative group flex flex-col cursor-pointer" onClick={() => handleProductClick(product)}>
                <div className="block transition-all">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#111] border border-white/5 group-hover:border-white/50 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500">
                    <div className="absolute top-3 left-3 z-30 bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{t('store.oferta')}</div>
                    {product.isBestSeller && (
                      <div className="absolute top-3 right-3 z-30 bg-amber-500 text-black text-[7px] sm:text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                        {t('nav.bestseller')}
                      </div>
                    )}
                    <ProductMedia url={product.mediaUrl} isVideo={product.isVideo} alt={product.name} />
                  </div>
                  <div className="mt-4 sm:mt-6 text-center lg:text-left">
                    <h3 className="text-white font-black text-[12px] sm:text-lg mb-2 tracking-tight uppercase leading-tight group-hover:text-white transition-colors">{product.name}</h3>
                    <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-1 lg:gap-3 mb-1 lg:mb-4">
                      <span className="text-red-600 line-through text-[10px] sm:text-base font-black drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]">
                        ${product.oldPrice} USD
                      </span>
                      <span className="text-emerald-500 text-xl sm:text-2xl font-black tracking-tighter drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]">
                        ${product.newPrice} USD
                      </span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                      disabled={addingToCart === product.id}
                      className="w-full py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-95 disabled:opacity-60 disabled:scale-100 text-white font-black text-[11px] sm:text-[13px] uppercase tracking-wider rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    >
                      {addingToCart === product.id
                        ? (lang === 'es' ? 'AGREGANDO...' : 'ADDING...')
                        : (lang === 'es' ? 'AGREGAR' : 'ADD')}
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}><div className="mt-32 sm:mt-48 relative"><div className="absolute -inset-20 bg-[#5865F2]/20 blur-[100px] rounded-full opacity-50 pointer-events-none" /><div className="relative bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-[2.5rem] p-10 sm:p-20 overflow-hidden text-center shadow-[0_0_50px_rgba(88,101,242,0.15)]"><div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/40 text-[#5865F2] text-xs font-black uppercase tracking-widest mb-10 animate-pulse"><DiscordIcon className="w-5 h-5" />Discord VIP Community</div><h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9]">{t('store.community')}</h2><p className="text-gray-400 text-base sm:text-xl font-light max-w-3xl mx-auto mb-12 leading-relaxed">{t('store.community_desc')}</p><div className="flex flex-col items-center gap-6"><a href="https://discord.com/invite/zEcFPBqy6s" target="_blank" rel="noopener noreferrer" className="group relative"><div className="absolute -inset-1 bg-[#5865F2] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div><button className="relative px-12 py-5 sm:py-6 rounded-full bg-white hover:bg-gray-100 text-[#5865F2] font-black text-lg sm:text-2xl uppercase tracking-tighter shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-4">UNIRSE AHORA <ArrowRight className="w-6 h-6 sm:w-8 h-8 group-hover:translate-x-2 transition-transform" /></button></a></div></div></div></FadeIn>
      </div>
    </div>
  );
};
