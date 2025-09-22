import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Programs from '@/components/sections/programs';
import Experience from '@/components/sections/experience';
import Impact from '@/components/sections/impact';
import Team from '@/components/sections/team';
import Partners from '@/components/sections/partners';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Experience />
        <Impact />
        <Team />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
