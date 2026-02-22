
import React, { useContext } from 'react';
import { FadeIn } from './ui/FadeIn';
import { ShieldCheck, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { LanguageContext } from '../App';

export const CustomCheckout: React.FC = () => {
  const { t, setActiveTab } = useContext(LanguageContext);

  return (
    <div className="bg-black min-h-screen pb-32 pt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={() => setActiveTab('store')}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a la tienda
        </button>

        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
            {t('checkout.title')}
          </h1>
          <p className="text-emerald-500 font-bold tracking-widest uppercase text-xs sm:text-sm animate-pulse">
            {t('checkout.subtitle')}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={100} className="space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-emerald-500" />
                Método de Pago
              </h3>
              <div className="space-y-4">
                {/* Aquí es donde insertarías tus botones de Stripe, PayPal, o tu lógica personalizada */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center text-gray-400 font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all cursor-pointer">
                  Diseña aquí tu pasarela personalizada
                </div>
                <button className="w-full py-6 rounded-2xl bg-emerald-500 text-black font-black uppercase tracking-tighter text-xl hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  CONTINUAR CON EL PAGO
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
            </div>
          </FadeIn>

          <FadeIn delay={200} className="space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-black text-white uppercase mb-6">Resumen de Seguridad</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm">Garantía de Satisfacción</h4>
                    <p className="text-gray-500 text-xs mt-1">Si los recursos no cumplen tus expectativas, soporte 24/7 disponible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm">Encriptación de Nivel Bancario</h4>
                    <p className="text-gray-500 text-xs mt-1">Tus datos están protegidos por tecnología SSL de 256 bits.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20">
               <p className="text-emerald-500 text-center text-[10px] font-black uppercase tracking-[0.2em]">
                 ⚠️ Atención: Los descuentos aplicados expiran al cerrar esta ventana.
               </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
