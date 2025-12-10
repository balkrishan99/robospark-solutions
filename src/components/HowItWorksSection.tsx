import { Scan, Brain, Settings, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Scan,
    title: "Deploy & Map",
    description: "TerraBot autonomously surveys your fields, creating a detailed 3D map of terrain, soil conditions, and existing crops using LiDAR and computer vision."
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Analysis",
    description: "Our ML models analyze crop health, identify pests and diseases, predict optimal planting patterns, and determine precise resource requirements."
  },
  {
    step: "03",
    icon: Settings,
    title: "Autonomous Action",
    description: "The robot executes precision tasks—planting seeds at optimal depth and spacing, targeted pest control, and selective harvesting when crops reach peak ripeness."
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Insights & Optimization",
    description: "Real-time dashboards show yield predictions, resource usage, and continuous optimization recommendations based on collected field data."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Settings className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">How It Works</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Field to <span className="gradient-text">Harvest</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            A fully integrated robotic farming solution that handles everything 
            from soil analysis to selective harvesting.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 w-12 h-8 gradient-hero rounded-lg flex items-center justify-center">
                    <span className="font-heading font-bold text-primary-foreground text-sm">{step.step}</span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="font-heading font-semibold text-xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
