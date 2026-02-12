import React, { useEffect, useContext, useState, useMemo, useCallback } from 'react';
import { X, Zap, Flame, Clock } from 'lucide-react';
import { LanguageContext } from '../App';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  excludeProductId?: string | null;
}

const ALL_PRODUCTS = [
  { shopifyId: '8476233466031', nameKey: 'product.ultimate_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770737015/aaaaaaaaaxa_0-00-00-00_.00_00_00_00.Imagen_fija001_hmnkuf.png', oldPrice: '690', newPrice: '29.99' },
  { shopifyId: '8480949338287', nameKey: 'product.platinum_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770735767/Gemini_Generated_Image_415qgo415qgo415q_0-00-00-00_ddzyye.png', oldPrice: '590', newPrice: '9' },
  { shopifyId: '8170902323375', nameKey: 'product.advanced_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787956/PACK_AVANZADO_krghxs.gif', oldPrice: '79.99', newPrice: '19.99' },
  { shopifyId: '8239170584751', nameKey: 'product.reel_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770334329/ssstik.io__clashivfx_1765467778171_sdxohb.gif', oldPrice: '49.99', newPrice: '19.99' },
  { shopifyId: '8211512656047', nameKey: 'product.mixed_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787956/mixmedia_xcb5po.gif', oldPrice: '49.99', newPrice: '14.99' },
  { shopifyId: '8448020152495', nameKey: 'product.yeat_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/YEAT_oqvxyf.gif', oldPrice: '49.99', newPrice: '19.99' },
  { shopifyId: '8476755034287', nameKey: 'product.shakes_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/SHAKES_dimjeh.gif', oldPrice: '49.99', newPrice: '9.99' },
  { shopifyId: '8277720498351', nameKey: 'product.title3d_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787941/TITULO_xecwfj.gif', oldPrice: '19.99', newPrice: '4.99' },
  { shopifyId: '8473627754671', nameKey: 'product.workflow_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787944/ultraworkflow_ocxa8x.gif', oldPrice: '50.00', newPrice: '39.99' },
];

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, excludeProductId }) => {
  const { lang, t } = useContext(LanguageContext);
  const [countdown, setCountdown] = useState(120);
  const [addingId, setAddingId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => p.shopifyId !== excludeProductId);
  }, [excludeProductId]);

  // Animate in
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  // Countdown
  useEffect(() => {
    if (!isOpen) { setCountdown(120); return; }
    const timer = setInterval(() => {
      setCountdown(prev => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleAddToCart = useCallback(async (product: typeof ALL_PRODUCTS[0]) => {
    setAddingId(product.shopifyId);
    try {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      const waitForShopify = (): Promise<void> => new Promise((resolve) => {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) { resolve(); return; }
        const existing = document.querySelector(`script[src="${scriptURL}"]`);
        if (existing) { existing.addEventListener('load', () => resolve()); return; }
        const script = document.createElement('script');
        script.async = true; script.src = scriptURL; script.crossOrigin = "anonymous";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
      await waitForShopify();
      const client = window.ShopifyBuy.buildClient({
        domain: 'e08ff1-xx.myshopify.com',
        storefrontAccessToken: '64026182325df844d6b96ce1f55661c5',
      });
      const shopifyProduct = await client.product.fetch(`gid://shopify/Product/${product.shopifyId}`);
      const variant = shopifyProduct.variants[0];
      let checkoutId: string | null = null;
      try { checkoutId = localStorage.getItem('shopify_checkout_id'); } catch {}
      let checkout;
      if (checkoutId) {
        try { checkout = await client.checkout.fetch(checkoutId); } catch {}
      }
      if (!checkout) {
        checkout = await client.checkout.create();
        try { localStorage.setItem('shopify_checkout_id', checkout.id); } catch {}
      }
      await client.checkout.addLineItems(checkout.id, [{ variantId: variant.id, quantity: 1 }]);

      // Track pixel
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'AddToCart', {
          content_name: t(product.nameKey),
          value: parseFloat(product.newPrice),
          currency: 'USD'
        });
      }

      // Open the Shopify cart drawer if it exists
      const cartToggle = document.querySelector('.shopify-buy__cart-toggle') as HTMLElement;
      if (cartToggle) cartToggle.click();

      onClose();
    } catch (e) {
      console.error('Error adding to cart from upsell:', e);
    } finally {
      setAddingId(null);
    }
  }, [t, onClose]);

  if (!isOpen) return null;

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center px-3 sm:px-4">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-4xl bg-[#0a0a0c] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] max-h-[90vh] flex flex-col transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

        {/* Red top accent bar */}
        <div className="w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-600 hover:text-white transition-colors z-50 p-1.5 rounded-full hover:bg-white/10"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-5 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="text-center mb-5 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-500 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] mb-4 animate-pulse">
              <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
              {lang === 'es' ? 'OFERTA RELAMPAGO' : 'FLASH SALE'}
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2 sm:mb-3">
              {lang === 'es' ? 'AGREGA OTRO PRODUCTO AL' : 'ADD ANOTHER PRODUCT AT'}
            </h2>
            <p className="text-emerald-500 text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              40% OFF
            </p>

            {/* Countdown */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mt-4">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-500 animate-pulse" />
              <span className="text-white text-[10px] sm:text-xs font-black tracking-tight">
                {lang === 'es' ? 'EXPIRA EN' : 'EXPIRES IN'}:
              </span>
              <span className="text-red-500 text-xs sm:text-sm font-black tabular-nums">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {filteredProducts.map((prod) => {
              const isAdding = addingId === prod.shopifyId;
              return (
                <div key={prod.shopifyId} className="bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex flex-col items-center group hover:border-emerald-500/40 transition-all duration-300">
                  <div className="relative aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden mb-2.5 sm:mb-3 bg-black">
                    <img src={prod.img} alt={t(prod.nameKey)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-red-600 text-white text-[7px] sm:text-[9px] font-black px-2 py-0.5 rounded-full uppercase animate-pulse">
                      -40%
                    </div>
                  </div>
                  <h3 className="text-[9px] sm:text-[11px] font-black text-white uppercase mb-1 text-center leading-tight line-clamp-2 min-h-[2em]">
                    {t(prod.nameKey)}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-2.5">
                    <span className="text-gray-600 line-through text-[8px] sm:text-[10px] font-bold">${prod.oldPrice}</span>
                    <span className="text-emerald-500 text-sm sm:text-base font-black">${prod.newPrice}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(prod)}
                    disabled={isAdding}
                    className="w-full py-2 sm:py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider rounded-full transition-all active:scale-95"
                  >
                    {isAdding
                      ? (lang === 'es' ? 'AGREGANDO...' : 'ADDING...')
                      : (lang === 'es' ? 'AGREGAR -40%' : 'ADD -40%')}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Skip */}
          <div className="mt-6 sm:mt-8 pt-5 border-t border-white/5 text-center">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.15em] transition-colors"
            >
              {lang === 'es' ? 'NO GRACIAS, CONTINUAR SIN DESCUENTO' : 'NO THANKS, CONTINUE WITHOUT DISCOUNT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
