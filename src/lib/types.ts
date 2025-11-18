export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
  createdAt: Date;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface OnboardingData {
  // Step 1 fields
  profilePhoto?: File | null;
  profilePhotoId?: string | null;
  firstname?: string;
  lastname?: string;
  dob?: string;
  bio?: string;
  gender?: string;
  address?: string;
  // Step 2 fields
  grade?: string;
  domain?: string;
  stream?: string;
  branch?: string;
  // Step 3 fields
  countryCode?: string;
  mobileNo?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  instructor: string;
  thumbnail?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  priority: 'low' | 'medium' | 'high';
  description: string;
}

export interface ProgressMetric {
  id: string;
  label: string;
  value: number;
  max: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

export interface ProfileCompletion {
  overall: number;
  sections: {
    id: string;
    label: string;
    completed: boolean;
    percentage: number;
  }[];
}
