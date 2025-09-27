
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Users, Target, Palette, Calendar, BarChart, IndianRupee } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const programs = [
    {
        title: "Leaders’ Odyssey",
        target: "For Leaders and CXOs",
        theme: "From Knowing Others to Knowing Thyself",
        focusAreas: ["Cultural Sensitivity", "Applied Empathy", "Deliberate Decision-Making", "Accountability"],
        artFormsUsed: "Tholu Bommalata, Yakshagana, Etikoppaka Toy-Making",
        duration: "3 Days",
        format: "Retreat-Style, Experiential + Strategic",
        keyOutcomes: [
            "Improved people judgment & leadership reflexes",
            "Frugal innovation thinking under constraints",
            "Ownership & team synergy through non-hierarchical collaboration"
        ],
        pilotCost: "₹13,50,000 (15 participants)",
    },
    {
        title: "Founders’ Escape",
        target: "For startup founders",
        theme: "Unblocking Vision, Alignment & Founder Burnout",
        focusAreas: ["Founder Identity", "Strategic Visioning", "Resilience", "Co-Founder Alignment"],
        artFormsUsed: "Roleplay-led scenario labs, Reflective Storyboarding",
        duration: "2.5 Days",
        format: "Campfire Discussions + Peer Masterminds + Narrative Prototyping",
        keyOutcomes: [
            "Clarified founder purpose and strategic alignment",
            "Conflict & co-founder dynamics decoding",
            "Narrative and GTM clarity using storytelling templates"
        ],
        pilotCost: "₹11,25,000 (12 founders)",
    },
    {
        title: "The Educators’ Prism",
        target: "For educators & Innovators",
        theme: "Teaching with Depth, Empathy, and Influence",
        focusAreas: ["Facilitation Intelligence", "Empathic Listening", "Classroom Innovation"],
        artFormsUsed: "Pochampally loom demo, Story pedagogy with puppetry",
        duration: "2 Days",
        format: "Learning Circle Model + Pedagogical Theatre",
        keyOutcomes: [
            "Better classroom decision-making & reflection-in-action",
            "Deepened cultural awareness in pedagogy",
            "Enhanced influence and narrative teaching techniques"
        ],
        pilotCost: "₹9,75,000 (15 educators)",
    },
    {
        title: "The Corporate Canvas",
        target: "For Mid level managers and mid level leaders",
        theme: "Ownership, Identity & Workplace Culture",
        focusAreas: ["Communication Intelligence", "Initiative", "Psychological Safety"],
        artFormsUsed: "Clay modeling, Handloom impression painting",
        duration: "2 Days",
        format: "Gamified Missions + Art-led Reflection + Workplace Labs",
        keyOutcomes: [
            "Increased self-awareness and team presence",
            "Ownership of roles in complex environments",
            "Sensitivity to inclusion and cross-cultural teams"
        ],
        pilotCost: "₹9,50,000 (20 participants)",
    },
];

const commonElements = [
    "Live Indian art/craft experience as metaphorical yet practical lenses",
    "Behavioral simulations rooted in real-world job contexts",
    "Leadership reflection canvas to anchor personal takeaways",
    "Changemaker fireside chats (Padma awardees, experts, etc.)",
    "Toolkits & Playbooks post-retreat"
];

type Program = (typeof programs)[0];

const ProgramDialog = ({ program, children }: { program: Program, children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);

    const DetailItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: React.ReactNode }) => (
        <div className="flex items-start gap-3">
            <Icon className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
            <div>
                <p className="font-semibold text-foreground/80">{label}</p>
                <div className="text-foreground">{typeof value === 'string' ? <p>{value}</p> : value}</div>
            </div>
        </div>
    );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl bg-background">
                <DialogHeader>
                    <DialogTitle className="font-headline text-2xl text-foreground">{program.title}</DialogTitle>
                    <DialogDescription className="text-secondary pt-1 font-semibold">{program.target}</DialogDescription>
                    <p className="text-muted-foreground italic pt-2">"{program.theme}"</p>
                </DialogHeader>
                <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto pr-4">
                    <DetailItem icon={Target} label="Focus Areas" value={<ul className="list-disc list-inside">{program.focusAreas.map(f => <li key={f}>{f}</li>)}</ul>} />
                    <DetailItem icon={Palette} label="Art Forms Used" value={program.artFormsUsed} />
                    <DetailItem icon={Calendar} label="Duration & Format" value={`${program.duration} | ${program.format}`} />
                    <DetailItem icon={BarChart} label="Key Outcomes" value={<ul className="list-disc list-inside">{program.keyOutcomes.map(o => <li key={o}>{o}</li>)}</ul>} />
                    <DetailItem icon={IndianRupee} label="Pilot Cost" value={program.pilotCost} />
                </div>
                <DialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
                    <DialogClose asChild>
                         <Link href="#contact" className="w-full">
                            <Button variant="secondary" className="w-full uppercase tracking-wider font-medium">
                                Talk to Us
                            </Button>
                        </Link>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};


export default function Programs() {
  return (
    <section id="programs" className="bg-primary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground">Aynthram Immersive Leadership Series</h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                    Tailored experiences for every stage of your leadership journey, blending ancient wisdom with modern challenges.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program) => (
                    <Card key={program.title} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl bg-background border-secondary">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-foreground">{program.title}</CardTitle>
                            <CardDescription className="text-secondary pt-1 font-semibold">{program.target}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-3">
                            <p className="italic text-muted-foreground">"{program.theme}"</p>
                            <div className="flex-grow space-y-3 pt-2">
                                {program.keyOutcomes.slice(0, 3).map(feature => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-secondary/80 flex-shrink-0" />
                                        <p className="text-foreground/90">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <ProgramDialog program={program}>
                                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                                    Explore Program
                                </Button>
                            </ProgramDialog>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            
            <div className="mt-16 text-center bg-background/10 p-8 rounded-lg">
                <h3 className="font-headline text-2xl font-bold text-primary-foreground mb-4">Common Elements Across All Programs</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 max-w-4xl mx-auto">
                    {commonElements.map(item => (
                        <div key={item} className="flex items-center gap-3 text-left">
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                            <p className="text-primary-foreground/90">{item}</p>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-8">
                    <Link href="#contact">
                        <Button size="lg" variant="secondary">Customize a Program</Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
