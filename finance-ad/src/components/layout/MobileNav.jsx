'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  ChartPieIcon, 
  EyeIcon, 
  LightBulbIcon, 
  NewspaperIcon, 
  BellAlertIcon,
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Portfolio', href: '/portfolio', icon: ChartPieIcon },
  { name: 'Watchlist', href: '/watchlist', icon: EyeIcon },
  { name: 'Insights', href: '/insights', icon: LightBulbIcon },
  { name: 'News', href: '/news', icon: NewspaperIcon },
  { name: 'Alerts', href: '/alerts', icon: BellAlertIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function MobileNav() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed bottom-0 left-0 z-20 flex w-full justify-around border-t border-gray-200 bg-white py-2 dark:border-gray-700 dark:bg-gray-800">
      {navItems.slice(0, 5).map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center px-3 py-2 text-xs font-medium ${
              isActive
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <item.icon
              className={`mb-1 h-6 w-6 ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}