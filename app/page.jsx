'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';

const GALLERY = [
    { src: '/images/gallery-01.jpg', alt: 'Clases de tenis viña del mar - Entrenamiento en cancha' },
    { src: '/images/gallery-02.jpg', alt: 'Coach de tenis particular Andrés Quiroz en Concón' },
    { src: '/images/gallery-03.jpg', alt: 'Junior tenis viña del mar - formación deportiva' },
    { src: '/images/gallery-04.jpg', alt: 'Tenis para adultos en Viña del Mar' },
    { src: '/images/gallery-06.jpg', alt: 'Clases de tenis grupales de alto rendimiento' },
    { src: '/images/gallery-07.jpg', alt: 'Head Coach Andrés Quiroz enseñando técnica' },
    { src: '/images/gallery-08.jpg', alt: 'Mejora tu nivel de tenis en la V Región' },
    { src: '/images/gallery-09.jpg', alt: 'Clases de tenis en canchas de arcilla' },
    { src: '/images/gallery-10.jpg', alt: 'Entrenamiento táctico y estratégico de tenis' },
    { src: '/images/gallery-11.jpg', alt: 'Profesor de tenis con experiencia internacional' },
    { src: '/images/gallery-12.jpg', alt: 'Academia de tenis By Coach Quiroz' },
];

const METHODOLOGY = [
    { icon: 'fa-crosshairs', title: 'Precisión Técnica', desc: 'Depuración biomecánica para maximizar la eficiencia y potencia de cada golpe, reduciendo el riesgo de lesiones.' },
    { icon: 'fa-chess-knight', title: 'Mentalidad Táctica', desc: 'Análisis de juego y desarrollo de patrones estratégicos para dominar al rival desde la inteligencia en cancha.' },
    { icon: 'fa-running', title: 'Condición Física', desc: 'Entrenamiento específico de tenis para mejorar la agilidad, resistencia y fuerza explosiva.' },
];

