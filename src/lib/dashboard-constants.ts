import { Course, Assignment, ProgressMetric, ProfileCompletion } from './types';

export const SAMPLE_COURSES: Course[] = [
  {
    id: '1',
    title: 'Introduction to Mathematics',
    description: 'Learn fundamental mathematical concepts and problem-solving techniques.',
    progress: 75,
    totalLessons: 20,
    completedLessons: 15,
    instructor: 'Dr. Sarah Johnson',
    difficulty: 'beginner',
    duration: '8 weeks',
  },
  {
    id: '2',
    title: 'Advanced Physics',
    description: 'Deep dive into quantum mechanics and relativity theory.',
    progress: 45,
    totalLessons: 30,
    completedLessons: 13,
    instructor: 'Prof. Michael Chen',
    difficulty: 'advanced',
    duration: '12 weeks',
  },
  {
    id: '3',
    title: 'Creative Writing Workshop',
    description: 'Develop your creative writing skills through guided exercises.',
    progress: 90,
    totalLessons: 15,
    completedLessons: 14,
    instructor: 'Ms. Emily Rodriguez',
    difficulty: 'intermediate',
    duration: '6 weeks',
  },
];

export const SAMPLE_ASSIGNMENTS: Assignment[] = [
  {
    id: '1',
    title: 'Algebra Problem Set #3',
    course: 'Introduction to Mathematics',
    dueDate: new Date('2024-01-15'),
    status: 'pending',
    priority: 'high',
    description: 'Complete exercises 1-20 on quadratic equations',
  },
  {
    id: '2',
    title: 'Physics Lab Report',
    course: 'Advanced Physics',
    dueDate: new Date('2024-01-12'),
    status: 'in-progress',
    priority: 'medium',
    description: 'Write a detailed report on the quantum entanglement experiment',
  },
  {
    id: '3',
    title: 'Short Story Submission',
    course: 'Creative Writing Workshop',
    dueDate: new Date('2024-01-10'),
    status: 'overdue',
    priority: 'high',
    description: 'Submit your 2000-word short story for peer review',
  },
];

export const SAMPLE_PROGRESS_METRICS: ProgressMetric[] = [
  {
    id: '1',
    label: 'Courses Completed',
    value: 2,
    max: 5,
    unit: 'courses',
    trend: 'up',
  },
  {
    id: '2',
    label: 'Study Hours This Week',
    value: 12,
    max: 20,
    unit: 'hours',
    trend: 'up',
  },
  {
    id: '3',
    label: 'Assignments Submitted',
    value: 8,
    max: 10,
    unit: 'assignments',
    trend: 'stable',
  },
];

export const SAMPLE_PROFILE_COMPLETION: ProfileCompletion = {
  overall: 78,
  sections: [
    { id: '1', label: 'Profile Photo', completed: true, percentage: 100 },
    { id: '2', label: 'Personal Information', completed: true, percentage: 100 },
    { id: '3', label: 'Academic Background', completed: true, percentage: 100 },
    { id: '4', label: 'Learning Goals', completed: true, percentage: 100 },
    { id: '5', label: 'Subject Preferences', completed: true, percentage: 100 },
    { id: '6', label: 'Study Schedule', completed: false, percentage: 60 },
    { id: '7', label: 'Emergency Contacts', completed: false, percentage: 0 },
    { id: '8', label: 'Parent/Guardian Info', completed: false, percentage: 0 },
  ],
};

export const DASHBOARD_NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { label: 'Assignments', href: '/dashboard/assignments', icon: '📝' },
  { label: 'Progress', href: '/dashboard/progress', icon: '📊' },
  { label: 'Profile', href: '/dashboard/profile', icon: '👤' },
  { label: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
];
