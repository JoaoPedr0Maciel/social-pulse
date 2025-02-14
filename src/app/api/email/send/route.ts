import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Email } from '../../../../../react-email-starter/emails/test-email'


export async function POST(req: Request) {
  const { email, name, whatsApp } = await req.json()
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  try {
    const resend = new Resend(RESEND_API_KEY);
    const { data } = await resend.emails.send({
      from: 'delivered@resend.dev',
      to: ['joaopedromaciel007@gmail.com'],
      subject: 'Company',
      react: Email({ email, name, whatsApp }),
    });
    console.log(data)
    return NextResponse.json({ success: 'email sent successfully' })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
