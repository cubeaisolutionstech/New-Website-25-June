import React, { useEffect } from 'react';
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
} from 'lucide-react';
import { LucideIcon } from 'lucide-react'; // Import LucideIcon type
import { Helmet } from 'react-helmet-async';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

interface Product {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgImage: string;
  productImage: string;
  features: string[];
  benefits: Benefit[];
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId?: string }>();

  useEffect(() => {
    console.log('ProductDetail component mounted (entered /product/:productId route)', { productId });
    try {
      console.log('Lucide icons available:', {
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
      });
      console.log('Framer Motion available:', motion);
      console.log('React Router available:', { useParams });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in ProductDetail component dependencies:', error);
    }
  }, [productId]);

  const productData: Record<string, Product> = {
    'andromeda-crm': {
      title: 'Andromeda CRM',
      subtitle: 'Revolutionary Customer Relationship Management',
      description: 'Revolutionary customer relationship management with AI-powered insights spanning across your entire customer galaxy.',
      icon: Users,
      color: 'from-blue-600 to-indigo-700',
      bgImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      productImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        '360° Customer View',
        'Predictive Analytics',
        'Automated Workflows',
        'Real-time Reporting',
        'AI-Powered Insights',
        'Multi-Channel Integration',
      ],
      benefits: [
        {
          icon: TrendingUp,
          title: 'Increase Sales by 40%',
          description: 'AI-powered lead scoring and predictive analytics help identify high-value prospects and optimize sales strategies.',
          image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: Target,
          title: 'Improve Customer Retention',
          description: 'Advanced customer behavior analysis and automated engagement workflows reduce churn by 35%.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: Zap,
          title: 'Automate 80% of Tasks',
          description: 'Intelligent automation handles routine tasks, freeing your team to focus on strategic customer relationships.',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    'orion-erp': {
      title: 'Orion ERP',
      subtitle: 'Comprehensive Enterprise Resource Planning',
      description: 'Comprehensive enterprise resource planning that connects every constellation of your business operations.',
      icon: Building2,
      color: 'from-emerald-600 to-teal-700',
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      productImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Integrated Modules',
        'Cloud-Native Architecture',
        'Real-time Data Processing',
        'Scalable Infrastructure',
        'Advanced Analytics',
        'Mobile Accessibility',
      ],
      benefits: [
        {
          icon: Globe,
          title: 'Unified Business Operations',
          description: 'Seamlessly integrate all business processes from finance to supply chain in one comprehensive platform.',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: TrendingUp,
          title: 'Reduce Operational Costs by 30%',
          description: 'Streamlined processes and automated workflows significantly reduce manual overhead and operational expenses.',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: Award,
          title: 'Real-time Business Intelligence',
          description: 'Advanced analytics and reporting provide instant insights for data-driven decision making.',
          image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    'nebula-cdm': {
      title: 'Nebula CDM',
      subtitle: 'Advanced Customer Data Management',
      description: 'Advanced customer data management with intelligent processing that illuminates insights from data clouds.',
      icon: Database,
      color: 'from-red-600 to-rose-700',
      bgImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
      productImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Data Unification',
        'Privacy Compliance',
        'AI Processing',
        'API Integration',
        'Real-time Sync',
        'Advanced Security',
      ],
      benefits: [
        {
          icon: Shield,
          title: 'Enterprise-Grade Security',
          description: 'Advanced encryption and compliance features ensure your customer data is protected and meets all regulatory requirements.',
          image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: Target,
          title: 'Unified Customer Profiles',
          description: 'Create comprehensive 360-degree customer views by consolidating data from multiple touchpoints and systems.',
          image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: Zap,
          title: 'AI-Powered Insights',
          description: 'Machine learning algorithms automatically identify patterns and generate actionable customer intelligence.',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    'cosmos-orchestration': {
      title: 'Cosmos Orchestration',
      subtitle: 'Seamless Workflow Automation',
      description: 'Seamless workflow automation and process orchestration across your entire enterprise cosmos.',
      icon: Workflow,
      color: 'from-orange-600 to-amber-700',
      bgImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      productImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Workflow Automation',
        'Process Integration',
        'Event-Driven Architecture',
        'Multi-System Sync',
        'Visual Designer',
        'Performance Monitoring',
      ],
      benefits: [
        {
          icon: Zap,
          title: 'Accelerate Process Efficiency',
          description: 'Automated workflows reduce manual processing time by up to 75% while eliminating human errors.',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: Globe,
          title: 'Seamless System Integration',
          description: 'Connect disparate systems and applications with intelligent orchestration and data synchronization.',
          image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          icon: TrendingUp,
          title: 'Scalable Architecture',
          description: 'Cloud-native design ensures your workflows can scale automatically based on demand and business growth.',
          image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
        <div className="text-center text-gray-900">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">The requested product could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-20 bg-gray-50">
      
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
          <img
            src={product.bgImage}
            alt={`${product.title} background`}
            className="w-full h-full object-cover"
            onError={(e) => console.error(`Error loading background image for ${product.title}:`, e)}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            onAnimationStart={() => console.log('Hero section animation started')}
            onAnimationComplete={() => console.log('Hero section animation completed')}
          >
            <div
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 cursor-pointer"
              role="button"
              aria-label="View product details"
              onClick={() => console.log('Product Details button clicked')}
            >
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Product Details</span>
            </div>
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-8`}
            >
              <product.icon className="w-10 h-10 text-white" />
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              onAnimationComplete={() => console.log('Features image animation completed')}
            >
              <img
                src={product.productImage}
                alt={`${product.title} product`}
                className="w-full h-96 object-cover rounded-2xl"
                onError={(e) => console.error(`Error loading product image for ${product.title}:`, e)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onAnimationComplete={() => console.log('Features list animation completed')}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Features</h2>
              <div className="grid grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
            onAnimationComplete={() => console.log('Benefits header animation completed')}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how {product.title} transforms your business operations and drives measurable results
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
                onAnimationComplete={() => console.log(`Benefit ${benefit.title} animation completed`)}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full">
                  <motion.div
                    className="mb-6 overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={benefit.image}
                      alt={`${benefit.title} benefit`}
                      className="w-full h-32 object-cover"
                      onError={(e) => console.error(`Error loading benefit image for ${benefit.title}:`, e)}
                    />
                  </motion.div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;