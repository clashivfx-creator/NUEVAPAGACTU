
import React, { useContext, useRef } from 'react';
import { FadeIn } from './ui/FadeIn';
import { ArrowLeft, Laptop, Monitor } from 'lucide-react';
import { LanguageContext } from '../App';

export const ProductDetailView: React.FC = () => {
  const { t, lang, setActiveTab, selectedProduct } = useContext(LanguageContext);
  const checkoutIdRef = useRef<string | null>(null);
  const checkoutUrlRef = useRef<string | null>(null);

  const STOREFRONT_URL = 'https://e08ff1-xx.myshopify.com/api/2024-01/graphql.json';
  const STOREFRONT_TOKEN = '64026182325df844d6b96ce1f55661c5';

  const storefrontFetch = async (query: string, variables: Record<string, any> = {}) => {
    const res = await fetch(STOREFRONT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN },
      body: JSON.stringify({ query, variables }),
    });
    return res.json();
  };

  const addToCartViaAPI = async (shopifyId: string) => {
    try {
      const productGid = `gid://shopify/Product/${shopifyId}`;
      const prodResult = await storefrontFetch(`
        query getProduct($id: ID!) { node(id: $id) { ... on Product { variants(first: 1) { edges { node { id } } } } } }
      `, { id: productGid });
      const variantId = prodResult?.data?.node?.variants?.edges?.[0]?.node?.id;
      if (!variantId) return;
      if (!checkoutIdRef.current) {
        const createResult = await storefrontFetch(`
          mutation checkoutCreate($input: CheckoutCreateInput!) { checkoutCreate(input: $input) { checkout { id webUrl } userErrors { field message } } }
        `, { input: { lineItems: [{ variantId, quantity: 1 }] } });
        const checkout = createResult?.data?.checkoutCreate?.checkout;
        if (checkout) { checkoutIdRef.current = checkout.id; checkoutUrlRef.current = checkout.webUrl; }
      } else {
        const addResult = await storefrontFetch(`
          mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) { checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) { checkout { id webUrl } userErrors { field message } } }
        `, { checkoutId: checkoutIdRef.current, lineItems: [{ variantId, quantity: 1 }] });
        const checkout = addResult?.data?.checkoutLineItemsAdd?.checkout;
        if (checkout) checkoutUrlRef.current = checkout.webUrl;
      }
    } catch (err) {}
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'AddToCart', { content_name: selectedProduct.name, value: parseFloat(selectedProduct.newPrice), currency: 'USD' });
    }
    window.dispatchEvent(new CustomEvent('openUpsellModal', { detail: { productId: selectedProduct.shopifyId } }));
    addToCartViaAPI(selectedProduct.shopifyId).catch(() => {});
  };

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
            <button
              onClick={handleAddToCart}
              className="w-full py-4 sm:py-5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-sm sm:text-lg uppercase tracking-wider rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              {lang === 'es' ? 'AGREGAR AL CARRITO' : 'ADD TO CART'}
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
