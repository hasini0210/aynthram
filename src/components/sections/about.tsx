import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const uniquePoints = [
    { 
      title: "Neuroscience & Psychology",
      description: "Understanding human behavior, decision-making, and adaptability."
    },
    {
      title: "Business & Strategy",
      description: "Mastering the art of scaling, sustaining, and innovating in business."
    },
    {
      title: "Philosophy & Reflection",
      description: "Learning timeless wisdom to navigate modern complexities."
    },
    {
      title: "Art & Experiential Learning",
      description: "Using Indian performance arts to spark insight, empathy, and transformation."
    },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Where Ancient Wisdom Meets Modern Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              In a world of rapid disruption, are you leading or just managing? At Aynthram Leadership Academy, we don’t just teach leadership—we transform the way you think, work, and lead.
            </p>
            <ul className="space-y-4">
              {uniquePoints.map((point) => (
                <li key={point.title} className="flex items-start gap-4">
                  <div className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-secondary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{point.title}</h3>
                    <p className="text-foreground/80">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground pt-4">
              We bridge the gap between ancient wisdom and cutting-edge leadership to build professionals who don’t just stay relevant but redefine the game.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <>
              <Card className="overflow-hidden shadow-2xl rounded-xl w-full max-w-md">
                <CardContent className="p-0">
                  <Image
                    src="/images/about.jpg"
                    alt="A beautiful illustration of a woman in traditional Indian attire"
                    width={600}
                    height={700}
                    className="object-cover aspect-[6/7]"
                  />
                </CardContent>
              </Card>
              <div className="absolute -bottom-8 -right-8 w-64">
                 <Card className="bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-xl font-headline">Heritage + Innovation</h3>
                  <p className="mt-1 text-sm">Transforming leaders through timeless Indian wisdom</p>
                 </Card>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
