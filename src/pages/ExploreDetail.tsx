import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Define interfaces for type safety
interface Section {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

interface ExploreData {
  title: string;
  subtitle: string;
  bgImage: string;
  color: string;
  sections: Section[];
}

// Define valid exploreId keys
type ExploreId = 'aima' | 'aida' | 'city' | 'cubebotics' | 'dce' | 'vision-ai' | 'tech-solution';

const ExploreDetail = () => {
  const { exploreId } = useParams<{ exploreId: ExploreId }>();

  const exploreData: Record<ExploreId, ExploreData> = {
    aima: {
      title: 'AIMA',
      subtitle: 'Artificial Intelligence & Machine Learning Innovation',
      bgImage: '/image/eaima.jpg',
      color: 'from-blue-500 to-indigo-600',
      sections: [
        {
          id: 'industry-40',
          title: 'Industry 4.0 & 5.0 Innovation',
          description: 'Cutting-edge smart manufacturing powered by AI, IoT, and advanced analytics.',
          image: '/image/ein.jpg',
          color: 'from-blue-500 to-indigo-600',
        },
        {
          id: 'legacy-modernization',
          title: 'Legacy System Transformation',
          description: 'Modernize outdated systems with AI-driven platforms for seamless integration.',
          image: '/image/elac.jpg',
          color: 'from-blue-600 to-cyan-600',
        },
      ],
    },
    aida: {
      title: 'AIDA',
      subtitle: 'Advanced Data Analytics & AI',
      bgImage: '/image/eaida.png',
      color: 'from-blue-400 to-blue-600',
      sections: [
        {
          id: 'medical-analytics',
          title: 'Healthcare Data Insights',
          description: 'AI-powered analytics to enhance patient outcomes through complex medical data processing.',
          image: '/image/ehealth.jpg',
          color: 'from-blue-500 to-indigo-600',
        },
        {
          id: 'saas-platforms',
          title: 'Scalable SaaS Solutions',
          description: 'Next-generation Software-as-a-Service platforms with embedded AI capabilities.',
          image: '/image/esaa.avif',
          color: 'from-cyan-500 to-blue-600',
        },
      ],
    },
    'vision-ai': {
      title: 'VisionAI',
      subtitle: 'Intelligent Vision Systems',
      bgImage: '/image/evision.jpeg',
      color: 'from-indigo-500 to-blue-600',
      sections: [
        {
          id: 'chatbot-solutions',
          title: 'AI-Powered Chatbots',
          description: 'Smart chatbot solutions driven by advanced natural language processing.',
          image: '/image/echat.avif',
          color: 'from-blue-500 to-cyan-600',
        },
      ],
    },
    city: {
      title: 'CyTI',
      subtitle: 'Cyber Technology Innovation',
      bgImage: '/image/ecyti.jpg',
      color: 'from-blue-500 to-cyan-600',
      sections: [
        {
          id: 'iot-services',
          title: 'IoT Connectivity Solutions',
          description: 'Integrated Internet of Things solutions for connected devices and systems.',
          image: '/image/eiot.jpg',
          color: 'from-blue-400 to-indigo-600',
        },
        {
          id: 'auto-sizing',
          title: 'Large Language Model Solutions',
          description: 'Advanced LLMs for intelligent applications and natural language understanding.',
          image: '/image/ellm.jpg',
          color: 'from-indigo-500 to-blue-600',
        },
      ],
    },
    cubebotics: {
      title: 'Cubebotics',
      subtitle: 'Embedded Systems & IoT Innovation',
      bgImage: '/image/ecube.jpg',
      color: 'from-blue-600 to-indigo-700',
      sections: [
        {
          id: 'embedded-iot',
          title: 'Embedded IoT Systems',
          description: 'Custom solutions for industrial automation and smart device connectivity.',
          image: '/image/eembd.jpg',
          color: 'from-blue-500 to-indigo-600',
        },
        {
          id: 'drone-tech',
          title: 'Drone Technology Innovations',
          description: 'Advanced drones for surveillance, mapping, and industrial applications.',
          image: '/image/edrone.jpg',
          color: 'from-cyan-500 to-blue-600',
        },
      ],
    },
    dce: {
      title: 'DCE',
      subtitle: 'Data & Cloud Infrastructure',
      bgImage: '/image/edec.jpg',
      color: 'from-cyan-400 to-blue-600',
      sections: [
        {
          id: 'data-engineering',
          title: 'Data Pipeline Engineering',
          description: 'Scalable data pipelines designed for efficiency and reliability.',
          image: '/image/de.jpg',
          color: 'from-blue-500 to-indigo-600',
        },
        {
          id: 'cloud-engineering',
          title: 'Cloud Infrastructure Solutions',
          description: 'End-to-end cloud services for migration and infrastructure optimization.',
          image: '/image/ce.png',
          color: 'from-blue-400 to-cyan-600',
        },
      ],
    },
    'tech-solution': {
      title: 'Tech Solution',
      subtitle: 'Future-Ready Technology Services',
      bgImage: '/image/etech.jpeg',
      color: 'from-blue-500 to-indigo-600',
      sections: [
        {
          id: 'web-development',
          title: 'Modern Web Development',
          description: 'Innovative web solutions built with cutting-edge technologies.',
          image: '/image/eweb.jpg',
          color: 'from-blue-500 to-indigo-600',
        },
        {
          id: 'app-development',
          title: 'Mobile App Development',
          description: 'High-performance native and cross-platform apps for iOS and Android.',
          image: '/image/eapp.png',
          color: 'from-cyan-500 to-blue-600',
        },
        {
          id: 'business-consulting',
          title: 'Digital Transformation Consulting',
          description: 'Strategic consulting to drive business growth through technology.',
          image: '/image/ebuss.webp',
          color: 'from-blue-400 to-indigo-600',
        },
      ],
    },
  };

  const explore = exploreId ? exploreData[exploreId] : null;

  if (!explore || !exploreId) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <span className="text-4xl font-bold mb-4 text-slate-800">Page Not Found</span>
          <p className="text-slate-600 mb-8">The requested page could not be found.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Go Back Home
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <Helmet>
        <title>{`CubeAI Solutions - ${explore.title}`}</title>
        <meta
          name="description"
          content={`Explore ${explore.title} by CubeAI, offering innovative solutions including ${explore.sections
            .map((section) => section.title)
            .join(', ')}.`}
        />
        <meta
          name="keywords"
          content={`CubeAI Solutions, ${explore.title}, AI solutions, ${explore.sections
            .map((section) => section.title)
            .join(', ')}`}
        />
      </Helmet>

      {/* Background Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-400/20 via-cyan-300/10 to-transparent transform rotate-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-tl from-blue-600/30 via-blue-400/20 to-transparent transform -rotate-12 translate-x-1/6"></div>
        <div className="absolute top-20 right-32">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-400/60 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="absolute top-80 left-20">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-blue-300/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg transform rotate-45"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-white/60 to-transparent transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-gradient-to-b from-cyan-300/60 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-20 bg-gradient-to-b from-blue-400/60 to-transparent transform -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        {/* Header Section */}
        <section className="px-8 py-16 relative">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.3 }}></div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/80 via-blue-50/80 to-cyan-50/80"></div>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Content */}
              <div className="space-y-8">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium">
                  <Building2 className="w-4 h-4 mr-2" />
                  Thynk Unlimited
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-blue-600">{explore.title}</span>
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">
                    {explore.title} {explore.subtitle}
                  </h2>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-start space-x-4">
                  <div className="w-1 h-16 bg-slate-800 mt-1"></div>
                  <div>
                    <p className="text-lg text-slate-600">{explore.subtitle}</p>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="space-y-2"></motion.div>
              </div>
              {/* Right Visual Element */}
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative flex justify-center items-center">
                <div className="relative w-96 h-96">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-300/40"></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center overflow-hidden">
                    <img src={explore.bgImage} alt={`${explore.title} Background Image`} className="w-full h-full object-cover rounded-full" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                  <div className="absolute top-1/3 -left-8 w-12 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                  <div className="absolute -top-4 right-1/4 w-8 h-8 bg-blue-400/60 rounded-full"></div>
                  <div className="absolute -bottom-4 left-1/4 w-6 h-6 bg-cyan-400/60 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="px-8 py-20 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Discover {explore.title} Innovations</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">Tailored solutions to elevate your business with cutting-edge technology</p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8">
              {explore.sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 hover:shadow-2xl transition-all duration-500 hover:border-blue-200">
                    <div className="relative h-64 overflow-hidden bg-gradient-to-r from-blue-50 to-cyan-50">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8">
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured Innovation
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{section.title}</h3>
                      <p className="text-slate-600 mb-8 leading-relaxed">{section.description}</p>
                      <Link
                        to={`/explore/${exploreId}/${section.id}`}
                        className="inline-flex items-center w-full justify-center py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:from-blue-700 group-hover:to-cyan-700"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="px-8 py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" className="text-white" />
              </svg>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Elevate Your Business with {explore.title} Innovations</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Partner with our experts to unlock the full potential of {explore.title} for your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-lg">
                  <Building2 className="w-5 h-5 mr-2" />
                  Power Up with CubeAI
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreDetail;
