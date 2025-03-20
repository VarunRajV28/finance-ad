'use client';

import { useState } from 'react';
import { SparklineChart } from '@tremor/react';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

export default function StockCard({ stock }) {
  const [isFavorite, setIsFavorite] = useState(stock.isFavorite || false);
  
  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };
  
  // Determine text color based on price change
  const priceChangeColor = stock.priceChange >= 0 
    ? 'text-green-500' 
    : 'text-red-500';
  
  // Format price change with + or - sign
  const formattedPriceChange = `${stock.priceChange >= 0 ? '+' : ''}${stock.priceChange}%`;
  
  return (
    <div className="rounded-lg bg-white p-4 shadow transition-all hover:shadow-md dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{stock.symbol}</h3>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{stock.name}</span>
          </div>
          <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">${stock.price}</p>
          <p className={`mt-1 text-sm font-medium ${priceChangeColor}`}>
            {formattedPriceChange} {stock.priceChange >= 0 ? '↑' : '↓'}
          </p>
        </div>
        
        <button 
          onClick={toggleFavorite}
          className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-yellow-500 dark:hover:bg-gray-700"
        >
          {isFavorite ? (
            <StarSolidIcon className="h-5 w-5 text-yellow-500" />
          ) : (
            <StarIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <div className="mt-3 h-12">
        <SparklineChart
          data={stock.chartData}
          categories={['value']}
          colors={stock.priceChange >= 0 ? ['emerald'] : ['rose']}
          showAnimation={false}
          showGridLines={false}
          showLegend={false}
          showXAxis={false}
          showYAxis={false}
          className="h-12"
        />
      </div>
      
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Open</p>
          <p className="font-medium text-gray-900 dark:text-white">${stock.open}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">High</p>
          <p className="font-medium text-gray-900 dark:text-white">${stock.high}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Low</p>
          <p className="font-medium text-gray-900 dark:text-white">${stock.low}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Vol</p>
          <p className="font-medium text-gray-900 dark:text-white">{stock.volume}M</p>
        </div>
      </div>
    </div>
  );
}