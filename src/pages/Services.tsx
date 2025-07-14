import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
  description: string;
  features: string[];
  bgImage: string;
  gradient: string;
}

const Services = () => {
  useEffect(() => {
    console.log('Services component mounted');
    try {
      console.log('Lucide icons available:', { ArrowRight, CheckCircle, Sparkles });
      console.log('Framer Motion available:', motion);
      console.log('React Router available:', { Link });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in Services component dependencies:', error);
    }
  }, []);

  const services: Service[] = [
    {
      id: 'aima',
      title: 'AIMA',
      subtitle: 'Artificial Intelligence & Machine Learning & Agent',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-indigo-700',
      description: 'Advanced AI and ML solutions for Industry 4.0 & 5.0, legacy modernization, and intelligent automation.',
      features: ['Industry 4.0 & 5.0', 'Legacy Modernization', 'Predictive Analytics', 'Smart Automation'],
      bgImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'bg-gradient-to-br from-blue-600/10 to-indigo-700/10',
    },
    {
      id: 'aida',
      title: 'AIDA',
      subtitle: 'Artificial Intelligence & Data Analysis',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-600 to-teal-700',
      description: 'Comprehensive data analytics solutions including medical data analytics and SAAS platforms.',
      features: ['Medical Data Analytics', 'SAAS Platforms', 'Business Intelligence', 'Data Visualization'],
      bgImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'bg-gradient-to-br from-emerald-600/10 to-teal-700/10',
    },
    {
      id: 'city',
      title: 'CITY',
      subtitle: 'Cyber Tech Innovation',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-600 to-rose-700',
      description: 'Cutting-edge cybersecurity solutions with IoT services and auto-sizing capabilities.',
      features: ['IoT Services', 'Auto Sizing', 'Threat Detection', 'Security Monitoring'],
      bgImage: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'bg-gradient-to-br from-red-600/10 to-rose-700/10',
    },
    {
      id: 'cubebotics',
      title: 'Cubebotics',
      subtitle: 'Embedded Systems & IoT',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-600 to-amber-700',
      description: 'Innovative embedded systems, IoT solutions, and advanced drone technology.',
      features: ['Embedded Solutions', 'Drone Technology', 'IoT Integration', 'Edge Computing'],
      bgImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'bg-gradient-to-br from-orange-600/10 to-amber-700/10',
    },
    {
      id: 'dce',
      title: 'DCE',
      subtitle: 'Data & Cloud Engineering',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-600 to-blue-700',
      description: 'Scalable data engineering and cloud solutions for modern enterprises.',
      features: ['Data Engineering', 'Cloud Engineering', 'DevOps', 'Infrastructure Design'],
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'bg-gradient-to-br from-cyan-600/10 to-blue-700/10',
    },
    {
      id: 'vision-ai',
      title: 'Vision AI',
      subtitle: 'AI Solutions',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-violet-600 to-purple-700',
      description: 'Intelligent chatbot solutions and computer vision applications.',
      features: ['Chatbot Solutions', 'Computer Vision', 'NLP', 'Image Recognition'],
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'bg-gradient-to-br from-violet-600/10 to-purple-700/10',
    },
    {
      id: 'tech-solution',
      title: 'Tech Solution',
      subtitle: 'Future Technology & Services',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-600 to-purple-700',
      description: 'Comprehensive technology solutions including web development, app development, and business consulting.',
      features: ['Web Development', 'App Development', 'Business Consulting', 'Digital Marketing'],
      bgImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'bg-gradient-to-br from-indigo-600/10 to-purple-700/10',
    },
  ];

  return (
    <div className="relative min-h-screen pt-20 bg-gray-50">
      <Helmet>
        <title>CubeAI Solutions - Our Services</title>
        <meta
          name="description"
          content="Explore CubeAI Solutions' comprehensive AI-powered services, including AIMA, AIDA, CITY, Cubebotics, DCE, Vision AI, and Tech Solution, designed to transform businesses across industries."
        />
        <meta
          name="keywords"
          content="CubeAI Solutions, AI services, machine learning, data analytics, cybersecurity, IoT, cloud engineering, web development, app development, business consulting"
        />
        <link rel="canonical" href="https://www.cubeaisolutions.com/services" />
      </Helmet>

      {/* Hero Section with Developer Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Technology and innovation background"
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
              aria-label="View our services"
              onClick={() => console.log('Our Services button clicked')}
            >
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI-powered services designed to transform your business and drive innovation across all industries with cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: 5 }}
                className="group transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
                onAnimationComplete={() => console.log(`${service.title} card animation completed`)}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.bgImage}
                      alt={`${service.title} background`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => console.error(`Error loading background image for ${service.title}:`, e)}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={service.image}
                          alt={`${service.title} icon`}
                          className="w-full h-full object-cover"
                          onError={(e) => console.error(`Error loading icon image for ${service.title}:`, e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-blue-600 mb-6 font-medium">{service.subtitle}</p>
                    <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className={`inline-flex items-center w-full justify-center bg-gradient-to-r ${service.color} text-white py-4 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105`}
                      aria-label={`Learn more about ${service.title}`}
                      onClick={() => console.log(`Navigating to /services/${service.id}`)}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
            onAnimationComplete={() => console.log('Process section animation completed')}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we deliver exceptional AI solutions with proven methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business needs and identify opportunities for AI integration with comprehensive assessments.',
                color: 'from-blue-600 to-indigo-700',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive AI strategy tailored to your specific requirements and business objectives.',
                color: 'from-emerald-600 to-teal-700',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our expert team builds and implements cutting-edge AI solutions using the latest technologies.',
                color: 'from-red-600 to-rose-700',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously monitor and optimize performance for maximum impact and sustainable results.',
                color: 'from-orange-600 to-amber-700',
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05, rotateX: 5, rotateY: 5 }}
                className="text-center group transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
                onAnimationComplete={() => console.log(`${process.title} process card animation completed`)}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;