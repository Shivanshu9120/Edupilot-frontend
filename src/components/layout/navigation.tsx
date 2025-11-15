import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { NAV_ITEMS } from '@/lib/constants';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <Image 
                src="/Logo.png" 
                alt="EduPilot Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-foreground">EduPilot</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" size="sm" className="cursor-pointer">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                Signup
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
