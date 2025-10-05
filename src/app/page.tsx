import { Navigation } from '@/components/layout/navigation';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Testimonials } from '@/components/sections/testimonials';
import { About } from '@/components/sections/about';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}
