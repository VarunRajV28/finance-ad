'use client';

import { useState } from 'react';
import PortfolioSummary from '@/components/dashboard/PortfolioSummary';
// import MarketOverview from '@/components/dashboard/MarketOverview';
// import RecentAlerts from '@/components/dashboard/RecentAlerts';
import WatchlistPreview from '@/components/dashboard/WatchlistPreview';
// import QuickActions from '@/components/dashboard/QuickActions';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <button className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
            New Investment
          </button>
        </div>
      </div>
      
      {/* Top stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-5 shadow dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Portfolio Value</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">$124,736.00</p>
          <p className="mt-1 flex items-center text-sm">
            <span className="text-green-500">↑ 2.5%</span>
            <span className="ml-1 text-gray-500">from yesterday</span>
          </p>
        </div>
        
        <div className="rounded-lg bg-white p-5 shadow dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Today's Gain/Loss</p>
          <p className="mt-1 text-3xl font-semibold text-green-500">+$1,240.56</p>
          <p className="mt-1 flex items-center text-sm">
            <span className="text-green-500">↑ 1.02%</span>
            <span className="ml-1 text-gray-500">today</span>
          </p>
        </div>
        
        <div className="rounded-lg bg-white p-5 shadow dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Open Positions</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">15</p>
          <p className="mt-1 flex items-center text-sm">
            <span className="text-gray-500">across 7 sectors</span>
          </p>
        </div>
        
        <div className="rounded-lg bg-white p-5 shadow dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Risk Assessment</p>
          <p className="mt-1 text-3xl font-semibold text-yellow-500">Moderate</p>
          <p className="mt-1 flex items-center text-sm">
            <span className="text-gray-500">based on your portfolio</span>
          </p>
        </div>
      </div>
      
      {/* Portfolio summary and market overview */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PortfolioSummary />
        {/*<MarketOverview />*/}
      </div>
      
      {/* Watchlist and alerts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WatchlistPreview />
        </div>
        <div>
          {/*<RecentAlerts />*/}
        </div>
      </div>
      
      {/* Quick actions */}
      {/*<QuickActions />*/}
    </div>
  );
}