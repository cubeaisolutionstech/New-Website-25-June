import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, BarChart3, Eye, Code, Zap, FileText, Cpu, Database, Activity, Camera, Shield, Building2, Sparkles, Cloud, Smartphone, MessageSquare, Stethoscope, Scale, Users, PenTool, Plane, Mail, DollarSign, BarChart, Home, Globe, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import type { LucideIcon } from 'lucide-react';

// Define interfaces for type safety
interface DomainItem {
  id: string;
  name: string;
  icon: LucideIcon;
  category: string;
  description: string;
  image?: string;
}

interface ExploreData {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgGradient: string;
  cardColor: string;
  bgImage?: string;
  items: DomainItem[];
}

type ExploreId = 'aima' | 'aida' | 'vision-ai' | 'city' | 'cubebotics' | 'dce' | 'tech-solution';

const ExploreDetail = () => {
  const { exploreId } = useParams<{ exploreId: ExploreId }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const exploreData: Record<ExploreId, ExploreData> = {
    aima: {
title: 'AIMA',
subtitle: 'Artificial Intelligence, Machine Learning & Agent',
description: 'Get business automation, intelligent processing, document conversion, and analysis — all in one scalable AI solution',
color: 'from-emerald-400 via-cyan-500 to-blue-600',
bgGradient: 'from-emerald-50 via-cyan-50 to-blue-50',
cardColor: 'from-emerald-100 to-cyan-100',
bgImage: '/image/eaima.jpg',
items: [
{ id: 'resume-filtering', name: 'Resume Filtering Agent', icon: FileText, category: 'Automation', description: 'AI-powered resume screening and candidate filtering with intelligent matching algorithms' },
{ id: 'sql-automation', name: 'SQL Automation Agent', icon: Database, category: 'Automation', description: 'An SQL Automation Agent is a specialized software tool or AI agent designed to automate, schedule, and manage routine or complex database operations' },
{ id: 'medical-agent', name: 'Hospital Management System', icon: Activity, category: 'Healthcare', description: 'Intelligent medical diagnosis and analysis assistant for healthcare professionals' },
{ id: 'invoice-examination', name: 'Invoice Examination', icon: FileText, category: 'Finance', description: 'Smart invoice processing and validation system with fraud detection' },
{ id: 'excel-to-pdf', name: 'Excel to PDF', icon: FileText, category: 'Document', description: 'Automated document conversion with formatting preservation and batch processing' },
{ id: 'pdf-to-excel', name: 'PDF to Excel', icon: FileText, category: 'Document', description: 'Advanced data extraction and conversion with table recognition' },
{ id: 'logistics-automation', name: 'Smart Logistics Automation', icon: Zap, category: 'Logistics', description: 'End-to-end supply chain optimization with predictive analytics' },
{ id: 'legacy-modernization', name: 'Legacy System Transformation', icon: Database, category: 'Modernization', description: 'Modernize outdated systems with AI-driven platforms for seamless integration'},
{ id: 'industry-40', name: 'Industry 4.0 & 5.0 Innovation', icon: Cpu, category: 'Manufacturing', description: 'Cutting-edge smart manufacturing powered by AI, IoT, and advanced analytics'},
{ id: 'customer-support-agent', name: 'Customer Support Agent', icon: MessageSquare, category: 'Customer Service', description: 'AI-driven customer support with automated responses and sentiment analysis' },
{ id: 'voice-clinical-agent', name: 'Voice Activated Clinical Intelligence Agent', icon: Stethoscope, category: 'Healthcare', description: 'Voice-enabled clinical assistant for hands-free medical data access and documentation' },
{ id: 'legal-document-analyzer', name: 'Legal Document Analyzer Agent', icon: Scale, category: 'Legal', description: 'AI-powered analysis and summarization of legal documents with compliance checks' },
{ id: 'lead-generation-agent', name: 'Lead Generation Agent', icon: Users, category: 'Marketing', description: 'Automated lead identification and qualification with predictive scoring and multi-channel sourcing' },
{ id: 'linkedin-content-agent', name: 'LinkedIn Content Creation Agent', icon: PenTool, category: 'Marketing', description: 'AI-crafted LinkedIn posts and content strategies for enhanced engagement' },
{ id: 'travel-planner-agent', name: 'Travel Planner Agent', icon: Plane, category: 'Travel', description: 'Intelligent travel itinerary planning with personalized recommendations' },
{ id: 'email-automation-agent', name: 'Email Automation Agent', icon: Mail, category: 'Automation', description: 'Automated email campaign management with personalized content generation' },
{ id: 'content-creating-agents', name: 'Content Creating Agents', icon: PenTool, category: 'Marketing', description: 'AI-powered content generation for blogs, articles, and marketing materials with SEO optimization' },
{ id: 'social-media-agent', name: 'Social Media Agent', icon: MessageSquare, category: 'Marketing', description: 'Intelligent social media management with post scheduling, engagement analysis, and trend monitoring' },
{ id: 'investment-agent', name: 'Investment Agent', icon: DollarSign, category: 'Finance', description: 'AI-driven investment analysis and portfolio management with risk assessment and market predictions' },
{ id: 'events-analysing-agent', name: 'Events Analysing Agent', icon: BarChart, category: 'Analytics', description: 'Advanced event data analysis with performance metrics, attendee insights, and ROI calculations' },
{ id: 'house-conveyancing-agent', name: 'House Conveyancing Agent', icon: Home, category: 'Real Estate', description: 'Automated property transfer processing with legal document review and compliance verification' },
{ id: 'cold-mail-sending-agents', name: 'Cold Mail Sending Agents', icon: Mail, category: 'Sales', description: 'Personalized cold email campaign automation with A/B testing and response tracking' },
{ id: 'web-scraping-agent', name: 'Web Scraping Agent', icon: Globe, category: 'Data', description: 'Ethical web data extraction with structured output and real-time monitoring capabilities' },
{ id: 'table-booking-calling-agent', name: 'Table Booking Calling Agent', icon: Phone, category: 'Hospitality', description: 'Voice-enabled restaurant reservation system with availability checking and confirmation handling' }
],
    },
    aida: {
      title: 'AIDA',
      subtitle: 'Artificial Intelligence & Data Analysis',
      description: 'Get business insights, performance metrics, trend analysis, and reporting — all in one comprehensive analytics solution',
      color: 'from-orange-400 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 via-red-50 to-pink-50',
      cardColor: 'from-orange-100 to-red-100',
      bgImage: '/image/eaida.png',
      items: [
        { id: 'manufacture-analysis', name: 'Manufacture Data Analysis', icon: Database, category: 'Manufacturing', description: 'Production optimization and quality insights with real-time monitoring' },
        { id: 'hr-analysis', name: 'HR Data Analysis', icon: BarChart3, category: 'Human Resources', description: 'Workforce analytics and performance metrics with predictive modeling' },
        { id: 'restaurant-analysis', name: 'Restaurant Analysis', icon: BarChart3, category: 'Food & Beverage', description: 'Sales, inventory, and customer behavior insights for restaurant optimization' },
        { id: 'logistic-analysis', name: 'Logistic Data Analysis', icon: BarChart3, category: 'Logistics', description: 'Supply chain efficiency and cost optimization with route planning' },
        { id: 'chat-analysis', name: 'Customer Chat Analysis', icon: BarChart3, category: 'Customer Service', description: 'Sentiment analysis and support optimization with automated insights' },
        { id: 'saas-platforms', name: 'Scalable SaaS Solutions', icon: Zap, category: 'Software', description: 'Next-generation Software-as-a-Service platforms with embedded AI capabilities', image: '/image/esaa.avif' },
      ],
    },
    'vision-ai': {
      title: 'Vision AI',
      subtitle: 'Computer Vision & Intelligent Systems',
      description: 'Get smart recognition, automated monitoring, real real-time analysis, and security — all in one intelligent vision solution',
      color: 'from-violet-400 via-purple-500 to-indigo-600',
      bgGradient: 'from-violet-50 via-purple-50 to-indigo-50',
      cardColor: 'from-violet-100 to-purple-100',
      bgImage: '/image/evision.jpeg',
      items: [
        { id: 'attendance-system', name: 'Smart Attendance System', icon: Eye, category: 'Recognition', description: 'Facial recognition and automated attendance tracking with real-time monitoring', image: '/image/attness.webp' },
        { id: 'number-plate', name: 'Number Plate Recognition System', icon: Camera, category: 'Security', description: 'Real-time vehicle identification and monitoring with license plate detection', image: '/image/number.png' },
        { id: 'pcb-board', name: 'PCB Board', icon: Cpu, category: 'Manufacturing', description: 'Automated circuit board inspection and quality control with defect detection', image: '/image/pcb.jpg' },
        { id: 'meter-monitoring', name: 'Water and Energy Meter Monitoring', icon: Shield, category: 'IoT', description: 'Smart meter reading and consumption analytics with mobile application support', image: '/image/metter.webp' },
        { id: 'chatbot-solutions', name: 'AI-Powered Chatbots', icon: Sparkles, category: 'AI', description: 'Smart chatbot solutions driven by advanced natural language processing', image: '/image/echat.avif' },
        { id: 'fabric-defect', name: 'Fabric Defect Detection System', icon: Camera, category: 'Manufacturing', description: 'Automated fabric inspection with real-time defect detection for quality assurance', image: '/image/fabric-defect.jpg' },
        { id: 'body-measurement', name: 'Contactless Human Body Size Measurement Solution', icon: Activity, category: 'Measurement', description: 'Accurate, non-invasive body size measurement using advanced computer vision', image: '/image/body-measurement.jpg' }
      ],
    },
    city: {
      title: 'CyTI',
      subtitle: 'Cyber Technology Innovation',
      description: 'Advanced cybersecurity and IoT solutions for secure and connected systems',
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 via-cyan-50 to-blue-50',
      cardColor: 'from-blue-100 to-cyan-100',
      bgImage: '/image/ecyti.jpg',
      items: [
        { id: 'iot-services', name: 'IoT Connectivity Solutions', icon: Database, category: 'IoT', description: 'Integrated Internet of Things solutions for connected devices and systems', image: '/image/eiot.jpg' },
        { id: 'auto-sizing', name: 'Large Language Model Solutions', icon: Brain, category: 'AI', description: 'Advanced LLMs for intelligent applications and natural language understanding', image: '/image/ellm.jpg' },
        { id :'Digital',name:'Digital Monitoring System',icon: Shield, category:'AI', description:'A Digital Monitoring System tracks real-time activities, provides insights, and improves efficiency with instant alerts.'}
      ]
    },
    cubebotics: {
      title: 'Cubebotics',
      subtitle: 'Embedded Systems & IoT Innovation',
      description: 'Custom embedded systems and IoT solutions for industrial and smart device applications',
      color: 'from-blue-600 to-indigo-700',
      bgGradient: 'from-blue-50 via-indigo-50 to-blue-50',
      cardColor: 'from-blue-100 to-indigo-100',
      bgImage: '/image/ecube.jpg',
      items: [
        { id: 'embedded-iot', name: 'Embedded IoT Systems', icon: Cpu, category: 'IoT', description: 'Custom solutions for industrial automation and smart device connectivity', image: '/image/eembd.jpg' },
        { id: 'drone-tech', name: 'Drone Technology Innovations', icon: Zap, category: 'Drones', description: 'Advanced drones for surveillance, mapping, and industrial applications', image: '/image/edrone.jpg' },
      ],
    },
    dce: {
      title: 'DCE',
      subtitle: 'Data & Cloud Infrastructure',
      description: 'Scalable data and cloud solutions for efficient and reliable infrastructure',
      color: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-50 via-blue-50 to-cyan-50',
      cardColor: 'from-cyan-100 to-blue-100',
      bgImage: '/image/edec.jpg',
      items: [
        { id: 'data-engineering', name: 'Data Pipeline Engineering', icon: Database, category: 'Data', description: 'Scalable data pipelines designed for efficiency and reliability', image: '/image/de.jpg' },
        { id: 'cloud-engineering', name: 'Cloud Infrastructure Solutions', icon: Cloud, category: 'Cloud', description: 'End-to-end cloud services for migration and infrastructure optimization', image: '/image/ce.png' },
        { id: 'Hadoop ',name:'Hadoop in Docker ',icon:Database,category:'Data', description:'Our Docker Compose setup supports HDFS, YARN, Spark integration for efficient analytics, ML, and productivity in diverse environments.'}
      ],
    },
    'tech-solution': {
      title: 'Tech Solution',
      subtitle: 'Future-Ready Technology Services',
      description: 'Innovative web, mobile, and consulting services for digital transformation',
      color: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 via-indigo-50 to-blue-50',
      cardColor: 'from-blue-100 to-indigo-100',
      bgImage: '/image/etech.jpeg',
      items: [
        { id: 'web-development', name: 'Modern Web Development', icon: Code, category: 'Web', description: 'Innovative web solutions built with cutting-edge technologies', image: '/image/eweb.jpg' },
        { id: 'app-development', name: 'Mobile App Development', icon: Smartphone, category: 'Mobile', description: 'High-performance native and cross-platform apps for iOS and Android', image: '/image/eapp.png' },
        { id: 'business-consulting', name: 'Digital Transformation Consulting', icon: Building2, category: 'Consulting', description: 'Strategic consulting to drive business growth through technology', image: '/image/ebuss.webp' },
      ],
    },
  };

  useEffect(() => {
    if (!exploreId || !exploreData[exploreId]) {
      setError('Invalid explore ID');
      setLoading(false);
      return;
    }
    setLoading(false);
    console.log('Rendering exploreId:', exploreId);
    console.log('Explore data:', exploreData[exploreId]);
  }, [exploreId]);

  const handleSeeHowItWorks = (itemId: string) => {
    console.log(`Navigating to /section/${exploreId}/${itemId}`);
    try {
      navigate(`/section/${exploreId}/${itemId}`);
    } catch (err) {
      console.error(`Navigation error for ${itemId}:`, err);
      setError(`Failed to navigate to ${itemId} page`);
    }
  };

  // Function to handle title capitalization
  const getFormattedTitle = (title: string) => {
    if (title === 'AIMA' || title === 'AIDA' || title === 'CyTI') {
      return title;
    }
    return title.toLowerCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error || !exploreId || !exploreData[exploreId]) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The requested page could not be found.'}</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  const explore = exploreData[exploreId];

  // Animation variants for cards
  const cardAnimationVariants = [
    {
      initial: { opacity: 0, y: 60, scale: 0.8 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    {
      initial: { opacity: 0, x: -60, rotate: -10 },
      animate: { opacity: 1, x: 0, rotate: 0 },
      transition: { duration: 0.7, ease: 'easeOut' },
    },
    {
      initial: { opacity: 0, x: 60, rotate: 10 },
      animate: { opacity: 1, x: 0, rotate: 0 },
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    {
      initial: { opacity: 0, y: -40, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.6, ease: 'backOut' },
    },
    {
      initial: { opacity: 0, scale: 0.5, rotate: 45 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 0.8, ease: 'backOut' },
    },
    {
      initial: { opacity: 0, y: 80, x: -30 },
      animate: { opacity: 1, y: 0, x: 0 },
      transition: { duration: 0.7, ease: 'easeOut' },
    },
    {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.9, ease: 'backOut' },
    },
    {
      initial: { opacity: 0, y: 50, x: 30 },
      animate: { opacity: 1, y: 0, x: 0 },
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${explore.bgGradient} relative overflow-hidden`}>
      <Helmet>
        <title>{`CubeAI - ${explore.title} Solutions`}</title>
        <meta name="description" content={explore.description} />
      </Helmet>

      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-64 h-64 opacity-10"
        >
          <div className={`w-full h-full bg-gradient-to-r ${explore.color} rounded-full blur-3xl`} />
        </motion.div>
        <motion.div
          animate={{
            rotate: [360, 0],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 left-20 w-48 h-48 opacity-15"
        >
          <div className={`w-full h-full bg-gradient-to-r ${explore.color} rounded-3xl blur-2xl`} />
        </motion.div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg flex items-center justify-center shadow-lg"
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
              CubeAI
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section - Title on Left, Image on Right */}
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Content - Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-gray-800/10 rounded-full text-sm font-medium text-gray-700 mb-6"
                >
                  {explore.subtitle.toUpperCase()}
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                >
                  Discover the freedom of {getFormattedTitle(explore.title)} on your terms
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-700 leading-relaxed mb-8"
                >
                  {explore.description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
                >
                  <span>Get Demo Account</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
              {/* Right Content - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="relative w-96 h-96">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-full h-full relative"
                    style={{
                      clipPath: 'polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)',
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${explore.color} opacity-20 absolute inset-0`} />
                    <div className="w-full h-full bg-white/30 backdrop-blur-sm absolute inset-0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="w-80 h-80 rounded-full overflow-hidden flex items-center justify-center shadow-2xl border border-white/30"
                      >
                        <img
                          src={explore.bgImage}
                          alt={`${explore.title} Background Image`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error(`Failed to load image: ${explore.bgImage}`);
                            e.currentTarget.src =
                              'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                          }}
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute top-8 right-8 w-8 h-8 bg-white/50 rounded-full shadow-lg"
                    />
                    <motion.div
                      animate={{
                        y: [0, 10, 0],
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                      className="absolute bottom-12 left-12 w-6 h-6 bg-white/40 rounded-full shadow-lg"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                      className="absolute top-20 left-6 w-4 h-4 bg-white/60 rounded-full"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${explore.color} opacity-20 blur-3xl scale-110 rounded-full`} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{explore.title} Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive suite of AI-powered tools designed to transform your business operations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {explore.items.map((item, index) => {
                const ItemIcon = item.icon;
                const animationVariant = cardAnimationVariants[index % cardAnimationVariants.length];

                return (
                  <motion.div
                    key={item.id}
                    initial={animationVariant.initial}
                    animate={animationVariant.animate}
                    transition={{
                      ...animationVariant.transition,
                      delay: 0.8 + index * 0.15,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                    className="group"
                  >
                    <div
                      className={`relative bg-gradient-to-br ${explore.cardColor} rounded-2xl p-6 shadow-xl border border-white/20 backdrop-blur-sm h-80 flex flex-col transition-all duration-300 group-hover:shadow-2xl`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-white/30 transition-all duration-300"
                        >
                          <ItemIcon className="w-6 h-6 text-gray-800" />
                        </motion.div>
                        <div className="text-xs text-gray-700 bg-white/30 px-3 py-1 rounded-full font-medium">
                          {item.category}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-gray-900 font-bold text-lg leading-tight mb-3 group-hover:text-gray-800 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                          {item.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSeeHowItWorks(item.id)}
                          className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg group-hover:shadow-xl"
                        >
                          <span>See How It Works</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors" />
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors" />
                      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreDetail;