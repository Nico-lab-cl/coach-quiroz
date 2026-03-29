'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { v4 as uuidv4 } from 'uuid';

function MetaPixelEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const [externalId, setExternalId] = useState(null);

    // Initialize or retrieve externalId
    useEffect(() => {
        let storedId = localStorage.getItem('cq_external_id');
        if (!storedId) {
            storedId = uuidv4();
            localStorage.setItem('cq_external_id', storedId);
        }
        
        // Save to cookies as well for server-side access
        document.cookie = `cq_external_id=${storedId}; path=/; max-age=31536000; SameSite=Lax`;
        setExternalId(storedId);
    }, []);

    useEffect(() => {
        if (!pixelId) return;

        // Ensure fbq exists before trying to call it
        if (typeof window !== 'undefined' && window.fbq) {
            const external_id = localStorage.getItem('cq_external_id');
            const initData = external_id ? { external_id } : {};
            
            // Only init if not already initialized
            if (!window.fbq.initialized) {
                window.fbq('init', pixelId, initData);
                window.fbq.initialized = true;
            }
            
            // Generate standard page view event ID
            const eventId = `pv_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
            window.fbq('track', 'PageView', {}, { eventID: eventId });
        }
    }, [pathname, searchParams, pixelId]);

    return null;
}

export default function MetaPixel() {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    if (!pixelId) return null;

    return (
        <>
            <Suspense fallback={null}>
                <MetaPixelEvents />
            </Suspense>
            <Script
                id="meta-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                    `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                    alt="meta-pixel"
                />
            </noscript>
        </>
    );
}
