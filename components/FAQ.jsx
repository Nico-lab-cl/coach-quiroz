'use client';

import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-black-800/50 rounded-xl border border-white/5 overflow-hidden transition-all duration-300">
            <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={onClick}
            >
                <h4 className="text-lg sm:text-xl font-bold text-white pr-4">{question}</h4>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-gold-500 text-black-900' : 'bg-white/5 text-gold-500'}`}>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-sm`}></i>
                </div>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: '¿Dónde encontrar academias de tenis en Viña del Mar?',
            a: 'Si buscas resultados reales y no solo pelotear, entrenamos en el Club El Refugio (Viña del Mar) y en el Club de Tenis Con Con. A diferencia de las escuelas masivas o clubes tradicionales saturados, aquí priorizamos la corrección biomecánica y táctica en grupos reducidos o clases uno a uno.'
        },
        {
            q: '¿Cuáles son las mejores escuelas de tenis en Viña del Mar?',
            a: 'La ciudad tiene clubes históricos con buena infraestructura, pero si tu objetivo es el alto rendimiento o aprender desde cero sin vicios técnicos, By Coach Quiroz te ofrece un estándar europeo. Andrés Quiroz aporta su experiencia como Head Coach en Alemania e Irlanda directamente a tu desarrollo en cancha.'
        },
        {
            q: 'Mejores instructores de tenis con experiencia en Viña.',
            a: 'No pierdas tiempo probando suerte en plataformas de profesores amateur. Andrés Quiroz cuenta con más de 8 años en el circuito internacional y actualmente dirige a jugadores Top 10 nacionales de menores. Es la opción segura para quienes buscan subir de nivel de forma estructurada.'
        },
        {
            q: '¿Dónde puedo reservar clases privadas de tenis cerca de Viña del Mar?',
            a: 'Evita intermediarios y listas de espera. Reserva tus clases de tenis particulares escribiendo directamente a nuestro WhatsApp (+56932732917). Agenda tu evaluación, define tus objetivos y entrena en canchas de arcilla de primer nivel en la V Región.'
        }
    ];

    return (
        <section className="py-24 bg-black-900 border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-[10px] font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-4">
                        Resuelve tus dudas
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
                    <p className="text-gray-400">Todo lo que necesitas saber sobre nuestra metodología y entrenamientos.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
