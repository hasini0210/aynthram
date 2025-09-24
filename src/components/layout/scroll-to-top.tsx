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

  const circumference = 2 * Math.PI * 18; // 2 * pi * r (where r=18 from the SVG circle)
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={cn(
        "fixed bottom-8 right-8 z-50 transition-opacity",
        isVisible ? 'opacity-100' : 'opacity-0',
        "disabled:pointer-events-auto"
      )}
    >
      <div className="relative flex items-center justify-center">
        <svg
            className="absolute -top-10 -left-10 h-24 w-24"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            stroke="hsl(var(--primary) / 0.1)"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transform -rotate-90 origin-center transition-all duration-300"
          />
        </svg>

        <Button
          onClick={scrollToTop}
          variant="default"
          size="icon"
          className="relative h-20 w-20 rounded-full bg-background text-foreground shadow-lg hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-8 w-8" />
          <span className="sr-only">Go to top</span>
        </Button>
      </div>
    </div>
  );
}
