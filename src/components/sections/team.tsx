import Image from "next/image";
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
    { name: "Vasudev Vangara", role: "Co-Founder & CEO", imageSrc: "/images/vasudev.jpg", linkedin: "https://www.linkedin.com/in/vvasudeva21/" },
    { name: "Yamini Rapeti", role: "Co-Founder & CMO", imageSrc: "/images/yamini.jpg", linkedin: "https://www.linkedin.com/in/yamini-krishna-rapeti-79184826b/" },
    { name: "Dr. Gaman Palem", role: "Mentor & Facilitator", imageSrc: "/images/gaman.jpg", linkedin: "https://www.linkedin.com/in/gaman/" },
    { name: "Chaitanya Muppala", role: "Mentor & Facilitator", imageSrc: "/images/chaitanya.jpg", linkedin: "https://www.linkedin.com/in/chaitanyamuppala/" },
];

export default function Team() {
    return (
        <section id="team" className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet the Visionaries</h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        A collective of strategists, artists, and innovators dedicated to redefining leadership.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-center">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="text-center group">
                            <Card className="overflow-hidden rounded-full w-32 h-32 md:w-40 md:h-40 mx-auto shadow-lg border-4 border-transparent group-hover:border-secondary transition-all duration-300">
                                <CardContent className="p-0">
                                    <Image
                                        src={member.imageSrc}
                                        alt={`Portrait of ${member.name}`}
                                        width={160}
                                        height={160}
                                        className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-300"
                                    />
                                </CardContent>
                            </Card>
                            <h3 className="mt-4 font-bold text-lg text-primary-foreground">{member.name}</h3>
                            <p className="text-sm text-primary-foreground/70">{member.role}</p>
                            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-primary-foreground/60 hover:text-secondary transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn Profile</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
