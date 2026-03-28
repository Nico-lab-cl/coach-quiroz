import ContactForm from '../../components/ContactForm';
import Link from 'next/link';

export const metadata = {
    title: 'Contacto - By Coach Quiroz | Clases de Tenis en Viña del Mar',
    description: 'Contáctanos para reservar tus clases de tenis en Viña del Mar y Concón. Entrenamiento personalizado, junior tenis y clases para adultos con Coach Quiroz.',
};

export default function ContactoPage() {
    return (
        <>
            {/* Hero compacto */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-gold-500/8 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-gold-500/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back arrow */}
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors mb-6 group">
                        <i className="fas fa-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></i>
                        <span className="text-sm">Volver al inicio</span>
                    </Link>

                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link href="/" className="hover:text-gold-500 transition-colors">Inicio</Link>
                        <i className="fas fa-chevron-right text-[8px] text-gray-600"></i>
                        <span className="text-gold-500">Contacto</span>
                    </nav>

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-[10px] font-black tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6">
                            Empieza hoy
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Reserva tu <span className="text-gradient">primera clase</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Completa el formulario y nos comunicaremos contigo para agendar tu clase de prueba o resolver cualquier duda.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                        {/* Left: Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Información de contacto</h2>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    También puedes contactarnos directamente por cualquiera de estos canales.
                                </p>
                            </div>

                            {/* WhatsApp */}
                            <a href="https://wa.me/56932732917" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 hover:border-green-500/30 rounded-2xl transition-all group hover:bg-green-500/5">
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shrink-0">
                                    <i className="fab fa-whatsapp text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                                    <p className="text-gray-500 text-sm">+56 9 3273 2917</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:contacto@bycoachquiroz.cl"
                                className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 hover:border-gold-500/30 rounded-2xl transition-all group hover:bg-gold-500/5">
                                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black-900 transition-all shrink-0">
                                    <i className="fas fa-envelope text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Email</p>
                                    <p className="text-gray-500 text-sm">contacto@bycoachquiroz.cl</p>
                                </div>
                            </a>

                            {/* Locations */}
                            <div className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                                        <i className="fas fa-map-marker-alt text-lg"></i>
                                    </div>
                                    <p className="text-white font-semibold text-sm">Ubicaciones</p>
                                </div>
                                <ul className="space-y-3 pl-2">
                                    <li className="flex items-center gap-3 text-gray-400 text-sm">
                                        <i className="fas fa-circle text-[4px] text-gold-500"></i>
                                        Club El Refugio · Viña del Mar
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-400 text-sm">
                                        <i className="fas fa-circle text-[4px] text-gold-500"></i>
                                        Club de Tenis Con Con · Concón
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-black-800/60 backdrop-blur-md border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                                {/* Decorative corner glow */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2">Solicita información</h3>
                                    <p className="text-gray-500 text-sm mb-8">Todos los campos son obligatorios.</p>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
