import Image from "next/image";

const partnerLogos = [
    { id: "partner-1", name: "Partner 1", src: "/images/partner1.png" },
    { id: "partner-2", name: "Partner 2", src: "/images/partner2.png" },
    { id: "partner-3", name: "Partner 3", src: "/images/partner3.png" },
    { id: "partner-4", name: "Partner 4", src: "/images/partner4.png" },
    { id: "partner-5", name: "Partner 5", src: "/images/partner5.png" },
];

export default function Partners() {
    return (
        <section id="partners" className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-xl font-headline font-semibold text-muted-foreground mb-8">
                    Trusted by Innovators and Industry Leaders
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {partnerLogos.map(logo => (
                        <div key={logo.id} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                            <Image 
                                src={logo.src}
                                alt={logo.name}
                                width={140}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
