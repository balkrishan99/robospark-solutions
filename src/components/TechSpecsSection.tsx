import { Cpu, Camera, Wifi, Battery, Gauge, Radio, Compass, Thermometer } from "lucide-react";

const hardwareSpecs = [
  {
    category: "Processing",
    icon: Cpu,
    items: [
      { name: "Main Controller", spec: "NVIDIA Jetson Orin NX 16GB" },
      { name: "Edge TPU", spec: "Google Coral M.2 Accelerator" },
      { name: "Real-time Controller", spec: "STM32H7 ARM Cortex-M7" }
    ]
  },
  {
    category: "Vision & Sensing",
    icon: Camera,
    items: [
      { name: "RGB-D Camera", spec: "Intel RealSense D455" },
      { name: "Multispectral", spec: "MicaSense RedEdge-P" },
      { name: "LiDAR", spec: "Velodyne VLP-16 Puck" }
    ]
  },
  {
    category: "Environmental",
    icon: Thermometer,
    items: [
      { name: "Soil Sensors", spec: "NPK, pH, Moisture Array" },
      { name: "Weather Station", spec: "Davis Vantage Pro2" },
      { name: "Gas Sensors", spec: "CO2, NH3, Methane" }
    ]
  },
  {
    category: "Navigation",
    icon: Compass,
    items: [
      { name: "GNSS", spec: "RTK GPS (2cm accuracy)" },
      { name: "IMU", spec: "9-DOF Fusion Sensor" },
      { name: "Wheel Encoders", spec: "12-bit Magnetic" }
    ]
  },
  {
    category: "Communication",
    icon: Radio,
    items: [
      { name: "Primary", spec: "5G NR Sub-6GHz" },
      { name: "Backup", spec: "LoRaWAN 915MHz" },
      { name: "Local", spec: "WiFi 6E + BLE 5.3" }
    ]
  },
  {
    category: "Power",
    icon: Battery,
    items: [
      { name: "Battery Pack", spec: "51.8V 40Ah LiFePO4" },
      { name: "Solar Panels", spec: "400W Flexible Array" },
      { name: "Runtime", spec: "12-16 hours operation" }
    ]
  }
];

const TechSpecsSection = () => {
  return (
    <section id="specs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Specifications</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Precision</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Enterprise-grade hardware designed to withstand harsh agricultural conditions 
            while delivering centimeter-level precision.
          </p>
        </div>
        
        {/* Hardware Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {hardwareSpecs.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-medium text-foreground">{item.spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Software Architecture Diagram */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
          <h3 className="font-heading font-bold text-2xl mb-8 text-center">Software Architecture</h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Architecture Layers */}
            <div className="space-y-4">
              {/* Cloud Layer */}
              <div className="bg-accent/10 rounded-xl p-4 border border-accent/30">
                <div className="text-center mb-3">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">CLOUD LAYER</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Fleet Management", "Data Analytics", "ML Training", "API Gateway"].map((item, i) => (
                    <div key={i} className="bg-background/50 rounded-lg p-3 text-center text-sm font-medium">{item}</div>
                  ))}
                </div>
              </div>
              
              {/* Arrows */}
              <div className="flex justify-center">
                <Wifi className="w-6 h-6 text-muted-foreground animate-pulse" />
              </div>
              
              {/* Edge Layer */}
              <div className="bg-primary/10 rounded-xl p-4 border border-primary/30">
                <div className="text-center mb-3">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">EDGE PROCESSING</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["ROS2 Humble", "Computer Vision", "Path Planning", "SLAM"].map((item, i) => (
                    <div key={i} className="bg-background/50 rounded-lg p-3 text-center text-sm font-medium">{item}</div>
                  ))}
                </div>
              </div>
              
              {/* Arrows */}
              <div className="flex justify-center">
                <Gauge className="w-6 h-6 text-muted-foreground" />
              </div>
              
              {/* Hardware Layer */}
              <div className="bg-secondary rounded-xl p-4 border border-border">
                <div className="text-center mb-3">
                  <span className="px-3 py-1 bg-foreground text-background rounded-full text-xs font-medium">HARDWARE ABSTRACTION</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {["Sensors", "Actuators", "Power Mgmt", "Safety", "Comms"].map((item, i) => (
                    <div key={i} className="bg-background/50 rounded-lg p-3 text-center text-sm font-medium">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
