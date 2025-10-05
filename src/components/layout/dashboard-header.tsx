'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useSidebar } from './dashboard-layout';

export function DashboardHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="bg-background-secondary border-b border-border hidden lg:block">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Desktop Sidebar Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-card/20 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Welcome back, Student! 👋
              </h1>
              <p className="text-foreground-secondary">
                Ready to continue your learning journey?
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="outline" size="sm" className="relative">
              🔔
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full"></span>
            </Button>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Chat */}
            <Button variant="outline" size="sm">
              💬
            </Button>
            
            {/* Profile */}
            <div className="relative">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                S
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
