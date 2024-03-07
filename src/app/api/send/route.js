// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Deepak <deepak0103gupta@gmail.com>',
      to: ['deepak0103gupta@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
            <p>Email Body</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
