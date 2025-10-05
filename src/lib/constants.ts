import { Feature, Testimonial, NavItem, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Personalized Learning',
    description: 'AI-powered adaptive learning paths tailored to each student\'s needs and pace.',
    icon: '🎯',
  },
  {
    id: '2',
    title: 'Real-time Analytics',
    description: 'Comprehensive insights into student progress and performance metrics.',
    icon: '📊',
  },
  {
    id: '3',
    title: 'Interactive Content',
    description: 'Engaging multimedia content that makes learning fun and effective.',
    icon: '🎮',
  },
  {
    id: '4',
    title: 'Collaborative Tools',
    description: 'Built-in tools for teachers and students to collaborate seamlessly.',
    icon: '👥',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Mathematics Teacher',
    content: 'EduPilot has transformed how I teach. The personalized learning paths help every student succeed.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Student',
    content: 'I love how the platform adapts to my learning style. It makes studying so much more engaging!',
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    role: 'School Principal',
    content: 'The analytics dashboard gives us incredible insights into student performance and areas for improvement.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'GitHub', href: '#', icon: '🐙' },
  { name: 'Email', href: 'mailto:contact@edupilot.com', icon: '📧' },
];
