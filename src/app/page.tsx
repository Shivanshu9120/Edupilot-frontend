import { Navigation } from '@/components/layout/navigation';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Features } from '@/components/sections/features';
import { Testimonials } from '@/components/sections/testimonials';
import { About } from '@/components/sections/about';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
