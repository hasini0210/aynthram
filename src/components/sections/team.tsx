import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
    { name: "Vasudev Vangara", role: "Founder & CEO", imageId: "team-vasudev" },
    { name: "Gaman Palem", role: "Artist & Co-creator", imageId: "team-gaman" },
    { name: "Adarsh Chintalapati", role: "Strategy & Operations", imageId: "team-adarsh" },
    { name: "Chaitanya Muppala", role: "Partnerships & Growth", imageId: "team-chaitanya" },
    { name: "Yamini Rapeti", role: "Program Design", imageId: "team-yamini" },
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                    {teamMembers.map((member) => {
                        const memberImage = PlaceHolderImages.find(img => img.id === member.imageId);
                        return (
                            <div key={member.name} className="text-center group">
                                <Card className="overflow-hidden rounded-full w-32 h-32 md:w-40 md:h-40 mx-auto shadow-lg border-4 border-transparent group-hover:border-secondary transition-all duration-300">
                                    <CardContent className="p-0">
                                        {memberImage && (
                                            <Image
                                                src={memberImage.imageUrl}
                                                alt={`Portrait of ${member.name}`}
                                                width={160}
                                                height={160}
                                                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-300"
                                                data-ai-hint={memberImage.imageHint}
                                            />
                                        )}
                                    </CardContent>
                                </Card>
                                <h3 className="mt-4 font-bold text-lg text-primary-foreground">{member.name}</h3>
                                <p className="text-sm text-primary-foreground/70">{member.role}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
