'use client';

import Link from 'next/link';
import ViewContentTracker from '../../components/ViewContentTracker';
import WhatsAppTracker from '../../components/WhatsAppTracker';

export default function PromocionPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-gold-500/30 font-sans">
            <ViewContentTracker contentName="Página de Promoción" contentCategory="Marketing" />

            {/* Cinematic Promo Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[80vh]">
                <div className="absolute inset-0 z-0">
                    <img src="/images/hero-bg.jpg" alt="Promo Background" className="w-full h-full object-cover opacity-20 grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-transparent to-[#050505]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[11px] font-black tracking-widest uppercase px-4 py-1.5 rounded-md mb-8 animate-bounce shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                        OFERTA POR TIEMPO LIMITADO
                    </span>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                        Tu Clase de Prueba <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-yellow-600 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">100% GRATIS</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                        Iníciate en el tenis con un estándar europeo. Cupos limitados para nuestros programas <span className="text-gold-500 font-bold italic">Junior Tenis</span> y <span className="text-rose-500 font-bold italic">Tenis para Adultos</span>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="#junior" className="text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-[0.2em] text-sm font-bold">Junior Tenis</a>
                        <div className="hidden sm:block w-2 h-2 rounded-full bg-gold-500/20"></div>
                        <a href="#adultos" className="text-gray-300 hover:text-rose-500 transition-colors uppercase tracking-[0.2em] text-sm font-bold">Tenis para Adultos</a>
                    </div>
                </div>
            </section>

            {/* Junior Section */}
            <section id="junior" className="py-24 relative bg-black-900 border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gold-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src="/images/training-kids.jpg" alt="Junior Tenis" className="relative rounded-[2rem] border border-white/5 w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-gold-500 font-bold text-xs tracking-widest uppercase">
                                Formación Base
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">Junior <span className="text-gold-500">Tenis</span></h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Desarrollamos el talento desde la raíz. En nuestro programa Junior, los niños aprenden técnica biomecánica, coordinación y disciplina en un ambiente motivador dirigido por profesionales con experiencia internacional.
                            </p>
                            <ul className="space-y-4 mb-12">
                                {[
                                    'Grupos reducidos para atención personalizada',
                                    'Metodología europea de enseñanza progresiva',
                                    'Desarrollo de habilidades motrices y tácticas',
                                    'Fomento de valores y disciplina deportiva'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-300">
                                        <i className="fas fa-check-circle text-gold-500 mt-1"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <WhatsAppTracker 
                                text="Hola coach quiero la clase de prueba gratis para junior coaching"
                                className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-black-900 px-10 py-5 rounded-full font-black text-xl transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.4)] w-full sm:w-auto cursor-pointer"
                            >
                                <i className="fab fa-whatsapp mr-2 text-2xl"></i> SOLICITAR PRUEBA GRATIS
                            </WhatsAppTracker>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adultos Section */}
            <section id="adultos" className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white"><span className="text-rose-500">Tenis</span> para Adultos</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                La vía de escape perfecta después del trabajo. Entrenamiento táctico real, alta intensidad cardiovascular y un ambiente adulto exclusivo para quienes buscan competir y mejorar su nivel.
                            </p>
                            <ul className="space-y-4 mb-12">
                                {[
                                    'Horarios flexibles para el mundo ejecutivo',
                                    'Enfoque en estrategia de partido y táctica',
                                    'Entrenamiento físico de alta intensidad',
                                    'Máximo 6 adultos por cancha'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-300">
                                        <i className="fas fa-check-circle text-rose-500 mt-1"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <WhatsAppTracker 
                                text="Hola coach quiero la clase de prueba gratis para adultos"
                                className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-400 text-black px-10 py-5 rounded-full font-black text-xl transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(244,63,94,0.4)] w-full sm:w-auto cursor-pointer"
                            >
                                <i className="fab fa-whatsapp mr-2 text-2xl"></i> SOLICITAR PRUEBA GRATIS
                            </WhatsAppTracker>
                        </div>

                        <div className="relative group order-1 lg:order-2">
                            <div className="absolute -inset-4 bg-rose-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src="/images/promo-adultos.png" alt="Tenis Adultos" className="relative rounded-[2rem] border border-white/5 w-full h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute bottom-8 right-8 bg-rose-500/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-black font-bold text-xs tracking-widest uppercase">
                                Alta Intensidad
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Banner */}
            <section className="py-20 bg-gradient-to-b from-black-900 to-black-800 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-black-950 border border-gold-500/20 rounded-[3rem] p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gold-500/5 pointer-events-none"></div>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">¿Por qué elegir <span className="text-gold-500 text-gradient">Coach Quiroz</span>?</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                            Más de 8 años de experiencia internacional en Alemania e Irlanda. Aplicamos metodologías europeas de alto estándar para que tu avance sea real y medible desde el primer día.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6">
                                <i className="fas fa-trophy text-gold-500 text-3xl mb-4"></i>
                                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Experiencia Pro</h4>
                            </div>
                            <div className="p-6">
                                <i className="fas fa-microscope text-gold-500 text-3xl mb-4"></i>
                                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Análisis Técnico</h4>
                            </div>
                            <div className="p-6">
                                <i className="fas fa-chess-knight text-gold-500 text-3xl mb-4"></i>
                                <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Táctica Avanzada</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} By Coach Quiroz. Todos los derechos reservados.</p>
                <div className="mt-4 flex justify-center gap-6">
                    <Link href="/" className="hover:text-gold-500 transition-colors">Volver al inicio</Link>
                    <Link href="/contacto" className="hover:text-gold-500 transition-colors">Contacto</Link>
                </div>
            </footer>
        </div>
    );
}
