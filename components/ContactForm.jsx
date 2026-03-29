'use client';

import { useState, useEffect } from 'react';

const CLASS_OPTIONS = [
    { value: '', label: 'Selecciona una opción' },
    { value: 'personalizadas', label: 'Clases Personalizadas (1 a 1)' },
    { value: 'junior', label: 'Junior Tenis (Formación)' },
    { value: 'adultos', label: 'Tenis para Adultos' },
];

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        classInterest: '',
    });
    const [utmParams, setUtmParams] = useState({});
    const [referrer, setReferrer] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    // Capture UTM params and referrer on mount
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUtmParams({
            utmSource: params.get('utm_source') || '',
            utmMedium: params.get('utm_medium') || '',
            utmCampaign: params.get('utm_campaign') || '',
            utmTerm: params.get('utm_term') || '',
            utmContent: params.get('utm_content') || '',
        });
        setReferrer(document.referrer || '');
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone || !form.classInterest) return;
        setStatus('loading');
        setMessage('');

        // Unique event ID for Meta Deduplication
        const eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    ...utmParams,
                    referrer,
                    eventId
                }),
            });
            const data = await res.json();
            if (res.ok) {
                // Client-side pixel tracking
                if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'Lead', {}, { eventID: eventId });
                }

                setStatus('success');
                setMessage(data.message);
                setForm({ name: '', email: '', phone: '', classInterest: '' });
            } else {
                setStatus('error');
                setMessage(data.message || 'Error al enviar el formulario.');
            }
        } catch (err) {
            setStatus('error');
            setMessage('Ocurrió un error de red. Inténtalo nuevamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide uppercase">
                    <i className="fas fa-user text-gold-500 mr-2 text-xs"></i>Nombre completo
                </label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 hover:border-gold-500/30 focus:border-gold-500/60 text-white rounded-xl py-4 px-5 focus:outline-none transition-all placeholder-gray-600 disabled:opacity-50 text-sm focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide uppercase">
                    <i className="fas fa-envelope text-gold-500 mr-2 text-xs"></i>Correo electrónico
                </label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    placeholder="tu@correo.com"
                    className="w-full bg-white/5 border border-white/10 hover:border-gold-500/30 focus:border-gold-500/60 text-white rounded-xl py-4 px-5 focus:outline-none transition-all placeholder-gray-600 disabled:opacity-50 text-sm focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide uppercase">
                    <i className="fas fa-phone text-gold-500 mr-2 text-xs"></i>Teléfono
                </label>
                <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    placeholder="+56 9 1234 5678"
                    className="w-full bg-white/5 border border-white/10 hover:border-gold-500/30 focus:border-gold-500/60 text-white rounded-xl py-4 px-5 focus:outline-none transition-all placeholder-gray-600 disabled:opacity-50 text-sm focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                />
            </div>

            {/* Class Interest */}
            <div>
                <label htmlFor="contact-class" className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide uppercase">
                    <i className="fas fa-tennis-ball text-gold-500 mr-2 text-xs"></i>Clase de interés
                </label>
                <div className="relative">
                    <select
                        id="contact-class"
                        name="classInterest"
                        value={form.classInterest}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/5 border border-white/10 hover:border-gold-500/30 focus:border-gold-500/60 text-white rounded-xl py-4 px-5 focus:outline-none transition-all disabled:opacity-50 text-sm appearance-none cursor-pointer focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                    >
                        {CLASS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value} className="bg-[#121212] text-white">
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <i className="fas fa-chevron-down text-gold-500/60 text-xs"></i>
                    </div>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 active:scale-[0.98] text-black-900 font-black px-8 py-4 rounded-xl transition-all disabled:opacity-60 uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] group"
            >
                {status === 'loading' ? (
                    <i className="fas fa-circle-notch fa-spin text-lg"></i>
                ) : (
                    <>
                        Enviar solicitud
                        <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                    </>
                )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-400/30 text-green-400 text-sm font-medium rounded-xl px-5 py-4 animate-fade-in-up">
                    <i className="fas fa-check-circle text-lg"></i>
                    <span>{message}</span>
                </div>
            )}
            {status === 'error' && (
                <div className="flex items-center gap-3 bg-rose-500/10 border border-rose-400/30 text-rose-400 text-sm font-medium rounded-xl px-5 py-4 animate-fade-in-up">
                    <i className="fas fa-exclamation-circle text-lg"></i>
                    <span>{message}</span>
                </div>
            )}
        </form>
    );
}
