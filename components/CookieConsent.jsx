'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already consented
        const hasConsented = localStorage.getItem('cookie_consent');
        if (!hasConsented) {
            // Add a small delay for a smoother entrance
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-fade-in-up">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-black-900/95 backdrop-blur-md border border-gold-500/30 p-6 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-gold-500 font-bold mb-1">Aviso de Cookies</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia en nuestra web, analizar el tráfico y personalizar el contenido. Al continuar navegando, consideramos que aceptas su uso.
                    </p>
                </div>
                <div className="flex-shrink-0 flex w-full sm:w-auto mt-2 sm:mt-0">
                    <button
                        onClick={handleAccept}
                        className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-black-900 px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}
