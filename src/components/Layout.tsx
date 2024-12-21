'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useThemeStore } from '@/lib/store';

const navItems = [
  { name: 'ダッシュボード', href: '/' },
  { name: 'FAQ登録', href: '/faq-registration' },
  { name: '個人設定', href: '/personal-settings' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpened, setIsOpened] = useState(false);
  const primaryColor = useThemeStore((state) => state.primaryColor);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav
        className={`bg-gradient-to-r shadow-md`}
        style={{
          backgroundImage: `linear-gradient(to right, ${primaryColor}, ${primaryColor}CC)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <Logo className="h-8 w-auto sm:h-10 text-white" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center text-white hover:bg-white/20 hover:text-white px-3 py-2 rounded-md text-sm font-medium trasition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpened(!isOpened)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">メニューを開く</span>
                {isOpened ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpened && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="border-transparent text-white hover:border-white/20 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default Layout;
