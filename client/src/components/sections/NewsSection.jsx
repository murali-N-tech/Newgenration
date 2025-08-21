import React, { useState, useEffect } from 'react';
import NewsCard from '../ui/NewsCard';
import SkeletonCard from '../ui/SkeletonCard';
import { fetchNews } from '../../api/apiService';

function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const newsData = await fetchNews();
        setNews(newsData.slice(0, 3)); 
      } catch (error) {
        console.error("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return (
    <section id="news" className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00008B] mb-12 font-display">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} className="h-64" />
            ))
          ) : news.length > 0 ? (
            news.map((article) => (
              <NewsCard
                key={article._id}
                title={article.title}
                content={article.content}
                date={article.date}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No news articles found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
