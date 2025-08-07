import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles,
  ArrowLeft,
  CheckCircle,
  Globe,
  Users,
  Zap,
  Shield,
  Rocket,
  Brain,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  TrendingUp,
  Settings,
  Heart,
  Eye,
  MessageCircle,
  BarChart3,
  Lock,
  Wifi,
  Gauge,
  Cpu, // Replaced Microchip with Cpu
  Plane,
  Server,
  Code,
  Briefcase,
  Megaphone,
  Wrench,
  Camera,
  Truck,
  Battery,
  MapPin,
  AlertTriangle,
  Headphones,
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 100 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const serviceData = {
    aima: {
      title: 'AIMA - Artificial Intelligence, Machine Learning & Agent',
      subtitle: 'Revolutionizing Industries with Intelligent Automation',
      color: 'from-blue-500 to-indigo-600',
      icon: Sparkles,
      sections: [
        {
          title: 'Industry 4.0 & 5.0',
          icon: Globe,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Industry 4.0: Smarter Factories, Brighter Future</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Imagine stepping into a factory where machines chat with each other, spot problems before they escalate, and tweak operations to save energy. That’s Industry 4.0 for you—a friendly revolution making work smarter and life easier for everyone involved!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Real-time tracking with a smile', icon: Zap },
                    { text: 'Cutting waste like a pro', icon: TrendingUp },
                    { text: 'Catching issues early', icon: Shield },
                    { text: 'Boosting quality effortlessly', icon: CheckCircle },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Industry 5.0: Human-Tech Teamwork</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Now picture humans and machines teaming up like best buddies, creating innovative, eco-friendly solutions. Industry 5.0 is all about that warm collaboration, putting people first while tech lends a helping hand!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Humans and robots working together', icon: Users },
                    { text: 'Tailored products just for you', icon: Rocket },
                    { text: 'Green practices we all love', icon: Globe },
                    { text: 'Sparkling new ideas', icon: Sparkles },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Legacy Modernization',
          icon: Rocket,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Transform Your Legacy Systems</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Got an old system gathering dust? We’ll breathe new life into it with AI magic, making it work smoothly with today’s tech—think of it as a friendly upgrade for your business!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Seamless cloud move with no hiccups', icon: Cloud },
                    { text: 'Rock-solid data security', icon: Shield },
                    { text: 'Training your team with care', icon: Users },
                    { text: 'New tools that fit right in', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  We handle the transition with a smile, keeping your business running like a well-oiled machine.
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    aida: {
      title: 'AIDA - Artificial Intelligence & Data Analysis',
      subtitle: 'Transforming Data into Actionable Insights',
      color: 'from-emerald-500 to-teal-600',
      icon: Database,
      sections: [
        {
          title: 'Medical Data Analytics',
          icon: Heart,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Revolutionizing Healthcare with Data</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We’re turning medical data into a superhero tool—helping doctors predict health risks, personalize treatments, and speed up research with a caring touch!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Spotting risks before they grow', icon: Eye },
                    { text: 'Treatments made just for you', icon: Users },
                    { text: 'Faster drug discoveries', icon: Rocket },
                    { text: 'Fewer mistakes, more smiles', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  From X-rays to DNA, we’re here to make healthcare better and more affordable for all.
                </p>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'SAAS Solutions',
          icon: Cloud,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Software That Grows With You</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our SAAS platforms are like friendly assistants, automating tasks and making your workday a breeze—perfect for any industry looking to shine!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Grows with your business needs', icon: TrendingUp },
                    { text: 'Access from anywhere, anytime', icon: Globe },
                    { text: 'Safety you can trust', icon: Shield },
                    { text: 'Tools that play nice together', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  No setup hassles—just smart, cost-effective tools to manage your world effortlessly.
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'vision-ai': {
      title: 'Vision AI - AI Solutions',
      subtitle: 'Intelligent Visual Recognition Systems',
      color: 'from-violet-500 to-purple-600',
      icon: Eye,
      sections: [
        {
          title: 'Chatbot Solutions',
          icon: MessageCircle,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Chatbots That Actually Get It</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our chatbots are like friendly neighbors, always there 24/7 with personalized chats that feel like a warm conversation—works anywhere you need!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Understands you naturally', icon: Brain },
                    { text: 'Works on any platform', icon: Globe },
                    { text: 'Remembers the context', icon: Users },
                    { text: 'Learns as we go', icon: TrendingUp },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-violet-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Perfect for support, leads, or team tasks—chatting with a human-like flair!
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    city: {
      title: 'CITY - Cyber Tech Innovation',
      subtitle: 'Securing the Future with Advanced Technology',
      color: 'from-purple-500 to-pink-500',
      icon: Shield,
      sections: [
        {
          title: 'IoT Services',
          icon: Wifi,
          content: (
            <div className="space-y-12 w-full mx-auto">
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Securing Automotive IoT Ecosystems</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We’re the guardians of connected cars, ensuring every IoT gadget in your vehicle is safe and sound with expert solutions—think reverse engineering to compliance checks!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Threat Modeling', icon: Shield },
                    { text: 'End-to-End Encryption', icon: Lock },
                    { text: 'Compliance Auditing', icon: CheckCircle },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Automotive Reverse Engineering</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We dive into your car’s tech like detectives, strengthening systems with a focus on AUTOSAR, ECU security, and smooth communication—keeping your ride secure!
                </p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">ECU Penetration Testing</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our team plays the role of friendly hackers, checking every ECU nook and cranny to spot weaknesses and boost your vehicle’s safety with care.
                </p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">AUTOSAR Penetration</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We secure your AUTOSAR ECUs with a thorough check of architecture and protocols, ensuring your tech runs like a charm with top-notch cybersecurity.
                </p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Full Vehicle Security Validation</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We give your whole car a security hug, checking everything from ECUs to fleet systems, so you can drive with complete peace of mind.
                </p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Infotainment Penetration Testing</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We make sure your car’s entertainment system is a safe haven, testing it with love to deliver a smooth and secure ride experience.
                </p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">OBC and Charging Station Penetration Testing</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We secure your electric vehicle chargers and stations, ensuring a reliable power-up every time with our expert testing.
                </p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">R155 CSMS Consultancy</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We guide you through UNECE R155 rules with a friendly hand, offering top cybersecurity advice and smooth software updates.
                </p>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">SDV Penetration Testing</h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We keep Software Defined Vehicles safe with cutting-edge tests, ensuring your futuristic ride is as secure as it is smart.
                </p>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'LLM Security Services',
          icon: Gauge,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Automated Red Teaming</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Deploy AI systems with confidence, knowing they’re protected against sophisticated threats. Our LLM Security Services perform automated red teaming at scale, rigorously testing Large Language Models (LLMs) with advanced attack techniques such as
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'prompt injection', icon: TrendingUp },
                    { text: 'jailbreak attempts', icon: BarChart3 },
                    { text: 'multi-turn exploits', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Using over 2 million prompts per technique, we simulate real-world adversarial scenarios to uncover vulnerabilities. Each model response is thoroughly evaluated with multiple specialized evaluation models to identify safety violations, sensitive data leaks, and policy non-compliance.
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    cubeboyics: {
      title: 'Cubeboyics - Embedded Systems & IoT',
      subtitle: 'Building Smart Devices for Tomorrow',
      color: 'from-orange-500 to-red-500',
      icon: Cpu, // Replaced Microchip with Cpu
      sections: [
        {
          title: 'Embedded & IoT Solutions',
          icon: Cpu, // Replaced Microchip with Cpu
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Cpu className="w-6 h-6 text-white" /> {/* Replaced Microchip with Cpu */}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Devices That Think and Act</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We craft smart gadgets and IoT systems that feel like trusty sidekicks—perfect for smart homes or bustling factories with a personal touch!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Quick edge processing', icon: Zap },
                    { text: 'Energy-saving designs', icon: Gauge },
                    { text: 'Safe connections', icon: Lock },
                    { text: 'Custom firmware magic', icon: Code },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Reliable and fun devices that make your life easier, one smart step at a time.
                </p>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Drone Technology',
          icon: Plane,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Taking Flight with AI</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our AI-powered drones are like flying helpers, mapping lands, watching over, delivering packages, and inspecting with a cheerful buzz!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Flies on its own', icon: Brain },
                    { text: 'Crystal-clear pictures', icon: Camera },
                    { text: 'Live data updates', icon: Wifi },
                    { text: 'Tough weather friend', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Great for farms or rescues, with sensors that handle any adventure!
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    dce: {
      title: 'DCE - Data & Cloud Engineering',
      subtitle: 'Scalable Cloud Solutions for Modern Businesses',
      color: 'from-cyan-500 to-blue-600',
      icon: Server,
      sections: [
        {
          title: 'Data Engineering',
          icon: Database,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Unlock Your Data's Superpower</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We turn your data into a storytelling hero, building systems that gather, process, and reveal insights with a warm, welcoming approach!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Scalable pipelines that grow', icon: Settings },
                    { text: 'Instant insights', icon: Zap },
                    { text: 'Quality checks with love', icon: CheckCircle },
                    { text: 'ML-ready data magic', icon: Brain },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-cyan-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  From raw data to ready-to-use insights, we’ve got you covered for BI or ML adventures.
                </p>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Cloud Engineering',
          icon: Cloud,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Take Your Business to the Cloud</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We make cloud migration a breeze, designing setups and adding DevOps magic to keep your business soaring high with ease!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Smooth move with no downtime', icon: Rocket },
                    { text: 'Auto-scaling for busy days', icon: TrendingUp },
                    { text: 'Smart cost savings', icon: BarChart3 },
                    { text: 'Backup plans you can rely on', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Secure, scalable clouds with a touch of DevOps love for your growing needs.
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'tech-solution': {
      title: 'Tech Solution - Future Technology & Services',
      subtitle: 'Comprehensive Technology Services',
      color: 'from-indigo-500 to-purple-600',
      icon: Monitor,
      sections: [
        {
          title: 'Web Development',
          icon: Monitor,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Your Digital Storefront</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We build websites that feel like a warm welcome, fast and secure, helping your business grow with a smile on every visitor’s face!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Loads in a flash', icon: Zap },
                    { text: 'Mobile-friendly vibe', icon: Smartphone },
                    { text: 'SEO that works wonders', icon: TrendingUp },
                    { text: 'Safe and sound design', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  From online shops to company hubs, we create sites that perform and impress.
                </p>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'App Development',
          icon: Smartphone,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Apps Your Customers Will Love</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We craft apps that feel like a friend, with smooth designs for iOS and Android, making your customers’ lives easier and more fun!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Native app goodness', icon: Code },
                    { text: 'Easy-to-use interface', icon: Users },
                    { text: 'Works offline too', icon: Wifi },
                    { text: 'Fun push notifications', icon: BarChart3 },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Apps with a personal touch, solving problems with a grin.
                </p>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Business Consulting',
          icon: Briefcase,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Take Your Business to the Next Level</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We’re your business buddies, guiding you through digital changes and process tweaks to grow stronger and greener with a personal plan!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Smart digital strategy', icon: Rocket },
                    { text: 'Automation that saves time', icon: Settings },
                    { text: 'A roadmap to success', icon: Globe },
                    { text: 'Smooth change support', icon: Users },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Tailored advice with a heart, helping you make smart moves.
                </p>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Digital Marketing',
          icon: Megaphone,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8" variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Megaphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Get Your Brand Noticed Online</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We shout your brand’s story with SEO, social media, and ads that feel like a friendly chat, driving traffic with a personal twist!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'SEO that boosts visibility', icon: TrendingUp },
                    { text: 'Fun social campaigns', icon: Users },
                    { text: 'Targeted ads that pop', icon: Zap },
                    { text: 'Engaging content plans', icon: Globe },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-pink-500 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                  Campaigns crafted for results, turning heads into loyal fans.
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
  };

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <span className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</span>
          <p className="text-gray-700 mb-8">The requested service could not be found.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            aria-label="Go back to homepage"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>{`CubeAI Solutions - ${service.title}`}</title>
        <meta
          name="description"
          content={`Explore ${service.title} by CubeAI, offering innovative solutions including ${service.sections
            .map((section) => section.title)
            .join(', ')}.`}
        />
        <meta
          name="keywords"
          content={`CubeAI Solutions, ${service.title}, AI solutions, ${service.sections
            .map((section) => section.title)
            .join(', ')}`}
        />
      </Helmet>

      {/* Navigation */}
      <nav className="p-6">
        <motion.div variants={fadeInUp}>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Go back to services"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`text-center mb-16 p-8 rounded-3xl bg-gradient-to-r ${service.color} shadow-xl`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
              <ServiceIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Service Details</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-12">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-24">
            {service.sections.map((section, index) => {
              const SectionIcon = section.icon;
              return (
                <motion.div
                  key={index}
                  variants={sectionVariants}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="p-8 lg:p-12 w-full">
                      <div className="flex items-center mb-8">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                        >
                          <SectionIcon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <div className="space-y-6">{section.content}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceDetail;
