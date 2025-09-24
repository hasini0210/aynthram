import { GitBranch, Mic, Sparkles, Users, Drama, BrainCircuit, Leaf, BookOpen, Handshake, Gem } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experienceSteps = [
    {
        icon: Mic,
        title: "Live Art Performance",
        description: "Begin with immersive performances that break down barriers and open new perspectives."
    },
    {
        icon: Users,
        title: "Cognitive Debriefs",
        description: "Facilitated discussions to reframe experiences and connect artistic insights to business challenges."
    },
    {
        icon: Sparkles,
        title: "Business Simulations",
        description: "Apply newfound perspectives in practical, real-world leadership scenarios and simulations."
    },
    {
        icon: GitBranch,
        title: "Fireside Chats & Action Plan",
        description: "Intimate conversations with master artisans and leaders, culminating in a personal action plan."
    }
];

const differencePoints = [
    {
        icon: Drama,
        title: "Immersive Art-Based Learning",
        description: "Learn from master artisans while fostering creative problem-solving through traditional Indian art forms."
    },
    {
        icon: BrainCircuit,
        title: "Cognitive Reframing",
        description: "Neuroscience-backed approaches to reshape thinking patterns and decision-making processes."
    },
    {
        icon: Leaf,
        title: "Sustainability Focus",
        description: "Integrating eco-conscious practices and ethical development aligned with modern sustainability goals."
    },
    {
        icon: BookOpen,
        title: "Timeless Wisdom",
        description: "Ancient Indian philosophical teachings applied to contemporary leadership challenges."
    },
    {
        icon: Handshake,
        title: "Cultural Depth",
        description: "Deep connections with indigenous heritage creating authentic and meaningful experiences."
    },
    {
        icon: Gem,
        title: "Transformative Experiences",
        description: "Emotionally resonant journeys that create lasting behavioral and cultural shifts."
    }
]

const interventionStats = [
    {
        value: "77%",
        description: "Of employees are either not engaged or actively disengaged at work"
    },
    {
        value: "45%",
        description: "Of workplace interventions show no effect on work engagement"
    },
    {
        value: "$8.9T",
        description: "Lost annually due to low employee engagement (9% of global GDP)"
    }
]

export default function Experience() {
    return (
        <section id="experience" className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">The Aynthram Method</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A unique journey of art-based experiential interventions and cognitive reframing.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                    
                    <div className="space-y-16">
                        {experienceSteps.map((step, index) => (
                             <div key={index} className="relative group">
                                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <div className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                                            <div className="flex items-center gap-4 mb-2">
                                                 <div className={`md:hidden z-10 bg-secondary text-secondary-foreground rounded-full p-2 ring-4 ring-background flex-shrink-0`}>
                                                    <step.icon className="h-5 w-5" />
                                                </div>
                                                <h3 className={`font-headline text-xl font-bold text-primary`}>{step.title}</h3>
                                            </div>
                                            <p className={`text-muted-foreground`}>{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground rounded-full p-3 ring-8 ring-background z-10 ${index % 2 === 0 ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}>
                                    <step.icon className="h-6 w-6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">The Aynthram Difference</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We restore meaning and depth to leadership development through immersive experiences that engage people emotionally, culturally, and collectively.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differencePoints.map((point) => (
                        <Card key={point.title} className="text-center bg-card border-border/10 hover:shadow-xl transition-shadow duration-300 rounded-xl p-4 shadow-md">
                            <CardHeader className="items-center pb-4">
                                <div className="p-3 rounded-full bg-secondary/10">
                                    <point.icon className="w-7 h-7 text-secondary" />
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <CardTitle className="font-headline text-lg font-bold text-foreground mb-2">{point.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{point.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-24">
                <div className="bg-primary rounded-lg p-8 md:p-12">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="font-headline text-3xl font-bold text-primary-foreground">Why Traditional Interventions Fall Short</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {interventionStats.map((stat) => (
                            <div key={stat.value}>
                                <p className="text-5xl font-bold text-secondary font-headline">{stat.value}</p>
                                <p className="mt-2 text-primary-foreground/80">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-10 text-primary-foreground font-medium max-w-2xl mx-auto">Aynthram reimagines leadership development with depth, authenticity, and cultural resonance.</p>
                </div>
            </div>
        </section>
    );
}
