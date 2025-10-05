import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <Section id="about" className="bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Heading level={2} className="mb-6 text-foreground">
              About EduPilot
            </Heading>
            <div className="space-y-4 text-muted-foreground">
              <p>
                EduPilot was born from a simple yet powerful vision: to make education 
                more personalized, engaging, and effective for every learner.
              </p>
              <p>
                Our AI-powered platform adapts to each student&apos;s unique learning style, 
                providing tailored content and real-time feedback that accelerates learning 
                and improves outcomes.
              </p>
              <p>
                With comprehensive analytics and collaborative tools, we empower educators 
                to make data-driven decisions and create meaningful learning experiences.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
          
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md rounded-xl border border-green-500/30 bg-card/20 backdrop-blur-md p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer group">
                    <div className="mb-4 text-6xl group-hover:scale-110 transition-transform duration-300">🚀</div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      Join the Future of Education
                    </h3>
                    <p className="text-muted-foreground">
                      Be part of the educational revolution that&apos;s transforming how we learn and teach.
                    </p>
                  </div>
                </div>
        </div>
      </Container>
    </Section>
  );
}
