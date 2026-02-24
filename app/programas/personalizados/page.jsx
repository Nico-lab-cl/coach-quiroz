'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Personalizados() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#000000] pb-32 text-white selection:bg-gold-500/30 font-sans">
            {/* Elite Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                                <i className="fas fa-arrow-left text-gold-500 text-sm group-hover:-translate-x-1 transition-transform"></i>
                            </div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">Inicio</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
                            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">Entrenamiento Elite</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Cinematic Hero */}
            <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-gold-600/20 to-transparent rounded-full blur-[100px] opacity-50"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Programas</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-yellow-600 mt-2">Privados</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                        No entrenamos jugadores. <span className="text-white font-medium">Forjamos competidores.</span> Tres niveles de intensidad diseñados milimétricamente para tu evolución.
                    </p>
                </div>
            </section>

            {/* Architecture / Pricing Sections */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">

                    {/* Start Tenis - Minimalist Card */}
                    <div className="bg-gradient-to-b from-[#111] to-black rounded-[2rem] p-8 border border-white/5 hover:border-gold-500/20 transition-all duration-500 group lg:mb-8">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Fase 01</span>
                                <h3 className="text-3xl font-light text-white group-hover:text-gold-400 transition-colors">Start Tenis</h3>
                            </div>
                            <div className="text-white/20 group-hover:text-gold-500/20 transition-colors">
                                <i className="fas fa-play text-4xl"></i>
                            </div>
                        </div>

                        <div className="space-y-6 mb-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></div>
                                <p className="text-gray-400 text-sm leading-relaxed">Iniciación absoluta. Construcción de fundamentos biomecánicos desde cero.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></div>
                                <p className="text-gray-400 text-sm leading-relaxed">6 horas de entrenamiento guiado 1 a 1 o Dúo.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></div>
                                <p className="text-gray-400 text-sm leading-relaxed">Desarrollo de agarres, posturas y coordinación motriz pura.</p>
                            </div>
                        </div>

                        <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20quiero%20empezar%20mi%20camino%20con%20START%20TENIS." target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl border border-white/10 text-center text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                            Iniciar Camino
                        </a>
                    </div>

                    {/* Foundation Pack (Premium) - The Centerpiece */}
                    <div className="relative rounded-[2.5rem] p-[1px] overflow-hidden order-first lg:order-none lg:-mt-12 lg:mb-12 shadow-[0_0_80px_rgba(212,175,55,0.15)] group z-20">
                        {/* Shimmer effect border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-300 via-gold-600 to-amber-900 group-hover:rotate-180 transition-transform duration-1000 ease-in-out"></div>

                        <div className="relative bg-[#050505] rounded-[2.5rem] h-full p-10 flex flex-col">
                            <div className="absolute top-0 right-10 bg-gradient-to-b from-gold-400 to-gold-600 text-black px-4 py-2 rounded-b-xl text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">
                                The Masterclass
                            </div>

                            <div className="mt-8 mb-12">
                                <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Fase 03 • Inmersión Total</span>
                                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">Foundation<br />Pack</h3>
                                <p className="text-gold-400/80 text-sm italic">"Tu juego, llevado al límite competitivo."</p>
                            </div>

                            <div className="space-y-6 mb-16 flex-1">
                                <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20">
                                    <h4 className="text-gold-400 font-bold text-sm mb-2"><i className="fas fa-crown mr-2"></i>Todo el nivel Performance</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">Incluye todas las correcciones métricas e intensidad del nivel 2.</p>
                                </div>
                                <div className="flex gap-4 items-start px-2">
                                    <i className="fas fa-check text-gold-500 mt-1"></i>
                                    <p className="text-gray-300 text-sm leading-relaxed">Acompañamiento presencial exclusivo en tus torneos.</p>
                                </div>
                                <div className="flex gap-4 items-start px-2">
                                    <i className="fas fa-check text-gold-500 mt-1"></i>
                                    <p className="text-gray-300 text-sm leading-relaxed">Lectura de partido en tiempo real y ajuste táctico en los cambios de lado.</p>
                                </div>
                                <div className="flex gap-4 items-start px-2">
                                    <i className="fas fa-check text-gold-500 mt-1"></i>
                                    <p className="text-gray-300 text-sm leading-relaxed">Feedback y reporte estadístico post-partido.</p>
                                </div>
                            </div>

                            <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20estoy%20listo%20para%20el%20Foundation%20Pack." target="_blank" rel="noopener noreferrer" className="block w-full py-5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black text-center text-sm font-black tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all">
                                Postular Inmediatamente
                            </a>
                        </div>
                    </div>

                    {/* Performance Pack - Architect Card */}
                    <div className="bg-gradient-to-b from-[#111] to-black rounded-[2rem] p-8 border border-white/5 hover:border-gold-500/20 transition-all duration-500 group lg:mb-8">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Fase 02</span>
                                <h3 className="text-3xl font-light text-white group-hover:text-gold-400 transition-colors">Performance</h3>
                            </div>
                            <div className="text-white/20 group-hover:text-gold-500/20 transition-colors">
                                <i className="fas fa-bolt text-4xl"></i>
                            </div>
                        </div>

                        <div className="space-y-6 mb-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></div>
                                <p className="text-gray-400 text-sm leading-relaxed">Sesiones intensivas exclusivas 1 a 1 con Coach Quiroz.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></div>
                                <p className="text-gray-400 text-sm leading-relaxed">Auditoría y corrección biomecánica avanzada por impacto.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2"></div>
                                <p className="text-gray-400 text-sm leading-relaxed">Arquitectura de mentalidad ganadora orientada 100% a la competencia.</p>
                            </div>
                        </div>

                        <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20quiero%20elevar%20mi%20nivel%20con%20el%20Performance%20Pack." target="_blank" rel="noopener noreferrer" className="block w-full py-4 rounded-xl border border-white/10 text-center text-sm font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all">
                            Subir de Nivel
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}
