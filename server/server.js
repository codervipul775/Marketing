import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

// Get environment variables
const { 
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  FROM_NAME,
  REPLY_TO,
  PORT: ENV_PORT
} = globalThis.process.env;

const app = express();
app.use(cors());
app.use(express.json());

const emailConfig = {
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(emailConfig);

const createEmailTemplate = (name, email, subject, message) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <div style="margin-top: 20px;">
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  </div>
`;

const createAutoResponseTemplate = (name) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #4F46E5;">Thank you for contacting us!</h2>
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
      <p>Dear ${name},</p>
      <p>We have received your message and appreciate you taking the time to write to us.</p>
      <p>Our team will review your message and get back to you as soon as possible.</p>
      <p style="margin-top: 20px;">Best regards,<br>${FROM_NAME}</p>
    </div>
  </div>
`;

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Send notification email to admin
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${SMTP_USER}>`,
      to: REPLY_TO,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: createEmailTemplate(name, email, subject, message),
    });

    // Send auto-response to the sender
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${SMTP_USER}>`,
      to: email,
      replyTo: REPLY_TO,
      subject: 'Thank you for your message',
      html: createAutoResponseTemplate(name),
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    globalThis.console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = ENV_PORT || 3001;
app.listen(PORT, () => {
  globalThis.console.log(`Server running on port ${PORT}`);
});
