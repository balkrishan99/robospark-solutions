import { Leaf, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">TerraBot</span>
            </div>
            <p className="text-background/70 text-sm mb-6">
              Revolutionizing agriculture with autonomous robotic systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>hello@terrabot.ag</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <div>© 2025 TerraBot Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
