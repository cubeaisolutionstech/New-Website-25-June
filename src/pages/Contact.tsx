import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Globe,
  Sparkles,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  }>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    console.log('Contact component mounted (entered /contact route)');
    try {
      console.log('Lucide icons available:', {
        Mail,
        Phone,
        MapPin,
        User,
        MessageSquare,
        ArrowRight,
        CheckCircle,
        Globe,
        Sparkles,
      });
      console.log('Framer Motion available:', motion);
      console.log('React Hot Toast available:', toast);
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in Contact component dependencies:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting enquiry with data:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Backend response:', data);

      if (!response.ok) {
        console.error('Backend response status:', response.status);
        throw new Error(data.message || 'Enquiry submission failed');
      }

      toast.success(data.message || 'Enquiry submitted successfully!');
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        console.log('Confirmation modal hidden');
      }, 3000);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Enquiry submission error:', error);
      toast.error(
        error instanceof Error
          ? error.message || 'Enquiry submission failed. Please try again.'
          : 'Enquiry submission failed. Please try again.'
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name}=${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const offices = [
    { city: 'Coimbatore', country: 'India' },
    { city: 'Bangalore', country: 'India' },
    { city: 'Namakkal', country: 'India' },
    { city: 'Kochi', country: 'India' }, // Fixed typo
    { city: 'Tiruppur', country: 'India' },
    { city: 'Dharapuram', country: 'India' },
    { city: 'London', country: 'UK' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Toaster position="top-right" />
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact CubeAI Solutions - Get in Touch for AI Solutions</title>
        <meta
          name="description"
          content="Contact CubeAI Solutions to discuss your AI project needs. Reach out to our team in Coimbatore, Bangalore, London, or other global offices."
        />
        <meta
          name="keywords"
          content="contact CubeAI Solutions, AI solutions, business transformation, Coimbatore, Bangalore, London"
        />
        
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="CubeAI Solutions contact background"
            className="w-full h-full object-cover"
            onError={(e) => console.error('Error loading hero image:', e)}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
            onAnimationStart={() => console.log('Hero section animation started')}
            onAnimationComplete={() => console.log('Hero section animation completed')}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              Get in <span className="text-blue-400">Touch</span>
            </h1>
             <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Connect for AI Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI?
              and explore how we can help you achieve your goals with cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="transform-gpu"
              onAnimationComplete={() => console.log('Contact Form section animation completed')}
            >
              <div className="bg-white rounded-2xl p-10 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-3 font-medium"
                      >
                        <User className="w-5 h-5 inline mr-2" />
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Name"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-3 font-medium"
                      >
                        <Mail className="w-5 h-5 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="your@email.com"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 mb-3 font-medium"
                    >
                      <Phone className="w-5 h-5 inline mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Phone Number"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-gray-700 mb-3 font-medium"
                    >
                      <MessageSquare className="w-5 h-5 inline mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Company Name (Optional)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-3 font-medium"
                    >
                      <MessageSquare className="w-5 h-5 inline mr-2" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      aria-required="true"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                    aria-label="Send message"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
              onAnimationComplete={() => console.log('Contact Info section animation completed')}
            >
              {/* Contact Information */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-10 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">
                      contact@cubeaisolutions.com
                    </span>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">+91 9486938781</span>
                  </div>
 <div>
                      <p className="font-semibold text-gray-900 ml-12">Corporate office</p>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mr-4 mt-1">
                      <MapPin className="w-6 h-6 text-white" /> 
                    </div>
                    <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
                      <p className="font-semibold text-gray-900">CubeAISolutions Tech Pvt Ltd</p>
                      <p className="font-semibold text-gray-900">Shri Anathanagar </p>
                      <p className="font-semibold text-gray-900">Bangalore 560100</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Global Offices */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-10 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center mr-3">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  Our Global Offices
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                    >
                      <p className="text-gray-900 font-semibold">{office.city}</p>
                      <p className="text-gray-600 text-sm">{office.country}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Embedded Live Google Map */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-10 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Find Us at KSR</h3>
                <div className="rounded-xl overflow-hidden border border-gray-200">
                 <iframe title="CubeAISolutions Tech Pvt Ltd Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.667766644267!2d77.82425297505046!3d11.358959588827455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba967f537594377%3A0x1b9478bc228b5b56!2sCubeAISolutions%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752467952866!5m2!1sen!2sin" 
                 width="100%"
                 height="300"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-10 text-center max-w-md w-full border border-gray-200"
          >
            <div className="w-20 h-20 rounded-xl bg-green-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
            <p className="text-gray-600 leading-relaxed">
              Thank you for contacting us. We'll get back to you within 24 hours with a comprehensive response.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;