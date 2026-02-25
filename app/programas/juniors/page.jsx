'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Newsletter from '../../../components/Newsletter';

const GALLERY = [
    { src: '/images/juniors-gallery/gallery-01.jpg', alt: 'Entrenamiento Juniors 1' },
    { src: '/images/juniors-gallery/gallery-02.jpg', alt: 'Entrenamiento Juniors 2' },
    { src: '/images/juniors-gallery/gallery-03.jpg', alt: 'Entrenamiento Juniors 3' },
    { src: '/images/juniors-gallery/gallery-04.jpg', alt: 'Entrenamiento Juniors 4' },
    { src: '/images/juniors-gallery/gallery-05.jpg', alt: 'Entrenamiento Juniors 5' },
    { src: '/images/juniors-gallery/gallery-06.jpg', alt: 'Entrenamiento Juniors 6' },
    { src: '/images/juniors-gallery/gallery-07.jpg', alt: 'Entrenamiento Juniors 7' },
    { src: '/images/juniors-gallery/gallery-08.jpg', alt: 'Entrenamiento Juniors 8' },
];

export default function JuniorCoachingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = modalSrc ? 'hidden' : 'auto';
    }, [modalSrc]);

    return (
        <div className="min-h-screen bg-black-900 pb-0 selection:bg-gold-500 selection:text-black-900 font-sans">

            {/* ── NAVBAR (Matching Home) ── */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-black-900/90 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-4">
                            {/* Back Button */}
                            <button onClick={() => window.history.back()} className="text-gray-400 hover:text-gold-500 transition-colors md:hidden">
                                <i className="fas fa-arrow-left text-xl"></i>
                            </button>

                            <Link href="/" className="flex-shrink-0 flex items-center group cursor-pointer text-white">
                                <img className="h-12 w-auto rounded-full border border-gold-500/30 group-hover:border-gold-500 transition-colors duration-300" src="/images/logo.jpeg" alt="Logo" />
                                <span className="ml-3 text-xl font-bold tracking-tight hidden sm:block group-hover:text-gold-500 transition-colors duration-300">BY <span className="text-gold-500 group-hover:text-white transition-colors duration-300">COACHQUIROZ</span></span>
                            </Link>

                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => window.history.back()} className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider flex items-center gap-2">
                                <i className="fas fa-arrow-left"></i> Volver a Programas
                            </button>

                            <a href="/#about" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Sobre mí</a>
                            <a href="/#methodology" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Metodología</a>

                            {/* Dropdown Personalizados */}
                            <div className="relative group">
                                <button className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider flex items-center gap-1 py-4">
                                    Personalizados <i className="fas fa-chevron-down text-[10px] ml-1"></i>
                                </button>
                                <div className="absolute top-full left-0 w-56 bg-black-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
                                    <Link href="/programas/personalizados" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 border-b border-white/5 transition-colors">START TENIS</Link>
                                    <Link href="/programas/personalizados" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 border-b border-white/5 transition-colors">PERFORMANCE PACK</Link>
                                    <Link href="/programas/personalizados" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 transition-colors">FOUNDATION PACK</Link>
                                </div>
                            </div>

                            {/* Dropdown Programas */}
                            <div className="relative group">
                                <button className="text-gold-500 transition-colors text-sm uppercase tracking-wider flex items-center gap-1 py-4">
                                    Programas <i className="fas fa-chevron-down text-[10px] ml-1"></i>
                                </button>
                                <div className="absolute top-full left-0 w-56 bg-black-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden transform group-hover:translate-y-0 translate-y-2">
                                    <Link href="/programas/juniors" className="block px-5 py-3 text-sm text-gold-500 bg-white/5 border-b border-white/5 transition-colors">JUNIOR COACHING</Link>
                                    <Link href="/programas/after-office" className="block px-5 py-3 text-sm text-gray-300 hover:bg-gold-500/10 hover:text-gold-500 transition-colors">AFTER OFFICE TENNIS</Link>
                                </div>
                            </div>

                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="bg-gold-500 hover:bg-gold-400 text-black-900 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)] ml-4">
                                Agenda tu clase
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                                <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-black-800 border-t border-white/10 absolute w-full">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                            <button onClick={() => window.history.back()} className="w-full block px-3 py-3 text-gray-400 border-b border-white/5 uppercase tracking-widest text-sm font-bold">
                                <i className="fas fa-arrow-left mr-2"></i> Volver
                            </button>
                            <a href="/#about" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-gold-500">Sobre mí</a>
                            <a href="/#methodology" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-gold-500">Metodología</a>

                            <div className="py-2 text-left">
                                <span className="block px-3 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Personalizados</span>
                                <Link href="/programas/personalizados" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">START TENIS</Link>
                                <Link href="/programas/personalizados" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">PERFORMANCE PACK</Link>
                                <Link href="/programas/personalizados" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">FOUNDATION PACK</Link>
                            </div>

                            <div className="py-2 text-left border-t border-white/5">
                                <span className="block px-3 text-gold-500 text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Programas</span>
                                <Link href="/programas/juniors" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gold-500 bg-white/5 transition-colors text-sm">JUNIOR COACHING</Link>
                                <Link href="/programas/after-office" onClick={() => setMenuOpen(false)} className="block pl-6 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm">AFTER OFFICE TENNIS</Link>
                            </div>

                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="block w-full mt-4 bg-gold-500 text-black-900 px-5 py-3 rounded font-bold">Agenda tu clase</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* ── BREADCRUMBS ── */}
            <div className="absolute top-24 left-0 w-full z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <nav className="flex text-gray-400 text-xs sm:text-sm" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center hover:text-white transition-colors">
                                <i className="fas fa-home mr-2.5"></i> Inicio
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <i className="fas fa-chevron-right text-[10px] mx-1"></i>
                                <span className="ml-1 md:ml-2">Programas</span>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <i className="fas fa-chevron-right text-[10px] mx-1"></i>
                                <span className="ml-1 md:ml-2 text-gold-500 font-semibold">Junior Coaching</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
                {/* Background Image Banner */}
                <div className="absolute inset-0 z-0">
                    {/* Opacidad incrementada para ver a los niños */}
                    <img src="/images/junior-hero.png" alt="Junior Coaching" className="w-full h-full object-cover object-center opacity-60 transition-transform duration-[10s] hover:scale-105" />
                    {/* Degradados más sutiles */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black-900/80 via-black-900/30 to-transparent w-full md:w-3/4"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 border border-gold-500/30 bg-black-900/50 backdrop-blur-sm text-gold-500 text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
                            <i className="fas fa-star"></i> Formación Integral
                        </span>

                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                            JUNIOR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-yellow-200 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">COACHING</span>
                        </h1>

                        <h2 className="text-2xl sm:text-3xl font-light text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            Metodología de entrenamiento <span className="font-semibold text-gold-500">avanzado para niños</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black-900/30 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                            Junior Coaching es un programa de formación integral dirigido a niños y jóvenes, enfocado en el desarrollo técnico, físico y mental dentro del tenis.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/56932732917?text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20Junior%20Coaching"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-black-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.4)] w-full sm:w-auto group">
                                Contáctanos <i className="fab fa-whatsapp ml-2 text-xl group-hover:scale-110 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block z-20">
                    <a href="#objetivo" className="text-white/60 hover:text-gold-500 transition-colors bg-black-900/50 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm">
                        <i className="fas fa-chevron-down text-2xl"></i>
                    </a>
                </div>
            </section>

            {/* Objective Section */}
            <section id="objetivo" className="py-24 relative border-t border-white/5 bg-black-800">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto bg-black-900 border border-gold-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <i className="fas fa-bullseye text-4xl text-gold-500"></i>
                    </div>

                    <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">El Propósito</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">Objetivo del Programa</h3>

                    <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light">
                        El objetivo principal del programa es construir <strong className="text-white font-semibold">bases sólidas</strong> desde etapas tempranas, priorizando la <strong className="text-gold-500 font-semibold">correcta ejecución técnica</strong>, la comprensión táctica progresiva y la formación de <strong className="text-white font-semibold">hábitos deportivos saludables</strong>.
                    </p>
                </div>
            </section>

            {/* Focus Section (Grid) */}
            <section className="py-24 bg-black-900 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">El enfoque del <span className="text-gold-500">Junior Coaching</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Nuestro programa se basa en pilares fundamentales diseñados para sostener crecimiento anual y generar continuidad en el desarrollo del jugador.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Focus 1 */}
                        <div className="bg-black-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-gold-500/30 hover:bg-black-800 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-layer-group"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Formación Técnica Progresiva</h3>
                            <p className="text-gray-400 leading-relaxed">Paso a paso, construimos una técnica impecable garantizando una base duradera para el futuro.</p>
                        </div>

                        {/* Focus 2 */}
                        <div className="bg-black-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-gold-500/30 hover:bg-black-800 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-running"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Coordinación y Motricidad</h3>
                            <p className="text-gray-400 leading-relaxed">Ejercicios específicos orientados al desarrollo integral de las capacidades físicas del niño.</p>
                        </div>

                        {/* Focus 3 */}
                        <div className="bg-black-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-gold-500/30 hover:bg-black-800 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-exchange-alt"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Trabajo Estructurado</h3>
                            <p className="text-gray-400 leading-relaxed">Labor enfocada en ambos lados de la cancha, con un límite ideal de 6 jugadores por lado para máxima atención.</p>
                        </div>

                        {/* Focus 4 */}
                        <div className="bg-black-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-gold-500/30 hover:bg-black-800 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Doble Supervisión</h3>
                            <p className="text-gray-400 leading-relaxed">Supervisión constante mediante 2 entrenadores por sesión, asegurando que cada detalle sea corregido a tiempo.</p>
                        </div>

                        {/* Focus 5 */}
                        <div className="bg-black-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-gold-500/30 hover:bg-black-800 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Valores y Disciplina</h3>
                            <p className="text-gray-400 leading-relaxed">Fomentamos fuertemente el desarrollo de la disciplina, el compromiso y una sana cultura deportiva.</p>
                        </div>

                        {/* Focus 6 */}
                        <div className="bg-black-800/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-gold-500/30 hover:bg-black-800 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full pointer-events-none group-hover:bg-gold-500/10 transition-colors"></div>
                            <div className="w-14 h-14 bg-gold-500/10 text-gold-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                <i className="fas fa-road"></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Enfoque en el Proceso</h3>
                            <p className="text-gray-400 leading-relaxed">Valoramos el aprendizaje y el avance sostenido a largo plazo antes que un resultado inmediato en el marcador.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-black-800 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                            En Acción
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-bold text-white">
                            Galería de <span className="text-gold-500">Entrenamiento</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {GALLERY.map((img, i) => (
                            <div key={i}
                                className="relative group overflow-hidden rounded-xl aspect-square border border-white/10 cursor-pointer bg-black-900"
                                onClick={() => setModalSrc(img.src)}>
                                <div className="absolute inset-0 bg-black-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                                    <i className="fas fa-search-plus text-gold-500 text-3xl transform scale-50 group-hover:scale-100 transition-transform duration-300"></i>
                                </div>
                                <img src={img.src} alt={img.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Time Load Section */}
            <section className="py-24 bg-black-900 border-t border-white/5 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Carga Horaria del Programa</h2>
                        <p className="text-gray-400">Estructura semanal y mensual diseñada para mantener la regularidad.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Weekly Box */}
                        <div className="bg-gradient-to-br from-black-800 to-black-900 p-[2px] rounded-[2rem] shadow-2xl relative group border border-white/10">
                            <div className="bg-black-900 rounded-[2rem] p-10 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                                <div className="text-gold-500 mb-6 text-5xl opacity-80 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-calendar-week"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-8">Horas por Semana</h3>

                                <ul className="space-y-4 mb-8 w-full">
                                    <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-3">
                                        <span>Frecuencia</span>
                                        <span className="font-semibold text-white">2 sesiones semanales</span>
                                    </li>
                                    <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-3">
                                        <span>Duración</span>
                                        <span className="font-semibold text-white">1 hora por sesión</span>
                                    </li>
                                </ul>

                                <div className="mt-auto bg-black-800 border border-gold-500/20 w-full py-4 rounded-xl shadow-inner">
                                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Total Semanal</p>
                                    <p className="text-3xl font-black text-gold-500">2 Horas</p>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Box */}
                        <div className="bg-gradient-to-br from-gold-600 via-gold-500 to-yellow-400 p-[2px] rounded-[2rem] shadow-[0_0_40px_rgba(212,175,55,0.2)] relative group hover:-translate-y-2 transition-transform duration-500">
                            <div className="bg-black-900 rounded-[2rem] p-10 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full pointer-events-none"></div>
                                <div className="text-gold-500 mb-6 text-5xl group-hover:scale-110 transition-transform">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-8">Horas por Mes</h3>

                                <ul className="space-y-4 mb-8 w-full">
                                    <li className="flex justify-between items-center text-gray-300 border-b border-white/5 pb-3">
                                        <span>Progreso</span>
                                        <span className="font-semibold text-white">2 horas x 4 semanas</span>
                                    </li>
                                </ul>

                                <div className="mt-auto bg-gradient-to-r from-gold-500 to-yellow-500 w-full py-4 rounded-xl shadow-lg">
                                    <p className="text-xs text-black-900/70 font-bold uppercase tracking-widest mb-1">Total Mensual por Grupo</p>
                                    <p className="text-4xl font-black text-black-900">8 Horas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <a href="https://wa.me/56932732917?text=Hola,%20me%20interesa%20inscribir%20a%20mi%20hijo%20en%20el%20programa%20Mensual%20de%20Junior%20Coaching"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-black-900 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Solicitar Cupo <i className="fas fa-check-circle ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── NEWSLETTER ── */}
            <Newsletter />

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
                    className="fixed inset-0 z-[100] bg-black-900/90 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
                    onClick={() => setModalSrc(null)}>
                    <button onClick={() => setModalSrc(null)}
                        className="absolute top-6 right-6 text-white text-4xl hover:text-gold-500 transition-colors z-10 w-12 h-12 flex items-center justify-center bg-black-900/50 rounded-full">
                        &times;
                    </button>
                    <img src={modalSrc} alt="Gallery Full Size"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                        onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}
