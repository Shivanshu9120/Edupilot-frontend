'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function AssignmentsPage() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed' | 'overdue'>('all');

  const assignments = [
    {
      id: 1,
      title: 'Mathematics Problem Set 5',
      course: 'Introduction to Mathematics',
      dueDate: new Date('2024-01-15'),
      status: 'pending',
      priority: 'high',
      description: 'Solve quadratic equations and graph parabolas. Submit your work with detailed explanations.',
      points: 100,
      type: 'Problem Set',
      estimatedTime: '2 hours'
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Advanced Physics',
      dueDate: new Date('2024-01-12'),
      status: 'in-progress',
      priority: 'high',
      description: 'Analyze the results from the pendulum experiment and write a comprehensive lab report.',
      points: 150,
      type: 'Lab Report',
      estimatedTime: '3 hours'
    },
    {
      id: 3,
      title: 'Creative Writing Portfolio',
      course: 'Creative Writing Workshop',
      dueDate: new Date('2024-01-20'),
      status: 'pending',
      priority: 'medium',
      description: 'Compile your best creative pieces from the semester into a portfolio with reflections.',
      points: 200,
      type: 'Portfolio',
      estimatedTime: '4 hours'
    },
    {
      id: 4,
      title: 'Data Analysis Project',
      course: 'Data Science Fundamentals',
      dueDate: new Date('2024-01-08'),
      status: 'overdue',
      priority: 'high',
      description: 'Analyze the provided dataset and create visualizations with insights.',
      points: 250,
      type: 'Project',
      estimatedTime: '6 hours'
    },
    {
      id: 5,
      title: 'Marketing Strategy Presentation',
      course: 'Digital Marketing Strategy',
      dueDate: new Date('2024-01-18'),
      status: 'completed',
      priority: 'medium',
      description: 'Create a presentation for a new product launch marketing strategy.',
      points: 180,
      type: 'Presentation',
      estimatedTime: '3 hours'
    },
    {
      id: 6,
      title: 'Web Development Assignment',
      course: 'Web Development Bootcamp',
      dueDate: new Date('2024-01-25'),
      status: 'pending',
      priority: 'low',
      description: 'Build a responsive website using HTML, CSS, and JavaScript.',
      points: 300,
      type: 'Project',
      estimatedTime: '8 hours'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 dark:text-red-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const filteredAssignments = assignments.filter(assignment => {
    if (filter === 'all') return true;
    return assignment.status === filter;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isOverdue = (date: Date) => {
    return date < new Date() && assignments.find(a => a.dueDate === date)?.status !== 'completed';
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
                <h1 className="text-3xl font-bold text-foreground">Assignments</h1>
                <p className="text-muted-foreground">Stay on top of your assignments and deadlines</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as 'all' | 'pending' | 'in-progress' | 'completed' | 'overdue')}
                  className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">All Assignments</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="overdue">Overdue</option>
                </select>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white">
                  Create Assignment
                </Button>
              </div>
            </div>
          </div>

          {/* Assignment Stats */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-xl">📝</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Total Assignments</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">6</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-warning text-xl">⏳</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Pending</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-warning transition-colors duration-300">3</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-error/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-error text-xl">🚨</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Overdue</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-error transition-colors duration-300">1</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-success text-xl">✅</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Completed</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-success transition-colors duration-300">1</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assignment List */}
            <div className="space-y-4">
              {filteredAssignments.map((assignment) => (
                <Card key={assignment.id} className={`hover:shadow-lg transition-shadow border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group ${assignment.status === 'overdue' ? 'border-error/50' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {assignment.title}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                            {assignment.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {assignment.course}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {assignment.description}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span>📊 {assignment.points} points</span>
                          <span>📋 {assignment.type}</span>
                          <span>⏱️ {assignment.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Due Date: </span>
                          <span className={`font-medium ${isOverdue(assignment.dueDate) ? 'text-red-600 dark:text-red-400' : 'text-card-foreground'}`}>
                            {formatDate(assignment.dueDate)}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Priority: </span>
                          <span className={`font-medium ${getPriorityColor(assignment.priority)}`}>
                            {assignment.priority}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {assignment.status === 'completed' ? (
                          <Button size="sm" variant="outline">
                            View Submission
                          </Button>
                        ) : (
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            {assignment.status === 'in-progress' ? 'Continue' : 'Start Assignment'}
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAssignments.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No assignments found</h3>
                <p className="text-muted-foreground">Try selecting a different filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
