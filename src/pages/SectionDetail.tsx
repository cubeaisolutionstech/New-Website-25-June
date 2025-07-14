import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Rocket, CheckCircle, Sparkles } from 'lucide-react';
import { LucideIcon } from 'lucide-react'; // Import LucideIcon type
import { Helmet } from 'react-helmet-async';

interface SectionContent {
  title: string;
  icon: LucideIcon;
  content: string;
  features: string[];
}

interface Section {
  title: string;
  bgImage: string;
  color: string;
  whatWeDo: SectionContent;
  solutions: SectionContent;
  trending: SectionContent;
  futurePlans: SectionContent;
}

interface SectionData {
  [exploreId: string]: {
    [sectionId: string]: Section;
  };
}

const SectionDetail = () => {
  const { exploreId, sectionId } = useParams<{ exploreId?: string; sectionId?: string }>();

  useEffect(() => {
    console.log('SectionDetail component mounted', { exploreId, sectionId });
    try {
      console.log('Lucide icons available:', { Target, Lightbulb, TrendingUp, Rocket, CheckCircle, Sparkles });
      console.log('Framer Motion available:', motion);
      console.log('React Router available:', { useParams });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in SectionDetail component dependencies:', error);
    }
  }, [exploreId, sectionId]);

  const sectionData: SectionData = {
    aima: {
      'industry-40': {
        title: 'Industry 4.0 & 5.0 Solutions',
        bgImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
        color: 'from-purple-500 to-indigo-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We revolutionize manufacturing through intelligent automation, predictive maintenance, and real-time optimization. Our Industry 4.0 & 5.0 solutions integrate AI, IoT, and advanced analytics to create fully autonomous production systems that adapt and learn from operational data.',
          features: ['Smart Manufacturing', 'Predictive Maintenance', 'Quality Control', 'Real-time Optimization'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our comprehensive suite includes AI-powered production planning, intelligent supply chain management, automated quality inspection systems, and predictive analytics platforms that reduce downtime by up to 40% and increase overall equipment effectiveness.',
          features: ['AI Production Planning', 'Supply Chain Intelligence', 'Automated Inspection', 'Predictive Analytics'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Digital twins, edge computing, and collaborative robots are transforming manufacturing. We leverage these cutting-edge technologies to create smart factories that are more efficient, sustainable, and responsive to market demands.',
          features: ['Digital Twins', 'Edge Computing', 'Collaborative Robots', 'Sustainable Manufacturing'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing next-generation autonomous manufacturing systems with self-healing capabilities, quantum-enhanced optimization algorithms, and fully integrated sustainability metrics that will define Industry 6.0.',
          features: ['Autonomous Systems', 'Quantum Optimization', 'Self-healing Technology', 'Industry 6.0 Framework'],
        },
      },
      'legacy-modernization': {
        title: 'Legacy System Modernization',
        bgImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
        color: 'from-emerald-500 to-teal-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We transform outdated legacy systems into modern, AI-powered platforms while preserving critical business logic and ensuring seamless data migration. Our approach minimizes disruption and maximizes the value of existing investments.',
          features: ['System Assessment', 'Data Migration', 'API Integration', 'Cloud Transformation'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our modernization solutions include cloud-native architectures, microservices implementation, API-first design, and intelligent data transformation tools that ensure your systems are future-ready and scalable.',
          features: ['Cloud-Native Architecture', 'Microservices', 'API-First Design', 'Data Transformation'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Containerization, serverless computing, and low-code platforms are revolutionizing legacy modernization. We utilize these technologies to accelerate transformation while reducing costs and complexity.',
          features: ['Containerization', 'Serverless Computing', 'Low-Code Platforms', 'DevOps Integration'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing AI-driven automated modernization tools that can analyze legacy code, suggest optimal migration paths, and automatically generate modern equivalents with minimal human intervention.',
          features: ['AI-Driven Migration', 'Automated Code Analysis', 'Smart Refactoring', 'Zero-Downtime Transformation'],
        },
      },
    },
    aida: {
      'medical-analytics': {
        title: 'Medical Data Analytics',
        bgImage: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
        color: 'from-pink-500 to-rose-500',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We develop advanced healthcare analytics solutions that process complex medical data to improve patient outcomes, optimize treatment protocols, and enable precision medicine through AI-powered insights and predictive modeling.',
          features: ['Patient Analytics', 'Treatment Optimization', 'Precision Medicine', 'Clinical Decision Support'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our medical analytics platform includes real-time patient monitoring, drug interaction analysis, epidemic prediction models, and personalized treatment recommendations that help healthcare providers deliver better care.',
          features: ['Real-time Monitoring', 'Drug Analysis', 'Epidemic Prediction', 'Personalized Treatment'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Wearable health devices, telemedicine, and AI diagnostics are transforming healthcare delivery. We integrate these technologies to create comprehensive health monitoring and analysis ecosystems.',
          features: ['Wearable Integration', 'Telemedicine', 'AI Diagnostics', 'Remote Monitoring'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing quantum-enhanced drug discovery platforms, neural interface health monitoring systems, and AI-powered surgical assistance tools that will revolutionize medical practice.',
          features: ['Quantum Drug Discovery', 'Neural Interfaces', 'AI Surgery Assistance', 'Genomic Analysis'],
        },
      },
      'saas-platforms': {
        title: 'SAAS Platforms',
        bgImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
        color: 'from-cyan-500 to-blue-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We build scalable Software-as-a-Service platforms with cutting-edge AI capabilities, modern cloud architecture, and intuitive user experiences that serve multiple industries and business verticals.',
          features: ['Multi-tenant Architecture', 'AI Integration', 'Scalable Infrastructure', 'User Experience Design'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our SAAS solutions include automated workflows, intelligent analytics dashboards, seamless integrations, and robust security features that help businesses streamline operations and drive growth.',
          features: ['Automated Workflows', 'Analytics Dashboards', 'API Integrations', 'Enterprise Security'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Micro-SaaS, AI-first platforms, and no-code solutions are reshaping the software landscape. We leverage these trends to create more accessible and powerful business applications.',
          features: ['Micro-SaaS', 'AI-First Design', 'No-Code Solutions', 'Edge Computing'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing autonomous SAAS platforms that can self-optimize, auto-scale based on usage patterns, and provide predictive insights to help businesses stay ahead of market trends.',
          features: ['Autonomous Platforms', 'Self-Optimization', 'Predictive Insights', 'Market Intelligence'],
        },
      },
    },
    city: {
      'iot-services': {
        title: 'IoT Services',
        bgImage: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200',
        color: 'from-orange-500 to-red-500',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We create comprehensive Internet of Things solutions that connect devices, sensors, and systems to create intelligent ecosystems for smart cities, industrial automation, and connected infrastructure.',
          features: ['Device Management', 'Sensor Networks', 'Data Collection', 'System Integration'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our IoT platform provides real-time monitoring, predictive analytics, automated responses, and seamless connectivity across diverse device ecosystems with enterprise-grade security.',
          features: ['Real-time Monitoring', 'Predictive Analytics', 'Automated Responses', 'Secure Connectivity'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            '5G connectivity, edge AI, and digital twins are revolutionizing IoT applications. We integrate these technologies to create more responsive and intelligent connected systems.',
          features: ['5G Integration', 'Edge AI', 'Digital Twins', 'Smart Analytics'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing autonomous IoT networks that can self-configure, self-heal, and adapt to changing conditions while maintaining optimal performance and security.',
          features: ['Autonomous Networks', 'Self-Configuration', 'Adaptive Systems', 'Quantum Security'],
        },
      },
      'auto-sizing': {
        title: 'Auto Sizing Solutions',
        bgImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
        color: 'from-violet-500 to-purple-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We develop intelligent auto-scaling solutions that automatically adjust system resources based on demand patterns, usage analytics, and performance metrics to optimize efficiency and reduce costs.',
          features: ['Resource Optimization', 'Demand Prediction', 'Performance Monitoring', 'Cost Reduction'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our auto-sizing platform includes predictive scaling algorithms, real-time resource allocation, intelligent load balancing, and comprehensive analytics for optimal system performance.',
          features: ['Predictive Scaling', 'Resource Allocation', 'Load Balancing', 'Performance Analytics'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Serverless computing, container orchestration, and AI-driven resource management are transforming how systems scale. We leverage these technologies for optimal resource utilization.',
          features: ['Serverless Computing', 'Container Orchestration', 'AI Resource Management', 'Multi-Cloud Scaling'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing quantum-enhanced optimization algorithms and neural network-based prediction models that will enable unprecedented accuracy in resource scaling and management.',
          features: ['Quantum Optimization', 'Neural Predictions', 'Autonomous Scaling', 'Predictive Maintenance'],
        },
      },
    },
    cubebotics: {
      'embedded-iot': {
        title: 'Embedded & IoT Solutions',
        bgImage: 'https://innoflexion.com/wp-content/uploads/2022/04/embedded-iot-solutions.jpg',
        color: 'from-purple-500 to-indigo-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We design and develop custom embedded systems and IoT solutions that power smart devices and industrial automation with seamless connectivity and real-time data processing.',
          features: ['Custom Firmware', 'IoT Connectivity', 'Real-time Processing', 'Hardware Integration'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our embedded and IoT solutions include low-power device design, secure communication protocols, edge computing capabilities, and integration with cloud platforms for scalable deployments.',
          features: ['Low-Power Design', 'Secure Protocols', 'Edge Computing', 'Cloud Integration'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Edge AI, low-power IoT networks, and 5G-enabled devices are driving the future of embedded systems. We leverage these trends to deliver cutting-edge solutions.',
          features: ['Edge AI', 'Low-Power IoT', '5G Connectivity', 'Smart Sensors'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing next-generation embedded systems with AI-driven optimization, self-configuring IoT networks, and advanced energy harvesting for sustainable deployments.',
          features: ['AI Optimization', 'Self-Configuring Networks', 'Energy Harvesting', 'Autonomous Devices'],
        },
      },
      'drone-tech': {
        title: 'Drone Technology',
        bgImage: 'https://www.bearingtips.com/wp-content/uploads/2021/06/SMB320-Agricultural-drone.jpg',
        color: 'from-emerald-500 to-teal-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We create advanced drone technology solutions for applications like surveillance, mapping, and industrial inspection, leveraging AI and high-precision sensors.',
          features: ['AI-Powered Navigation', 'High-Precision Sensors', 'Real-time Data', 'Autonomous Flight'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our drone solutions include autonomous flight systems, real-time data analytics, high-resolution imaging, and secure data transmission for various industrial use cases.',
          features: ['Autonomous Navigation', 'Data Analytics', 'High-Resolution Imaging', 'Secure Transmission'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Swarm intelligence, AI-based image processing, and drone-as-a-service models are shaping the future of drone technology. We integrate these advancements for superior performance.',
          features: ['Swarm Intelligence', 'AI Image Processing', 'Drone-as-a-Service', 'Precision Mapping'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are advancing drone technology with quantum-enhanced navigation, autonomous swarm coordination, and eco-friendly propulsion systems for sustainable operations.',
          features: ['Quantum Navigation', 'Swarm Coordination', 'Eco-Friendly Propulsion', 'Advanced Analytics'],
        },
      },
    },
    dce: {
      'data-engineering': {
        title: 'Data Engineering',
        bgImage: 'https://analyticsdrift.com/wp-content/uploads/2022/12/Data-engineering-course.jpg',
        color: 'from-pink-500 to-rose-500',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We design and build scalable data pipelines to process and transform large datasets, enabling data-driven decision-making and advanced analytics.',
          features: ['Data Pipelines', 'ETL Processes', 'Scalable Storage', 'Data Integration'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our data engineering solutions include real-time data processing, cloud-based data lakes, automated ETL workflows, and robust data governance frameworks.',
          features: ['Real-time Processing', 'Data Lakes', 'Automated ETL', 'Data Governance'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Data mesh architectures, real-time analytics, and AI-driven data pipelines are transforming data engineering. We adopt these trends for efficient data management.',
          features: ['Data Mesh', 'Real-time Analytics', 'AI Pipelines', 'Cloud-Native Storage'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing autonomous data pipelines with AI-driven optimization, predictive data quality checks, and quantum-enhanced data processing for unparalleled efficiency.',
          features: ['Autonomous Pipelines', 'Predictive Quality', 'Quantum Processing', 'Scalable Analytics'],
        },
      },
      'cloud-engineering': {
        title: 'Cloud Engineering',
        bgImage: 'https://konverge.ai/wp-content/uploads/2022/04/Cloud-Data-Engineering-2-e1651335765376.png',
        color: 'from-orange-500 to-red-500',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We provide end-to-end cloud engineering services, including architecture design, migration, and optimization for scalable and secure cloud infrastructures.',
          features: ['Cloud Migration', 'Architecture Design', 'Cost Optimization', 'Security Compliance'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our cloud solutions include multi-cloud architectures, serverless computing, automated scaling, and advanced security frameworks to ensure robust performance.',
          features: ['Multi-Cloud', 'Serverless Computing', 'Automated Scaling', 'Advanced Security'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Hybrid cloud, edge computing, and AI-driven cloud management are shaping the future. We leverage these technologies for optimized cloud deployments.',
          features: ['Hybrid Cloud', 'Edge Computing', 'AI Cloud Management', 'Cost Efficiency'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are building autonomous cloud management systems with AI-driven resource allocation, quantum-enhanced encryption, and sustainable cloud operations.',
          features: ['Autonomous Management', 'Quantum Encryption', 'Sustainable Operations', 'Predictive Scaling'],
        },
      },
    },
    'vision-ai': {
      'chatbot-solutions': {
        title: 'Chatbot Solutions',
        bgImage: 'https://images.prismic.io/intuzwebsite/d9daef05-a416-4e84-b0f8-2d5e2e3b58d8_A+Comprehensive+Guide+to+Building+an+AI+Chatbot%402x.png?auto=compress,format',
        color: 'from-cyan-500 to-blue-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We develop intelligent chatbot solutions powered by advanced NLP and machine learning to enhance customer engagement and automate support.',
          features: ['NLP Integration', 'Conversational AI', 'Multi-Platform Support', 'Analytics Dashboard'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our chatbot solutions include omnichannel support, sentiment analysis, automated workflows, and seamless integration with enterprise systems.',
          features: ['Omnichannel Support', 'Sentiment Analysis', 'Automated Workflows', 'Enterprise Integration'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Voice-enabled chatbots, AI-driven personalization, and multi-lingual support are transforming customer interactions. We incorporate these trends for enhanced experiences.',
          features: ['Voice Chatbots', 'AI Personalization', 'Multi-Lingual Support', 'Contextual Understanding'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing next-gen chatbots with neural interface integration, autonomous learning, and emotional intelligence for human-like interactions.',
          features: ['Neural Interfaces', 'Autonomous Learning', 'Emotional Intelligence', 'Advanced NLP'],
        },
      },
      'computer-vision': {
        title: 'Computer Vision',
        bgImage: 'https://miro.medium.com/max/2560/1*5lVCJ0SFVvOc4h2rta-7yg.jpeg',
        color: 'from-violet-500 to-purple-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We build advanced computer vision applications for image recognition, object detection, and real-time analysis across industries.',
          features: ['Image Recognition', 'Object Detection', 'Real-time Analysis', 'Facial Recognition'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our computer vision solutions include automated quality inspection, surveillance systems, medical imaging analysis, and augmented reality applications.',
          features: ['Quality Inspection', 'Surveillance Systems', 'Medical Imaging', 'Augmented Reality'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Edge-based vision processing, 3D modeling, and AI-driven anomaly detection are leading trends. We integrate these for cutting-edge vision applications.',
          features: ['Edge Processing', '3D Modeling', 'Anomaly Detection', 'Real-time Vision'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing quantum-enhanced vision algorithms, neural network-based scene understanding, and autonomous vision systems for future applications.',
          features: ['Quantum Algorithms', 'Scene Understanding', 'Autonomous Vision', 'Advanced Analytics'],
        },
      },
    },
    'tech-solution': {
      'web-development': {
        title: 'Web Development',
        bgImage: 'https://th.bing.com/th/id/R.b56241c13b1bf12737b3fd593338a1be?rik=zPt4TsOWBYow%2fw&pid=ImgRaw&r=0',
        color: 'from-purple-500 to-indigo-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We create modern, responsive web applications using cutting-edge frameworks and technologies to deliver seamless user experiences.',
          features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimization', 'Performance Tuning'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our web development solutions include progressive web apps, e-commerce platforms, CMS integration, and robust security features.',
          features: ['Progressive Web Apps', 'E-commerce Platforms', 'CMS Integration', 'Web Security'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Jamstack, serverless web apps, and AI-driven personalization are shaping modern web development. We leverage these for optimal performance.',
          features: ['Jamstack', 'Serverless Apps', 'AI Personalization', 'Web Accessibility'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing autonomous web platforms with AI-driven content generation, quantum-enhanced performance, and immersive WebXR experiences.',
          features: ['AI Content Generation', 'Quantum Performance', 'WebXR', 'Autonomous Platforms'],
        },
      },
      'app-development': {
        title: 'App Development',
        bgImage: 'https://www.creatix9.co.uk/wp-content/uploads/2020/04/Customized-IOS-Application-Development.png',
        color: 'from-emerald-500 to-teal-600',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We build native and cross-platform mobile applications for iOS and Android, delivering intuitive and high-performance user experiences.',
          features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Optimization'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our app development solutions include real-time features, push notifications, in-app analytics, and secure payment integrations.',
          features: ['Real-time Features', 'Push Notifications', 'In-App Analytics', 'Payment Integration'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'Low-code development, AR/VR integration, and AI-driven app personalization are transforming mobile apps. We adopt these for innovative solutions.',
          features: ['Low-Code', 'AR/VR Integration', 'AI Personalization', 'App Security'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing next-gen mobile apps with neural interface controls, autonomous feature updates, and sustainable app architectures.',
          features: ['Neural Interfaces', 'Autonomous Updates', 'Sustainable Apps', 'Advanced Analytics'],
        },
      },
      'business-consulting': {
        title: 'Business Consulting',
        bgImage: 'https://thumbs.dreamstime.com/b/group-business-consultant-working-management-big-data-analyze-financial-document-company-260349966.jpg',
        color: 'from-pink-500 to-rose-500',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content:
            'We provide strategic consulting services to drive digital transformation, optimize operations, and accelerate business growth.',
          features: ['Digital Transformation', 'Process Optimization', 'Growth Strategies', 'Change Management'],
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content:
            'Our consulting services include data-driven strategy formulation, technology adoption roadmaps, organizational alignment, and performance analytics.',
          features: ['Data-Driven Strategy', 'Tech Roadmaps', 'Organizational Alignment', 'Performance Analytics'],
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content:
            'AI-driven consulting, sustainability-focused strategies, and agile transformation are leading trends. We integrate these for impactful outcomes.',
          features: ['AI Consulting', 'Sustainability Strategies', 'Agile Transformation', 'Data Insights'],
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content:
            'We are developing AI-powered consulting platforms, quantum-enhanced decision models, and autonomous strategy optimization tools for future-ready businesses.',
          features: ['AI Consulting Platforms', 'Quantum Decision Models', 'Autonomous Strategy', 'Predictive Insights'],
        },
      },
    },
  };

  const section = exploreId && sectionId ? sectionData[exploreId]?.[sectionId] : undefined;

  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
        <div className="text-center text-gray-900">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested page could not be found.</p>
        </div>
      </div>
    );
  }

  const sections = [section.whatWeDo, section.solutions, section.trending, section.futurePlans];

  return (
    <div className="relative min-h-screen pt-20 bg-gray-50">
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

      {/* Hero Section with Kinetic Typography */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={section.bgImage}
            alt={`${section.title} background`}
            className="w-full h-full object-cover"
            onError={(e) => console.error(`Error loading background image for ${section.title}:`, e)}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-85`} />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onAnimationStart={() => console.log('Hero section animation started')}
            onAnimationComplete={() => console.log('Hero section animation completed')}
          >
            {/* Kinetic Typography Animation */}
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-8 leading-tight"
              style={{
                textShadow: '0 8px 32px rgba(0,0,0,0.6)',
              }}
            >
              {section.title.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-6"
                  initial={{
                    opacity: 0,
                    y: 100,
                    rotateX: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    color: '#60A5FA',
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    background: 'linear-gradient(45deg, #ffffff, #e0f2fe, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {word}
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
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1.8,
                  duration: 1.2,
                  type: 'spring',
                  stiffness: 50,
                }}
                style={{
                  textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                  letterSpacing: '0.05em',
                }}
              >
                Transforming the future with intelligent solutions
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="mt-12"
            >
              <div
                className="inline-flex items-center px-8 py-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl cursor-pointer"
                role="button"
                aria-label="Discover our innovation"
                onClick={() => console.log('Discover Our Innovation button clicked')}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                <span className="text-xl font-medium">Discover Our Innovation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-32 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {sections.map((sectionContent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -20,
                  scale: 1.02,
                  rotateX: 10,
                  rotateY: index % 2 === 0 ? 5 : -5,
                }}
                className="group transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
                onAnimationComplete={() => console.log(`${sectionContent.title} section animation completed`)}
              >
                <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl p-10 hover:bg-slate-700/80 transition-all duration-500 border border-purple-500/30 hover:border-purple-400/50 hover:shadow-2xl h-full">
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <sectionContent.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{sectionContent.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">{sectionContent.content}</p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
                    {sectionContent.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 mr-4 flex-shrink-0 text-purple-500" />
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