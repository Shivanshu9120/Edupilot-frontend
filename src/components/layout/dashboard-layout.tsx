'use client';

import { useState, createContext, useContext, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MobileFooterNav } from './mobile-footer-nav';
import { ProfileDropdown } from '@/components/ui/profile-dropdown';
import { Chatbot } from '@/components/ui/chatbot';

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

interface SidebarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within DashboardLayout');
  }
  return context;
};

export function DashboardLayout({ children, sidebar }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start closed on mobile
  const pathname = usePathname();
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth < 1024) { // lg breakpoint
        setSidebarOpen(false);
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen, toggleSidebar }}>
      <div className="min-h-screen bg-background-tertiary">
        <div className="flex h-screen">
          {/* Desktop Sidebar - Collapsible */}
          <div className={cn(
            "bg-background-secondary border-r border-border transition-all duration-300 ease-in-out hidden lg:block z-[40]",
            sidebarOpen ? "w-80" : "w-16"
          )}>
            <div className="h-full overflow-y-auto">
            {sidebarOpen ? sidebar : (
              <div className="p-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">E</span>
                  </div>
                  <div className="space-y-2">
                    <Link href="/dashboard" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer group ${
                      pathname === '/dashboard' ? 'bg-primary/20' : 'bg-card hover:bg-primary/20'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/dashboard' ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </Link>
                    <Link href="/dashboard/assignments" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer group ${
                      pathname === '/dashboard/assignments' ? 'bg-primary/20' : 'bg-card hover:bg-primary/20'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/dashboard/assignments' ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </Link>
                    <Link href="/dashboard/progress" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer group ${
                      pathname === '/dashboard/progress' ? 'bg-primary/20' : 'bg-card hover:bg-primary/20'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/dashboard/progress' ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </Link>
                    <Link href="/dashboard/profile" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer group ${
                      pathname === '/dashboard/profile' ? 'bg-primary/20' : 'bg-card hover:bg-primary/20'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/dashboard/profile' ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </Link>
                    <Link href="/dashboard/settings" className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer group ${
                      pathname === '/dashboard/settings' ? 'bg-primary/20' : 'bg-card hover:bg-primary/20'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors ${
                        pathname === '/dashboard/settings' ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0">
          {/* Header - Fixed on all screens */}
          <div className={cn(
            "fixed top-0 right-0 z-[50] bg-background-secondary border-b border-border transition-all duration-300",
            "lg:left-16", // Desktop: start after collapsed sidebar
            sidebarOpen ? "lg:left-80" : "lg:left-16", // Desktop: adapt to sidebar state
            "left-0" // Mobile: full width
          )}>
              <div className="flex items-center justify-between px-4 py-3">
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg bg-card/20 backdrop-blur-md border border-primary/30 text-primary hover:bg-card/30 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">E</span>
                  </div>
                  <span className="font-semibold text-foreground">EduPilot</span>
                </div>
                
                       <div className="flex items-center space-x-2">
                         <ProfileDropdown />
                       </div>
              </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
              <div className="lg:hidden fixed inset-0 z-[70]">
                <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
                <div className="fixed left-0 top-0 h-full w-80 bg-background-secondary border-r border-border overflow-y-auto">
                  {sidebar}
                </div>
              </div>
            )}

            {/* Content Area */}
            <div className={cn(
              "flex-1 overflow-y-auto",
              "lg:pt-16 pt-16 pb-20" // Fixed header padding for both mobile and desktop
            )}>
              <div className="min-h-full">
                {children}
              </div>
            </div>

          {/* Mobile Footer Navigation */}
          <MobileFooterNav />
          </div>
        </div>
        
        {/* Floating Chatbot */}
        <Chatbot />
      </div>
    </SidebarContext.Provider>
  );
}
