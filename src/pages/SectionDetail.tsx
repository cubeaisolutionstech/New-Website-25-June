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
          content: `Cube AI’s AIMA platform transforms traditional manufacturing automation into agent-driven industrial intelligence. With real-time data sensing, contextual reasoning, and decision-capable agents, AIMA enables factories, industrial plants, and logistics operations to evolve from passive monitoring to active, self-optimizing systems. From predictive maintenance to autonomous quality control — AIMA brings Agentic AI to the very core of industrial operations, bridging the evolution from Industry 4.0 to Industry 5.0.`,
          features: [
            'Deploy edge-based AI agents to monitor machines and respond to conditions in real time',
            'Enable predictive maintenance by analyzing sensor, usage, and fault data',
            'Integrate OT (Operational Tech) with IT for unified dashboards using real-time agent insights',
            'Develop collaborative AI agents that assist human operators in decision-making',
            'Empower frontline workers with agent-powered AR/VR support for complex tasks',
            'Embed ethical and safety-aware logic in agent-based planning'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `AIMA redefines smart factories by embedding autonomous agents at every layer of industrial ecosystems — enabling seamless decision-making, real-time responsiveness, and human-machine synergy. Our integrated platform combines AI, IoT, and GenAI to offer end-to-end industrial intelligence, including automated production planning, quality inspection through Vision AI + Edge AI integration, and sustainability-driven modules to reduce energy consumption and waste.`,
          features: [
            'Agentic IoT Gateways for equipment-level intelligence',
            'Automated production planning using AI agents',
            'Quality inspection through Vision AI + Edge AI integration',
            'Human-in-the-loop agentic platforms for adaptive task delegation',
            'Intelligent manufacturing process co-design (AI + human planner collaboration)',
            'Sustainability-driven agent modules to reduce energy consumption and waste'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Digital twins, edge computing, and collaborative robots are revolutionizing modern industries. AIMA leverages real-time Digital Twins with autonomous self-correcting agents, multi-modal machine understanding using Vision + NLP fusion, micro-factories managed by decentralized agent collectives, sentient edge systems that detect worker fatigue or anomalies, resilient supply chains driven by AI collaboration agents, and ethical manufacturing audits powered by explainable AI agents.`,
          features: [
            'Real-time Digital Twins',
            'Multi-modal Machine Understanding',
            'Micro-factories',
            'Sentient Edge Systems',
            'Resilient Supply Chains',
            'Ethical Manufacturing Audits'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are advancing toward Industry 6.0 by developing self-healing, autonomous systems enhanced by quantum optimization and deep sustainability intelligence — creating next-generation factories capable of evolving in real time. Future plans include hyper-personalized production workflows using generative AI agents, closed-loop feedback systems for self-healing production chains, deeper PLC (programmable logic controller) + Agent fusion, agent-guided workforce upskilling, behavioral modeling agents for safer workspaces, and ESG-aligned AI manufacturing scorecards.`,
          features: [
            'Hyper-personalized Production Workflows',
            'Closed-loop Feedback Systems',
            'PLC + Agent Fusion',
            'Agent-guided Workforce Upskilling',
            'Behavioral Modeling Agents',
            'ESG-aligned Scorecards'
          ]
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
          content: `At Cube AI Solutions, aiDa is a next-generation Agentic AI system designed to deliver healthcare data insights and scalable SaaS solutions that empower decision-making, enhance operational efficiency, and unlock new business value. We develop advanced healthcare analytics solutions that process complex medical data to improve patient outcomes, optimize treatment protocols, and enable precision medicine through AI-powered insights and predictive modeling. From structured EHR data to unstructured physician notes, aiDa’s intelligent agents process, analyze, and generate actionable insights in real-time — enabling proactive patient care and operational excellence.`,
          features: [
            'Autonomous Healthcare Analytics',
            'Predictive Diagnostics with Generative AI',
            'HIPAA & GDPR-compliant Platforms',
            'AI-driven Interoperability',
            'Data-driven Decision Support'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our medical analytics platform includes real-time patient monitoring, drug interaction analysis, epidemic prediction models, and personalized treatment recommendations that help healthcare providers deliver better care. Solutions include agent-based patient risk prediction systems, AI-driven imaging diagnostics with generative synthesis, intelligent hospital resource optimization, and data compliance automation agents for HIPAA/GDPR.`,
          features: [
            'Agent-based Patient Risk Prediction',
            'AI-driven Imaging Diagnostics',
            'Intelligent Hospital Resource Optimization',
            'Data Compliance Automation'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Wearable health devices, telemedicine, and AI diagnostics are transforming healthcare delivery. We integrate these technologies to create comprehensive health monitoring and analysis ecosystems. Trends include predictive diagnostics using generative AI to forecast disease risks, real-time patient monitoring with AI automation tools, AI-powered clinical trial optimization for faster R&D, and agentic AI-based anomaly detection in medical imaging.`,
          features: [
            'Predictive Diagnostics',
            'Real-time Patient Monitoring',
            'AI-powered Clinical Trial Optimization',
            'Agentic AI Anomaly Detection'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing quantum-enhanced drug discovery platforms, neural interface health monitoring systems, and AI-powered surgical assistance tools that will revolutionize medical practice. Future plans include deploying autonomous AI agents to coordinate multi-hospital networks, integrating voice-based AI assistants for clinical decision-making, and expanding to genomics-based personalized treatment recommendations.`,
          features: [
            'Quantum-enhanced Drug Discovery',
            'Neural Interface Monitoring',
            'AI-powered Surgical Assistance',
            'Autonomous Multi-hospital Coordination'
          ]
        }
      },
      'saas-platforms': {
        title: 'SAAS Platforms',
        bgImage: '/image/sesaa.jpg',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, aiDa designs scalable Software-as-a-Service platforms with cutting-edge AI capabilities, modern cloud architecture, and intuitive user experiences that serve multiple industries and business verticals. With aiDa, SaaS products evolve dynamically, responding to user needs, market trends, and operational challenges without manual updates or reconfigurations — resulting in increased uptime, better user experience, and business productivity using AI.`,
          features: [
            'Multi-tenant Architecture',
            'AI Integration',
            'Scalable Infrastructure',
            'Dynamic User Experience Design'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our SAAS solutions include automated workflows, intelligent analytics dashboards, seamless integrations, and robust security features that help businesses streamline operations and drive growth. Solutions include multi-tenant SaaS intelligence layers with agent-based optimization, AI-driven workflow automation, predictive scaling using AI automation tools, and autonomous anomaly detection & remediation in SaaS operations.`,
          features: [
            'Multi-tenant SaaS Intelligence',
            'AI-driven Workflow Automation',
            'Predictive Scaling',
            'Autonomous Anomaly Detection'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Micro-SaaS, AI-first platforms, and no-code solutions are reshaping the software landscape. We leverage these trends to create more accessible and powerful business applications. Trends include SaaS platforms enhanced with agentic AI to self-adapt based on usage patterns, AI-driven customer personalization at scale, enterprise-grade AI-powered security for SaaS environments, and generative AI for automated content, reporting, and decision-making.`,
          features: [
            'Agentic AI Self-adaptation',
            'AI-driven Customer Personalization',
            'Enterprise-grade AI Security',
            'Generative AI Automation'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing autonomous SAAS platforms that can self-optimize, auto-scale based on usage patterns, and provide predictive insights to help businesses stay ahead of market trends. Future plans include fully self-optimizing SaaS ecosystems using agentic feedback loops, integration of generative AI for real-time customer support, and expansion into cross-industry SaaS AI agents for logistics, finance, and retail.`,
          features: [
            'Self-optimizing SaaS Ecosystems',
            'Generative AI Customer Support',
            'Cross-industry SaaS AI Agents'
          ]
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
          content: `At Cube AI Solutions, we go beyond traditional computer vision with Agentic AI, generative AI, and AI automation tools that empower machines to not only see but also understand, decide, and act. We develop intelligent chatbot solutions powered by advanced NLP and machine learning to enhance customer engagement and automate support, integrating Vision AI for context-aware conversations.`,
          features: [
            'Vision AI and NLP Integration',
            'Conversational AI',
            'Multi-Platform Support',
            'Industry-specific Chatbots'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our chatbot solutions include omnichannel support, sentiment analysis, automated workflows, and seamless integration with enterprise systems. Solutions include Agentic AI Customer Service Bots that adapt responses based on visual and text data, Visual Support Assistants to identify products and solve visual queries in real time, Generative AI Knowledge Bots for contextual answers, and Operational Command Bots to automate internal workflows.`,
          features: [
            'Agentic AI Customer Service Bots',
            'Visual Support Assistants',
            'Generative AI Knowledge Bots',
            'Operational Command Bots'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `The next generation of AI-powered chatbots integrates Vision AI with agentic AI reasoning, enabling chatbots to interpret images, analyze visual inputs, and provide actionable recommendations instantly. Voice-enabled chatbots, AI-driven personalization, and multi-lingual support are transforming customer interactions, enhancing experiences across industries.`,
          features: [
            'Vision AI Integration',
            'Agentic AI Reasoning',
            'Voice-enabled Chatbots',
            'Multi-lingual Support'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are advancing toward autonomous, vision-enabled enterprise assistants that proactively detect potential problems from images and act before they escalate. Future plans include developing next-gen chatbots with neural interface integration, autonomous learning, and emotional intelligence for human-like interactions, integrated with enterprise systems to increase business productivity using AI.`,
          features: [
            'Autonomous Vision-enabled Assistants',
            'Neural Interface Integration',
            'Autonomous Learning',
            'Emotional Intelligence'
          ]
        }
      }
    },
    'city': {
      'iot-services': {
        title: 'IoT Services',
        bgImage: '/image/seiot.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, Cyber Tech Innovations transforms traditional connected technologies into self-optimizing, intelligent ecosystems. We craft comprehensive Internet of Things solutions that combine generative AI, AI automation tools, and secure edge computing to deploy context-aware IoT agents, create self-healing networks, enable predictive maintenance, and integrate enterprise AI solutions seamlessly with legacy systems.`,
          features: [
            'Context-aware IoT Agents',
            'Self-healing Networks',
            'Predictive Maintenance',
            'Legacy System Integration'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our IoT platform offers real-time monitoring, predictive insights, automated responses, and secure connectivity across diverse device ecosystems. Solutions include Smart Manufacturing IoT for autonomous production line monitoring, Intelligent Supply Chain Tracking for real-time shipment tracking, Healthcare IoT for remote patient monitoring with predictive diagnostics, and Urban Infrastructure IoT for AI-enabled traffic and energy management systems.`,
          features: [
            'Smart Manufacturing IoT',
            'Intelligent Supply Chain Tracking',
            'Healthcare IoT',
            'Urban Infrastructure IoT'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `IoT is evolving from simple data-gathering devices into autonomous, AI-powered systems. 5G connectivity, edge AI, and digital twins are redefining IoT applications, enabling devices to act without constant human oversight, critical for industries moving from Industry 4.0 to Industry 5.0, where business productivity using AI is the competitive differentiator.`,
          features: [
            '5G Integration',
            'Edge AI',
            'Digital Twins',
            'Autonomous IoT Systems'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are innovating autonomous IoT networks that self-configure, self-repair, and adapt to dynamic conditions while maintaining peak performance and security. Future R&D will focus on sustainable IoT deployments powered by renewable energy AI optimization and multi-agent collaboration for resilient, scalable device networks.`,
          features: [
            'Autonomous IoT Networks',
            'Sustainable IoT Deployments',
            'Multi-agent Collaboration',
            'Renewable Energy Optimization'
          ]
        }
      },
      'auto-sizing': {
        title: 'Large Language Model',
        bgImage: '/image/sellm.webp',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, our LLM Solutions embed AI automation tools into enterprise processes, enabling context-aware document analysis, multilingual customer engagement, predictive knowledge synthesis, and seamless integration into ERP, CRM, and cloud systems. We build and deploy advanced Large Language Models (LLMs) that understand, generate, and summarize human language with high accuracy, supporting applications like chatbots, content creation, sentiment analysis, and intelligent automation.`,
          features: [
            'Context-aware Document Analysis',
            'Multilingual Customer Engagement',
            'Predictive Knowledge Synthesis',
            'ERP/CRM/Cloud Integration'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our LLM solutions are fine-tuned for domain-specific tasks, multilingual support, real-time interaction, and document analysis, integrating easily into enterprise workflows. Solutions include AI Legal Assistant for automating contract review, Intelligent Research Companion for summarizing and recommending strategies, Customer Experience AI for real-time sentiment detection, and Enterprise Knowledge Graph Integration for actionable data.`,
          features: [
            'AI Legal Assistant',
            'Intelligent Research Companion',
            'Customer Experience AI',
            'Enterprise Knowledge Graph Integration'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Large Language Models (LLMs) are no longer just text generators — with agentic AI, they become enterprise-grade decision engines capable of integrating generative AI insights into operational workflows. Techniques like retrieval-augmented generation (RAG), instruction tuning, and few-shot learning are revolutionizing how machines understand context, powering innovations in code generation, education, healthcare, and more.`,
          features: [
            'Retrieval-Augmented Generation',
            'Instruction Tuning',
            'Few-Shot Learning',
            'Enterprise-grade Decision Engines'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are researching multimodal LLMs, continual learning, and autonomous reasoning to create next-generation AI that learns from interaction, understands context deeply, and works across modalities like text, speech, and vision. We are building domain-specific LLM agents that integrate with IoT networks, enabling real-time language reasoning based on live device data, opening new possibilities in Industry 5.0.`,
          features: [
            'Multimodal LLMs',
            'Continual Learning',
            'Autonomous Reasoning',
            'IoT Network Integration'
          ]
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
          content: `At Cube AI Solutions, our CubeBotics division pioneers the fusion of agentic AI, generative AI, and AI automation tools to create enterprise AI solutions that autonomously sense, decide, and act in the physical world. We design and develop custom embedded systems and IoT solutions that power smart devices and industrial automation with seamless connectivity and real-time data processing.`,
          features: [
            'Custom Firmware Development',
            'IoT Device Integration',
            'Real-time Data Processing',
            'Hardware-Software Co-design'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our embedded and IoT solutions include industrial automation systems, smart home devices, wearable technology, and edge computing solutions with robust security features. Solutions include Predictive Maintenance Controllers to monitor and act before failures, Energy Optimization Units to regulate consumption, Edge Vision Systems for on-site defect detection, and IoT Security Modules to neutralize cyber threats in real time.`,
          features: [
            'Predictive Maintenance Controllers',
            'Energy Optimization Units',
            'Edge Vision Systems',
            'IoT Security Modules'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `The rise of edge intelligence is transforming IoT from passive data collectors into active decision-makers. AI at the edge, low-power IoT networks, and 5G-enabled devices are revolutionizing embedded systems, enabling autonomous adjustments to production lines, energy usage, or maintenance, reducing operational costs and boosting business productivity using AI.`,
          features: [
            'Edge Intelligence',
            'Low-power IoT Networks',
            '5G-enabled Devices',
            'Autonomous Adjustments'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing self-learning embedded systems, quantum-resistant security protocols, and autonomous IoT networks that adapt to environmental changes in real-time. Our roadmap includes self-evolving IoT agents that use generative AI to redesign workflows on the fly, creating self-healing industrial environments that recover from disruptions without downtime.`,
          features: [
            'Self-learning Embedded Systems',
            'Quantum-resistant Security',
            'Autonomous IoT Networks',
            'Self-healing Environments'
          ]
        }
      },
      'drone-tech': {
        title: 'Drone Technology Solutions',
        bgImage: '/image/sedro.avif',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, our CubeBotics division develops advanced drone technology for aerial imaging, industrial inspection, and autonomous delivery systems with cutting-edge computer vision and AI capabilities. We integrate Vision AI, generative AI, and AI automation tools for real-time decision-making and mission planning.`,
          features: [
            'Autonomous Navigation',
            'Vision AI Integration',
            'Generative AI Mission Planning',
            'Real-time Decision-making'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our drone solutions include precision agriculture systems, infrastructure monitoring, emergency response drones, and automated delivery networks with real-time data processing. Solutions include Surveillance & Security Drones with AI threat detection, Agricultural Intelligence Drones for precision farming, Industrial Inspection Drones for defect detection, and Disaster Response Drones for rapid deployment.`,
          features: [
            'Surveillance & Security Drones',
            'Agricultural Intelligence Drones',
            'Industrial Inspection Drones',
            'Disaster Response Drones'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Drones are evolving from remote-controlled tools to fully autonomous aerial agents. Swarm intelligence, beyond visual line of sight (BVLOS) operations, and AI-powered object recognition are transforming drone applications, enabling autonomous navigation, crop health analysis, delivery route mapping, and instant security responses.`,
          features: [
            'Swarm Intelligence',
            'BVLOS Operations',
            'AI-powered Object Recognition',
            'Autonomous Aerial Agents'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing cooperative drone swarms driven by agentic AI, quantum-enhanced navigation systems, and eco-friendly propulsion technologies for sustainable aerial solutions, transforming aerial operations into fully autonomous enterprise systems that scale effortlessly.`,
          features: [
            'Cooperative Drone Swarms',
            'Quantum-enhanced Navigation',
            'Eco-friendly Propulsion',
            'Scalable Autonomous Systems'
          ]
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
          content: `At Cube AI Solutions, our Cloud & Data Engineering services combine robust data architecture with agentic AI intelligence to deliver systems that learn, adapt, and act. We design and build scalable data pipelines to process and transform large datasets, enabling data-driven decision-making and advanced analytics with autonomous, self-optimizing capabilities.`,
          features: [
            'Autonomous Data Pipelines',
            'Generative AI Anomaly Detection',
            'AI Automation for Adaptation',
            'Enterprise-ready Analytics'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our data engineering solutions include real-time data processing, cloud-based data lakes, automated ETL workflows, and robust data governance frameworks. Solutions include Autonomous ETL/ELT Pipelines for self-learning performance optimization, Real-Time Data Streaming with AI-managed event-driven architectures, Generative AI Schema Mapping for automatic adaptation, and Enterprise AI Integration with business intelligence and operational dashboards.`,
          features: [
            'Autonomous ETL/ELT Pipelines',
            'Real-Time Data Streaming',
            'Generative AI Schema Mapping',
            'Enterprise AI Integration'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Data mesh architectures, real-time analytics, and AI-driven data pipelines are transforming data engineering. Enterprises are moving beyond static data processing to intelligent, self-optimizing systems that autonomously manage data pipelines, allowing pipelines to self-monitor, self-heal, and optimize processing logic based on live performance metrics, driving business productivity using AI.`,
          features: [
            'Data Mesh Architectures',
            'Real-time Analytics',
            'AI-driven Data Pipelines',
            'Self-monitoring Pipelines'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing autonomous data pipelines with AI-driven optimization, predictive data quality checks, and quantum-enhanced data processing for unparalleled efficiency. Future plans include integrating real-time generative AI modeling into pipeline flows, expanding multi-agent data orchestration, and partnering with cloud providers for agentic AI-ready pipeline templates.`,
          features: [
            'Real-time Generative AI Modeling',
            'Multi-agent Data Orchestration',
            'Agentic AI-ready Templates',
            'Quantum-enhanced Processing'
          ]
        }
      },
      'cloud-engineering': {
        title: 'Cloud Engineering',
        bgImage: '/image/sece.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, our Cloud & Data Engineering services provide end-to-end cloud engineering, including architecture design, migration, and optimization for scalable and secure cloud infrastructures. We design intelligent cloud infrastructures that automatically scale resources, use generative AI for cost optimization, enable self-healing environments, and integrate with data pipelines for end-to-end automation.`,
          features: [
            'Automatic Resource Scaling',
            'Generative AI Optimization',
            'Self-healing Environments',
            'End-to-end Automation'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our cloud solutions include multi-cloud architectures, serverless computing, automated scaling, and advanced security frameworks. Solutions include Autonomous Cloud Resource Management for real-time scaling and cost control, Predictive Workload Balancing using agentic AI, Generative AI Monitoring Dashboards for actionable insights, and Enterprise AI-Ready Security with AI-enhanced compliance and threat detection.`,
          features: [
            'Autonomous Cloud Resource Management',
            'Predictive Workload Balancing',
            'Generative AI Monitoring Dashboards',
            'Enterprise AI-Ready Security'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Hybrid cloud, edge computing, and AI-driven cloud management are shaping the future. The cloud is becoming self-governing with agentic AI and AI automation tools, dynamically managing compute, storage, and network resources to predict workload needs and prevent downtime, enhancing business productivity using AI.`,
          features: [
            'Hybrid Cloud',
            'Edge Computing',
            'AI-driven Cloud Management',
            'Dynamic Resource Management'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are building autonomous cloud management systems with AI-driven resource allocation, quantum-enhanced encryption, and sustainable cloud operations. Future plans include deploying multi-cloud agentic AI orchestration, expanding AI-driven disaster recovery for zero-downtime operations, and introducing generative AI capacity planning tools.`,
          features: [
            'Multi-cloud Agentic AI Orchestration',
            'AI-driven Disaster Recovery',
            'Generative AI Capacity Planning',
            'Sustainable Cloud Operations'
          ]
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
          content: `At Cube AI Solutions, we redefine Technology Solutions by fusing Agentic AI, generative AI, and AI automation tools into modern web development, creating enterprise-grade, AI-enhanced web platforms that deliver seamless, personalized user experiences.`,
          features: [
            'AI-enhanced Web Platforms',
            'Generative AI Personalization',
            'AI Automation Optimization',
            'Predictive Analytics'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our web development solutions include progressive web apps, e-commerce platforms, CMS integration, and robust security features. Solutions include AI-Integrated CMS Solutions, Adaptive Web Applications with agentic AI reasoning, Enterprise Portals with Embedded Analytics, and Multi-language, multi-tenant platforms.`,
          features: [
            'AI-Integrated CMS Solutions',
            'Adaptive Web Applications',
            'Enterprise Portals',
            'Multi-language Platforms'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `The future of web technology is autonomous, data-driven, and AI-optimized. Jamstack, serverless web apps, and AI-driven personalization are shaping modern web development, enabling businesses to move beyond static websites to Agentic AI-powered digital platforms for personalized customer experiences and predictive engagement.`,
          features: [
            'Jamstack',
            'Serverless Web Apps',
            'AI-driven Personalization',
            'Predictive Engagement'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing autonomous web platforms with AI-driven content generation, quantum-enhanced performance, and immersive WebXR experiences. We are advancing into self-learning web ecosystems that evolve based on customer behavior, market shifts, and operational goals, reducing manual updates and maximizing business agility.`,
          features: [
            'Self-learning Web Ecosystems',
            'AI-driven Content Generation',
            'Quantum-enhanced Performance',
            'WebXR Experiences'
          ]
        }
      },
      'app-development': {
        title: 'App Development',
        bgImage: '/image/seapp.png',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, we build native and cross-platform mobile applications for iOS and Android, delivering intuitive and high-performance user experiences. We leverage generative AI for natural language user interfaces, embed AI automation tools for smart notifications and analytics, and develop IoT-connected apps for operational control and monitoring.`,
          features: [
            'AI-powered Mobile Apps',
            'Generative AI Interfaces',
            'AI Automation Tools',
            'IoT-connected Apps'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our app development solutions include real-time features, push notifications, in-app analytics, and secure payment integrations. Solutions include Agentic AI-driven CRM & ERP apps, Predictive Maintenance Mobile Solutions, AI Chatbots and Voice Assistants, and Data-Intensive Apps for Healthcare, Manufacturing, and Finance.`,
          features: [
            'Agentic AI-driven CRM & ERP',
            'Predictive Maintenance Solutions',
            'AI Chatbots and Voice Assistants',
            'Data-Intensive Apps'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Mobile is becoming the intelligent control center of enterprise workflows. Low-code development, AR/VR integration, and AI-driven app personalization are transforming mobile apps, with Agentic AI enabling apps that learn from user interactions, automate repetitive actions, and deliver real-time insights.`,
          features: [
            'Low-code Development',
            'AR/VR Integration',
            'AI-driven Personalization',
            'Real-time Insights'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing next-gen mobile apps with neural interface controls, autonomous feature updates, and sustainable app architectures. Our mobile apps will evolve into self-orchestrating enterprise hubs, capable of autonomous decision-making, freeing human teams for high-value innovation.`,
          features: [
            'Neural Interface Controls',
            'Autonomous Feature Updates',
            'Sustainable App Architectures',
            'Self-orchestrating Enterprise Hubs'
          ]
        }
      },
      'business-consulting': {
        title: 'Business Consulting',
        bgImage: '/image/sebus.jpg',
        whatWeDo: {
          title: 'What We Do',
          icon: Target,
          content: `At Cube AI Solutions, we provide strategic consulting services to drive digital transformation, optimize operations, and accelerate business growth. We offer AI-first digital transformation roadmaps, implement AI automation tools for workflows, integrate generative AI into business processes, and redesign legacy systems into business productivity platforms using AI.`,
          features: [
            'AI-first Transformation Roadmaps',
            'AI Automation Implementation',
            'Generative AI Integration',
            'Legacy System Redesign'
          ]
        },
        solutions: {
          title: 'Solutions',
          icon: Lightbulb,
          content: `Our consulting services include data-driven strategy formulation, technology adoption roadmaps, organizational alignment, and performance analytics. Solutions include End-to-End AI Strategy & Execution, Cloud Migration with AI Optimization, Agentic AI Governance & Compliance Consulting, and Workforce Upskilling for AI Readiness.`,
          features: [
            'End-to-End AI Strategy',
            'Cloud Migration Optimization',
            'Agentic AI Governance',
            'Workforce Upskilling'
          ]
        },
        trending: {
          title: 'Trending',
          icon: TrendingUp,
          content: `Enterprises are autonomizing with AI-driven consulting, sustainability-focused strategies, and agile transformation. With enterprise AI solutions and agentic AI, organizations can go beyond automation to create self-managing business ecosystems, driving impactful outcomes.`,
          features: [
            'AI-driven Consulting',
            'Sustainability Strategies',
            'Agile Transformation',
            'Self-managing Ecosystems'
          ]
        },
        futurePlans: {
          title: 'Future Plans',
          icon: Rocket,
          content: `We are developing AI-powered consulting platforms, quantum-enhanced decision models, and autonomous strategy optimization tools for future-ready businesses. We are building autonomous business architectures where AI agents coordinate systems, people, and processes for real-time adaptability and maximum profitability.`,
          features: [
            'AI-powered Consulting Platforms',
            'Quantum-enhanced Decision Models',
            'Autonomous Strategy Optimization',
            'Real-time Adaptability'
          ]
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
