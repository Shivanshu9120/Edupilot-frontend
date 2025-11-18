'use client';

import { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { GET_FAQS } from '@/lib/graphql/queries';

interface FAQ {
  documentId: string;
  Question: string;
  Answer: string;
  Sequence: number;
}

interface FaqsData {
  faqs: FAQ[];
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { data, loading, error } = useQuery<FaqsData>(GET_FAQS);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Sort FAQs by Sequence if available
  const faqs = data?.faqs 
    ? [...data.faqs].sort((a, b) => (a.Sequence || 0) - (b.Sequence || 0))
    : [];

  return (
    <Section id="faq" className="bg-background relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-emerald-500/[0.03]" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-500/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
      
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400 tracking-wide uppercase">
                FAQ
              </span>
            </div>
            
            {/* Heading */}
            <Heading level={2} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
              Frequently Asked
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 dark:from-green-400 dark:via-emerald-400 dark:to-green-400">
                Questions
              </span>
            </Heading>
            <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
            
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about EduPilot and how it can transform your educational experience.
            </p>
          </div>

          {/* FAQ Accordion */}
          {loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading FAQs...</p>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading FAQs. Please try again later.</p>
            </div>
          )}
          
          {!loading && !error && faqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No FAQs available at the moment.</p>
            </div>
          )}
          
          {!loading && !error && faqs.length > 0 && (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.documentId}
                  className="group relative"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  {/* Accordion Item */}
                  <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-green-500/30 hover:bg-card/80">
                    {/* Question Button */}
                    <button
                      onClick={() => toggleFAQ(faq.documentId)}
                      className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between gap-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                    >
                      <h3 className="text-lg md:text-xl font-bold text-foreground pr-8">
                        {faq.Question}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-green-600 dark:text-green-400 transition-transform duration-300 ${
                            openId === faq.documentId ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Answer Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openId === faq.documentId ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-5 md:px-8 md:pb-6 pt-0">
                        <div className="pl-6 border-l-2 border-green-500/30">
                          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                            {faq.Answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none" />
                    
                    {/* Glow Effect */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />
                    
                    {/* Bottom Border Accent */}
                    <div className={`absolute bottom-0 left-6 right-6 md:left-8 md:right-8 h-px bg-gradient-to-r from-transparent via-green-500/0 to-transparent transition-all duration-500 ${
                      openId === faq.documentId ? 'via-green-500/30' : 'group-hover:via-green-500/20'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          )}
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

