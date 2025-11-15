'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQs: FAQ[] = [
  {
    id: 1,
    question: 'What is EduPilot and how does it work?',
    answer: 'EduPilot is an AI-powered educational platform designed to personalize learning experiences for students. Our platform uses advanced machine learning algorithms to adapt to each student\'s unique learning style, providing tailored content, real-time feedback, and comprehensive analytics. Educators can track student progress, identify learning gaps, and create data-driven lesson plans to improve educational outcomes.',
  },
  {
    id: 2,
    question: 'How does the AI personalize learning for each student?',
    answer: 'Our AI analyzes each student\'s learning patterns, performance data, and engagement metrics to create a personalized learning path. It adapts content difficulty, suggests relevant resources, provides instant feedback, and identifies areas that need more attention. The system continuously learns from student interactions to refine and improve the learning experience over time.',
  },
  {
    id: 3,
    question: 'Is EduPilot suitable for all age groups and subjects?',
    answer: 'Yes, EduPilot is designed to be flexible and adaptable across different age groups, from elementary to higher education. The platform supports multiple subjects including mathematics, science, languages, social studies, and more. Our AI adapts its teaching style and content presentation based on the student\'s age, grade level, and subject matter to ensure optimal learning outcomes.',
  },
  {
    id: 4,
    question: 'What kind of analytics and reports are available for educators?',
    answer: 'EduPilot provides comprehensive analytics including student performance metrics, learning progress tracking, engagement statistics, time-on-task analysis, and predictive insights. Educators can access detailed reports on individual students or entire classes, identify at-risk students early, monitor learning trends, and make informed decisions about curriculum adjustments and intervention strategies.',
  },
  {
    id: 5,
    question: 'How secure is student data on the EduPilot platform?',
    answer: 'Data security and privacy are our top priorities. EduPilot complies with FERPA, COPPA, and GDPR regulations. We use enterprise-grade encryption, secure cloud infrastructure, regular security audits, and strict access controls. Student data is never shared with third parties without explicit consent, and we maintain transparent privacy policies. All data is stored securely and can be exported or deleted at any time by authorized users.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div
                key={faq.id}
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
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between gap-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-foreground pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-green-600 dark:text-green-400 transition-transform duration-300 ${
                          openId === faq.id ? 'rotate-180' : ''
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
                      openId === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 md:px-8 md:pb-6 pt-0">
                      <div className="pl-6 border-l-2 border-green-500/30">
                        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                          {faq.answer}
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
                    openId === faq.id ? 'via-green-500/30' : 'group-hover:via-green-500/20'
                  }`} />
                </div>
              </div>
            ))}
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