const LOCATIONS = [
    { name: 'Club El Refugio', place: 'Viña del Mar' },
    { name: 'Club de Tenis Con Con', place: 'Con Con' },
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);
    const [activeTab, setActiveTab] = useState('personal');

    useEffect(() => {
        document.body.style.overflow = modalSrc ? 'hidden' : 'auto';
    }, [modalSrc]);

    return (
        <>
            {/* ── NAVBAR ── */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-glass border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/login" className="flex-shrink-0 flex items-center group cursor-pointer text-white">
                            <img className="h-12 w-auto rounded-full border border-gold-500/30 group-hover:border-gold-500 transition-colors duration-300" src="/images/logo.jpeg" alt="Logo" />
                            <span className="ml-3 text-xl font-bold tracking-tight group-hover:text-gold-500 transition-colors duration-300">BY <span className="text-gold-500 group-hover:text-white transition-colors duration-300">COACHQUIROZ</span></span>
                        </Link>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Sobre mí</a>
                            <a href="#methodology" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Metodología</a>

                            {/* Dropdown Personalizados */}
                            <div className="relative group">
                                <button className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider flex items-center gap-1 py-4">
                                    Clases de tenis particulares <i className="fas fa-chevron-down text-[10px] ml-1"></i>
                                </button>
                                <div className="absolute top-full left-0 w-56 bg-black-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
                                    <Link href="/programas/clases-de-tenis-particulares" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 border-b border-white/5 transition-colors">START TENIS</Link>
                                    <Link href="/programas/clases-de-tenis-particulares" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 border-b border-white/5 transition-colors">PERFORMANCE PACK</Link>
                                    <Link href="/programas/clases-de-tenis-particulares" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 transition-colors">FOUNDATION PACK</Link>
                                </div>
                            </div>

                            {/* Dropdown Programas */}
                            <div className="relative group">
                                <button className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider flex items-center gap-1 py-4">
                                    Programas <i className="fas fa-chevron-down text-[10px] ml-1"></i>
                                </button>
                                <div className="absolute top-full left-0 w-56 bg-black-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
                                    <Link href="/programas/junior-tenis" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 border-b border-white/5 transition-colors">JUNIOR TENIS</Link>
                                    <Link href="/programas/tenis-para-adultos" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 transition-colors">TENIS PARA ADULTOS</Link>
                                </div>
                            </div>

                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="bg-gold-500 hover:bg-gold-400 text-black-900 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)] ml-4">
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

                            <div className="py-2 text-left">
                                <span className="block px-3 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Clases de tenis particulares</span>
                                <Link href="/programas/clases-de-tenis-particulares" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">START TENIS</Link>
                                <Link href="/programas/clases-de-tenis-particulares" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">PERFORMANCE PACK</Link>
                                <Link href="/programas/clases-de-tenis-particulares" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">FOUNDATION PACK</Link>
                            </div>

                            <div className="py-2 text-left border-t border-white/5">
                                <span className="block px-3 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Programas</span>
                                <Link href="/programas/junior-tenis" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">JUNIOR TENIS</Link>
                                <Link href="/programas/tenis-para-adultos" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">TENIS PARA ADULTOS</Link>
                            </div>

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
                            ALTO RENDIMIENTO Y ESTRATEGIA
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
                            Academia de Tenis en <br />
                            <span className="text-gradient">Viña del Mar y Concón</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-light leading-relaxed">
                            Entrenamiento de alto rendimiento, análisis biomecánico y estrategia competitiva en la escuela de tenis bycoachquiroz
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
                                    <img src={img.src} alt={img.alt} loading="lazy"
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Metodología integral para tus clases de tenis</h2>
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
                            <h2 className="text-3xl font-bold mb-6">Nuestra filosofía de entrenamiento</h2>
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

            {/* ── PLANES Y PROGRAMAS ── */}
            <section id="services" className="py-24 bg-black-900 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/20 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-10">Programas de entrenamiento<br /><span className="text-gold-500">Resultados reales en cancha</span></h2>

                        {/* Tabs Navigation */}
                        <div className="flex justify-center mb-4">
                            <div className="inline-flex bg-black-800/80 backdrop-blur-md rounded-full p-1.5 border border-white/10 shadow-xl">
                                <button
                                    onClick={() => setActiveTab('personal')}
                                    className={`relative z-10 px-6 sm:px-10 py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'personal' ? 'bg-gold-500 text-black-900 shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    Entrenamiento Personalizado
                                </button>
                                <button
                                    onClick={() => setActiveTab('grupal')}
                                    className={`relative z-10 px-6 sm:px-10 py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'grupal' ? 'bg-gold-500 text-black-900 shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    Programas
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto min-h-[500px]">

                        {/* TAB A: Personalizado */}
                        {activeTab === 'personal' && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 animate-fade-in-up">

                                {/* Card 1: START TENIS */}
                                <div className="bg-black-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5 hover:border-gold-500/30 hover:bg-black-800/80 transition-all duration-500 group hover:-translate-y-3 shadow-xl flex flex-col">
                                    <div className="mb-8">
                                        <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                                            Principiante
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">START TENIS</h3>
                                        <p className="text-gray-400 text-lg">Tu primer paso estructurado en la cancha.</p>
                                    </div>
                                    <ul className="space-y-5 mb-12 flex-1">
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-check text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Diseñado para quienes nunca han jugado tenis</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-check text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">6 horas de entrenamiento guiado (Individual o dúo)</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-check text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Enfoque en fundamentos técnicos y coordinación</span>
                                        </li>
                                    </ul>
                                    <Link href="/programas/clases-de-tenis-particulares"
                                        className="w-full text-center bg-white hover:bg-gray-200 text-black-900 font-bold py-4 rounded-xl transition-all shadow-lg text-lg block">
                                        Ver Detalles y Reservar
                                    </Link>
                                </div>

                                {/* Card 1: Performance Pack */}
                                <div className="bg-black-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5 hover:border-gold-500/30 hover:bg-black-800/80 transition-all duration-500 group hover:-translate-y-3 shadow-xl flex flex-col">
                                    <div className="mb-8">
                                        <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                                            1 a 1
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">PERFORMANCE PACK</h3>
                                        <p className="text-gray-400 text-lg">Corrección y técnica de alto estándar.</p>
                                    </div>
                                    <ul className="space-y-5 mb-12 flex-1">
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-check text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Sesiones 1 a 1 con Coach Quiroz</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-check text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Corrección biomecánica</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-check text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Estructuración de mentalidad competitiva</span>
                                        </li>
                                    </ul>
                                    <Link href="/programas/clases-de-tenis-particulares"
                                        className="w-full text-center bg-white hover:bg-gray-200 text-black-900 font-bold py-4 rounded-xl transition-all shadow-lg text-lg block">
                                        Ver Detalles y Reservar
                                    </Link>
                                </div>

                                {/* Card 2: Foundation Pack (Premium) */}
                                <div className="bg-gradient-to-br from-gold-500/40 to-black-800 rounded-3xl p-[2px] relative shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col hover:-translate-y-3 transition-transform duration-500 group">
                                    <div className="absolute inset-0 bg-gradient-to-b from-gold-500 to-gold-700 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-3xl"></div>

                                    <div className="bg-[#111] hover:bg-[#151515] transition-colors duration-500 rounded-[22px] p-10 h-full flex flex-col relative z-10">
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-black-900 px-6 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
                                            Opción Premium
                                        </div>
                                        <div className="mb-8 mt-4">
                                            <span className="inline-block border border-gold-500 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                                                Inmersión Competitiva
                                            </span>
                                            <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">FOUNDATION PACK</h3>
                                            <p className="text-gray-400 text-lg">Inmersión y acompañamiento competitivo total.</p>
                                        </div>
                                        <ul className="space-y-5 mb-12 flex-1">
                                            <li className="flex items-start gap-4 text-white font-medium">
                                                <i className="fas fa-star text-gold-500 mt-1"></i>
                                                <span className="leading-relaxed">Todo lo del programa particular</span>
                                            </li>
                                            <li className="flex items-start gap-4 text-gray-300">
                                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                                <span className="leading-relaxed">Acompañamiento presencial en Torneos</span>
                                            </li>
                                            <li className="flex items-start gap-4 text-gray-300">
                                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                                <span className="leading-relaxed">Lectura de partidos en vivo</span>
                                            </li>
                                            <li className="flex items-start gap-4 text-gray-300">
                                                <i className="fas fa-check text-gold-500 mt-1"></i>
                                                <span className="leading-relaxed">Feedback post-partido</span>
                                            </li>
                                        </ul>
                                        <Link href="/programas/clases-de-tenis-particulares"
                                            className="w-full text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black-900 font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-gold-500/30 text-lg block">
                                            Ver Detalles y Reservar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TAB B: Programas */}
                        {activeTab === 'grupal' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up max-w-4xl mx-auto">

                                {/* Card 3: Junior Coaching */}
                                <div className="bg-black-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5 hover:border-gold-500/30 hover:bg-black-800/80 transition-all duration-500 group hover:-translate-y-3 shadow-xl flex flex-col">
                                    <div className="mb-8">
                                        <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                                            Formativo
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">JUNIOR TENIS</h3>
                                        <p className="text-gray-400 text-lg">Escuela de Tenis Formativo Integral.</p>
                                    </div>
                                    <div className="h-48 w-full rounded-2xl bg-black-900 mb-8 overflow-hidden relative group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-shadow">
                                        <img src="/images/pack-juniors-optimized.webp" alt="Junior Tenis Entrenamiento"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                    </div>
                                    <ul className="space-y-5 mb-12 flex-1">
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-users text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Grupos reducidos (máx. 12)</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-user-plus text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">2 entrenadores en cancha</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-chart-line text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Enfoque en proceso y técnica progresiva</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-clock text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">8 hrs mensuales</span>
                                        </li>
                                    </ul>
                                    <Link href="/programas/junior-tenis"
                                        className="w-full text-center bg-white hover:bg-gray-200 text-black-900 font-bold py-4 rounded-xl transition-all shadow-lg text-lg block">
                                        Ver Detalles y Reservar
                                    </Link>
                                </div>

                                {/* Card 4: After Office Coaching */}
                                <div className="bg-black-800/40 backdrop-blur-md rounded-3xl p-10 border border-white/5 hover:border-gold-500/30 hover:bg-black-800/80 transition-all duration-500 group hover:-translate-y-3 shadow-xl flex flex-col">
                                    <div className="mb-8">
                                        <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                                            Adultos
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">TENIS PARA ADULTOS</h3>
                                        <p className="text-gray-400 text-lg">Entrenamiento táctico exigente para adultos.</p>
                                    </div>
                                    <div className="h-48 w-full rounded-2xl bg-black-900 mb-8 overflow-hidden relative group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-shadow">
                                        <img src="/images/after-office-optimized.webp" alt="Tenis para adultos Entrenamiento"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                    </div>
                                    <ul className="space-y-5 mb-12 flex-1">
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-user-friends text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Grupos ultra-reducidos (máx. 6)</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-crown text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Dirigido por Coach Quiroz</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-chess-board text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">Entrenamiento táctico real</span>
                                        </li>
                                        <li className="flex items-start gap-4 text-gray-300">
                                            <i className="fas fa-clock text-gold-500 mt-1"></i>
                                            <span className="leading-relaxed">12 hrs mensuales</span>
                                        </li>
                                    </ul>
                                    <Link href="/programas/tenis-para-adultos"
                                        className="w-full text-center bg-white hover:bg-gray-200 text-black-900 font-bold py-4 rounded-xl transition-all shadow-lg text-lg block">
                                        Ver Detalles y Reservar
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-24 bg-black-800 border-t border-white/5 relative overflow-hidden">
                {/* Ambient lights */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-[10px] font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-4">
                            Testimonios Reales
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Lo que dicen mis <span className="text-gold-500">alumnos</span></h2>
                    </div>

                    {/* Two-column cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Testimonial 1 – Alexander Cataldo */}
                        <div className="bg-black-900/80 backdrop-blur-md border border-white/5 hover:border-gold-500/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 shadow-xl group">
                            <div>
                                <i className="fas fa-quote-left text-gold-500/20 text-5xl mb-6 block"></i>
                                <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed">
                                    &ldquo;Entrenar con Andrés en Alemania fue una gran experiencia. Aprendí muchísimo en pocas semanas y destacó su profesionalismo y experiencia como jugador de alto nivel. 100% recomendado.&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-colors shrink-0">
                                    <img
                                        src="/images/testimonial-alexander.png"
                                        alt="Alexander Cataldo"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Alexander Cataldo</p>
                                    <p className="text-gold-500 text-sm">Tenista Chileno · Tenis en Silla de Ruedas</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 – Daniel Rojas */}
                        <div className="bg-black-900/80 backdrop-blur-md border border-white/5 hover:border-gold-500/20 rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 shadow-xl group">
                            <div>
                                <i className="fas fa-quote-left text-gold-500/20 text-5xl mb-6 block"></i>
                                <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed">
                                    &ldquo;Durante los últimos 4 años, Andrés ha sido un apoyo fundamental en mi crecimiento profesional y personal. Gracias a su guía y respaldo constante, pude proyectar mi carrera a nivel internacional en Alemania. Su trabajo y experiencia son más que recomendados.&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-colors shrink-0">
                                    <img
                                        src="/images/testimonial-daniel.png"
                                        alt="Daniel Rojas"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Daniel Rojas</p>
                                    <p className="text-gold-500 text-sm">Entrenador de Tenis · Chile</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── NEWSLETTER ── */}
            <Newsletter />

            {/* ── FAQ ── */}
            <FAQ />

            {/* ── FOOTER ── */}
            <footer className="bg-black-900 border-t border-white/10 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="mb-6 md:mb-0 text-center md:text-left">
                            <span className="text-xl font-bold tracking-tight text-white">BY <span className="text-gold-500">COACHQUIROZ</span></span>
                            <p className="text-gray-500 text-sm mt-2">Elevando el nivel del tenis en Chile.</p>
                            <a href="mailto:contacto@bycoachquiroz.cl" className="text-gold-500 hover:text-white text-sm transition-colors mt-1 inline-block">contacto@bycoachquiroz.cl</a>
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
                        <p>&copy; 2026 By Coach Quiroz. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>

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
            {/* ── AEO JSON-LD INJECTION ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SportsActivityLocation",
                        "name": "By Coach Quiroz",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Viña del Mar",
                            "addressRegion": "Valparaíso",
                            "addressCountry": "CL"
                        },
                        "telephone": "+56932732917",
                        "url": "https://bycoachquiroz.cl"
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿Dónde encontrar academias de tenis en Viña del Mar?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Si buscas resultados reales y no solo pelotear, entrenamos en el Club El Refugio (Viña del Mar) y en el Club de Tenis Con Con. A diferencia de las escuelas masivas o clubes tradicionales saturados, aquí priorizamos la corrección biomecánica y táctica en grupos reducidos o clases uno a uno."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Cuáles son las mejores escuelas de tenis en Viña del Mar?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "La ciudad tiene clubes históricos con buena infraestructura, pero si tu objetivo es el alto rendimiento o aprender desde cero sin vicios técnicos, By Coach Quiroz te ofrece un estándar europeo. Andrés Quiroz aporta su experiencia como Head Coach en Alemania e Irlanda directamente a tu desarrollo en cancha."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Mejores instructores de tenis con experiencia en Viña.",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No pierdas tiempo probando suerte en plataformas de profesores amateur. Andrés Quiroz cuenta con más de 8 años en el circuito internacional y actualmente dirige a jugadores Top 10 nacionales de menores. Es la opción segura para quienes buscan subir de nivel de forma estructurada."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Dónde puedo reservar clases privadas de tenis cerca de Viña del Mar?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Evita intermediarios y listas de espera. Reserva tus clases de tenis particulares escribiendo directamente a nuestro WhatsApp (+56932732917). Agenda tu evaluación, define tus objetivos y entrena en canchas de arcilla de primer nivel en la V Región."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
