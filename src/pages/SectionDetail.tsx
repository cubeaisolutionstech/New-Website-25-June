import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SectionDetail: React.FC = () => {
  const { exploreId, sectionId } = useParams<{ exploreId?: string; sectionId?: string }>();
  const navigate = useNavigate();

  const sections = {
    aima: {
    'sql-automation': {
      title: 'SQL Automation Agent',
      bgImage: '/image/sindu.jpg',
      content: 'Through Cube AI Solutions, our SQL Automation Agent transforms the way businesses communicate with their databases by intuitively translating natural language commands into precise SQL actions, giving businesses instant, trustworthy, and secure access to their information. Based on cutting-edge Agentic AI, generative AI, and AI automation technology, the solution removes the complexity of handcoding queries and allows business users, analysts, and decision-makers to gain insights easily, refresh records, and streamline reporting processes without requiring technical expertise. Unlike conventional database management methodologies, the SQL Automation Agent ensures real-time query validation, live previews, and protection checks to enforce data integrity and governance while expediting digital transformation efforts. By incorporating enterprise AI solutions into routine operations, organizations can significantly enhance business productivity with AI, make data analytics faster and easier, and facilitate quicker decision-making at scale. From automating routine SQL tasks, creating context-sensitive reports, or executing queries with built-in compliance, our SQL Automation Agent provides unmatched effectiveness, precision, and security. Aimed at businesses adopting Industry 4.0 and Industry 5.0 revolution, the solution enables companies to transcend traditional static dashboards to a universe of intelligent, conversational, and dynamic data interaction. With Cube AI Solutions, businesses unlock the full potential of agentic AI-powered database automation and make informed decisions, save on operational expenses, and spur innovation in their sectors.'
    },
    'resume-filtering': {
      title: 'Resume Filtering Agent',
      bgImage: '/image/seleg.jpg',
      content: 'With Cube AI Solutions, Resume Filtering Agent transforms recruitment by using Agentic AI, generative AI, and automation tools based on AI to find the appropriate talent in a matter of seconds, accelerating hiring with unprecedented speed, precision, and impartiality. Traditional hiring tends to be hampered by manual resume screening, time-consuming shortlisting, and missed prospects, but our business AI solution turns the problem into a strategic benefit by parsing resumes automatically, extracting relevant skills, assessing experience, and matching candidate profiles against job postings with smart accuracy. Driven by cutting-edge natural language processing (NLP) and machine learning technology, the Resume Filtering Agent removes bias, streamlines hiring times, and only allows top talent to be seen by recruiters, making businesses more productive with the use of AI across the entire spectrum of HR processes. With context-aware skills extraction, AI-based candidate ranking, shortlisting automation, and real-time recruiter dashboards, businesses can concentrate on high-value decision-making rather than mundane screening activities. Purpose-built for businesses adopting digital transformation and future of work, this solution natively integrates with applicant tracking systems (ATS) to help HR teams scale hiring, enhance compliance, and decrease recruitment spend while advancing candidate experience. By infusing Industry 4.0 and Industry 5.0 capabilities in talent acquisition, Cube AI Solutions helps organizations remain competitive, hire faster, and unleash workforce potential with intelligent automation. Our Resume Filtering Agent is not only a piece of software—it is an intelligent, AI-driven recruitment partner that fuels wiser hiring, business results at speed, and the future workforce.'
    },
    'customer-support-agent': {
      title: 'Customer Support Agent',
      bgImage: '/image/semed.png',
      content: 'With Cube AI Solutions, our Customer Support Agent offers cutting-edge AI-driven customer support through 24/7 virtual interaction via chat, email, voice, and social media, facilitating effortless engagement and swift resolution for enterprises of every size. Supported by agentic AI, generative AI, and the latest AI automation tools, this solution bridges conventional support roles into intelligent, adaptive ecosystems that optimize response time, accuracy, and overall customer experience management. The Customer Support Agent combines enterprise AI technologies like natural language, sentiment analysis, and contextual awareness to deliver customized, human-like experiences without sacrificing the scalability and efficiency that today\'s enterprises require. Intelligent escalation support from the agent provides seamless handoffs to human agents when necessary, ensuring customer satisfaction without interruption. By incorporating business productivity with AI into support processes, organizations can reduce operating expenses, manage larger volumes of customer inquiries, and provide consistent, multi-channel support at scale. Our Customer Support Agent is built for Industry 4.0- and Industry 5.0-era businesses that are adopting transformation. It facilitates proactive issue resolution, predictive support, and data-led insights that empower businesses to build stronger brand loyalty and achieve long-term growth. Whether it involves handling global service desks, resolving issues in real-time, or ensuring omnichannel engagement, Cube AI Solutions empowers businesses to unlock the future of AI-powered customer support automation with unprecedented efficiency, reliability, and customer satisfaction.'
    },
    'voice-clinical-agent': {
      title: 'Voice Activated Clinical Intelligence Agent',
      bgImage: '/image/sesaa.jpg',
      content: 'At Cube AI Solutions, our Voice-Activated Clinical Intelligence Agent is revolutionizing healthcare today by allowing real-time patient tracking, analysis of medical data, and clinical decision support by using easy-to-understand voice commands. Based on agentic AI, generative AI, and leading-edge AI automation tools, the solution allows doctors, nurses, and healthcare administrators to access and update patient records hands-free, with speedier and more accurate clinical workflows. With effortless integration into hospital charts, electronic health records (EHR), and digital boards, the agent provides voice-guided status notifications, predictive analytics, and context-aware insights that enhance care delivery and minimize administrative workload. In contrast to traditional healthcare IT solutions, our AI-driven clinical intelligence platform raises business productivity through AI by automating tedious documentation, minimizing errors, and offering real-time visibility of patient journeys across wards, ICUs, and emergency departments. Armed with enterprise AI capabilities like speech recognition, natural language processing, sentiment analysis, and predictive modeling, Voice-Activated Clinical Intelligence Agent facilitates proactive healthcare management and enables clinicians to make instant data-driven decisions. Built for healthcare enterprises migrating to Industry 4.0 and Industry 5.0 transformation, it facilitates interoperability, patient engagement, and scale-enabled operational efficiency. From remote monitoring to hospital command centers, or bedside support, Cube AI Solutions guarantees that healthcare professionals are able to provide smarter, safer, and faster patient care through the capabilities of AI-enabled clinical intelligence automation.'
    },
    'medical-agent': {
      title: 'Hospital Management System',
      bgImage: '/image/sechat.png',
      content: 'At Cube AI Solutions, our Hospital Management Agent is revolutionizing healthcare administration with a centralized, AI-driven platform that automates appointments, staff scheduling, patient management, and hospital resource allocation with unparalleled efficiency. With the strength of agentic AI, generative AI, and next-generation AI automation capabilities, the solution enables hospitals, clinics, and health networks to streamline operations, minimize administrative complexity, and deliver frictionless patient experiences. With smart capabilities like automated scheduling, electronic reminders, bed management, staff assignment, and real-time analytics dashboards, the Hospital Management Agent maximizes resource utilization with reduced delays and errors. In contrast to legacy hospital management systems, our solution combines enterprise AI solutions like predictive analytics, workflow automation, and business productivity with AI to provide data-driven insights to enhance decision-making, increase workforce productivity, and maintain regulatory compliance. Created for healthcare organizations going through Industry 4.0 and Industry 5.0 transformation, the platform integrates patient records, billing, staff schedules, and resource planning into a single cohesive ecosystem, allowing hospitals to work smarter, faster, and more economically. Whether dealing with high-volume patient flows, managing staff rotations for maximum efficiency, or real-time monitoring of hospital resources, Cube AI Solutions\' AI Hospital Management Agent makes it easier for healthcare providers to enhance efficiency, enhance patient trust, and develop future-proof, digitally savvy healthcare infrastructure.'
    },
    'legal-document-analyzer': {
      title: 'Legal Document Analyzer Agent',
      bgImage: '/image/seiot.png',
      content: 'Our Legal Document Analyzer Agent at Cube AI Solutions is revolutionizing the legal sector using AI-based contract examination, automation of compliance, and smart document analysis that enables businesses, law firms, and in-house corporate legal teams to automate processes with unprecedented speed and accuracy. Driven by agentic AI, generative AI, and cutting-edge AI automation platforms, this solution interprets sophisticated legal terminology, scrutinizes agreements, and extracts pivotal clauses, obligations, and timelines with accuracy—radically minimizing labor effort and risk. Equipped with functionality like automated risk alerts, compliance checking, contextual suggestions, and executive-level summaries, the Legal Document Analyzer Agent enables organizations to enhance decision-making, fortify regulatory compliance, and speed up contract lifecycles. As opposed to traditional document management solutions, our solution utilizes enterprise AI products like natural language processing, predictive analytics, and semantic search to deliver real-time insights and prevent any important information from being missed. By integrating business productivity through AI into legal processes, business enterprises can lower operational expenses, curtail errors, and enable legal professionals to concentrate on strategy instead of repetitive review work. For organizations on the path of Industry 4.0 and Industry 5.0 transformation, the solution harmonizes with contract management software, compliance models, and enterprise resource planning systems, providing a future-proof method for AI-powered legal automation. Whether browsing voluminous corporate contracts, scanning compliance-laden agreements, or assisting in litigation processes, Cube AI Solutions\' Legal Document Analyzer Agent facilitates smarter, faster, and more accurate legal document management for the digital age.'
    },
    'lead-generation-agent': {
      title: 'Lead Generation Agent',
      bgImage: '/image/sellm.webp',
      content: 'In Cube AI Solutions, our Lead Generation Agent helps businesses turn clicks into clients by using agentic AI, generative AI, and next-generation AI automation tools to capture, qualify, and nurture leads with precision from multiple digital channels. Built for today\'s enterprises, this smart solution automates website, LinkedIn, online directory, and social media platform lead capture and ensures no lead is left behind. With lead scoring, filtering, and CRM integration built-in, Lead Generation Agent allows sales and marketing teams to prioritize high-value leads, enhance conversion rates, and drive pipeline acceleration. In contrast to legacy lead management systems, our AI-driven lead generation tool integrates enterprise AI solutions like natural language processing, smart scraping, predictive analytics, and data enrichment to provide context-aware insights for more targeted outreach and customer engagement. By integrating business productivity with AI into the sales process, businesses can automate manual labor, streamline campaigns, and get measurable ROI quicker. Created for Industry 4.0 and Industry 5.0 transformation-bound enterprises, the Lead Generation Agent offers an intelligent, scalable, and future-proof method of customer procurement, making it easier for companies to enhance demand creation, improve relationship building, and grow revenue. Whether recording inbound queries, uncovering hidden opportunities, or enhancing existing databases, Cube AI Solutions provides the strength of AI-powered lead generation automation that translates clicks into long-term customers.'
    },
    'logistics-automation': {
      title: 'Logistics & Supply Chain Agent',
      bgImage: '/image/seemb.png',
      content: 'In Cube AI Solutions, our Logistics & Supply Chain Agent equips businesses with intelligent logistics and instant decision-making by tapping the synergized strength of agentic AI, generative AI, and next-generation AI automation tools to optimize end-to-end processes in transport, inventory, and delivery networks. This smart solution offers businesses route optimization, ETA estimation, real-time inventory tracking, demand prediction, and automated notification, maximizing efficiency and cost savings and enhancing on-time delivery performance. In contrast to conventional logistics management systems, our AI-enabled supply chain automation combines highly advanced enterprise AI solutions like predictive analytics, digital twins, and IoT-based visibility to facilitate proactive management of disruptions, intelligent resource allocation, and end-to-end stakeholder collaboration. By integrating business productivity with AI into logistics processes, businesses can lower the cost of operations, minimize downtime, enhance service levels, and scale operations flexibly. Built for global businesses transitioning to Industry 4.0 and Industry 5.0 transformation, the Logistics & Supply Chain Agent facilitates connected ecosystems, green supply chain models, and data-driven decision-making empowering business success in fast-changing markets. Whether optimizing transportation routes, controlling warehouse operations, predicting demand, or delivering last-mile excellence, Cube AI Solutions enables organizations to unleash the future of AI-powered logistics and supply chain automation with unprecedented accuracy, clarity, and scalability.'
    },
    'linkedin-content-agent': {
      title: 'LinkedIn Content Creation Agent',
      bgImage: '/image/sedro.avif',
      content: 'At Cube AI Solutions, our LinkedIn Content Creation Agent enables business leaders, professionals, and companies to turbocharge their personal brand and online presence with AI-powered, trend-inspired, and customized content solutions. Based on agentic AI, generative AI, and sophisticated AI automation tools, the smart solution processes industry trends, audience interest, and engagement metrics to create engaging LinkedIn posts, articles, and updates that appeal to the right audience at the right moment. With such capabilities as tone and style adjustment, auto-scheduling, engagement monitoring, and instant performance insights, the LinkedIn Content Creation Agent helps professionals always post compelling content that generates visibility, credibility, and networking opportunities. In contrast to general-purpose social media utilities, our automated LinkedIn platform harnesses enterprise-level AI applications like natural language generation, sentiment analytics, and predictive modeling to create content that echoes real voice while maximizing reach and impact. By infusing business productivity with AI into individual branding and corporate comms processes, businesses can increase leader visibility, enhance employer branding, and expedite thought leadership in competitive industries. Purposed for future-looking companies adopting Industry 4.0 and Industry 5.0 transformation, the solution grows natively across teams, executives, and enterprise initiatives, positioning LinkedIn as an influential channel for lead generation, brand storytelling, and professional influence. Whatever you do – whether you\'re an entrepreneur, executive, recruiter, or enterprise brand – Cube AI Solutions\' AI-powered LinkedIn Content Creation Agent enables you to unlock the future of personalized, automated, and effective LinkedIn content marketing that inspires trust, authority, and long-term relationships.'
    },
    'travel-planner-agent': {
      title: 'Travel Planner Agent',
      bgImage: '/image/sede.webp',
      content: 'Our Travel Planner Agent at Cube AI Solutions is revolutionizing how people and businesses plan their travels using AI-based travel planning that is intelligent, real-time, and personalized. The solution harnesses the capabilities of agentic AI, generative AI, and sophisticated AI automation technologies to design tailored itineraries, provide real-time flight and hotel recommendations, and offer cost-effective, preference-driven suggestions that constantly evolve based on user requirements. In contrast to conventional booking sites, our AI-based travel planning application combines enterprise AI products like predictive analytics, contextual personalization, and intelligent notifications to provide a seamless end-to-end travel experience. For business travel, corporate events, or leisure holidays, the Travel Planner Agent keeps business productive with AI by conserving time, lowering costs, and avoiding the complexity of dealing with various platforms. With cognitive capabilities such as real-time rescheduling, disruption notifications, and contextual travel guidance, travelers can remain ready and assured during their journey. Built for digitalized organizations and global citizens embracing Industry 4.0 and Industry 5.0 makeover, our platform bridges travel planning with corporate ecosystems, providing scalability, compliance, and more intelligent decision-making. Whether optimizing executive travel, team offsite planning, or personalized vacations, Cube AI Solutions\' Travel Planner Agent unlocks the future of AI-powered travel automation, enabling users to plan smarter and travel smarter with unprecedented convenience and efficiency.'
    },
    'email-automation-agent': {
      title: 'Email Automation Agent',
      bgImage: '/image/sece.png',
      content: 'At Cube AI Solutions, our Email Automation Agent enables organizations to power smarter email campaigns, deeper engagement, and increased conversions through the capabilities of agentic AI, generative AI, and sophisticated AI automation capabilities. Built to eradicate the inefficiencies of human email marketing, this smart solution automates email campaign creation, personalization, and scheduling while responding to recipient behavior in real time. With capabilities including AI-driven personalized message composition, send-time optimization scheduling, auto-follow-up, and sophisticated performance analytics, the Email Automation Agent makes it possible for companies to get the right message to the right people at the right moment. As compared to typical email marketing solutions, our AI-driven email automation tool utilizes enterprise AI solutions like natural language processing, predictive analytics, and behavioral insights to send relevant content that resonates, earns trust, and enhances open and click-through rates. Through the integration of business productivity with AI in customer communication workflows, organizations are able to lower costs, boost efficiency, and gain measurable ROI while fostering long-term customer relationships. Designed for businesses pushing towards Industry 4.0 and Industry 5.0 disruption, the product facilitates data-driven marketing, effortless CRM integration, and campaign scalability on a worldwide scale. Be it lead nurturing, customer re-engagement, or sales growth acceleration, Cube AI Solutions\' AI-powered Email Automation Agent assists businesses in realizing the maximum potential of intelligent, automated, and personalized email marketing toward lasting business success.'
    },
    'pdf-to-excel': {
      title: 'PDF to Excel Data Transformation',
      bgImage: '/image/seweb.avif',
      content: 'In Cube AI Solutions, our AI-Driven PDF to Excel Data Transformation Agent transforms the management of unstructured and semi-structured data for enterprises through the use of agentic AI, generative AI, and sophisticated AI automation technologies to provide accurate, efficient, and scalable data conversion. Manual, time-consuming, and error-ridden traditional approaches to extracting data from PDF to Excel result in formatting discrepancies, data loss, and inefficiencies in operations. Our smart solution addresses these issues with machine learning, natural language processing (NLP), and automated mapping of data, providing 99.9% accuracy in the conversion of even the most intricate tables, reports, and documents into neatly formatted, structured Excel files. Maintaining original structure, layout, and formatting, the agent makes data more usable while avoiding tedious re-keying. In contrast to traditional conversion software, the AI-based PDF to Excel conversion system fully integrates with enterprise AI systems, which make real-time reporting, automated processes, and enhanced data availability across business operations possible. With functionalities such as error-free data extraction, retention of format, automated reporting, and integration, organizations are able to make decisions faster, save costs, and enhance business productivity with AI. Intended for businesses adopting Industry 4.0 and Industry 5.0 transformation, this solution assists finance, healthcare, logistics, legal, and other data-intensive sectors in converting static PDF documents into actionable insights. From financial statements to compliance reports, invoices to operational information, Cube AI Solutions\' AI-powered PDF to Excel Data Transformation Agent enlightens businesses with quicker insights, higher efficiency, and a future-proof method of data automation and digital transformation.'
    },
    'excel-to-pdf': {
      title: 'Excel to PowerPoint Presentation Agent',
      bgImage: '/image/seapp.png',
      content: 'At Cube AI Solutions, our Excel-to-PowerPoint Presentation Agent in Conversational AI offers enterprises to change how they handle reporting and presentations by free-ing them from the inefficiencies of manual data preparation, consolidation, and formatting. Manual preparation of monthly reports from disparate Excel sheets is labor-intensive, prone to errors, and resource-wasteful, tending to cause productivity loss, inconsistency in reporting, and delay in decision-making. Our agentic AI, generative AI, and high-end AI automation tools-powered intelligent solution fully automates the process by merging the data from numerous spreadsheets into a single structured sheet and automatically creating professional PowerPoint presentations with charts, tables, and insights using predefined templates. Our Excel-to-PPT automation solution powered by AI is made sure to maintain consistency, precision, and speed with complete integration into existing enterprise workflows without the need for manual work or formatting. With capabilities like real-time data aggregation, auto-charts, natural language insights, and dynamic reporting, companies can make business happen at a faster turnaround, higher reliability, and greater business productivity with AI. Unlike other reporting tools, our enterprise-level AI solution utilizes conversational intelligence, which allows users to ask for and create presentations through basic natural language commands, thus making reporting and data visualization more intuitive and easier to access. Engineered for Industry 4.0 and Industry 5.0 transformation-seeking organizations, the solution expedites decision-making, minimizes mistakes, and equips analysts, managers, and executives with presentation-ready, ready-to-use insights. Preparing financial overviews, business performance dashboards, or operational reports, Cube AI Solutions\' Conversational AI for Excel-to-PowerPoint Presentation Agent provides an industry-leading solution to AI-powered reporting automation and digital transformation, which simplifies smarter, faster, and more uniform decision-making across industries.'
    }
  }
}

  const handleExploreSolutions = () => {
    navigate('/services');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const section = exploreId && sectionId ? sections[sectionId] : null;

  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Page Not Found
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-6"
          >
            The requested page could not be found.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go Back Home
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`CubeAI Solutions - ${section.title}`}</title>
        <meta
          name="description"
          content={`Explore ${section.title} by CubeAI, offering innovative AI-powered solutions for digital transformation.`}
        />
        <meta
          name="keywords"
          content={`CubeAI Solutions, ${section.title}, AI solutions, automation, digital transformation`}
        />
      </Helmet>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={handleGoBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </motion.button>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              <p className="text-sm text-gray-600">CubeAI Solutions</p>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </motion.nav>

      <section className="relative overflow-hidden bg-white pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[700px]">
            <motion.div
              className="text-gray-800"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl lg:text-6xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {section.title.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="text-lg leading-relaxed mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {section.content}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex space-x-4"
              >
                <button
                  onClick={handleExploreSolutions}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Demo
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src={section.bgImage}
                alt={section.title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionDetail;