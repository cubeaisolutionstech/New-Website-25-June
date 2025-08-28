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
  X,
  LucideIcon,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Define interface for benefit objects
interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

// Define interface for product data
interface Product {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  icon: LucideIcon;
  color: string;
  bgImage: string;
  productImage: string;
  keyFeatures: string[];
  keyBenefits: string[];
  benefits: Benefit[];
  industries?: string[]; // Optional industries property
}

// Define interface for productData object
interface ProductData {
  [key: string]: Product;
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const productData: ProductData = {
    'andromeda-crm': {
      title: 'Andromeda CRM',
      subtitle: 'AI-Powered Customer Relationship Management',
      tagline: 'Transforming Customer Engagement with Intelligent Automation',
      description:
        "In today's hyper-competitive market, managing customer relationships is no longer just about storing data — it's about understanding customers deeply, predicting their needs, and engaging with precision. **Andromeda CRM** by **Cube AI Solutions** is an **AI-powered CRM platform** designed to empower businesses with **real-time intelligence**, **automate workflows**, and deliver **personalized customer experiences** at scale.",
      extendedDescription:
        "Unlike traditional CRM systems, **Andromeda CRM** uses **artificial intelligence** to go beyond tracking interactions — it learns from every customer touchpoint, analyzes behavioral patterns, and optimizes engagement strategies automatically.",
      icon: Users,
      color: 'from-blue-600 to-indigo-700',
      bgImage: '/image/proando.webp',
      productImage: '/image/kcrm.jpg',
      keyFeatures: [
        '**AI-Powered Predictive Analytics** – Forecast sales trends, customer churn, and buying patterns.',
        '**Intelligent Lead Scoring** – Automatically prioritize leads with the highest conversion probability.',
        '**Personalized Customer Journeys** – Use AI to tailor campaigns and recommendations.',
        '**Workflow Automation** – Automate repetitive tasks like follow-ups, reminders, and report generation.',
        '**Omni-Channel Integration** – Manage customer interactions across email, social media, chat, and phone from a single dashboard.',
        '**Real-Time Data Insights** – Get instant reports and performance metrics powered by AI.',
        '**Seamless Scalability** – Designed to grow with your business without disrupting existing processes.',
      ],
      keyBenefits: [
        '**Increase Sales Efficiency** – Focus your team\'s efforts where they matter most using **AI-driven lead intelligence**.',
        '**Enhance Customer Retention** – Proactively address customer needs with **predictive insights**.',
        '**Save Time with Automation** – Let AI handle repetitive administrative tasks so teams can focus on high-value activities.',
        '**Improve Decision-Making** – Get **real-time, data-backed recommendations** for faster, more accurate strategies.',
        '**Boost Marketing ROI** – Deliver the right message, to the right person, at the right time — automatically.',
        '**Enable Data-Driven Growth** – Use **AI insights** to scale intelligently and sustainably.',
      ],
      benefits: [
        {
          icon: TrendingUp,
          title: 'Increase Sales by 40%',
          description: 'AI-powered lead scoring and predictive analytics help identify high-value prospects and optimize sales strategies.',
          image: '/image/kcrm1.jpg',
        },
        {
          icon: Target,
          title: 'Improve Customer Retention',
          description: 'Advanced customer behavior analysis and automated engagement workflows reduce churn by 35%.',
          image: '/image/kcrm2.jpg',
        },
        {
          icon: Zap,
          title: 'Automate 80% of Tasks',
          description: 'Intelligent automation handles routine tasks, freeing your team to focus on strategic customer relationships.',
          image: '/image/kcrm3.jpg',
        },
      ],
    },
    'orion-erp': {
      title: 'Orion ERP',
      subtitle: 'Next-Generation Enterprise Resource Planning for High-Performance Businesses',
      tagline: 'Empowering Enterprises with Intelligent ERP Solutions',
      description:
        "In today's competitive market, businesses need more than just basic ERP systems — they need intelligent, agile, and scalable **enterprise resource planning software**. **Orion ERP** by **Cube AI Solutions** is a **cutting-edge ERP platform** designed to centralize your operations, **boost business productivity using AI automation tools**, and provide **real-time insights** for faster decision-making.",
      extendedDescription:
        "With **Orion ERP**, your finance, HR, supply chain, inventory, sales, and customer management come together in one **unified platform**, ensuring efficiency, accuracy, and operational excellence across the organization.",
      icon: Building2,
      color: 'from-emerald-600 to-teal-700',
      bgImage: '/image/orin.avif',
      productImage: '/image/erp1.png',
      keyFeatures: [
        '**Unified Business Management** – All departments connected in a single system.',
        '**Real-Time Analytics & Reporting** – Get instant visibility into KPIs and trends.',
        '**Customizable Modules** – Tailored to your industry and workflows.',
        '**Cloud & On-Premises Deployment** – Choose the deployment model that suits your strategy.',
        '**Automated Workflows** – Reduce manual errors and save time.',
        '**Global Operations Ready** – Multi-language and multi-currency support.',
        '**Advanced Security** – Robust compliance and data protection features.',
      ],
      keyBenefits: [
        '**Boost Efficiency** – Automate repetitive tasks to free up valuable resources.',
        '**Improve Decision-Making** – **AI-powered analytics** for strategic business planning.',
        '**Enhance Collaboration** – Seamless inter-department communication.',
        '**Reduce Costs** – Optimize resources and eliminate inefficiencies.',
        '**Adapt Quickly** – Stay agile in fast-changing markets.',
        '**Scale Without Limits** – Modular design to support business growth.',
      ],
      benefits: [
        {
          icon: Globe,
          title: 'Unified Business Operations',
          description: 'Seamlessly integrate all business processes from finance to supply chain in one comprehensive platform.',
          image: '/image/erp2.jpg',
        },
        {
          icon: TrendingUp,
          title: 'Reduce Operational Costs by 30%',
          description: 'Streamlined processes and automated workflows significantly reduce manual overhead and operational expenses.',
          image: '/image/erp3.png',
        },
        {
          icon: Award,
          title: 'Real-time Business Intelligence',
          description: 'Advanced analytics and reporting provide instant insights for data-driven decision making.',
          image: '/image/erp4.webp',
        },
      ],
    },
    'nebula-cdm': {
      title: 'Nebula CDM',
      subtitle: 'Centralized Data Management for the Intelligent Enterprise',
      tagline: 'Streamlining Enterprise Data with AI-Powered Intelligence',
      description:
        "In today's data-driven world, enterprises are producing, storing, and analyzing massive volumes of data across multiple platforms and locations. Without a **centralized, intelligent data management system**, this data can quickly become fragmented, insecure, and underutilized. **Nebula CDM** by **Cube AI Solutions** is a **next-generation Centralized Data Management platform** designed to streamline, secure, and optimize enterprise data.",
      extendedDescription:
        "Powered by **AI automation tools** and **advanced analytics**, **Nebula CDM** ensures seamless access, high availability, and complete data governance — empowering businesses to unlock **maximum business productivity using AI**.",
      icon: Database,
      color: 'from-red-600 to-rose-700',
      bgImage: '/image/cdm.webp',
      productImage: '/image/cdm1.jpg',
      keyFeatures: [
        '**Centralized Data Repository** – Consolidate structured and unstructured data.',
        '**Real-Time Data Synchronization** – Keep enterprise data up-to-date across all systems.',
        '**AI-Powered Data Classification** – Automatically categorize and tag data for faster retrieval.',
        '**Advanced Search & Retrieval** – Find the right data instantly with intelligent indexing.',
        '**Robust Data Security** – Multi-layer encryption, access controls, and compliance monitoring.',
        '**Cloud & On-Premises Support** – Flexible deployment for hybrid enterprise environments.',
        '**Disaster Recovery & Backup** – Built-in redundancy for uninterrupted operations.',
      ],
      keyBenefits: [
        '**Boost Operational Efficiency** – Reduce time wasted on data silos and manual retrieval.',
        '**Enhance Decision-Making** – Gain faster insights from clean, centralized data.',
        '**Ensure Compliance & Security** – Meet industry regulations with minimal effort.',
        '**Lower IT Costs** – Optimize infrastructure and reduce duplication of storage.',
        '**Enable Scalable Growth** – Support increasing data needs without performance loss.',
        '**Improve Data Accessibility** – Enable secure, role-based access from anywhere.',
      ],
      industries: [
        '**Banking & Financial Services** – Securely manage sensitive transactional data.',
        '**Healthcare** – Store and retrieve medical records with full compliance.',
        '**Manufacturing** – Centralize production and supply chain data.',
        '**Retail & E-Commerce** – Manage product, customer, and sales data in one place.',
      ],
      benefits: [
        {
          icon: Shield,
          title: 'Enterprise-Grade Security',
          description: 'Advanced encryption and compliance features ensure your customer data is protected and meets all regulatory requirements.',
          image: '/image/cdm2.webp',
        },
        {
          icon: Target,
          title: 'Unified Customer Profiles',
          description: 'Create comprehensive 360-degree customer views by consolidating data from multiple touchpoints and systems.',
          image: '/image/cdm3.webp',
        },
        {
          icon: Zap,
          title: 'AI-Powered Insights',
          description: 'Machine learning algorithms automatically identify patterns and generate actionable customer intelligence.',
          image: '/image/cdm4.png',
        },
      ],
    },
    'cosmos-orchestration': {
      title: 'Cosmos Orchestration',
      subtitle: 'Intelligent Workflow & Process Automation Platform',
      tagline: 'Transforming Enterprise Operations with Intelligent Orchestration',
      description:
        "In a competitive business environment, fragmented processes, disconnected systems, and manual workflows slow down decision-making and hinder growth. **Cosmos Orchestration** by **Cube AI Solutions** is a **powerful enterprise-grade orchestration platform** that enables organizations to integrate, automate, and optimize complex workflows with precision and scalability.",
      extendedDescription:
        "Built on **advanced AI automation tools** and **robust integration capabilities**, **Cosmos Orchestration** helps businesses connect disparate systems, eliminate process silos, and enable **real-time decision-making**. From financial operations to supply chain management, customer experience to IT workflows, **Cosmos Orchestration** empowers enterprises to achieve operational agility and higher productivity.",
      icon: Workflow,
      color: 'from-orange-600 to-amber-700',
      bgImage: '/image/cos.jpg',
      productImage: '/image/Cos1.webp',
      keyFeatures: [
        '**Centralized Workflow Orchestration** – Manage and coordinate all enterprise processes from one dashboard.',
        '**Seamless System Integration** – Connect ERP, CRM, data analytics, and cloud platforms effortlessly.',
        '**AI-Driven Automation Engine** – Automate repetitive and decision-based workflows intelligently.',
        '**Real-Time Monitoring & Alerts** – Gain full visibility into process status with instant notifications.',
        '**Customizable Process Blueprints** – Design workflows tailored to your business needs.',
        '**Scalable Architecture** – Support growing workloads without compromising performance.',
        '**Secure Data Handling** – End-to-end encryption and compliance-ready operations.',
      ],
      keyBenefits: [
        '**Boost Productivity** – Automate repetitive tasks and focus on high-value activities.',
        '**Reduce Operational Costs** – Minimize inefficiencies and optimize resource utilization.',
        '**Enhance Decision-Making** – Leverage **real-time insights** for faster, smarter choices.',
        '**Accelerate Time-to-Market** – Shorten cycle times and speed up project delivery.',
        '**Strengthen Compliance** – Maintain regulatory adherence across processes.',
        '**Improve Customer Experience** – Deliver consistent and timely services through streamlined operations.',
      ],
      benefits: [
        {
          icon: Zap,
          title: 'Accelerate Process Efficiency',
          description: 'Automated workflows reduce manual processing time by up to 75% while eliminating human errors.',
          image: '/image/cos2.jpg',
        },
        {
          icon: Globe,
          title: 'Seamless System Integration',
          description: 'Connect disparate systems and applications with intelligent orchestration and data synchronization.',
          image: '/image/cod3.avif',
        },
        {
          icon: TrendingUp,
          title: 'Scalable Architecture',
          description: 'Cloud-native design ensures your workflows can scale automatically based on demand and business growth.',
          image: '/image/cos4.webp',
        },
      ],
    },
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

  const formatText = (text: string) => {
    return text.split('**').map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part));
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
     <Helmet>
  <title>CubeAI Solutions - Product Details</title>
  <meta
    name="description"
    content="Discover CubeAI's products featuring AI-powered solutions to transform business operations with automation, predictive analytics, and innovation."
  />
  <meta
    name="keywords"
    content="CubeAI Solutions, AI solutions, business automation, predictive analytics, digital transformation, enterprise software"
  />
</Helmet>


      {/* Hero Section with the only h1 tag */}
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
            <p className="text-2xl text-blue-300 mb-4 font-medium">{product.subtitle}</p>
            <p className="text-xl text-yellow-300 mb-8 font-semibold">{product.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <img src={product.productImage} alt={product.title} className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Overview</h2>
              <div className="text-lg text-gray-700 leading-relaxed mb-6">{formatText(product.description)}</div>
              {product.extendedDescription && (
                <div className="text-lg text-gray-700 leading-relaxed">{formatText(product.extendedDescription)}</div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful capabilities that make {product.title} the industry leader
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8">
            {product.keyFeatures.map((feature: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-gray-700 leading-relaxed">{formatText(feature)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Business Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your operations with measurable business outcomes</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {product.keyBenefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} mr-4 mt-2 flex-shrink-0`}></div>
                  <div className="text-gray-700 leading-relaxed">{formatText(benefit)}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Benefits Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {product.benefits.map((benefit: Benefit, index: number) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 h-full shadow-lg">
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

      {/* Industries Section (for Nebula CDM) */}
      {product.industries && (
        <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Industries That Rely on {product.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Trusted by leading organizations across multiple sectors</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {product.industries.map((industry: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color} mr-4 mt-2 flex-shrink-0`}></div>
                    <div className="text-gray-700 leading-relaxed">{formatText(industry)}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

     

      {/* Contact Form Modal */}
      {showForm && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
          >
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
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