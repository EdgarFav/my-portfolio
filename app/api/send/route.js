import WelcomeEmail from '../../emails';
import { Resend } from 'resend';
const fromEmail = process.env.FROM_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
    const { email, subject, userFirstname } = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [email, fromEmail],
            subject: subject,
            react: WelcomeEmail({ userFirstname: email }),
        });

        if (error) {
            console.error('Error al enviar correo: ', error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
