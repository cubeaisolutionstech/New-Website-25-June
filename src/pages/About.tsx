import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const offices = [
    'Coimbatore', 'Bangalore', 'Namakkal', 'Kochi', 'Tiruppur', 'Dharapuram', 'UK'
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section with Team Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="About Us Background"
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
              <span className="text-white font-medium">About Our Journey</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              About <span className="text-blue-400">CubeAI Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We are a leading AI solutions company dedicated to transforming businesses through innovative technology and intelligent automation across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower businesses worldwide with cutting-edge AI solutions that drive innovation, efficiency, and sustainable growth. We believe in making advanced technology accessible and practical for organizations of all sizes.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-xl bg-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the global leader in AI-driven business transformation, creating a future where intelligent technology seamlessly integrates with human expertise to solve complex challenges and unlock new possibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="w-20 h-20 rounded-xl bg-orange-600 flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of AI specialists, engineers, and consultants brings together decades of experience in cutting-edge technology and business transformation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Researchers',
                description: 'PhD-level experts in machine learning, deep learning, and artificial intelligence research with published papers and patents.',
                color: 'from-blue-600 to-indigo-700',
                icon: Zap,
              },
              {
                title: 'Software Engineers',
                description: 'Full-stack developers specializing in scalable, enterprise-grade software solutions with cloud-native architectures.',
                color: 'from-emerald-600 to-teal-700',
                icon: Target,
              },
              {
                title: 'Business Consultants',
                description: 'Strategic advisors helping organizations navigate digital transformation journeys with proven methodologies.',
                color: 'from-red-600 to-rose-700',
                icon: Award,
              },
            ].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{role.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
