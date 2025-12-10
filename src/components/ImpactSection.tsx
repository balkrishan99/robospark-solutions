import { TrendingUp, Droplets, Leaf, Globe } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "60%",
    label: "Yield Increase",
    description: "Average improvement in crop yields across pilot farms"
  },
  {
    icon: Droplets,
    value: "30%",
    label: "Water Saved",
    description: "Reduction in irrigation through precision monitoring"
  },
  {
    icon: Leaf,
    value: "90%",
    label: "Less Chemicals",
    description: "Reduction in pesticide and herbicide usage"
  },
  {
    icon: Globe,
    value: "50K+",
    label: "Acres Managed",
    description: "Total farmland under TerraBot management"
  }
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Impact</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Proven Results at <span className="gradient-text">Scale</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our pilot programs across 12 farms in California and Texas have 
            demonstrated consistent, measurable improvements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border text-center hover:shadow-glow transition-shadow duration-500"
            >
              <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="font-heading text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="font-heading font-semibold text-lg mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-6">🌾</div>
            <blockquote className="font-heading text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
              "TerraBot transformed our 500-acre operation. We've cut labor costs in half, 
              reduced water usage by 35%, and our corn yields are up 52%. The ROI was 
              visible within the first growing season."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-heading font-bold text-primary">JM</span>
              </div>
              <div className="text-left">
                <div className="font-heading font-semibold">James Mitchell</div>
                <div className="text-sm text-muted-foreground">Mitchell Farms, Central Valley, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
