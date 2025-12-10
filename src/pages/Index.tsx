import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechSpecsSection from "@/components/TechSpecsSection";
import DashboardSection from "@/components/DashboardSection";
import RobotSimulator from "@/components/RobotSimulator";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <TechSpecsSection />
        <DashboardSection />
        <RobotSimulator />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
