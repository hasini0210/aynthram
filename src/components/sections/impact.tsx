"use client";

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const impactStats = [
    {
        value: 50000000,
        label: "Projected Revenue (Year 1)",
        description: "Targeting significant growth and financial sustainability from the first year of operations.",
        prefix: "₹",
        suffix: ""
    },
    {
        value: 700,
        label: "Artisan Engagement",
        description: "Empowering over 700 artisans within the first three years through direct collaboration.",
        prefix: "",
        suffix: "+"
    },
    {
        value: 1500,
        label: "Professionals Trained",
        description: "Aiming to transform over 1,500 leaders and professionals annually with our unique programs.",
        prefix: "",
        suffix: "+"
    },
];

const Counter = ({ to, prefix = "", suffix = "" }: { to: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const duration = 2000; // 2 seconds

    useEffect(() => {
        let start = 0;
        const end = to;
        if (start === end) return;

        const incrementTime = (duration / end) * 1;
        
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [to]);
    
    const formatNumber = (num: number) => {
        if (num >= 10000000) {
            return `${(num / 10000000).toFixed(1)} Cr`
        }
        return new Intl.NumberFormat('en-IN').format(num);
    }

    // Special formatting for crores
    if (to >= 10000000) {
         const croreValue = count / 10000000;
         return <span>{prefix}{croreValue.toFixed(2)} Cr</span>
    }

    return <span>{prefix}{new Intl.NumberFormat('en-IN').format(count)}{suffix}</span>;
};


export default function Impact() {
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
  });

  return (
    <section id="impact" className="bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Tangible Impact</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
                We measure success not just in leadership growth, but in community and heritage preservation.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {impactStats.map((stat) => (
                <div key={stat.label} className="p-8 rounded-lg bg-primary/60 border border-primary-foreground/10">
                    <p className="font-headline text-5xl font-bold text-secondary">
                      {inView ? <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} /> : <span>{stat.prefix}0{stat.suffix}</span>}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{stat.label}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/70">{stat.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
