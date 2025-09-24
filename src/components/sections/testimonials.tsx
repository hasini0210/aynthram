
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Aynthram's program was a revelation. It connected me to a deeper sense of purpose and gave me practical tools to lead my team with more empathy and creativity. Truly transformative.",
    name: "Priya Sharma",
    title: "CEO, Innovate Inc.",
    avatar: "/avatars/priya.png"
  },
  {
    quote: "As a founder, the 'Vision to Culture' workshop was invaluable. The performing arts elements brought a fresh perspective on sustainable growth and team alignment.",
    name: "Rajesh Kumar",
    title: "Founder, TechSolutions",
    avatar: "/avatars/rajesh.png"
  },
  {
    quote: "I've attended many leadership programs, but none have been as impactful as Aynthram's. The blend of cognitive science and ancient wisdom is powerful and practical.",
    name: "Anjali Mehta",
    title: "HR Director, Global Corp",
    avatar: "/avatars/anjali.png"
  },
    {
    quote: "The 'Founder's Mindset' retreat helped me navigate the complexities of scaling my startup with newfound clarity and resilience. A must for any entrepreneur.",
    name: "Siddharth Chen",
    title: "Founder & CEO, NextGen AI",
    avatar: "/avatars/siddharth.png"
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
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                 <div className={cn(
                    "p-1 transition-all duration-300 ease-in-out",
                    current === index ? "scale-100" : "scale-90 opacity-40"
                  )}>
                  <Card className="bg-primary-foreground/5 border-primary-foreground/10 shadow-lg text-center w-[300px] h-[350px] flex flex-col justify-center">
                    <CardContent className="p-8 space-y-6">
                        <Quote className="w-10 h-10 text-secondary mx-auto"/>
                        <p className="text-primary-foreground/80 italic">"{testimonial.quote}"</p>
                        <div className="pt-4">
                            <h3 className="font-bold text-primary-foreground">{testimonial.name}</h3>
                            <p className="text-sm text-primary-foreground/60">{testimonial.title}</p>
                        </div>
                    </CardContent>
                  </Card>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-foreground bg-primary-foreground/10 hover:bg-secondary border-secondary/50 hover:text-secondary-foreground" />
          <CarouselNext className="text-primary-foreground bg-primary-foreground/10 hover:bg-secondary border-secondary/50 hover:text-secondary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
