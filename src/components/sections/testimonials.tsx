'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <Section className="bg-background-secondary relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-green-500/[0.04] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-500/[0.04] to-transparent rounded-full blur-3xl" />
      
      <Container>
        {/* Premium Header Section */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-green-500/50" />
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold text-green-700 dark:text-green-400 tracking-wide uppercase">
                Testimonials
              </span>
              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
          
          <Heading level={2} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight leading-[1.1]">
            Loved by
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 dark:from-green-400 dark:via-emerald-400 dark:to-green-400">
              Thousands Worldwide
            </span>
          </Heading>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Join a thriving community of educators and students who have transformed their learning experience with EduPilot.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.15}s`,
                opacity: 0
              }}
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-8 transition-all duration-500 hover:border-green-500/30 hover:bg-card/80 flex flex-col">
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                  <svg className="w-24 h-24 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/[0.03] group-hover:to-emerald-500/[0.03] transition-all duration-500" />
                
                {/* Glow Effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500 dark:text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                        style={{ transitionDelay: `${i * 50}ms` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 flex-grow italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 group-hover:via-green-500/30 transition-colors duration-500" />
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center font-bold text-green-700 dark:text-green-400 border-2 border-green-500/20 group-hover:border-green-500/40 transition-colors duration-300">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Name & Role */}
                    <div>
                      <div className="font-bold text-card-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 mb-0.5">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-green-500/0 group-hover:border-green-500/30 rounded-tl-xl transition-all duration-500" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-green-500/0 group-hover:border-green-500/30 rounded-br-xl transition-all duration-500" />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="relative z-10 mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl border border-border/50 bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-xl max-w-2xl mx-auto">
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 border-4 border-card flex items-center justify-center font-bold text-green-700 dark:text-green-400 text-sm"
                  style={{ zIndex: 5 - i }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            
            <div>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Join our community of satisfied users
              </p>
              <p className="text-muted-foreground mb-6">
                Share your experience and help others discover EduPilot
              </p>
            </div>
            
            <button className="group/btn relative px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Write a Review
                <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
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