import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Farm?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join our pilot program and be among the first to experience the future of autonomous farming. 
            Limited spots available for the 2025 growing season.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl"
            >
              <a href="#contact" aria-label="Schedule a TerraBot demo">
                <Calendar className="w-5 h-5" />
                Schedule Demo
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a href="mailto:hello@terrabot.farm" aria-label="Contact TerraBot sales">
                <Mail className="w-5 h-5" />
                Contact Sales
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground/70" />
              No upfront costs
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground/70" />
              Pay-per-acre pricing
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground/70" />
              ROI guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
