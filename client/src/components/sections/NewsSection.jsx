import React, { useState, useEffect } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import NewsCard from '../ui/NewsCard';
import { fetchNews } from '../../api/apiService';

function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews();
        // We'll display the 3 most recent articles
        setNews(newsData.slice(0, 3)); 
      } catch (error) {
        console.error("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <SectionWrapper id="news" title="Latest News">
      {loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.length > 0 ? (
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
      )}
    </SectionWrapper>
  );
}

export default NewsSection;