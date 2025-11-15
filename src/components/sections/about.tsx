'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <Section id="about" className="bg-background relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-emerald-500/[0.03]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-500/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
      
      <Container>
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content Column */}
          <div 
            className="space-y-8"
            style={{
              animation: 'fadeInLeft 0.8s ease-out forwards',
              opacity: 0
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400 tracking-wide uppercase">
                Our Story
              </span>
            </div>
            
            {/* Heading */}
            <div>
              <Heading level={2} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
                About
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 dark:from-green-400 dark:via-emerald-400 dark:to-green-400">
                  EduPilot
                </span>
              </Heading>
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            </div>
            
            {/* Content Paragraphs */}
            <div className="space-y-6">
              <div className="group relative pl-6 border-l-2 border-green-500/30 hover:border-green-500/60 transition-colors duration-300">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-green-500" />
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  EduPilot was born from a simple yet powerful vision: to make education 
                  more <span className="font-semibold text-foreground">personalized</span>, <span className="font-semibold text-foreground">engaging</span>, and <span className="font-semibold text-foreground">effective</span> for every learner.
                </p>
              </div>
              
              <div className="group relative pl-6 border-l-2 border-emerald-500/30 hover:border-emerald-500/60 transition-colors duration-300">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-emerald-500" />
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Our AI-powered platform adapts to each student's unique learning style, 
                  providing tailored content and real-time feedback that accelerates learning 
                  and improves outcomes.
                </p>
              </div>
              
              <div className="group relative pl-6 border-l-2 border-green-500/30 hover:border-green-500/60 transition-colors duration-300">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-green-500" />
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  With comprehensive analytics and collaborative tools, we empower educators 
                  to make data-driven decisions and create meaningful learning experiences.
                </p>
              </div>
            </div>
            
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group/btn relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More About Us
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              
              <button className="group/btn px-6 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground font-semibold hover:border-green-500/30 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02]">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Right Visual Column */}
          <div 
            className="flex items-center justify-center lg:justify-end"
            style={{
              animation: 'fadeInRight 0.8s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              
              {/* Main Card */}
              <div className="group relative rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] cursor-pointer overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-700" />
                
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Border Glow */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-green-500/30 via-emerald-500/30 to-green-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative inline-block mb-8">
                    <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-green-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 border border-green-500/20">
                      <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                        🚀
                      </div>
                    </div>
                    {/* Orbiting Dots */}
                    <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-500/40 animate-ping" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-emerald-500/40" style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    Join the Future of Education
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    Be part of the educational revolution that's transforming how we learn and teach.
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-4 py-2 rounded-full text-xs font-semibold bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20">
                      AI-Powered
                    </span>
                    <span className="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      Personalized
                    </span>
                    <span className="px-4 py-2 rounded-full text-xs font-semibold bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20">
                      Collaborative
                    </span>
                  </div>
                </div>
                
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-green-500/0 to-transparent group-hover:via-green-500/40 transition-all duration-700" />
                
                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-green-500/0 group-hover:border-green-500/30 rounded-tr-2xl transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-emerald-500/0 group-hover:border-emerald-500/30 rounded-bl-2xl transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </Section>
  );
}