'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';

export function Stats() {
  const stats = [
    { number: '10K+', label: 'Active Students', icon: '👨‍🎓' },
    { number: '500+', label: 'Educators', icon: '👩‍🏫' },
    { number: '95%', label: 'Success Rate', icon: '📈' },
    { number: '24/7', label: 'AI Support', icon: '🤖' },
  ];

  return (
    <Section id="stats" className="bg-background relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/[0.02] via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
      
      <Container>
        {/* Premium Header */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400 tracking-wide">
              STATISTICS
            </span>
          </div>
          
          <Heading level={2} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight leading-[1.1]">
            Trusted by Thousands
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 dark:from-green-400 dark:via-emerald-400 dark:to-green-400">
              Making a Real Impact
            </span>
          </Heading>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Join a growing community of educators and students who are transforming education with EduPilot.
          </p>
        </div>
        
        {/* Premium Stats Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl p-8 transition-all duration-500 hover:border-green-500/30 hover:bg-card/80">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500" />
                
                {/* Glow Effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <div className="mb-6 relative flex justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-green-500/10 group-hover:from-green-500/20 group-hover:via-emerald-500/10 group-hover:to-green-500/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 border border-green-500/10">
                      <span className="text-3xl filter group-hover:brightness-110 transition-all duration-300">
                        {stat.icon}
                      </span>
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500/30 group-hover:bg-green-500/60 transition-colors duration-300" />
                  </div>
                  
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
                
                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-500/0 to-transparent group-hover:via-green-500/30 transition-all duration-500" />
              </div>
              
              {/* Floating Corner Element */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-500/0 group-hover:bg-green-500/20 transition-all duration-500 blur-sm" />
            </div>
          ))}
        </div>
      </Container>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Section>
  );
}

