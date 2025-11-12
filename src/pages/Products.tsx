import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Users,
  Building2,
  Database,
  Workflow,
  CheckCircle,
  ArrowRight,
  Star,
  Orbit,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Define interfaces for type safety
interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  iconBg: string;
  image: string;
  features: string[];
}

const Products = () => {
  const products: Product[] = [
    {
      id: 'andromeda-crm',
      title: 'Andromeda CRM',
      description: 'Andromeda CRM is an Agentic AI-powered customer relationship management platform that autonomously manages, analyzes, and enhances customer interactions. By leveraging generative AI, predictive intelligence, and AI automation tools, it provides businesses with actionable insights, smart engagement, and faster decision-making — all in real time.',
      icon: Users,
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50/10',
      iconBg: 'bg-blue-600',
      image: 'image/crm.webp',
      features: [
        'Intelligent Lead Prioritization ',
        'Adaptive Customer Journeys ',
        'Smart Interaction Summaries',
        'Autonomous Data Enrichment ',
        'Sentiment & Engagement Analysis ',
        'Proactive Sales Coaching ',
        'Multi-Channel Integration ',
      ],
    },
    {
      id: 'orion-erp',
      title: 'Orion ERP',
      description: 'Experience a new era of ERP where generative AI, AI automation tools, and enterprise AI solutions transform every workflow into a self-optimizing system. Orion ERP seamlessly integrates finance, operations, HR, and supply chain into one intelligent ecosystem — unlocking unprecedented business productivity using AI.',
      icon: Building2,
      color: 'from-emerald-600 to-teal-700',
      bgColor: 'bg-emerald-50/10',
      iconBg: 'bg-emerald-600',
      image: 'image/werp.jpg',
      features: [
        'Adaptive Process Intelligence ',
        'Predictive Resource Management ',
        'AI-Driven Decision Support ',
        'Hyper-Scalable Infrastructure ',
        'Unified Data Ecosystem ',
      ],
    },
    {
      id: 'nebula-cdm',
      title: 'Nebula CDM',
      description: 'Nebula CDM revolutionizes customer data management by integrating Agentic AI to autonomously collect, clean, and analyze data across all channels. It transforms scattered datasets into a single, intelligent knowledge hub that drives business productivity using AI and ensures enterprise-grade compliance.',
      icon: Database,
      color: 'from-red-600 to-rose-700',
      bgColor: 'bg-red-50/10',
      iconBg: 'bg-red-600',
      image: 'image/cdn.webp',
      features: [
        'Autonomous Data Orchestration ',
        'Context-Aware Data Enrichment ',
        'Intelligent Data Governance ',
        'Seamless Cross-Platform Connectivity ',
        'Real-Time Insight Generation '
      ],
    },
    {
      id: 'cosmos-orchestration',
      title: 'Cosmos Orchestration',
      description: 'Cosmos Orchestration leverages Agentic AI to autonomously design, optimize, and manage end-to-end enterprise workflows. It ensures seamless process coordination, enabling your systems, applications, and teams to work in perfect synchronization for maximum efficiency and agility.',
      icon: Workflow,
      color: 'from-orange-600 to-amber-700',
      bgColor: 'bg-orange-50/10',
      iconBg: 'bg-orange-600',
      image: 'image/General.webp',
      features: [
        'Autonomous Workflow Design ',
        'Intelligent Process Optimization',
        'Context-Aware Event Handling ',
        'Unified Orchestration Hub ',
        'Scalable Multi-Environment Sync',
      ],
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1,
      },
    },
  };

  const iconVariants: Variants = {
    hover: {
      rotate: [0, 360],
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const starVariants: Variants = {
    hover: {
      scale: 1.3,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-b from-gray-100 to-blue-100">
      <Helmet>
        <title>CubeAI Solutions - AI-Powered Enterprise Products</title>
        <meta
          name="description"
          content="Discover CubeAI’s innovative AI-powered enterprise products — Andromeda CRM, Orion ERP, Nebula CDM, and Cosmos Orchestration. Our solutions simplify customer management, optimize resources, unify data, and automate workflows to accelerate digital transformation."
        />
        <meta
          name="keywords"
          content="CubeAI Solutions products, Andromeda CRM AI customer management, Orion ERP enterprise resource planning, Nebula CDM customer data management, Cosmos Orchestration workflow automation, AI-powered enterprise software, digital transformation tools, business process automation"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src="image/producti.webp"
            alt="Products Background"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            onError={(e) => {
              e.currentTarget.src = '/fallback.webp';
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
              role="region"
              aria-label="Our Products Badge"
            >
              <Orbit className="w-5 h-5 text-white mr-2 animate-spin-slow" />
              <span className="text-white font-medium">Our Products</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-blue-400">Our Galaxy of Solutions</span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              AI-Powered Enterprise Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive constellation of AI-powered enterprise solutions designed to transform how you navigate the cosmos of customers, resources, data, and orchestrate stellar business processes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Business Transformation Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our range of AI-based products designed to help your business run smoothly. From managing customer relationships and data to organizing workflows and business processes, our tools make everyday tasks easier and more efficient.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Top Color Bar */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color}`}
                    whileHover={{ scaleX: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Product Image */}
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      width={400}
                      height={128}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-32 object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                      onError={(e) => {
                        e.currentTarget.src = '/fallback.webp';
                      }}
                    />
                  </div>
                  {/* Icon and Stars */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-xl ${product.iconBg} flex items-center justify-center`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div key={i} variants={starVariants} whileHover="hover">
                          <Star className="w-4 h-4 text-blue-600 opacity-60" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* Title and Description */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{product.description}</p>
                  {/* Features */}
                  <div className="mb-10">
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-blue-600" />
                          <span className="text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* CTA Button */}
                  <a
                    href={`/product/${product.id}`}
                    className="w-full"
                    aria-label={`Learn more about ${product.title}`}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${product.color} text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
