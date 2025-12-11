import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Head of Robotics at John Deere. PhD in Agricultural Engineering from MIT.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher. 15+ years in computer vision and autonomous systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "Dr. Emily Thompson",
    role: "Chief Agronomist",
    bio: "Leading expert in precision agriculture. Former USDA research scientist.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  },
  {
    name: "James Park",
    role: "Head of Hardware",
    bio: "Previously led robotics development at Boston Dynamics. MS in Mechanical Engineering.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet the <span className="text-primary">Innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A world-class team combining expertise in robotics, AI, and agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
