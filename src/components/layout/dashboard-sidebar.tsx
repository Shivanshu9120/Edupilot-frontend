'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { ProfileCompletion } from '@/lib/types';
import { SAMPLE_PROFILE_COMPLETION, DASHBOARD_NAV_ITEMS } from '@/lib/dashboard-constants';

interface DashboardSidebarProps {
  profileCompletion?: ProfileCompletion;
}

export function DashboardSidebar({ profileCompletion = SAMPLE_PROFILE_COMPLETION }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="p-6 space-y-6">
      {/* Profile Completion */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Complete Profile
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {profileCompletion.overall}% Complete
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${profileCompletion.overall}%` }}
              />
            </div>
            
            <div className="space-y-2">
              {profileCompletion.sections.slice(0, 5).map((section) => (
                <div key={section.id} className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    section.completed ? 'bg-success' : 'bg-muted'
                  }`}>
                    {section.completed && (
                      <svg className="w-2 h-2 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-card-foreground">
                    {section.label}
                  </span>
                </div>
              ))}
              <button className="text-sm text-primary hover:text-primary/80">
                Show More
              </button>
            </div>
            
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Complete Your Profile
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Learning Status */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Learning Status
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-card-foreground">Active Learning</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-6 bg-accent rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-background rounded-full shadow top-1 right-1"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-card-foreground">Study Mode</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" defaultChecked />
                <div className="w-10 h-6 bg-accent rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-background rounded-full shadow top-1 right-1"></div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Navigation */}
      <div className="space-y-2">
        {DASHBOARD_NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                isActive 
                  ? 'bg-primary/20 text-primary' 
                  : 'text-card-foreground hover:bg-background-secondary'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              📚 Browse Courses
            </Button>
            <Button variant="outline" className="w-full justify-start">
              📝 Create Assignment
            </Button>
            <Button variant="outline" className="w-full justify-start">
              🎯 Set Goals
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
