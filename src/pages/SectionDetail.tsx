import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code, CheckCircle, Star, Users, Shield, Zap, TrendingUp, Globe, Smartphone, BarChart3, Brain, Eye, Database, Activity, FileText, Cpu, Camera, MessageSquare, Stethoscope, Scale, PenTool, Plane, Mail, Building2, Sparkles, Cloud, Award, Target, Lightbulb, ChevronLeft, ChevronRight, DivideIcon as LucideIcon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Define interfaces for type safety
interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullContent: string;
  features: string[];
  benefits: string[];
  techStack: string[];
  useCases: string[];
  image: string;
  icon: typeof LucideIcon; // Updated to use typeof LucideIcon
  color: string;
  bgGradient: string;
}

interface DomainContent {
  title: string;
  color: string;
  bgGradient: string;
  items: Record<string, SectionContent>;
}

type ExploreId = 'aima' | 'aida' | 'vision-ai' | 'city' | 'cubebotics' | 'dce' | 'tech-solution';

// Animated background particles
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/20 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: 10 + Math.random() * 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// Animated section wrapper component
const AnimatedSection = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionDetail = () => {
  const { exploreId, itemId } = useParams<{ exploreId: ExploreId; itemId: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  const sectionData: Record<ExploreId, DomainContent> = {
    aima: {
      title: 'AIMA - AI, ML & Agent Solutions',
      color: 'from-emerald-400 via-cyan-500 to-blue-600',
      bgGradient: 'from-emerald-50 via-cyan-50 to-blue-50',
      items: {
        'sql-automation': {
          id: 'sql-automation',
          title: 'SQL Automation Agent',
          subtitle: 'Transform Database Communication with Natural Language',
          description: 'AI-powered SQL automation that converts natural language to precise database operations',
          fullContent: 'Through Cube AI Solutions, our SQL Automation Agent transforms the way businesses communicate with their databases by intuitively translating natural language commands into precise SQL actions, giving businesses instant, trustworthy, and secure access to their information. Based on cutting-edge Agentic AI, generative AI, and AI automation technology, the solution removes the complexity of hand-coding queries and allows business users, analysts, and decision-makers to gain insights easily, refresh records, and streamline reporting processes without requiring technical expertise. Unlike conventional database management methodologies, the SQL Automation Agent ensures real-time query validation, live previews, and protection checks to enforce data integrity and governance while expediting digital transformation efforts.',
          features: [
            'Natural Language to SQL Translation',
            'Real-time Query Validation',
            'Live Data Previews',
            'Automated Compliance Checking',
            'Context-aware Query Optimization',
            'Enterprise Security Integration'
          ],
          benefits: [
            'Reduce query development time by 90%',
            'Eliminate need for SQL expertise',
            'Ensure data integrity and governance',
            'Accelerate decision-making processes',
            'Scale database operations efficiently',
            'Lower operational costs significantly'
          ],
          techStack: ['Natural Language Processing', 'Machine Learning', 'SQL Optimization', 'Cloud Integration', 'Security Protocols'],
          useCases: [
            'Business Intelligence Reporting',
            'Data Analytics for Non-technical Users',
            'Automated Report Generation',
            'Database Query Optimization',
            'Compliance and Governance Automation'
          ],
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Database,
          color: 'from-blue-500 to-cyan-600',
          bgGradient: 'from-blue-50 to-cyan-50'
        },
        'resume-filtering': {
          id: 'resume-filtering',
          title: 'Resume Filtering Agent',
          subtitle: 'AI-Powered Recruitment Revolution',
          description: 'Intelligent resume screening and candidate matching with unprecedented accuracy',
          fullContent: 'With Cube AI Solutions, Resume Filtering Agent transforms recruitment by using Agentic AI, generative AI, and automation tools based on AI to find the appropriate talent in a matter of seconds, accelerating hiring with unprecedented speed, precision, and impartiality. Traditional hiring tends to be hampered by manual resume screening, time-consuming shortlisting, and missed prospects, but our business AI solution turns the problem into a strategic benefit by parsing resumes automatically, extracting relevant skills, assessing experience, and matching candidate profiles against job postings with smart accuracy. Driven by cutting-edge natural language processing (NLP) and machine learning technology, the Resume Filtering Agent removes bias, streamlines hiring times, and only allows top talent to be seen by recruiters.',
          features: [
            'Automated Resume Parsing',
            'AI-Based Skill Extraction',
            'Intelligent Candidate Ranking',
            'Bias Reduction Algorithms',
            'ATS Integration',
            'Real-time Recruiter Dashboards'
          ],
          benefits: [
            'Reduce hiring time by 75%',
            'Eliminate unconscious bias',
            'Improve candidate quality match',
            'Scale recruitment operations',
            'Lower recruitment costs',
            'Enhanced candidate experience'
          ],
          techStack: ['Natural Language Processing', 'Machine Learning', 'Computer Vision', 'ATS APIs', 'Data Analytics'],
          useCases: [
            'High-Volume Recruitment',
            'Technical Role Screening',
            'Diversity Hiring Initiatives',
            'Executive Search',
            'Seasonal Hiring Campaigns'
          ],
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: FileText,
          color: 'from-purple-500 to-pink-600',
          bgGradient: 'from-purple-50 to-pink-50'
        },
        'customer-support-agent': {
          id: 'customer-support-agent',
          title: 'Customer Support Agent',
          subtitle: '24/7 AI-Driven Customer Engagement',
          description: 'Intelligent customer support with multi-channel automation and human-like interactions',
          fullContent: 'With Cube AI Solutions, our Customer Support Agent offers cutting-edge AI-driven customer support through 24/7 virtual interaction via chat, email, voice, and social media, facilitating effortless engagement and swift resolution for enterprises of every size. Supported by agentic AI, generative AI, and the latest AI automation tools, this solution bridges conventional support roles into intelligent, adaptive ecosystems that optimize response time, accuracy, and overall customer experience management. The Customer Support Agent combines enterprise AI technologies like natural language, sentiment analysis, and contextual awareness to deliver customized, human-like experiences without sacrificing the scalability and efficiency that today\'s enterprises require.',
          features: [
            'Multi-channel Support (Chat, Email, Voice)',
            'Sentiment Analysis',
            'Intelligent Escalation',
            'Real-time Language Translation',
            'Knowledge Base Integration',
            'Performance Analytics Dashboard'
          ],
          benefits: [
            'Reduce response time by 80%',
            'Lower support costs by 60%',
            'Improve customer satisfaction scores',
            'Scale support operations globally',
            'Provide 24/7 availability',
            'Maintain consistent service quality'
          ],
          techStack: ['Conversational AI', 'Natural Language Understanding', 'Sentiment Analysis', 'CRM Integration', 'Analytics Platform'],
          useCases: [
            'E-commerce Customer Support',
            'Technical Help Desk',
            'Multi-language Support',
            'Complaint Resolution',
            'Product Information Queries'
          ],
          image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: MessageSquare,
          color: 'from-green-500 to-blue-600',
          bgGradient: 'from-green-50 to-blue-50'
        },
        'voice-clinical-agent': {
          id: 'voice-clinical-agent',
          title: 'Voice Activated Clinical Intelligence Agent',
          subtitle: 'Hands-Free Healthcare Documentation',
          description: 'Voice-enabled clinical assistant for real-time patient data management',
          fullContent: 'At Cube AI Solutions, our Voice-Activated Clinical Intelligence Agent is revolutionizing healthcare today by allowing real-time patient tracking, analysis of medical data, and clinical decision support by using easy-to-understand voice commands. Based on agentic AI, generative AI, and leading-edge AI automation tools, the solution allows doctors, nurses, and healthcare administrators to access and update patient records hands-free, with speedier and more accurate clinical workflows. With effortless integration into hospital charts, electronic health records (EHR), and digital boards, the agent provides voice-guided status notifications, predictive analytics, and context-aware insights that enhance care delivery and minimize administrative workload.',
          features: [
            'Voice Command Recognition',
            'EHR Integration',
            'Real-time Patient Monitoring',
            'Predictive Health Analytics',
            'HIPAA Compliance',
            'Multi-language Medical Terminology'
          ],
          benefits: [
            'Reduce documentation time by 70%',
            'Improve clinical workflow efficiency',
            'Enhance patient care quality',
            'Minimize administrative burden',
            'Ensure regulatory compliance',
            'Enable hands-free operations'
          ],
          techStack: ['Speech Recognition', 'Medical NLP', 'EHR APIs', 'Predictive Analytics', 'HIPAA Security'],
          useCases: [
            'Hospital Ward Management',
            'Emergency Room Documentation',
            'Surgical Procedure Logging',
            'Patient Monitoring',
            'Medical Research Data Collection'
          ],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Stethoscope,
          color: 'from-red-500 to-pink-600',
          bgGradient: 'from-red-50 to-pink-50'
        },
        'medical-agent': {
          id: 'medical-agent',
          title: 'Hospital Management System',
          subtitle: 'Comprehensive Healthcare Operations Management',
          description: 'AI-driven hospital management with automated scheduling and resource optimization',
          fullContent: 'At Cube AI Solutions, our Hospital Management Agent is revolutionizing healthcare administration with a centralized, AI-driven platform that automates appointments, staff scheduling, patient management, and hospital resource allocation with unparalleled efficiency. With the strength of agentic AI, generative AI, and next-generation AI automation capabilities, the solution enables hospitals, clinics, and health networks to streamline operations, minimize administrative complexity, and deliver frictionless patient experiences. With smart capabilities like automated scheduling, electronic reminders, bed management, staff assignment, and real-time analytics dashboards, the Hospital Management Agent maximizes resource utilization with reduced delays and errors.',
          features: [
            'Automated Appointment Scheduling',
            'Staff Resource Management',
            'Bed Allocation Optimization',
            'Patient Flow Monitoring',
            'Real-time Analytics Dashboard',
            'Billing Integration'
          ],
          benefits: [
            'Optimize resource utilization by 85%',
            'Reduce patient wait times',
            'Improve staff productivity',
            'Minimize operational costs',
            'Enhanced patient experience',
            'Streamlined administrative processes'
          ],
          techStack: ['Healthcare Management Systems', 'Predictive Analytics', 'Resource Optimization', 'Integration APIs', 'Real-time Monitoring'],
          useCases: [
            'Large Hospital Networks',
            'Specialty Clinics',
            'Emergency Department Management',
            'Surgical Suite Scheduling',
            'Multi-location Healthcare Systems'
          ],
          image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Activity,
          color: 'from-blue-600 to-purple-600',
          bgGradient: 'from-blue-50 to-purple-50'
        },
        'legal-document-analyzer': {
          id: 'legal-document-analyzer',
          title: 'Legal Document Analyzer Agent',
          subtitle: 'AI-Powered Contract Intelligence',
          description: 'Smart legal document analysis with automated compliance checking and risk assessment',
          fullContent: 'Our Legal Document Analyzer Agent at Cube AI Solutions is revolutionizing the legal sector using AI-based contract examination, automation of compliance, and smart document analysis that enables businesses, law firms, and in-house corporate legal teams to automate processes with unprecedented speed and accuracy. Driven by agentic AI, generative AI, and cutting-edge AI automation platforms, this solution interprets sophisticated legal terminology, scrutinizes agreements, and extracts pivotal clauses, obligations, and timelines with accuracy—radically minimizing labor effort and risk. Equipped with functionality like automated risk alerts, compliance checking, contextual suggestions, and executive-level summaries, the Legal Document Analyzer Agent enables organizations to enhance decision-making, fortify regulatory compliance, and speed up contract lifecycles.',
          features: [
            'Advanced Legal Text Analysis',
            'Contract Risk Assessment',
            'Automated Compliance Checking',
            'Key Terms Extraction',
            'Due Diligence Automation',
            'Legal Research Integration'
          ],
          benefits: [
            'Reduce document review time by 90%',
            'Minimize legal risks',
            'Ensure regulatory compliance',
            'Accelerate contract negotiations',
            'Lower legal operational costs',
            'Improve accuracy of legal analysis'
          ],
          techStack: ['Legal NLP', 'Document Processing', 'Risk Analytics', 'Compliance Frameworks', 'Legal Databases'],
          useCases: [
            'Contract Review and Analysis',
            'Due Diligence Processes',
            'Compliance Audits',
            'Legal Research',
            'M&A Document Analysis'
          ],
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Scale,
          color: 'from-indigo-500 to-purple-600',
          bgGradient: 'from-indigo-50 to-purple-50'
        },
        'lead-generation-agent': {
          id: 'lead-generation-agent',
          title: 'Lead Generation Agent',
          subtitle: 'AI-Powered Sales Pipeline Acceleration',
          description: 'Intelligent lead capture, qualification, and nurturing across multiple channels',
          fullContent: 'In Cube AI Solutions, our Lead Generation Agent helps businesses turn clicks into clients by using agentic AI, generative AI, and next-generation AI automation tools to capture, qualify, and nurture leads with precision from multiple digital channels. Built for today\'s enterprises, this smart solution automates website, LinkedIn, online directory, and social media platform lead capture and ensures no lead is left behind. With lead scoring, filtering, and CRM integration built-in, Lead Generation Agent allows sales and marketing teams to prioritize high-value leads, enhance conversion rates, and drive pipeline acceleration.',
          features: [
            'Multi-channel Lead Capture',
            'AI-powered Lead Scoring',
            'Automated Qualification',
            'CRM Integration',
            'Behavioral Analytics',
            'Lead Nurturing Automation'
          ],
          benefits: [
            'Increase lead generation by 300%',
            'Improve conversion rates by 65%',
            'Reduce cost per lead',
            'Accelerate sales cycles',
            'Better lead quality',
            'Enhanced ROI measurement'
          ],
          techStack: ['Lead Intelligence', 'CRM APIs', 'Marketing Automation', 'Data Enrichment', 'Predictive Analytics'],
          useCases: [
            'B2B Sales Acceleration',
            'Marketing Campaign Optimization',
            'Account-Based Marketing',
            'E-commerce Lead Generation',
            'SaaS Customer Acquisition'
          ],
          image: 'https://images.unsplash.com/photo-1460925895917-dccba630e52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Users,
          color: 'from-orange-500 to-red-600',
          bgGradient: 'from-orange-50 to-red-50'
        },
        'linkedin-content-agent': {
          id: 'linkedin-content-agent',
          title: 'LinkedIn Content Creation Agent',
          subtitle: 'Personal Brand Amplification with AI',
          description: 'AI-crafted LinkedIn content strategies for enhanced professional engagement',
          fullContent: 'At Cube AI Solutions, our LinkedIn Content Creation Agent enables business leaders, professionals, and companies to turbocharge their personal brand and online presence with AI-powered, trend-inspired, and customized content solutions. Based on agentic AI, generative AI, and sophisticated AI automation tools, the smart solution processes industry trends, audience interest, and engagement metrics to create engaging LinkedIn posts, articles, and updates that appeal to the right audience at the right moment. With such capabilities as tone and style adjustment, auto-scheduling, engagement monitoring, and instant performance insights, the LinkedIn Content Creation Agent helps professionals always post compelling content that generates visibility, credibility, and networking opportunities.',
          features: [
            'AI Content Generation',
            'Trend Analysis Integration',
            'Engagement Optimization',
            'Auto-scheduling',
            'Performance Analytics',
            'Brand Voice Consistency'
          ],
          benefits: [
            'Increase LinkedIn engagement by 400%',
            'Save content creation time by 80%',
            'Build thought leadership',
            'Expand professional network',
            'Generate quality leads',
            'Maintain consistent posting schedule'
          ],
          techStack: ['Content AI', 'Social Media APIs', 'Trend Analytics', 'Engagement Tracking', 'Brand Intelligence'],
          useCases: [
            'Executive Thought Leadership',
            'Company Brand Building',
            'Lead Generation Content',
            'Industry Expertise Showcase',
            'Professional Network Growth'
          ],
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: PenTool,
          color: 'from-blue-600 to-cyan-600',
          bgGradient: 'from-blue-50 to-cyan-50'
        },
        'travel-planner-agent': {
          id: 'travel-planner-agent',
          title: 'Travel Planner Agent',
          subtitle: 'Intelligent Travel Experience Optimization',
          description: 'AI-powered travel planning with personalized recommendations and real-time optimization',
          fullContent: 'Our Travel Planner Agent at Cube AI Solutions is revolutionizing how people and businesses plan their travels using AI-based travel planning that is intelligent, real-time, and personalized. The solution harnesses the capabilities of agentic AI, generative AI, and sophisticated AI automation technologies to design tailored itineraries, provide real-time flight and hotel recommendations, and offer cost-effective, preference-driven suggestions that constantly evolve based on user requirements. In contrast to conventional booking sites, our AI-based travel planning application combines enterprise AI products like predictive analytics, contextual personalization, and intelligent notifications to provide a seamless end-to-end travel experience.',
          features: [
            'Personalized Itinerary Creation',
            'Real-time Price Optimization',
            'Dynamic Rescheduling',
            'Local Recommendation Engine',
            'Expense Tracking',
            'Travel Disruption Management'
          ],
          benefits: [
            'Save travel planning time by 90%',
            'Reduce travel costs by 25%',
            'Eliminate booking complexity',
            'Get personalized experiences',
            'Real-time travel assistance',
            'Seamless expense management'
          ],
          techStack: ['Travel APIs', 'Recommendation Engine', 'Price Analytics', 'Location Intelligence', 'Mobile Integration'],
          useCases: [
            'Business Travel Management',
            'Corporate Event Planning',
            'Leisure Travel Optimization',
            'Group Travel Coordination',
            'Travel Policy Compliance'
          ],
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Plane,
          color: 'from-teal-500 to-blue-600',
          bgGradient: 'from-teal-50 to-blue-50'
        },
        'email-automation-agent': {
          id: 'email-automation-agent',
          title: 'Email Automation Agent',
          subtitle: 'Smart Email Campaign Intelligence',
          description: 'AI-driven email marketing with personalized content and behavioral optimization',
          fullContent: 'At Cube AI Solutions, our Email Automation Agent enables organizations to power smarter email campaigns, deeper engagement, and increased conversions through the capabilities of agentic AI, generative AI, and sophisticated AI automation capabilities. Built to eradicate the inefficiencies of human email marketing, this smart solution automates email campaign creation, personalization, and scheduling while responding to recipient behavior in real time. With capabilities including AI-driven personalized message composition, send-time optimization scheduling, auto-follow-up, and sophisticated performance analytics, the Email Automation Agent makes it possible for companies to get the right message to the right people at the right moment.',
          features: [
            'AI Content Personalization',
            'Send-time Optimization',
            'Behavioral Trigger Campaigns',
            'A/B Testing Automation',
            'Deliverability Optimization',
            'Advanced Analytics Dashboard'
          ],
          benefits: [
            'Increase open rates by 45%',
            'Improve click-through rates by 60%',
            'Reduce unsubscribe rates',
            'Automate campaign management',
            'Enhance customer lifetime value',
            'Boost email ROI significantly'
          ],
          techStack: ['Email Platforms', 'ML Personalization', 'Behavioral Analytics', 'CRM Integration', 'Performance Tracking'],
          useCases: [
            'E-commerce Email Marketing',
            'Lead Nurturing Campaigns',
            'Customer Retention Programs',
            'Newsletter Automation',
            'Transactional Email Optimization'
          ],
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Mail,
          color: 'from-pink-500 to-rose-600',
          bgGradient: 'from-pink-50 to-rose-50'
        },
        'invoice-examination': {
          id: 'invoice-examination',
          title: 'Invoice Examination Agent',
          subtitle: 'Intelligent Financial Document Processing',
          description: 'AI-powered invoice validation with fraud detection and automated processing',
          fullContent: 'Smart invoice processing and validation system with fraud detection capabilities. Our Invoice Examination Agent uses advanced AI algorithms to automatically process, validate, and analyze invoices with unprecedented accuracy. The system detects anomalies, prevents fraud, and ensures compliance with financial regulations while streamlining accounts payable processes.',
          features: [
            'Automated Invoice Processing',
            'Fraud Detection Algorithms',
            'Compliance Validation',
            'Data Extraction Accuracy',
            'ERP System Integration',
            'Real-time Anomaly Detection'
          ],
          benefits: [
            'Reduce processing time by 85%',
            'Prevent fraudulent invoices',
            'Ensure regulatory compliance',
            'Minimize manual errors',
            'Accelerate payment cycles',
            'Lower operational costs'
          ],
          techStack: ['OCR Technology', 'Machine Learning', 'Fraud Detection', 'ERP APIs', 'Document Processing'],
          useCases: [
            'Accounts Payable Automation',
            'Vendor Invoice Management',
            'Financial Compliance Audits',
            'Expense Management',
            'Multi-entity Processing'
          ],
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: FileText,
          color: 'from-yellow-500 to-orange-600',
          bgGradient: 'from-yellow-50 to-orange-50'
        },
        'excel-to-pdf': {
          id: 'excel-to-pdf',
          title: 'Excel to PDF Transformation Agent',
          subtitle: 'Advanced Document Conversion Intelligence',
          description: 'AI-powered Excel to PowerPoint presentation automation with data visualization',
          fullContent: 'At Cube AI Solutions, our Excel-to-PowerPoint Presentation Agent in Conversational AI offers enterprises to change how they handle reporting and presentations by free-ing them from the inefficiencies of manual data preparation, consolidation, and formatting. Manual preparation of monthly reports from disparate Excel sheets is labor-intensive, prone to errors, and resource-wasteful, tending to cause productivity loss, inconsistency in reporting, and delay in decision-making. Our agentic AI, generative AI, and high-end AI automation tools-powered intelligent solution fully automates the process by merging the data from numerous spreadsheets into a single structured sheet and automatically creating professional PowerPoint presentations with charts, tables, and insights using predefined templates.',
          features: [
            'Automated Data Consolidation',
            'Professional Template Library',
            'Dynamic Chart Generation',
            'Natural Language Insights',
            'Multi-format Export',
            'Brand Consistency Enforcement'
          ],
          benefits: [
            'Reduce report creation time by 95%',
            'Eliminate formatting inconsistencies',
            'Improve presentation quality',
            'Enable faster decision-making',
            'Scale reporting processes',
            'Maintain brand standards'
          ],
          techStack: ['Document Processing', 'Data Visualization', 'Template Engine', 'Natural Language Generation', 'Export APIs'],
          useCases: [
            'Financial Reporting',
            'Business Performance Dashboards',
            'Sales Analytics Presentations',
            'Executive Summaries',
            'Operational Reports'
          ],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: FileText,
          color: 'from-green-500 to-teal-600',
          bgGradient: 'from-green-50 to-teal-50'
        },
        'pdf-to-excel': {
          id: 'pdf-to-excel',
          title: 'PDF to Excel Data Transformation Agent',
          subtitle: 'Intelligent Document Data Extraction',
          description: 'AI-driven PDF to Excel conversion with advanced table recognition and data preservation',
          fullContent: 'In Cube AI Solutions, our AI-Driven PDF to Excel Data Transformation Agent transforms the management of unstructured and semi-structured data for enterprises through the use of agentic AI, generative AI, and sophisticated AI automation technologies to provide accurate, efficient, and scalable data conversion. Manual, time-consuming, and error-ridden traditional approaches to extracting data from PDF to Excel result in formatting discrepancies, data loss, and inefficiencies in operations. Our smart solution addresses these issues with machine learning, natural language processing (NLP), and automated mapping of data, providing 99.9% accuracy in the conversion of even the most intricate tables, reports, and documents into neatly formatted, structured Excel files.',
          features: [
            'Advanced OCR Technology',
            'Table Structure Recognition',
            'Format Preservation',
            'Batch Processing Capabilities',
            'Data Validation Checks',
            'Custom Mapping Rules'
          ],
          benefits: [
            'Achieve 99.9% extraction accuracy',
            'Eliminate manual data entry',
            'Preserve original formatting',
            'Process multiple documents simultaneously',
            'Reduce operational costs',
            'Accelerate data workflows'
          ],
          techStack: ['OCR Technology', 'Computer Vision', 'Data Processing', 'Machine Learning', 'Document APIs'],
          useCases: [
            'Financial Statement Processing',
            'Invoice Data Extraction',
            'Report Digitization',
            'Compliance Documentation',
            'Research Data Collection'
          ],
          image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: FileText,
          color: 'from-purple-500 to-indigo-600',
          bgGradient: 'from-purple-50 to-indigo-50'
        },
        'logistics-automation': {
          id: 'logistics-automation',
          title: 'Smart Logistics Automation Agent',
          subtitle: 'End-to-End Supply Chain Intelligence',
          description: 'AI-powered logistics optimization with predictive analytics and real-time tracking',
          fullContent: 'In Cube AI Solutions, our Logistics & Supply Chain Agent equips businesses with intelligent logistics and instant decision-making by tapping the synergized strength of agentic AI, generative AI, and next-generation AI automation tools to optimize end-to-end processes in transport, inventory, and delivery networks. This smart solution offers businesses route optimization, ETA estimation, real-time inventory tracking, demand prediction, and automated notification, maximizing efficiency and cost savings and enhancing on-time delivery performance.',
          features: [
            'Route Optimization Algorithms',
            'Real-time Inventory Tracking',
            'Demand Forecasting',
            'Automated Notifications',
            'Performance Analytics',
            'Third-party Integrations'
          ],
          benefits: [
            'Reduce logistics costs by 40%',
            'Improve delivery times by 35%',
            'Optimize inventory levels',
            'Minimize supply chain disruptions',
            'Enhance customer satisfaction',
            'Increase operational efficiency'
          ],
          techStack: ['Route Optimization', 'IoT Integration', 'Predictive Analytics', 'ERP Systems', 'Mobile Platforms'],
          useCases: [
            'E-commerce Fulfillment',
            'Manufacturing Supply Chain',
            'Retail Distribution',
            'Food Delivery Services',
            'Healthcare Logistics'
          ],
          image: 'https://images.unsplash.com/photo-1566328151448-0ad0e4b41f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Zap,
          color: 'from-amber-500 to-orange-600',
          bgGradient: 'from-amber-50 to-orange-50'
        },
        'legacy-modernization': {
          id: 'legacy-modernization',
          title: 'Legacy System Transformation Agent',
          subtitle: 'AI-Driven Digital Modernization',
          description: 'Modernize outdated systems with AI-driven platforms for seamless integration',
          fullContent: 'Transform your legacy systems into modern, efficient, and scalable platforms with our AI-driven modernization solution. Our Legacy System Transformation Agent analyzes existing systems, identifies modernization opportunities, and provides automated migration paths that preserve business logic while enabling new capabilities and integrations.',
          features: [
            'Legacy System Analysis',
            'Automated Migration Planning',
            'Code Modernization',
            'API Integration Layer',
            'Data Migration Tools',
            'Performance Optimization'
          ],
          benefits: [
            'Reduce system maintenance costs by 60%',
            'Improve system performance by 300%',
            'Enable modern integrations',
            'Enhance security posture',
            'Accelerate development cycles',
            'Future-proof technology stack'
          ],
          techStack: ['System Analysis', 'Migration Tools', 'API Development', 'Cloud Platforms', 'Security Frameworks'],
          useCases: [
            'Mainframe Modernization',
            'Database Migration',
            'Application Replatforming',
            'API Gateway Implementation',
            'Cloud Migration Projects'
          ],
          image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Database,
          color: 'from-slate-500 to-gray-600',
          bgGradient: 'from-slate-50 to-gray-50'
        },
        'industry-40': {
          id: 'industry-40',
          title: 'Industry 4.0 & 5.0 Innovation Agent',
          subtitle: 'Smart Manufacturing Revolution',
          description: 'Cutting-edge smart manufacturing powered by AI, IoT, and advanced analytics',
          fullContent: 'Transform your manufacturing operations with our Industry 4.0 & 5.0 Innovation Agent that combines AI, IoT, robotics, and advanced analytics to create intelligent, connected, and sustainable manufacturing environments. This comprehensive solution enables predictive maintenance, quality control automation, and real-time production optimization.',
          features: [
            'IoT Sensor Integration',
            'Predictive Maintenance',
            'Quality Control Automation',
            'Production Optimization',
            'Digital Twin Technology',
            'Sustainability Analytics'
          ],
          benefits: [
            'Reduce downtime by 50%',
            'Improve product quality by 40%',
            'Optimize energy consumption',
            'Enhance worker safety',
            'Accelerate production cycles',
            'Enable sustainable operations'
          ],
          techStack: ['IoT Platforms', 'Machine Learning', 'Digital Twins', 'Robotics Integration', 'Analytics Dashboards'],
          useCases: [
            'Smart Factory Implementation',
            'Predictive Maintenance Programs',
            'Quality Assurance Automation',
            'Energy Management Systems',
            'Supply Chain Integration'
          ],
          image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Cpu,
          color: 'from-blue-600 to-indigo-700',
          bgGradient: 'from-blue-50 to-indigo-50'
        }
      }
    },
    aida: {
      title: 'AIDA - AI & Data Analysis Solutions',
      color: 'from-orange-400 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 via-red-50 to-pink-50',
      items: {
        'manufacture-analysis': {
          id: 'manufacture-analysis',
          title: 'Manufacturing Data Analysis Agent',
          subtitle: 'Production Intelligence & Optimization',
          description: 'AI-powered manufacturing analytics with real-time monitoring and predictive insights',
          fullContent: 'At Cube AI Solutions, our Manufacturing Data Analysis platform enables businesses to unlock the true power of their production data through the integration of agentic AI, machine learning, and sophisticated analytics to power efficiency, reliability, and cost savings. In conventional manufacturing, data is usually spread out on machines, systems, and sensors, and hence it is challenging to derive timely insights. This leads to unplanned downtime, reactive maintenance, misallocation of resources, escalating costs, and poor product quality. Our manufacturing analytics solution, driven by artificial intelligence, addresses these issues by aggregating real-time sensor data from PLCs, SCADA, and IoT sensors into one system to support predictive maintenance, anomaly detection, prescriptive analytics, and root cause analysis. Utilizing time-series modeling, LSTM/GRU deep learning, random forest, autoencoders, and Cox regression, the platform forecasts failures ahead of time, minimizes unplanned shutdowns, and maximizes machine usage. AI agents have the major function: Monitoring Agents constantly monitor parameters like vibration, pressure, temperature, and flow; Anomaly Detection Agents identify unusual patterns; Prediction Agents predict impending breakdowns; Maintenance Planner Agents suggest service schedules and allocate technicians; and Optimization Agents automatically change process parameters for energy and material optimization. This ecosystem fits harmoniously into enterprise AI systems, ERP systems, and visualization tools such as Power BI and Grafana, making decision-makers\' actionable insights at their fingertips. Built for Industry 4.0 and Industry 5.0 smart manufacturing environments, our solution not only prolongs machine life, lowers maintenance expenses, and enhances product quality, but also enables enterprises with digital twins, federated learning, and conversational AI interfaces for seamless operations. By integrating business productivity with AI into production, Cube AI Solutions allows businesses to break free from reactive management to a future of intelligent, autonomous, and resilient production systems that bring sustainable growth, operational excellence, and a competitive advantage.',
          features: [
            'Real-time Production Monitoring',
            'Quality Analytics Dashboard',
            'OEE Optimization',
            'Predictive Quality Control',
            'Waste Reduction Analytics',
            'Performance Benchmarking'
          ],
          benefits: [
            'Improve production efficiency by 35%',
            'Reduce quality defects by 50%',
            'Optimize resource utilization',
            'Minimize production downtime',
            'Lower manufacturing costs',
            'Enhance quality consistency'
          ],
          techStack: ['Manufacturing Analytics', 'IoT Integration', 'Statistical Analysis', 'Machine Learning', 'Real-time Dashboards'],
          useCases: [
            'Automotive Manufacturing',
            'Electronics Production',
            'Food Processing',
            'Pharmaceutical Manufacturing',
            'Textile Production'
          ],
          image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Database,
          color: 'from-blue-500 to-indigo-600',
          bgGradient: 'from-blue-50 to-indigo-50'
        },
        'hr-analysis': {
          id: 'hr-analysis',
          title: 'HR Data Analysis Agent',
          subtitle: 'Workforce Intelligence & Performance Analytics',
          description: 'AI-driven HR analytics with predictive workforce modeling and employee insights',
          fullContent: 'At Cube AI Solutions, our HR Data Analysis solution takes advantage of agentic AI, sophisticated analytics, and Power BI integration to revolutionize conventional HR management into a data-driven, smart, and automated system that maximizes workforce productivity and decision-making. Manual HR processes, poor attendance management, excessive attrition, irregular reporting, and no real-time visibility plague most organizations, causing inefficiencies and declining employee satisfaction. Our HR analytics platform powered by AI combines employee information, attendance data (in-time, out-time, and reason for absence), workforce facts (median age, gender split, salary range, location), and performance indicators into one comprehensive dashboard. Attrition analysis, heat map charts, numerical variable histograms, and predictive workforce forecasts are included in the features that enable HR leaders to receive actionable insights for improved planning, retention, and compliance management. The platform streamlines sophisticated HR operations such as recruitment and resignation metrics, loan approval follow-ups, salary software integrations, and Excel-based output reports, diminishing manual labor and inaccuracies. It also facilitates shift planning, monthly workforce and production reporting, and real-time daily updates (estimate vs actual) to maximize resource allocation and operational effectiveness. By integrating enterprise AI solutions, natural language processing, and predictive analytics with HR operations, our solution not only enhances transparency but also equips organizations to take pre-emptive action for talent preservation, performance enhancement, and workforce satisfaction. Built for Industry 4.0 and Industry 5.0 transformation-adopting businesses, Cube AI Solutions\' HR Data Analytics platform allows HR teams to graduate from static reports to intelligent, automated, and real-time decision-making systems. With business efficiency powered by AI at the center, this solution optimizes productivity, lowers operational expenses, and builds a future-proof HR environment that fuels sustainable growth, employee engagement, and organizational excellence.',
          features: [
            'Employee Performance Analytics',
            'Retention Prediction Models',
            'Engagement Monitoring',
            'Talent Pipeline Analysis',
            'Compensation Analytics',
            'Diversity & Inclusion Metrics'
          ],
          benefits: [
            'Reduce employee turnover by 30%',
            'Improve hiring quality by 40%',
            'Optimize compensation strategies',
            'Enhance employee engagement',
            'Accelerate talent development',
            'Strengthen organizational culture'
          ],
          techStack: ['HR Analytics', 'Predictive Modeling', 'Employee Surveys', 'Performance Management', 'Data Visualization'],
          useCases: [
            'Talent Retention Programs',
            'Performance Management',
            'Recruitment Optimization',
            'Succession Planning',
            'Employee Engagement Initiatives'
          ],
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: BarChart3,
          color: 'from-green-500 to-emerald-600',
          bgGradient: 'from-green-50 to-emerald-50'
        },
        'restaurant-analysis': {
          id: 'restaurant-analysis',
          title: 'Restaurant Analytics Agent',
          subtitle: 'Food Service Business Intelligence',
          description: 'Comprehensive restaurant analytics for sales, inventory, and customer behavior optimization',
          fullContent: 'At Cube AI Solutions, our Restaurant Data Analysis platform harnesses the potential of agentic AI, predictive analytics, and business intelligence to reinvent restaurant operations into intelligent, data-driven environments that achieve maximum efficiency, profitability, and customer satisfaction. Conventional restaurant management tends to be bogged down by manual reporting, uneven demand forecasting, sub-optimal use of inventory, and absence of real-time customer insights, resulting in operational inefficiencies and lost revenue. Our restaurant analytics platform powered by AI brings together data from POS systems, reservations, orders, customer reviews, supply chain inputs, and workforce management dashboards into one platform, enabling actionable insights for informed decision-making. Restaurants can forecast peak hours, lower food waste, and maximize profit margins through real-time analytics, AI-based demand forecasting, sales trend analysis, and inventory optimization. The solution also includes customer sentiment analysis, loyalty measurement, and personalization engines, assisting restaurants in crafting targeted promotions, building guest loyalty, and driving repeat visits. By integrating enterprise AI solutions, Power BI dashboards, and natural language reporting, managers can monitor daily performance metrics, workforce productivity, and financial KPIs without the need for manual intervention. Features such as automated workforce scheduling, menu performance measurement, and supplier performance measurement also simplify operations across several outlets. Developed for businesses adopting Industry 4.0 and Industry 5.0 digital evolution, Cube AI Solutions\' Restaurant Data Analytics platform equips owners, managers, and stakeholders to realize improved business productivity with AI, maximize customer experience, and minimize operational risks. With our solution, regardless of whether you have a single outlet, a cloud kitchen, or multiple restaurant chains, you can have the scalability, intelligence, and automation required to succeed in the competitive F&B space. Through the convergence of data analytics, customer intelligence, and AI automation solutions, Cube AI Solutions provides restaurants with future-proof insights that facilitate sustainable growth, operational excellence, and better dining experiences.',
          features: [
            'Sales Performance Analytics',
            'Menu Engineering Intelligence',
            'Inventory Optimization',
            'Customer Behavior Analysis',
            'Staff Performance Metrics',
            'Profit Margin Analysis'
          ],
          benefits: [
            'Increase revenue by 25%',
            'Reduce food waste by 40%',
            'Optimize menu profitability',
            'Improve customer satisfaction',
            'Streamline operations',
            'Enhance staff productivity'
          ],
          techStack: ['POS Integration', 'Customer Analytics', 'Inventory Management', 'Sales Forecasting', 'Business Intelligence'],
          useCases: [
            'Fine Dining Restaurants',
            'Quick Service Chains',
            'Cafes and Coffee Shops',
            'Food Delivery Services',
            'Catering Operations'
          ],
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: BarChart3,
          color: 'from-orange-500 to-red-600',
          bgGradient: 'from-orange-50 to-red-50'
        },
        'logistic-analysis': {
          id: 'logistic-analysis',
          title: 'Logistics Data Analysis Agent',
          subtitle: 'Supply Chain Intelligence & Optimization',
          description: 'Advanced logistics analytics for supply chain efficiency and cost optimization',
          fullContent: 'Our Logistic Data Analysis platform at Cube AI Solutions enables businesses to revolutionize supply chain management through agentic AI, forecasting analytics, and enterprise automation solutions that bring efficiency, transparency, and cost reduction to the logistics chain. Conventional logistics management tends to be plagued by manual tracking, disjointed data silos, inefficient route planning, inventory mismanagement, slow deliveries, and inadequate visibility across supply chains, which cost more in terms of operations and lead to customer dissatisfaction. Our artificial intelligence-based logistics analytics software brings together real-time data from fleet management software, IoT devices, GPS tracking, warehouse management software, and ERP systems in one smart dashboard, allowing optimization of routes, prediction of ETAs, demand forecasting, intelligent inventory monitoring, and anomaly detection. Equipped with Power BI visualization, machine learning models, and natural language-driven insights, logistics managers are able to make quicker, more precise decisions, enhance delivery dependability, and pre-emptively avoid risks. Through the integration of enterprise AI solutions, digital twins, and prescriptive analytics into supply chain processes, organizations are able to improve the allocation of resources, optimize fuel and energy consumption, and develop strong, sustainable logistics capabilities. Capabilities like predictive fleet maintenance, automated scheduling, real-time disruption notification, and supplier performance monitoring simplify operations and enhance end-to-end performance. With organizations embracing Industry 4.0 and Industry 5.0 transformation, Cube AI Solutions\' Logistic Data Analytics solution allows businesses to minimize downtime, decrease costs, and enhance service levels, yet align with sustainability and intelligent mobility objectives. Whether for transportation, warehousing, final-mile delivery, or global supply chain optimization, our solution provides business productivity through the use of AI, so enterprises can remain competitive in the current high-speed logistics environment. With the integration of data analytics, AI automation, and predictive intelligence, Cube AI Solutions enables logistics businesses to transcend reactive management and realize proactive, intelligent, and future-proofed logistics operations.',
          features: [
            'Transportation Cost Analysis',
            'Delivery Performance Tracking',
            'Warehouse Efficiency Metrics',
            'Supplier Performance Analytics',
            'Route Optimization Insights',
            'Demand Forecasting'
          ],
          benefits: [
            'Reduce logistics costs by 30%',
            'Improve delivery accuracy by 45%',
            'Optimize warehouse operations',
            'Enhance supplier relationships',
            'Minimize transportation delays',
            'Increase customer satisfaction'
          ],
          techStack: ['Supply Chain Analytics', 'Transportation Management', 'Warehouse Management', 'Predictive Analytics', 'Route Optimization'],
          useCases: [
            'E-commerce Fulfillment',
            'Retail Distribution',
            'Manufacturing Supply Chain',
            'Third-party Logistics',
            'International Shipping'
          ],
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: BarChart3,
          color: 'from-purple-500 to-indigo-600',
          bgGradient: 'from-purple-50 to-indigo-50'
        },
        'chat-analysis': {
          id: 'chat-analysis',
          title: 'Customer Chat Analysis Agent',
          subtitle: 'Conversation Intelligence & Support Optimization',
          description: 'AI-powered analysis of customer conversations for service improvement and insights',
          fullContent: 'Enhance your customer service operations with our Customer Chat Analysis Agent that provides deep insights into customer conversations and support interactions. This intelligent solution analyzes chat logs, support tickets, and customer feedback to identify trends, sentiment patterns, and optimization opportunities. By understanding customer needs and agent performance, organizations can improve response times, resolution rates, and overall customer satisfaction.',
          features: [
            'Sentiment Analysis',
            'Conversation Topic Clustering',
            'Agent Performance Metrics',
            'Customer Satisfaction Scoring',
            'Issue Resolution Analytics',
            'Automated Response Suggestions'
          ],
          benefits: [
            'Improve customer satisfaction by 35%',
            'Reduce response times by 50%',
            'Enhance agent productivity',
            'Identify service gaps',
            'Optimize support processes',
            'Increase first-call resolution rates'
          ],
          techStack: ['Natural Language Processing', 'Sentiment Analysis', 'Chat Analytics', 'Customer Service Platforms', 'Performance Monitoring'],
          useCases: [
            'Customer Service Centers',
            'E-commerce Support',
            'Technical Help Desks',
            'Sales Chat Support',
            'Multi-channel Customer Service'
          ],
          image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: BarChart3,
          color: 'from-teal-500 to-cyan-600',
          bgGradient: 'from-teal-50 to-cyan-50'
        },
        'saas-platforms': {
          id: 'saas-platforms',
          title: 'Scalable SaaS Solutions Agent',
          subtitle: 'Next-Generation Software Platform Development',
          description: 'AI-embedded SaaS platform development with advanced automation and intelligence',
          fullContent: 'Accelerate your software development with our Scalable SaaS Solutions Agent that creates next-generation Software-as-a-Service platforms embedded with AI capabilities. This comprehensive solution provides the foundation for building modern, scalable, and intelligent SaaS applications that can adapt to user needs and market demands. With built-in AI features, automation tools, and advanced analytics, your SaaS platform will deliver exceptional user experiences and business value.',
          features: [
            'AI-Embedded Platform Architecture',
            'Multi-tenant Scalability',
            'Advanced Analytics Integration',
            'Automated User Onboarding',
            'Intelligent Feature Recommendations',
            'Performance Optimization'
          ],
          benefits: [
            'Accelerate time-to-market by 60%',
            'Reduce development costs by 40%',
            'Enhance user engagement',
            'Improve platform scalability',
            'Enable data-driven features',
            'Automate operational tasks'
          ],
          techStack: ['Cloud Architecture', 'AI/ML Integration', 'Microservices', 'API Development', 'DevOps Automation'],
          useCases: [
            'Enterprise Software Platforms',
            'Customer Management Systems',
            'Business Intelligence Tools',
            'Collaboration Platforms',
            'Industry-Specific Solutions'
          ],
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Zap,
          color: 'from-indigo-500 to-purple-600',
          bgGradient: 'from-indigo-50 to-purple-50'
        },
        'customer-analysis': {
          id: 'customer-analysis',
          title: 'Customer Data Analysis Agent',
          subtitle: 'Intelligent Customer Insights & Engagement',
          description: 'AI-powered customer analytics for enhanced engagement and retention',
          fullContent: 'At Cube AI Solutions, our Customer Data Analysis solution enables businesses to leverage meaningful insights from huge amounts of customer data by integrating agentic AI, predictive analytics, and sophisticated data intelligence capabilities to drive customer engagement, retention, and business development. Today\'s digital competitive economy poses a common challenge for organizations: fragmented customer data, inadequate personalization, ineffective segmentation, and limited customer behavior visibility, which results in lost opportunities and diminished loyalty. Our customer analytics platform, powered by AI, aggregates CRM data, social media conversations, e-commerce transactions, feedback mechanisms, and purchase history into a single, smart dashboard, allowing firms to know customers\' preferences, lifetime value, sentiment, and buying behavior in real time. Through Power BI visualization, natural language insights, and machine learning models for churn prediction and trend forecasting, organizations can make informed decisions to enhance marketing efficiency, customize customer journeys, and drive repeat business. The solution enables customer segmentation, loyalty program analysis, cross-sell and up-sell suggestions, and sentiment analysis, allowing enterprises to deliver context-rich, data-driven experiences at scale. By integrating enterprise AI solutions, prescriptive analytics, and generative AI personalization into customer-facing initiatives, organizations can minimize churn, maximize satisfaction, and maximize ROI. Geared towards visionary organizations advocating Industry 4.0 and Industry 5.0 transformation, Cube AI Solutions\' Customer Data Analysis platform allows leaders to transcend static reporting into dynamic, real-time, and intelligent models of customer engagement. From behavioral clustering and sales forecasting to omni-channel customer insights and predictive demand analytics, our platform maximizes business productivity with AI while helping enterprises achieve a sustainable competitive advantage. By consolidating customer intelligence, predictive modeling, and AI-powered automation, Cube AI Solutions enables businesses to drive smarter, faster, and more profitable customer relationships in today\'s data-driven world.',
          features: [
            'Customer Segmentation',
            'Churn Prediction Models',
            'Sentiment Analysis',
            'Loyalty Program Analytics',
            'Cross-sell/Up-sell Recommendations',
            'Real-time Behavior Tracking'
          ],
          benefits: [
            'Reduce customer churn by 40%',
            'Increase customer retention by 50%',
            'Enhance marketing ROI',
            'Personalize customer experiences',
            'Optimize sales strategies',
            'Drive repeat business'
          ],
          techStack: ['CRM Integration', 'Predictive Analytics', 'Natural Language Processing', 'Power BI', 'Customer Intelligence'],
          useCases: [
            'E-commerce Personalization',
            'Customer Retention Programs',
            'Marketing Campaign Optimization',
            'Customer Journey Mapping',
            'Loyalty Program Management'
          ],
          image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Users,
          color: 'from-pink-500 to-rose-600',
          bgGradient: 'from-pink-50 to-rose-50'
        },
        'student-analysis': {
          id: 'student-analysis',
          title: 'Student Data Analysis Agent',
          subtitle: 'Intelligent Education Analytics',
          description: 'AI-driven student analytics for enhanced learning outcomes and institutional efficiency',
          fullContent: 'At Cube AI Solutions, our Student Data Analysis platform enables schools, universities, and training institutes to leverage the strength of agentic AI, predictive analytics, and enterprise automation to revolutionize student management, learning achievement, and institutional performance. Conventional student data management is typically marred by manual record-keeping, scattered academic insights, poor visibility into attendance and performance trends, and flawed retention strategies, which limit timely interventions and student success. Our student analytics platform harnesses data from learning management systems (LMS), attendance records, test scores, feedback surveys, and behavioral surveys into one integrated dashboard, delivering actionable intelligence to administrators, instructors, and policymakers. With support for Power BI integration, real-time analysis, and cutting-edge visualization tools like heat maps and predictive models, institutions can track attendance patterns, academic performance, dropout threats, and engagement rates with unparalleled precision. The platform also facilitates customized learning journeys, skill gaps detection, career readiness assessment, and sentiment analysis to assist educators in providing more personalized, effective teaching experiences. By infusing enterprise AI solutions, generative AI-based recommendations, and prescriptive analytics, institutions can increase student retention rates, enhance satisfaction, and streamline resource management. Moreover, functionalities such as automated reporting, performance dashboards, and predictive enrollment forecasting also empower administrators to make informed decisions in a timely manner. Powered for digital education revolution under Industry 4.0 and Industry 5.0 paradigms, Cube AI Solutions\' Student Data Analysis solution develops a future-ready environment where institutes can attain business efficiency through AI, minimize inefficiencies, and enhance both academic and administrative performance. By combining student brains, predictive analytics, and AI-driven automation, Cube AI Solutions enables education institutions to transition from reactive surveillance to proactive, smart, and bespoke education systems that deliver sustainable growth and student success.',
          features: [
            'Academic Performance Tracking',
            'Dropout Risk Prediction',
            'Personalized Learning Paths',
            'Engagement Analytics',
            'Skill Gap Analysis',
            'Automated Reporting'
          ],
          benefits: [
            'Increase student retention by 35%',
            'Improve academic outcomes by 40%',
            'Enhance teaching effectiveness',
            'Optimize resource allocation',
            'Streamline administrative tasks',
            'Support student success'
          ],
          techStack: ['Learning Management Systems', 'Predictive Analytics', 'Power BI', 'Natural Language Processing', 'Education Intelligence'],
          useCases: [
            'Student Retention Programs',
            'Personalized Education Plans',
            'Institutional Performance Analysis',
            'Enrollment Forecasting',
            'Career Readiness Assessment'
          ],
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Brain,
          color: 'from-blue-500 to-cyan-600',
          bgGradient: 'from-blue-50 to-cyan-50'
        }
      }
    },
    'vision-ai': {
      title: 'Vision AI - Computer Vision Solutions',
      color: 'from-violet-400 via-purple-500 to-indigo-600',
      bgGradient: 'from-violet-50 via-purple-50 to-indigo-50',
      items: {
        'attendance-system': {
          id: 'attendance-system',
          title: 'Smart Attendance System',
          subtitle: 'AI-Powered Facial Recognition Attendance',
          description: 'Advanced facial recognition system for automated attendance tracking and monitoring',
          fullContent: 'Revolutionize your attendance management with our Smart Attendance System that uses advanced facial recognition technology for accurate and efficient employee tracking. This AI-powered solution eliminates the need for manual attendance processes, reduces buddy punching, and provides real-time attendance data with comprehensive analytics. The system supports multiple recognition modes, works in various lighting conditions, and maintains high accuracy while ensuring data privacy and security.',
          features: [
            'Advanced Facial Recognition',
            'Real-time Attendance Tracking',
            'Anti-spoofing Technology',
            'Multi-location Support',
            'Mobile App Integration',
            'Comprehensive Reporting'
          ],
          benefits: [
            'Eliminate time theft and buddy punching',
            'Reduce administrative overhead by 80%',
            'Improve accuracy to 99.7%',
            'Enable contactless attendance',
            'Generate automated reports',
            'Integrate with existing HR systems'
          ],
          techStack: ['Computer Vision', 'Facial Recognition', 'Mobile Development', 'Cloud Storage', 'HR Integration APIs'],
          useCases: [
            'Corporate Offices',
            'Manufacturing Plants',
            'Educational Institutions',
            'Healthcare Facilities',
            'Retail Stores'
          ],
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Eye,
          color: 'from-blue-500 to-purple-600',
          bgGradient: 'from-blue-50 to-purple-50'
        },
        'number-plate': {
          id: 'number-plate',
          title: 'Number Plate Recognition System',
          subtitle: 'Intelligent Vehicle Identification & Monitoring',
          description: 'AI-powered license plate recognition for security, parking, and traffic management',
          fullContent: 'Enhance your security and traffic management with our Number Plate Recognition System that provides real-time vehicle identification and monitoring. This advanced computer vision solution automatically captures, reads, and analyzes license plates with high accuracy, enabling automated access control, parking management, and security monitoring. The system works in various weather conditions and lighting scenarios while maintaining exceptional recognition rates.',
          features: [
            'Real-time Plate Recognition',
            'Multi-camera Integration',
            'Automatic Gate Control',
            'Visitor Management',
            'Alert System Integration',
            'Historical Data Analytics'
          ],
          benefits: [
            'Automate vehicle access control',
            'Improve security monitoring by 95%',
            'Reduce manual gate operations',
            'Enable contactless parking',
            'Generate detailed vehicle logs',
            'Integrate with security systems'
          ],
          techStack: ['Computer Vision', 'OCR Technology', 'Camera Integration', 'Access Control Systems', 'Database Management'],
          useCases: [
            'Gated Communities',
            'Corporate Parking',
            'Shopping Centers',
            'Government Buildings',
            'Toll Collection Systems'
          ],
          image: 'https://images.unsplash.com/photo-1449824913935-dccba630e2f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Camera,
          color: 'from-red-500 to-pink-600',
          bgGradient: 'from-red-50 to-pink-50'
        },
        'pcb-board': {
          id: 'pcb-board',
          title: 'PCB Board Quality Control Agent',
          subtitle: 'Automated Circuit Board Inspection',
          description: 'AI-powered PCB inspection system for defect detection and quality assurance',
          fullContent: 'Transform your electronics manufacturing with our PCB Board Quality Control Agent that uses advanced computer vision to inspect printed circuit boards for defects and quality issues. This intelligent system automatically detects missing components, solder defects, alignment issues, and other manufacturing anomalies with microscopic precision. By integrating seamlessly into production lines, the system ensures consistent quality while reducing inspection time and costs.',
          features: [
            'Microscopic Defect Detection',
            'Component Verification',
            'Solder Joint Inspection',
            'Real-time Quality Reporting',
            'Production Line Integration',
            'Statistical Quality Control'
          ],
          benefits: [
            'Reduce defect rates by 85%',
            'Accelerate inspection speed by 500%',
            'Minimize human inspection errors',
            'Lower quality control costs',
            'Improve product reliability',
            'Enable 100% inspection coverage'
          ],
          techStack: ['Computer Vision', 'Machine Learning', 'High-Resolution Imaging', 'Production Integration', 'Quality Management Systems'],
          useCases: [
            'Electronics Manufacturing',
            'Automotive Electronics',
            'Medical Device Production',
            'Consumer Electronics',
            'Industrial Control Systems'
          ],
          image: 'https://images.unsplash.com/photo-1518309127606-0dcac6c95d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Cpu,
          color: 'from-green-500 to-teal-600',
          bgGradient: 'from-green-50 to-teal-50'
        },
        'meter-monitoring': {
          id: 'meter-monitoring',
          title: 'Smart Meter Monitoring System',
          subtitle: 'Automated Utility Meter Reading & Analytics',
          description: 'AI-powered meter reading system for water, gas, and electricity with mobile app support',
          fullContent: 'Modernize your utility monitoring with our Smart Meter Monitoring System that uses computer vision and IoT technology to automatically read and analyze utility meters. This comprehensive solution eliminates manual meter reading, provides real-time consumption data, and enables predictive analytics for better resource management. With mobile app integration and cloud-based analytics, utilities and facility managers can monitor consumption patterns, detect anomalies, and optimize usage efficiently.',
          features: [
            'Automated Meter Reading',
            'Real-time Consumption Analytics',
            'Anomaly Detection',
            'Mobile App Integration',
            'Predictive Usage Modeling',
            'Billing Integration'
          ],
          benefits: [
            'Eliminate manual meter reading',
            'Reduce operational costs by 60%',
            'Improve reading accuracy to 99.8%',
            'Enable real-time monitoring',
            'Detect leaks and anomalies early',
            'Optimize resource consumption'
          ],
          techStack: ['Computer Vision', 'IoT Sensors', 'Mobile Development', 'Cloud Analytics', 'Utility Management Systems'],
          useCases: [
            'Smart Building Management',
            'Utility Companies',
            'Industrial Facilities',
            'Residential Complexes',
            'Government Buildings'
          ],
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Shield,
          color: 'from-yellow-500 to-orange-600',
          bgGradient: 'from-yellow-50 to-orange-50'
        },
        'chatbot-solutions': {
          id: 'chatbot-solutions',
          title: 'AI-Powered Chatbot Solutions',
          subtitle: 'Intelligent Conversational AI Platform',
          description: 'Advanced chatbot solutions with natural language processing and multi-channel support',
          fullContent: 'Transform your customer engagement with our AI-Powered Chatbot Solutions that deliver intelligent, human-like conversations across multiple channels. This comprehensive platform uses advanced natural language processing and machine learning to understand user intent, provide accurate responses, and seamlessly escalate complex queries to human agents. With multi-language support and continuous learning capabilities, our chatbots improve over time while maintaining consistent service quality.',
          features: [
            'Natural Language Understanding',
            'Multi-channel Deployment',
            'Intelligent Intent Recognition',
            'Seamless Human Handoff',
            'Continuous Learning',
            'Analytics Dashboard'
          ],
          benefits: [
            'Handle 80% of customer queries automatically',
            'Reduce response time to seconds',
            'Provide 24/7 customer support',
            'Lower support costs by 70%',
            'Improve customer satisfaction',
            'Scale support operations efficiently'
          ],
          techStack: ['Natural Language Processing', 'Machine Learning', 'Conversational AI', 'Multi-channel APIs', 'Analytics Platform'],
          useCases: [
            'Customer Service Automation',
            'E-commerce Support',
            'Lead Generation',
            'FAQ Automation',
            'Appointment Scheduling'
          ],
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Sparkles,
          color: 'from-indigo-500 to-purple-600',
          bgGradient: 'from-indigo-50 to-purple-50'
        }
      }
    },
    city: {
      title: 'CyTI - Cyber Technology Innovation',
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 via-cyan-50 to-blue-50',
      items: {
        'iot-services': {
          id: 'iot-services',
          title: 'IoT Connectivity Solutions',
          subtitle: 'Comprehensive Internet of Things Platform',
          description: 'End-to-end IoT solutions for connected devices and smart systems integration',
          fullContent: 'Unlock the power of connected devices with our comprehensive IoT Connectivity Solutions that enable seamless integration of sensors, devices, and systems. Our platform provides secure device management, real-time data collection, and intelligent analytics to transform your operations. With support for multiple protocols and edge computing capabilities, we deliver scalable IoT solutions that drive operational efficiency and enable data-driven decision making across industries.',
          features: [
            'Multi-protocol Device Support',
            'Secure Device Management',
            'Real-time Data Processing',
            'Edge Computing Integration',
            'Scalable Cloud Infrastructure',
            'Advanced Analytics Dashboard'
          ],
          benefits: [
            'Reduce operational costs by 45%',
            'Improve system efficiency by 60%',
            'Enable predictive maintenance',
            'Enhance data visibility',
            'Automate routine processes',
            'Scale IoT deployments easily'
          ],
          techStack: ['IoT Platforms', 'Edge Computing', 'Cloud Infrastructure', 'Device Management', 'Data Analytics'],
          useCases: [
            'Smart Manufacturing',
            'Smart Cities Infrastructure',
            'Agricultural Monitoring',
            'Healthcare IoT',
            'Energy Management Systems'
          ],
          image: 'https://images.unsplash.com/photo-1518309127606-0dcac6c95d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Database,
          color: 'from-blue-500 to-indigo-600',
          bgGradient: 'from-blue-50 to-indigo-50'
        },
        'auto-sizing': {
          id: 'auto-sizing',
          title: 'Large Language Model Solutions',
          subtitle: 'Enterprise AI Language Processing',
          description: 'Advanced LLMs for intelligent applications and natural language understanding',
          fullContent: 'Harness the power of advanced Large Language Models with our comprehensive LLM Solutions that bring intelligent natural language processing to your applications. Our platform provides fine-tuned models, custom training capabilities, and enterprise-grade deployment options that enable sophisticated language understanding, content generation, and conversational AI. With industry-specific training and privacy-first architecture, we deliver LLM solutions that meet your unique business requirements.',
          features: [
            'Custom Model Training',
            'Multi-language Support',
            'Enterprise Security',
            'API Integration',
            'Real-time Processing',
            'Performance Optimization'
          ],
          benefits: [
            'Enhance application intelligence',
            'Improve user experience by 75%',
            'Automate content generation',
            'Enable natural language interfaces',
            'Reduce development time',
            'Scale language processing tasks'
          ],
          techStack: ['Large Language Models', 'Natural Language Processing', 'Machine Learning', 'API Development', 'Cloud Computing'],
          useCases: [
            'Intelligent Document Processing',
            'Customer Service Automation',
            'Content Generation',
            'Language Translation',
            'Conversational Interfaces'
          ],
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Brain,
          color: 'from-purple-500 to-pink-600',
          bgGradient: 'from-purple-50 to-pink-50'
        }
      }
    },
    cubebotics: {
      title: 'Cubebotics - Embedded Systems & IoT',
      color: 'from-blue-600 to-indigo-700',
      bgGradient: 'from-blue-50 via-indigo-50 to-blue-50',
      items: {
        'embedded-iot': {
          id: 'embedded-iot',
          title: 'Embedded IoT Systems',
          subtitle: 'Custom Industrial Automation Solutions',
          description: 'Specialized embedded systems for industrial automation and smart device connectivity',
          fullContent: 'Transform your industrial operations with our custom Embedded IoT Systems that combine hardware expertise with intelligent software solutions. Our team designs and develops specialized embedded systems that seamlessly integrate with existing infrastructure while providing advanced connectivity and automation capabilities. From sensor networks to control systems, we deliver robust, reliable, and scalable embedded solutions tailored to your specific industrial requirements.',
          features: [
            'Custom Hardware Design',
            'Real-time Control Systems',
            'Industrial Protocol Support',
            'Edge Computing Capabilities',
            'Robust Security Framework',
            'Remote Monitoring Integration'
          ],
          benefits: [
            'Improve operational efficiency by 55%',
            'Reduce system downtime by 70%',
            'Enable predictive maintenance',
            'Lower long-term costs',
            'Enhance system reliability',
            'Future-proof your infrastructure'
          ],
          techStack: ['Embedded Systems', 'Industrial IoT', 'Real-time OS', 'Communication Protocols', 'Edge Computing'],
          useCases: [
            'Manufacturing Automation',
            'Process Control Systems',
            'Environmental Monitoring',
            'Energy Management',
            'Quality Control Systems'
          ],
          image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Cpu,
          color: 'from-slate-500 to-gray-600',
          bgGradient: 'from-slate-50 to-gray-50'
        },
        'drone-tech': {
          id: 'drone-tech',
          title: 'Drone Technology Innovations',
          subtitle: 'Advanced Aerial Intelligence Solutions',
          description: 'Cutting-edge drone technology for surveillance, mapping, and industrial applications',
          fullContent: 'Elevate your operations with our advanced Drone Technology Solutions that combine autonomous flight capabilities with intelligent data collection and analysis. Our drone platforms are equipped with high-resolution cameras, sensors, and AI-powered analytics to deliver comprehensive aerial intelligence. From surveillance and mapping to inspection and monitoring, our drones provide cost-effective solutions for complex operational challenges while ensuring safety and compliance.',
          features: [
            'Autonomous Flight Systems',
            'High-Resolution Imaging',
            'Real-time Data Transmission',
            'AI-Powered Analytics',
            'Multi-sensor Integration',
            'Compliance Management'
          ],
          benefits: [
            'Reduce operational costs by 60%',
            'Improve data collection accuracy',
            'Enhance safety operations',
            'Access difficult-to-reach areas',
            'Enable rapid response capabilities',
            'Generate actionable insights'
          ],
          techStack: ['Drone Hardware', 'Flight Control Systems', 'Computer Vision', 'Data Analytics', 'Communication Systems'],
          useCases: [
            'Infrastructure Inspection',
            'Agricultural Monitoring',
            'Security Surveillance',
            'Environmental Assessment',
            'Emergency Response'
          ],
          image: 'https://images.unsplash.com/photo-1473968512647-dccba630e2f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Zap,
          color: 'from-cyan-500 to-blue-600',
          bgGradient: 'from-cyan-50 to-blue-50'
        }
      }
    },
    dce: {
      title: 'DCE - Data & Cloud Infrastructure',
      color: 'from-cyan-400 to-blue-600',
      bgGradient: 'from-cyan-50 via-blue-50 to-cyan-50',
      items: {
        'data-engineering': {
          id: 'data-engineering',
          title: 'Data Pipeline Engineering',
          subtitle: 'Scalable Data Infrastructure Solutions',
          description: 'Enterprise-grade data pipelines designed for efficiency, scalability, and reliability',
          fullContent: 'Build robust data infrastructure with our Data Pipeline Engineering solutions that transform raw data into actionable business insights. Our comprehensive platform designs, implements, and manages scalable data pipelines that can handle massive volumes of structured and unstructured data. With real-time processing capabilities, automated data quality checks, and intelligent monitoring, we ensure your data infrastructure supports critical business decisions while maintaining performance and reliability.',
          features: [
            'Scalable Pipeline Architecture',
            'Real-time Data Processing',
            'Automated Quality Assurance',
            'Multi-source Integration',
            'Performance Monitoring',
            'Data Governance Framework'
          ],
          benefits: [
            'Reduce data processing time by 80%',
            'Improve data quality and accuracy',
            'Enable real-time analytics',
            'Scale data operations efficiently',
            'Lower infrastructure costs',
            'Ensure data compliance'
          ],
          techStack: ['Apache Spark', 'Kafka', 'Cloud Platforms', 'Data Warehouses', 'ETL Tools'],
          useCases: [
            'Enterprise Data Warehousing',
            'Real-time Analytics',
            'Data Migration Projects',
            'Business Intelligence',
            'Machine Learning Pipelines'
          ],
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Database,
          color: 'from-blue-500 to-purple-600',
          bgGradient: 'from-blue-50 to-purple-50'
        },
        'cloud-engineering': {
          id: 'cloud-engineering',
          title: 'Cloud Infrastructure Solutions',
          subtitle: 'Enterprise Cloud Migration & Optimization',
          description: 'Comprehensive cloud services for migration, optimization, and infrastructure management',
          fullContent: 'Accelerate your digital transformation with our Cloud Infrastructure Solutions that provide end-to-end cloud services from migration to optimization. Our expert team designs cloud-native architectures, manages seamless migrations, and optimizes cloud resources for maximum performance and cost efficiency. With multi-cloud expertise and DevOps integration, we ensure your cloud infrastructure is scalable, secure, and aligned with your business objectives.',
          features: [
            'Cloud Migration Planning',
            'Multi-cloud Architecture',
            'Cost Optimization Tools',
            'Security Implementation',
            'DevOps Integration',
            'Performance Monitoring'
          ],
          benefits: [
            'Reduce infrastructure costs by 50%',
            'Improve system scalability',
            'Enhance security posture',
            'Accelerate deployment cycles',
            'Enable global accessibility',
            'Optimize resource utilization'
          ],
          techStack: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'DevOps Tools'],
          useCases: [
            'Enterprise Cloud Migration',
            'Application Modernization',
            'Disaster Recovery',
            'Global Infrastructure',
            'Cost Optimization Projects'
          ],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Cloud,
          color: 'from-teal-500 to-cyan-600',
          bgGradient: 'from-teal-50 to-cyan-50'
        }
      }
    },
    'tech-solution': {
      title: 'Tech Solution - Digital Innovation Services',
      color: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 via-indigo-50 to-blue-50',
      items: {
        'web-development': {
          id: 'web-development',
          title: 'Modern Web Development',
          subtitle: 'Cutting-Edge Web Applications & Platforms',
          description: 'Innovative web solutions built with the latest technologies and best practices',
          fullContent: 'Create exceptional digital experiences with our Modern Web Development services that combine cutting-edge technologies with innovative design principles. Our team builds responsive, fast, and scalable web applications using the latest frameworks and development practices. From progressive web apps to complex enterprise platforms, we deliver solutions that engage users, drive conversions, and provide outstanding performance across all devices and platforms.',
          features: [
            'Responsive Design',
            'Progressive Web Apps',
            'Modern JavaScript Frameworks',
            'Performance Optimization',
            'SEO Implementation',
            'Analytics Integration'
          ],
          benefits: [
            'Improve user engagement by 65%',
            'Enhance site performance by 80%',
            'Increase conversion rates',
            'Boost search engine rankings',
            'Reduce bounce rates',
            'Enable mobile-first experiences'
          ],
          techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
          useCases: [
            'E-commerce Platforms',
            'Corporate Websites',
            'SaaS Applications',
            'Portfolio Sites',
            'Enterprise Dashboards'
          ],
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Code,
          color: 'from-blue-500 to-purple-600',
          bgGradient: 'from-blue-50 to-purple-50'
        },
        'app-development': {
          id: 'app-development',
          title: 'Mobile App Development',
          subtitle: 'Native & Cross-Platform Mobile Solutions',
          description: 'High-performance mobile applications for iOS and Android platforms',
          fullContent: 'Transform your mobile presence with our comprehensive Mobile App Development services that create high-performance applications for iOS and Android platforms. Our team specializes in both native and cross-platform development, ensuring optimal performance and user experience on all devices. From concept to deployment, we build apps that engage users, drive business growth, and leverage the latest mobile technologies and platform features.',
          features: [
            'Native iOS & Android Development',
            'Cross-platform Solutions',
            'UI/UX Design Excellence',
            'Performance Optimization',
            'App Store Optimization',
            'Analytics & Monitoring'
          ],
          benefits: [
            'Reach wider mobile audience',
            'Improve user retention by 70%',
            'Enhance brand engagement',
            'Generate mobile revenue streams',
            'Leverage device capabilities',
            'Enable offline functionality'
          ],
          techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
          useCases: [
            'E-commerce Mobile Apps',
            'Social Media Platforms',
            'Productivity Tools',
            'Healthcare Applications',
            'Financial Services Apps'
          ],
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Smartphone,
          color: 'from-green-500 to-teal-600',
          bgGradient: 'from-green-50 to-teal-50'
        },
        'business-consulting': {
          id: 'business-consulting',
          title: 'Digital Transformation Consulting',
          subtitle: 'Strategic Technology Leadership',
          description: 'Expert consulting services to drive business growth through technology innovation',
          fullContent: 'Accelerate your digital transformation journey with our comprehensive Digital Transformation Consulting services that align technology strategy with business objectives. Our experienced consultants work closely with your leadership team to identify opportunities, develop roadmaps, and implement solutions that drive sustainable growth. From process optimization to technology architecture, we provide strategic guidance that transforms your organization for the digital age.',
          features: [
            'Strategic Technology Planning',
            'Digital Readiness Assessment',
            'Process Optimization',
            'Change Management',
            'Technology Architecture',
            'Implementation Roadmaps'
          ],
          benefits: [
            'Improve operational efficiency by 60%',
            'Reduce technology costs by 40%',
            'Accelerate digital initiatives',
            'Enhance competitive advantage',
            'Enable data-driven decisions',
            'Future-proof your business'
          ],
          techStack: ['Enterprise Architecture', 'Process Analysis', 'Technology Assessment', 'Strategic Planning', 'Change Management'],
          useCases: [
            'Enterprise Digital Strategy',
            'Technology Modernization',
            'Process Automation',
            'Data Strategy Development',
            'Innovation Programs'
          ],
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          icon: Building2,
          color: 'from-indigo-500 to-purple-600',
          bgGradient: 'from-indigo-50 to-purple-50'
        }
      }
    }
  };

  // Get navigation helpers
  const getNavigationData = () => {
    if (!exploreId || !sectionData[exploreId]) return { prevItem: null, nextItem: null };
    
    const items = Object.keys(sectionData[exploreId].items);
    const currentIndex = items.findIndex(item => item === itemId);
    
    return {
      prevItem: currentIndex > 0 ? items[currentIndex - 1] : null,
      nextItem: currentIndex < items.length - 1 ? items[currentIndex + 1] : null
    };
  };

  const { prevItem, nextItem } = getNavigationData();

  // Mouse position tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!exploreId || !itemId || !sectionData[exploreId] || !sectionData[exploreId].items[itemId]) {
      setError('Invalid section or item ID');
      setLoading(false);
      return;
    }
    setLoading(false);
  }, [exploreId, itemId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-800"
          >
            Loading Amazing Content...
          </motion.h1>
        </div>
      </div>
    );
  }

  if (error || !exploreId || !itemId || !sectionData[exploreId] || !sectionData[exploreId].items[itemId]) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: 3 }}
            className="text-6xl mb-4"
          >
            🤔
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Oops! Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The requested page could not be found.'}</p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Go Back Home
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    );
  }

  const domain = sectionData[exploreId];
  const section = domain.items[itemId];
  const SectionIcon = section.icon;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${section.bgGradient} relative overflow-hidden`}>
     <Helmet>
  <title>CubeAI - AI Services</title>
  <meta
    name="description"
    content="Explore CubeAI's AI-based services, offering intelligent automation, predictive analytics, machine learning, and digital transformation solutions to empower businesses."
  />
  <meta
    name="keywords"
    content="CubeAI, AI services, Artificial Intelligence, Machine Learning, Business Automation, Predictive Analytics, Cloud AI, Data Analytics, Digital Transformation, Industry 4.0"
  />
</Helmet>


      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingParticles />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-20 right-20 w-80 h-80 opacity-10"
          >
            <div className={`w-full h-full bg-gradient-to-r ${section.color} rounded-full blur-3xl`} />
          </motion.div>
          <motion.div
            animate={{
              rotate: [360, 0],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-20 left-20 w-64 h-64 opacity-15"
          >
            <div className={`w-full h-full bg-gradient-to-r ${section.color} rounded-3xl blur-2xl`} />
          </motion.div>
        </motion.div>

        {/* Interactive cursor effect */}
        <motion.div
          className="absolute pointer-events-none z-10 w-6 h-6 bg-white/30 rounded-full blur-sm"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Mobile Navigation Arrows - Only visible on mobile */}
      <div className="md:hidden relative z-20">
        {/* Left Arrow - Top Left */}
        {prevItem && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(`/explore/${exploreId}/${prevItem}`)}
            className="fixed top-4 left-4 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 shadow-lg z-50"
            title="Previous Solution"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
        )}

        {/* Right Arrow - Top Right */}
        {nextItem && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(`/explore/${exploreId}/${nextItem}`)}
            className="fixed top-4 right-4 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 shadow-lg z-50"
            title="Next Solution"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>
        )}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ opacity: headerOpacity }}
        className="relative z-10 p-6 backdrop-blur-sm bg-white/10 border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Code className="w-7 h-7 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
              CubeAI
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Desktop Navigation arrows */}
            <div className="flex items-center space-x-2">
              {prevItem && (
                <motion.button
                  whileHover={{ scale: 1.05, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/explore/${exploreId}/${prevItem}`)}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/20"
                  title="Previous Solution"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>
              )}
              
              {nextItem && (
                <motion.button
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/explore/${exploreId}/${nextItem}`)}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/20"
                  title="Next Solution"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>
              )}
            </div>
            
            <Link
              to={`/explore/${exploreId}`}
              className="text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 border border-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {domain.title.split(' - ')[0]}
            </Link>
          </div>

          {/* Mobile Navigation - Only Back Link */}
          <div className="md:hidden">
            <Link
              to={`/explore/${exploreId}`}
              className="text-gray-600 hover:text-gray-800 transition-colors text-xs font-medium flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/30 border border-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-6 border border-white/20"
                >
                  <SectionIcon className="w-5 h-5" />
                  <span>{domain.title.split(' - ')[0].toUpperCase()}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
                >
                  {section.title.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="inline-block mr-3"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-8"
                >
                  {section.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contact')}
                    className={`px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r ${section.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base`}
                  >
                    Get Started Now
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 md:px-8 py-3 md:py-4 bg-white/30 backdrop-blur-sm border border-white/40 text-gray-700 rounded-xl font-semibold hover:bg-white/40 transition-all duration-300 text-sm md:text-base"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Content - Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-4 md:top-8 right-4 md:right-8 w-12 h-12 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  >
                    <SectionIcon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </motion.div>

                  {/* Floating stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/20"
                  >
                    <div className="text-white">
                      <div className="text-xl md:text-2xl font-bold">99.7%</div>
                      <div className="text-xs md:text-sm opacity-80">Success Rate</div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-20 blur-3xl scale-110 rounded-3xl`}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Overview */}
                <AnimatedSection delay={0.2} className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/30 shadow-xl">
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 md:mr-4 flex items-center justify-center"
                    >
                      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.div>
                    Overview
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-sm md:prose-lg max-w-none"
                  >
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
                      {section.fullContent}
                    </p>
                  </motion.div>
                </AnimatedSection>

                {/* Features */}
                <AnimatedSection delay={0.4} className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/30 shadow-xl">
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10 flex items-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mr-3 md:mr-4 flex items-center justify-center"
                    >
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.div>
                    Key Features
                  </motion.h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {section.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white/30 rounded-xl hover:bg-white/40 transition-all duration-300 border border-white/20"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: index * 0.2 }}
                          className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 md:mt-2 flex-shrink-0"
                        />
                        <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Benefits */}
                <AnimatedSection delay={0.6} className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/30 shadow-xl">
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10 flex items-center"
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 md:mr-4 flex items-center justify-center"
                    >
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </motion.div>
                    Benefits & Impact
                  </motion.h2>
                  <div className="space-y-3 md:space-y-4">
                    {section.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-center space-x-3 md:space-x-4 p-4 md:p-6 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600 flex-shrink-0" />
                        </motion.div>
                        <span className="text-gray-700 font-medium text-sm md:text-lg">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <AnimatedSection delay={0.8} className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    >
                      <Cpu className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-blue-600" />
                    </motion.div>
                    Technology Stack
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {section.techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                        <span className="text-gray-700 text-xs md:text-sm font-medium">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Use Cases */}
                <AnimatedSection delay={1.0} className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Globe className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-600" />
                    </motion.div>
                    Use Cases
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {section.useCases.map((useCase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                          className="w-2 h-2 bg-green-500 rounded-full"
                        />
                        <span className="text-gray-700 text-xs md:text-sm font-medium">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Animated Stats */}
                <AnimatedSection delay={1.2} className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-orange-600" />
                    </motion.div>
                    Performance Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      { value: '99.7%', label: 'Accuracy', delay: 0 },
                      { value: '24/7', label: 'Support', delay: 0.1 },
                      { value: '500+', label: 'Clients', delay: 0.2 },
                      { value: '5★', label: 'Rating', delay: 0.3 }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + stat.delay, type: 'spring' }}
                        whileHover={{ scale: 1.1 }}
                        className="text-center p-3 md:p-4 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                          className="text-2xl md:text-3xl font-bold text-gray-900"
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Achievements */}
                <AnimatedSection delay={1.4} className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Award className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-purple-600" />
                    </motion.div>
                    Achievements
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      { icon: Star, label: 'Industry Leader', color: 'text-yellow-500' },
                      { icon: Target, label: 'ISO Certified', color: 'text-red-500' },
                      { icon: Lightbulb, label: 'Innovation Award', color: 'text-yellow-500' },
                      { icon: Shield, label: 'Security Compliant', color: 'text-green-500' }
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
                        >
                          <achievement.icon className={`w-3 h-3 md:w-4 md:h-4 ${achievement.color}`} />
                        </motion.div>
                        <span className="text-gray-700 text-xs md:text-sm font-medium">{achievement.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionDetail;