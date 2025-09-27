import Image from "next/image";
import Link from 'next/link';

const partnerLogos = [
    { id: "teach-for-india", name: "Teach For India", src: "/images/partners/teach-for-india.png" },
    { id: "microsoft", name: "Microsoft", src: "/images/partners/microsoft.png" },
    { id: "gitam-university", name: "GITAM University", src: "/images/partners/gitam-university.png" },
    { id: "jain-university", name: "JAIN University", src: "/images/partners/jain-university.png" },
    { id: "dettol", name: "Dettol", src: "/images/partners/dettol.png" },
    { id: "akshaya-patra", name: "Akshaya Patra Foundation", src: "/images/partners/akshaya-patra.png" },
    { id: "creya-learning", name: "CREYA Learning", src: "/images/partners/creya-learning.png" },
    { id: "aspiring-minds", name: "Aspiring Minds", src: "/images/partners/aspiring-minds.png" },
    { id: "terra-do", name: "Terra.do", src: "/images/partners/terra-do.png" },
    { id: "vit", name: "VIT", src: "/images/partners/vit.png" },
    { id: "opentext", name: "OpenText", src: "/images/partners/opentext.png" },
    { id: "thoughtworks", name: "Thoughtworks", src: "/images/partners/thoughtworks.png" },
    { id: "servicenow", name: "ServiceNow", src: "/images/partners/servicenow.png" },
    { id: "cognizant", name: "Cognizant", src: "/images/partners/cognizant.png" },
    { id: "aranya", name: "Aranya Agricultural Alternatives", src: "/images/partners/aranya.png" },
    { id: "samhita", name: "Samhita Social Ventures", src: "/images/partners/samhita.png" },
    { id: "mu-sigma", name: "Mu Sigma", src: "/images/partners/mu-sigma.png" },
    { id: "madurai-kamaraj-university", name: "Madurai Kamaraj University", src: "/images/partners/madurai-kamaraj-university.png" },
];


export default function Partners() {
    return (
        <section id="partners" className="bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-center text-xl font-headline font-semibold text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Our Leadership Lineage: From Transformative Fellowships to Leadership in Action
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
                    {partnerLogos.map(logo => {
                        const logoImage = (
                            <Image 
                                src={logo.src}
                                alt={logo.name}
                                width={140}
                                height={70}
                                className="object-contain"
                            />
                        );
                        
                        return (
                            <div key={logo.id} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                                {logo.href ? (
                                    <Link href={logo.href} target="_blank" rel="noopener noreferrer">
                                        {logoImage}
                                    </Link>
                                ) : (
                                    logoImage
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
