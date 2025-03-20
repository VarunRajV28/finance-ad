import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MobileNav from '@/components/layout/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FinanceAdvisor - AI-Powered Investment Analysis',
  description: 'Get personalized financial insights and investment analysis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden md:flex md:w-64 md:flex-col">
            <Sidebar />
          </div>
          
          {/* Main content */}
          <div className="flex flex-1 flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              {children}
            </main>
            {/* Mobile navigation - visible only on mobile */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}