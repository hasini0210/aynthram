import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const programs = [
    {
        title: "Corporate Professionals & CXOs",
        subtitle: "Lead your teams with confidence in an AI-driven world",
        features: [
            "Quiet Quitting to Quiet Leading",
            "Rekindling Purpose at Work",
            "Leading Gen Z: Tantrums, Trends & Transformation",
            "Retention Mastery: Beyond Perks and Ping-Pong",
            "Storytelling for Influence",
        ],
    },
    {
        title: "Startup Founders & Entrepreneurs",
        subtitle: "Scale with strategy and resilience",
        features: [
            "Design Thinking for Frugal Innovation",
            "The Founder's Mindset: Risk, Resilience & Reflection",
            "Vision to Culture: Building Organizations That Last",
            "Pitching with Presence: Story-Backed Conversations",
        ],
    },
    {
        title: "Mid-Level Managers & Leaders",
        subtitle: "Master leadership before you step into top roles",
        features: [
            "The Influence Bridge: Managing Up, Down & Across",
            "From Executor to Enabler: Strategic Leadership",
            "Conflict to Collaboration: Difficult Conversations",
            "Ownership without Overwhelm: Delivery & Delegation",
        ],
    },
    {
        title: "Educators & Innovators",
        subtitle: "Shape the future of learning and influence generations",
        features: [
            "Future-Ready Faculty: From Lecturing to Facilitating",
            "AI in Classrooms: Tools & Mindset Shifts",
            "Empathy in Education: Teacher Wellness as Leadership",
            "Curriculum + Culture: Purpose-Driven Institutions",
        ],
    },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-primary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">Leadership Programs</h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                    Tailored experiences for every stage of your leadership journey, blending ancient wisdom with modern challenges.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program) => (
                    <Card key={program.title} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl bg-background border-secondary">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-secondary">{program.title}</CardTitle>
                            <CardDescription className="text-foreground/80 pt-1">{program.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-3">
                            {program.features.map(feature => (
                                <div key={feature} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-secondary/80 flex-shrink-0" />
                                    <p className="text-foreground/90">{feature}</p>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                           <Link href="#contact" className="w-full">
                             <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                                Explore Program
                             </Button>
                           </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="#contact">
                    <Button size="lg" variant="secondary">View All Programs</Button>
                </Link>
            </div>
        </div>
    </section>
  );
}
