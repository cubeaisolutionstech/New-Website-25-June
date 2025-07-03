import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Rocket,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

const ExploreDetail = () => {
  const { exploreId } = useParams();

  const exploreData = {
    'aima': {
      title: 'AIMA',
      subtitle: 'Artificial Intelligence & Machine Learning',
      bgImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-purple-500 to-indigo-600',
      sections: [
        {
          id: 'industry-40',
          title: 'Industry 4.0 & 5.0 Solutions',
          description: 'Revolutionary smart manufacturing solutions that integrate AI, IoT, and advanced analytics.',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-purple-500 to-indigo-600'
        },
        {
          id: 'legacy-modernization',
          title: 'Legacy System Modernization',
          description: 'Transform outdated systems into modern, AI-powered platforms with seamless integration.',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-emerald-500 to-teal-600'
        }
      ]
    },
    'aida': {
      title: 'AIDA',
      subtitle: 'Artificial Intelligence & Data Analysis',
      bgImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-emerald-500 to-teal-600',
      sections: [
        {
          id: 'medical-analytics',
          title: 'Medical Data Analytics',
          description: 'Advanced healthcare analytics solutions that process complex medical data to improve patient outcomes.',
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-pink-500 to-rose-500'
        },
        {
          id: 'saas-platforms',
          title: 'SAAS Platforms',
          description: 'Scalable Software-as-a-Service platforms built with cutting-edge AI capabilities.',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-cyan-500 to-blue-600'
        }
      ]
    },
    'city': {
      title: 'CITY',
      subtitle: 'Cyber Tech Innovation',
      bgImage: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-pink-500 to-rose-500',
      sections: [
        {
          id: 'iot-services',
          title: 'IoT Services',
          description: 'Comprehensive Internet of Things solutions that connect devices, sensors, and systems.',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-orange-500 to-red-500'
        },
        {
          id: 'auto-sizing',
          title: 'Auto Sizing Solutions',
          description: 'Intelligent auto-scaling solutions that automatically adjust system resources based on demand.',
          image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-violet-500 to-purple-600'
        }
      ]
    },
    'cubebotics': {
      title: 'Cubebotics',
      subtitle: 'Embedded Systems & IoT',
      bgImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-orange-500 to-red-500',
      sections: [
        {
          id: 'embedded-iot',
          title: 'Embedded & IoT Solutions',
          description: 'Custom embedded systems and IoT solutions for industrial automation and smart devices.',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-purple-500 to-indigo-600'
        },
        {
          id: 'drone-tech',
          title: 'Drone Technology',
          description: 'Advanced drone technology solutions for surveillance, mapping, and industrial inspection.',
          image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-emerald-500 to-teal-600'
        }
      ]
    },
    'dce': {
      title: 'DCE',
      subtitle: 'Data & Cloud Engineering',
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-cyan-500 to-blue-600',
      sections: [
        {
          id: 'data-engineering',
          title: 'Data Engineering',
          description: 'Robust data engineering solutions that design, build, and maintain scalable data pipelines.',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-pink-500 to-rose-500'
        },
        {
          id: 'cloud-engineering',
          title: 'Cloud Engineering',
          description: 'Comprehensive cloud engineering services including migration and infrastructure design.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-orange-500 to-red-500'
        }
      ]
    },
    'vision-ai': {
      title: 'Vision AI',
      subtitle: 'AI Solutions',
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-violet-500 to-purple-600',
      sections: [
        {
          id: 'chatbot-solutions',
          title: 'Chatbot Solutions',
          description: 'Intelligent chatbot solutions powered by advanced natural language processing.',
          image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-cyan-500 to-blue-600'
        },
        {
          id: 'computer-vision',
          title: 'Computer Vision',
          description: 'Advanced computer vision applications for image recognition and analysis.',
          image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-violet-500 to-purple-600'
        }
      ]
    },
    'tech-solution': {
      title: 'Tech Solution',
      subtitle: 'Future Technology & Services',
      bgImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-indigo-500 to-purple-600',
      sections: [
        {
          id: 'web-development',
          title: 'Web Development',
          description: 'Modern web development solutions using cutting-edge technologies and frameworks.',
          image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-purple-500 to-indigo-600'
        },
        {
          id: 'app-development',
          title: 'App Development',
          description: 'Native and cross-platform mobile application development for iOS and Android.',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-emerald-500 to-teal-600'
        },
        {
          id: 'business-consulting',
          title: 'Business Consulting',
          description: 'Strategic business consulting services for digital transformation and growth.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
          color: 'from-pink-500 to-rose-500'
        }
      ]
    }
  };

  const explore = exploreData[exploreId as keyof typeof exploreData];

  if (!explore) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-300">The requested page could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Kinetic Typography */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={explore.bgImage} 
            alt={explore.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${explore.color} opacity-80`} />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Kinetic Typography Animation */}
            <motion.h1 
              className="text-8xl md:text-9xl font-bold leading-tight mb-8"
              style={{
                textShadow: '0 8px 32px rgba(0,0,0,0.6)',
              }}
            >
              {explore.title.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ 
                    opacity: 0, 
                    y: 100,
                    rotateX: -90,
                    scale: 0.5
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 15,
                    color: '#60A5FA',
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    background: 'linear-gradient(45deg, #ffffff, #e0f2fe, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Sliding Text Animation */}
            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <motion.p 
                className="text-2xl md:text-3xl font-light"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  delay: 1.8, 
                  duration: 1.2,
                  type: "spring",
                  stiffness: 50
                }}
                style={{ 
                  textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                  letterSpacing: '0.05em'
                }}
              >
                {explore.subtitle}
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="mt-12"
            >
              <div className="inline-flex items-center px-8 py-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                <Sparkles className="w-6 h-6 mr-3" />
                <span className="text-xl font-medium">Explore Our Solutions</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Sections Grid */}
      <section className="py-32 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover comprehensive solutions tailored to transform your business
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {explore.sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  rotateX: 10,
                  rotateY: index % 2 === 0 ? 5 : -5
                }}
                className="group transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden hover:bg-slate-700/80 transition-all duration-500 border border-purple-500/30 hover:border-purple-400/50 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-70`} />
                  </div>
                  
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">{section.description}</p>
                    
                    <Link
                      to={`/explore/${exploreId}/${section.id}`}
                      className={`inline-flex items-center w-full justify-center bg-gradient-to-r ${section.color} text-white py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}
                    >
                      Discover More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreDetail;