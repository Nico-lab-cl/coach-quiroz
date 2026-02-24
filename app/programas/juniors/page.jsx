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
                {/* Background Image Banner */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/training-kids.jpg" alt="Fondo Juniors" className="w-full h-full object-cover opacity-[0.15] grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#0b1120]"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] mix-blend-screen animate-pulse opacity-50"></div>
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

            {/* Visual Gallery Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block border border-blue-400/50 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4">
                            En Acción
                        </span>
                        <h2 className="text-4xl font-black mb-4 tracking-tight">El Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">en Cancha</span></h2>
                        <p className="text-blue-100/60 max-w-2xl mx-auto">Un vistazo a nuestras jornadas de entrenamiento lleno de energía y aprendizaje.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="rounded-3xl overflow-hidden group relative h-80 lg:col-span-2">
                            <img src="/images/training-kids.jpg" alt="Entrenamiento de niños" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-xl font-bold text-white">Práctica Técnica</h3>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden group relative h-80">
                            <img src="/images/gallery-10.jpg" alt="Tenis Juniors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-xl font-bold text-white">Motivación</h3>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden group relative h-80">
                            <img src="/images/pack-juniors.jpg" alt="Junior Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-xl font-bold text-white">Trabajo en Equipo</h3>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden group relative h-80 lg:col-span-2">
                            <img src="/images/gallery-02.jpg" alt="Juego en cancha" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-center grayscale-[30%] group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-xl font-bold text-white">Diversión Garantizada</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-20 relative bg-[#0f172a] border-t border-blue-500/10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/gallery-06.jpg" className="w-full h-full object-cover opacity-5" alt="Fondo Mapa" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block border border-blue-400/50 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            Instalaciones
                        </span>
                        <h2 className="text-4xl font-black mb-4 tracking-tight">Canchas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Oficiales</span></h2>
                        <p className="text-blue-100/60 max-w-2xl mx-auto">Nuestras clases se imparten en los mejores clubes de la región, garantizando canchas de primer nivel y un entorno seguro.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {/* Card 1 */}
                            <div className="bg-[#1e293b]/60 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl flex items-center gap-6 hover:border-blue-400 hover:bg-blue-900/20 transition-all hover:scale-[1.02] cursor-default group">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 text-2xl group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all shrink-0">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Club El Refugio</h4>
                                    <p className="text-blue-200/60 font-medium">Viña del Mar</p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-[#1e293b]/60 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl flex items-center gap-6 hover:border-blue-400 hover:bg-blue-900/20 transition-all hover:scale-[1.02] cursor-default group">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 text-2xl group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all shrink-0">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Club El Salto</h4>
                                    <p className="text-blue-200/60 font-medium">Viña del Mar</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-[#1e293b]/60 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl flex items-center gap-6 hover:border-cyan-400 hover:bg-cyan-900/20 transition-all hover:scale-[1.02] cursor-default group">
                                <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 text-2xl group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all shrink-0">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Club de Tenis Con Con</h4>
                                    <p className="text-cyan-200/60 font-medium">Con Con</p>
                                </div>
                            </div>
                        </div>

                        {/* Map iframe */}
                        <div className="h-[450px] rounded-3xl overflow-hidden border border-blue-500/30 shadow-[0_10px_40px_rgba(59,130,246,0.15)] relative group">
                            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106981.42823617181!2d-71.60223594164893!3d-33.015243888371306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de8ea73767cd%3A0xe6bf4b65dd4b105a!2sVi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1714588265000!5m2!1ses!2scl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[70%] contrast-125 opacity-90 group-hover:grayscale-[20%] group-hover:opacity-100 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
