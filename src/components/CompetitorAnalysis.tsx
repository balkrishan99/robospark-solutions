import { Check, X, Minus } from "lucide-react";

interface Competitor {
  name: string;
  logo: string;
  price: string;
  autonomy: "full" | "partial" | "none";
  aiVision: boolean;
  multiCrop: boolean;
  precision: string;
  runtime: string;
  subscription: string;
  highlight?: boolean;
}

const competitors: Competitor[] = [
  {
    name: "TerraBot",
    logo: "🤖",
    price: "$85,000",
    autonomy: "full",
    aiVision: true,
    multiCrop: true,
    precision: "±2cm",
    runtime: "12 hours",
    subscription: "$2,000/mo",
    highlight: true,
  },
  {
    name: "FarmBot Genesis",
    logo: "🌱",
    price: "$4,000",
    autonomy: "partial",
    aiVision: false,
    multiCrop: false,
    precision: "±5cm",
    runtime: "8 hours",
    subscription: "None",
  },
  {
    name: "Naïo Oz",
    logo: "🚜",
    price: "$30,000",
    autonomy: "full",
    aiVision: false,
    multiCrop: false,
    precision: "±5cm",
    runtime: "4 hours",
    subscription: "$500/mo",
  },
  {
    name: "Carbon Robotics",
    logo: "⚡",
    price: "$150,000",
    autonomy: "full",
    aiVision: true,
    multiCrop: false,
    precision: "±3cm",
    runtime: "10 hours",
    subscription: "$3,000/mo",
  },
  {
    name: "Aigen Element",
    logo: "☀️",
    price: "$50,000",
    autonomy: "full",
    aiVision: true,
    multiCrop: false,
    precision: "±4cm",
    runtime: "∞ (Solar)",
    subscription: "$1,500/mo",
  },
];

const features = [
  {
    category: "Core Capabilities",
    items: [
      { name: "Weed Detection & Removal", terrabot: true, others: [false, true, true, true] },
      { name: "Precision Planting", terrabot: true, others: [true, false, false, false] },
      { name: "Soil Analysis", terrabot: true, others: [false, false, false, true] },
      { name: "Crop Health Monitoring", terrabot: true, others: [false, false, true, true] },
      { name: "Yield Prediction AI", terrabot: true, others: [false, false, false, false] },
    ],
  },
  {
    category: "Technology",
    items: [
      { name: "LiDAR Navigation", terrabot: true, others: [false, true, true, true] },
      { name: "RTK GPS (±2cm)", terrabot: true, others: [false, false, true, false] },
      { name: "Multi-spectral Imaging", terrabot: true, others: [false, false, true, false] },
      { name: "Edge AI Processing", terrabot: true, others: [false, false, true, true] },
      { name: "Swarm Coordination", terrabot: true, others: [false, false, false, false] },
    ],
  },
  {
    category: "Operations",
    items: [
      { name: "All-Weather Operation", terrabot: true, others: [false, false, false, true] },
      { name: "Night Operation", terrabot: true, others: [false, true, true, false] },
      { name: "Remote Monitoring", terrabot: true, others: [true, true, true, true] },
      { name: "Auto Charging", terrabot: true, others: [false, false, false, true] },
      { name: "OTA Updates", terrabot: true, others: [true, false, true, true] },
    ],
  },
];

const FeatureIcon = ({ value }: { value: boolean }) => (
  value ? (
    <Check className="w-5 h-5 text-green-500" />
  ) : (
    <X className="w-5 h-5 text-muted-foreground/50" />
  )
);

const AutonomyBadge = ({ level }: { level: "full" | "partial" | "none" }) => {
  const styles = {
    full: "bg-green-500/20 text-green-500",
    partial: "bg-yellow-500/20 text-yellow-500",
    none: "bg-red-500/20 text-red-500",
  };
  const labels = { full: "Full", partial: "Partial", none: "Manual" };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[level]}`}>
      {labels[level]}
    </span>
  );
};

const CompetitorAnalysis = () => {
  return (
    <section id="competitors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Market Position
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Competitive <span className="text-primary">Analysis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How TerraBot compares to existing agricultural robotics solutions
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition-all ${
                competitor.highlight
                  ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{competitor.logo}</div>
                <h3 className={`font-bold ${competitor.highlight ? "text-primary" : ""}`}>
                  {competitor.name}
                </h3>
                {competitor.highlight && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    Our Solution
                  </span>
                )}
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-semibold">{competitor.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Autonomy</span>
                  <AutonomyBadge level={competitor.autonomy} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">AI Vision</span>
                  <FeatureIcon value={competitor.aiVision} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Multi-Crop</span>
                  <FeatureIcon value={competitor.multiCrop} />
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Precision</span>
                  <span className="font-mono text-xs">{competitor.precision}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Runtime</span>
                  <span className="font-mono text-xs">{competitor.runtime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">SaaS</span>
                  <span className="font-mono text-xs">{competitor.subscription}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Matrix */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {competitors.map((c, i) => (
                    <th key={i} className={`p-4 text-center ${c.highlight ? "bg-primary/5" : ""}`}>
                      <span className="text-2xl block mb-1">{c.logo}</span>
                      <span className={`text-sm ${c.highlight ? "text-primary font-bold" : ""}`}>
                        {c.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="bg-muted/50">
                      <td colSpan={6} className="p-3 font-semibold text-sm">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`item-${catIndex}-${itemIndex}`} className="border-b border-border/50">
                        <td className="p-4 text-sm">{item.name}</td>
                        <td className="p-4 text-center bg-primary/5">
                          <FeatureIcon value={item.terrabot} />
                        </td>
                        {item.others.map((val, i) => (
                          <td key={i} className="p-4 text-center">
                            <FeatureIcon value={val} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/30">
            <h4 className="font-bold text-lg mb-2">🎯 Best-in-Class Precision</h4>
            <p className="text-muted-foreground text-sm">
              RTK GPS with ±2cm accuracy—50% more precise than the closest competitor.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/30">
            <h4 className="font-bold text-lg mb-2">🧠 Only Full-Stack AI</h4>
            <p className="text-muted-foreground text-sm">
              Unique yield prediction AI plus multi-spectral crop analysis in one platform.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-6 border border-primary/30">
            <h4 className="font-bold text-lg mb-2">🌾 True Multi-Crop Support</h4>
            <p className="text-muted-foreground text-sm">
              The only solution supporting 50+ crop types with automatic detection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorAnalysis;
