'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read' | 'important'>('all');

  const notifications = [
    {
      id: 1,
      title: 'New Assignment Available',
      message: 'Mathematics Assignment #3 is now available for submission',
      type: 'assignment',
      priority: 'high',
      timestamp: '2 hours ago',
      read: false,
      icon: '📝'
    },
    {
      id: 2,
      title: 'Course Update',
      message: 'New lecture added to Physics 101 course',
      type: 'course',
      priority: 'medium',
      timestamp: '5 hours ago',
      read: false,
      icon: '📚'
    },
    {
      id: 3,
      title: 'Achievement Unlocked',
      message: 'Congratulations! You earned the "Quick Learner" badge',
      type: 'achievement',
      priority: 'low',
      timestamp: '1 day ago',
      read: true,
      icon: '🏆'
    },
    {
      id: 4,
      title: 'Deadline Reminder',
      message: 'Chemistry Lab Report due in 2 days',
      type: 'deadline',
      priority: 'high',
      timestamp: '2 days ago',
      read: true,
      icon: '⏰'
    },
    {
      id: 5,
      title: 'System Maintenance',
      message: 'Scheduled maintenance on Sunday 2AM-4AM EST',
      type: 'system',
      priority: 'medium',
      timestamp: '3 days ago',
      read: true,
      icon: '🔧'
    },
    {
      id: 6,
      title: 'Grade Posted',
      message: 'Your grade for Mathematics Quiz #2 has been posted',
      type: 'grade',
      priority: 'medium',
      timestamp: '4 days ago',
      read: true,
      icon: '📊'
    }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    if (filter === 'important') return notification.priority === 'high';
    return true;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'assignment': return 'bg-primary/20 text-primary';
      case 'course': return 'bg-accent/20 text-accent';
      case 'achievement': return 'bg-success/20 text-success';
      case 'deadline': return 'bg-error/20 text-error';
      case 'system': return 'bg-muted/20 text-muted-foreground';
      case 'grade': return 'bg-warning/20 text-warning';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  const markAsRead = (id: number) => {
    // In a real app, this would make an API call
    console.log('Marking notification as read:', id);
  };

  const markAllAsRead = () => {
    // In a real app, this would make an API call
    console.log('Marking all notifications as read');
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
                <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
                <p className="text-muted-foreground">Stay updated with your learning progress and important updates</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as 'all' | 'unread' | 'read' | 'important')}
                  className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Notifications</option>
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="important">Important</option>
                </select>
                <Button onClick={markAllAsRead} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Mark All as Read
                </Button>
              </div>
            </div>
          </div>

          {/* Notification Statistics */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-xl">🔔</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Total Notifications</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{notifications.length}</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-error/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-error text-xl">📬</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Unread</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-error transition-colors duration-300">
                      {notifications.filter(n => !n.read).length}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-warning text-xl">⚠️</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Important</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-warning transition-colors duration-300">
                      {notifications.filter(n => n.priority === 'high').length}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-success text-xl">✅</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Read</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-success transition-colors duration-300">
                      {notifications.filter(n => n.read).length}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <Card key={notification.id} className={`border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group ${!notification.read ? 'border-primary/50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{notification.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className={`text-lg font-semibold group-hover:text-primary transition-colors duration-300 ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {notification.title}
                              </h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              )}
                            </div>
                            <p className={`text-sm mb-3 ${!notification.read ? 'text-foreground-secondary' : 'text-muted-foreground'}`}>
                              {notification.message}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{notification.timestamp}</span>
                              <span className={`px-2 py-1 rounded-full ${getTypeColor(notification.type)}`}>
                                {notification.type}
                              </span>
                              <span className={getPriorityColor(notification.priority)}>
                                {notification.priority} priority
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!notification.read && (
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => markAsRead(notification.id)}
                                className="text-xs"
                              >
                                Mark as Read
                              </Button>
                            )}
                            <Button size="sm" variant="outline" className="text-xs">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotifications.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔔</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No notifications found</h3>
                <p className="text-muted-foreground">
                  {filter === 'unread' ? "You're all caught up! No unread notifications." : 
                   filter === 'read' ? "No read notifications to show." :
                   filter === 'important' ? "No important notifications at the moment." :
                   "No notifications to display."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
