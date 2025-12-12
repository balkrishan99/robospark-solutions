import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroRobot from "@/assets/hero-robot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-glow opacity-50" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Now Accepting Pilot Partners</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              The Future of Farming is{' '}
              <span className="gradient-text">Autonomous</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              TerraBot's AI-powered robots revolutionize agriculture with precision planting, 
              24/7 crop monitoring, and autonomous harvesting—reducing costs by 40% while 
              increasing yields by 60%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild variant="hero" size="xl">
                <a href="#contact" aria-label="Schedule a TerraBot demo">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">40%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">60%</div>
                <div className="text-sm text-muted-foreground">Yield Increase</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Robot image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <img 
                src={heroRobot} 
                alt="TerraBot autonomous agricultural robot in action"
                className="rounded-3xl shadow-card animate-float"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card border border-border animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <div className="font-heading font-semibold">Precision Planting</div>
                  <div className="text-sm text-muted-foreground">99.2% accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-card border border-border animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <div className="font-heading font-semibold">AI-Powered</div>
                  <div className="text-sm text-muted-foreground">Computer Vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
