import { AlertTriangle, TrendingDown, Users, Droplets } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Labor Shortage",
    description: "Global agricultural labor force declining by 4% annually. Farms struggle to find workers for critical tasks.",
    stat: "58%",
    statLabel: "farms report labor shortages"
  },
  {
    icon: TrendingDown,
    title: "Declining Yields",
    description: "Traditional farming methods can't keep pace with climate change and growing food demands.",
    stat: "2.3B",
    statLabel: "people face food insecurity"
  },
  {
    icon: Droplets,
    title: "Resource Waste",
    description: "Over-irrigation and inefficient fertilizer use waste resources and harm the environment.",
    stat: "70%",
    statLabel: "of freshwater used in agriculture"
  },
  {
    icon: AlertTriangle,
    title: "Rising Costs",
    description: "Input costs have increased 40% in the last 5 years, squeezing farmer margins to unsustainable levels.",
    stat: "$480B",
    statLabel: "annual agricultural losses"
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">The Crisis</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Agriculture is at a <span className="gradient-text">Breaking Point</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            The world needs to produce 70% more food by 2050 to feed 10 billion people. 
            Traditional farming cannot scale. Something has to change.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="font-heading font-semibold text-xl mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{problem.description}</p>
              
              <div className="pt-4 border-t border-border">
                <div className="font-heading text-2xl font-bold text-foreground">{problem.stat}</div>
                <div className="text-xs text-muted-foreground">{problem.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
