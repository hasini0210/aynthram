import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

  const uniquePoints = [
    "Art-led immersion: Unlocking creativity and perspective through hands-on artistic engagement.",
    "Odisha heritage roots: Drawing inspiration from the rich cultural and artistic traditions of Odisha.",
    "Sustainability focus: Promoting eco-conscious leadership and community empowerment.",
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Transforming Leaders, Empowering Artisans, Preserving Heritage.
            </h2>
            <p className="text-lg text-muted-foreground">
              Aynthram Leadership Academy offers a paradigm shift in leadership development. We move beyond traditional models to cultivate leaders who are not only effective but also empathetic, creative, and deeply connected to their cultural roots.
            </p>
            <ul className="space-y-4">
              {uniquePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            {aboutImage && (
              <Card className="overflow-hidden shadow-2xl rounded-xl w-full max-w-sm rotate-3 hover:-rotate-1 transition-transform duration-500">
                <CardContent className="p-0">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={500}
                    height={650}
                    className="object-cover aspect-[3/4]"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
