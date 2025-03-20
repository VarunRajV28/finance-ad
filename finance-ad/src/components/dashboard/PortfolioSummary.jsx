'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data - replace with actual data fetching
const portfolioData = [
  { date: 'Jan', value: 65000 },
  { date: 'Feb', value: 67800 },
  { date: 'Mar', value: 69200 },
  { date: 'Apr', value: 68500 },
  { date: 'May', value: 74500 },
  { date: 'Jun', value: 81200 },
  { date: 'Jul', value: 87500 },
  { date: 'Aug', value: 86200 },
  { date: 'Sep', value: 92000 },
  { date: 'Oct', value: 97800 },
  { date: 'Nov', value: 112500 },
  { date: 'Dec', value: 124736 },
];

export default function PortfolioSummary() {
  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Portfolio Performance</h2>
        <div className="flex space-x-2">
          <select className="rounded-md border-gray-300 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <option>1M</option>
            <option>3M</option>
            <option selected>1Y</option>
            <option>All</option>
          </select>
        </div>
      </div>
      
      <div className="mt-2">
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">$124,736.00</p>
          <p className="ml-2 text-sm font-medium text-green-500">+53.4% (+$47,280.00)</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">vs. 12 months ago</p>
      </div>
      
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={portfolioData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
            <XAxis dataKey="date" tick={{ fill: '#6B7280' }} axisLine={false} tickLine={false} />
            <YAxis 
              tick={{ fill: '#6B7280' }} 
              axisLine={false} 
              tickLine={false} 
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
              labelFormatter={(label) => `${label}`}
              contentStyle={{ 
                backgroundColor: 'rgb(31, 41, 55)',
                border: 'none',
                borderRadius: '0.375rem',
                color: 'white',
                padding: '8px 12px',
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6, fill: '#3B82F6' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Return</p>
          <p className="mt-1 text-lg font-semibold text-green-500">+53.4%</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Invested</p>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">$89,450</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Gain</p>
          <p className="mt-1 text-lg font-semibold text-green-500">+$35,286</p>
        </div>
      </div>
    </div>
  );
}