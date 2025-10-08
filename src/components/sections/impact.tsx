"use client";

import { Briefcase, Users, Sparkles, TrendingUp, Scale, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const impactGoals = [
    {
        icon: Briefcase,
        label: "Train Future-Ready Leaders",
        description: "To equip thousands of professionals with adaptive leadership skills rooted in cultural wisdom."
    },
    {
        icon: HeartHandshake,
        label: "Empower Artisan Communities",
        description: "To engage with and provide sustainable livelihoods for over 700 artisans within three years."
    },
    {
        icon: Sparkles,
        label: "Preserve Cultural Heritage",
        description: "To integrate and revive at least 10 unique and endangered Indian art forms."
    },
    {
        icon: TrendingUp,
        label: "Drive Leadership Excellence",
        description: "To measurably enhance leadership effectiveness and engagement scores across organizations."
    },
    {
        icon: Scale,
        label: "Foster a Virtuous Cycle",
        description: "To reinvest a significant portion of revenue back into community development and heritage preservation."
    },
];

export default function Impact() {

  return (
    <section id="impact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-semibold text-secondary mb-2">OUR VISION FOR IMPACT</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">A Commitment to Growth for Leaders and Communities</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
                We are building a virtuous cycle where leadership development directly fuels community empowerment and cultural preservation.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {impactGoals.map((goal) => (
                <Card key={goal.label} className="bg-background/5 border border-background/10 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                      <div className="mx-auto bg-secondary/10 text-secondary w-fit p-3 rounded-full mb-4">
                        <goal.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-headline text-xl font-bold text-background mb-2">{goal.label}</h3>
                      <p className="text-background/70">{goal.description}</p>
                  </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
