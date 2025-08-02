import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Mail,
  User,
  Phone,
  MessageSquare,
  Building,
  Send,
  MapPin,
  AlertCircle,
} from 'lucide-react';

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

// Define the shape of a service
interface Service {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  features: string[];
  bgImage: string;
  gradient: string;
}

const Services: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const services: Service[] = [
    {
      id: 'aima',
      title: 'AIMA',
      subtitle: 'Artificial Intelligence, Machine Learning & Agent',
      color: 'from-blue-600 to-indigo-700',
      description: 'Advanced AI and ML solutions for Industry 4.0 & 5.0, legacy modernization, and intelligent automation.',
      features: ['Industry 4.0 & 5.0', 'Legacy System Modernization', 'Multi-Agent Systems', 'Deep Learning Models', 'Autonomous Decision-Making', 'AI-Driven Optimization'],
      bgImage: '/image/saima.png',
      gradient: 'bg-gradient-to-br from-blue-600/10 to-indigo-700/10',
    },
    {
      id: 'aida',
      title: 'AIDA',
      subtitle: 'Artificial Intelligence & Data Analysis',
      color: 'from-emerald-600 to-teal-700',
      description: 'Comprehensive data analytics solutions including medical data analytics and SAAS platforms.',
      features: ['Predictive Analytics', 'Data Visualization', 'Big Data Analytics', 'AI-Powered Decision Making', 'Industrial Data Analytics', 'Anomaly Detection'],
      bgImage: '/image/saida.webp',
      gradient: 'bg-gradient-to-br from-emerald-600/10 to-teal-700/10',
    },
    {
      id: 'vision-ai',
      title: 'VisionAI',
      subtitle: 'AI Solutions',
      color: 'from-violet-600 to-purple-700',
      description: 'Intelligent chatbot solutions and computer vision applications.',
      features: ['Chatbot Solutions', 'Computer Vision', 'NLP', 'Image Recognition', 'Automated Surveillance & Monitoring'],
      bgImage: '/image/svision.jpg',
      gradient: 'bg-gradient-to-br from-violet-600/10 to-purple-700/10',
    },
    {
      id: 'city',
      title: 'CyTI',
      subtitle: 'Cyber Tech Innovation',
      color: 'from-red-600 to-rose-700',
      description: 'Cutting-edge cybersecurity solutions with IoT services and auto-sizing capabilities.',
      features: ['IoT Services', 'Zero Trust Architecture', 'Threat Detection', 'Security Monitoring', 'Auto-Scaling Security Infrastructure'],
      bgImage: '/image/scity.jpg',
      gradient: 'bg-gradient-to-br from-red-600/10 to-rose-700/10',
    },
    {
      id: 'cubeboyics',
      title: 'Cubebotics',
      subtitle: 'Embedded Systems & IoT',
      color: 'from-orange-600 to-amber-700',
      description: 'Innovative embedded systems, IoT solutions, and advanced drone technology.',
      features: ['Embedded Solutions', 'Drone Technology', 'IoT Integration', 'Drone Automation', 'Real-Time Embedded Applications'],
      bgImage: '/image/scubebotics.jpg',
      gradient: 'bg-gradient-to-br from-orange-600/10 to-amber-700/10',
    },
    {
      id: 'dce',
      title: 'DCE',
      subtitle: 'Data & Cloud Engineering',
      color: 'from-cyan-600 to-blue-700',
      description: 'Scalable data engineering and cloud solutions for modern enterprises.',
      features: ['Data Engineering', 'Cloud Engineering', 'DevOps & Automation', 'Infrastructure Design', 'Multi-Cloud & Hybrid Deployments', 'Cloud Infrastructure Management'],
      bgImage: '/image/sdec.webp',
      gradient: 'bg-gradient-to-br from-cyan-600/10 to-blue-700/10',
    },
    {
      id: 'tech-solution',
      title: 'Tech Solution',
      subtitle: 'Future Technology & Services',
      color: 'from-indigo-600 to-purple-700',
      description: 'Comprehensive technology solutions including web development, app development, and business consulting.',
      features: ['Backend Development', 'Cross-Platform App Development', 'Strategic IT Consulting', 'Digital Transformation Services', 'UI/UX Design & Prototyping', 'E-Commerce & CMS Integration', 'SEO & Digital Marketing', 'Cloud-Ready Business Solutions'],
      bgImage: '/image/stech.jpg',
      gradient: 'bg-gradient-to-br from-indigo-600/10 to-purple-700/10',
    },
  ];

  const validateForm = (): string => {
    if (!formData.name.trim()) return 'Full Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Valid Email is required';
    if (!formData.phone.trim()) return 'Phone Number is required';
    if (!formData.message.trim()) return 'Message is required';
    if (!formData.service) return 'Please select a service';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setIsSubmitting(false);
      return;
    }

    console.log('Form Data being sent:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/service-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Server Response:', result);

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: '',
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrorMessage(result.message || 'Failed to submit enquiry');
      }
    } catch (error: unknown) {
      const errorMsg = error instanceof Error ? error.message : 'An unknown error occurred';
      setErrorMessage('An error occurred while submitting the form: ' + errorMsg);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Helmet>
        <title>CubeAI Solutions - Our Services</title>
        <meta name="description" content="Explore CubeAI Solutions' comprehensive AI-powered services, including AIMA, AIDA, CITY, Cubebotics, DCE, Vision AI, and Tech Solution, designed to transform businesses across industries." />
        <meta name="keywords" content="CubeAI Solutions, AI services, machine learning, data analytics, cybersecurity, IoT, cloud engineering, web development, app development, business consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/image/hand.webp"
            alt="Services Background"
            width={1920}
            height={600}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              AI-Powered Business Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered services designed to transform your business and drive innovation across all industries with cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Artificial Intelligence and Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our range of AI-driven services, including machine learning, data analytics, cybersecurity, IoT, and cloud engineering, tailored to empower your business.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-blue-600 mb-6 font-medium">{service.subtitle}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/service/${service.id}`}
                      className={`inline-flex items-center w-full justify-center bg-gradient-to-r ${service.color} text-white py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our AI Solution Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional AI solutions with proven methodologies
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business needs and identify opportunities for AI integration with comprehensive assessments.',
                color: 'from-blue-600 to-indigo-700',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive AI strategy tailored to your specific requirements and business objectives.',
                color: 'from-emerald-600 to-teal-700',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our expert team builds and implements cutting-edge AI solutions using the latest technologies.',
                color: 'from-red-600 to-rose-700',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor and optimize performance for maximum impact and sustainable results.',
                color: 'from-orange-600 to-amber-700',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500">
                  <div className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact Us for AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our services? Send us a message and our team will get back to you shortly.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-10 text-lg">
                Fill out the form or contact us directly using the information below.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-100">cubeaisolutions@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-100">+91 9486938781</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">CubeAISolutions Tech Pvt Ltd</h4>
                    <p className="text-blue-100">Shri Anathanager</p>
                    <p className="text-blue-100">Bangalore - 560100</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-12"
            >
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-8">
                    Your enquiry has been submitted successfully. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-100 text-red-600 rounded-lg flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a Service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.title} - {service.subtitle}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Message"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
