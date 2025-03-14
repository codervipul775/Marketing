import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  FROM_NAME,
  REPLY_TO,
  ALLOWED_ORIGINS,
  PORT: ENV_PORT
} = globalThis.process.env;

const app = express();

// Parse ALLOWED_ORIGINS into an array
const allowedOrigins = ALLOWED_ORIGINS ? ALLOWED_ORIGINS.split(',') : [];

// Configure CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "POST, OPTIONS", // Add OPTIONS to the allowed methods
  allowedHeaders: "Content-Type", // Add Content-Type to allowed headers
};

app.use(cors(corsOptions));
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

// Input validation middleware
const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: 'Please enter a valid name (at least 2 characters)' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }
  if (!subject || subject.trim().length < 3) {
    return res.status(400).json({ error: 'Please enter a subject (at least 3 characters)' });
  }
  if (!message || message.trim().length < 10) {
    return res.status(400).json({ error: 'Please enter a message (at least 10 characters)' });
  }
  next();
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Contact form endpoint
app.post('/api/contact', validateContactInput, async (req, res) => {
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
    console.error('Error sending email:', error);
    const errorMessage = globalThis.process.env.NODE_ENV === 'production'
      ? 'Failed to send email'
      : error.message;
    res.status(500).json({ error: errorMessage });
  }
});

// Error handling middleware
app.use((err, req, res) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
});

// Graceful shutdown
globalThis.process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Performing graceful shutdown...');
  server.close(() => {
    console.log('Server closed. Exiting process.');
    globalThis.process.exit(0);
  });
});

const PORT = ENV_PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
