import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HandHeart, Megaphone, DollarSign, Users2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ways = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Support survivors and strengthen our community response network."
  },
  {
    icon: Megaphone,
    title: "Advocate",
    description: "Raise awareness and drive policy changes for systemic solutions."
  },
  {
    icon: DollarSign,
    title: "Donate",
    description: "Fund critical resources and expand support services."
  },
  {
    icon: Users2,
    title: "Partner",
    description: "Collaborate with us as an organization or service provider."
  }
];

const GetInvolvedSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground">
            Be part of the solution. Every action, big or small, creates ripples of change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 text-center"
            >
              <CardHeader>
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <way.icon className="w-7 h-7 text-card" />
                </div>
                <CardTitle className="text-xl">{way.title}</CardTitle>
                <CardDescription className="text-sm">{way.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full text-primary hover:text-primary">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
              <CardDescription className="text-center">
                Have questions? Want to collaborate? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[120px] bg-background"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
