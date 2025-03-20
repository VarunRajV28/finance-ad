import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function NewsCard({ news }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-md dark:bg-gray-800">
      {news.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover"
          />
          {news.category && (
            <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white">
              {news.category}
            </span>
          )}
        </div>
      )}
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 truncate dark:text-white">
          {news.title}
        </h3>
        
        <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-1 h-4 w-4" />
            <span>{news.readTime} min read</span>
          </div>
        </div>
        
        <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {news.summary}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700">
              <img
                src={news.source.logo}
                alt={news.source.name}
                className="h-full w-full rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder.svg';
                }}
              />
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {news.source.name}
            </span>
          </div>
          
          <button className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}