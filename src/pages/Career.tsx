import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  User,
  Mail,
  FileText,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { toast, Toaster } from 'react-hot-toast';

const Career = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    position: string;
    resume: File | null;
    coverLetter: string;
  }>({
    name: '',
    email: '',
    position: '',
    resume: null,
    coverLetter: '',
  });
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Career component mounted (entered /career route)');
    try {
      console.log('Lucide icons available:', {
        Briefcase,
        MapPin,
        User,
        Mail,
        FileText,
        ArrowRight,
        CheckCircle,
        Sparkles,
      });
      console.log('Framer Motion available:', motion);
      console.log('React Hot Toast available:', toast);
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in Career component dependencies:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting application with data:', formData);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('position', formData.position);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      } else {
        console.warn('No resume file provided');
      }
      formDataToSend.append('coverLetter', formData.coverLetter);

      console.log('Sending FormData to backend:', Object.fromEntries(formDataToSend));
      const response = await fetch('http://localhost:5000/api/career', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      console.log('Backend response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Application submission failed');
      }

      toast.success(data.message || 'Application submitted successfully!');
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        console.log('Confirmation modal hidden');
      }, 3000);
      setFormData({
        name: '',
        email: '',
        position: '',
        resume: null,
        coverLetter: '',
      });
    } catch (error) {
      console.error('Application submission error:', error);
      toast.error(
        error instanceof Error
          ? error.message || 'Application submission failed. Please try again.'
          : 'Application submission failed. Please try again.'
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const files = e.target instanceof HTMLInputElement ? e.target.files : null;
    console.log(`Input changed: ${name}=${files ? files[0]?.name : value}`);
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleApplyNow = (position: string) => {
    console.log(`Apply Now clicked for position: ${position}`);
    setFormData((prev) => ({ ...prev, position }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to form section');
    }
  };

  const jobOpenings = [
    { title: 'AI Research Scientist', location: 'Coimbatore, India', type: 'Full-time' },
    { title: 'Frontend Developer', location: 'Bangalore, India', type: 'Full-time' },
    { title: 'Machine Learning Engineer', location: 'London, UK', type: 'Full-time' },
    { title: 'Data Analyst', location: 'Namakkal, India', type: 'Part-time' },
    { title: 'DevOps Engineer', location: 'Kochi, India', type: 'Full-time' }, // Fixed typo
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Toaster position="top-right" />
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Career Opportunities at CubeAI Solutions - Join Our Innovative Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at CubeAI Solutions in AI, software development, and more. Join our team in Coimbatore, Bangalore, or London."
        />
        <meta
          name="keywords"
          content="career opportunities, CubeAI Solutions, AI jobs, software development jobs, Coimbatore, Bangalore, London"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="CubeAI Solutions careers background"
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
              <span className="text-white font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              Build the <span className="text-blue-400">Future</span> with Us
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Join CubeAI Solutions and work on cutting-edge AI projects that transform industries.
             
              and become part of our innovative team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
            onAnimationComplete={() => console.log('Job Openings section animation completed')}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover opportunities to grow your career with us. Find the role that matches your skills and passion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span>{job.type}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  onClick={() => handleApplyNow(job.title)}
                  aria-label={`Apply for ${job.title} position`}
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="transform-gpu"
            onAnimationComplete={() => console.log('Application Form section animation completed')}
          >
            <div className="bg-white rounded-2xl p-10 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Apply Now</h2>

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
                    htmlFor="position"
                    className="block text-gray-700 mb-3 font-medium"
                  >
                    <Briefcase className="w-5 h-5 inline mr-2" />
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Position you're applying for"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-gray-700 mb-3 font-medium"
                  >
                    <FileText className="w-5 h-5 inline mr-2" />
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-gray-700 mb-3 font-medium"
                  >
                    <FileText className="w-5 h-5 inline mr-2" />
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={5}
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us why you're a great fit..."
                    aria-required="true"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  aria-label="Submit application"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </form>
            </div>
          </motion.div>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
            <p className="text-gray-600 leading-relaxed">
              Thank you for applying. We'll review your application and get back to you within 5 business days.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Career;