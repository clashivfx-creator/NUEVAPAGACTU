
import React, { useEffect, useContext } from 'react';
import { X, Zap, Flame, Sparkles } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { LanguageContext } from '../App';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    if (!isOpen) return;

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    const upsellProducts = [
      { id: '8211512656047', node: 'upsell-1', name: 'Mixed Media' },
      { id: '8448020152495', node: 'upsell-2', name: 'Yeat Project' },
      { id: '8476755034287', node: 'upsell-3', name: 'Shakes' },
      { id: '8277720498351', node: 'upsell-4', name: 'Título 3D' }
    ];

    const initShopify = () => {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) return;
      const client = window.ShopifyBuy.buildClient({
        domain: 'e08ff1-xx.myshopify.com',
        storefrontAccessToken: '64026182325df844d6b96ce1f55661c5',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        upsellProducts.forEach(p => {
          const node = document.getElementById(p.node);
          if (node && !node.hasAttribute('data-shopify-initialized')) {
            ui.createComponent('product', {
              id: p.id,
              node: node,
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "styles": {
                    "button": {
                      "font-family": "Manrope, sans-serif",
                      "font-weight": "900",
                      "background-color": "#22c55e",
                      "border-radius": "40px",
                      "font-size": "12px",
                      "padding": "10px 20px",
                      ":hover": { "background-color": "#16a34a" }
                    }
                  },
                  "contents": { "img": false, "title": false, "price": false },
                  "text": { "button": lang === 'es' ? "AGREGAR" : "ADD" }
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
        if (window.ShopifyBuy && window.ShopifyBuy.UI) {
          initShopify();
        } else {
          existing.addEventListener('load', initShopify);
        }
        return;
      }
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      script.crossOrigin = "anonymous";
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = initShopify;
    };

    loadScript();
  }, [isOpen, lang]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />
      
      <FadeIn className="relative w-full max-w-5xl bg-[#0a0a0c] border border-red-500/30 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(239,68,68,0.2)]">
        {/* Decorative corner glows */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/20 blur-[80px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-600/10 blur-[80px] rounded-full" />

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-50 p-2"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="p-8 sm:p-14">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-600/20 border border-red-500/40 text-red-500 text-xs font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
              <Flame className="w-4 h-4 fill-current" />
              OFERTA RELÁMPAGO
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              {lang === 'es' ? '¡AGREGA UN PRODUCTO MÁS Y RECIBE' : 'ADD ONE MORE PRODUCT AND GET'} <br/>
              <span className="text-emerald-500 text-5xl sm:text-7xl italic drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">30% DE DESCUENTO</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-sm">
              {lang === 'es' ? 'Válido solo al combinar con el pack principal' : 'Valid only when combined with the main pack'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { id: 'upsell-1', name: 'Mixed Media', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787956/mixmedia_xcb5po.gif' },
              { id: 'upsell-2', name: 'Yeat Project', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/YEAT_oqvxyf.gif' },
              { id: 'upsell-3', name: 'Shakes', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787949/SHAKES_dimjeh.gif' },
              { id: 'upsell-4', name: 'Título 3D', img: 'https://res.cloudinary.com/dbu9kzomq/image/upload/v1769787941/TITULO_xecwfj.gif' }
            ].map((prod) => (
              <div key={prod.id} className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 flex flex-col items-center group hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-xl">
                    -30%
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-white uppercase mb-4 text-center truncate w-full">
                  {prod.name}
                </h3>
                <div id={prod.id} className="w-full flex justify-center" />
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/5 text-center">
            <button 
              onClick={onClose}
              className="group flex items-center gap-2 mx-auto text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
            >
              {lang === 'es' ? 'NO GRACIAS, QUIERO PAGAR EL PRECIO COMPLETO' : 'NO THANKS, I WANT TO PAY FULL PRICE'}
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
