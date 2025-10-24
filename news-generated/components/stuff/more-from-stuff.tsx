"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

interface Article {
  title: string;
  author: string;
  imageUrl: string;
  link: string;
  pubDate: string;
}

export function MoreFromStuff() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch('/api/rss-feed');
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
        <h2 className="text-center tracking-[0.25em] font-bold text-[1.25rem] uppercase font-sans">
          MORE FROM STUFF
        </h2>
        <div className="text-center">Loading articles...</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-12 bg-white">
      <h2 className="text-3xl font-black text-center mb-8 tracking-tight">MORE FROM STUFF</h2>
      
      {/* Top 3 articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {articles.slice(0, 3).map((article, index) => (
          <div key={index} className="border-r last:border-r-0 pr-6 last:pr-0 border-purple-300">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-base font-bold mb-2 hover:text-purple-600 cursor-pointer transition">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600">{article.author}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="border-t pt-8  border-purple-300">
      {/* Bottom 2 articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.slice(3, 5).map((article, index) => (
          <div key={index} className="border-r last:border-r-0 pr-8 last:pr-0  border-purple-300">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex flex-col">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={200}
                height={150}
                className="w-full h-48 object-cover flex-shrink-0 rounded mb-4"
              />

              <div>
                <h3 className="text-base font-bold mb-2 hover:text-purple-600 cursor-pointer transition">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">{article.author}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}