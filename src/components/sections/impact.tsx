const impactStats = [
    {
        value: "₹5 Cr",
        label: "Projected Revenue (Year 1)",
        description: "Targeting significant growth and financial sustainability from the first year of operations.",
    },
    {
        value: "700+",
        label: "Artisan Engagement",
        description: "Empowering over 700 artisans within the first three years through direct collaboration.",
    },
    {
        value: "1,500+",
        label: "Professionals Trained",
        description: "Aiming to transform over 1,500 leaders and professionals annually with our unique programs.",
    },
]

export default function Impact() {
  return (
    <section id="impact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Tangible Impact</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
                We measure success not just in leadership growth, but in community and heritage preservation.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {impactStats.map((stat) => (
                <div key={stat.label} className="p-8 rounded-lg bg-primary/60 border border-primary-foreground/10">
                    <p className="font-headline text-5xl font-bold text-micro-accent">{stat.value}</p>
                    <h3 className="mt-2 text-xl font-semibold">{stat.label}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/70">{stat.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
