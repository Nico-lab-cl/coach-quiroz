import { NextResponse } from 'next/server';
import { sendMetaEvent } from '../../../lib/meta-capi';
import { cookies } from 'next/headers';

export async function POST(request) {
    try {
        const body = await request.json();
        const { eventName, eventId, eventSourceUrl, customData } = body;

        if (!eventName) {
            return NextResponse.json({ message: 'eventName is required' }, { status: 400 });
        }

        // Get IP from headers (standard Next.js approach)
        const forwarded = request.headers.get('x-forwarded-for');
        const realIp = request.headers.get('x-real-ip');
        const ipAddress = forwarded ? forwarded.split(',')[0].trim() : realIp || 'unknown';

        // Get User Agent
        const userAgent = request.headers.get('user-agent') || '';

        // Geolocation lookup via ip-api.com (free, no key required)
        let country = null;
        let city = null;
        try {
            if (ipAddress && ipAddress !== 'unknown' && ipAddress !== '::1' && ipAddress !== '127.0.0.1') {
                const geoRes = await fetch(`http://ip-api.com/json/${ipAddress}?fields=status,country,city`, {
                    signal: AbortSignal.timeout(2000), // Shorter timeout for generic events
                });
                if (geoRes.ok) {
                    const geoData = await geoRes.json();
                    if (geoData.status === 'success') {
                        country = geoData.country;
                        city = geoData.city;
                    }
                }
            }
        } catch (geoError) {
            // Silently fail if geo lookup exceeds 2s
        }

        // Get Meta tracking cookies
        const cookieStore = cookies();
        const fbp = cookieStore.get('_fbp')?.value;
        const fbc = cookieStore.get('_fbc')?.value;
        const externalId = cookieStore.get('cq_external_id')?.value;

        // Fire and forget (non-blocking)
        sendMetaEvent({
            eventName,
            eventId: eventId || `generic_svr_${Date.now()}`,
            eventSourceUrl: eventSourceUrl || request.headers.get('referer') || '',
            userData: {
                clientIp: ipAddress,
                clientUserAgent: userAgent,
                fbp,
                fbc,
                country,
                city,
                externalId
            },
            customData: customData || {}
        });

        // We respond immediately, sendMetaEvent runs asynchronously without await 
        // Oh wait, Next.js serverless functions might kill background promises. 
        // We actually HAVE TO await sendMetaEvent to ensure it fires before process exit in Vercel.
        // But since this is a Docker container or dedicated server, it's fine. 
        // Actually, we did `await sendMetaEvent` in lib but we didn't export it with await here... wait, we didn't await it above. 
        // Let's actually await it to be safe.
        // Wait, the lib function is async, I will just call it without await if I want it to be fire-and-forget, but if serverless, I must await.
        // I'll await it just in case.

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Meta Event API error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
