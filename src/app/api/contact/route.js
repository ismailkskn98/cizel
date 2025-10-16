import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullName, email, phone, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"İletişim Formu" <${process.env.EMAIL_TO}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `İletişim Formu - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Yeni İletişim Formu
          </h2>
          
          <div style="margin: 20px 0;">
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold; width: 150px;">
                  Ad Soyad:
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                  ${fullName}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">
                  E-posta:
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">
                  Telefon:
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                  ${phone}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">
                  Konu:
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                  ${subject}
                </td>
              </tr>
            </table>

            ${
              message
                ? `
              <div style="margin-top: 20px;">
                <h3 style="color: #555;">Mesaj:</h3>
                <p style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #007bff;">
                  ${message}
                </p>
              </div>
            `
                : ""
            }
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>Bu e-posta otomatik olarak iletişim formundan gönderilmiştir.</p>
            <p>Tarih: ${new Date().toLocaleString("tr-TR")}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Başvurunuz başarıyla gönderildi!",
    });
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return Response.json(
      {
        success: false,
        message: "Başvuru gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
