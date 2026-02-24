'use client';

import Link from 'next/link';

export default function JuniorCoaching() {
    return (
        <div className="min-h-screen bg-[#0f172a] pb-20 selection:bg-blue-500 selection:text-white">
            {/* Dynamic Navbar */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-[#0f172a]/80 backdrop-blur-md border-b border-blue-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex-shrink-0 flex items-center group text-white">
                            <i className="fas fa-arrow-left mr-3 text-blue-400 group-hover:-translate-x-1 transition-transform"></i>
                            <span className="text-sm font-bold tracking-widest uppercase">Volver al Inicio</span>
                        </Link>
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-10 w-auto rounded-full border-2 border-blue-400" src="/images/logo.jpeg" alt="Logo" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Energetic Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background energetic shapes */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400 rounded-full blur-[120px] mix-blend-screen"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-lg transition-all opacity-50 group-hover:opacity-100 group-hover:duration-200"></div>
                                <img src="/images/pack-juniors-optimized.webp" alt="Junior Coaching" className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-2 border-white/10 grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-flex items-center gap-2 border border-blue-400/50 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest text-[10px] sm:text-xs uppercase px-4 py-1.5 rounded-full mb-6">
                                <i className="fas fa-bolt text-yellow-500"></i> Energía y Formación
                            </span>
                            <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-tight">
                                TEAM <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">JUNIORS</span>
                            </h1>
                            <p className="text-xl text-blue-100/80 mb-8 leading-relaxed font-medium">
                                Forma el carácter de tu hijo(a) a través del deporte. Metodología basada en la diversión, la disciplina y el trabajo en equipo con la guía experta de Coach Quiroz.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20me%20interesa%20inscribir%20a%20mi%20hijo/a%20en%20el%20Team%20Juniors."
                                    target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(59,130,246,0.3)] w-full sm:w-auto">
                                    ¡Inscribir ahora! <i className="fas fa-arrow-right ml-2 opacity-70"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-20 bg-[#0b1120] relative border-y border-blue-500/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Por qué elegir nuestro Team?</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-[#1e293b]/50 border border-slate-700/50 p-8 rounded-3xl hover:bg-blue-900/20 transition-colors duration-300">
                            <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center text-2xl mb-6 transform -rotate-6">
                                <i className="fas fa-gamepad"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Aprender Jugando</h3>
                            <p className="text-slate-400">Juegos y dinámicas en cancha diseñadas para mejorar la coordinación sin perder la diversión.</p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-[#1e293b]/50 border border-slate-700/50 p-8 rounded-3xl hover:bg-blue-900/20 transition-colors duration-300">
                            <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center text-2xl mb-6 transform rotate-3">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Red de Apoyo</h3>
                            <p className="text-slate-400">Grupos reducidos con doble supervisión técnica garantizan que nadie se quede atrás.</p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-[#1e293b]/50 border border-slate-700/50 p-8 rounded-3xl hover:bg-blue-900/20 transition-colors duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 rounded-bl-2xl text-xs font-bold z-10">Nuevo</div>
                            <div className="w-14 h-14 bg-yellow-500/20 text-yellow-400 rounded-2xl flex items-center justify-center text-2xl mb-6 transform -rotate-3">
                                <i className="fas fa-medal"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Valores en Cancha</h3>
                            <p className="text-slate-400">Fomentamos el respeto, la resiliencia y el manejo de la frustración desde el primer día.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
