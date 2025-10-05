import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <Section className="bg-background-secondary">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4 text-foreground">
            What Our Users Say
          </Heading>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join thousands of educators and students who have transformed their learning experience.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group rounded-xl border border-green-500/30 bg-card/20 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer"
            >
              <p className="mb-4 text-muted-foreground">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <div className="font-semibold text-card-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
