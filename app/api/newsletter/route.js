import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, referrer } = body;

        // Validation
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { message: 'Por favor, introduce un correo electrónico válido.' },
                { status: 400 }
            );
        }

        // Check if already subscribed
        const existingSubscriber = await prisma.newsletter.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            return NextResponse.json(
                { message: '¡Este correo ya está suscrito a nuestras novedades!' },
                { status: 400 }
            );
        }

        // Get IP from headers
        const forwarded = request.headers.get('x-forwarded-for');
        const realIp = request.headers.get('x-real-ip');
        const ipAddress = forwarded ? forwarded.split(',')[0].trim() : realIp || 'unknown';

        // Get User Agent
        const userAgent = request.headers.get('user-agent') || '';

        // Geolocation lookup via ip-api.com
        let country = null;
        let city = null;
        try {
            if (ipAddress && ipAddress !== 'unknown' && ipAddress !== '::1' && ipAddress !== '127.0.0.1') {
                const geoRes = await fetch(`http://ip-api.com/json/${ipAddress}?fields=status,country,city`, {
                    signal: AbortSignal.timeout(3000),
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
            console.warn('Geo lookup failed:', geoError.message);
        }

        // Create subscriber with tracking data
        await prisma.newsletter.create({
            data: {
                email,
                utmSource: utmSource || null,
                utmMedium: utmMedium || null,
                utmCampaign: utmCampaign || null,
                utmTerm: utmTerm || null,
                utmContent: utmContent || null,
                ipAddress,
                country,
                city,
                userAgent,
                referrer: referrer || null,
            },
        });

        return NextResponse.json(
            { message: '¡Gracias por suscribirte al boletín de Coach Quiroz!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { message: 'Ocurrió un error al procesar tu suscripción. Inténtalo de nuevo.' },
            { status: 500 }
        );
    }
}
