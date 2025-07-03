import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Phone,
  User,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceData = {
    'aima': {
      title: 'AIMA - Artificial Intelligence & Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-indigo-600',
      sections: [
        {
          title: 'Industry 4.0 & 5.0',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Revolutionary smart manufacturing solutions that integrate AI, IoT, and advanced analytics to create fully autonomous production systems. Our Industry 4.0 & 5.0 solutions enable predictive maintenance, quality control, and real-time optimization of manufacturing processes with unprecedented efficiency and precision.'
        },
        {
          title: 'Legacy Modernization',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Transform your outdated systems into modern, AI-powered platforms with seamless integration. We specialize in migrating legacy infrastructure to cloud-native architectures while preserving critical business logic, ensuring data integrity, and providing comprehensive training for smooth transitions.'
        }
      ]
    },
    'aida': {
      title: 'AIDA - Artificial Intelligence & Data Analysis',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-500 to-teal-600',
      sections: [
        {
          title: 'Medical Data Analytics',
          image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Advanced healthcare analytics solutions that process complex medical data to improve patient outcomes, optimize treatment protocols, and enable precision medicine. Our AI models analyze clinical data, medical imaging, and patient records to provide actionable insights for healthcare professionals and researchers.'
        },
        {
          title: 'SAAS',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Scalable Software-as-a-Service platforms built with cutting-edge AI capabilities and modern cloud architecture. We develop intelligent applications that provide automated workflows, predictive analytics, and seamless user experiences across multiple industries and business verticals.'
        }
      ]
    },
    'city': {
      title: 'CITY - Cyber Tech Innovation',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-pink-500',
      sections: [
        {
          title: 'IoT Services',
          image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Comprehensive Internet of Things solutions that connect devices, sensors, and systems to create intelligent ecosystems. Our IoT services include device management, data collection, real-time monitoring, and predictive analytics for smart cities, industrial automation, and connected infrastructure.'
        },
        {
          title: 'Auto Sizing',
          image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Intelligent auto-scaling solutions that automatically adjust system resources based on demand patterns and usage analytics. Our AI-driven auto-sizing technology optimizes performance, reduces operational costs, and ensures optimal resource utilization across cloud and on-premise environments.'
        }
      ]
    },
    'cubeboyics': {
      title: 'Cubeboyics - Embedded Systems & IoT',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-500',
      sections: [
        {
          title: 'Embedded & IoT Solutions',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Custom embedded systems and IoT solutions for industrial automation, smart devices, and connected products. We design and develop hardware-software integrated solutions that enable intelligent edge computing, real-time data processing, and seamless connectivity across diverse applications.'
        },
        {
          title: 'Drone Technology',
          image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Advanced drone technology solutions for surveillance, mapping, delivery, and industrial inspection applications. Our AI-powered drones feature autonomous navigation, computer vision capabilities, and real-time data transmission for various commercial, industrial, and research applications.'
        }
      ]
    },
    'dce': {
      title: 'DCE - Data & Cloud Engineering',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-cyan-500 to-blue-600',
      sections: [
        {
          title: 'Data Engineering',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Robust data engineering solutions that design, build, and maintain scalable data pipelines and architectures. We create comprehensive data ecosystems that enable efficient data collection, processing, storage, and analysis for business intelligence, machine learning, and advanced analytics applications.'
        },
        {
          title: 'Cloud Engineering',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Comprehensive cloud engineering services including cloud migration, infrastructure design, and DevOps implementation. We help organizations leverage cloud technologies for enhanced scalability, reliability, and cost optimization across AWS, Azure, Google Cloud, and hybrid cloud environments.'
        }
      ]
    },
    'vision-ai': {
      title: 'Vision AI - AI Solutions',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-violet-500 to-purple-600',
      sections: [
        {
          title: 'Chatbot Solutions',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Intelligent chatbot solutions powered by advanced natural language processing and machine learning algorithms. Our chatbots provide 24/7 customer support, automate routine tasks, and deliver personalized user experiences across multiple channels, platforms, and communication interfaces.'
        }
      ]
    },
    'tech-solution': {
      title: 'Tech Solution - Future Technology & Services',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-500 to-purple-600',
      sections: [
        {
          title: 'Web Development',
          image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Modern web development solutions using cutting-edge technologies and frameworks. We create responsive, scalable, and secure web applications that deliver exceptional user experiences, drive business growth, and provide seamless integration with existing systems and third-party services.'
        },
        {
          title: 'App Development',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Native and cross-platform mobile application development for iOS and Android platforms. Our apps feature intuitive interfaces, robust functionality, and seamless integration with backend systems, cloud services, and third-party APIs for comprehensive mobile solutions.'
        },
        {
          title: 'Business Consulting',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Strategic business consulting services that help organizations leverage technology for competitive advantage and sustainable growth. We provide expert guidance on digital transformation, process optimization, technology adoption strategies, and organizational change management.'
        },
        {
          title: 'Digital Marketing',
          image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
          content: 'Comprehensive digital marketing solutions including SEO, social media marketing, content marketing, and paid advertising campaigns. We help businesses build strong online presence, drive customer engagement, and achieve measurable results through data-driven marketing strategies and analytics.'
        }
      ]
    }
  };

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center text-slate-800">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-slate-600">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-blue-200/50 mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Service Details</span>
            </div>
            <div className="mb-8 overflow-hidden rounded-3xl mx-auto w-32 h-32 shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-32 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`mb-32 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-16`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: 10,
                    rotateY: index % 2 === 0 ? 5 : -5
                  }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`} />
                </motion.div>
              </div>
              <div className="lg:w-1/2">
                <motion.h2
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-slate-800 mb-8"
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-slate-600 leading-relaxed"
                >
                  {section.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
