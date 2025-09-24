"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    toggleVisibility();
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight > 0) {
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    } else {
      setScrollProgress(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const circumference = 2 * Math.PI * 20; // 2 * pi * r (where r=20 from the SVG circle)
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        variant="default"
        size="icon"
        className={cn(
          "relative h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          isVisible ? 'opacity-100' : 'opacity-0',
          "disabled:pointer-events-auto"
        )}
        aria-label="Scroll to top"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="hsl(var(--primary-foreground) / 0.1)"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="22"
            cy="22"
            r="20"
            stroke="hsl(var(--secondary))"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transform -rotate-90 origin-center transition-all duration-300"
          />
        </svg>
        <ChevronUp className="h-6 w-6" />
        <span className="sr-only">Go to top</span>
      </Button>
    </div>
  );
}
