import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullName') as string;
    const position = formData.get('position') as string;
    const file = formData.get('file') as File;

    // Transporter එක හදනවා
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
       user: 'webinquiries.transco@gmail.com', // කෙලින්ම email එක දාන්න
       pass: 'oimr xczb nygv eiwk',
      },
    });

    const buffer = Buffer.from(await file.arrayBuffer());

    // Email එක යවනවා
    // Email එක යවනවා
    await transporter.sendMail({
      from: `Transco Cargo Careers <${process.env.EMAIL_USER}>`,
      to: 'careers@transcocargo.lk',
      subject: `🚀 New Job Application: ${position} - ${fullName}`,
      // Text version එකත් තියෙන්න දෙන්න (fallback එකක් විදිහට)
      text: `New Application Received:\nName: ${fullName}\nPosition: ${position}`,
      // මෙන්න HTML Template එක
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0f172a; padding: 30px; text-align: center;">
            <h1 style="color: #F47B20; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Transco Cargo</h1>
            <p style="color: #cbd5e1; margin-top: 5px; font-size: 14px;">Career Application Portal</p>
          </div>
          
          <div style="padding: 40px 30px;">
            <h2 style="color: #1e293b; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">New Application Received</h2>
            
            <p style="color: #64748b; font-size: 16px; line-height: 1.6;">A candidate has submitted a new job application through the website.</p>
            
            <table style="width: 100%; margin-top: 25px; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase; width: 35%;">Full Name</td>
                <td style="padding: 12px 0; color: #1e293b; font-size: 16px; font-weight: 600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Applying For</td>
                <td style="padding: 12px 0; color: #F47B20; font-size: 16px; font-weight: 700;">${position}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #94a3b8; font-size: 13px; font-weight: bold; text-transform: uppercase;">Submission Date</td>
                <td style="padding: 12px 0; color: #1e293b; font-size: 15px;">${new Date().toLocaleDateString()}</td>
              </tr>
            </table>
            
            <div style="margin-top: 35px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #F47B20;">
              <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.5;">
                <strong>Note:</strong> The candidate's CV is attached to this email as a PDF file. Please review it for further evaluation.
              </p>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Transco Cargo. All rights reserved.</p>
            <p style="margin: 5px 0 0 0;">This is an automated system notification.</p>
          </div>
        </div>
      `,
      attachments: [{
        filename: file.name,
        content: buffer,
      }],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}