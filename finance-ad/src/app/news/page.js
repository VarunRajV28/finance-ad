'use client';

import { useState } from 'react';
import NewsCard from '@/components/cards/NewsCard';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Sample data - replace with actual data fetching
const newsData = [
  {
    id: 1,
    title: "Fed Signals Potential Interest Rate Cut in Coming Months",
    summary: "Federal Reserve officials indicated they could begin lowering interest rates in the coming months if inflation continues to cool, minutes from their latest meeting showed.",
    image: "/api/placeholder/800/400",
    date: "Mar 18, 2025",
    readTime: 5,
    category: "Economy",
    source: {
      name: "Financial Times",
      logo: "/api/placeholder/50/50"
    }
  },
  {
    id: 2,
    title: "Tech Giants Lead Market Rally as AI Investments Surge",
    summary: "Technology companies are leading a market rally as investors bet on continued growth in artificial intelligence. Major tech firms announced increased spending on AI infrastructure.",
    image: "/api/placeholder/800/400",
    date: "Mar 17, 2025",
    readTime: 4,
    category: "Technology",
    source: {
      name: "Bloomberg",
      logo: "/api/placeholder/50/50"
    }
  },
  {
    id: 3,
    title: "Global Supply Chain Stabilizing After Recent Disruptions",
    summary: "Global supply chains are showing signs of stabilization following disruptions earlier this year, potentially easing inflationary pressures on consumer goods.",
    image: "/api/placeholder/800/400",
    date: "Mar 16, 2025",
    readTime: 6,
    category: "Global Markets",
    source: {
      name: "Reuters",
      logo: "/api/placeholder/50/50"
    }
  },
  {
    id: 4,
    title: "Renewable Energy Stocks Soar on New Climate Policy Framework",
    summary: "Shares of renewable energy companies jumped after the announcement of a new international climate policy framework that promises significant investments in clean energy.",
    image: "/api/placeholder/800/400",
    date: "Mar 15, 2025",
    readTime: 5,
    category: "Energy",
    source: {
      name: "CNBC",
      logo: "/api/placeholder/50/50"
    }
  },
  {
    id: 5,
    title: "Corporate Earnings Beat Expectations in Q1 Reporting Season",
    summary: "The first quarter earnings season has seen companies across multiple sectors reporting better-than-expected results, signaling robust economic activity.",
    image: "/api/placeholder/800/400",
    date: "Mar 14, 2025",
    readTime: 3,
    category: "Earnings",
    source: {
      name: "Wall Street Journal",
      logo: "/api/placeholder/50/50"
    }
  },
  {
    id: 6,
    title: "Cryptocurrency Market Stabilizes After Recent Volatility",
    summary: "The cryptocurrency market has shown signs of stabilization following weeks of high volatility, with Bitcoin holding steady above key support levels.",
    image: "/api/placeholder/800/400",
    date: "Mar 13, 2025",
    readTime: 4,
    category: "Cryptocurrency",
    source: {
      name: "CoinDesk",
      logo: "/api/placeholder/50/50"
    }
  },
];

const categories = [
  "All",
  "Market Trends",
  "Economy",
  "Technology",
  "Energy",
  "Cryptocurrency",
  "Global Markets",
  "Earnings"
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          News & Market Insights
        </h1>
        
        <div className="relative max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-400 dark:focus:ring-blue-500"
            placeholder="Search news articles..."
          />
        </div>
      </div>
      
      {/* Category tabs */}
      <div className="scrollbar-hide -mx-4 flex overflow-x-auto pb-2 sm:mx-0">
        <div className="flex space-x-2 px-4 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured news */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      
      {/* Load more button */}
      <div className="mt-8 flex justify-center">
        <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-700">
          Load More Articles
        </button>
      </div>
    </div>
  );
}