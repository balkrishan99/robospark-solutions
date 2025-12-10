import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-xl">TerraBot</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">Solution</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">Impact</a>
        </div>
        
        <div className="flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Contact
          </a>
          <a 
            href="#demo" 
            className="h-10 px-5 rounded-lg gradient-hero text-primary-foreground font-medium flex items-center justify-center hover:scale-105 transition-transform"
          >
            Get Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
