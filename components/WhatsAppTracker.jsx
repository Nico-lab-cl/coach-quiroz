'use client';

import React from 'react';

export default function WhatsAppTracker({ phoneNumber = "56932732917", text = "", className, children }) {
    const handleClick = (e) => {
        e.preventDefault();
        
        const eventId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        
        // 1. Fire Client Pixel
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Contact', {}, { eventID: eventId });
        }

        // 2. Fire Server CAPI (fire and forget)
        fetch('/api/meta-event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventName: 'Contact',
                eventId,
                eventSourceUrl: window.location.href,
            })
        }).catch(err => console.warn('Meta CAPI Contact tracking error:', err));

        // 3. Redirect to WhatsApp
        const url = new URL(`https://wa.me/${phoneNumber}`);
        if (text) url.searchParams.set('text', text);
        
        // Slight delay to ensure the events are dispatched before navigating away
        setTimeout(() => {
            window.open(url.toString(), '_blank', 'noopener,noreferrer');
        }, 150);
    };

    return (
        <a href={`https://wa.me/${phoneNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`} 
           onClick={handleClick} 
           className={className}>
            {children}
        </a>
    );
}
