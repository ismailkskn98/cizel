import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const experience = formData.get("experience");
    const education = formData.get("education");
    const message = formData.get("message");
    const cv = formData.get("cv");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = [];
    if (cv && cv.size > 0) {
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name,
        content: buffer,
      });
    }

    const mailOptions = {
      from: `"Kariyer Başvurusu" <${process.env.EMAIL_TO}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Yeni Kariyer Başvurusu - ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Yeni Kariyer Başvurusu
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Başvuru Bilgileri:</h3>
            
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
                  Pozisyon:
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                  ${position}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">
                  Deneyim:
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                  ${experience}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">
                  Eğitim:
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">
                  ${education}
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

            ${
              cv
                ? `
              <p style="margin-top: 20px; color: #666;">
                📎 CV dosyası ektedir: <strong>${cv.name}</strong> (${(cv.size / 1024).toFixed(2)} KB)
              </p>
            `
                : ""
            }
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>Bu e-posta otomatik olarak kariyer başvuru formundan gönderilmiştir.</p>
            <p>Tarih: ${new Date().toLocaleString("tr-TR")}</p>
          </div>
        </div>
      `,
      attachments: attachments,
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
