"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import Image from 'next/image';

const navItems = [
  { id: 'about', name: 'About', href: '#about' },
  { id: 'programs', name: 'Programs', href: '#programs' },
  { id: 'experience', name: 'Our Approach', href: '#experience' },
  { id: 'impact', name: 'Impact', href: '#impact' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-4">
    <Image src="/images/logo.png" alt="Aynthram Logo" width={140} height={28} />
    <div className="flex flex-col items-start -ml-2">
      <span className="text-xs font-medium text-primary-foreground/80 tracking-[0.2em]">LEADERSHIP ACADEMY</span>
    </div>
  </Link>
);


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map(item => item.id), { rootMargin: '0% 0% -80% 0%' });


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
    )}>
      <div className={cn(
          "container mx-auto flex h-16 items-center justify-between px-4 md:px-6 rounded-full transition-all duration-300",
          scrolled ? "bg-primary/80 shadow-lg backdrop-blur-lg" : "bg-primary/70 backdrop-blur-md"
      )}>
        <div className="md:hidden">
          <Logo />
        </div>
        <div className="hidden md:flex">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className={cn(
                "text-sm font-medium transition-colors",
                activeId === item.id ? 'text-secondary font-bold' : 'text-primary-foreground/80 hover:text-secondary'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Link href="#contact">
                <Button variant="secondary" className="uppercase tracking-wider font-medium">Get Started</Button>
            </Link>
        </div>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary">
                <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                         <Logo />
                         <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-primary-foreground hover:text-secondary hover:bg-transparent">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                         </SheetTrigger>
                    </div>
                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              "text-lg font-medium transition-colors",
                              activeId === item.id ? 'text-secondary font-bold' : 'text-primary-foreground hover:text-secondary'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                        ))}
                    </nav>
                    <div className="mt-auto">
                        <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                            <Button variant="secondary" size="lg" className="w-full uppercase tracking-wider font-medium">Get Started</Button>
                        </Link>
                        <div className="text-center mt-4">
                            <a href="mailto:vasudev.aynthram@gmail.com" className="text-sm text-muted-foreground">vasudev.aynthram@gmail.com</a>
                        </div>
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
