'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ViewContentTracker({ contentName, contentCategory = 'Programas' }) {
    const pathname = usePathname();
    const hasFired = useRef(false);

    useEffect(() => {
        if (hasFired.current) return;
        hasFired.current = true;

        const eventId = `vc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        const customData = { content_name: contentName, content_category: contentCategory };

        // 1. Fire Client Pixel
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', customData, { eventID: eventId });
        }

        // 2. Fire Server CAPI
        fetch('/api/meta-event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventName: 'ViewContent',
                eventId,
                eventSourceUrl: window.location.href,
                customData
            })
        }).catch(err => console.warn('Meta CAPI ViewContent tracking error:', err));
    }, [pathname, contentName, contentCategory]);

    return null;
}
