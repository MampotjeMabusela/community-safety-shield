import Hero from "@/components/Hero";
import ResourcesSection from "@/components/ResourcesSection";
import EducationSection from "@/components/EducationSection";
import ImpactSection from "@/components/ImpactSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ResourcesSection />
      <EducationSection />
      <ImpactSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
};

export default Index;
