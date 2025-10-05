'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { CoursesSection } from '@/components/dashboard/courses-section';

export default function DashboardPage() {
  return (
    <DashboardLayout
      sidebar={<DashboardSidebar />}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          {/* Quick Stats */}
          <div className="p-6 bg-background-tertiary border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-xl">📚</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Active Courses</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">3</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-warning text-xl">📝</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Pending Assignments</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-warning transition-colors duration-300">2</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-accent text-xl">⏱️</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Study Hours</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">12h</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-success text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Achievements</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-success transition-colors duration-300">5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <div className="p-6">
            <div className="mb-6">
              <div className="border-b border-border">
                <nav className="-mb-px flex space-x-8">
                  <button className="border-b-2 border-primary py-2 px-1 text-sm font-medium text-primary">
                    Courses
                  </button>
                  <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-foreground-secondary hover:text-foreground hover:border-border">
                    Assignments
                  </button>
                  <button className="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-foreground-secondary hover:text-foreground hover:border-border">
                    Progress
                  </button>
                </nav>
              </div>
            </div>

            {/* Content based on active tab */}
            <CoursesSection />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
