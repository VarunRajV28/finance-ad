'use client';

import { useState } from 'react';
import { PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function InsightsPage() {
  const [query, setQuery] = useState('');
  
  // Sample AI-generated insights
  const aiInsights = [
    {
      id: 1,
      title: "Portfolio Analysis",
      content: "Your portfolio is well-diversified across tech and healthcare, but appears underweight in energy and materials sectors. Consider adding exposure to these sectors to improve overall diversification.",
      date: "Today, 10:15 AM"
    },
    {
      id: 2,
      title: "Market Trend Alert",
      content: "Recent market indicators suggest increasing volatility in the coming weeks. Your current risk exposure is moderate, but you may want to consider hedging strategies for your large tech positions.",
      date: "Yesterday, 3:45 PM"
    },
    {
      id: 3,
      title: "Stock Analysis: AAPL",
      content: "Apple's recent product announcements and services growth suggest strong revenue potential in the next quarter. Technical indicators show support at current price levels with potential upside of 8-12% based on historical patterns.",
      date: "Mar 18, 2025"
    }
  ];
  
  // Sample suggested queries
  const suggestedQueries = [
    "Analyze my portfolio risk profile",
    "What sectors should I invest in now?",
    "Explain recent market volatility",
    "How should I rebalance my portfolio?",
    "Analyze TSLA stock performance",
    "What's the outlook for tech stocks?"
  ];
  
  return (
    <div className="flex h-[calc(100vh-120px)] flex-col">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        AI Investment Insights
      </h1>
      <p className="mt-1 text-gray-500 dark:text-gray-400">
        Get personalized investment analysis and insights powered by AI
      </p>
      
      {/* Chat messages area */}
      <div className="mt-6 flex-1 overflow-y-auto rounded-lg bg-white p-4 shadow dark:bg-gray-800">
        <div className="space-y-4">
          {/* Welcome message */}
          <div className="flex items-start">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <SparklesIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-3">
              <div className="rounded-lg rounded-tl-none bg-gray-100 p-3 dark:bg-gray-700">
                <p className="text-sm text-gray-900 dark:text-white">
                  Welcome to AI Investment Insights! Ask me anything about market trends, investment strategies, or your portfolio analysis.
                </p>
              </div>
              <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">Today, 9:30 AM</span>
            </div>
          </div>
          
          {/* AI-generated insights */}
          {aiInsights.map((insight) => (
            <div key={insight.id} className="flex items-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <SparklesIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-3">
                <div className="rounded-lg rounded-tl-none bg-gray-100 p-3 dark:bg-gray-700">
                  <h3 className="mb-1 font-medium text-gray-900 dark:text-white">{insight.title}</h3>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {insight.content}
                  </p>
                </div>
                <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">{insight.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Suggested queries */}
      <div className="mt-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800">
        <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Suggested Queries
        </h3>
        <div className="flex flex-wrap gap-2">
          {suggestedQueries.map((query, index) => (
            <button
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              {query}
            </button>
          ))}
        </div>
      </div>
      
      {/* Input area */}
      <div className="mt-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full rounded-lg border-0 bg-white py-3 pl-4 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-400 dark:focus:ring-blue-500"
            placeholder="Ask about investments, market trends, or portfolio advice..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="submit"
              className="rounded-full bg-blue-600 p-1.5 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}