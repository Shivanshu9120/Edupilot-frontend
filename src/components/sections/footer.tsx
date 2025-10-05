import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-background-secondary text-foreground">
      <Container>
        <Section className="py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">EduPilot</h3>
              <p className="text-muted-foreground">
                Transforming education through AI-powered personalized learning experiences.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Connect</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <span className="text-xl">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 EduPilot. All rights reserved.</p>
          </div>
        </Section>
      </Container>
    </footer>
  );
}
