'use client';

import { useState, useEffect } from 'react';

const GALLERY = [
    { src: '/images/gallery-01.jpg', alt: 'Entrenamiento' },
    { src: '/images/gallery-02.jpg', alt: 'Tenis en acción' },
    { src: '/images/gallery-03.jpg', alt: 'Clase de tenis' },
    { src: '/images/gallery-04.jpg', alt: 'Coach Quiroz' },
    { src: '/images/gallery-12.jpg', alt: 'Entrenamiento personalizado' },
    { src: '/images/gallery-06.jpg', alt: 'Tenis Chile' },
    { src: '/images/gallery-07.jpg', alt: 'Coach Andrés' },
    { src: '/images/gallery-08.jpg', alt: 'Alto Rendimiento' },
    { src: '/images/gallery-09.jpg', alt: 'Técnica de tenis' },
    { src: '/images/gallery-10.jpg', alt: 'Entrenamiento en cancha' },
    { src: '/images/gallery-11.jpg', alt: 'Coach de tenis' },
    { src: '/images/gallery-12.jpg', alt: 'Clases de tenis' },
];

const METHODOLOGY = [
    { icon: 'fa-crosshairs', title: 'Precisión Técnica', desc: 'Depuración biomecánica para maximizar la eficiencia y potencia de cada golpe, reduciendo el riesgo de lesiones.' },
    { icon: 'fa-chess-knight', title: 'Mentalidad Táctica', desc: 'Análisis de juego y desarrollo de patrones estratégicos para dominar al rival desde la inteligencia en cancha.' },
    { icon: 'fa-running', title: 'Condición Física', desc: 'Entrenamiento específico de tenis para mejorar la agilidad, resistencia y fuerza explosiva.' },
];

