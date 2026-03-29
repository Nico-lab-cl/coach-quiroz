'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex-shrink-0 flex items-center group cursor-pointer text-white">
                        <img className="h-12 w-auto rounded-full border border-gold-500/30 group-hover:border-gold-500 transition-colors duration-300" src="/images/logo.jpeg" alt="Logo" />
                        <span className="ml-3 text-xl font-bold tracking-tight group-hover:text-gold-500 transition-colors duration-300">BY <span className="text-gold-500 group-hover:text-white transition-colors duration-300">COACHQUIROZ</span></span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/#about" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Sobre mí</Link>
                        <Link href="/#methodology" className="text-gray-300 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">Metodología</Link>

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

                        <Link href="/contacto"
                            className="bg-gold-500 hover:bg-gold-400 text-black-900 px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)] ml-4">
                            Contacto
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-[#121212] border-t border-white/10 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <Link href="/#about" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-gold-500">Sobre mí</Link>
                        <Link href="/#methodology" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-300 hover:text-gold-500">Metodología</Link>

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

                        <Link href="/contacto" onClick={() => setMenuOpen(false)}
                            className="block w-full mt-4 bg-gold-500 text-black-900 px-5 py-3 rounded font-bold text-center">Contacto</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
