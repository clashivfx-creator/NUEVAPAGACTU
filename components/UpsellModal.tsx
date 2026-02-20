
import React, { useEffect, useContext, useState, useMemo } from 'react';
import { X, Zap, Flame, Clock, ShoppingCart } from 'lucide-react';
import { LanguageContext } from '../App';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProductId?: string | null;
}

const ALL_PRODUCTS = [
  { shopifyId: '8476233466031', name: '2026 Ultimate Editing Pack', nameKey: 'product.ultimate_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770737015/aaaaaaaaaxa_0-00-00-00_.00_00_00_00.Imagen_fija001_hmnkuf.png', oldPrice: '690', newPrice: '29.99' },
  { shopifyId: '8480949338287', name: 'PLATINUM LUTs PACK', nameKey: 'product.platinum_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770735767/Gemini_Generated_Image_415qgo415qgo415q_0-00-00-00_ddzyye.png', oldPrice: '590', newPrice: '9' },
  { shopifyId: '8170902323375', name: 'PACK AVANZADO', nameKey: 'product.advanced_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787956/PACK_AVANZADO_krghxs.gif', oldPrice: '79.99', newPrice: '19.99' },
  { shopifyId: '8239170584751', name: 'REEL EDITABLE', nameKey: 'product.reel_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1770334329/ssstik.io__clashivfx_1765467778171_sdxohb.gif', oldPrice: '49.99', newPrice: '19.99' },
  { shopifyId: '8211512656047', name: 'MIXED MEDIA', nameKey: 'product.mixed_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787956/mixmedia_xcb5po.gif', oldPrice: '49.99', newPrice: '14.99' },
  { shopifyId: '8448020152495', name: 'YEAT PROJECT', nameKey: 'product.yeat_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/YEAT_oqvxyf.gif', oldPrice: '49.99', newPrice: '19.99' },
  { shopifyId: '8476755034287', name: 'SHAKES', nameKey: 'product.shakes_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/SHAKES_dimjeh.gif', oldPrice: '49.99', newPrice: '9.99' },
  { shopifyId: '8277720498351', name: 'TITULO 3D', nameKey: 'product.title3d_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787941/TITULO_xecwfj.gif', oldPrice: '19.99', newPrice: '4.99' },
  { shopifyId: '8473627754671', name: 'ULTRAWORKFLOW', nameKey: 'product.workflow_name', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787944/ultraworkflow_ocxa8x.gif', oldPrice: '50.00', newPrice: '39.99' },
];

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose, selectedProductId }) => {
  const { lang, t } = useContext(LanguageContext);
  const [countdown, setCountdown] = useState(300);

  const selectedProduct = useMemo(() => {
    return ALL_PRODUCTS.find(p => p.shopifyId === selectedProductId);
  }, [selectedProductId]);

  const otherProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => p.shopifyId !== selectedProductId);
  }, [selectedProductId]);

  // Countdown timer for urgency
  useEffect(() => {
    if (!isOpen) { setCountdown(300); return; }
    const timer = setInterval(() => {
      setCountdown(prev => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  // Shopify buttons
  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const initShopify = () => {
      if (cancelled) return;
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) return;
      const client = window.ShopifyBuy.buildClient({
        domain: 'e08ff1-xx.myshopify.com',
        storefrontAccessToken: '64026182325df844d6b96ce1f55661c5',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        if (cancelled) return;
        
        // Initialize selected product button (top)
        if (selectedProduct) {
          const selectedNode = document.getElementById('upsell-selected-product');
          if (selectedNode && !selectedNode.hasAttribute('data-shopify-initialized')) {
            ui.createComponent('product', {
              id: selectedProduct.shopifyId,
              node: selectedNode,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "events": {
                    "addVariantToCart": (product: any) => {
                      const title = product?.model?.title || selectedProduct.name;
                      const price = product?.model?.selectedVariant?.price?.amount || '0';
                      if (typeof (window as any).fbq === 'function') {
                        (window as any).fbq('track', 'AddToCart', { content_name: title, value: parseFloat(price), currency: 'USD' });
                      }
                    },
                    "afterAddVariantToCart": () => {
                      onClose();
                    }
                  },
                  "styles": {
                    "button": {
                      "font-family": "Manrope, sans-serif",
                      "font-weight": "900",
                      "background-color": "#22c55e",
                      "border": "2px solid #22c55e",
                      "border-radius": "50px",
                      "font-size": "13px",
                      "padding": "14px 28px",
                      ":hover": { "background-color": "#16a34a", "border-color": "#16a34a" }
                    }
                  },
                  "contents": { "img": false, "title": false, "price": false },
                  "text": { "button": lang === 'es' ? "AGREGAR" : "ADD TO CART" }
                }
              }
            });
            selectedNode.setAttribute('data-shopify-initialized', 'true');
          }
        }

        // Initialize other products
        otherProducts.forEach((p, idx) => {
          const nodeId = `upsell-dynamic-${idx}`;
          const node = document.getElementById(nodeId);
          if (node && !node.hasAttribute('data-shopify-initialized')) {
            ui.createComponent('product', {
              id: p.shopifyId,
              node: node,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "events": {
                    "addVariantToCart": (product: any) => {
                      const title = product?.model?.title || p.name;
                      const price = product?.model?.selectedVariant?.price?.amount || '0';
                      if (typeof (window as any).fbq === 'function') {
                        (window as any).fbq('track', 'AddToCart', { content_name: title, value: parseFloat(price), currency: 'USD' });
                      }
                    },
                    "afterAddVariantToCart": () => {
                      onClose();
                    }
                  },
                  "styles": {
                    "button": {
                      "font-family": "Manrope, sans-serif",
                      "font-weight": "900",
                      "background-color": "#22c55e",
                      "border-radius": "40px",
                      "font-size": "11px",
                      "padding": "10px 16px",
                      ":hover": { "background-color": "#16a34a" }
                    }
                  },
                  "contents": { "img": false, "title": false, "price": false },
                  "text": { "button": lang === 'es' ? "AGREGAR -40%" : "ADD -40%" }
                },
                "cart": {
                  "contents": { "title": false },
                  "styles": {
                    "cart": { "background-color": "#000000" },
                    "discountText": { "color": "#22c55e", "font-weight": "900", "text-shadow": "0 0 10px rgba(34, 197, 94, 0.7)" },
                    "discountAmount": { "color": "#22c55e", "font-weight": "900", "text-shadow": "0 0 10px rgba(34, 197, 94, 0.7)" },
                    "discountIcon": { "fill": "#22c55e" },
                    "subtotal": { "color": "#ffffff", "font-weight": "900" }
                  }
                },
                "lineItem": {
                  "styles": {
                    "title": { "color": "#ffffff" },
                    "price": { "color": "#22c55e", "font-weight": "900" },
                    "discount": { "color": "#22c55e", "font-weight": "900", "text-shadow": "0 0 8px rgba(34, 197, 94, 0.5)" },
                    "quantity": { "color": "#ffffff", "font-weight": "900" },
                    "quantityIncrement": { "color": "#ffffff", "border-color": "#ffffff" },
                    "quantityDecrement": { "color": "#ffffff", "border-color": "#ffffff" }
                  }
                }
              }
            });
            node.setAttribute('data-shopify-initialized', 'true');
          }
        });
      });
    };

    const loadScript = () => {
      const existing = document.querySelector(`script[src="${scriptURL}"]`);
      if (existing) {
        if (window.ShopifyBuy && window.ShopifyBuy.UI) initShopify();
        else existing.addEventListener('load', initShopify);
        return;
      }
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.crossOrigin = "anonymous";
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = initShopify;
    };

    // Small delay to ensure DOM nodes are rendered
    const timer = setTimeout(loadScript, 100);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      const selectedNode = document.getElementById('upsell-selected-product');
      if (selectedNode) {
        selectedNode.innerHTML = '';
        selectedNode.removeAttribute('data-shopify-initialized');
      }
      otherProducts.forEach((_, idx) => {
        const node = document.getElementById(`upsell-dynamic-${idx}`);
        if (node) {
          node.innerHTML = '';
          node.removeAttribute('data-shopify-initialized');
        }
      });
    };
  }, [isOpen, lang, selectedProduct, otherProducts, onClose]);

  if (!isOpen) return null;

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center px-3 sm:px-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#0a0a0c] border border-red-500/30 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.2)] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
        {/* Decorative glows */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-600/10 blur-[80px] rounded-full pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-500 hover:text-white transition-colors z-50 p-2"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <div className="p-5 sm:p-10 lg:p-14">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            {/* Flash badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-red-600/20 border border-red-500/40 text-red-500 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 animate-pulse">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              {lang === 'es' ? 'OFERTA RELAMPAGO' : 'FLASH SALE'}
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3 sm:mb-4">
              {lang === 'es' ? 'AGREGA OTRO PRODUCTO AL' : 'ADD ANOTHER PRODUCT AT'} <br />
              <span className="text-emerald-500 text-4xl sm:text-6xl lg:text-7xl italic drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">40% OFF</span>
            </h2>

            {/* Countdown */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 border border-white/10 mt-2">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
              <span className="text-white text-xs sm:text-sm font-black tracking-tight">
                {lang === 'es' ? 'EXPIRA EN' : 'EXPIRES IN'}:
              </span>
              <span className="text-red-500 text-sm sm:text-lg font-black tabular-nums">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Selected Product - Top Section */}
          {selectedProduct && (
            <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-emerald-950/20 border-2 border-emerald-500/40 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden shrink-0">
                  <img src={selectedProduct.img} alt={t(selectedProduct.nameKey)} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase mb-2">
                    {t(selectedProduct.nameKey)}
                  </h3>
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start mb-4">
                    <span className="text-gray-600 line-through text-sm font-bold">${selectedProduct.oldPrice}</span>
                    <span className="text-emerald-500 text-2xl font-black">${selectedProduct.newPrice}</span>
                  </div>
                  <div id="upsell-selected-product" className="flex justify-center sm:justify-start" />
                </div>
              </div>
            </div>
          )}

          {/* Separator */}
          {selectedProduct && (
            <div className="mb-6 sm:mb-8 text-center relative overflow-hidden py-4">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
              <p className="relative text-white text-sm sm:text-base uppercase tracking-[0.25em] font-black bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-pulse">
                {lang === 'es' ? 'O AGREGA MÁS CON 40% OFF' : 'OR ADD MORE WITH 40% OFF'}
              </p>
            </div>
          )}

          {/* Other Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {otherProducts.map((prod, idx) => (
              <div key={prod.shopifyId} className="bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center group hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <div className="relative aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <img src={prod.img} alt={t(prod.nameKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] sm:text-[11.5px] font-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full uppercase shadow-xl animate-pulse">
                    -40%
                  </div>
                </div>
                <h3 className="text-[10px] sm:text-xs font-black text-white uppercase mb-1 text-center truncate w-full">
                  {t(prod.nameKey)}
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-gray-600 line-through text-[9px] sm:text-[10px] font-bold">${prod.newPrice}</span>
                  <span className="text-emerald-500 text-sm sm:text-base font-black">${(parseFloat(prod.newPrice) * 0.6).toFixed(2)}</span>
                </div>
                <div id={`upsell-dynamic-${idx}`} className="w-full flex justify-center" />
              </div>
            ))}
          </div>

          {/* Skip button */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-10 border-t border-white/5 text-center">
            <button
              onClick={onClose}
              className="group flex items-center gap-2 mx-auto text-gray-600 hover:text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors"
            >
              {lang === 'es' ? 'NO GRACIAS, CONTINUAR SIN DESCUENTO' : 'NO THANKS, CONTINUE WITHOUT DISCOUNT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
