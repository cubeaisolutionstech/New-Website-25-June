import React, { useState, useRef } from 'react';
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
import { toast, Toaster } from 'react-hot-toast';

const Career = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    resume: null as File | null,
    coverLetter: '',
  });
  const formRef = useRef<HTMLDivElement>(null); // Reference to the form section

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('position', formData.position);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }
      formDataToSend.append('coverLetter', formData.coverLetter);

      const response = await fetch('http://localhost:5000/api/career', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Application submission failed');
      }

      toast.success(data.message || 'Application submitted successfully!');
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
      setFormData({
        name: '',
        email: '',
        position: '',
        resume: null,
        coverLetter: '',
      });
    } catch (error) {
      console.error('Application error:', error);
      if (error instanceof Error) {
        toast.error(error.message || 'Application submission failed. Please try again.');
      } else {
        toast.error('Application submission failed. Please try again.');
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const files = e.target instanceof HTMLInputElement ? e.target.files : null;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Function to handle Apply Now button click
  const handleApplyNow = (position: string) => {
    setFormData((prev) => ({ ...prev, position }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jobOpenings = [
    { title: 'AI Research Scientist', location: 'Coimbatore, India', type: 'Full-time' },
    { title: 'Frontend Developer', location: 'Bangalore, India', type: 'Full-time' },
    { title: 'Machine Learning Engineer', location: 'London, UK', type: 'Full-time' },
    { title: 'Data Analyst', location: 'Namakkal, India', type: 'Part-time' },
    { title: 'DevOps Engineer', location: 'Kochin, India', type: 'Full-time' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Toaster />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Careers Background"
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
              <span className="text-white font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              Build the <span className="text-blue-400">Future</span> with Us
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Join CubeAISolutions and work on cutting-edge AI projects that transform industries. Explore exciting career opportunities and become part of our innovative team.
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
          >
            <div className="bg-white rounded-2xl p-10 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Apply Now</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      <User className="w-5 h-5 inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-3 font-medium">
                      <Mail className="w-5 h-5 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    <Briefcase className="w-5 h-5 inline mr-2" />
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Position you're applying for"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    <FileText className="w-5 h-5 inline mr-2" />
                    Resume
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-3 font-medium">
                    <FileText className="w-5 h-5 inline mr-2" />
                    Cover Letter
                  </label>
                  <textarea
                    rows={5}
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us why you're a great fit..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
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
