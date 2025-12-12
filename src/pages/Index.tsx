import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechSpecsSection from "@/components/TechSpecsSection";
import CADViewer from "@/components/CADViewer";
import SensorSimulation from "@/components/SensorSimulation";
import DashboardSection from "@/components/DashboardSection";
import RobotSimulator from "@/components/RobotSimulator";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import FinancialsSection from "@/components/FinancialsSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
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
        <CADViewer />
        <SensorSimulation />
        <DashboardSection />
        <RobotSimulator />
        <CompetitorAnalysis />
        <FinancialsSection />
        <ImpactSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
