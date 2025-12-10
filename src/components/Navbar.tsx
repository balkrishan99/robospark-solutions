import { Leaf, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-xl">TerraBot</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="text-muted-foreground hover:text-foreground transition-colors">Solution</a>
          <a href="#specs" className="text-muted-foreground hover:text-foreground transition-colors">Tech Specs</a>
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
          <a href="#simulator" className="text-muted-foreground hover:text-foreground transition-colors">Simulator</a>
          <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">Impact</a>
        </div>
        
        <div className="flex items-center gap-3">
          <Link 
            to="/pitch-deck" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:flex items-center gap-1"
          >
            <Presentation className="w-4 h-4" />
            Pitch Deck
          </Link>
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
