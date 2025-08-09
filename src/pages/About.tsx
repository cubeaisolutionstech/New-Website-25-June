import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, Award, Globe, Sparkles, Zap, Crown, Trophy, X } from 'lucide-react';

// Define Award interface
interface Award {
  title: string;
  year: string;
  shortDescription: string;
  detailedDescription: string;
  backgroundImage: string;
  modalImages: {
    image: string;
    gradient: string;
    summary: string;
  }[];
}

const About = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [activeSummaryIndex, setActiveSummaryIndex] = useState<{ [key: number]: number }>({});
  const [isHovering, setIsHovering] = useState<{ [key: number]: boolean }>({});

  const offices = ['Coimbatore', 'Bangalore', 'Namakkal', 'Kochi', 'Tiruppur', 'UK'];

  const boardMembers = [
    {
      name: 'Thiru IRS P.Muthusamy BSc(Agri) BL,MS',
      title: 'EX-IRS',
      image: 'image/pmuthu.jpg',
      bio: 'Visionary leader with 25+ years in AI and technology innovation.',
    },
    {
      name: 'MR.Prasad Balakrishanan',
      title: 'Miphi CEO',
      image: 'image/prasad.jpg',
      bio: 'AI research pioneer with expertise in machine learning and neural networks.',
    },
  ];

  const advisors = [
    {
      name: 'Dr. Gopala Krishnan',
      title: 'Ksr CT Principal',
      image: 'image/gopala.jpeg',
      bio: 'Financial strategist with deep expertise in technology investments.',
    },
    {
      name: 'Dr. Venkateshan',
      title: 'Ksr CE Principal',
      image: 'image/venkat.jpg',
      bio: 'Former CTO of leading tech companies with expertise in AI and cloud architecture.',
    },
    {
      name: 'Mr.K.K Baluswamy',
      title: 'Independent Consultant',
      image: 'image/balu.jpg',
      bio: 'Strategic consultant helping organizations navigate digital transformation.',
    },
  ];

  const awards: Award[] = [
    {
      title: 'Best AI Company of the Year 2025',
      year: '2025',
      shortDescription: 'Recognized for leading AI innovation across industries.',
      detailedDescription:
        'Recognized as the Best AI Company of the Year for pioneering transformative AI solutions that empower enterprises through intelligent automation, predictive analytics, and scalable architectures—driving unmatched operational excellence and accelerated growth.',
      backgroundImage: '/image/award1.jpg',
      modalImages: [
        {
          image: '/image/award1.jpg',
          gradient: 'from-purple-600 to-pink-600',
          summary:
            'Cubeaisolutions Tech Pvt Ltd receives the "Best AI Company of the Year" award at the New Age Business Summit 2025 ',
        },
        {
          image: '/image/award2.jpg',
          gradient: 'from-blue-600 to-purple-600',
          summary: 'Our award and certificate symbolizing innovation, excellence, and leadership in Artificial Intelligence.',
        },
        {
          image: '/image/award3.jpg',
          gradient: 'from-pink-600 to-red-600',
          summary: ' A memorable celebration with industry leaders, innovators, and changemakers.',
        },
      ],
    },
    {
      title: 'Our Honours',
      year: '2023',
      shortDescription: 'Celebrated for outstanding contributions to AI technology.',
      detailedDescription:
        'Celebrated for groundbreaking innovations in artificial intelligence—delivering state-of-the-art algorithms and intelligent systems that have redefined industry standards in machine learning, automation, and enterprise transformation.',
      backgroundImage: '/image/award5.png',
      modalImages: [
        {
          image: '/image/Achivements4.jpg',
          gradient: 'from-blue-600 to-cyan-500',
          summary:
            ' Ms. Santhiya P (CHRO) and supported by Mr. Shyam Sundar, the event saw 100+ talented students participate in interviews for roles in AI and IoT.',
        },
        {
          image: '/image/Achivements1.jpg',
          gradient: 'from-cyan-500 to-teal-600',
          summary:
            'Exciting day at Cubeaisolutions Tech Pvt Ltd as we welcomed Supreme Court Advocate V N Subramaniam to our Cyber Tech Innovation (CyTI) Centre at KSR College of Engineering.',
        },
        {
          image: '/image/Achivements5.jpg',
          gradient: 'from-teal-600 to-blue-600',
          summary:
            'Cubeaisolutions Tech Pvt Ltd was proud to speak at India’s First Vibe Coding Summit on May 10, 2025, held at Sona Incubation Foundation, Salem.',
        },
        {
          image: '/image/Achivements2.jpg',
          gradient: 'from-blue-600 to-cyan-500',
          summary:
            'Entrepreneurship Development Programme on Media Drone Operations, organized by EDII-TN, Government of Tamil Nadu, in Chennai ',
        },
        {
          image: '/image/award7.webp',
          gradient: 'from-blue-600 to-cyan-500',
          summary: 'Grateful for our leaders and proud of the amazing individuals driving Cubeaisolutions Tech Pvt Ltd forward.',
        },
        {
          image: '/image/award8.webp',
          gradient: 'from-blue-600 to-cyan-500',
          summary:
            'Our incredible team for their dedication and talent. We also had meaningful discussions around our Vision and Mission, with valuable input from everyone.',
        },
      ],
    },
    {
      title: 'Joint Venture',
      year: '2022',
      shortDescription: 'Acknowledged for strategic AI partnerships driving innovation.',
      detailedDescription: 'CubeAI and Genufy TechWorks join hands to build AI-powered solutions in Salesforce, healthcare, and digital transformation.',
      backgroundImage: '/image/coll2.jpg',
      modalImages: [
        {
          image: '/image/coll3.jpg',
          gradient: 'from-amber-500 to-orange-500',
          summary:
            'Cubeaisolutions Tech Pvt Ltd has signed an MoU with Genufy TechWorks to collaborate on AI-driven solutions in Salesforce development, hospital management systems.',
        },
        {
          image: '/image/coll1.jpg',
          gradient: 'from-orange-500 to-red-500',
          summary:
            'CubeAISolutions Tech Pvt Ltd and Poultry Tech have launched a joint venture, CubeAI Live Matrix, to revolutionize the poultry industry with AI-driven solutions.',
        },
        {
          image: '/image/mipi1.jpg',
          gradient: 'from-red-500 to-amber-500',
          summary:
            'Exciting news! CubeAISolutions Tech Pvt Ltd has signed an MoU with MiPhi Semiconductors Pvt Ltd, led by COO Prasad Balakrishnan.',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  // Function to get unique description title based on award title
  const getDescriptionTitle = (awardTitle: string) => {
    switch (awardTitle) {
      case 'Best AI Company of the Year 2025':
        return 'Industry Leadership Recognition';
      case 'Our Honours':
        return 'Technological Innovation Award';
      case 'Joint Venture':
        return 'Strategic Partnership Excellence';
      default:
        return 'Award Details';
    }
  };

  // Auto-cycle summaries when hovering
  useEffect(() => {
    const timers: number[] = [];
    Object.keys(isHovering).forEach((imageIndex) => {
      const idx = parseInt(imageIndex);
      if (isHovering[idx] && selectedAward) {
        const timer = setInterval(() => {
          setActiveSummaryIndex((prev) => ({
            ...prev,
            [idx]: (prev[idx] || 0) + 1 >= selectedAward.modalImages.length ? 0 : (prev[idx] || 0) + 1,
          }));
        }, 3000);
        timers.push(timer);
      }
    });
    return () => timers.forEach((timer) => clearInterval(timer));
  }, [isHovering, selectedAward]);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
     <Helmet>
  <title>CubeAI Solutions - AI Innovation & Leadership</title>
  <meta
    name="description"
    content="Discover CubeAI Solutions' journey in AI innovation, leadership, and global transformation. Learn about our mission, vision, expert team, and prestigious awards."
  />
  <meta
    name="keywords"
    content="CubeAI Solutions, AI innovation, leadership team, mission, vision, global offices, awards, AI technology, business transformation"
  />
</Helmet>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="image/people.webp" alt="About Us Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">About Our Journey</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              About <span className="text-blue-400">CubeAI Solutions</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Leading AI Innovation for Global Businesses
            </h2>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission for AI-Driven Transformation</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  At Cube AI Solutions, our mission is to equip businesses across the globe with next-generation artificial intelligence solutions that accelerate digital transformation, enhance operational efficiency, and foster long-term, sustainable growth. We are committed to democratizing advanced technologies, making powerful AI tools intuitive, scalable, and accessible to organizations of all sizes—fueling innovation at every stage of the business lifecycle.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision for Intelligent Technology</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become the world's foremost leader in AI-powered business transformation, shaping a future where intelligent technology and human ingenuity converge to solve complex challenges, accelerate innovation, and unlock boundless opportunities for growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Board of Directors */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 150, damping: 10 }}
              className="w-20 h-20 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center mx-auto mb-8"
            >
              <Crown className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Board of Directors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Meet the executive leaders driving our mission to revolutionize AI technology
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8, ease: 'easeOut' }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: 'easeInOut' },
                }}
                className="group relative"
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 transition-all duration-500 h-full shadow-lg hover:shadow-xl">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-contain bg-gray-50"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-20 mt-32"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 150, damping: 10 }}
              className="w-20 h-20 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-center mx-auto mb-8"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Advisors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Strategic advisors providing expert guidance and industry insights
            </motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: 'easeInOut' },
                }}
                className="group relative"
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-500 h-full shadow-lg hover:shadow-xl">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-contain bg-gray-50"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Global Offices */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="w-20 h-20 rounded-xl bg-red-600 flex items-center justify-center mx-auto mb-8">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global AI Solutions Network
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving clients worldwide with local expertise and global reach across multiple continents
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-gray-300 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-gray-900">{office}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Awards Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full animate-spin-slow" />
        </div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 150, damping: 10 }}
              className="relative inline-block mb-8"
            >
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center mx-auto shadow-2xl">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 blur-md animate-spin-slow"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-6"
            >
              Hall of Excellence
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '100%' }}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-2xl mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Celebrating our journey of innovation, recognition, and industry leadership
            </motion.p>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: 'easeInOut' },
                }}
                onClick={() => setSelectedAward(award)}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
                {/* Card with Background Image */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden h-full border border-white/20 min-w-[400px] min-h-[380px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img src={award.backgroundImage} alt={award.title} className="w-full h-full object-cover" />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  </div>
                  {/* Content overlay */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    {/* Bottom section with main content */}
                    <div>
                      {/* Title */}
                      <motion.h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-500">
                        {award.title}
                      </motion.h3>
                      {/* Description */}
                      <p className="text-gray-200 leading-relaxed text-sm group-hover:text-white transition-colors duration-500">
                        {award.shortDescription}
                      </p>
                    </div>
                  </div>
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      background: [
                        'linear-gradient(0deg, transparent, transparent)',
                        'linear-gradient(180deg, rgba(255,255,255,0.1), transparent)',
                        'linear-gradient(360deg, transparent, transparent)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center mt-20"
          >
            <div className="flex items-center space-x-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                />
              ))}
            </div>
          </motion.div>
        </div>
        {/* Award Modal */}
        <AnimatePresence>
          {selectedAward && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedAward(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-white rounded-3xl max-w-8xl w-full max-h-[100vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAward(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                {/* Modal Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-6 shadow-xl">
                      <Trophy className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedAward.title}</h2>
                    </div>
                  </div>
                  {/* Images Grid with Carousel */}
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {selectedAward.modalImages.map((modalImage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl group"
                        onMouseEnter={() => setIsHovering((prev) => ({ ...prev, [index]: true }))}
                        onMouseLeave={() => {
                          setIsHovering((prev) => ({ ...prev, [index]: false }));
                          setActiveSummaryIndex((prev) => ({ ...prev, [index]: 0 }));
                        }}
                      >
                        {/* Image Container */}
                        <div className="relative h-[300px] overflow-hidden">
                          {/* Background gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${modalImage.gradient} opacity-30`} />
                          {/* Image */}
                          <div className="relative z-10 h-full flex">
                            <div className="w-full relative">
                              <motion.img
                                src={modalImage.image}
                                alt="Award Image"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.5 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
                            </div>
                          </div>
                          {/* Carousel Slide */}
                          <AnimatePresence>
                            {isHovering[index] && (
                              <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '-100%', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20 h-16"
                              >
                                <div className="p-2 text-center text-white max-w-[90%]">
                                  <motion.p
                                    key={activeSummaryIndex[index] || 0}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm font-medium"
                                  >
                                    {modalImage.summary}
                                  </motion.p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Award Description */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{getDescriptionTitle(selectedAward.title)}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{selectedAward.detailedDescription}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
              Our Expert AI and Technology Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of AI specialists, engineers, and consultants brings together decades of experience in cutting-edge technology and business transformation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Researchers',
                description:
                  'Our team comprises PhD-level AI scientists and innovators specializing in machine learning, deep learning, and cutting-edge artificial intelligence research. With a strong track record of peer-reviewed publications, patents, and real-world breakthroughs, they drive our mission to turn pioneering ideas into scalable, intelligent solutions.',
                color: 'from-blue-600 to-indigo-700',
                icon: Zap,
              },
              {
                title: 'Software Engineers',
                description:
                  'Our team of full-stack software engineers excels in building scalable, enterprise-grade applications powered by cloud-native architectures. Blending technical depth with user-centered thinking, they transform complex requirements into seamless digital experiences that drive performance, security, and long-term growth.',
                color: 'from-emerald-600 to-teal-700',
                icon: Target,
              },
              {
                title: 'Business Consultants',
                description:
                  'Our seasoned business consultants serve as trusted strategic advisors, guiding organizations through digital transformation with deep industry insight and proven, agile methodologies. We collaborate closely with leadership teams to align technology with business goals, unlocking innovation, driving operational efficiency, and delivering measurable impact.',
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
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
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
      {/* Inline Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default About;
