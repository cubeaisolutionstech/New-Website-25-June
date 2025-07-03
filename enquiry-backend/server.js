const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Created uploads directory: ${uploadDir}`);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/^(application\/pdf|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document)$/)) {
      return cb(new Error('Only PDF, DOC, DOCX files are allowed'));
    }
    cb(null, true);
  },
});

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Request Body:', req.body);
  if (req.file) {
    console.log('Uploaded File:', req.file);
  }
  next();
});

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cubeai', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify Nodemailer configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer configuration error:', error);
  } else {
    console.log('Nodemailer is ready to send emails');
  }
});

// User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  jobTitle: { type: String, required: true },
  country: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Enquiry Schema
const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Career Schema
const careerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  resume: { type: String, required: true },
  coverLetter: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Career = mongoose.model('Career', careerSchema);

// Newsletter Schema
const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// Register Route
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, phone, jobTitle, country, password } = req.body;

  try {
    if (!firstName || !lastName || !email || !phone || !jobTitle || !country || !password) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      country,
      password: hashedPassword,
    });

    await user.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error.message);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Enquiry Route
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const enquiry = new Enquiry({
      name,
      email,
      phone,
      company,
      message,
    });

    await enquiry.save();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.NOTIFICATION_EMAIL) {
      return res.status(500).json({ message: 'Email configuration is incomplete' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Enquiry from ${name} - CubeAI Solutions`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Enquiry error:', error.message);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Career Route
app.post('/api/career', upload.single('resume'), async (req, res) => {
  const { name, email, position, coverLetter } = req.body;
  const resume = req.file;

  console.log('Career endpoint called with body:', req.body);
  console.log('Career endpoint called with file:', req.file);

  try {
    if (!name || !email || !position || !resume || !coverLetter) {
      console.log('Missing fields:', { name, email, position, resume, coverLetter });
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const career = new Career({
      name,
      email,
      position,
      resume: resume.path,
      coverLetter,
    });

    console.log('Saving career application to MongoDB:', career);
    await career.save();
    console.log('Career application saved successfully');

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.NOTIFICATION_EMAIL) {
      console.log('Email configuration missing:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
        NOTIFICATION_EMAIL: !!process.env.NOTIFICATION_EMAIL,
      });
      return res.status(500).json({ message: 'Email configuration is incomplete' });
    }

    // Email to admin (NOTIFICATION_EMAIL)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Career Application from ${name} - CubeAI Solutions`,
      html: `
        <h2>New Career Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Resume:</strong> Attached</p>
        <p><strong>Cover Letter:</strong> ${coverLetter}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `,
      attachments: [{ path: resume.path }],
    };

    // Email to applicant
    const applicantMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Application Confirmation - CubeAI Solutions',
      html: `
        <h2>Thank You for Your Application</h2>
        <p>Dear ${name},</p>
        <p>We have received your application for the position of <strong>${position}</strong>.</p>
        <p><strong>Details Submitted:</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Cover Letter:</strong> ${coverLetter}</p>
        <p><strong>Resume:</strong> Attached</p>
        <p>We will review your application and get back to you within 5 business days.</p>
        <p>Best regards,<br/>The CubeAI Solutions Team</p>
      `,
      attachments: [{ path: resume.path }],
    };

    console.log('Sending email notification to admin');
    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');

    console.log('Sending confirmation email to applicant:', email);
    await transporter.sendMail(applicantMailOptions);
    console.log('Applicant email sent successfully');

    return res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Career application error:', error.message);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Newsletter Route
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const subscription = new Newsletter({ email });
    await subscription.save();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.NOTIFICATION_EMAIL) {
      return res.status(500).json({ message: 'Email configuration is incomplete' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New Newsletter Subscription - CubeAI Solutions',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed At:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Newsletter error:', error.message);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Handle unknown routes
app.use((req, res) => {
  console.log(`Unknown route accessed: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unexpected server error:', err.message);
  res.status(500).json({ message: 'Unexpected server error', error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