const LOCATIONS = [
    { name: 'Club El Refugio', place: 'Viña del Mar' },
    { name: 'Club El Salto', place: 'Viña del Mar' },
    { name: 'Club de Tenis Con Con', place: 'Con Con' },
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);

    useEffect(() => {
        document.body.style.overflow = modalSrc ? 'hidden' : 'auto';
    }, [modalSrc]);

    return (
        <>
            {/* ── NAVBAR ── */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-glass border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-12 w-auto rounded-full border border-gold-500/30" src="/images/logo.jpeg" alt="Logo" />
                            <span className="ml-3 text-xl font-bold tracking-tight">BY <span className="text-gold-500">COACHQUIROZ</span></span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Sobre mí</a>
                            <a href="#methodology" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Metodología</a>
                            <a href="#services" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Entrenamiento</a>
                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="bg-gold-500 hover:bg-gold-400 text-black-900 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                                Agenda tu clase
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                                <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md:hidden bg-black-800 border-t border-white/10 absolute w-full">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                            <a href="#about" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-gold-500">Sobre mí</a>
                            <a href="#methodology" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-gold-500">Metodología</a>
                            <a href="#services" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-gold-500">Entrenamiento</a>
                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="block w-full mt-4 bg-gold-500 text-black-900 px-5 py-3 rounded font-bold">Agenda tu clase</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* ── HERO ── */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/hero-bg.jpg" alt="Andrés Quiroz Tennis Coach"
                        className="w-full h-full object-cover object-[75%_center] lg:object-right opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black-900 via-black-900/90 to-transparent sm:w-[75%]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full h-full flex flex-col justify-center">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-semibold tracking-wider mb-6">
                            ALTO RENDIMIENTO &amp; ESTRATEGIA
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
                            Lleva tu tenis al <br />
                            <span className="text-gradient">siguiente nivel</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-light leading-relaxed">
                            Entrenamiento de alto rendimiento, análisis biomecánico y estrategia competitiva con By Coach Quiroz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="bg-gold-500 hover:bg-gold-400 text-black-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] text-center flex items-center justify-center gap-2">
                                <span>Empezar ahora</span><i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#services"
                                className="border border-white/30 hover:border-gold-500 hover:text-gold-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all bg-white/5 backdrop-blur-sm text-center">
                                Ver planes
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
                    <a href="#about" className="text-white/50 hover:text-gold-500 transition-colors">
                        <i className="fas fa-chevron-down text-2xl"></i>
                    </a>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section id="about" className="py-24 bg-black-900 relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gold-500/20 rounded-2xl blur-lg transition-all group-hover:bg-gold-500/30"></div>
                            <img src="/images/about-coach.jpg" alt="Coach de tenis - Andrés Quiroz"
                                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover transition-all duration-700" />
                            <div className="absolute bottom-6 left-6 right-6 bg-glass p-6 rounded-xl border border-white/10">
                                <p className="text-gold-500 font-bold text-lg">Andrés Quiroz</p>
                                <p className="text-gray-400 text-sm">Head Coach &amp; Ex Jugador Profesional</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Sobre el Coach</h2>
                            <h3 className="text-4xl sm:text-5xl font-bold mb-8">Experiencia internacional probada</h3>
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p>Con más de <strong className="text-white">8 años de competencia nacional e internacional</strong>, he dedicado mi vida a entender y enseñar el tenis desde una perspectiva integral.</p>
                                <div className="border-l-2 border-gold-500 pl-6 space-y-4 my-8">
                                    {[
                                        { icon: 'fa-globe-europe', title: 'Experiencia en Europa', desc: 'Head Coach en Antonio Valdés Akademie (Alemania, 4 años) y Clontarf Lawn Tennis Club (Irlanda, 3 años).' },
                                        { icon: 'fa-trophy', title: 'Resultados Comprobados', desc: 'Campeón regional con equipos U10-U16 en Irlanda. Top 3 nacional como jugador.' },
                                        { icon: 'fa-map-marker-alt', title: 'Actualidad', desc: 'Coach en Academia Fleming & Blemith (Con Con, V Región Chile), dirigiendo a Top 10 del circuito de menores.' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <i className={`fas ${item.icon} text-gold-500 mt-1`}></i>
                                            <div>
                                                <h4 className="text-white font-semibold">{item.title}</h4>
                                                <p className="text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a href="https://wa.me/56932732917"
                                    className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:text-white transition-colors group">
                                    Conocer mi metodología <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="mt-24">
                        <h3 className="text-2xl font-bold mb-10 text-center text-white">
                            <span className="text-gold-500">Galería</span> de Entrenamiento
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {GALLERY.map((img, i) => (
                                <div key={i}
                                    className="relative group overflow-hidden rounded-xl aspect-square border border-white/10 cursor-pointer"
                                    onClick={() => setModalSrc(img.src)}>
                                    <img src={img.src} alt={img.alt}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── METHODOLOGY ── */}
            <section id="methodology" className="py-24 bg-black-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Por qué elegirnos</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Metodología Integral</h3>
                        <p className="text-gray-400">No solo entrenamos golpes, construimos jugadores completos física, técnica y mentalmente.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {METHODOLOGY.map((card, i) => (
                            <div key={i} className="bg-black-900/50 p-8 rounded-2xl border border-white/5 hover:border-gold-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 text-gold-500 group-hover:text-black-900 transition-colors">
                                    <i className={`fas ${card.icon} text-2xl`}></i>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-white">{card.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TRAINING LOCATIONS ── */}
            <section className="py-20 bg-black-800 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Nuestra Filosofía</h2>
                            <h3 className="text-3xl font-bold mb-6">Cómo son nuestros entrenamientos</h3>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                En Coach Quiroz Tennis Academy, ofrecemos programas diseñados para <strong className="text-white">todo público</strong>. Desde niños que dan sus primeros pasos en la cancha hasta adultos y jugadores de alto rendimiento.
                            </p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Nos enfocamos en un desarrollo integral, combinando la intensidad física con la inteligencia táctica, en un ambiente que fomenta la disciplina y la pasión por el tenis.
                            </p>
                            <h4 className="text-xl font-bold text-white mb-4">Disponibilidad</h4>
                            <ul className="space-y-4">
                                {LOCATIONS.map((loc, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="bg-gold-500/10 p-2 rounded-lg text-gold-500"><i className="fas fa-map-pin"></i></div>
                                        <div>
                                            <h5 className="font-bold text-white">{loc.name}</h5>
                                            <p className="text-gray-400 text-sm">{loc.place}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53535.59250066928!2d-71.53039604169922!3d-32.97759600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scl!4v1704930000000!5m2!1sen!2scl"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gold-500/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { src: '/images/training-kids.jpg', label: 'Menores y Formación', top: false },
                            { src: '/images/training-pro.jpg', label: 'Alto Rendimiento', top: true },
                            { src: '/images/gallery-02.jpg', label: 'Adultos y Recreativo', top: false },
                        ].map((item, i) => (
                            <div key={i} className="relative h-64 rounded-xl overflow-hidden group">
                                <img src={item.src} alt={item.label}
                                    className={`w-full h-full object-cover ${item.top ? 'object-top' : ''} transform group-hover:scale-110 transition-transform duration-700`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-900/90 to-transparent flex items-end p-6">
                                    <span className="text-white font-bold">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES / PRICING ── */}
            <section id="services" className="py-24 bg-black-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2">Planes de Entrenamiento</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">Invierte en tu juego</h3>
                        <p className="text-gray-400">Selecciona el plan que se adapte a tus objetivos competitivos.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Pack Performance */}
                        <div className="bg-black-800 rounded-3xl p-8 border border-white/10 hover:border-gold-500/30 transition-all group flex flex-col">
                            <div className="mb-6">
                                <h4 className="text-2xl font-bold text-white mb-2">Performance</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gold-500">$100.000</span>
                                    <span className="text-gray-400 text-sm">CLP</span>
                                </div>
                            </div>
                            <div className="h-96 w-full rounded-xl bg-gray-800 mb-6 overflow-hidden relative">
                                <img src="/images/pack-performance.jpg" alt="Pack Performance"
                                    className="w-full h-full object-cover object-top opacity-80 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center gap-3 text-gray-300"><i className="fas fa-check-circle text-gold-500"></i><span>6 Horas de Entrenamiento guiado</span></li>
                                <li className="flex items-center gap-3 text-gray-300"><i className="fas fa-video text-gold-500"></i><span>Video Análisis (1ra y última sesión)</span></li>
                                <li className="flex items-center gap-3 text-gray-300"><i className="fas fa-clipboard-list text-gold-500"></i><span>Full feedback del proceso</span></li>
                            </ul>
                            <a href="https://wa.me/56932732917?text=Hola,%20me%20interesa%20el%20Pack%20Performance" target="_blank" rel="noopener noreferrer"
                                className="w-full block text-center bg-transparent border border-white/20 hover:bg-white hover:text-black-900 text-white font-bold py-3 rounded-xl transition-all">
                                Contratar Pack
                            </a>
                        </div>
                        {/* Pack Foundation */}
                        <div className="bg-black-800 rounded-3xl p-1 relative border border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-500 text-black-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Recomendado
                            </div>
                            <div className="bg-black-800 rounded-[22px] p-7 h-full flex flex-col">
                                <div className="mb-6">
                                    <h4 className="text-2xl font-bold text-white mb-2">Foundation</h4>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-gold-500">$200.000</span>
                                        <span className="text-gray-400 text-sm">CLP</span>
                                    </div>
                                </div>
                                <div className="h-96 w-full rounded-xl bg-gray-800 mb-6 overflow-hidden relative">
                                    <img src="/images/pack-foundation.jpg" alt="Pack Foundation"
                                        className="w-full h-full object-cover object-top opacity-80 transition-transform duration-500" />
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-gray-300"><i className="fas fa-check-circle text-gold-500"></i><span>12 Horas de Entrenamiento guiado</span></li>
                                    <li className="flex items-center gap-3 text-gray-300"><i className="fas fa-video text-gold-500"></i><span>Video Análisis (1ra y última sesión)</span></li>
                                    <li className="flex items-center gap-3 text-gray-300"><i className="fas fa-comments text-gold-500"></i><span>Full feedback del proceso</span></li>
                                    <li className="flex items-center gap-3 text-white font-semibold"><i className="fas fa-plus-circle text-gold-500"></i><span>Bonus: Seguimiento en competencia</span></li>
                                </ul>
                                <a href="https://wa.me/56932732917?text=Hola,%20me%20interesa%20el%20Pack%20Foundation" target="_blank" rel="noopener noreferrer"
                                    className="w-full block text-center bg-gold-500 hover:bg-gold-400 text-black-900 font-bold py-3 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                    Contratar Pack
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-20 bg-black-800 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-10">Lo que dicen mis alumnos</h2>
                    <div className="max-w-2xl mx-auto bg-black-900 p-8 rounded-2xl relative">
                        <i className="fas fa-quote-left text-gold-500/20 text-6xl absolute top-4 left-4"></i>
                        <p className="text-gray-300 text-lg italic relative z-10 mb-6">
                            &ldquo;Entrenar con Andrés cambió mi forma de ver la cancha. Su análisis técnico es otro nivel y la intensidad de los entrenamientos me preparó para competir en serio.&rdquo;
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                                <i className="fas fa-user text-gray-400"></i>
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold">Alumno Satisfecho</p>
                                <p className="text-gold-500 text-sm">Jugador Competitivo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bg-black-900 border-t border-white/10 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="mb-6 md:mb-0 text-center md:text-left">
                            <span className="text-xl font-bold tracking-tight text-white">BY <span className="text-gold-500">COACHQUIROZ</span></span>
                            <p className="text-gray-500 text-sm mt-2">Elevando el nivel del tenis en Chile.</p>
                        </div>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/by.coachquiroz/" target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gold-500 text-2xl transition-colors">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-500 text-2xl transition-colors">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
                        <p>&copy; 2024 By Coach Quiroz. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>

            {/* ── WHATSAPP FLOATING ── */}
            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                className="fixed bottom-6 right-6 md:hidden z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(0,255,0,0.3)] animate-bounce hover:scale-110 transition-transform">
                <i className="fab fa-whatsapp text-3xl"></i>
            </a>

            {/* ── IMAGE MODAL ── */}
            {modalSrc && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setModalSrc(null)}>
                    <button onClick={() => setModalSrc(null)}
                        className="absolute top-6 right-6 text-white text-4xl hover:text-gold-500 transition-colors z-10">
                        &times;
                    </button>
                    <img src={modalSrc} alt="Full size"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
}
