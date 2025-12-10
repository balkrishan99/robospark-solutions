import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Activity, MapPin, Zap, Droplets, ThermometerSun, Wind, Battery, Wifi } from "lucide-react";

const yieldData = [
  { month: "Jan", predicted: 0, actual: 0 },
  { month: "Feb", predicted: 0, actual: 0 },
  { month: "Mar", predicted: 12, actual: 10 },
  { month: "Apr", predicted: 28, actual: 25 },
  { month: "May", predicted: 45, actual: 42 },
  { month: "Jun", predicted: 68, actual: 65 },
  { month: "Jul", predicted: 85, actual: 82 },
  { month: "Aug", predicted: 95, actual: null },
  { month: "Sep", predicted: 100, actual: null },
];

const cropHealthData = [
  { name: "Excellent", value: 45, color: "hsl(142, 76%, 36%)" },
  { name: "Good", value: 30, color: "hsl(142, 76%, 50%)" },
  { name: "Fair", value: 18, color: "hsl(45, 93%, 47%)" },
  { name: "Poor", value: 7, color: "hsl(0, 84%, 60%)" },
];

const DashboardSection = () => {
  const [robotStatus, setRobotStatus] = useState({
    battery: 78,
    speed: 2.4,
    area: 12.5,
    uptime: "6h 23m"
  });
  
  const [sensorData, setSensorData] = useState({
    soilMoisture: 42,
    temperature: 24,
    humidity: 65,
    windSpeed: 8
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRobotStatus(prev => ({
        ...prev,
        battery: Math.max(10, prev.battery - Math.random() * 0.5),
        area: prev.area + Math.random() * 0.1
      }));
      setSensorData(prev => ({
        soilMoisture: Math.round(prev.soilMoisture + (Math.random() - 0.5) * 2),
        temperature: +(prev.temperature + (Math.random() - 0.5) * 0.5).toFixed(1),
        humidity: Math.round(prev.humidity + (Math.random() - 0.5) * 3),
        windSpeed: Math.round(prev.windSpeed + (Math.random() - 0.5) * 2)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Activity className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Live Dashboard</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Real-Time <span className="gradient-text">Farm Intelligence</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Monitor your entire operation from a single dashboard with AI-powered insights.
          </p>
        </div>
        
        {/* Dashboard Grid */}
        <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-foreground/5 px-6 py-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-medium">TerraBot-001 Active</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Wifi className="w-4 h-4" /> Connected</span>
              <span className="flex items-center gap-1"><Battery className="w-4 h-4" /> {robotStatus.battery.toFixed(0)}%</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Field Map */}
              <div className="lg:col-span-2 bg-secondary/50 rounded-xl p-4 min-h-[300px] relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-background/90 rounded-lg px-3 py-2 text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Field View - Sector A
                </div>
                
                {/* Simulated Field Grid */}
                <div className="absolute inset-4 top-14 grid grid-cols-8 grid-rows-6 gap-1">
                  {Array.from({ length: 48 }).map((_, i) => {
                    const health = Math.random();
                    const color = health > 0.7 ? "bg-green-500" : health > 0.4 ? "bg-yellow-500" : "bg-red-500";
                    return (
                      <div 
                        key={i} 
                        className={`${color} rounded opacity-60 hover:opacity-100 transition-opacity cursor-pointer`}
                        title={`Zone ${i + 1}: ${(health * 100).toFixed(0)}% health`}
                      />
                    );
                  })}
                </div>
                
                {/* Robot Position */}
                <div 
                  className="absolute w-6 h-6 bg-primary rounded-full border-2 border-background shadow-lg animate-pulse"
                  style={{ left: "45%", top: "55%" }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded whitespace-nowrap">
                    TerraBot
                  </div>
                </div>
              </div>
              
              {/* Stats Panel */}
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Robot Status</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Speed</span>
                      <span className="font-medium">{robotStatus.speed} km/h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Area Covered</span>
                      <span className="font-medium">{robotStatus.area.toFixed(1)} ha</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Uptime</span>
                      <span className="font-medium">{robotStatus.uptime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Sensor Readings</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Moisture</div>
                        <div className="font-medium">{sensorData.soilMoisture}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThermometerSun className="w-4 h-4 text-orange-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Temp</div>
                        <div className="font-medium">{sensorData.temperature}°C</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Humidity</div>
                        <div className="font-medium">{sensorData.humidity}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-cyan-500" />
                      <div>
                        <div className="text-xs text-muted-foreground">Wind</div>
                        <div className="font-medium">{sensorData.windSpeed} km/h</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              {/* Yield Prediction Chart */}
              <div className="bg-secondary/50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Yield Prediction vs Actual</h4>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={yieldData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }} 
                      />
                      <Area type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
                      <Area type="monotone" dataKey="actual" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.3} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Crop Health Distribution */}
              <div className="bg-secondary/50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-4">Crop Health Distribution</h4>
                <div className="flex items-center gap-6">
                  <div className="h-[200px] w-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={cropHealthData}
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {cropHealthData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {cropHealthData.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm font-medium ml-auto">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
