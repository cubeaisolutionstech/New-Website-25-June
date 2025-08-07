import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  TrendingUp,
  Rocket,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Define types for our data structure
type SectionContent = {
  title: string;
  icon: React.ComponentType<React.SVGAttributes<SVGElement>>;
  content: string;
  features: string[];
};

type Section = {
  title: string;
  bgImage: string;
  whatWeDo: SectionContent;
  solutions: SectionContent;
  trending: SectionContent;
  futurePlans: SectionContent;
};

type SectionData = {
  [exploreId: string]: {
    [sectionId: string]: Section;
  };
};

const SectionDetail: React.FC = () => {
  const { exploreId, sectionId } = useParams<{ exploreId?: string; sectionId?: string }>();
  const navigate = useNavigate();

  const sectionData: SectionData = {
    aima: {
      'industry-40': {
        title: 'Industry 4.0 & 5.0 Solutions',
        bgImage: '/image/sindu.jpg',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, we lead the transformation of industrial operations through an advanced AIoT platform integrated with Generative AI. Our solutions deliver intelligent automation, predictive maintenance, and real-time optimization by enabling accurate tracking of power, water, air, and fuel consumption using smart meters deployed across facilities. With data collected instantly and stored securely in the cloud or on-premises, users gain live insights via mobile dashboards, voice/chatbot interaction, and autonomous AI agents — driving data-driven decisions in real time.`,
          features: [
            'AIoT-Driven Industrial Monitoring',
            'Smart Metering for Utilities',
            'AI Chatbot Interaction',
            'Real-time Operational Visibility'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our integrated platform combines AI, IoT, and GenAI to offer end-to-end industrial intelligence. Users can generate automated reports, receive performance optimization suggestions, and download documentation in multiple formats like PDF and Excel. Real-time dashboards and anomaly detection systems ensure reduced downtime and increased efficiency. This scalable solution is ideal for smart factories, facilities, campuses, and enterprises aiming to embrace Industry 4.0's connectivity and Industry 5.0's human-centric automation.`,
          features: [
            'Automated Reporting & Insights (PDF, Excel)',
            'AI-Powered System Optimization',
            'Real-Time Dashboards & Analytics',
            'Scalable Deployment Across Sites'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Digital twins, edge computing, and collaborative robots are revolutionizing modern industries. Our team leverages these innovations to build adaptive, intelligent environments that are sustainable, efficient, and future-ready.',
          features: ['Digital Twins', 'Edge Computing', 'Collaborative Robots', 'Sustainable Manufacturing']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are advancing toward Industry 6.0 by developing self-healing, autonomous systems enhanced by quantum optimization and deep sustainability intelligence — creating next-generation factories capable of evolving in real time.',
          features: ['Autonomous Systems', 'Quantum Optimization', 'Self-healing Technology', 'Industry 6.0 Framework']
        }
      },
      'legacy-modernization': {
        title: 'Legacy System Modernization',
        bgImage: '/image/seleg.jpg',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We transform outdated legacy systems into modern, AI-powered platforms while preserving critical business logic and ensuring seamless data migration. Our approach minimizes disruption and maximizes the value of existing investments.',
          features: ['System Assessment', 'Data Migration', 'API Integration', 'Cloud Transformation']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our modernization solutions include cloud-native architectures, microservices implementation, API-first design, and intelligent data transformation tools that ensure your systems are future-ready and scalable.',
          features: ['Cloud-Native Architecture', 'Microservices', 'API-First Design', 'Data Transformation']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Containerization, serverless computing, and low-code platforms are revolutionizing legacy modernization. We utilize these technologies to accelerate transformation while reducing costs and complexity.',
          features: ['Containerization', 'Serverless Computing', 'Low-Code Platforms', 'DevOps Integration']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing AI-driven automated modernization tools that can analyze legacy code, suggest optimal migration paths, and automatically generate modern equivalents with minimal human intervention.',
          features: ['AI-Driven Migration', 'Automated Code Analysis', 'Smart Refactoring', 'Zero-Downtime Transformation']
        }
      }
    },
    aida: {
      'medical-analytics': {
        title: 'Medical Data Analytics',
        bgImage: '/image/semed.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We develop advanced healthcare analytics solutions that process complex medical data to improve patient outcomes, optimize treatment protocols, and enable precision medicine through AI-powered insights and predictive modeling.',
          features: ['Patient Analytics', 'Treatment Optimization', 'Precision Medicine', 'Clinical Decision Support']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our medical analytics platform includes real-time patient monitoring, drug interaction analysis, epidemic prediction models, and personalized treatment recommendations that help healthcare providers deliver better care.',
          features: ['Real-time Monitoring', 'Drug Analysis', 'Epidemic Prediction', 'Personalized Treatment']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Wearable health devices, telemedicine, and AI diagnostics are transforming healthcare delivery. We integrate these technologies to create comprehensive health monitoring and analysis ecosystems.',
          features: ['Wearable Integration', 'Telemedicine', 'AI Diagnostics', 'Remote Monitoring']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing quantum-enhanced drug discovery platforms, neural interface health monitoring systems, and AI-powered surgical assistance tools that will revolutionize medical practice.',
          features: ['Quantum Drug Discovery', 'Neural Interfaces', 'AI Surgery Assistance', 'Genomic Analysis']
        }
      },
      'saas-platforms': {
        title: 'SAAS Platforms',
        bgImage: '/image/sesaa.jpg',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We build scalable Software-as-a-Service platforms with cutting-edge AI capabilities, modern cloud architecture, and intuitive user experiences that serve multiple industries and business verticals.',
          features: ['Multi-tenant Architecture', 'AI Integration', 'Scalable Infrastructure', 'User Experience Design']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our SAAS solutions include automated workflows, intelligent analytics dashboards, seamless integrations, and robust security features that help businesses streamline operations and drive growth.',
          features: ['Automated Workflows', 'Analytics Dashboards', 'API Integrations', 'Enterprise Security']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Micro-SaaS, AI-first platforms, and no-code solutions are reshaping the software landscape. We leverage these trends to create more accessible and powerful business applications.',
          features: ['Micro-SaaS', 'AI-First Design', 'No-Code Solutions', 'Edge Computing']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing autonomous SAAS platforms that can self-optimize, auto-scale based on usage patterns, and provide predictive insights to help businesses stay ahead of market trends.',
          features: ['Autonomous Platforms', 'Self-Optimization', 'Predictive Insights', 'Market Intelligence']
        }
      }
    },
    'vision-ai': {
      'chatbot-solutions': {
        title: 'Chatbot Solutions',
        bgImage: '/image/sechat.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We develop intelligent chatbot solutions powered by advanced NLP and machine learning to enhance customer engagement and automate support.',
          features: ['NLP Integration', 'Conversational AI', 'Multi-Platform Support', 'Analytics Dashboard']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our chatbot solutions include omnichannel support, sentiment analysis, automated workflows, and seamless integration with enterprise systems.',
          features: ['Omnichannel Support', 'Sentiment Analysis', 'Automated Workflows', 'Enterprise Integration']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Voice-enabled chatbots, AI-driven personalization, and multi-lingual support are transforming customer interactions. We incorporate these trends for enhanced experiences.',
          features: ['Voice Chatbots', 'AI Personalization', 'Multi-Lingual Support', 'Contextual Understanding']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing next-gen chatbots with neural interface integration, autonomous learning, and emotional intelligence for human-like interactions.',
          features: ['Neural Interfaces', 'Autonomous Learning', 'Emotional Intelligence', 'Advanced NLP']
        }
      },
    },
    'city': {
      'iot-services': {
        title: 'IoT Services',
        bgImage: '/image/seiot.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We craft comprehensive Internet of Things solutions that connect devices, sensors, and systems to build smart ecosystems for modern cities, industrial automation, and innovative infrastructure.',
          features: ['Device Management', 'Sensor Networks', 'Data Collection', 'System Integration']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our IoT platform offers real-time monitoring, predictive insights, automated responses, and secure connectivity across diverse device ecosystems with top-tier security.',
          features: ['Real-time Monitoring', 'Predictive Analytics', 'Automated Responses', 'Secure Connectivity']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: '5G connectivity, edge AI, and digital twins are redefining IoT applications. We harness these technologies to create responsive and intelligent connected systems.',
          features: ['5G Integration', 'Edge AI', 'Digital Twins', 'Smart Analytics']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are innovating autonomous IoT networks that self-configure, self-repair, and adapt to dynamic conditions while maintaining peak performance and security.',
          features: ['Autonomous Networks', 'Self-Configuration', 'Adaptive Systems', 'Quantum Security']
        }
      },
      'auto-sizing': {
        title: 'Large Language Model',
        bgImage: '/image/sellm.webp',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We build and deploy advanced Large Language Models (LLMs) that understand, generate, and summarize human language with high accuracy. Our models support diverse applications like chatbots, content creation, sentiment analysis, and intelligent automation.',
          features: ['Text Generation', 'Language Understanding', 'Summarization', 'Conversational AI']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our LLM solutions are fine-tuned for domain-specific tasks, multilingual support, real-time interaction, and document analysis. These models integrate easily into enterprise workflows and software systems.',
          features: ['Domain Adaptation', 'Multilingual Models', 'Real-Time Chatbots', 'Document Analysis']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'LLMs are at the forefront of generative AI trends, powering innovations in code generation, education, healthcare, and more. Techniques like retrieval-augmented generation (RAG), instruction tuning, and few-shot learning are revolutionizing how machines understand context.',
          features: ['Retrieval-Augmented Generation', 'Instruction Tuning', 'Few-Shot Learning', 'Generative Applications']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are researching multimodal LLMs, continual learning, and autonomous reasoning to create next-generation AI that learns from interaction, understands context deeply, and works seamlessly across modalities like text, speech, and vision.',
          features: ['Multimodal Models', 'Continual Learning', 'Autonomous Reasoning', 'Cross-Modal Intelligence']
        }
      }
    },
    'cubebotics': {
      'embedded-iot': {
        title: 'Embedded & IoT Solutions',
        bgImage: '/image/seemb.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We design and develop custom embedded systems and IoT solutions that power smart devices and industrial automation with seamless connectivity and real-time data processing.',
          features: ['Custom Firmware Development', 'IoT Device Integration', 'Real-time Data Processing', 'Hardware-Software Co-design']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our embedded and IoT solutions include industrial automation systems, smart home devices, wearable technology, and edge computing solutions with robust security features.',
          features: ['Industrial Automation', 'Smart Home Solutions', 'Wearable Technology', 'Edge Computing']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'AI at the edge, low-power IoT networks, and 5G-enabled devices are revolutionizing embedded systems. We integrate these technologies for next-generation solutions.',
          features: ['Edge AI Integration', 'Energy-Efficient Designs', '5G Connectivity', 'Secure IoT Networks']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing self-learning embedded systems, quantum-resistant security protocols, and autonomous IoT networks that adapt to environmental changes in real-time.',
          features: ['Self-Learning Systems', 'Quantum Security', 'Autonomous Networks', 'Environmental Adaptation']
        }
      },
      'drone-tech': {
        title: 'Drone Technology Solutions',
        bgImage: '/image/sedro.avif',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We develop advanced drone technology for aerial imaging, industrial inspection, and autonomous delivery systems with cutting-edge computer vision and AI capabilities.',
          features: ['Aerial Imaging', 'Industrial Inspection', 'Autonomous Navigation', 'AI-Powered Analysis']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our drone solutions include precision agriculture systems, infrastructure monitoring, emergency response drones, and automated delivery networks with real-time data processing.',
          features: ['Precision Agriculture', 'Infrastructure Monitoring', 'Emergency Response', 'Automated Delivery']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Swarm intelligence, beyond visual line of sight (BVLOS) operations, and AI-powered object recognition are transforming drone applications across industries.',
          features: ['Swarm Technology', 'BVLOS Operations', 'AI Object Recognition', 'Real-time Analytics']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are working on quantum-enhanced navigation systems, fully autonomous drone swarms, and eco-friendly propulsion technologies for sustainable aerial solutions.',
          features: ['Quantum Navigation', 'Autonomous Swarms', 'Green Propulsion', 'Urban Air Mobility']
        }
      }
    },
    'dce': {
      'data-engineering': {
        title: 'Data Engineering',
        bgImage: '/image/sede.webp',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We design and build scalable data pipelines to process and transform large datasets, enabling data-driven decision-making and advanced analytics.',
          features: ['Data Pipelines', 'ETL Processes', 'Scalable Storage', 'Data Integration']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our data engineering solutions include real-time data processing, cloud-based data lakes, automated ETL workflows, and robust data governance frameworks.',
          features: ['Real-time Processing', 'Data Lakes', 'Automated ETL', 'Data Governance']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Data mesh architectures, real-time analytics, and AI-driven data pipelines are transforming data engineering. We adopt these trends for efficient data management.',
          features: ['Data Mesh', 'Real-time Analytics', 'AI Pipelines', 'Cloud-Native Storage']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing autonomous data pipelines with AI-driven optimization, predictive data quality checks, and quantum-enhanced data processing for unparalleled efficiency.',
          features: ['Autonomous Pipelines', 'Predictive Quality', 'Quantum Processing', 'Scalable Analytics']
        }
      },
      'cloud-engineering': {
        title: 'Cloud Engineering',
        bgImage: '/image/sece.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We provide end-to-end cloud engineering services, including architecture design, migration, and optimization for scalable and secure cloud infrastructures.',
          features: ['Cloud Migration', 'Architecture Design', 'Cost Optimization', 'Security Compliance']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our cloud solutions include multi-cloud architectures, serverless computing, automated scaling, and advanced security frameworks to ensure robust performance.',
          features: ['Multi-Cloud', 'Serverless Computing', 'Automated Scaling', 'Advanced Security']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Hybrid cloud, edge computing, and AI-driven cloud management are shaping the future. We leverage these technologies for optimized cloud deployments.',
          features: ['Hybrid Cloud', 'Edge Computing', 'AI Cloud Management', 'Cost Efficiency']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are building autonomous cloud management systems with AI-driven resource allocation, quantum-enhanced encryption, and sustainable cloud operations.',
          features: ['Autonomous Management', 'Quantum Encryption', 'Sustainable Operations', 'Predictive Scaling']
        }
      }
    },
    'tech-solution': {
      'web-development': {
        title: 'Web Development',
        bgImage: '/image/seweb.avif',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We create modern, responsive web applications using cutting-edge frameworks and technologies to deliver seamless user experiences.',
          features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimization', 'Performance Tuning']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our web development solutions include progressive web apps, e-commerce platforms, CMS integration, and robust security features.',
          features: ['Progressive Web Apps', 'E-commerce Platforms', 'CMS Integration', 'Web Security']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Jamstack, serverless web apps, and AI-driven personalization are shaping modern web development. We leverage these for optimal performance.',
          features: ['Jamstack', 'Serverless Apps', 'AI Personalization', 'Web Accessibility']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing autonomous web platforms with AI-driven content generation, quantum-enhanced performance, and immersive WebXR experiences.',
          features: ['AI Content Generation', 'Quantum Performance', 'WebXR', 'Autonomous Platforms']
        }
      },
      'app-development': {
        title: 'App Development',
        bgImage: '/image/seapp.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We build native and cross-platform mobile applications for iOS and Android, delivering intuitive and high-performance user experiences.',
          features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Optimization']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our app development solutions include real-time features, push notifications, in-app analytics, and secure payment integrations.',
          features: ['Real-time Features', 'Push Notifications', 'In-App Analytics', 'Payment Integration']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'Low-code development, AR/VR integration, and AI-driven app personalization are transforming mobile apps. We adopt these for innovative solutions.',
          features: ['Low-Code', 'AR/VR Integration', 'AI Personalization', 'App Security']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing next-gen mobile apps with neural interface controls, autonomous feature updates, and sustainable app architectures.',
          features: ['Neural Interfaces', 'Autonomous Updates', 'Sustainable Apps', 'Advanced Analytics']
        }
      },
      'business-consulting': {
        title: 'Business Consulting',
        bgImage: '/image/sebus.jpg',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: 'We provide strategic consulting services to drive digital transformation, optimize operations, and accelerate business growth.',
          features: ['Digital Transformation', 'Process Optimization', 'Growth Strategies', 'Change Management']
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: 'Our consulting services include data-driven strategy formulation, technology adoption roadmaps, organizational alignment, and performance analytics.',
          features: ['Data-Driven Strategy', 'Tech Roadmaps', 'Organizational Alignment', 'Performance Analytics']
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: 'AI-driven consulting, sustainability-focused strategies, and agile transformation are leading trends. We integrate these for impactful outcomes.',
          features: ['AI Consulting', 'Sustainability Strategies', 'Agile Transformation', 'Data Insights']
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: 'We are developing AI-powered consulting platforms, quantum-enhanced decision models, and autonomous strategy optimization tools for future-ready businesses.',
          features: ['AI Consulting Platforms', 'Quantum Decision Models', 'Autonomous Strategy', 'Predictive Insights']
        }
      }
    }
  };

  // Handle navigation to Services page
  const handleExploreSolutions = () => {
    navigate('/services');
  };

  // Safely get the section with null checks
  const section = exploreId && sectionId ? sectionData[exploreId]?.[sectionId] : null;

  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
        <div className="text-center">
          <span className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</span>
          <p className="text-gray-600">The requested page could not be found.</p>
        </div>
      </div>
    );
  }

  const sections: SectionContent[] = [
    section.whatWeDo,
    section.solutions,
    section.trending,
    section.futurePlans
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Helmet>
        <title>{`CubeAI Solutions - ${section.title}`}</title>
        <meta
          name="description"
          content={`Explore ${section.title} by CubeAI, offering innovative solutions for ${section.whatWeDo.content.slice(0, 100)}...`}
        />
        <meta
          name="keywords"
          content={`CubeAI Solutions, ${section.title}, AI solutions, ${section.whatWeDo.features.join(', ')}`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 85%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
            {/* Left content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                  Professional Services
                </div>

                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {section.title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-4"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.1
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.div
                  className="w-24 h-1 bg-white mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />

                <motion.p
                  className="text-xl leading-relaxed mb-10 text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Transforming businesses with cutting-edge technology solutions and innovative strategies for sustainable growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex items-center space-x-6"
                >
                  <button
                    onClick={handleExploreSolutions}
                    className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-[2rem] backdrop-blur-sm" />
                <img
                  src={section.bgImage}
                  alt={section.title}
                  className="relative w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-orange-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              WE OFFER
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {sections.map((sectionContent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <sectionContent.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {sectionContent.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {sectionContent.content}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    {sectionContent.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
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

export default SectionDetail;
