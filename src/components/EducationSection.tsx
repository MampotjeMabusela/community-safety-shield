import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, AlertTriangle, Lightbulb } from "lucide-react";

const educationTopics = [
  {
    icon: AlertTriangle,
    title: "Recognizing Warning Signs",
    description: "Learn to identify early indicators of violence and abuse in relationships and communities.",
    color: "from-accent to-accent/80"
  },
  {
    icon: Users,
    title: "Bystander Intervention",
    description: "Safe and effective strategies to intervene when witnessing harmful situations.",
    color: "from-primary to-primary/80"
  },
  {
    icon: Lightbulb,
    title: "Prevention Strategies",
    description: "Community-wide approaches to create lasting cultural change and safety.",
    color: "from-accent to-accent/80"
  },
  {
    icon: BookOpen,
    title: "Support Best Practices",
    description: "How to effectively support survivors with trauma-informed care approaches.",
    color: "from-primary to-primary/80"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & Prevention
          </h2>
          <p className="text-lg text-muted-foreground">
            Knowledge is power. Learn evidence-based strategies to prevent violence 
            and create safer communities for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {educationTopics.map((topic, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${topic.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <topic.icon className="w-6 h-6 text-card" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{topic.title}</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start text-primary hover:text-primary">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg border border-border/50">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Join Our Training Programs
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive workshops, webinars, and certification programs 
              designed for individuals, organizations, and community leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg">
                Browse Courses
              </Button>
              <Button variant="outline" size="lg">
                Schedule Workshop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
