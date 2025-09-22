import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Partners() {
    const partnerLogos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

    return (
        <section id="partners" className="bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-xl font-headline font-semibold text-muted-foreground mb-8">
                    Trusted by Innovators and Industry Leaders
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {partnerLogos.map(logo => (
                        <div key={logo.id} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                            <Image 
                                src={logo.imageUrl}
                                alt={logo.description}
                                width={140}
                                height={70}
                                className="object-contain"
                                data-ai-hint={logo.imageHint}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
