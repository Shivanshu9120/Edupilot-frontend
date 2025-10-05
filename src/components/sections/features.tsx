import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { FEATURES } from '@/lib/constants';

export function Features() {
  return (
    <Section id="features" className="bg-background">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4 text-foreground">
            Powerful Features for Modern Education
          </Heading>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover the tools that make EduPilot the leading platform for educational innovation.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-xl border border-green-500/30 bg-card/20 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer"
            >
              <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
