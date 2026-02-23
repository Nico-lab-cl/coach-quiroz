import { Outfit } from 'next/font/google';
import './globals.css';

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
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body
                className={`${outfit.className} bg-[#0a0a0a] text-white antialiased overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
