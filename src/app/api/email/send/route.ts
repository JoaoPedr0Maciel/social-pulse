import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Email } from '../../../../../react-email-starter/emails/test-email'


export async function POST(req: Request) {
  const { email, name, whatsApp } = await req.json()

  try {
    const resend = new Resend("re_ZMZuG52C_JYegCXquGj3YxWhKEn89nUVr");
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
