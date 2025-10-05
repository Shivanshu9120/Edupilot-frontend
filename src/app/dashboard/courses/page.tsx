'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { DashboardHeader } from '@/components/layout/dashboard-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Introduction to Mathematics',
      instructor: 'Dr. Sarah Johnson',
      duration: '8 weeks',
      difficulty: 'beginner',
      progress: 75,
      completedLessons: 15,
      totalLessons: 20,
      thumbnail: '📊',
      description: 'Master the fundamentals of mathematics with interactive lessons and real-world applications.',
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: 'Advanced Physics',
      instructor: 'Prof. Michael Chen',
      duration: '12 weeks',
      difficulty: 'advanced',
      progress: 43,
      completedLessons: 13,
      totalLessons: 30,
      thumbnail: '⚛️',
      description: 'Dive deep into quantum mechanics, relativity, and modern physics concepts.',
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: 'Creative Writing Workshop',
      instructor: 'Ms. Emily Rodriguez',
      duration: '6 weeks',
      difficulty: 'intermediate',
      progress: 93,
      completedLessons: 14,
      totalLessons: 15,
      thumbnail: '✍️',
      description: 'Develop your creative writing skills through exercises, peer reviews, and storytelling techniques.',
      rating: 4.7,
      students: 2100
    },
    {
      id: 4,
      title: 'Data Science Fundamentals',
      instructor: 'Dr. Alex Kumar',
      duration: '10 weeks',
      difficulty: 'intermediate',
      progress: 0,
      completedLessons: 0,
      totalLessons: 25,
      thumbnail: '📈',
      description: 'Learn data analysis, visualization, and machine learning basics.',
      rating: 4.6,
      students: 3200
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      instructor: 'Ms. Lisa Wang',
      duration: '7 weeks',
      difficulty: 'beginner',
      progress: 28,
      completedLessons: 4,
      totalLessons: 14,
      thumbnail: '📱',
      description: 'Master social media marketing, SEO, and digital advertising strategies.',
      rating: 4.5,
      students: 1800
    },
    {
      id: 6,
      title: 'Web Development Bootcamp',
      instructor: 'Mr. David Park',
      duration: '16 weeks',
      difficulty: 'advanced',
      progress: 0,
      completedLessons: 0,
      totalLessons: 40,
      thumbnail: '💻',
      description: 'Full-stack web development with React, Node.js, and modern frameworks.',
      rating: 4.8,
      students: 950
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout
      sidebar={<DashboardSidebar />}
    >
      <div className="flex flex-col h-full">
        <DashboardHeader />

        <div className="flex-1 overflow-y-auto">
          {/* Page Header */}
          <div className="p-6 bg-background-tertiary border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">My Courses</h1>
                <p className="text-muted-foreground">Continue your learning journey</p>
              </div>
              <div className="flex items-center gap-4">
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse All Courses
                </Button>
              </div>
            </div>
          </div>

          {/* Course Stats */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-xl">📚</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Total Courses</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">6</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-warning text-xl">🎯</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">In Progress</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-warning transition-colors duration-300">3</div>
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

              <div className="bg-card border border-border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-accent text-xl">⏱️</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground-secondary">Study Hours</div>
                    <div className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">42h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{course.thumbnail}</div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {course.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span>👨‍🏫 {course.instructor}</span>
                          <span>⏱️ {course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>⭐ {course.rating}</span>
                          <span>👥 {course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                        {course.difficulty}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-card-foreground">
                          {course.completedLessons}/{course.totalLessons} lessons
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="flex space-x-2">
                        {course.progress > 0 ? (
                          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                            Continue Learning
                          </Button>
                        ) : (
                          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                            Start Course
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
