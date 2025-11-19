'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}

export function Toast({ message, type = 'info', duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400',
    error: 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400',
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed top-4 right-4 z-50 p-4 rounded-lg border backdrop-blur-md shadow-lg transition-all duration-300',
        typeStyles[type],
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      )}
    >
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose?.(), 300);
          }}
          className="ml-2 text-current opacity-70 hover:opacity-100"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

