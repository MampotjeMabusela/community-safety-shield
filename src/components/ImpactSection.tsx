import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "50K+", label: "Lives Impacted", description: "People connected to safety resources" },
  { value: "24/7", label: "Support Available", description: "Around-the-clock assistance" },
  { value: "150+", label: "Partner Organizations", description: "Collaborative network" },
  { value: "95%", label: "Trust Rating", description: "From community members" }
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Together, we're creating measurable change in community safety and support systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 text-center overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-center space-y-4">
                <p className="text-xl md:text-2xl text-foreground italic leading-relaxed">
                  "This platform gave me the courage to seek help. The resources were accessible, 
                  the support was immediate, and I finally felt heard. I'm now helping others find their way to safety."
                </p>
                <footer className="text-muted-foreground">
                  <div className="font-semibold text-foreground">— Community Member</div>
                  <div className="text-sm">Survivor & Advocate</div>
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
