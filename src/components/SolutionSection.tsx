import { Check, Cpu, Eye, Zap, Leaf } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced AI identifies crops, weeds, pests, and diseases with 99.5% accuracy in real-time."
  },
  {
    icon: Cpu,
    title: "SLAM Navigation",
    description: "Autonomous navigation using simultaneous localization and mapping for precise field coverage."
  },
  {
    icon: Zap,
    title: "24/7 Operation",
    description: "Solar-powered with smart charging. Works around the clock without human intervention."
  },
  {
    icon: Leaf,
    title: "Precision Application",
    description: "Targeted micro-dosing reduces pesticide use by 90% and fertilizer by 50%."
  }
];

const benefits = [
  "Reduce labor costs by 40%",
  "Increase crop yields by 60%",
  "Cut water usage by 30%",
  "Minimize chemical inputs by 90%",
  "Real-time crop health analytics",
  "Predictive harvest optimization"
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Solution</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">TerraBot</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            An autonomous agricultural robot platform that combines cutting-edge AI, 
            computer vision, and precision mechanics to transform farming operations.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits list */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                Transforming Farm Economics
              </h3>
              <p className="text-muted-foreground mb-8">
                TerraBot doesn't just automate—it optimizes every aspect of farm operations 
                to deliver measurable ROI from day one.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-heading text-6xl lg:text-7xl font-bold gradient-text mb-2">3x</div>
                  <div className="text-muted-foreground font-medium">Average ROI in Year 1</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-accent/10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
