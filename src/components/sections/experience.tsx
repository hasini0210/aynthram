import { GitBranch, Mic, Sparkles, Users } from "lucide-react";

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
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-12">
                        {experienceSteps.map((step, index) => (
                             <div key={index} className="relative flex flex-col md:flex-row items-center justify-center group">
                                <div className={`flex items-center w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:justify-end' : 'md:pl-8 md:justify-start md:flex-row-reverse'}`}>
                                    <div className="z-10 bg-secondary text-secondary-foreground rounded-full p-3 ring-8 ring-background flex-shrink-0">
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                    <div className="p-6 rounded-lg bg-primary/5 w-full ml-4 md:ml-0 md:mr-4 group-last:mb-0">
                                        <h3 className={`font-headline text-2xl font-bold text-primary mb-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{step.title}</h3>
                                        <p className={`text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
