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
        content: 'Cube AI Solutions delivers agent-based platforms for autonomous production optimization, self-learning quality assurance, agentic supply chain coordination, and human-agent collaboration. Our Agentic AI transforms factories into adaptive, efficient, and resilient systems with real-time decision-making and minimal human intervention.',
        features: [
          'Autonomous Production Optimization',
          'Self-Learning Quality Assurance',
          'Agentic Supply Chain Coordination',
          'Human-Agent Collaboration',
          'LLM-Enhanced Reasoning',
          'Multi-Agent Coordination',
          'Real-Time Anomaly Detection',
          'End-to-End Explainability'
        ],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our Agentic AI toolkits include the Agentic Factory Suite for autonomous plant operations, Vision AI for Manufacturing for product inspection, Agentic Integration Layer for ERP/MES integration, and Workforce Co-Pilot for natural language support, all customizable for various digital maturity levels.',
        features: [
          'Agentic Factory Suite',
          'Vision AI for Manufacturing',
          'Agentic Integration Layer',
          'Workforce Co-Pilot',
          'Customizable Agent Behavior',
          'Seamless IoT Integration',
          'Scalable Deployments',
          'Cloud-Native & Edge-Optimized'
        ],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'The industry is shifting toward cognitive manufacturing with trends like industrial agents for digital twins, collaborative robotics (cobots), hyper-personalization in mass production, and LLM-augmented shop floors, enabling proactive and self-directed operations with minimal training time.',
        features: [
          'Industrial Agents for Digital Twins',
          'Collaborative Robotics (Cobots)',
          'Hyper-Personalization in Production',
          'LLM-Augmented Shop Floors',
          'Generative Models for Dialogue',
          'Self-Configuring Agents',
          'Explainable AI Ethics',
          'Modular Upgrades'
        ],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'Our roadmap includes agent persona customization, inter-factory agent networks for global coordination, generative process simulation using LLMs, and sustainability-driven agents to optimize energy, waste, and emissions, all aimed at deeper autonomy and ESG alignment.',
        features: [
          'Agent Persona Customization',
          'Inter-Factory Agent Networks',
          'Generative Process Simulation',
          'Sustainability-Driven Agents',
          'Federated Learning',
          'Blockchain-Enabled Traceability',
          'Self-Explaining Audit Logs',
          'Global Agent Orchestration'
        ],
      },
    },
    telecom: {
      title: 'Telecom',
      bgImage: '/image/telecom.jpg',
      primaryColor: 'bg-sky-300',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'Cube AI Solutions implements Agentic AI systems to autonomously manage network operations, enhance customer support with co-pilots, optimize infrastructure with real-time insights, and enable predictive maintenance, ensuring seamless connectivity and proactive service delivery.',
        features: [
          'Autonomous Network Management',
          'Agent Co-Pilots for Support',
          'Infrastructure Optimization',
          'Predictive Maintenance',
          'Continuous Monitoring',
          'Autonomous Response',
          'Contextual Personalization',
          'Proactive Optimization'
        ],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our telecom solutions include the Agentic Network Operations Center (A-NOC) for traffic and anomaly management, Telecom Co-Pilot Agents for conversational support, Agent-Driven Infrastructure Management for dynamic scaling, and 5G-Edge Micro Agents for local load balancing.',
        features: [
          'Agentic Network Operations Center',
          'Telecom Co-Pilot Agents',
          'Agent-Driven Infrastructure Management',
          '5G-Edge Micro Agents',
          'Dynamic Traffic Management',
          'Conversational Support',
          'Scalable Resources',
          'Intelligent Towers'
        ],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Telecom is moving toward zero-touch networks, intent-based service delivery, 5G + agentic edge computing, and agentic SLA management, leveraging LLMs and real-time data agents for self-optimizing, low-latency, and customer-centric networks.',
        features: [
          'Zero-Touch Networks',
          'Intent-Based Service Delivery',
          '5G + Agentic Edge',
          'Agentic SLA Management',
          'Adaptive Configuration',
          'Intent-Driven Service',
          'Edge-Aware Deployment',
          'Self-Regulated Assurance'
        ],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We aim to develop global agent federations for network coordination, LLM-powered self-service portals, agentic fraud detection, and sustainability optimization, creating proactive, energy-efficient telecom ecosystems with human-like interaction capabilities.',
        features: [
          'Global Agent Federation',
          'LLM-Powered Self-Service Portals',
          'Agentic Fraud Detection',
          'Sustainability Optimization',
          'Federated Integration',
          'Conversational Portals',
          'Autonomous Protection',
          'Green Efficiency'
        ],
      },
    },
    healthcare: {
      title: 'Healthcare & Life Sciences',
      bgImage: '/image/helcar.jpg',
      primaryColor: 'bg-teal-800',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'Cube AI Solutions delivers Agentic AI ecosystems for autonomous clinical decision support, smart EHR analysis, accelerated drug discovery, and enhanced patient engagement, reducing time-to-treatment and improving outcomes with adaptive, real-time intelligence.',
        features: [
          'Autonomous Clinical Decision Support',
          'Smart EHR Systems',
          'Accelerated Drug Discovery',
          'Enhanced Patient Engagement',
          'Proactive Decisions',
          'Contextual Records',
          'Accelerated Discovery',
          'Personalized Care'
        ],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our solutions include Autonomous Diagnostic Agents for radiology and oncology, Agent-Driven Patient Care Platforms for seamless care, Clinical Research Assistant Agents for scalable insights, and Healthcare NLP & GenAI Co-Pilots for structured data extraction.',
        features: [
          'Autonomous Diagnostic Agents',
          'Agent-Driven Patient Care Platforms',
          'Clinical Research Assistant Agents',
          'Healthcare NLP & GenAI Co-Pilots',
          'Accurate Diagnosis',
          'Seamless Experience',
          'Scalable Research',
          'Structured Records'
        ],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Trends include digital twins for patient simulations, agent-led precision medicine, 24/7 agent monitoring in ICUs, and agent-guided clinical trials, combining reasoning and autonomy to enhance personalized care and research efficiency.',
        features: [
          'Digital Twins for Patients',
          'Agent-Led Precision Medicine',
          '24/7 Agent Monitoring',
          'Agent-Guided Clinical Trials',
          'Digital Simulation',
          'Tailored Therapy',
          'Continuous Monitoring',
          'Optimized Trials'
        ],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We’re building federated healthcare agents for cross-hospital collaboration, voice-activated clinical co-pilots, agentic bioinformatics engines for gene sequencing, and predictive public health intelligence for early outbreak detection.',
        features: [
          'Federated Healthcare Agents',
          'Voice-Activated Clinical Co-Pilots',
          'Agentic Bioinformatics Engines',
          'Predictive Public Health Intelligence',
          'Federated Collaboration',
          'Conversational Interaction',
          'Automated Discovery',
          'Preventive Policy'
        ],
      },
    },
    hr: {
      title: 'Human Resource',
      bgImage: '/image/hr.webp',
      primaryColor: 'bg-indigo-800',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'Cube AI Solutions delivers Agentic AI-driven HR ecosystems for adaptive talent acquisition, streamlined onboarding, employee engagement, and precision upskilling, enabling autonomous collaboration with HR professionals across the employee lifecycle.',
        features: [
          'Adaptive Talent Acquisition',
          'Autonomous Onboarding Workflows',
          'Employee Engagement',
          'Precision Upskilling',
          'Intelligent Hiring',
          'Personalized Onboarding',
          'Proactive Engagement',
          'Targeted Learning'
        ],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our HR solutions include Autonomous Talent Sourcing Agents, Employee Experience Agents for wellness and engagement, Performance Management Co-Pilots for real-time feedback, and Compliance & Policy Agents for proactive regulatory adherence.',
        features: [
          'Autonomous Talent Sourcing',
          'Employee Experience Agents',
          'Performance Management Co-Pilots',
          'Compliance & Policy Agents',
          'Autonomous Sourcing',
          'Empathetic Experience',
          'Real-Time Feedback',
          'Proactive Compliance'
        ],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'HR trends include AI career coaches, bias mitigation agents, continuous sentiment monitoring, and agent-based workforce forecasting, leveraging Agentic AI for adaptive, fair, and predictive people management systems.',
        features: [
          'AI Career Coaches',
          'Bias Mitigation Agents',
          'Continuous Sentiment Monitoring',
          'Agent-Based Workforce Forecasting',
          'Responsive Coaching',
          'Fair Diversity',
          'Continuous Monitoring',
          'Predictive Forecasting'
        ],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We’re developing human-agent collaboration models, voice-based HR assistants, AI governance for fair HR practices, and global talent intelligence systems to map talent, compensation, and cultural fit autonomously.',
        features: [
          'Human-Agent Collaboration',
          'Voice-Based HR Assistants',
          'AI Governance in HR',
          'Global Talent Intelligence',
          'Collaborative Partnership',
          'Conversational Interaction',
          'Transparent Ethics',
          'Global Intelligence'
        ],
      },
    },
    automation: {
      title: 'Industrial Automation',
      bgImage: '/image/autom.jpg',
      primaryColor: 'bg-cyan-800',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'Cube AI Solutions transforms industrial automation with Agentic AI, deploying intelligent control agents, predictive maintenance, vision-based quality assurance, and dynamic production scheduling to optimize manufacturing with minimal human intervention.',
        features: [
          'Intelligent Control Agents',
          'Predictive Maintenance',
          'Quality Assurance',
          'Dynamic Production Scheduling',
          'Autonomous Control',
          'Predictive Maintenance',
          'Accurate QA',
          'Dynamic Scheduling'
        ],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our solutions include Real-Time Factory Monitoring Agents, Smart SCADA Integration, Supply Chain Co-Pilot for procurement, and Industrial Vision Agents for packaging and welding, all designed to enhance efficiency and accuracy.',
        features: [
          'Real-Time Factory Monitoring',
          'Smart SCADA Integration',
          'Supply Chain Co-Pilot',
          'Industrial Vision Agents',
          'Continuous Monitoring',
          'Integrated SCADA',
          'Proactive Supply Chain',
          'Self-Learning Vision'
        ],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Industry 5.0 trends include collaborative agents in assembly lines, cognitive edge agents, self-healing systems, and adaptive robotics, enabling seamless human-machine collaboration and responsive automation.',
        features: [
          'Collaborative Agents in Assembly',
          'Cognitive Edge Agents',
          'Self-Healing Systems',
          'Adaptive Robotics',
          'Seamless Collaboration',
          'Responsive Edge',
          'Preventive Safety',
          'Adaptive Robotics'
        ],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'Our roadmap includes swarm agents for plant management, voice-guided plant operators, zero-downtime manufacturing, and green manufacturing intelligence to optimize energy, waste, and emissions for sustainable operations.',
        features: [
          'Swarm Agents for Plant Management',
          'Voice-Guided Plant Operators',
          'Zero-Downtime Manufacturing',
          'Green Manufacturing Intelligence',
          'Collaborative Swarm',
          'Assistive Voice',
          'Resilient Continuity',
          'Efficient Sustainability'
        ],
      },
    },
    services: {
      title: 'Services',
      bgImage: '/image/services.jpg',
      primaryColor: 'bg-purple-800',
      whatWeDo: {
        title: 'What We Do',
        icon: Target,
        content: 'Cube AI Solutions delivers Agentic AI services across AIMA, AIDA, Vision AI, and Cybertech Innovation, integrating autonomous agents into manufacturing, healthcare, vision systems, and smart city ecosystems for intelligent, adaptive operations.',
        features: [
          'AIMA for Manufacturing',
          'AIDA for Healthcare & SaaS',
          'Vision AI for Intelligent Systems',
          'Cybertech for Smart Cities',
          'Autonomous Decision-Making',
          'Real-Time Optimization',
          'Context-Aware Intelligence',
          'Scalable Agentic Frameworks'
        ],
      },
      solutions: {
        title: 'Solutions',
        icon: Lightbulb,
        content: 'Our services include AIMA’s Industry 4.0/5.0 solutions for smart factories, AIDA’s diagnostic and SaaS platforms, Vision AI’s visual-aware chatbots, and Cybertech’s identity and IoT management, all powered by Agentic AI for cross-industry impact.',
        features: [
          'AIMA Industry 4.0/5.0 Solutions',
          'AIDA Diagnostic & SaaS Platforms',
          'Vision AI Chatbots',
          'Cybertech Identity & IoT Management',
          'Smart Factory Automation',
          'Healthcare Data Insights',
          'Visual Intelligence',
          'Secure City Ecosystems'
        ],
      },
      trending: {
        title: 'Trending',
        icon: TrendingUp,
        content: 'Trends include Industry 5.0 human-machine collaboration, agent-led healthcare diagnostics, vision-enabled conversational agents, and IoT-driven smart city security, leveraging Agentic AI for proactive and adaptive systems.',
        features: [
          'Industry 5.0 Collaboration',
          'Agent-Led Diagnostics',
          'Vision-Enabled Chatbots',
          'IoT-Driven City Security',
          'Human-Machine Synergy',
          'Real-Time Diagnostics',
          'Multi-Modal Conversations',
          'Secure IoT Networks'
        ],
      },
      futurePlans: {
        title: 'Future Plans',
        icon: Rocket,
        content: 'We’re advancing AIMA’s swarm manufacturing agents, AIDA’s federated healthcare systems, Vision AI’s autonomous assistants, and Cybertech’s self-aware city ecosystems, driving deeper autonomy, collaboration, and sustainability across industries.',
        features: [
          'AIMA Swarm Manufacturing',
          'AIDA Federated Healthcare',
          'Vision AI Autonomous Assistants',
          'Cybertech Self-Aware Cities',
          'Global Agent Coordination',
          'Privacy-Compliant Systems',
          'Proactive Visual Intelligence',
          'Sustainable City Operations'
        ],
      },
    },
  };

  // Validate industryId
  const validIndustryIds = Object.keys(industryData);
  if (!industryId || !validIndustryIds.includes(industryId)) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-200">
        <div className="text-center">
          <span className="text-4xl font-bold mb-4 text-gray-900">Industry Not Found</span>
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
        <title>CubeAI Solutions - Industry Solutions</title>
        <meta
          name="description"
          content="Explore CubeAI's industry solutions, including AI-powered automation, predictive analytics, digital transformation, and innovative technologies tailored for different sectors."
        />
        <meta
          name="keywords"
          content="CubeAI Solutions, Industry Solutions, AI solutions, Business Automation, AI-powered technology, Smart Systems, Predictive Analytics, Digital Transformation, Industry 4.0"
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
                <span className="text-5xl lg:text-7xl font-bold text-blue-900 leading-tight">
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
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-700 leading-relaxed max-w-lg"
              >
                Transforming industries with cutting-edge AI solutions and innovative technology platforms
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center space-x-4"
              >
                <a
                  href="#solutions"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Solutions
                </a>
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
      <section id="solutions" className="py-20 bg-white">
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
