import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Share2, ArrowLeft, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { getArticleById, getRelatedArticles } from '../data/articles';
import Header from '../components/Header';

// Define the Article interface to match the data structure
interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  featured?: boolean;
  image: string;
  flowchartImage?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string | string[]; // Allow string or string[]
      subsections?: Array<{
        title: string;
        content: string | string[];
      }>;
    }>;
    conclusion: string;
  };
  tags: string[];
}

const ArticlePage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    const foundArticle = getArticleById(id);
    if (foundArticle) {
      setArticle(foundArticle);
      setRelatedArticles(getRelatedArticles(id));
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    const shareUrl = window.location.href;
    if (article) {
      if (navigator.share) {
        navigator
          .share({
            title: article.title,
            text: article.excerpt,
            url: shareUrl,
          })
          .catch((err) => console.error('Share failed:', err));
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('Link copied to clipboard!');
        }).catch((err) => {
          console.error('Clipboard copy failed:', err);
          alert('Failed to copy link.');
        });
      } else {
        alert('Sharing is not supported on this device.');
      }
    } else {
      alert('Cannot share: Article not found.');
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900 mb-4">Article not found</span>
         <a href="/" className="text-purple-600 hover:text-purple-700">
  Return to homepage
</a>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
              <a href="/" className="hover:text-purple-600">Home</a>
  <span>/</span>
  <a href="/insights" className="hover:text-purple-600">Insights</a>
              <span className="text-gray-900">{article.category}</span>
            </nav>

            <div className="flex items-center space-x-4 mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium">
                <Tag className="w-4 h-4 mr-2" />
                {article.category}
              </span>
              {article.featured && (
                <span className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 font-medium">
                  Featured Article
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{article.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 hover:text-purple-600 transition-colors duration-300"
                aria-label="Share article"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <img
                src={article.author.avatar || '/default-avatar.png'}
                alt={article.author.name}
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => (e.currentTarget.src = '/default-avatar.png')}
              />
              <div>
                <h3 className="font-semibold text-gray-900">{article.author.name}</h3>
                <p className="text-gray-600">{article.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={article.image || '/default-image.png'}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = '/default-image.png')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-purple max-w-none">
              <div className="text-xl leading-relaxed text-gray-700 mb-12 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                <BookOpen className="w-8 h-8 text-purple-600 mb-4" />
                {article.content.introduction}
              </div>

              {article.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-lg leading-relaxed text-gray-700 mb-8">{section.content}</p>
                  )}
                  {section.subsections && Array.isArray(section.subsections) && (
                    <div className="space-y-8">
                      {section.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="ml-8 pl-6 border-l-4 border-purple-200">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">{sub.title}</h3>
                          {Array.isArray(sub.content) ? (
                            <ul className="space-y-3">
                              {sub.content.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <span className="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></span>
                                  <span className="text-gray-700 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-700 leading-relaxed">{sub.content}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Flowchart Image Block */}
              {article.flowchartImage && (
                <div className="my-16 bg-gray-50 p-6">
                  <img
                    src={article.flowchartImage}
                    alt="AI Agent Flowchart"
                    className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
                    onError={(e) => (e.currentTarget.src = '/default-flowchart.png')}
                  />
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Figure: Workflow of AI Agent Collaboration
                  </p>
                </div>
              )}

              {/* Conclusion */}
              <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
                <p className="text-lg leading-relaxed text-gray-700">{article.content.conclusion}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  to="/insights"
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                  aria-label="Back to Insights"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Insights</span>
                </Link>
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors duration-300"
                  aria-label="Share article"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share Article</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.slice(0, 3).map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/article/${rel.id}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                    aria-label={`Read article: ${rel.title}`}
                  >
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={rel.image || '/default-image.png'}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => (e.currentTarget.src = '/default-image.png')}
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-purple-600 font-semibold bg-purple-50 px-3 py-1 rounded-full">
                        {rel.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-4 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{rel.excerpt}</p>
                      <div className="flex items-center justify-end text-sm text-gray-500">
                        <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                          <span className="mr-1">Read</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticlePage;