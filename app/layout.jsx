import { Outfit } from 'next/font/google';
import './globals.css';
import CookieConsent from '../components/CookieConsent';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
});

export const metadata = {
    title: 'By Coach Quiroz | Entrenamiento de Tenis de Alto Rendimiento',
    description:
        'Lleva tu tenis al siguiente nivel con Andrés Quiroz. Entrenamiento de alto rendimiento, análisis biomecánico y estrategia competitiva en Chile.',
    icons: {
        icon: '/images/logo.jpeg',
        apple: '/images/logo.jpeg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="scroll-smooth">
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV6XQMSK');`,
                    }}
                />
                {/* End Google Tag Manager */}

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-0XVWQ0THPW"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0XVWQ0THPW');
                        `,
                    }}
                />

                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body
                className={`${outfit.className} bg-[#0a0a0a] text-white antialiased overflow-x-hidden`}
            >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WV6XQMSK"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
