import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { VOICE_AGENT_KEYWORDS_STRING } from '../seo/voiceKeywords';
import {
  Sparkles,
  ArrowLeft,
  CheckCircle,
  Globe,
  Users,
  Zap,
  Shield,
  Rocket,
  Brain,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  TrendingUp,
  Settings,
  Heart,
  Eye,
  MessageCircle,
  BarChart3,
  Lock,
  Wifi,
  Gauge,
  Cpu,
  Plane,
  Server,
  Code,
  Briefcase,
  Megaphone,
  Camera,
  Mic,
  Phone,
  Calendar,
  Clock,
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 100 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const serviceData = {
    'artificial-intelligence-machine-learning-agent': {
      slug: 'artificial-intelligence-machine-learning-agent',
      title: 'AIMA – Advanced Industrial & Manufacturing Automation Powered by Agentic AI',
      subtitle: 'Empowering Industries with Autonomous, Intelligent, and Adaptive Solutions',
      color: 'from-blue-600 to-indigo-700',
      icon: Sparkles,
      sections: [
        {
          title: 'Introduction to AIMA',
          icon: Brain,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                In a world where <span className="font-bold text-blue-600">digital transformation</span> is no longer optional, businesses require more than just conventional AI — they need self-directed, decision-making <span className="font-bold text-blue-600">AI agents</span> that operate with speed, accuracy, and autonomy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">Cube AI Solutions</span> introduces AIMA (Advanced Industrial & Manufacturing Automation) — powered by <span className="font-bold text-blue-600">Agentic AI</span>, <span className="font-bold text-blue-600">generative AI</span>, and <span className="font-bold text-blue-600">AI automation tools</span> — to transform operations, boost <span className="font-bold text-blue-600">business productivity using AI</span>, and drive sustainable growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our <span className="font-bold text-blue-600">enterprise AI solutions</span> combine <span className="font-bold text-blue-600">real-time decision-making</span>, <span className="font-bold text-blue-600">predictive intelligence</span>, and <span className="font-bold text-blue-600">automation-first strategies</span> to optimize <span className="font-bold text-blue-600">Industry 4.0</span> and <span className="font-bold text-blue-600">Industry 5.0</span> ecosystems, modernize legacy systems, and ensure competitive advantage.
              </p>
            </div>
          ),
        },
        {
          title: 'Industry 4.0 with Agentic AI',
          icon: Globe,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <span className="font-bold text-blue-600">Industry 4.0</span> represents the digitally connected factory, where <span className="font-bold text-blue-600">enterprise AI solutions</span> integrate <span className="font-bold text-blue-600">IoT devices</span>, <span className="font-bold text-blue-600">robotics</span>, and <span className="font-bold text-blue-600">machine learning</span> for predictive, data-driven decisions.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities in Industry 4.0:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'AI-driven Predictive Maintenance – Minimize downtime using AI automation tools to forecast equipment failures.', icon: Gauge },
                    { text: 'Intelligent Robotics – Autonomous robots powered by Agentic AI for precision manufacturing.', icon: Cpu },
                    { text: 'Generative AI for Process Optimization – Simulating production workflows to identify improvements.', icon: Settings },
                    { text: 'Real-time Quality Control – Vision AI agents detecting defects before they reach customers.', icon: Eye },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Industry 5.0 with Agentic AI',
          icon: Users,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <span className="font-bold text-blue-600">Industry 5.0</span> moves beyond automation to <span className="font-bold text-blue-600">human-AI collaboration</span>, where <span className="font-bold text-blue-600">Agentic AI</span> augments human decision-making with <span className="font-bold text-blue-600">generative intelligence</span> and <span className="font-bold text-blue-600">real-time adaptability</span>.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities in Industry 5.0:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Human-Centric Automation – AI agents working alongside humans to enhance productivity.', icon: Users },
                    { text: 'Generative AI for Innovation – Designing new products, solutions, and processes through creative AI capabilities.', icon: Sparkles },
                    { text: 'Personalized Manufacturing – Customizing production at scale using enterprise AI solutions.', icon: Rocket },
                    { text: 'Resilient & Sustainable Operations – AI-driven energy optimization and waste reduction.', icon: Globe },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Legacy Modernization with Agentic AI',
          icon: Rocket,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Outdated IT systems can slow down innovation, increase costs, and create operational bottlenecks. <span className="font-bold text-blue-600">Cube AI Solutions</span> helps enterprises modernize <span className="font-bold text-blue-600">legacy systems</span> with <span className="font-bold text-blue-600">Agentic AI</span>, ensuring <span className="font-bold text-blue-600">compatibility</span>, <span className="font-bold text-blue-600">scalability</span>, and <span className="font-bold text-blue-600">agility</span> in the modern digital landscape.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Capabilities in Legacy Modernization:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'AI-powered Migration – Automated migration from outdated systems to cloud-native platforms.', icon: Cloud },
                    { text: 'Generative AI for Code Refactoring – Automatically rewriting and optimizing legacy code.', icon: Code },
                    { text: 'AI automation tools for Data Integration – Consolidating data from multiple systems for unified decision-making.', icon: Database },
                    { text: 'Enterprise AI solutions for Security – Modernizing security protocols with AI-driven threat detection.', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Key Features of AIMA with Agentic AI',
          icon: Settings,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">For AIMA (Overall):</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Autonomous Decision-Making – AI agents that act without manual intervention.', icon: Brain },
                    { text: 'Generative AI Simulation – Virtual modeling for industrial optimization.', icon: Sparkles },
                    { text: 'AI automation tools for end-to-end process efficiency.', icon: Zap },
                    { text: 'Enterprise-grade Security & Compliance for all solutions.', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">For Industry 4.0:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Predictive Maintenance Intelligence.', icon: Gauge },
                    { text: 'Real-time Defect Detection.', icon: Eye },
                    { text: 'Digital Twin Simulation.', icon: Globe },
                    { text: 'AI-powered Supply Chain Optimization.', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">For Industry 5.0:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Human-AI Collaborative Workflows.', icon: Users },
                    { text: 'Personalized Product Design.', icon: Rocket },
                    { text: 'Sustainable Manufacturing Intelligence.', icon: Globe },
                    { text: 'Generative AI-driven R&D.', icon: Sparkles },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">For Legacy Modernization:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'AI-powered System Migration.', icon: Cloud },
                    { text: 'Generative AI Code Transformation.', icon: Code },
                    { text: 'Intelligent Data Unification.', icon: Database },
                    { text: 'Secure Cloud-native Infrastructure.', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'artificial-intelligence-data-analysis': {
      slug: 'artificial-intelligence-data-analysis',
      title: 'AIDA – Agentic AI Data Analysis',
      subtitle: 'Transforming Data into Autonomous Intelligence',
      color: 'from-emerald-600 to-teal-700',
      icon: Database,
      sections: [
        {
          title: 'Introduction to AIDA',
          icon: Brain,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">AIDA</span> by <span className="font-bold text-blue-600">Cube AI Solutions</span> is a next-generation <span className="font-bold text-blue-600">Agentic AI platform</span> designed to revolutionize how enterprises harness <span className="font-bold text-blue-600">data analytics</span>. Moving beyond conventional AI, AIDA leverages <span className="font-bold text-blue-600">autonomous decision-making agents</span> that don’t just process data — they interpret, act, and adapt in real time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In today’s hyper-competitive business environment, <span className="font-bold text-blue-600">data</span> is the most valuable asset. With <span className="font-bold text-blue-600">generative AI</span>, <span className="font-bold text-blue-600">AI automation tools</span>, and advanced <span className="font-bold text-blue-600">enterprise AI solutions</span>, AIDA transforms raw data into <span className="font-bold text-blue-600">actionable intelligence</span> that drives <span className="font-bold text-blue-600">business productivity using AI</span>.
              </p>
            </div>
          ),
        },
        {
          title: 'Core Capabilities of AIDA',
          icon: Settings,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities of AIDA:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Autonomous Data Interpretation – Embedded AI agents that understand data context and act without manual triggers.', icon: Brain },
                    { text: 'Generative AI Insights – Create predictive models and forecasts that adapt to changing trends.', icon: Sparkles },
                    { text: 'Enterprise-Grade AI Automation Tools – Seamless integration with existing workflows, boosting operational efficiency.', icon: Zap },
                    { text: 'Scalable SaaS Delivery – Cloud-ready solutions accessible anywhere with enterprise-grade security.', icon: Cloud },
                    { text: 'Real-Time Decision Engines – Make instant, informed business decisions powered by Agentic AI.', icon: Gauge },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <span className="font-bold text-blue-600">AIDA’s Medical Data Analysis</span> capabilities empower <span className="font-bold text-blue-600">hospitals</span>, <span className="font-bold text-blue-600">clinics</span>, <span className="font-bold text-blue-600">pharmaceutical companies</span>, and <span className="font-bold text-blue-600">life sciences research organizations</span> with real-time, <span className="font-bold text-blue-600">AI-driven decision support</span>.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">How It Works:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Integrates data from EMR/EHR systems, IoT medical devices, and clinical databases.', icon: Database },
                    { text: 'Applies Agentic AI to detect anomalies, predict patient risks, and recommend treatment pathways.', icon: Brain },
                    { text: 'Uses generative AI to create adaptive models for drug discovery, disease prediction, and population health management.', icon: Sparkles },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Benefits:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Faster clinical decision-making.', icon: Zap },
                    { text: 'Improved patient outcomes with predictive analytics.', icon: Heart },
                    { text: 'Reduced operational costs through AI automation tools in data handling.', icon: BarChart3 },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'SaaS Solutions',
          icon: Cloud,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <span className="font-bold text-blue-600">AIDA’s SaaS model</span> ensures businesses access <span className="font-bold text-blue-600">enterprise AI solutions</span> without the complexity of large infrastructure investments.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Advantages:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Instant Deployment – Go live within hours, not weeks.', icon: Rocket },
                    { text: 'Pay-as-You-Grow Model – Scale AI services based on demand.', icon: TrendingUp },
                    { text: 'Enterprise-Grade Security – Data encryption, compliance, and LLM safety protocols.', icon: Shield },
                    { text: 'Continuous Learning – Agents evolve with your data, ensuring business productivity using AI improves over time.', icon: Brain },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-emerald-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'vision-ai': {
      slug: 'vision-ai',
      title: 'Agentic Vision AI – Autonomous Visual Intelligence for Enterprises',
      subtitle: 'Redefining Visual AI with Agentic Intelligence',
      color: 'from-violet-600 to-purple-700',
      icon: Eye,
      sections: [
        {
          title: 'Introduction to Agentic Vision AI',
          icon: Camera,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">Cube AI Solutions</span> redefines traditional <span className="font-bold text-blue-600">Vision AI</span> with <span className="font-bold text-blue-600">Agentic AI</span>, empowering enterprises to move beyond passive <span className="font-bold text-blue-600">image recognition</span> into <span className="font-bold text-blue-600">autonomous visual decision-making</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In conventional AI, visual systems detect and classify objects, but they still rely heavily on manual intervention. With <span className="font-bold text-blue-600">Agentic AI</span>, our vision systems perceive, interpret, and act in real time — enabling faster, smarter, and self-directed operations that boost <span className="font-bold text-blue-600">business productivity using AI</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our <span className="font-bold text-blue-600">Agentic Vision AI solutions</span> integrate <span className="font-bold text-blue-600">generative AI models</span>, <span className="font-bold text-blue-600">AI automation tools</span>, and <span className="font-bold text-blue-600">enterprise AI solutions</span> to deliver scalable, industry-specific <span className="font-bold text-blue-600">visual intelligence</span>.
              </p>
            </div>
          ),
        },
        {
          title: 'Core Capabilities of Agentic Vision AI',
          icon: Settings,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities of Agentic Vision AI:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Autonomous Visual Agents – AI that understands visual data context and executes decisions independently.', icon: Brain },
                    { text: 'Real-Time Object Tracking & Recognition – Detect anomalies, threats, or defects instantly.', icon: Eye },
                    { text: 'Generative AI-Enhanced Insights – Predict future visual patterns and anomalies using advanced models.', icon: Sparkles },
                    { text: 'Edge-Based AI Processing – Reduce latency by processing data locally, enabling immediate response.', icon: Zap },
                    { text: 'Seamless Integration – Works with enterprise ERP, CRM, IoT, and operational systems.', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-violet-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Agentic Chatbot Solutions',
          icon: MessageCircle,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We extend our <span className="font-bold text-blue-600">Agentic AI capabilities</span> into <span className="font-bold text-blue-600">Chatbot Solutions</span> that go far beyond scripted Q&A. These <span className="font-bold text-blue-600">intelligent agents</span> perceive, understand, and act — turning customer interactions into instant <span className="font-bold text-blue-600">business outcomes</span>.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities of Agentic Chatbots:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Vision-Enabled Conversations – Chatbots that can see and interpret images sent by users.', icon: Camera },
                    { text: 'Generative AI Conversations – Adaptive, context-rich responses driven by enterprise-trained LLMs.', icon: Sparkles },
                    { text: 'Automated Task Execution – Complete transactions, schedule meetings, process orders without human handoff.', icon: Zap },
                    { text: 'Omnichannel Integration – Deploy across websites, mobile apps, messaging platforms, and social media.', icon: Globe },
                    { text: 'Enterprise Data Connectivity – Securely access and use company databases for personalized, accurate responses.', icon: Database },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-violet-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Voice Agent',
          icon: Mic,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">AI-powered voice agent</span> enables natural, real-time voice interactions between users and the system, providing intelligent conversational experiences similar to an AI assistant. This advanced voice technology transforms how users interact with VisionAI, allowing seamless communication through spoken language for enhanced productivity and intuitive user experiences.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities of Voice Agent:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'AI Voice Assistant for Restaurants – Automated restaurant booking and reservation management with natural voice interactions.', icon: Mic },
                    { text: '24/7 AI Booking Assistant – Always-available voice booking support that handles reservations round-the-clock.', icon: Rocket },
                    { text: 'Natural Language Voice AI Agent – Conversational voice interface that understands and responds to booking requests naturally.', icon: MessageCircle },
                    { text: 'Voice AI with Human-like Conversation – Natural, engaging voice interactions that provide intelligent conversational experiences.', icon: Users },
                    { text: 'Automated Voice Reservation System – Complete voice-driven reservation automation that reduces manual errors and saves staff time.', icon: Zap },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'cyber-tech-innovation': {
      slug: 'cyber-tech-innovation',
      title: 'CyTI – Cyber Tech Innovation with Agentic AI',
      subtitle: 'Next-Generation Digital Security & Intelligence',
      color: 'from-red-600 to-rose-700',
      icon: Shield,
      sections: [
        {
          title: 'Introduction to CyTI',
          icon: Lock,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                In today’s hyper-connected enterprise environment, <span className="font-bold text-blue-600">cybersecurity</span> is no longer just about protection — it’s about <span className="font-bold text-blue-600">prediction</span>, <span className="font-bold text-blue-600">prevention</span>, and <span className="font-bold text-blue-600">autonomous action</span>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">Cube AI Solutions</span> transforms conventional <span className="font-bold text-blue-600">AI-powered security</span> into <span className="font-bold text-blue-600">Agentic AI–driven Cyber Tech Innovation</span>, delivering self-directed digital defense systems that adapt, learn, and respond in real time. Our solutions go beyond monitoring to create active, intelligent <span className="font-bold text-blue-600">cyber agents</span> capable of neutralizing threats before they escalate — empowering organizations to achieve higher <span className="font-bold text-blue-600">business productivity using AI</span>.
              </p>
            </div>
          ),
        },
        {
          title: 'IoT Services',
          icon: Wifi,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The <span className="font-bold text-blue-600">Internet of Things (IoT)</span> is no longer just about connected devices — it’s about <span className="font-bold text-blue-600">connected intelligence</span>.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">Agentic AI–powered IoT services</span> transform passive devices into <span className="font-bold text-blue-600">decision-making agents</span> capable of analyzing data locally, optimizing operations, and initiating <span className="font-bold text-blue-600">security protocols</span> autonomously.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key IoT Capabilities:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Edge Autonomy – Embedded agents process and act on data instantly at the device level.', icon: Cpu },
                    { text: 'Predictive Maintenance – Generative AI forecasts component failures before they happen.', icon: Gauge },
                    { text: 'Smart Security Integration – IoT systems coordinate with cybersecurity agents for unified defense.', icon: Shield },
                    { text: 'Industry 4.0 & 5.0 Alignment – Designed for automated manufacturing, logistics, and urban infrastructure.', icon: Globe },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'LLM Security Solutions',
          icon: Lock,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  As enterprises adopt <span className="font-bold text-blue-600">large language models (LLMs)</span> for advanced <span className="font-bold text-blue-600">data intelligence</span>, securing them is critical.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">LLM Security Solutions</span> safeguard <span className="font-bold text-blue-600">sensitive data</span> and prevent <span className="font-bold text-blue-600">malicious prompt injections</span>, <span className="font-bold text-blue-600">data leaks</span>, or misuse of <span className="font-bold text-blue-600">generative models</span>. By embedding <span className="font-bold text-blue-600">Agentic AI</span> into the security layer, our solutions autonomously detect suspicious patterns, enforce <span className="font-bold text-blue-600">compliance</span>, and adapt to evolving threats in real time.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">LLM Security Capabilities:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Prompt Injection Defense – Detect and neutralize malicious queries instantly.', icon: Shield },
                    { text: 'Data Privacy Enforcement – Restrict unauthorized data access using autonomous policies.', icon: Lock },
                    { text: 'Generative AI Monitoring – Audit model outputs for bias, misinformation, or data leaks.', icon: Eye },
                    { text: 'Zero-Trust AI Integration – Aligns with enterprise zero-trust architecture.', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'embedded-systems-iot': {
      slug: 'embedded-systems-iot',
      title: 'Cubebotics – Embedded Systems, IoT & Drone Technology',
      subtitle: 'Innovative Solutions for Autonomous Devices',
      color: 'from-orange-600 to-amber-700',
      icon: Cpu,
      sections: [
        {
          title: 'Introduction to Cubebotics',
          icon: Cpu,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">Cubebotics</span> is <span className="font-bold text-blue-600">Cube AI Solutions’</span> cutting-edge innovation hub for <span className="font-bold text-blue-600">embedded systems</span>, <span className="font-bold text-blue-600">IoT solutions</span>, and next-generation <span className="font-bold text-blue-600">drone technology</span>. By integrating <span className="font-bold text-blue-600">Agentic AI</span>, we go beyond conventional automation — enabling devices to think, decide, and act autonomously.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike traditional AI, which requires constant human or cloud oversight, <span className="font-bold text-blue-600">Agentic AI</span> empowers <span className="font-bold text-blue-600">embedded systems</span> to analyze data locally, make context-aware decisions in milliseconds, and adapt dynamically to real-world conditions. This evolution drives <span className="font-bold text-blue-600">enterprise AI solutions</span> that enhance <span className="font-bold text-blue-600">business productivity using AI</span> while ensuring unmatched <span className="font-bold text-blue-600">reliability</span>, <span className="font-bold text-blue-600">security</span>, and <span className="font-bold text-blue-600">scalability</span>.
              </p>
            </div>
          ),
        },
        {
          title: 'Embedded IoT Solutions with Agentic AI',
          icon: Wifi,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">embedded IoT solutions</span> are built for <span className="font-bold text-blue-600">Industry 4.0</span> and <span className="font-bold text-blue-600">Industry 5.0</span> environments, where speed, precision, and autonomy are critical.
                </p>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Enterprise Advantages:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Edge Autonomy – Localized decision-making reduces latency and dependence on the cloud.', icon: Zap },
                    { text: 'Predictive Maintenance – Generative AI predicts equipment failures before they disrupt operations.', icon: Gauge },
                    { text: 'Cybersecurity by Design – Embedded AI agents protect data and systems from real-time threats.', icon: Shield },
                    { text: 'Interoperability – Seamless integration with legacy systems, cloud platforms, and enterprise workflows.', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Drone Technology Powered by Agentic AI',
          icon: Plane,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We are redefining <span className="font-bold text-blue-600">drone capabilities</span> by embedding <span className="font-bold text-blue-600">Agentic AI</span> into aerial systems. Unlike standard programmed drones, our <span className="font-bold text-blue-600">autonomous drones</span>:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Plan and adapt routes dynamically based on live environmental data.', icon: Brain },
                    { text: 'Execute complex missions such as industrial inspections, security patrols, and disaster response with minimal human input.', icon: Rocket },
                    { text: 'Collaborate in swarms for coordinated large-scale tasks.', icon: Users },
                    { text: 'Capture and analyze high-resolution data in real time using onboard generative AI models.', icon: Camera },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Business Impact of Agentic Drones:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Faster and safer operations in hazardous environments.', icon: Zap },
                    { text: 'Real-time intelligence delivery for enterprise decision-making.', icon: Brain },
                    { text: 'Reduced operational costs with automated deployment cycles.', icon: BarChart3 },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'data-cloud-engineering': {
      slug: 'data-cloud-engineering',
      title: 'DCE – Data & Cloud Engineering with Agentic AI',
      subtitle: 'Building Resilient, Intelligent Data Infrastructures',
      color: 'from-cyan-600 to-blue-700',
      icon: Server,
      sections: [
        {
          title: 'Introduction to DCE',
          icon: Cloud,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-bold text-blue-600">Cube AI Solutions</span>, our <span className="font-bold text-blue-600">Data & Cloud Engineering (DCE)</span> services are engineered for the next generation of <span className="font-bold text-blue-600">digital enterprises</span>. By integrating <span className="font-bold text-blue-600">Agentic AI</span>, we enable <span className="font-bold text-blue-600">data ecosystems</span> that are not only intelligent but autonomously adaptive, capable of self-optimizing workflows, detecting anomalies in real time, and delivering actionable insights without constant human intervention.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike traditional data engineering methods that focus solely on collection and storage, our <span className="font-bold text-blue-600">enterprise AI solutions</span> transform raw data into <span className="font-bold text-blue-600">business productivity using AI</span> by embedding <span className="font-bold text-blue-600">autonomous agents</span> at every stage — from ingestion to analytics to deployment.
              </p>
            </div>
          ),
        },
        {
          title: 'Agentic AI-Powered Data & Cloud Engineering',
          icon: Settings,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">DCE services</span> combine <span className="font-bold text-blue-600">data engineering expertise</span>, <span className="font-bold text-blue-600">cloud-native architectures</span>, and <span className="font-bold text-blue-600">AI automation tools</span> to help enterprises build resilient, future-ready <span className="font-bold text-blue-600">data infrastructures</span>. Leveraging <span className="font-bold text-blue-600">generative AI</span> and <span className="font-bold text-blue-600">agentic AI frameworks</span>, we deliver platforms that:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Automate data cleaning, transformation, and integration.', icon: Zap },
                    { text: 'Make real-time optimization decisions without manual triggers.', icon: Brain },
                    { text: 'Scale dynamically across hybrid and multi-cloud environments.', icon: TrendingUp },
                    { text: 'Provide continuous intelligence for faster decision-making.', icon: Gauge },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Data Engineering with Agentic AI',
          icon: Database,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In today’s enterprise landscape, <span className="font-bold text-blue-600">data engineering</span> is more than pipelines and warehouses — it’s about creating self-managing, <span className="font-bold text-blue-600">intelligent data ecosystems</span>.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With <span className="font-bold text-blue-600">Agentic AI</span>, our data engineering solutions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Autonomously cleanse and enrich data from multiple sources.', icon: Settings },
                    { text: 'Apply predictive and generative AI models to forecast trends and detect anomalies.', icon: Sparkles },
                    { text: 'Enable real-time analytics without waiting for batch processing cycles.', icon: Zap },
                    { text: 'Optimize ETL/ELT pipelines with minimal human oversight.', icon: Gauge },
                    { text: 'Integrate seamlessly with legacy systems to preserve investments while modernizing capabilities.', icon: Cloud },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Key Features – Data & Cloud Engineering with Agentic AI',
          icon: Server,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8" variants={fadeInUp}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">DCE (Data & Cloud Engineering):</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'End-to-end enterprise AI solutions for data modernization.', icon: Settings },
                    { text: 'Agent-based orchestration of data pipelines and cloud operations.', icon: Brain },
                    { text: 'Real-time anomaly detection and automated resolution.', icon: Eye },
                    { text: 'Full alignment with Industry 4.0 and Industry 5.0 transformation goals.', icon: Globe },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Data Engineering:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Autonomous data cleaning, transformation, and integration.', icon: Settings },
                    { text: 'Predictive analytics powered by generative AI.', icon: Sparkles },
                    { text: 'AI-driven quality control for data reliability.', icon: CheckCircle },
                    { text: 'Seamless legacy system modernization without disruption.', icon: Cloud },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Cloud Engineering:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Intelligent scaling and cost optimization.', icon: TrendingUp },
                    { text: 'Automated compliance and security enforcement.', icon: Shield },
                    { text: 'AI-optimized data flow management.', icon: Zap },
                    { text: 'Resilient, self-healing cloud architectures.', icon: Server },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    'future-technology-services': {
      slug: 'future-technology-services',
      title: 'Technology Solutions – Future Technology & Services',
      subtitle: 'Integrating Agentic AI for Intelligent Technology Stacks',
      color: 'from-indigo-600 to-purple-700',
      icon: Monitor,
      sections: [
        {
          title: 'Introduction to Technology Solutions',
          icon: Monitor,
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-bold text-blue-600">Cube AI Solutions</span>, we believe that technology should not just support your business — it should think, adapt, and grow alongside it. Our Tech Solutions integrate <span className="font-bold text-blue-600">Agentic AI</span>, <span className="font-bold text-blue-600">generative AI</span>, and <span className="font-bold text-blue-600">AI automation tools</span> into every layer of your enterprise technology stack, ensuring that your business stays ahead in a world of continuous digital evolution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike traditional IT services, our <span className="font-bold text-blue-600">enterprise AI solutions</span> enable systems to make autonomous decisions, optimize operations in real time, and drive measurable <span className="font-bold text-blue-600">business productivity using AI</span>. From web and app development to business consulting and digital marketing, we create intelligent, self-improving solutions that redefine efficiency and innovation.
              </p>
            </div>
          ),
        },
        {
          title: 'Web Development with Agentic AI',
          icon: Monitor,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Your website is no longer just a digital presence — it’s a smart, adaptive platform that engages visitors dynamically.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">Agentic AI-driven web development solutions</span>:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Personalize user journeys based on behavior and context.', icon: Users },
                    { text: 'Use generative AI to create dynamic content, chatbots, and recommendations.', icon: Sparkles },
                    { text: 'Continuously optimize site performance through AI automation tools.', icon: Zap },
                    { text: 'Deliver enterprise-grade security, scalability, and UX design.', icon: Shield },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – Web Development:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Autonomous content personalization.', icon: Brain },
                    { text: 'AI-driven SEO optimization for higher rankings.', icon: TrendingUp },
                    { text: 'Predictive analytics for user engagement trends.', icon: BarChart3 },
                    { text: 'Seamless integration with CRM and ERP systems.', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'App Development with Agentic AI',
          icon: Smartphone,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Mobile and enterprise apps become <span className="font-bold text-blue-600">intelligent assistants</span> with <span className="font-bold text-blue-600">Agentic AI integration</span>.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">app development services</span>:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Enable apps to anticipate user needs through predictive analytics.', icon: Brain },
                    { text: 'Automate workflows using embedded AI automation tools.', icon: Zap },
                    { text: 'Integrate generative AI for natural language processing and personalization.', icon: Sparkles },
                    { text: 'Provide multi-platform deployment with real-time adaptability.', icon: Globe },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – App Development:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Context-aware personalization in real time.', icon: Users },
                    { text: 'Self-updating performance optimization.', icon: Zap },
                    { text: 'Offline intelligence for remote use cases.', icon: Wifi },
                    { text: 'Integration with IoT, AR/VR, and enterprise AI systems.', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Business Consulting with Agentic AI',
          icon: Briefcase,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Consulting is no longer about static reports — it’s about <span className="font-bold text-blue-600">continuous intelligence</span>.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">Agentic AI-powered business consulting</span> approach:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Uses enterprise AI solutions to simulate scenarios and forecast outcomes.', icon: Brain },
                    { text: 'Automates data gathering, competitive analysis, and KPI tracking.', icon: Zap },
                    { text: 'Generates real-time recommendations for operational and strategic shifts.', icon: Rocket },
                    { text: 'Supports Industry 4.0 and 5.0 transformation initiatives.', icon: Globe },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – Business Consulting:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'AI-driven decision support systems.', icon: Brain },
                    { text: 'Predictive market and customer insights.', icon: BarChart3 },
                    { text: 'Automated performance benchmarking.', icon: TrendingUp },
                    { text: 'Continuous business model optimization.', icon: Settings },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          title: 'Digital Marketing with Agentic AI',
          icon: Megaphone,
          content: (
            <div className="space-y-8">
              <motion.div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8" variants={fadeInUp}>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Marketing powered by <span className="font-bold text-blue-600">Agentic AI</span> is precise, predictive, and highly personalized.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our <span className="font-bold text-blue-600">digital marketing solutions</span>:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Use generative AI to create optimized ad creatives and campaigns.', icon: Sparkles },
                    { text: 'Apply AI automation tools for bid management, segmentation, and targeting.', icon: Zap },
                    { text: 'Deliver personalized experiences to each user in real time.', icon: Users },
                    { text: 'Continuously improve ROI through data-driven campaign intelligence.', icon: BarChart3 },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Key Features – Digital Marketing:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { text: 'Autonomous ad optimization.', icon: Zap },
                    { text: 'Predictive audience targeting.', icon: Brain },
                    { text: 'AI-enhanced SEO and content generation.', icon: TrendingUp },
                    { text: 'Real-time marketing analytics and insights.', icon: BarChart3 },
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      variants={bulletVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center bg-white rounded-xl p-4 shadow-sm"
                    >
                      <point.icon className="w-5 h-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
  };

  const service = serviceData[serviceSlug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <span className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</span>
          <p className="text-gray-700 mb-8">The requested service could not be found.</p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            aria-label="Go back to services"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;
  const baseServiceKeywords =
    'CubeAI Solutions, AI services, Artificial Intelligence, Machine Learning, Automation, Predictive Analytics, Cloud AI, Data Analytics, Digital Transformation, Intelligent Systems';
  const serviceKeywords = `${baseServiceKeywords}, ${VOICE_AGENT_KEYWORDS_STRING}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
     <Helmet>
  <title>CubeAI Solutions - AI Services</title>
  <meta
    name="description"
    content="Explore CubeAI's AI services, offering innovative solutions including automation, predictive analytics, machine learning, cloud AI, and digital transformation."
  />
  <meta
    name="keywords"
    content={serviceKeywords}
  />
</Helmet>


      {/* Navigation */}
      <nav className="p-6">
        <motion.div variants={fadeInUp}>
          <Link
            to="/services"
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Go back to services"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`text-center mb-16 p-8 rounded-3xl bg-gradient-to-r ${service.color} shadow-xl`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 mb-8 shadow-lg">
              <ServiceIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium">Service Details</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-12">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-24">
            {service.sections.map((section, index) => {
              const SectionIcon = section.icon;
              return (
                <motion.div
                  key={index}
                  variants={sectionVariants}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className="flex flex-col">
                    <div className="p-8 lg:p-12 w-full">
                      <div className="flex items-center mb-8">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                        >
                          <SectionIcon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <div className="space-y-6">{section.content}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceDetail;