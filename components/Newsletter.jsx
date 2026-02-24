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
                headers: {
                    'Content-Type': 'application/json',
                },
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
        <section className="py-20 relative bg-black-900 border-t border-white/5 overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="bg-black-800/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>

                    <span className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-500 text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-6">
                        Comunidad Exclusiva
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-white">
                        Mantente un paso adelante
                    </h2>

                    <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed font-light">
                        Suscríbete a nuestro boletín para recibir tips tácticos, acceso prioritario a clínicas y noticias del mundo del alto rendimiento.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto justify-center">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <i className="fas fa-envelope text-gray-500"></i>
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@correo.com"
                                required
                                disabled={status === 'loading'}
                                className="w-full bg-black-900/50 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all placeholder-gray-600 disabled:opacity-50"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-gold-500 hover:bg-gold-400 text-black-900 font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-70 flex w-full sm:w-auto items-center justify-center gap-2 group"
                        >
                            {status === 'loading' ? (
                                <i className="fas fa-circle-notch fa-spin"></i>
                            ) : (
                                <>
                                    Suscribirme <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="mt-6 flex items-center justify-center gap-2 text-green-400 animate-fade-in-up text-sm font-medium">
                            <i className="fas fa-check-circle"></i> <span>{message}</span>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mt-6 flex items-center justify-center gap-2 text-rose-400 animate-fade-in-up text-sm font-medium">
                            <i className="fas fa-exclamation-circle"></i> <span>{message}</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
