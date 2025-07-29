import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Users,
  Award,
  ArrowRight,
  X,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import FloatingCube from '../components/FloatingCube';
import StatsCounter from '../components/StatsCounter';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const exploreCards = [
    {
      id: 'aima',
      title: 'AIMA',
      subtitle: 'Artificial Intelligence & Machine Learning & Agent',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-blue-600 to-indigo-700',
      description: 'Advanced AI and ML solutions for Industry 4.0 & 5.0, legacy modernization, and intelligent automation.',
      gradient: 'bg-gradient-to-br from-blue-600/10 to-indigo-700/10',
    },
    {
      id: 'aida',
      title: 'AIDA',
      subtitle: 'Artificial Intelligence & Data Analysis',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-emerald-600 to-teal-700',
      description: 'Comprehensive data analytics solutions including medical data analytics and SAAS platforms.',
      gradient: 'bg-gradient-to-br from-emerald-600/10 to-teal-700/10',
    },
    {
      id: 'city',
      title: 'CyTI',
      subtitle: 'Cyber Tech Innovation',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-red-600 to-rose-700',
      description: 'Cutting-edge cybersecurity solutions with IoT services and auto-sizing capabilities.',
      gradient: 'bg-gradient-to-br from-red-600/10 to-rose-700/10',
    },
    {
      id: 'cubebotics',
      title: 'Cubebotics',
      subtitle: 'Embedded Systems & IoT',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-orange-600 to-amber-700',
      description: 'Innovative embedded systems, IoT solutions, and advanced drone technology.',
      gradient: 'bg-gradient-to-br from-orange-600/10 to-amber-700/10',
    },
    {
      id: 'dce',
      title: 'DCE',
      subtitle: 'Data & Cloud Engineering',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-cyan-600 to-blue-700',
      description: 'Scalable data engineering and cloud solutions for modern enterprises.',
      gradient: 'bg-gradient-to-br from-cyan-600/10 to-blue-700/10',
    },
    {
      id: 'vision-ai',
      title: 'VisionAI',
      subtitle: 'AI Solutions',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-violet-600 to-purple-700',
      description: 'Intelligent chatbot solutions and computer vision applications.',
      gradient: 'bg-gradient-to-br from-violet-600/10 to-purple-700/10',
    },
    {
      id: 'tech-solution',
      title: 'Tech Solution',
      subtitle: 'Future Technology & Services',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      bgImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-indigo-600 to-purple-700',
      description: 'Comprehensive technology solutions including web development, app development, and business consulting.',
      gradient: 'bg-gradient-to-br from-indigo-600/10 to-purple-700/10',
    },
  ];

  const valueProps = [
    {
      icon: Sparkles,
      title: 'Innovation-Driven',
      description: 'Pioneering AI solutions tailored for real-world impact.',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      icon: Target,
      title: 'Client-Centric',
      description: 'Collaborative approach built around your goals.',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: '70+ AI projects delivered with measurable results.',
      color: 'from-red-600 to-rose-700',
    },
  ];

  const stats = [
    { number: 70, label: 'Projects', suffix: '+' },
    { number: 40, label: 'Happy Clients', suffix: '+' },
    { number: 50, label: 'Collaborations', suffix: '+' },
    { number: 150, label: 'AI Products Solutions', suffix: '+' },
  ];

  const industries = [
    {
      name: 'Manufacturing',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-indigo-700',
      id: 'manufacturing'
    },
    {
      name: 'Telecom',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-600 to-teal-700',
      id: 'telecom'
    },
    {
      name: 'Healthcare & Life Sciences',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-600 to-rose-700',
      id: 'healthcare'
    },
   
    {
      name: 'Human Resource',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-600 to-blue-700',
      id: 'hr'
    },
    {
      name: 'Industry Automation',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-violet-600 to-purple-700',
      id: 'automation'
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-50">
       
      <Helmet>
        <title>CubeAI Solutions - AI Automation Tools for Business Productivity</title>
        <meta
          name="description"
          content="CubeAI Solutions delivers GenAI-driven software, including web and mobile apps, FinTech, and cybersecurity tools, to streamline operations and boost efficiency."
        />
        <meta
          name="keywords"
          content="CubeAI Solutions, AI solutions, GenAI software, web development, mobile apps, FinTech, cybersecurity, business transformation"
        />
      </Helmet>
      
      <FloatingCube />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center pt-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Empowering Businesses with{' '}
              <span className="text-yellow-400">
                Intelligent AI
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We develop GenAI-driven software—from web & mobile apps to FinTech cybersecurity tools—that streamline operations, boost efficiency, and deliver real results.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, color: '#FF6600' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center transition-all duration-300 hover:bg-gray-100"
                onClick={() => navigate('/services')}
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section at bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-10 pb-16"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">145+</div>
                <div className="text-white/90 text-sm md:text-base">Professionals</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">70+</div>
                <div className="text-white/90 text-sm md:text-base">Projects</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">40+</div>
                <div className="text-white/90 text-sm md:text-base">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-white/90 text-sm md:text-base">Collabrations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value Props Section */}
      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">CubeAI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver transformative AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${prop.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{prop.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Explore Section */}
      <section className="py-32 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Explore</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {exploreCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link to={`/explore/${card.id}`}>
                  <div className="relative overflow-hidden rounded-2xl h-full border border-gray-200 hover:border-gray-300 transition-all duration-500 bg-white">
                    <div className="mb-6 overflow-hidden rounded-t-2xl">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-sm text-blue-600 mb-4 font-medium">{card.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.description}</p>

                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Industries Section */}
      <section className="py-32 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Industry <span className="text-blue-600">Sectors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses across diverse industries with tailored AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer"
              >
                <Link to={`/industry/${industry.id}`}>
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-500 bg-white">
                    <div className="relative h-48">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold text-center px-4">{industry.name}</h3>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
