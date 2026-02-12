import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClashiVFX | Ofertas Exclusivas",
  description:
    "Catalogo exclusivo de recursos para editores con descuentos de hasta el 85%.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" style={{ scrollBehavior: "smooth" }}>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1594983758216504');
            console.log('META PIXEL INICIALIZADO CORRECTAMENTE');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent', {
              content_name: 'Catalogo de Packs VFX',
              content_type: 'product_group'
            });
          `}
        </Script>

        {/* AddToCart Tracking Script */}
        <Script id="add-to-cart-tracker" strategy="afterInteractive">
          {`
            (function() {
              console.log('PIXEL ADD-TO-CART LISTENER ACTIVADO - MODO ROBUSTO');
              function parseCurrency(str) {
                if (!str) return 0;
                var cleaned = str.replace(/[^\\d.,]/g, '').replace(',', '.');
                return parseFloat(cleaned) || 0;
              }
              function findPriceInContainer(container) {
                var elements = container.querySelectorAll('span, p, div');
                for (var i = 0; i < elements.length; i++) {
                  var el = elements[i];
                  var text = el.innerText;
                  if (text.indexOf('$') > -1) {
                    var style = window.getComputedStyle(el);
                    var isStruck = style.textDecoration.indexOf('line-through') > -1 || 
                                   el.closest('.line-through') || 
                                   el.closest('s') || 
                                   el.closest('del');
                    if (!isStruck) return text;
                  }
                }
                return "";
              }
              document.addEventListener('click', function(e) {
                var button = e.target.closest('button');
                if (!button) return;
                var btnText = (button.innerText || button.textContent).toUpperCase();
                if (btnText.indexOf('AGREGAR') > -1 || btnText.indexOf('ADD') > -1) {
                  console.log('Boton detectado, buscando datos...');
                  var container = button.closest('.group') || 
                                  button.closest('div[class*="bg-white/"]') || 
                                  button.closest('div[class*="bg-[#"]') ||
                                  button.closest('div[class*="rounded-"]') ||
                                  button.closest('.lg\\\\:col-span-4');
                  if (container) {
                    var titleEl = container.querySelector('h1, h2, h3');
                    var title = titleEl ? titleEl.innerText.trim() : 'Producto Packs VFX';
                    var priceRaw = findPriceInContainer(container);
                    var finalPrice = parseCurrency(priceRaw);
                    console.log('Datos encontrados:', { nombre: title, precio_raw: priceRaw, precio_final: finalPrice });
                    if (typeof fbq === 'function') {
                      fbq('track', 'AddToCart', { content_name: title, value: finalPrice, currency: 'USD' });
                      console.log('Evento AddToCart enviado exitosamente.');
                    }
                  }
                }
              }, true);
            })();
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1594983758216504&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${manrope.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
