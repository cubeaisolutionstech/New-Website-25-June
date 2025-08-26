import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Share2 } from 'lucide-react';
import { getArticlesByCategory } from '../data/articles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Technology Trends', 'AI Ethics', 'Business Strategy', 'Case Studies'];
  const filteredInsights = getArticlesByCategory(activeCategory);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="insights"
      className="py-24 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #b2d0eeff, #e6f0ff)',
      }}
    >
      <Helmet>
        <title>CubeAI Insights | Knowledge Hub | AI & ML Trends 2025</title>
        <meta
          name="description"
          content="Explore CubeAI Insights: Unlock deep insights, predictive trends, and transformative strategies in AI, machine learning, and innovation as of August 2025."
        />
        <meta
          name="keywords"
          content="CubeAI Insights, AI trends 2025, machine learning insights, emerging technology trends, AI ethics and governance, responsible AI, AI in business strategy, digital transformation strategies, AI case studies, real-world AI applications, knowledge hub for artificial intelligence, future of AI and ML, innovation in artificial intelligence, predictive analytics trends, next-gen business automation, enterprise AI solutions"
        />
      </Helmet>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-purple-400 opacity-20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-400 opacity-20 rounded-full blur-[160px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            CubeAI{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Hub
            </span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto leading-relaxed">
            Empower your decisions with AI-driven insights, forecast future trends with precision, and revolutionize strategies through next-gen innovation.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Insight */}
        {filteredInsights.some((insight) => insight.featured) && (
          <div className="mb-16" data-aos="zoom-in">
            {filteredInsights
              .filter((insight) => insight.featured)
              .slice(0, 1)
              .map((insight) => (
                <article
                  key={insight.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-square bg-gray-200 overflow-hidden">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        width={600}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-6">
                        <span className="text-sm text-purple-600 font-semibold bg-purple-50 px-4 py-2 rounded-full">
                          Featured
                        </span>
                        <button
                          onClick={() => setActiveCategory(insight.category)}
                          className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full hover:bg-purple-100 hover:text-purple-600"
                        >
                          {insight.category}
                        </button>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg">{insight.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                        </div>
                        <a
                          href={`/article/${insight.id}`}
                          className="group/btn flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        )}

        {/* Grid Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {filteredInsights
            .filter((insight) => !insight.featured)
            .map((insight, index) => (
              <article
                key={insight.id}
                data-insight-id={insight.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden border border-gray-100"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gray-200 overflow-hidden relative">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setActiveCategory(insight.category)}
                      className="text-sm text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full hover:bg-purple-100"
                    >
                      {insight.category}
                    </button>
                    <button className="text-gray-400 hover:text-purple-600">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{insight.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                    </div>
                    <a
                      href={`/article/${insight.id}`}
                      className="group/btn flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
