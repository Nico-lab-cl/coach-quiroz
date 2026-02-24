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
        <section className="relative py-24 overflow-hidden">
            {/* Full background image with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/gallery-10.jpg"
                    alt="Newsletter Background"
                    className="w-full h-full object-cover object-center grayscale opacity-30"
                />
                {/* Strong dark overlay so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0500] via-black/95 to-[#0a0500]"></div>
                {/* Decorative gold glow spots */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/20 rounded-full blur-[130px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/15 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            {/* Decorative diagonal lines */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Top Divider Line */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold-500/60"></div>
                    <i className="fas fa-tennis-ball text-gold-500 text-xl"></i>
                    <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold-500/60"></div>
                </div>

                {/* Label */}
                <span className="inline-block border border-gold-500/40 bg-gold-500/10 text-gold-400 text-[10px] font-black tracking-[0.4em] uppercase px-5 py-2 rounded-full mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    Boletín Oficial
                </span>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                    <span className="text-white">Ve un paso</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-yellow-500">
                        adelante
                    </span>
                </h2>

                {/* Subtitle */}
                <p className="text-gray-300/80 mb-10 max-w-xl mx-auto leading-relaxed text-lg font-light">
                    Suscríbete a nuestro boletín para recibir tips tácticos y noticias del mundo del alto rendimiento.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto justify-center">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <i className="fas fa-envelope text-gold-500/60"></i>
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@correo.com"
                            required
                            disabled={status === 'loading'}
                            className="w-full bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold-500/70 focus:bg-white/10 transition-all placeholder-gray-500 disabled:opacity-50"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="relative overflow-hidden bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-400 hover:to-yellow-400 text-black font-black px-8 py-4 rounded-xl transition-all disabled:opacity-70 flex w-full sm:w-auto items-center justify-center gap-2 group shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] uppercase tracking-widest text-sm"
                    >
                        {status === 'loading' ? (
                            <i className="fas fa-circle-notch fa-spin text-lg"></i>
                        ) : (
                            <>
                                Unirme <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                            </>
                        )}
                    </button>
                </form>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="mt-6 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium rounded-full px-5 py-2">
                        <i className="fas fa-check-circle"></i> <span>{message}</span>
                    </div>
                )}
                {status === 'error' && (
                    <div className="mt-6 inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-medium rounded-full px-5 py-2">
                        <i className="fas fa-exclamation-circle"></i> <span>{message}</span>
                    </div>
                )}

                {/* Bottom fine print */}
                <p className="mt-8 text-gray-600 text-xs tracking-widest uppercase">Sin spam. Cancela cuando quieras.</p>
            </div>
        </section>
    );
}
