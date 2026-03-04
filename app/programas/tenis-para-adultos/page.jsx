'use client';

import Link from 'next/link';

export default function AfterOfficeCoaching() {
    return (
        <div className="min-h-screen bg-[#050505] pb-20 selection:bg-rose-500/30 selection:text-white">
            {/* Minimal VIP Navbar */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-[#000000]/90 backdrop-blur-xl border-b border-rose-500/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex-shrink-0 flex items-center group text-white">
                            <i className="fas fa-arrow-left mr-3 text-rose-500 group-hover:-translate-x-1 transition-transform"></i>
                            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-white transition-colors">Volver</span>
                        </Link>
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold tracking-widest text-white">
                                AFTER <span className="text-rose-500 font-light italic">OFFICE</span>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Exclusive Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/gallery-08.jpg" alt="Fondo After Office" className="w-full h-full object-cover opacity-[0.15] grayscale contrast-125" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/80 to-[#050505]"></div>
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-900/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">

                        <div className="relative group order-2 lg:order-1 perspective-1000">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-rose-600 to-red-900 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] transform transition-transform duration-700 hover:rotate-y-12">
                                <img src="/images/after-office-optimized.webp" alt="After Office Coaching" className="w-full h-[600px] object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                                {/* Info Badge on Image */}
                                <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                                        <span className="text-gray-300">Cupos Limitados</span>
                                    </div>
                                    <span className="font-bold tracking-widest text-rose-400">MAX 6 ADULTOS</span>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 lg:pl-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-[1px] w-12 bg-rose-500"></div>
                                <span className="text-rose-500 text-xs font-bold tracking-[0.3em] uppercase">
                                    Desconecta y Compite
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight">
                                Tu cancha<br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Tus reglas</span>
                            </h1>

                            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                                Cambia el traje por la raqueta. Un club de entrenamiento diseñado para liberar el estrés ejecutivo, mejorar tu condición cardiovascular y pulir tu técnica en un ambiente adulto y competitivo.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform cursor-default">
                                    <div className="w-12 h-12 rounded-full border border-rose-500/30 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-black transition-colors">
                                        <i className="fas fa-wine-glass"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Cero Estrés</h4>
                                        <p className="text-gray-500 text-sm">Transición perfecta entre la oficina y el deporte.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform cursor-default">
                                    <div className="w-12 h-12 rounded-full border border-rose-500/30 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-black transition-colors">
                                        <i className="fas fa-fire"></i>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Alta Intensidad</h4>
                                        <p className="text-gray-500 text-sm">12 horas mensuales de quema de calorías y táctica pura.</p>
                                    </div>
                                </div>
                            </div>

                            <a href="https://wa.me/56932732917?text=Hola%20Coach%20Quiroz,%20quiero%20reservar%20mi%20cupo%20para%20el%20After%20Office."
                                target="_blank" rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border-2 border-rose-500 rounded-full hover:bg-rose-500 hover:text-black hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] w-full sm:w-auto overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Asegurar mi cupo <i className="fab fa-whatsapp text-lg"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIP Locations Section */}
            <section className="py-24 relative bg-[#050505] border-t border-rose-500/10 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/gallery-07.jpg" className="w-full h-full object-cover opacity-5 grayscale" alt="Fondo Mapa" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block border border-rose-500/30 bg-rose-500/10 text-rose-500 text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                            Sedes Exclusivas
                        </span>
                        <h2 className="text-4xl font-light mb-4 tracking-tight">Nuestras <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Canchas</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto font-light">Desconecta en instalaciones de primer nivel, diseñadas para brindar privacidad, comodidad y un ambiente puramente enfocado en tu desarrollo.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {/* Card 1 */}
                            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:border-rose-500/50 hover:bg-rose-950/20 transition-all hover:scale-[1.02] cursor-default group">
                                <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-500 text-2xl group-hover:bg-rose-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all shrink-0">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Club El Refugio</h4>
                                    <p className="text-gray-500 font-light tracking-wide">Viña del Mar</p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:border-rose-500/50 hover:bg-rose-950/20 transition-all hover:scale-[1.02] cursor-default group">
                                <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-500 text-2xl group-hover:bg-rose-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all shrink-0">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Club de Tenis Con Con</h4>
                                    <p className="text-gray-500 font-light tracking-wide">Con Con</p>
                                </div>
                            </div>
                        </div>

                        {/* Map iframe */}
                        <div className="h-[450px] rounded-3xl overflow-hidden border border-rose-500/20 shadow-[0_10px_40px_rgba(244,63,94,0.1)] relative group">
                            <div className="absolute inset-0 bg-rose-900/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106981.42823617181!2d-71.60223594164893!3d-33.015243888371306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de8ea73767cd%3A0xe6bf4b65dd4b105a!2sVi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1714588265000!5m2!1ses!2scl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[90%] contrast-150 opacity-70 group-hover:grayscale-[40%] group-hover:opacity-100 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
