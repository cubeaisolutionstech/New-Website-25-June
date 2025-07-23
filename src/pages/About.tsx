import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Sparkles, Zap, Crown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const offices = ['Coimbatore', 'Bangalore', 'Namakkal', 'Kochi', 'Tiruppur', 'UK'];
  const boardMembers = [
    {
      name: 'Thiru IRS P.Muthusamy BSc(Agri) BL,MS',
      title: 'EX-IRS',
      image: 'image/muthu .jpg',
      bio: 'Visionary leader with 25+ years in AI and technology innovation.',
    },
    {
      name: 'MR.Prasad Balakrishanan',
      title: 'Miphi CEO',
      image: 'image/prasad.jpg',
      bio: 'AI research pioneer with expertise in machine learning and neural networks.',
    }
  ];

  const advisors = [
    {
      name: 'Dr. Gopala Krishnan',
      title: 'Ksr CT Principal',
      image: 'image/gopala.jpeg.jpg',
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
      image: 'image/balu.jpeg.jpg',
      bio: 'Strategic consultant helping organizations navigate digital transformation.',
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Helmet>
        <title>CubeAI Solutions - About Us</title>
        <meta name="description" content="Learn more about CubeAI Solutions, our mission, vision, and the team driving innovation in AI technology." />
        <meta name="keywords" content="CubeAI Solutions, AI technology, mission, vision, team, innovation" />
      </Helmet>

      {/* Hero Section */}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become the world’s foremost leader in AI-powered business transformation, shaping a future where intelligent technology and human ingenuity converge to solve complex challenges, accelerate innovation, and unlock boundless opportunities for growth.
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
          {/* Board of Directors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 10 }}
              className="w-20 h-20 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center mx-auto mb-8"
            >
              <Crown className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Board of Directors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
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
                transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                className="group relative"
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 transition-all duration-500 h-full shadow-lg hover:shadow-xl">
                  {/* Profile Image */}
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
                  {/* Member Info */}
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20 mt-32"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 150, damping: 10 }}
              className="w-20 h-20 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 flex items-center justify-center mx-auto mb-8"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Advisors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
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
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                className="group relative"
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 transition-all duration-500 h-full shadow-lg hover:shadow-xl">
                  {/* Profile Image */}
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
                  {/* Member Info */}
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
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              7 Global Offices
            </h2>
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
                description: 'Our team comprises PhD-level AI scientists and innovators specializing in machine learning, deep learning, and cutting-edge artificial intelligence research. With a strong track record of peer-reviewed publications, patents, and real-world breakthroughs, they drive our mission to turn pioneering ideas into scalable, intelligent solutions.',
                color: 'from-blue-600 to-indigo-700',
                icon: Zap,
              },
              {
                title: 'Software Engineers',
                description: 'Our team of full-stack software engineers excels in building scalable, enterprise-grade applications powered by cloud-native architectures. Blending technical depth with user-centered thinking, they transform complex requirements into seamless digital experiences that drive performance, security, and long-term growth.',
                color: 'from-emerald-600 to-teal-700',
                icon: Target,
              },
              {
                title: 'Business Consultants',
                description: 'Our seasoned business consultants serve as trusted strategic advisors, guiding organizations through digital transformation with deep industry insight and proven, agile methodologies. We collaborate closely with leadership teams to align technology with business goals, unlocking innovation, driving operational efficiency, and delivering measurable impact.',
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
