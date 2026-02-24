'use client';

import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after a small delay to not block initial render
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20vengo%20desde%20la%20página%20web%20y%20me%20gustaría%20solicitar%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300 animate-fade-in-up"
            aria-label="Chatear por WhatsApp"
        >
            <i className="fab fa-whatsapp text-3xl"></i>

            {/* Tooltip that appears on hover */}
            <span className="absolute right-16 px-4 py-2 bg-black-900/90 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-white/5">
                ¡Hola! ¿En qué te ayudo? 🎾
                {/* Tooltip triangle */}
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-[6px] border-transparent border-l-black-900/90"></span>
            </span>

            {/* Ping animation behind the button */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10"></span>
        </a>
    );
}
