
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const testimonials = [
  {
    quote: "Join the Aynthram journey.",
    name: "Be a Part of Us",
    title: "Explore our programs",
    avatar: "/images/rajesh.png",
    isPlaceholder: true,
  },
  {
    quote: "Vasudev, through Aynthram, creates a space for deep reflection and self-discovery, guiding participants toward clarity, self-trust, and purpose. His unique balance of structure and fluidity allows for both focused insight and organic exploration. By listening deeply, asking sharp questions, and uncovering unspoken patterns, he helps leaders and changemakers reframe limiting beliefs, recognize their strengths, and make aligned decisions. Aynthram conversations with Vasudev are strategic, deeply human, and transformative",
    name: "Laavanya",
    title: "Participant",
    avatar: "/images/priya.png"
  },
  {
    quote: "Become a purpose-driven leader.",
    name: "Start Your Transformation",
    title: "Connect with our team",
    avatar: "/images/anjali.png",
    isPlaceholder: true,
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-semibold text-secondary mb-2 uppercase tracking-wider">Testimonials</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Participants Say</h2>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex items-start justify-center">
                 <div className={cn(
                    "p-1 transition-all duration-300 ease-in-out",
                    current === index ? "scale-100" : "scale-90 opacity-60 blur-sm"
                  )}>
                  <Card className="bg-primary-foreground/5 border-primary-foreground/10 shadow-lg text-left w-[320px] min-h-[380px] flex flex-col">
                    <CardContent className="p-8 flex-grow flex flex-col justify-between">
                        {testimonial.isPlaceholder ? (
                            <div className="text-center flex flex-col items-center justify-center h-full">
                                <Sparkles className="w-10 h-10 text-secondary mb-4"/>
                                <p className="text-primary-foreground text-xl font-headline italic flex-grow">{testimonial.quote}</p>
                                <Link href="#contact" className='mt-4'>
                                  <Button variant="outline" className='border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground'>
                                    {testimonial.name}
                                  </Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <Quote className="w-10 h-10 text-secondary mb-4"/>
                                    <p className="text-primary-foreground/80 italic">"{testimonial.quote}"</p>
                                </div>
                                <div className="pt-6 flex items-center gap-4 mt-auto">
                                    <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full" />
                                    <div>
                                        <h3 className="font-bold text-primary-foreground">{testimonial.name}</h3>
                                        <p className="text-sm text-primary-foreground/60">{testimonial.title}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </CardContent>
                  </Card>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-foreground bg-primary-foreground/10 hover:bg-secondary border-secondary/50 hover:text-secondary-foreground left-0" />
          <CarouselNext className="text-primary-foreground bg-primary-foreground/10 hover:bg-secondary border-secondary/50 hover:text-secondary-foreground right-0" />
        </Carousel>
      </div>
    </section>
  );
}
