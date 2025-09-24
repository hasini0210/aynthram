import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

const programLinks = [
  { name: 'Corporate Leadership', href: '#programs' },
  { name: 'Startup Founders', href: '#programs' },
  { name: 'Mid-Level Managers', href: '#programs' },
  { name: 'Educators & Innovators', href: '#programs' },
];

const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Approach', href: '#experience' },
    { name: 'Heritage & Culture', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Logo = () => (
    <div className="flex flex-col items-start">
        <span className="font-headline text-3xl font-bold text-foreground tracking-wider">aünthram</span>
        <span className="text-xs font-medium text-foreground/70 tracking-[0.2em]">LEADERSHIP ACADEMY</span>
    </div>
);


export default function Footer() {
  return (
    <>
      <section className="bg-background text-foreground py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-headline max-w-4xl mx-auto">
              Empowering artisans, preserving heritage, transforming leaders —
              <br />
              <span className="text-foreground/80">because leadership is not just a skill, it’s a mindset.</span>
            </h2>
        </div>
      </section>
      <footer className="bg-background text-foreground/80">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              
              <div className="col-span-2 md:col-span-1 space-y-4">
                  <Logo />
                  <p className="text-sm max-w-xs pt-4 text-foreground">
                      Transforming leadership through immersive experiences that blend ancient wisdom with modern practices.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                      <a href="#" aria-label="LinkedIn" className="text-foreground/80 hover:text-secondary transition-colors"><Linkedin className="w-5 h-5"/></a>
                      <a href="#" aria-label="Twitter" className="text-foreground/80 hover:text-secondary transition-colors"><Twitter className="w-5 h-5"/></a>
                      <a href="#" aria-label="Instagram" className="text-foreground/80 hover:text-secondary transition-colors"><Instagram className="w-5 h-5"/></a>
                  </div>
              </div>

              <div>
                  <h3 className="font-semibold text-secondary mb-4 uppercase tracking-wider text-sm">Programs</h3>
                  <nav className="flex flex-col gap-2">
                      {programLinks.map((item) => (
                          <Link key={item.name} href={item.href} className="text-sm text-foreground hover:text-secondary transition-colors">
                          {item.name}
                          </Link>
                      ))}
                  </nav>
              </div>

              <div>
                  <h3 className="font-semibold text-secondary mb-4 uppercase tracking-wider text-sm">Company</h3>
                  <nav className="flex flex-col gap-2">
                      {companyLinks.map((item) => (
                          <Link key={item.name} href={item.href} className="text-sm text-foreground hover:text-secondary transition-colors">
                          {item.name}
                          </Link>
                      ))}
                  </nav>
              </div>

              <div>
                  <h3 className="font-semibold text-secondary mb-4 uppercase tracking-wider text-sm">Contact</h3>
                  <div className="flex flex-col gap-2 text-sm">
                       <a href="mailto:vasudev.aynthram@gmail.com" className="text-foreground hover:text-secondary transition-colors">
                          vasudev.aynthram@gmail.com
                      </a>
                      <a href="tel:+919703831819" className="text-foreground hover:text-secondary transition-colors">
                          +91 9703831819
                      </a>
                      <p className="text-foreground">Odisha, India</p>
                  </div>
              </div>
          </div>
          <div className="border-t border-foreground/20 mt-12 pt-8 text-center text-sm text-foreground/50">
              <p>&copy; {new Date().getFullYear()} Aynthram Leadership Academy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
