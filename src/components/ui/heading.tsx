import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export function Heading({ 
  className, 
  level = 2, 
  children, 
  ...props 
}: HeadingProps) {
  const sizeClasses = {
    1: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl sm:text-3xl font-semibold',
    4: 'text-xl sm:text-2xl font-semibold',
    5: 'text-lg sm:text-xl font-medium',
    6: 'text-base sm:text-lg font-medium',
  };

  const Component = React.createElement(
    `h${level}`,
    {
      className: cn(sizeClasses[level], className),
      ...props,
    },
    children
  );

  return Component;
}
