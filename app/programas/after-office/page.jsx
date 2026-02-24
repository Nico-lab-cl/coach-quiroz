'use client';

import Link from 'next/link';

export default function AfterOfficeCoaching() {
    return (
        <div className="min-h-screen bg-black-900 pb-20">
            {/* Minimal Navbar / Back button */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-black-900/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex-shrink-0 flex items-center group text-white">
                            <i className="fas fa-arrow-left mr-3 text-gold-500 group-hover:-translate-x-1 transition-transform"></i>
                            <span className="text-sm font-bold tracking-widest uppercase">Volver al Inicio</span>
                        </Link>
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-10 w-auto rounded-full border border-gold-500/30" src="/images/logo.jpeg" alt="Logo" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/10 to-transparent blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

                        <div className="relative group order-2 lg:order-1">
                            <div className="absolute -inset-4 bg-gold-500/20 rounded-2xl blur-lg transition-all group-hover:bg-gold-500/30"></div>
                            <img src="/images/after-office-optimized.webp" alt="After Office Coaching" className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover object-top" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                                Adultos
                            </span>
                            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                                Programa <br />
                                <span className="text-gold-500">After Office</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                                Entrenamiento de Alto Nivel para Adultos. La oportunidad perfecta para liberar el estrés del trabajo, mejorar tu salud y dominar la técnica en la cancha.
                            </p>

                            <div className="bg-black-800/50 border border-white/5 rounded-2xl p-6 mb-10">
                                <h3 className="text-lg font-bold text-white mb-4">¿Qué incluye el programa?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-gray-300">
                                        <div className="bg-gold-500/10 p-2 rounded text-gold-500"><i className="fas fa-user-friends"></i></div>
                                        <div>
                                            <strong className="block text-white">Grupos Ultra-Reducidos</strong>
                                            <span className="text-sm">Máximo 6 personas por clase para atención hiper personalizada.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-300">
                                        <div className="bg-gold-500/10 p-2 rounded text-gold-500"><i className="fas fa-crown"></i></div>
                                        <div>
                                            <strong className="block text-white">Coach Experto</strong>
                                            <span className="text-sm">Dirigido y monitoreado directamente por Coach Quiroz.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-300">
                                        <div className="bg-gold-500/10 p-2 rounded text-gold-500"><i className="fas fa-chess-board"></i></div>
                                        <div>
                                            <strong className="block text-white">Entrenamiento Táctico</strong>
                                            <span className="text-sm">Simulaciones de partidos y resolución de jugadas reales.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-300">
                                        <div className="bg-gold-500/10 p-2 rounded text-gold-500"><i className="fas fa-clock"></i></div>
                                        <div>
                                            <strong className="block text-white">Alta Frecuencia Mensual</strong>
                                            <span className="text-sm">12 horas de cancha intensivas cada mes.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20me%20interesa%20solicitar%20un%20cupo%20para%20el%20After%20Office%20Coaching."
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-black-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] w-full sm:w-auto">
                                Solicitar Cupo After Office
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
