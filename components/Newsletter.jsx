'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        setMessage('');
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('success');
                setMessage(data.message);
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Error al suscribirse.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Ocurrió un error. Comprueba tu conexión de red.');
        }
    };

    return (
        <section className="relative py-28 overflow-hidden bg-[#0a0a0a]">
            {/* Background: image with strong dark overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/gallery-10.jpg"
                    alt="Newsletter Background"
                    className="w-full h-full object-cover object-center opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
            </div>

            {/* Gold glow center */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Badge */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px w-10 bg-[#D4AF37]/40"></div>
                    <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.4em] uppercase">Boletín Oficial</span>
                    <div className="h-px w-10 bg-[#D4AF37]/40"></div>
                </div>

                {/* Heading — white title + gold word clearly separated */}
                <h2 className="font-black tracking-tight leading-none mb-6">
                    <span className="block text-5xl sm:text-6xl lg:text-7xl text-white uppercase">Ve un paso</span>
                    <span className="block text-5xl sm:text-6xl lg:text-7xl uppercase mt-1" style={{ color: '#D4AF37', textShadow: '0 0 40px rgba(212,175,55,0.4)' }}>
                        adelante
                    </span>
                </h2>

                {/* Thin divider */}
                <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto mb-8"></div>

                {/* Subtitle */}
                <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed text-base sm:text-lg font-light">
                    Suscríbete para recibir <span className="text-white font-medium">tips tácticos</span> y noticias del mundo del alto rendimiento directamente en tu correo.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <i className="fas fa-envelope text-[#D4AF37]/60 text-sm"></i>
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@correo.com"
                            required
                            disabled={status === 'loading'}
                            className="w-full bg-white/5 border border-white/15 hover:border-[#D4AF37]/40 focus:border-[#D4AF37]/70 text-white rounded-xl py-4 pl-11 pr-4 focus:outline-none transition-all placeholder-gray-600 disabled:opacity-50 text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#e8c547] active:scale-95 text-black font-black px-8 py-4 rounded-xl transition-all disabled:opacity-60 uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] whitespace-nowrap group"
                    >
                        {status === 'loading' ? (
                            <i className="fas fa-circle-notch fa-spin"></i>
                        ) : (
                            <>
                                Unirme <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                            </>
                        )}
                    </button>
                </form>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="mt-5 inline-flex items-center gap-2 bg-green-500/10 border border-green-400/30 text-green-400 text-sm font-medium rounded-full px-5 py-2">
                        <i className="fas fa-check-circle"></i> <span>{message}</span>
                    </div>
                )}
                {status === 'error' && (
                    <div className="mt-5 inline-flex items-center gap-2 bg-rose-500/10 border border-rose-400/30 text-rose-400 text-sm font-medium rounded-full px-5 py-2">
                        <i className="fas fa-exclamation-circle"></i> <span>{message}</span>
                    </div>
                )}

                {/* Fine print */}
                <p className="mt-8 text-gray-600 text-xs tracking-widest uppercase">Sin spam &nbsp;·&nbsp; Cancela cuando quieras</p>
            </div>
        </section>
    );
}
