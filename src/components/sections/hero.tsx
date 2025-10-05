'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
        opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.4,
      })));
    };

    const interval = setInterval(animateParticles, 50);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-500/20 to-green-400/20 blur-3xl animate-pulse"
          style={{
            left: '10%',
            top: '20%',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-400/20 to-green-500/20 blur-3xl animate-pulse"
          style={{
            right: '10%',
            bottom: '20%',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
        
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-green-400/30"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              transform: `translate(${Math.sin(Date.now() * 0.001 + particle.id) * 10}px, ${Math.cos(Date.now() * 0.001 + particle.id) * 10}px)`,
            }}
          />
        ))}
        
        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-green-500/10 to-green-400/10 blur-xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      </div>

      <Container className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="text-center max-w-5xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-card/20 backdrop-blur-md border border-green-500/30 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              🚀 Now with AI-Powered Learning
            </span>
          </div>

          {/* Main Heading with Gradient Animation */}
          <Heading level={1} className="mb-8 text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="block text-foreground mb-2">
              Transform Education
            </span>
            <span className="block bg-gradient-to-r from-green-600 via-green-500 to-green-600 dark:from-green-400 dark:via-green-500 dark:to-green-400 bg-clip-text text-transparent animate-gradient">
              with AI-Powered Learning
            </span>
          </Heading>
          
          {/* Animated Description */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up">
              EduPilot revolutionizes education by providing{' '}
              <span className="text-green-600 dark:text-green-400 font-semibold">personalized learning experiences</span>,{' '}
              <span className="text-green-500 dark:text-green-500 font-semibold">real-time analytics</span>, and{' '}
              <span className="text-green-600 dark:text-green-400 font-semibold">collaborative tools</span>{' '}
              for students and teachers.
            </p>
          </div>
          
          {/* Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center">
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 dark:from-green-500/20 dark:to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative overflow-hidden border-2 border-green-500/50 hover:border-green-400/70 dark:border-green-500/50 dark:hover:border-green-400/70 bg-card/20 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-xl hover:bg-card/30 transition-all duration-300 transform hover:scale-105 text-green-600 dark:text-green-400 cursor-pointer shadow-lg"
            >
              <span className="flex items-center">
                <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
                Watch Demo
              </span>
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '10K+', label: 'Active Students', icon: '👨‍🎓' },
              { number: '500+', label: 'Educators', icon: '👩‍🏫' },
              { number: '95%', label: 'Success Rate', icon: '📈' },
              { number: '24/7', label: 'AI Support', icon: '🤖' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/20 backdrop-blur-md border border-green-500/30 hover:border-green-400/50 dark:hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1 group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
          <div className="w-1 h-3 bg-green-500/70 dark:bg-green-400/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
}
