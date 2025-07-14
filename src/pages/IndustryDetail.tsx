import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  TrendingUp,
  Rocket,
  CheckCircle,
  Star,
  Zap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react'; // Import LucideIcon type
import { Helmet } from 'react-helmet-async';

interface IndustrySection {
  title: string;
  icon: LucideIcon; // Use LucideIcon for type safety
  content: string;
  features: string[];
}

interface Industry {
  title: string;
  bgImage: string;
  color: string;
  whatWeDo: IndustrySection;
  solutions: IndustrySection;
  trending: IndustrySection;
  futurePlans: IndustrySection;
}

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId?: string }>();

  useEffect(() => {
    console.log('IndustryDetail component mounted (entered /industry/:industryId route)', { industryId });
    try {
      console.log('Lucide icons available:', {
        Target,
        Lightbulb,
        TrendingUp,
        Rocket,
        CheckCircle,
        Star,
        Zap,
        ArrowRight,
        Sparkles,
      });
      console.log('Framer Motion available:', motion);
      console.log('React Router available:', { useParams });
      console.log('Helmet available:', Helmet);
    } catch (error) {
      console.error('Error in IndustryDetail component dependencies:', error);
    }
  }, [industryId]);

  const industryData: Record<string, Industry> = {
    manufacturing: {
      title: 'Manufacturing',
      bgImage: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-purple-500 to-indigo-600',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'We revolutionize manufacturing through smart automation, predictive maintenance, and quality control systems. Our AI-powered solutions optimize production lines, reduce waste, and improve overall equipment effectiveness.',
        features: ['Smart Automation', 'Predictive Maintenance', 'Quality Control', 'Production Optimization'],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our manufacturing solutions include IoT-enabled machinery monitoring, AI-driven supply chain optimization, automated quality inspection, and real-time production analytics that increase efficiency by up to 35%.',
        features: ['IoT Monitoring', 'Supply Chain AI', 'Automated Inspection', 'Real-time Analytics'],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Industry 4.0 technologies like digital twins, collaborative robots, and edge computing are transforming manufacturing. We integrate these cutting-edge technologies to create smart, connected factories.',
        features: ['Digital Twins', 'Collaborative Robots', 'Edge Computing', 'Smart Factories'],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We are developing autonomous manufacturing systems with self-healing capabilities, quantum-enhanced optimization, and fully sustainable production processes for the next generation of smart manufacturing.',
        features: ['Autonomous Systems', 'Quantum Optimization', 'Sustainable Production', 'Self-healing Technology'],
      },
    },
    telecom: {
      title: 'Telecom',
      bgImage: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-emerald-500 to-teal-600',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'We enhance telecom operations through network optimization, predictive maintenance, customer experience analytics, and intelligent resource allocation to improve service quality and operational efficiency.',
        features: ['Network Optimization', 'Predictive Maintenance', 'Customer Analytics', 'Resource Allocation'],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our telecom solutions include 5G network optimization, AI-powered customer service, fraud detection systems, and intelligent network planning that reduce operational costs by up to 25%.',
        features: ['5G Optimization', 'AI Customer Service', 'Fraud Detection', 'Network Planning'],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: '5G deployment, edge computing, and network slicing are revolutionizing telecommunications. We leverage these technologies to create more efficient and responsive network infrastructures.',
        features: ['5G Deployment', 'Edge Computing', 'Network Slicing', 'Intelligent Infrastructure'],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We are developing 6G-ready solutions, quantum communication networks, and AI-driven autonomous network management systems that will define the future of telecommunications.',
        features: ['6G Technology', 'Quantum Communication', 'Autonomous Networks', 'Next-Gen Infrastructure'],
      },
    },
    healthcare: {
      title: 'Healthcare & Life Sciences',
      bgImage: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-pink-500 to-rose-500',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'We transform healthcare delivery through AI-powered diagnostics, personalized treatment plans, patient monitoring systems, and clinical decision support tools that improve patient outcomes and reduce costs.',
        features: ['AI Diagnostics', 'Personalized Treatment', 'Patient Monitoring', 'Clinical Decision Support'],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our healthcare solutions include medical imaging analysis, drug discovery acceleration, electronic health record optimization, and telemedicine platforms that enhance care delivery and accessibility.',
        features: ['Medical Imaging AI', 'Drug Discovery', 'EHR Optimization', 'Telemedicine Platforms'],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Precision medicine, wearable health devices, and AI-powered diagnostics are revolutionizing healthcare. We integrate these technologies to create comprehensive health management ecosystems.',
        features: ['Precision Medicine', 'Wearable Devices', 'AI Diagnostics', 'Health Ecosystems'],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We are developing quantum-enhanced drug discovery, neural interface health monitoring, and AI-powered surgical robotics that will revolutionize medical practice and patient care.',
        features: ['Quantum Drug Discovery', 'Neural Interfaces', 'Surgical Robotics', 'Advanced Therapeutics'],
      },
    },
    biotech: {
      title: 'Biotech',
      bgImage: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-orange-500 to-red-500',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'We accelerate biotechnology research through AI-powered genomic analysis, protein structure prediction, drug discovery optimization, and clinical trial enhancement to advance scientific breakthroughs.',
        features: ['Genomic Analysis', 'Protein Prediction', 'Drug Discovery', 'Clinical Trials'],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our biotech solutions include CRISPR optimization tools, biomarker discovery platforms, synthetic biology design systems, and regulatory compliance automation that accelerate research timelines.',
        features: ['CRISPR Tools', 'Biomarker Discovery', 'Synthetic Biology', 'Regulatory Automation'],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Gene editing, synthetic biology, and personalized medicine are transforming biotechnology. We integrate these cutting-edge fields to create innovative research and development platforms.',
        features: ['Gene Editing', 'Synthetic Biology', 'Personalized Medicine', 'Bioengineering'],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We are developing quantum biology simulations, AI-designed organisms, and automated laboratory systems that will revolutionize biotechnology research and therapeutic development.',
        features: ['Quantum Biology', 'AI-Designed Organisms', 'Automated Labs', 'Therapeutic Innovation'],
      },
    },
    hr: {
      title: 'Human Resource',
      bgImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-cyan-500 to-blue-600',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'We modernize HR operations through intelligent recruitment, employee engagement analytics, performance prediction, and automated workflow systems that enhance talent management and organizational efficiency.',
        features: ['Intelligent Recruitment', 'Employee Analytics', 'Performance Prediction', 'Workflow Automation'],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our HR solutions include AI-powered candidate screening, sentiment analysis tools, predictive turnover models, and personalized learning platforms that improve hiring quality and employee satisfaction.',
        features: ['AI Screening', 'Sentiment Analysis', 'Turnover Prediction', 'Learning Platforms'],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Remote work analytics, employee wellness monitoring, and AI-driven talent acquisition are reshaping HR practices. We integrate these trends to create more effective people management systems.',
        features: ['Remote Analytics', 'Wellness Monitoring', 'AI Talent Acquisition', 'People Analytics'],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We are developing emotional AI for employee support, predictive career pathing systems, and virtual reality training platforms that will transform the future of human resource management.',
        features: ['Emotional AI', 'Career Pathing', 'VR Training', 'Future HR Systems'],
      },
    },
    automation: {
      title: 'Industry Automation',
      bgImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      color: 'from-violet-500 to-purple-600',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'We implement comprehensive automation solutions across industries through robotic process automation, intelligent workflow orchestration, and AI-driven decision systems that eliminate manual tasks.',
        features: ['Process Automation', 'Workflow Orchestration', 'AI Decision Systems', 'Task Elimination'],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our automation solutions include robotic systems integration, intelligent document processing, automated quality assurance, and predictive maintenance systems that increase productivity by up to 50%.',
        features: ['Robotic Integration', 'Document Processing', 'Quality Assurance', 'Predictive Maintenance'],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Hyperautomation, intelligent automation, and autonomous systems are driving the next wave of industrial transformation. We leverage these technologies for comprehensive automation solutions.',
        features: ['Hyperautomation', 'Intelligent Systems', 'Autonomous Operations', 'Digital Transformation'],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We are developing self-configuring automation systems, quantum-enhanced optimization algorithms, and fully autonomous industrial ecosystems that will define the future of automation.',
        features: ['Self-configuring Systems', 'Quantum Algorithms', 'Autonomous Ecosystems', 'Future Automation'],
      },
    },
  };

  const industry = industryData[industryId as keyof typeof industryData];

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <p className="text-gray-300">The requested industry page could not be found.</p>
        </div>
      </div>
    );
  }

  const sections = [industry.whatWeDo, industry.solutions, industry.trending, industry.futurePlans];

  return (
    <div className="relative min-h-screen pt-20">
      <Helmet>
        <title>{`CubeAI Solutions - ${industry.title} Industry Solutions`}</title>
        <meta
          name="description"
          content={`Explore CubeAI's ${industry.title.toLowerCase()} solutions, including AI-powered automation, analytics, and innovative technologies to transform your industry.`}
        />
        <meta
          name="keywords"
          content={`CubeAI Solutions, ${industry.title.toLowerCase()}, AI solutions, industry automation, predictive analytics, smart technology`}
        />
      </Helmet>

      {/* Hero Section with Sliding Text Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={industry.bgImage}
            alt={`${industry.title} industry background`}
            className="w-full h-full object-cover"
            onError={(e) => console.error(`Error loading background image for ${industry.title}:`, e)}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-80`} />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onAnimationStart={() => console.log('Hero section animation started')}
            onAnimationComplete={() => console.log('Hero section animation completed')}
          >
            {/* Sliding Text Animation */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                className="text-8xl md:text-9xl font-bold leading-tight"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 60,
                }}
                style={{
                  textShadow: '0 8px 32px rgba(0,0,0,0.6)',
                  background: 'linear-gradient(45deg, #ffffff, #f0f9ff, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {industry.title}
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-12">
              <motion.p
                className="text-3xl md:text-4xl font-light"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  type: 'spring',
                  stiffness: 40,
                }}
                style={{
                  textShadow: '0 4px 16px rgba(0,0,0,0.5)',
                  letterSpacing: '0.02em',
                }}
              >
                Transforming Industries with AI Innovation
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 1.5, duration: 1, type: 'spring' }}
            >
              <div
                className="inline-flex items-center px-8 py-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl cursor-pointer"
                role="button"
                aria-label="Explore our industry solutions"
                onClick={() => console.log('Explore Solutions button clicked')}
              >
                <Sparkles className="w-6 h-6 mr-3" />
                <span className="text-xl font-medium">Explore Our Solutions</span>
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
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
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

export default IndustryDetail;