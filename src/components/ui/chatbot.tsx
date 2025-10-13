'use client';

import { useState, useCallback } from 'react';
import { FloatingChatbotButton } from './floating-chatbot-button';
import { ChatbotModal } from './chatbot-modal';
import { GeminiService, createMessage, Message } from '@/lib/gemini-service';

interface ChatbotProps {
  className?: string;
}

export function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = useCallback(async (messageContent: string) => {
    if (!messageContent.trim()) return;

    // Add user message
    const userMessage = createMessage(messageContent, 'user');
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get Gemini API key from environment
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('Gemini API key not found. Please set NEXT_PUBLIC_GEMINI_API_KEY in your environment variables.');
      }

      const geminiService = new GeminiService(apiKey);
      
      // Send message to Gemini with conversation history
      const response = await geminiService.sendMessage(messageContent, messages);
      
      // Add bot response
      const botMessage = createMessage(response, 'bot');
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage = createMessage(
        'Sorry, I encountered an error while processing your request. Please try again later.',
        'bot'
      );
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <FloatingChatbotButton 
        onClick={handleOpen} 
        className={className}
      />
      <ChatbotModal
        isOpen={isOpen}
        onClose={handleClose}
        onSendMessage={handleSendMessage}
        messages={messages}
        isLoading={isLoading}
      />
    </>
  );
}

