import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programs = [
    {
        title: "Leadership Academy",
        description: "An intensive 3-day immersion for senior leaders. Themes include 'Quiet Quitting → Quiet Leading', fostering deep self-awareness and resilient leadership.",
        duration: "3-Day Immersion",
    },
    {
        title: "Founders’ Escape",
        description: "A curated retreat for entrepreneurs to disconnect, reflect, and reignite their vision. Modules cover 'Leading Gen Z' and sustainable growth strategies.",
        duration: "Custom Retreat",
    },
    {
        title: "Corporate & Experiential Tourism",
        description: "Bespoke programs for teams, blending leadership workshops with unique cultural experiences. Includes 'Design Thinking for Frugal Innovation'.",
        duration: "Team Offsite",
    },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-primary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">Our Programs</h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                    Each program is a modular, theme-based journey designed for profound personal and professional growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program) => (
                    <Card key={program.title} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl bg-background border-secondary">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-primary">{program.title}</CardTitle>
                            <p className="text-sm font-semibold text-secondary uppercase tracking-wider">{program.duration}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription className="text-foreground/80">{program.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                           <Link href="#contact" className="w-full">
                             <Button variant="link" className="text-secondary font-bold w-full justify-start p-0 hover:text-primary">
                                Learn More <span className="ml-2" aria-hidden="true">→</span>
                             </Button>
                           </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
