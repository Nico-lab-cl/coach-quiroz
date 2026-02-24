'use client';

import Link from 'next/link';

export default function Personalizados() {
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
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden relative">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/20 rounded-full blur-[120px]"></div>
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                        Entrenamiento 1 a 1 y Dúos
                    </span>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        Programas <br />
                        <span className="text-gold-500">Personalizados</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
                        Eleva tu nivel con un enfoque dedicado exclusivamente a tus áreas de mejora. Tenemos tres paquetes diseñados para cada etapa de tu desarrollo como tenista.
                    </p>
                </div>
            </section>

            {/* Pricing / Packages Section */}
            <section className="relative pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Pack 1: Start Tenis */}
                    <div className="bg-black-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5 hover:border-gold-500/30 hover:bg-black-800/80 transition-all duration-500 group shadow-xl flex flex-col">
                        <div className="mb-8">
                            <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                                Principiante
                            </span>
                            <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">Start Tenis</h4>
                            <p className="text-gray-400 text-lg">Tu primer paso en la cancha.</p>
                        </div>
                        <ul className="space-y-5 mb-12 flex-1">
                            <li className="flex items-start gap-4 text-gray-300">
                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                <span className="leading-relaxed">Para quienes nunca han jugado o llevan muy poco</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-300">
                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                <span className="leading-relaxed">6 horas de entrenamiento guiado (Individual o dúo)</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-300">
                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                <span className="leading-relaxed">Enfoque 100% en fundamentos técnicos y coordinación</span>
                            </li>
                        </ul>
                        <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20me%20interesa%20empezar%20con%20el%20plan%20START%20TENIS."
                            target="_blank" rel="noopener noreferrer"
                            className="w-full text-center bg-white hover:bg-gray-200 text-black-900 font-bold py-4 rounded-xl transition-all shadow-lg text-lg block">
                            Empezar ahora
                        </a>
                    </div>

                    {/* Pack 2: Performance Pack */}
                    <div className="bg-black-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5 hover:border-gold-500/30 hover:bg-black-800/80 transition-all duration-500 group shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col transform scale-100 lg:scale-105 z-10">
                        <div className="mb-8">
                            <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                                1 a 1
                            </span>
                            <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">Performance Pack</h4>
                            <p className="text-gray-400 text-lg">Mejora Técnica y Táctica Acelerada.</p>
                        </div>
                        <ul className="space-y-5 mb-12 flex-1">
                            <li className="flex items-start gap-4 text-gray-300">
                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                <span className="leading-relaxed">Sesiones 1 a 1 exclusivas con Coach Quiroz</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-300">
                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                <span className="leading-relaxed">Análisis y corrección biomecánica de cada impacto</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-300">
                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                <span className="leading-relaxed">Estructuración de mentalidad competitiva orientada a torneos</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-300">
                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                <span className="leading-relaxed">Flexibilidad de horarios</span>
                            </li>
                        </ul>
                        <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20me%20gustaría%20más%20info%20sobre%20el%20Performance%20Pack."
                            target="_blank" rel="noopener noreferrer"
                            className="w-full text-center bg-gold-500 hover:bg-gold-400 text-black-900 font-bold py-4 rounded-xl transition-all shadow-lg text-lg block">
                            Consultar Disponibilidad
                        </a>
                    </div>

                    {/* Pack 3: Foundation Pack */}
                    <div className="bg-gradient-to-br from-gold-500/40 to-black-800 rounded-3xl p-[2px] relative shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-gold-500 to-gold-700 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                        <div className="bg-[#111] hover:bg-[#151515] transition-colors duration-500 rounded-[22px] p-10 h-full flex flex-col relative z-10">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-black-900 px-6 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg">
                                Inmersión Total
                            </div>
                            <div className="mb-8 mt-4">
                                <span className="inline-block border border-gold-500 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                                    Premium
                                </span>
                                <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">Foundation Pack</h4>
                                <p className="text-gray-400 text-lg">El Programa de Inmersión Competitiva Total.</p>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1">
                                <li className="flex items-start gap-4 text-white font-medium">
                                    <i className="fas fa-star text-gold-500 mt-1"></i>
                                    <span className="leading-relaxed">Todo lo incluido en el Performance Pack</span>
                                </li>
                                <li className="flex items-start gap-4 text-gray-300">
                                    <i className="fas fa-check text-gold-500 mt-1"></i>
                                    <span className="leading-relaxed">Acompañamiento presencial en Torneos</span>
                                </li>
                                <li className="flex items-start gap-4 text-gray-300">
                                    <i className="fas fa-check text-gold-500 mt-1"></i>
                                    <span className="leading-relaxed">Lectura de partidos en vivo y ajuste táctico</span>
                                </li>
                                <li className="flex items-start gap-4 text-gray-300">
                                    <i className="fas fa-check text-gold-500 mt-1"></i>
                                    <span className="leading-relaxed">Reporte y feedback analítico post-partido</span>
                                </li>
                            </ul>
                            <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20quiero%20postular%20al%20Premium%20Foundation%20Pack."
                                target="_blank" rel="noopener noreferrer"
                                className="w-full text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black-900 font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-gold-500/30 text-lg block">
                                Postular al Pack Premium
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
