import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Make sure this path points to the correct prisma client instance

export async function POST(request) {
    try {
        const body = await request.json();
        const { email } = body;

        // Validation simple
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { message: 'Por favor, introduce un correo electrónico válido.' },
                { status: 400 }
            );
        }

        // Search if email already exists
        const existingSubscriber = await prisma.newsletter.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            return NextResponse.json(
                { message: '¡Este correo ya está suscrito a nuestras novedades!' },
                { status: 400 }
            );
        }

        // Create new subscriber
        await prisma.newsletter.create({
            data: {
                email,
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
