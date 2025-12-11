import { useEffect, useState } from "react";
import { 
  Thermometer, Droplets, Wind, Sun, Compass, 
  Activity, Cpu, Battery, Wifi, MapPin 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface SensorData {
  name: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  icon: React.ReactNode;
  color: string;
  status: "normal" | "warning" | "critical";
}

const SensorSimulation = () => {
  const [sensors, setSensors] = useState<SensorData[]>([
    { name: "Soil Temperature", value: 22.4, unit: "°C", min: 10, max: 40, icon: <Thermometer className="w-5 h-5" />, color: "text-orange-500", status: "normal" },
    { name: "Soil Moisture", value: 45, unit: "%", min: 0, max: 100, icon: <Droplets className="w-5 h-5" />, color: "text-blue-500", status: "normal" },
    { name: "Wind Speed", value: 12.3, unit: "km/h", min: 0, max: 50, icon: <Wind className="w-5 h-5" />, color: "text-cyan-500", status: "normal" },
    { name: "Solar Radiation", value: 680, unit: "W/m²", min: 0, max: 1000, icon: <Sun className="w-5 h-5" />, color: "text-yellow-500", status: "normal" },
    { name: "Heading", value: 127, unit: "°", min: 0, max: 360, icon: <Compass className="w-5 h-5" />, color: "text-purple-500", status: "normal" },
    { name: "Crop Health (NDVI)", value: 0.72, unit: "", min: 0, max: 1, icon: <Activity className="w-5 h-5" />, color: "text-green-500", status: "normal" },
  ]);

  const [systemStats, setSystemStats] = useState({
    cpu: 34,
    battery: 87,
    signal: 92,
    gpsAccuracy: 2.1,
    speed: 3.2,
    coverage: 12.4,
  });

  const [lidarPoints, setLidarPoints] = useState<{ angle: number; distance: number }[]>([]);
  const [timestamp, setTimestamp] = useState(new Date());

  // Simulate sensor data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prev => prev.map(sensor => {
        const variation = (Math.random() - 0.5) * (sensor.max - sensor.min) * 0.02;
        let newValue = sensor.value + variation;
        newValue = Math.max(sensor.min, Math.min(sensor.max, newValue));
        
        let status: "normal" | "warning" | "critical" = "normal";
        const range = sensor.max - sensor.min;
        if (newValue < sensor.min + range * 0.1 || newValue > sensor.max - range * 0.1) {
          status = "critical";
        } else if (newValue < sensor.min + range * 0.2 || newValue > sensor.max - range * 0.2) {
          status = "warning";
        }
        
        return { ...sensor, value: newValue, status };
      }));

      setSystemStats(prev => ({
        cpu: Math.max(20, Math.min(80, prev.cpu + (Math.random() - 0.5) * 5)),
        battery: Math.max(0, prev.battery - Math.random() * 0.05),
        signal: Math.max(60, Math.min(100, prev.signal + (Math.random() - 0.5) * 3)),
        gpsAccuracy: Math.max(0.5, Math.min(5, prev.gpsAccuracy + (Math.random() - 0.5) * 0.2)),
        speed: Math.max(0, Math.min(5, prev.speed + (Math.random() - 0.5) * 0.3)),
        coverage: prev.coverage + Math.random() * 0.02,
      }));

      // Generate LiDAR points
      const points = [];
      for (let angle = 0; angle < 360; angle += 5) {
        const baseDistance = 3 + Math.sin(angle * Math.PI / 180 * 3) * 1.5;
        const noise = Math.random() * 0.3;
        points.push({ angle, distance: baseDistance + noise });
      }
      setLidarPoints(points);

      setTimestamp(new Date());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number, unit: string) => {
    if (unit === "°") return `${Math.round(value)}${unit}`;
    if (unit === "") return value.toFixed(2);
    return `${value.toFixed(1)}${unit}`;
  };

  return (
    <section id="sensor-sim" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Real-Time Data
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Sensor <span className="text-primary">Simulation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live visualization of TerraBot's onboard sensor readings and system telemetry
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Environmental Sensors */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            {sensors.map((sensor, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`${sensor.color}`}>{sensor.icon}</div>
                    <span className="font-medium">{sensor.name}</span>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    sensor.status === "normal" ? "bg-green-500" :
                    sensor.status === "warning" ? "bg-yellow-500" : "bg-red-500"
                  } animate-pulse`} />
                </div>
                <div className="text-3xl font-bold mb-2">
                  {formatValue(sensor.value, sensor.unit)}
                </div>
                <Progress 
                  value={((sensor.value - sensor.min) / (sensor.max - sensor.min)) * 100} 
                  className="h-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{sensor.min}{sensor.unit}</span>
                  <span>{sensor.max}{sensor.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* LiDAR Visualization & System Stats */}
          <div className="space-y-6">
            {/* LiDAR */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                LiDAR Point Cloud
              </h3>
              <div className="relative w-full aspect-square bg-background rounded-xl overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Grid circles */}
                  {[1, 2, 3, 4].map(r => (
                    <circle
                      key={r}
                      cx="100"
                      cy="100"
                      r={r * 20}
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Grid lines */}
                  {[0, 45, 90, 135].map(angle => (
                    <line
                      key={angle}
                      x1="100"
                      y1="100"
                      x2={100 + Math.cos(angle * Math.PI / 180) * 80}
                      y2={100 + Math.sin(angle * Math.PI / 180) * 80}
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* LiDAR points */}
                  {lidarPoints.map((point, i) => {
                    const x = 100 + Math.cos(point.angle * Math.PI / 180) * point.distance * 15;
                    const y = 100 + Math.sin(point.angle * Math.PI / 180) * point.distance * 15;
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="1.5"
                        fill="hsl(var(--primary))"
                        opacity="0.8"
                      />
                    );
                  })}
                  {/* Robot position */}
                  <circle cx="100" cy="100" r="4" fill="hsl(var(--primary))" />
                  <polygon
                    points="100,92 104,100 100,98 96,100"
                    fill="hsl(var(--primary))"
                  />
                </svg>
              </div>
            </div>

            {/* System Stats */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold mb-4">System Telemetry</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Cpu className="w-4 h-4 text-blue-500" />
                    <span>CPU Load</span>
                  </div>
                  <span className="font-mono">{systemStats.cpu.toFixed(0)}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Battery className="w-4 h-4 text-green-500" />
                    <span>Battery</span>
                  </div>
                  <span className="font-mono">{systemStats.battery.toFixed(0)}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Wifi className="w-4 h-4 text-purple-500" />
                    <span>Signal</span>
                  </div>
                  <span className="font-mono">{systemStats.signal.toFixed(0)}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>GPS Accuracy</span>
                  </div>
                  <span className="font-mono">±{systemStats.gpsAccuracy.toFixed(1)}cm</span>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{systemStats.speed.toFixed(1)}</div>
                      <div className="text-xs text-muted-foreground">km/h Speed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{systemStats.coverage.toFixed(1)}</div>
                      <div className="text-xs text-muted-foreground">Acres Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timestamp */}
            <div className="text-center text-xs text-muted-foreground font-mono">
              Last update: {timestamp.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SensorSimulation;
