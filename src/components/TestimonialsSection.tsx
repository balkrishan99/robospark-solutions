import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  farm: string;
  location: string;
  image: string;
  stats: { label: string; value: string }[];
}

const testimonials: Testimonial[] = [
  {
    quote: "TerraBot has completely changed how we manage our 2,000-acre operation. The precision weeding alone has cut our herbicide costs by 65%. I was skeptical at first, but the ROI in the first season convinced me.",
    author: "Robert Miller",
    role: "Owner",
    farm: "Miller Family Farms",
    location: "Iowa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    stats: [
      { label: "Yield Increase", value: "+28%" },
      { label: "Water Saved", value: "45%" },
    ],
  },
  {
    quote: "The real-time crop health monitoring caught a nitrogen deficiency in our corn that would have cost us $50K in losses. TerraBot paid for itself in that single incident. Now I can't imagine farming without it.",
    author: "Sarah Johnson",
    role: "Operations Manager",
    farm: "Johnson AgriTech",
    location: "Nebraska",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    stats: [
      { label: "Cost Savings", value: "$120K/yr" },
      { label: "Labor Reduced", value: "60%" },
    ],
  },
  {
    quote: "We're a third-generation farm, and TerraBot represents the biggest leap forward we've seen. The AI yield predictions have been accurate within 3%, helping us make better decisions on storage and contracts.",
    author: "Michael Chen",
    role: "Co-Owner",
    farm: "Chen Brothers Produce",
    location: "California",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    stats: [
      { label: "Prediction Accuracy", value: "97%" },
      { label: "Pesticide Cut", value: "70%" },
    ],
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our <span className="text-primary">Farmers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from pilot partners who are already transforming their operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/50 rounded-xl">
                {testimonial.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary">
                    {testimonial.farm} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by leading agricultural operations</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {["🌾 Cargill Partner", "🚜 John Deere Compatible", "📊 Farm Bureau Certified", "🌱 USDA Approved"].map(
              (badge, i) => (
                <div key={i} className="text-lg font-medium">
                  {badge}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
