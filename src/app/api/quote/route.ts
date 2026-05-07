import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Form fields ලබා ගැනීම
    const fullName = formData.get('fullName') as string;
    const companyName = formData.get('companyName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const origin = formData.get('origin') as string;
    const destination = formData.get('destination') as string;
    const shipmentType = formData.get('shipmentType') as string;
    const cargoType = formData.get('cargoType') as string;
    const details = formData.get('details') as string;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webinquiries.transco@gmail.com',
        pass: 'oimr xczb nygv eiwk',
      },
    });

    await transporter.sendMail({
      from: `"Transco Quote Request" <webinquiries.transco@gmail.com>`,
      to: 'nisalka@transcocargo.lk',
      replyTo: email,
      subject: `📊 New Quote Request: ${shipmentType} from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 650px; margin: auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #f8fafc;">
          <div style="background-color: #0f172a; padding: 30px; text-align: center;">
            <h1 style="color: #F47B20; margin: 0; font-size: 24px;">New Quote Request</h1>
            <p style="color: #cbd5e1; margin-top: 5px;">Transco Cargo Logistics Portal</p>
          </div>
          
          <div style="padding: 30px; background-color: white;">
            <h3 style="color: #2F6DB3; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <h3 style="color: #2F6DB3; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 30px;">Shipment Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Shipment Type:</strong></td>
                <td>${shipmentType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Cargo Type:</strong></td>
                <td>${cargoType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Route:</strong></td>
                <td>${origin} ➔ ${destination}</td>
              </tr>
            </table>

            <h3 style="color: #2F6DB3; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 30px;">Additional Details</h3>
            <div style="padding: 15px; background-color: #f8fafc; border-radius: 8px; font-style: italic;">
              ${details.replace(/\n/g, '<br/>')}
            </div>
          </div>

          <div style="padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
            © ${new Date().getFullYear()} Transco Cargo. Automated Notification.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote Error:", error);
    return NextResponse.json({ error: "Failed to send quote request" }, { status: 500 });
  }
}