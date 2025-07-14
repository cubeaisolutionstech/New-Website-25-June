import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Building2,
  Database,
  Workflow,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Orbit,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react'; // Import LucideIcon type
import { Helmet } from 'react-helmet-async';

interface Product {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  iconBg: string;
  image: string;
  features: string[];
  gradient: string;
}

const Products = () => {
  useEffect(() => {
    console.log('Products component mounted (entered /products route)');
    try {
      console.log('Lucide icons available:', {
        Users,
        Building2,
        Database,
        Workflow,
        CheckCircle,
        ArrowRight,
        Sparkles,
        Star,
        Orbit,
      });
      console.log('Framer Motion available:', motion);
      console.log('React Router available:', { Link });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in Products component dependencies:', error);
    }
  }, []);

  const products: Product[] = [
    {
      id: 'andromeda-crm',
      title: 'Andromeda CRM',
      description: 'Revolutionary customer relationship management with AI-powered insights spanning across your entire customer galaxy.',
      icon: Users,
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50/10',
      iconBg: 'bg-blue-600',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        '360° Customer View',
        'Predictive Analytics',
        'Automated Workflows',
        'Real-time Reporting',
      ],
      gradient: 'bg-gradient-to-br from-blue-600/10 to-indigo-700/10',
    },
    {
      id: 'orion-erp',
      title: 'Orion ERP',
      description: 'Comprehensive enterprise resource planning that connects every constellation of your business operations.',
      icon: Building2,
      color: 'from-emerald-600 to-teal-700',
      bgColor: 'bg-emerald-50/10',
      iconBg: 'bg-emerald-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Integrated Modules',
        'Cloud-Native',
        'Real-time Data',
        'Scalable Architecture',
      ],
      gradient: 'bg-gradient-to-br from-emerald-600/10 to-teal-700/10',
    },
    {
      id: 'nebula-cdm',
      title: 'Nebula CDM',
      description: 'Advanced customer data management with intelligent processing that illuminates insights from data clouds.',
      icon: Database,
      color: 'from-red-600 to-rose-700',
      bgColor: 'bg-red-50/10',
      iconBg: 'bg-red-600',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Data Unification',
        'Privacy Compliance',
        'AI Processing',
        'API Integration',
      ],
      gradient: 'bg-gradient-to-br from-red-600/10 to-rose-700/10',
    },
    {
      id: 'cosmos-orchestration',
      title: 'Cosmos Orchestration',
      description: 'Seamless workflow automation and process orchestration across your entire enterprise cosmos.',
      icon: Workflow,
      color: 'from-orange-600 to-amber-700',
      bgColor: 'bg-orange-50/10',
      iconBg: 'bg-orange-600',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Workflow Automation',
        'Process Integration',
        'Event-Driven Architecture',
        'Multi-System Sync',
      ],
      gradient: 'bg-gradient-to-br from-orange-600/10 to-amber-700/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-gray-50">
      <Helmet>
        <title>CubeAI Solutions - Our Products</title>
        <meta
          name="description"
          content="Explore CubeAI's suite of AI-powered enterprise solutions, including Andromeda CRM, Orion ERP, Nebula CDM, and Cosmos Orchestration, designed to transform your business operations."
        />
        <meta
          name="keywords"
          content="CubeAI Solutions, Andromeda CRM, Orion ERP, Nebula CDM, Cosmos Orchestration, AI solutions, enterprise software, business automation"
        />
      </Helmet>

      {/* Hero Section with Robot Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="AI-powered enterprise solutions background"
            className="w-full h-full object-cover"
            onError={(e) => console.error('Error loading hero background image:', e)}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
            onAnimationStart={() => console.log('Hero section animation started')}
            onAnimationComplete={() => console.log('Hero section animation completed')}
          >
            <div
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 cursor-pointer"
              role="button"
              aria-label="View our products"
              onClick={() => console.log('Our Products button clicked')}
            >
              <Orbit className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Our Products</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-blue-400">Our Galaxy of Solutions</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive constellation of AI-powered enterprise solutions designed
              to transform how you navigate the cosmos of customers, resources, data, and
              orchestrate stellar business processes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
            onAnimationComplete={() => console.log('Products grid animation completed')}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
                onAnimationComplete={() => console.log(`${product.title} card animation completed`)}
              >
                <div className="bg-white rounded-2xl p-10 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Top Color Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color}`} />

                  {/* Product Image */}
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={`${product.title} product`}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => console.error(`Error loading product image for ${product.title}:`, e)}
                    />
                  </div>

                  {/* Icon */}
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={`w-16 h-16 rounded-xl ${product.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-blue-600 opacity-60" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
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
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => console.log(`Navigating to product: ${product.id}`)}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full bg-gradient-to-r ${product.color} text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:scale-105`}
                      aria-label={`Learn more about ${product.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
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