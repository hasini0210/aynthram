"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

const keywords = [
  "Leadership", "Innovation", "Growth Hacking", "Art of Storytelling", "Execution Excellence", "Sustainable Growth"
];

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex flex-col justify-center items-start overflow-hidden p-0">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-left">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-7xl">
            Crafting Leaders.
            <br />
            Cultivating Legacies.
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90 max-w-2xl">
            Immersive, art-led leadership programs rooted in Odisha’s heritage.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="#contact">
              <Button size="lg" variant="secondary" className="uppercase tracking-wider font-medium shadow-lg hover:shadow-xl transition-shadow">
                Book a Program
              </Button>
            </Link>
            <Link href="#contact" className="text-sm font-semibold leading-6 text-primary-foreground hover:underline">
              Request Brochure <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full mt-auto mb-8">
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
