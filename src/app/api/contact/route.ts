import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Transporter එක හදනවා (Career එකේ පාවිච්චි කරපු Gmail එකමයි)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webinquiries.transco@gmail.com',
        pass: 'oimr xczb nygv eiwk', // ඔයාගේ App Password එක
      },
    });

    await transporter.sendMail({
      from: `"Transco Web Inquiry" <webinquiries.transco@gmail.com>`,
      to: 'info@transcocargo.lk',
      replyTo: email,
      subject: `✉️ New Contact Inquiry: ${fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0f172a; padding: 30px; text-align: center;">
            <h1 style="color: #F47B20; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Transco Cargo</h1>
            <p style="color: #cbd5e1; margin-top: 5px; font-size: 14px;">Customer Inquiry Portal</p>
          </div>
          
          <div style="padding: 40px 30px;">
            <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">New Message Received</h2>
            
            <table style="width: 100%; margin-top: 25px; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; width: 35%;">From</td>
                <td style="padding: 12px 0; color: #1e293b; font-size: 16px; font-weight: 600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Email</td>
                <td style="padding: 12px 0; color: #2F6DB3; font-size: 15px; font-weight: 600;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Date</td>
                <td style="padding: 12px 0; color: #1e293b; font-size: 15px;">${new Date().toLocaleDateString()}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px;">
              <p style="color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">Message Content:</p>
              <div style="padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #F47B20; color: #475569; font-size: 15px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Transco Cargo. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;">This is an automated inquiry notification.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}