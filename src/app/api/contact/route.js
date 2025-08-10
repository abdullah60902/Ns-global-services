import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const {  email, phone, company, service, message , name} = body;

    console.log("➡️ Incoming Form Data:", body);

    if (!email || !message || !name) {
      console.log("❌ Missing required fields");
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

   const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ns.global.ser@gmail.com',
    pass: 'tvndoeocunbpadyl', // ✅ No spaces here
  },
});


    // Verify transporter connection
    await transporter.verify();
    console.log("✅ Transporter verified");

   const mailOptions = {
  from: 'ns.global.sr@gmail.com', // ✅ Must match your Gmail
  to: 'ns.global.ser@gmail.com',   // ✅ Where you want to receive the message
  replyTo: email,                 // ✅ So replies go to the user
  subject: `New Contact from ${name}`,
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; background-color: #ffffff; margin: auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
      <div style="background-color: #155DFC; padding: 15px 20px; color: white; text-align: center;">
        <h2 style="margin: 0;">📩 New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px; color: #333333;">
        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px; color: #155DFC;">Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #fafafa; padding: 10px; border-radius: 5px; border: 1px solid #eee;">
          ${message}
        </p>
      </div>
      <div style="background-color: #f9f9f9; text-align: center; padding: 15px; font-size: 12px; color: #888;">
        © ${new Date().getFullYear()} NS Global Services. All rights reserved.
      </div>
    </div>
  </div>
`

};


    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info);

    return new Response(JSON.stringify({ success: true, info }), {
      status: 200,
    });
  } catch (error) {
    console.error('❌ Mailer error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
