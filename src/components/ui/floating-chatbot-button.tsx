'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingChatbotButtonProps {
  onClick: () => void;
  className?: string;
}

export function FloatingChatbotButton({ onClick, className }: FloatingChatbotButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-20 right-4 z-40",
        "w-14 h-14 rounded-full bg-primary text-primary-foreground",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "flex items-center justify-center",
        "group cursor-pointer",
        "sm:bottom-8 sm:right-8",
        className
      )}
      aria-label="Open chatbot"
    >
      <svg
        className="w-6 h-6 transition-transform group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  );
}
