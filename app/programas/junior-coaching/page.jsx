import Link from 'next/link';

export const metadata = {
    title: 'Junior Coaching | By Coach Quiroz',
    description: 'Junior Coaching es un programa de formación integral dirigido a niños y jóvenes, enfocado en el desarrollo técnico, físico y mental dentro del tenis.',
};

export default function JuniorCoachingPage() {
    return (
        <div className="min-h-screen bg-black-900 pb-20 selection:bg-gold-500 selection:text-black-900 font-sans">
            {/* Dynamic Navbar / Back Button */}
            <nav className="fixed w-full z-50 transition-all duration-300 bg-black-900/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex-shrink-0 flex items-center group text-white">
                            <i className="fas fa-arrow-left mr-3 text-gold-500 group-hover:-translate-x-1 transition-transform"></i>
                            <span className="text-sm font-bold tracking-widest uppercase hover:text-gold-500 transition-colors">Volver al Inicio</span>
                        </Link>
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-10 w-auto rounded-full border border-gold-500/30" src="/images/logo.jpeg" alt="Logo By Coach Quiroz" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
                {/* Background Image Banner */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/junior-hero.png" alt="Junior Coaching" className="w-full h-full object-cover object-center opacity-40 transition-transform duration-[10s] hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/70 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black-900/90 via-black-900/50 to-transparent w-full md:w-3/4"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/10 text-gold-500 text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
                            <i className="fas fa-star"></i> Formación Integral
                        </span>

                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none text-white drop-shadow-lg">
                            JUNIOR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-yellow-200">COACHING</span>
                        </h1>

                        <h2 className="text-2xl sm:text-3xl font-light text-white mb-6">
                            Metodología de entrenamiento <span className="font-semibold text-gold-500">avanzado para niños</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-2xl">
                            Junior Coaching es un programa de formación integral dirigido a niños y jóvenes, enfocado en el desarrollo técnico, físico y mental dentro del tenis.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/56932732917?text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20Junior%20Coaching"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-black-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.3)] w-full sm:w-auto group">
                                Contáctanos <i className="fab fa-whatsapp ml-2 text-xl group-hover:scale-110 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block z-20">
                    <a href="#objetivo" className="text-white/40 hover:text-gold-500 transition-colors">
                        <i className="fas fa-chevron-down text-3xl"></i>
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
            <section className="py-24 bg-black-900 relative">
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

            {/* Time Load Section */}
            <section className="py-24 bg-black-800 border-t border-white/5 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Carga Horaria del Programa</h2>
                        <p className="text-gray-400">Estructura semanal y mensual diseñada para mantener la regularidad.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Weekly Box */}
                        <div className="bg-gradient-to-br from-black-900 to-black-800 p-[2px] rounded-[2rem] shadow-2xl relative group">
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

                                <div className="mt-auto bg-gold-500/10 border border-gold-500/20 w-full py-4 rounded-xl">
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
                            className="inline-flex items-center justify-center bg-white hover:bg-gray-200 text-black-900 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                            Solicitar Cupo <i className="fas fa-check-circle ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
