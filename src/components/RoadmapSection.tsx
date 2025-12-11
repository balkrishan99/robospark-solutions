import { CheckCircle, Circle, Clock } from "lucide-react";

interface Milestone {
  date: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

const milestones: Milestone[] = [
  {
    date: "Q1 2024",
    title: "Prototype Development",
    description: "First functional prototype with basic navigation and sensor integration",
    status: "completed",
  },
  {
    date: "Q2 2024",
    title: "Field Testing Alpha",
    description: "Initial trials on partner farms with corn and soybean crops",
    status: "completed",
  },
  {
    date: "Q3 2024",
    title: "AI Model Training",
    description: "Train vision models on 10M+ images across 50 crop varieties",
    status: "completed",
  },
  {
    date: "Q4 2024",
    title: "Beta Program Launch",
    description: "Deploy 25 units to pilot partners across Midwest farms",
    status: "current",
  },
  {
    date: "Q1 2025",
    title: "Manufacturing Scale-Up",
    description: "Partner with contract manufacturer for 500-unit production run",
    status: "upcoming",
  },
  {
    date: "Q2 2025",
    title: "Commercial Launch",
    description: "Full market release with dealer network across 12 states",
    status: "upcoming",
  },
  {
    date: "Q3 2025",
    title: "Swarm Capability",
    description: "Multi-robot coordination for large-scale farm operations",
    status: "upcoming",
  },
  {
    date: "Q4 2025",
    title: "International Expansion",
    description: "Enter Canadian and Australian markets with localized support",
    status: "upcoming",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Product <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From prototype to market leader—our path to transforming agriculture
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                <div
                  className={`bg-card rounded-2xl p-6 border transition-all ${
                    milestone.status === "current"
                      ? "border-primary shadow-lg shadow-primary/20"
                      : milestone.status === "completed"
                      ? "border-green-500/50"
                      : "border-border"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      milestone.status === "current"
                        ? "text-primary"
                        : milestone.status === "completed"
                        ? "text-green-500"
                        : "text-muted-foreground"
                    }`}
                  >
                    {milestone.date}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    milestone.status === "current"
                      ? "bg-primary text-primary-foreground"
                      : milestone.status === "completed"
                      ? "bg-green-500 text-white"
                      : "bg-muted border-2 border-border"
                  }`}
                >
                  {milestone.status === "completed" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : milestone.status === "current" ? (
                    <Clock className="w-4 h-4" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </div>

              {/* Empty space for opposite side */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-muted border-2 border-border" />
            <span className="text-sm text-muted-foreground">Upcoming</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
