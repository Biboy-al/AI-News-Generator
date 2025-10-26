"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  author: string;
  imageUrl: string;
  link: string;
  pubDate: string;
  category?: string;
}

export function RecommendedForYou() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  async function fetchArticles() {
    setLoading(true);
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

  const handleRefresh = () => {
    fetchArticles();
  };

  if (loading) {
    return (
      <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Recommended for you</h2>
        </div>
        <div className="text-center">Loading articles...</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-12 bg-white">
      {/* Header with refresh button */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Recommended for you</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleRefresh}
          className="flex items-center gap-2 text-sm"
        >
          <RefreshCw size={16} />
          Refresh for more
        </Button>
      </div>
      
      {/* Grid of 6 articles (2 rows of 3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((article, index) => (
          <div key={index} className="flex flex-col">
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-3 overflow-hidden bg-gray-100">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Category/Source */}
              <p className="text-xs text-gray-600 mb-2">
                {article.category || article.author}
              </p>

              {/* Title */}
              <h3 className="text-base font-bold mb-2 leading-tight group-hover:underline">
                {article.title}
              </h3>

              {/* Date */}
              <p className="text-xs text-gray-500">
                {new Date(article.pubDate).toLocaleDateString('en-NZ', {
                  day: 'numeric',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}