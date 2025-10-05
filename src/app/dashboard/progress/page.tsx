'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ProgressPage() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');

  const progressMetrics = [
    {
      id: 1,
      label: 'Study Hours',
      value: 42,
      max: 50,
      unit: 'hours',
      trend: 'up',
      change: '+12%',
      icon: '⏱️'
    },
    {
      id: 2,
      label: 'Courses Completed',
      value: 1,
      max: 6,
      unit: 'courses',
      trend: 'up',
      change: '+1',
      icon: '📚'
    },
    {
      id: 3,
      label: 'Assignments Submitted',
      value: 1,
      max: 6,
      unit: 'assignments',
      trend: 'stable',
      change: '0%',
      icon: '📝'
    },
    {
      id: 4,
      label: 'Average Grade',
      value: 87,
      max: 100,
      unit: '%',
      trend: 'up',
      change: '+5%',
      icon: '🎯'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Course Completed',
      description: 'Successfully completed your first course',
      icon: '🏆',
      earned: true,
      earnedDate: '2024-01-10'
    },
    {
      id: 2,
      title: 'Study Streak',
      description: 'Study for 7 consecutive days',
      icon: '🔥',
      earned: true,
      earnedDate: '2024-01-08'
    },
    {
      id: 3,
      title: 'Perfect Score',
      description: 'Get 100% on any assignment',
      icon: '💯',
      earned: false,
      progress: 0
    },
    {
      id: 4,
      title: 'Knowledge Seeker',
      description: 'Complete 5 courses',
      icon: '🎓',
      earned: false,
      progress: 20
    },
    {
      id: 5,
      title: 'Time Master',
      description: 'Study for 100 hours total',
      icon: '⏰',
      earned: false,
      progress: 42
    },
    {
      id: 6,
      title: 'Assignment Ace',
      description: 'Submit 10 assignments',
      icon: '📋',
      earned: false,
      progress: 10
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Completed lesson',
      course: 'Introduction to Mathematics',
      lesson: 'Quadratic Equations',
      time: '2 hours ago',
      icon: '✅'
    },
    {
      id: 2,
      action: 'Submitted assignment',
      course: 'Digital Marketing Strategy',
      assignment: 'Marketing Strategy Presentation',
      time: '1 day ago',
      icon: '📤'
    },
    {
      id: 3,
      action: 'Started course',
      course: 'Data Science Fundamentals',
      time: '3 days ago',
      icon: '🚀'
    },
    {
      id: 4,
      action: 'Earned achievement',
      achievement: 'Study Streak',
      time: '5 days ago',
      icon: '🏆'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '📊';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600 dark:text-green-400';
      case 'down': return 'text-red-600 dark:text-red-400';
      case 'stable': return 'text-gray-600 dark:text-gray-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <DashboardLayout
      sidebar={<DashboardSidebar />}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          {/* Page Header */}
          <div className="p-6 bg-background-tertiary border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Progress</h1>
                <p className="text-muted-foreground">Track your learning journey and achievements</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as 'week' | 'month' | 'year')}
                  className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Export Report
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Progress Metrics */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Learning Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {progressMetrics.map((metric) => (
                  <Card key={metric.id} className="border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{metric.icon}</div>
                          <div>
                            <div className="text-sm text-foreground-secondary">{metric.label}</div>
                            <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {metric.value} {metric.unit}
                            </div>
                          </div>
                        </div>
                        <div className={`text-sm ${getTrendColor(metric.trend)}`}>
                          {getTrendIcon(metric.trend)} {metric.change}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(metric.value / metric.max) * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {metric.value} of {metric.max} {metric.unit}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Achievements */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Achievements</h2>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className={`border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group ${achievement.earned ? 'border-primary/50' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`text-3xl ${achievement.earned ? 'opacity-100' : 'opacity-50'}`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-semibold ${achievement.earned ? 'text-primary' : 'text-card-foreground'}`}>
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                            {achievement.earned && achievement.earnedDate ? (
                              <p className="text-xs text-primary mt-1">
                                Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                              </p>
                            ) : (
                              <div className="mt-2">
                                <div className="w-full bg-muted rounded-full h-1">
                                  <div
                                    className="bg-gradient-to-r from-green-500 to-green-600 h-1 rounded-full transition-all duration-300"
                                    style={{ width: `${achievement.progress}%` }}
                                  />
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  {achievement.progress}% complete
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <Card key={activity.id} className="border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">
                              {activity.action}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {activity.course && `${activity.course}`}
                              {activity.lesson && ` - ${activity.lesson}`}
                              {activity.assignment && ` - ${activity.assignment}`}
                              {activity.achievement && ` - ${activity.achievement}`}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
