import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Leaf, ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, 
  Target, Cpu, Layers, BarChart3, Calendar, CheckCircle2, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: "cover",
    title: "TerraBot",
    subtitle: "Autonomous Farming Robotics",
    content: (
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-3xl gradient-hero flex items-center justify-center mb-8">
          <Leaf className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">TerraBot</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Autonomous Precision Agriculture</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-sm font-medium text-primary">Series A - $15M Raise</span>
        </div>
      </div>
    )
  },
  {
    id: "problem",
    title: "The Problem",
    subtitle: "Agriculture is Broken",
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-bold">Global Food Crisis</h2>
          <p className="text-lg text-muted-foreground">
            The world needs to produce 70% more food by 2050 to feed 10 billion people. 
            Traditional farming methods cannot scale.
          </p>
          <div className="space-y-4">
            {[
              { stat: "58%", label: "of farms report critical labor shortages" },
              { stat: "$480B", label: "annual agricultural losses globally" },
              { stat: "70%", label: "of freshwater used in agriculture" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-heading text-3xl font-bold text-primary">{item.stat}</span>
                <span className="text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-destructive/10 rounded-2xl p-8 flex flex-col justify-center">
          <div className="text-6xl font-bold text-destructive mb-4">-4%</div>
          <div className="text-lg">Annual decline in agricultural labor force</div>
          <div className="text-muted-foreground mt-2">Source: FAO World Agriculture Report 2024</div>
        </div>
      </div>
    )
  },
  {
    id: "solution",
    title: "Our Solution",
    subtitle: "Autonomous Precision",
    content: (
      <div className="space-y-8">
        <h2 className="font-heading text-3xl font-bold text-center">TerraBot: AI-Powered Farm Automation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: "Autonomous Navigation", desc: "24/7 operation with RTK GPS precision" },
            { icon: Target, title: "Precision Application", desc: "60% reduction in chemical usage" },
            { icon: BarChart3, title: "AI Analytics", desc: "Real-time yield prediction & optimization" }
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 text-center">
          <p className="text-xl font-medium">One robot replaces 10 field workers while improving yields by 35%</p>
        </div>
      </div>
    )
  },
  {
    id: "market",
    title: "Market Opportunity",
    subtitle: "$250B TAM",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { value: "$250B", label: "Total Addressable Market", sub: "Global Agricultural Automation" },
            { value: "$45B", label: "Serviceable Addressable", sub: "North America & Europe" },
            { value: "$5B", label: "Serviceable Obtainable", sub: "Year 5 Target" }
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border">
              <div className="font-heading text-4xl font-bold gradient-text mb-2">{item.value}</div>
              <div className="font-medium">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-secondary/50 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Market Growth Drivers</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Labor costs increasing 8% annually",
              "Climate change forcing precision farming",
              "Government subsidies for sustainable ag",
              "Generational shift in farm ownership"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "technology",
    title: "Technology Stack",
    subtitle: "Deep Tech Moat",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Hardware</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• NVIDIA Jetson Orin NX edge computing</li>
              <li>• Velodyne VLP-16 LiDAR (360° mapping)</li>
              <li>• Intel RealSense D455 depth camera</li>
              <li>• RTK GPS (2cm positioning accuracy)</li>
              <li>• 12-16 hour battery + solar charging</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-accent" />
              <h3 className="font-semibold">Software</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• ROS2 Humble autonomous framework</li>
              <li>• Custom SLAM for outdoor environments</li>
              <li>• Proprietary crop health ML models</li>
              <li>• Real-time fleet management cloud</li>
              <li>• 15 pending patents in autonomous ag</li>
            </ul>
          </div>
        </div>
        <div className="bg-primary/10 rounded-xl p-4 text-center">
          <span className="font-medium">2+ years of R&D • 50,000+ hours field testing • 15 patents pending</span>
        </div>
      </div>
    )
  },
  {
    id: "business",
    title: "Business Model",
    subtitle: "Recurring Revenue",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/30">
            <h3 className="font-semibold text-lg mb-4">RaaS Model</h3>
            <div className="text-4xl font-bold mb-2">$50-80</div>
            <div className="text-muted-foreground mb-4">per acre per season</div>
            <ul className="space-y-2 text-sm">
              <li>✓ No upfront hardware costs</li>
              <li>✓ Includes maintenance & support</li>
              <li>✓ Software updates included</li>
              <li>✓ ROI guarantee or money back</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="font-semibold text-lg mb-4">Unit Economics</h3>
            <div className="space-y-3">
              {[
                { label: "Hardware Cost", value: "$45,000" },
                { label: "Gross Margin", value: "65%" },
                { label: "CAC", value: "$8,000" },
                { label: "LTV", value: "$120,000" },
                { label: "LTV:CAC Ratio", value: "15:1" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "traction",
    title: "Traction",
    subtitle: "Proven Results",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "12", label: "Pilot Customers" },
            { value: "8,500", label: "Acres Managed" },
            { value: "$1.2M", label: "ARR" },
            { value: "180%", label: "YoY Growth" }
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border">
              <div className="font-heading text-3xl font-bold gradient-text">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-secondary/50 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Customer Testimonial</h3>
          <blockquote className="text-lg italic">
            "TerraBot reduced our labor costs by 45% and increased our corn yield by 28% in the first season. 
            It's the best investment we've made in 20 years of farming."
          </blockquote>
          <div className="mt-4 text-muted-foreground">— John Miller, Miller Farms, Iowa (2,500 acres)</div>
        </div>
      </div>
    )
  },
  {
    id: "roadmap",
    title: "Roadmap",
    subtitle: "Path to Scale",
    content: (
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          {[
            { year: "2024", title: "Foundation", items: ["Complete pilot program", "10 robots deployed", "$1.2M ARR"] },
            { year: "2025", title: "Scale", items: ["50 robots in production", "Expand to 5 states", "$8M ARR target"] },
            { year: "2026", title: "Growth", items: ["200 robots deployed", "International expansion", "$25M ARR target"] },
            { year: "2027", title: "Market Leader", items: ["1,000+ robots", "Full crop coverage", "$100M ARR target"] }
          ].map((phase, i) => (
            <div key={i} className="relative pl-12 pb-6">
              <div className="absolute left-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-bold">{phase.year}</span>
                  <span className="text-muted-foreground">— {phase.title}</span>
                </div>
                <ul className="text-sm space-y-1">
                  {phase.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "ask",
    title: "The Ask",
    subtitle: "Series A",
    content: (
      <div className="space-y-8 text-center">
        <div>
          <div className="font-heading text-6xl md:text-8xl font-bold gradient-text mb-4">$15M</div>
          <div className="text-xl text-muted-foreground">Series A Funding Round</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { percent: "40%", label: "Manufacturing Scale", desc: "Expand production to 200 units/year" },
            { percent: "35%", label: "R&D", desc: "Next-gen platform & AI models" },
            { percent: "25%", label: "GTM", desc: "Sales team & market expansion" }
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border">
              <div className="text-3xl font-bold text-primary mb-1">{item.percent}</div>
              <div className="font-medium">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground">
          <h3 className="font-heading text-2xl font-bold mb-2">Join the Agricultural Revolution</h3>
          <p className="opacity-90">Let's feed the world sustainably, together.</p>
        </div>
      </div>
    )
  },
  {
    id: "team",
    title: "Team",
    subtitle: "World-Class Founders",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              name: "Dr. Sarah Chen", 
              role: "CEO & Co-Founder",
              bio: "Former Robotics Lead at John Deere. PhD in Agricultural Robotics from Stanford."
            },
            { 
              name: "Marcus Rodriguez", 
              role: "CTO & Co-Founder",
              bio: "Ex-Waymo perception engineer. 15+ patents in autonomous systems."
            },
            { 
              name: "Emily Thompson", 
              role: "COO & Co-Founder",
              bio: "Former McKinsey partner. MBA Harvard. Scaled 3 agtech startups."
            }
          ].map((person, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{person.name}</h3>
              <div className="text-primary text-sm mb-2">{person.role}</div>
              <p className="text-muted-foreground text-sm">{person.bio}</p>
            </div>
          ))}
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 text-center">
          <span className="text-muted-foreground">Backed by: Andreessen Horowitz • Khosla Ventures • AgFunder</span>
        </div>
      </div>
    )
  }
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">TerraBot</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </span>
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowRight className="w-4 h-4 rotate-180 mr-1" />
                Back to Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Slide Content */}
      <main className="pt-24 pb-24 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="text-sm text-primary font-medium">{slides[currentSlide].subtitle}</span>
              {currentSlide !== 0 && (
                <h1 className="font-heading text-4xl md:text-5xl font-bold">{slides[currentSlide].title}</h1>
              )}
            </div>
            
            <div className="min-h-[500px] flex items-center">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </Button>
          
          {/* Slide indicators */}
          <div className="hidden md:flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
          
          <Button 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default PitchDeck;
