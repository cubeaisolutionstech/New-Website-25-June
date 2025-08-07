import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Building2,
  Database,
  Workflow,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Target,
  Award,
  Mail,
  X
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ProductDetail = () => {
  const { productId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const productData = {
    'andromeda-crm': {
      title: 'Andromeda CRM',
      subtitle: 'Revolutionary Customer Relationship Management',
      description: 'Revolutionary customer relationship management with AI-powered insights spanning across your entire customer galaxy.',
      icon: Users,
      color: 'from-blue-600 to-indigo-700',
      bgImage: '/image/proando.webp',
      productImage: '/image/kcrm.jpg',
      features: [
        '360° Customer View',
        'Predictive Analytics',
        'Automated Workflows',
        'Real-time Reporting',
        'AI-Powered Insights',
        'Multi-Channel Integration'
      ],
      benefits: [
        {
          icon: TrendingUp,
          title: 'Increase Sales by 40%',
          description: 'AI-powered lead scoring and predictive analytics help identify high-value prospects and optimize sales strategies.',
          image: '/image/kcrm1.jpg'
        },
        {
          icon: Target,
          title: 'Improve Customer Retention',
          description: 'Advanced customer behavior analysis and automated engagement workflows reduce churn by 35%.',
          image: '/image/kcrm2.jpg'
        },
        {
          icon: Zap,
          title: 'Automate 80% of Tasks',
          description: 'Intelligent automation handles routine tasks, freeing your team to focus on strategic customer relationships.',
          image: '/image/kcrm3.jpg'
        }
      ]
    },
    'orion-erp': {
      title: 'Orion ERP',
      subtitle: 'Comprehensive Enterprise Resource Planning',
      description: 'Comprehensive enterprise resource planning that connects every constellation of your business operations.',
      icon: Building2,
      color: 'from-emerald-600 to-teal-700',
      bgImage: '/image/orin.avif',
      productImage: '/image/erp1.png',
      features: [
        'Integrated Modules',
        'Cloud-Native Architecture',
        'Real-time Data Processing',
        'Scalable Infrastructure',
        'Advanced Analytics',
        'Mobile Accessibility'
      ],
      benefits: [
        {
          icon: Globe,
          title: 'Unified Business Operations',
          description: 'Seamlessly integrate all business processes from finance to supply chain in one comprehensive platform.',
          image: '/image/erp2.jpg'
        },
        {
          icon: TrendingUp,
          title: 'Reduce Operational Costs by 30%',
          description: 'Streamlined processes and automated workflows significantly reduce manual overhead and operational expenses.',
          image: '/image/erp3.png'
        },
        {
          icon: Award,
          title: 'Real-time Business Intelligence',
          description: 'Advanced analytics and reporting provide instant insights for data-driven decision making.',
          image: '/image/erp4.webp'
        }
      ]
    },
    'nebula-cdm': {
      title: 'Nebula CDM',
      subtitle: 'Advanced Customer Data Management',
      description: 'Advanced customer data management with intelligent processing that illuminates insights from data clouds.',
      icon: Database,
      color: 'from-red-600 to-rose-700',
      bgImage: '/image/cdm.webp',
      productImage: '/image/cdm1.jpg',
      features: [
        'Data Unification',
        'Privacy Compliance',
        'AI Processing',
        'API Integration',
        'Real-time Sync',
        'Advanced Security'
      ],
      benefits: [
        {
          icon: Shield,
          title: 'Enterprise-Grade Security',
          description: 'Advanced encryption and compliance features ensure your customer data is protected and meets all regulatory requirements.',
          image: '/image/cdm2.webp'
        },
        {
          icon: Target,
          title: 'Unified Customer Profiles',
          description: 'Create comprehensive 360-degree customer views by consolidating data from multiple touchpoints and systems.',
          image: '/image/cdm3.webp'
        },
        {
          icon: Zap,
          title: 'AI-Powered Insights',
          description: 'Machine learning algorithms automatically identify patterns and generate actionable customer intelligence.',
          image: '/image/cdm4.png'
        }
      ]
    },
    'cosmos-orchestration': {
      title: 'Cosmos Orchestration',
      subtitle: 'Seamless Workflow Automation',
      description: 'Seamless workflow automation and process orchestration across your entire enterprise cosmos.',
      icon: Workflow,
      color: 'from-orange-600 to-amber-700',
      bgImage: '/image/cos.jpg',
      productImage: '/image/Cos1.webp',
      features: [
        'Workflow Automation',
        'Process Integration',
        'Event-Driven Architecture',
        'Multi-System Sync',
        'Visual Designer',
        'Performance Monitoring'
      ],
      benefits: [
        {
          icon: Zap,
          title: 'Accelerate Process Efficiency',
          description: 'Automated workflows reduce manual processing time by up to 75% while eliminating human errors.',
          image: '/image/cos2.jpg'
        },
        {
          icon: Globe,
          title: 'Seamless System Integration',
          description: 'Connect disparate systems and applications with intelligent orchestration and data synchronization.',
          image: '/image/cod3.avif'
        },
        {
          icon: TrendingUp,
          title: 'Scalable Architecture',
          description: 'Cloud-native design ensures your workflows can scale automatically based on demand and business growth.',
          image: '/image/cos4.webp'
        }
      ]
    }
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center text-gray-900">
          <span className="text-4xl font-bold mb-4">Product Not Found</span>
          <p className="text-gray-600">The requested product could not be found.</p>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Helmet>
        <title>{`CubeAI Solutions - ${product.title} Product Details`}</title>
        <meta
          name="description"
          content={`Discover ${product.title}, a ${product.subtitle.toLowerCase()} solution by CubeAI, featuring AI-powered capabilities to transform your business operations.`}
        />
        <meta
          name="keywords"
          content={`CubeAI Solutions, ${product.title}, ${product.subtitle.toLowerCase()}, AI solutions, business automation, predictive analytics`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={product.bgImage} alt={product.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Product Details</span>
            </div>
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-8`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{product.title}</h1>
            <p className="text-2xl text-blue-300 mb-8 font-medium">{product.subtitle}</p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}>
              <img src={product.productImage} alt={product.title} className="w-full h-96 object-cover rounded-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Features</h2>
              <div className="grid grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how {product.title} transforms your business operations and drives measurable results
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {product.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} whileHover={{ y: -10, scale: 1.02 }} className="group">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full">
                    <motion.div className="mb-6 overflow-hidden rounded-xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <img src={benefit.image} alt={benefit.title} className="w-full h-32 object-cover" />
                    </motion.div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <BenefitIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <div className="text-center mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-4`}>
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Request a Demo</h3>
              <p className="text-gray-600 mt-2">Fill out the form and we'll get back to you soon</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 bg-gradient-to-r ${product.color} text-white font-bold rounded-lg hover:opacity-90 transition-opacity`}
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductDetail;
