"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Our Approach', href: '#experience' },
  { name: 'Impact', href: '#impact' },
  { name: 'Contact', href: '#contact' },
];

const Logo = () => (
    <Link href="/" className="font-headline text-2xl font-bold text-primary-foreground">
        Aynthram
    </Link>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-primary/80 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors">
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
                            className="text-lg font-medium text-primary-foreground hover:text-secondary transition-colors"
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
