import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, classInterest, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, referrer } = body;

        // Validation
        if (!name || !email || !phone || !classInterest) {
            return NextResponse.json(
                { message: 'Por favor, completa todos los campos obligatorios.' },
                { status: 400 }
            );
        }

        if (!email.includes('@')) {
            return NextResponse.json(
                { message: 'Por favor, introduce un correo electrónico válido.' },
                { status: 400 }
            );
        }

        // Get IP from headers
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
            // Non-blocking: if geo lookup fails, we still save the lead
            console.warn('Geo lookup failed:', geoError.message);
        }

        // Create lead in database
        await prisma.contactLead.create({
            data: {
                name,
                email,
                phone,
                classInterest,
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
            { message: '¡Gracias por contactarnos! Nos comunicaremos contigo a la brevedad.' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { message: 'Ocurrió un error al enviar tu solicitud. Inténtalo nuevamente.' },
            { status: 500 }
        );
    }
}
