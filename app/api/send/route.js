import WelcomeEmail from '../../emails';
import { Resend } from 'resend';
import { rateLimiter } from '../../lib/rateLimiter';

const fromEmail = process.env.FROM_EMAIL;
const principalEmail = process.env.PRINCIPAL_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

// Obtener IP del cliente
function getClientIP(request) {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const cfConnectingIP = request.headers.get('cf-connecting-ip');

    if (cfConnectingIP) return cfConnectingIP;
    if (forwarded) return forwarded.split(',')[0].trim();
    if (realIP) return realIP;
    return 'unknown';
}

// Validar formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function POST(req) {
    const clientIP = getClientIP(req);

    try {
        const { email, firstName, message } = await req.json();

        // Validaciones básicas
        if (!email || !firstName || !message) {
            return Response.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        // Validar formato de email
        if (!isValidEmail(email)) {
            return Response.json(
                { error: 'Formato de email inválido' },
                { status: 400 }
            );
        }

        // Verificar rate limiting
        const rateLimitCheck = rateLimiter.isAllowed(clientIP, email);

        if (!rateLimitCheck.allowed) {
            console.log(`Rate limit exceeded for IP: ${clientIP}, Email: ${email}, Reason: ${rateLimitCheck.reason}`);

            const message = rateLimitCheck.reason === 'ip_limit'
                ? 'Demasiados mensajes enviados desde esta conexión. Intenta de nuevo en 15 minutos.'
                : 'Has enviado demasiados mensajes con este email. Intenta de nuevo en 15 minutos.';

            return Response.json(
                {
                    error: message,
                    retryAfter: 900 // 15 minutos en segundos
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': '900'
                    }
                }
            );
        }

        // Validar longitud de campos
        if (firstName.trim().length === 0 || firstName.length > 50) {
            return Response.json(
                { error: 'El nombre debe tener entre 1 y 50 caracteres' },
                { status: 400 }
            );
        }

        if (message.trim().length === 0 || message.length > 1000) {
            return Response.json(
                { error: 'El mensaje debe tener entre 1 y 1000 caracteres' },
                { status: 400 }
            );
        }

        // Enviar email
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [email, principalEmail],
            subject: 'Nuevo mensaje de contacto',
            react: WelcomeEmail({ userFirstname: firstName.trim(), message: message.trim() }),
        });

        if (error) {
            console.error('Error al enviar correo: ', error);
            return Response.json(
                { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
                { status: 500 }
            );
        }

        console.log(`Email sent successfully from IP: ${clientIP}, Email: ${email}`);
        return Response.json({ success: true, message: 'Mensaje enviado correctamente' });

    } catch (error) {
        console.error('Error en POST:', error);
        return Response.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
