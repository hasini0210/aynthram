
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

const keywords = [
  "Leadership", "Innovation", "Growth Hacking", "Art of Storytelling", "Execution Excellence", "Sustainable Growth"
];

const changingSentences = [
  "Fostering Innovation.",
  "Building Resilience.",
  "Inspiring Growth.",
  "Leading with Purpose."
];

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % changingSentences.length);
    }, 3000); // change sentence every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-start overflow-hidden p-0">
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden md:block w-full h-full">
          <Image
            src="/images/herobanner.jpg"
            alt="Dynamic image of a leader presenting to an engaged audience in a modern setting."
            fill
            className="object-cover"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            priority
          />
        </div>
        {/* Mobile Image */}
        <div className="md:hidden w-full h-full">
            <Image
                src="/images/herobannermobile.jpg"
                alt="Dynamic image of a leader presenting to an engaged audience in a modern setting."
                fill
                className="object-cover"
                style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                priority
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
      </div>
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-6 text-left">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-primary/40 px-4 py-1.5 text-sm text-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary animate-blink"></span>
                <span>Transforming Leaders Since 2023</span>
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
              Crafting Leaders.
              <br />
              Cultivating Legacies.
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/90 max-w-2xl">
              Immersive, art-led leadership programs rooted in Odisha’s heritage.
            </p>
            <div className="mt-6 h-10 overflow-hidden">
              <div className="relative h-full w-full">
                {changingSentences.map((sentence, index) => (
                   <span
                    key={index}
                    className="absolute w-full h-full transition-transform duration-500 ease-in-out text-2xl font-semibold text-accent"
                    style={{ 
                      transform: `translateY(${(index - currentSentenceIndex) * 100}%)`,
                      top: 0
                    }}
                  >
                    {sentence}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="#contact">
                <Button size="lg" variant="secondary" className="uppercase tracking-wider font-medium shadow-lg hover:shadow-xl transition-shadow">
                  Book a Program
                </Button>
              </Link>
              <Link href="#contact" className="text-sm font-semibold leading-6 text-foreground hover:underline">
                Request Brochure <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 z-20 w-full">
        <Marquee pauseOnHover className="[--duration:40s]">
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className={cn(
                "flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-primary-foreground bg-primary/40 backdrop-blur-sm mx-2"
              )}
            >
              <span className="text-sm font-medium">{keyword}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
