import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  TrendingUp,
  Rocket,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Define interfaces for type safety
interface SectionContent {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: string;
  features: string[];
}

interface IndustryData {
  title: string;
  bgImage: string;
  primaryColor: string;
  whatWeDo: SectionContent;
  solutions: SectionContent;
  trending: SectionContent;
  futurePlans: SectionContent;
}

interface IndustryDataMap {
  [key: string]: IndustryData;
}

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId?: string }>();

  const industryData: IndustryDataMap = {
    manufacturing: {
      title: 'Manufacturing',
      bgImage: '/image/vector.jpg',
      primaryColor: 'bg-blue-800',
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
      bgImage: '/image/telecom.jpg',
      primaryColor: 'bg-sky-300',
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
      bgImage: '/image/helcar.jpg',
      primaryColor: 'bg-teal-800',
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
      bgImage: '/image/biomed.jpeg',
      primaryColor: 'bg-emerald-800',
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
        content: 'Gene editing, synthetic biology, and personalized medicine are transforming biotechnology. We leverage these cutting-edge fields to create innovative research and development platforms.',
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
      bgImage: '/image/hr.webp',
      primaryColor: 'bg-indigo-800',
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
      bgImage: '/image/autom.jpg',
      primaryColor: 'bg-cyan-800',
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

  // Validate industryId
  const validIndustryIds = Object.keys(industryData);
  if (!industryId || !validIndustryIds.includes(industryId)) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Industry Not Found</h1>
          <p className="text-gray-600 mb-8">The requested industry page could not be found.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            aria-label="Go back to homepage"
          >
            Go Back Home
            <CheckCircle className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  const industry = industryData[industryId];
  const sections = [industry.whatWeDo, industry.solutions, industry.trending, industry.futurePlans];

  return (
    <div className="min-h-screen bg-blue-100">
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

      {/* Brand Header */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-blue-900 mb-2"
          >
          </motion.h2>
        </div>
      </div>

      {/* Hero Section with Modern Layout */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-blue-900 leading-tight">
                  {industry.title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="inline-block mr-4"
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-700 leading-relaxed max-w-lg"
              >
                Transforming industries with cutting-edge AI solutions and innovative technology platforms
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center space-x-4"
              >
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors cursor-pointer">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Solutions
                </div>
              </motion.div>
            </div>
            {/* Right Image with Organic Shape */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="relative"
              >
                {/* Organic Background Shape */}
                <div className="absolute inset-0 transform rotate-6">
                  <div
                    className={`w-full h-96 rounded-[3rem] ${industry.primaryColor} opacity-90`}
                    style={{
                      clipPath: 'polygon(20% 0%, 80% 10%, 100% 50%, 90% 90%, 10% 100%, 0% 60%)',
                    }}
                  />
                </div>
                {/* Image Container */}
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src={industry.bgImage}
                    alt={industry.title}
                    className="w-full h-96 object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                >
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center"
                >
                  <Rocket className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with Clean Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((sectionContent: SectionContent, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      <sectionContent.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{sectionContent.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{sectionContent.content}</p>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    {sectionContent.features.map((feature: string, featureIndex: number) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-3 flex-shrink-0 text-green-500" />
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
