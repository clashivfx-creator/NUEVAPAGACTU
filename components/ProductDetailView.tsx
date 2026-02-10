import React, { useContext, useEffect } from 'react';
import { FadeIn } from './ui/FadeIn';
import { ArrowLeft, Laptop, Monitor } from 'lucide-react';
import { LanguageContext } from '../App';

export const ProductDetailView: React.FC = () => {
  const { t, lang, setActiveTab, selectedProduct } = useContext(LanguageContext);
  useEffect(() => {
    if (!selectedProduct) return;
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const ShopifyBuyInit = () => {
      if (!window.ShopifyBuy || !window.ShopifyBuy.UI) return;
      const node = document.getElementById(`detail-shopify-node-${selectedProduct.id}`);
      if (node) {
        node.innerHTML = '';
        const client = window.ShopifyBuy.buildClient({ domain: 'e08ff1-xx.myshopify.com', storefrontAccessToken: '64026182325df844d6b96ce1f55661c5' });
        window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
          ui.createComponent('product', {
            id: selectedProduct.shopifyId, node: node, moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
              "product": {
                "events": {
                  "addVariantToCart": (product: any) => {
                    const title = product.model.title;
                    const price = product.model.selectedVariant.price.amount;
                    if (typeof (window as any).fbq === 'function') {
                      (window as any).fbq('track', 'AddToCart', {
                        content_name: title,
                        value: parseFloat(price),
                        currency: 'USD'
                      });
                      console.log('Shopify Detail Hook: AddToCart tracked ->', title, price);
                    }
                  }
                },
                "styles": { "button": { "font-family": "Manrope, sans-serif", "font-weight": "900", "font-size": "18px", "padding": "24px", "border-radius": "50px", "background-color": "#22c55e", "color": "#ffffff", "width": "100%", ":hover": { "background-color": "#16a34a" } } },
                "contents": { "img": false, "title": false, "price": false },
                "text": { "button": t('detail.add') }
              },
              "cart": {
                "styles": {
                  "cart": { "background-color": "#000000" },
                  "header": { "background-color": "#000000", "color": "#ffffff" },
                  "title": { "color": "#ffffff" },
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
                  "price": { "color": "#ffffff" }, 
                  "discount": { "color": "#22c55e", "font-weight": "900", "text-shadow": "0 0 8px rgba(34, 197, 94, 0.5)" },
                  "quantity": { "color": "#ffffff" }, 
                  "quantityIncrement": { "color": "#ffffff", "border-color": "#ffffff" }, 
                  "quantityDecrement": { "color": "#ffffff", "border-color": "#ffffff" },
                  "quantityInput": { "color": "#ffffff", "background": "transparent" }
                } 
              }
            }
          });
        });
      }
    };
    const loadScript = () => {
      const existing = document.querySelector(`script[src="${scriptURL}"]`);
      if (existing) { if (window.ShopifyBuy && window.ShopifyBuy.UI) ShopifyBuyInit(); else existing.addEventListener('load', ShopifyBuyInit); return; }
      const script = document.createElement('script'); script.async = true; script.src = scriptURL; script.crossOrigin = "anonymous";
      document.head.appendChild(script); script.onload = ShopifyBuyInit;
    };
    loadScript();
  }, [selectedProduct, lang, t]);
  if (!selectedProduct) { setActiveTab('store'); return null; }
  return (
    <div className="bg-black min-h-screen pb-32 pt-10 sm:pt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <button onClick={() => setActiveTab('store')} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest group"><ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {t('detail.back')}</button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn className="w-full"><div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#050505]"><img src={selectedProduct.mediaUrl} alt={selectedProduct.name} className="w-full h-full object-cover" /></div></FadeIn>
          <FadeIn delay={100} className="flex flex-col h-full justify-center">
            <h1 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tighter mb-4 italic">{selectedProduct.name}</h1>
            <div className="flex items-baseline gap-4 mb-4 lg:mb-8">
              <span className="text-emerald-500 text-6xl sm:text-6xl font-black tracking-tighter">${selectedProduct.newPrice} USD</span>
              <span className="text-gray-600 line-through text-lg font-bold">${selectedProduct.oldPrice} USD</span>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 mb-6 lg:mb-10"><div className="text-gray-300 text-lg font-medium leading-relaxed italic mb-6 whitespace-pre-line">{selectedProduct.description}</div><div className="space-y-4"><div className="flex items-center gap-4 text-gray-400"><Laptop className="w-5 h-5 text-purple-500" /><span className="text-sm font-bold uppercase tracking-tight">{t('detail.winmac')}</span></div><div className="flex items-center gap-4 text-gray-400"><Monitor className="w-5 h-5 text-purple-500" /><span className="text-sm font-bold uppercase tracking-tight">{t('detail.software')}</span></div></div></div>
            <div id={`detail-shopify-node-${selectedProduct.id}`} className="w-full -mt-2 lg:mt-0"></div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};