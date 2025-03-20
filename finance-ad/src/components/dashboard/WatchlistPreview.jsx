'use client';

import { useState } from 'react';
import Link from 'next/link';
import StockCard from '@/components/cards/StockCard';
import { PlusIcon } from '@heroicons/react/24/outline';

// Sample data - replace with actual data fetching
const watchlistData = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: '185.92',
    priceChange: 1.45,
    open: '183.75',
    high: '186.40',
    low: '183.52',
    volume: '54.2',
    chartData: [
      { date: '1', value: 180 },
      { date: '2', value: 182 },
      { date: '3', value: 181 },
      { date: '4', value: 184 },
      { date: '5', value: 183 },
      { date: '6', value: 186 },
    ],
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    price: '420.45',
    priceChange: 0.82,
    open: '417.32',
    high: '421.15',
    low: '416.90',
    volume: '22.1',
    chartData: [
      { date: '1', value: 415 },
      { date: '2', value: 418 },
      { date: '3', value: 417 },
      { date: '4', value: 419 },
      { date: '5', value: 420 },
      { date: '6', value: 420.45 },
    ],
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: '875.28',
    priceChange: 2.35,
    open: '860.15',
    high: '878.50',
    low: '858.75',
    volume: '38.4',
    chartData: [
      { date: '1', value: 850 },
      { date: '2', value: 855 },
      { date: '3', value: 865 },
      { date: '4', value: 860 },
      { date: '5', value: 870 },
      { date: '6', value: 875.28 },
    ],
  },
  {
    symbol: 'META',
    name: 'Meta Platforms',
    price: '512.73',
    priceChange: -1.25,
    open: '519.85',
    high: '520.40',
    low: '511.20',
    volume: '18.7',
    chartData: [
      { date: '1', value: 522 },
      { date: '2', value: 520 },
      { date: '3', value: 518 },
      { date: '4', value: 515 },
      { date: '5', value: 513 },
      { date: '6', value: 512.73 },
    ],
    isFavorite: true,
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: '164.25',
    priceChange: -2.15,
    open: '168.50',
    high: '169.10',
    low: '163.80',
    volume: '45.2',
    chartData: [
      { date: '1', value: 170 },
      { date: '2', value: 168 },
      { date: '3', value: 166 },
      { date: '4', value: 165 },
      { date: '5', value: 163 },
      { date: '6', value: 164.25 },
    ],
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com',
    price: '182.30',
    priceChange: 0.75,
    open: '180.95',
    high: '183.15',
    low: '180.65',
    volume: '32.8',
    chartData: [
      { date: '1', value: 179 },
      { date: '2', value: 180 },
      { date: '3', value: 181 },
      { date: '4', value: 182 },
      { date: '5', value: 181 },
      { date: '6', value: 182.30 },
    ],
    isFavorite: true,
  },
];

export default function WatchlistPreview() {
  const [activeTab, setActiveTab] = useState('all');
  
  const tabs = [
    { id: 'all', name: 'All' },
    { id: 'technology', name: 'Technology' },
    { id: 'energy', name: 'Energy' },
    { id: 'finance', name: 'Finance' },
  ];
  
  return (
    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Watchlist</h2>
          <Link 
            href="/watchlist" 
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all
          </Link>
        </div>
        
        <div className="flex overflow-x-auto px-4 sm:px-6">
          <div className="flex space-x-8 pb-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {watchlistData.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
        <div className="flex h-full min-h-40 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
          <button className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <PlusIcon className="h-8 w-8" />
            <span className="mt-2 text-sm font-medium">Add Stock</span>
          </button>
        </div>
      </div>
    </div>
  );
}