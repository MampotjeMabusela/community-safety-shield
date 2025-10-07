import { Button } from "@/components/ui/button";
import { Shield, AlertCircle } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm px-4 py-2 rounded-full border border-card/20">
            <Shield className="w-4 h-4 text-card" />
            <span className="text-sm font-medium text-card">Building Safer Communities Together</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-card leading-tight">
            Everyone Deserves to
            <span className="block bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent mt-2">
              Feel Safe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-card/90 max-w-3xl mx-auto leading-relaxed">
            Leveraging technology to prevent gender-based violence, strengthen emergency response, 
            and build trust in safety systems for all community members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="emergency" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              <AlertCircle className="w-5 h-5" />
              Get Help Now
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-card hover:bg-card/90 text-primary"
            >
              Explore Resources
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-card/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Confidential & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Community-Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
