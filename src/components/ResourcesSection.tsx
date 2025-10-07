import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Scale, Heart, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: Phone,
    title: "Crisis Hotlines",
    description: "24/7 support from trained counselors",
    links: [
      { name: "National Hotline", number: "1-800-799-7233" },
      { name: "Crisis Text Line", number: "Text HOME to 741741" }
    ]
  },
  {
    icon: MapPin,
    title: "Safe Shelters",
    description: "Emergency housing and protection services",
    links: [
      { name: "Find Nearby Shelter", number: "Search by location" },
      { name: "Emergency Housing", number: "Immediate placement" }
    ]
  },
  {
    icon: Scale,
    title: "Legal Support",
    description: "Free legal aid and protective orders",
    links: [
      { name: "Legal Helpline", number: "1-800-799-7233" },
      { name: "Pro Bono Services", number: "Connect with lawyers" }
    ]
  },
  {
    icon: Heart,
    title: "Counseling Services",
    description: "Trauma-informed therapy and support groups",
    links: [
      { name: "Find a Therapist", number: "Local providers" },
      { name: "Support Groups", number: "Join community" }
    ]
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resources & Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Access comprehensive support services designed to help survivors and 
            strengthen community safety networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription className="text-sm">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resource.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="flex flex-col gap-1">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-left h-auto py-3 px-3 hover:bg-secondary"
                      >
                        <div className="flex flex-col items-start">
                          <span className="font-medium text-sm">{link.name}</span>
                          <span className="text-xs text-muted-foreground">{link.number}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Need help but not sure where to start?
          </p>
          <Button variant="hero" size="lg">
            Talk to a Support Navigator
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
