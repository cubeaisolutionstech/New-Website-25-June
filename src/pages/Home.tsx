import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Award, ArrowRight, Sparkles, Target } from 'lucide-react';
import FloatingCube from '../components/FloatingCube';

const Home = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const navigate = useNavigate();

  const exploreCards = [
    {
      id: 'aima',
      title: 'AIMA',
      subtitle: 'Artificial Intelligence, Machine Learning & Agent',
      image: 'image/artificial.webp',
      color: 'from-blue-600 to-indigo-700',
      description: 'Advanced AI and ML solutions for Industry 4.0 & 5.0, legacy modernization, and intelligent automation.',
      gradient: 'bg-gradient-to-br from-blue-600/10 to-indigo-700/10',
    },
    {
      id: 'aida',
      title: 'AIDA',
      subtitle: 'Artificial Intelligence & Data Analysis',
      image: 'image/artida.jpeg',
      color: 'from-emerald-600 to-teal-700',
      description: 'Comprehensive data analytics solutions including medical data analytics and SAAS platforms.',
      gradient: 'bg-gradient-to-br from-emerald-600/10 to-teal-700/10',
    },
    {
      id: 'vision-ai',
      title: 'VisionAI',
      subtitle: 'AI Solutions',
      image: 'image/bote.webp',
      color: 'from-violet-600 to-purple-700',
      description: 'Intelligent chatbot solutions and computer vision applications.',
      gradient: 'bg-gradient-to-br from-violet-600/10 to-purple-700/10',
    },
    {
      id: 'city', // Corrected from 'cyti' to 'city' to match ExploreDetail.tsx
      title: 'CyTI',
      subtitle: 'Cyber Tech Innovation',
      image: 'image/cyber1.webp',
      color: 'from-red-600 to-rose-700',
      description: 'Cutting-edge cybersecurity solutions with IoT services and auto-sizing capabilities.',
      gradient: 'bg-gradient-to-br from-red-600/10 to-rose-700/10',
    },
    {
      id: 'cubebotics',
      title: 'Cubebotics',
      subtitle: 'Embedded Systems & IoT',
      image: 'image/cubebot.webp',
      color: 'from-orange-600 to-amber-700',
      description: 'Innovative embedded systems, IoT solutions, and advanced drone technology.',
      gradient: 'bg-gradient-to-br from-orange-600/10 to-amber-700/10',
    },
    {
      id: 'dce',
      title: 'DCE',
      subtitle: 'Data & Cloud Engineering',
      image: 'image/lady.webp',
      color: 'from-cyan-600 to-blue-700',
      description: 'Scalable data engineering and cloud solutions for modern enterprises.',
      gradient: 'bg-gradient-to-br from-cyan-600/10 to-blue-700/10',
    },
    {
      id: 'tech-solution',
      title: 'Tech Solution',
      subtitle: 'Future Technology & Services',
      image: 'image/conf.webp',
      color: 'from-indigo-600 to-purple-700',
      description: 'Comprehensive technology solutions including web development, app development, and business consulting.',
      gradient: 'bg-gradient-to-br from-indigo-600/10 to-purple-700/10',
    },
  ];

  const valueProps = [
    {
      icon: Sparkles,
      title: 'Innovation-Driven',
      description: 'Cutting-edge AI and machine learning solutions designed to solve real-world problems, driving <a href="/explore/aima" className="text-blue-600 hover:underline">digital transformation</a> and operational efficiency.',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      icon: Target,
      title: 'Client-Centric',
      description: 'We partner closely with clients to design scalable AI strategies aligned with specific business goals, ensuring long-term value. Learn more about our cloud solutions.',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: 'Over 70+ AI projects delivered transforming operations and boosting ROI across industries, including manufacturing, finance, healthcare, and logistics. See our <a href="/case-studies" className="text-blue-600 hover:underline">case studies</a>.',
      color: 'from-red-600 to-rose-700',
    },
  ];

  const industries = [
    {
      name: 'Manufacturing',
      image: 'image/manuf.jpeg',
      color: 'from-blue-600 to-indigo-700',
      id: 'manufacturing',
    },
    {
      name: 'Telecom',
      image: 'image/tele.webp',
      color: 'from-emerald-600 to-teal-700',
      id: 'telecom',
    },
    {
      name: 'Healthcare & Life Sciences',
      image: 'image/health.webp',
      color: 'from-red-600 to-rose-700',
      id: 'healthcare',
    },
    {
      name: 'Human Resource',
      image: 'image/human.webp',
      color: 'from-cyan-600 to-blue-700',
      id: 'hr',
    },
    {
      name: 'Industry Automation',
      image: 'image/industry.webp',
      color: 'from-violet-600 to-purple-700',
      id: 'automation',
    },
  ];

  const stats = [
    { number: 70, label: 'Projects', suffix: '+' },
    { number: 40, label: 'Happy Clients', suffix: '+' },
    { number: 50, label: 'Collaborations', suffix: '+' },
    { number: 150, label: 'AI Product Solution', suffix: '+' },
  ];

  const handleCardClick = (id: string) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <div className="relative overflow-hidden bg-gray-100">
      <FloatingCube />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center pt-28">
          <motion.div className="mb-16">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Empowering Businesses with <span className="text-yellow-400">Intelligent AI</span>
            </motion.h2>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Advanced AI Solutions for Digital Transformation
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-white mb-12 max-w-6xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We design and deliver next-generation <span className="font-bold text-yellow-400">AI solutions</span>, from intelligent business applications to enterprisegrade <span className="font-bold text-yellow-400">intelligent automation ecosystems</span>, crafted to streamline processes, improve <span className="font-bold text-yellow-400">operational efficiency</span>, and generate measurable <span className="font-bold text-yellow-400">business impact</span>. Our service domains include <span className="font-bold text-yellow-400">AIMA</span> (Artificial Intelligence, Machine Learning & Agents), <span className="font-bold text-yellow-400">AIDA</span> (AI & Data Analysis), <span className="font-bold text-yellow-400">VisionAI</span> (Chatbots & Computer Vision), <span className="font-bold text-yellow-400">CyTI</span> (Cybersecurity & IoT), <span className="font-bold text-yellow-400">Cubebotics</span> (Embedded Systems & IoT), <span className="font-bold text-yellow-400">DCE</span> (Data & Cloud Engineering), and <span className="font-bold text-yellow-400">Tech Solution</span> (Full-Stack Development & Consulting). By combining <span className="font-bold text-yellow-400">AI</span>, <span className="font-bold text-yellow-400">IoT</span>, <span className="font-bold text-yellow-400">cloud computing</span>, <span className="font-bold text-yellow-400">data engineering</span>, and <span className="font-bold text-yellow-400">embedded systems</span>, we deliver end-to-end <span className="font-bold text-yellow-400">digital transformation</span> services that enable organizations to become agile, innovative, and future-ready. Learn more in our AI Ethics Guide.
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
                onClick={() => navigate('/contact')}
                aria-label="Book a scoping call"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-4xl md:text-6xl font-bold text-yellow-400">
                    {stat.number}
                    <span className="text-2xl">{stat.suffix}</span>
                  </h3>
                  <p className="text-base md:text-lg text-white/90">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
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
              Why Choose Our <span className="text-blue-600">AI AGENTS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge artificial intelligence and machine learning with deep industry expertise to deliver transformative solutions for modern businesses. Explore our <a href="/explore/aima" className="text-blue-600 hover:underline">AI-powered solutions</a>.
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
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${prop.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{prop.title}</h3>
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: prop.description }} />
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
              Explore Our <span className="text-blue-600">AI-Powered Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-driven solutions, including <a href="/explore/aima" className="text-blue-600 hover:underline">machine learning</a>, data analytics, cybersecurity, and IoT, designed to transform your business operations. 
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {exploreCards.map((card) => (
              <div
                key={card.id}
                className={`group cursor-pointer ${selectedCard === card.id ? 'ring-4 ring-blue-500' : ''} bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 hover:border-gray-300 transition-all duration-300`}
                style={{ backdropFilter: 'blur(10px)' }}
                onClick={() => handleCardClick(card.id)}
              >
                <Link to={`/explore/${card.id}`} aria-label={`Explore ${card.title}`}>
                  <div className={`relative ${card.gradient} p-2 rounded-t-2xl`}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => (e.currentTarget.src = '/default-image.png')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-sm text-blue-600 mb-4 font-medium">{card.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.description}</p>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Unlock More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 relative bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Solutions for <span className="text-blue-600">Key Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses across diverse industries with tailored <a href="/explore/aima" className="text-blue-600 hover:underline">artificial intelligence</a>, machine learning, and data analytics solutions for maximum impact.
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
                className={`group cursor-pointer ${selectedCard === industry.id ? 'ring-4 ring-blue-500' : ''}`}
                onClick={() => handleCardClick(industry.id)}
              >
                <Link to={`/industry/${industry.id}`} aria-label={`Explore ${industry.name}`}>
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-500 bg-white">
                    <div className="relative h-48">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => (e.currentTarget.src = '/default-image.png')}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white text-xl font-bold text-center px-4">{industry.name}</h3>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="text-sm font-medium">View More</span>
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