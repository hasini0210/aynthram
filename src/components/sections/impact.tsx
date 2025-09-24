"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Users, Sparkles, TrendingUp, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const impactStats = [
    {
        icon: Briefcase,
        value: 1500,
        label: "Professionals Trained Annually",
        suffix: "K+",
        isK: true,
    },
    {
        icon: Users,
        value: 700,
        label: "Artisans Engaged (3-Year Goal)",
        suffix: "+",
    },
    {
        icon: Sparkles,
        value: 10,
        label: "Unique Art Forms Integrated",
        suffix: "+",
    },
    {
        icon: TrendingUp,
        value: 25,
        label: "Avg. Increase in Leadership Scores",
        suffix: "%",
    },
    {
        icon: Scale,
        value: 1,
        label: "Revenue Reinvested into Communities",
        prefix: "$",
        suffix: "M+",
    },
];

const Counter = ({ to, prefix = "", suffix = "", isK = false }: { to: number, prefix?: string, suffix?: string, isK?: boolean }) => {
    const [count, setCount] = useState(0);
    const duration = 2000; 

    useEffect(() => {
        let start = 0;
        const end = to;
        if (start === end) return;

        const totalFrames = duration / (1000/60); // 60fps
        const increment = end / totalFrames;

        const counter = () => {
            start += increment;
            if (start > end) {
                setCount(end);
                return;
            }
            setCount(start);
            requestAnimationFrame(counter);
        };
        
        requestAnimationFrame(counter);

    }, [to, duration]);

    const formatNumber = (num: number) => {
        if (isK) {
            return (num / 1000).toFixed(1);
        }
        return Math.ceil(num).toLocaleString();
    }

    return <span>{prefix}{formatNumber(count)}{suffix}</span>;
};


export default function Impact() {
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
  });

  return (
    <section id="impact" className="bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-semibold text-secondary mb-2">OUR IMPACT</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Measurable Growth for Leaders and Communities</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We are committed to creating a virtuous cycle of growth, where leadership development directly fuels community empowerment and cultural preservation.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center max-w-5xl mx-auto items-center justify-center sm:[&>*:nth-child(1)]:lg:col-start-1 sm:[&>*:nth-child(2)]:lg:col-start-2 sm:[&>*:nth-child(3)]:lg:col-start-3 sm:[&>*:nth-child(4)]:lg:col-start-2 sm:[&>*:nth-child(5)]:lg:col-start-3 lg:[&>*:nth-child(4)]:-ml-32 lg:[&>*:nth-child(5)]:-mr-32">
             {impactStats.map((stat) => (
                <Card key={stat.label} className="bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-8">
                      <div className="mx-auto bg-secondary/10 text-secondary w-fit p-3 rounded-full mb-4">
                        <stat.icon className="w-7 h-7" />
                      </div>
                      <p className="font-headline text-5xl font-bold text-primary">
                        {inView ? <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} isK={stat.isK} /> : <span>{stat.prefix}0{stat.suffix}</span>}
                      </p>
                      <h3 className="mt-2 text-md text-muted-foreground">{stat.label}</h3>
                  </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
