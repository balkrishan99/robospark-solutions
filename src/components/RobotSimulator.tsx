import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Zap, Eye, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

const RobotSimulator = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const robotRef = useRef<THREE.Group | null>(null);
  const animationRef = useRef<number | null>(null);
  
  const [isRunning, setIsRunning] = useState(false);
  const [sensorData, setSensorData] = useState({
    lidar: [] as number[],
    soilMoisture: 45,
    cropHealth: 82,
    obstacleDetected: false,
    position: { x: 0, y: 0, heading: 0 }
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a2f1a);
    scene.fog = new THREE.Fog(0x1a2f1a, 20, 50);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(60, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 100);
    camera.position.set(10, 15, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(10, 20, 10);
    sunLight.castShadow = true;
    scene.add(sunLight);

    // Ground (field)
    const groundGeometry = new THREE.PlaneGeometry(30, 30);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d4a2d,
      roughness: 0.9
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Crop rows
    const cropRowGeometry = new THREE.BoxGeometry(0.3, 0.5, 25);
    const cropMaterial = new THREE.MeshStandardMaterial({ color: 0x3d6b3d });
    
    for (let i = -12; i <= 12; i += 2) {
      const cropRow = new THREE.Mesh(cropRowGeometry, cropMaterial);
      cropRow.position.set(i, 0.25, 0);
      cropRow.castShadow = true;
      scene.add(cropRow);
    }

    // Robot body
    const robot = new THREE.Group();
    
    // Main body
    const bodyGeometry = new THREE.BoxGeometry(2, 0.8, 3);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x22c55e });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.8;
    body.castShadow = true;
    robot.add(body);

    // Sensor dome
    const domeGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const domeMaterial = new THREE.MeshStandardMaterial({ color: 0x60a5fa });
    const dome = new THREE.Mesh(domeGeometry, domeMaterial);
    dome.position.set(0, 1.4, 0);
    robot.add(dome);

    // LiDAR spinning element
    const lidarGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 16);
    const lidarMaterial = new THREE.MeshStandardMaterial({ color: 0xfbbf24 });
    const lidar = new THREE.Mesh(lidarGeometry, lidarMaterial);
    lidar.position.set(0, 1.7, 0);
    lidar.name = "lidar";
    robot.add(lidar);

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x1f2937 });
    const wheelPositions = [
      [-1, 0.4, 1],
      [1, 0.4, 1],
      [-1, 0.4, -1],
      [1, 0.4, -1]
    ];
    
    wheelPositions.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos[0], pos[1], pos[2]);
      wheel.castShadow = true;
      robot.add(wheel);
    });

    robot.position.set(0, 0, 0);
    robotRef.current = robot;
    scene.add(robot);

    // Animation variables
    let time = 0;
    let robotAngle = 0;
    let robotRadius = 5;

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (isRunning && robotRef.current) {
        time += 0.02;
        
        // Robot moves in a pattern
        robotAngle += 0.01;
        const newX = Math.sin(robotAngle) * robotRadius;
        const newZ = Math.cos(robotAngle) * robotRadius;
        
        robotRef.current.position.x = newX;
        robotRef.current.position.z = newZ;
        robotRef.current.rotation.y = robotAngle + Math.PI / 2;

        // Spin LiDAR
        const lidarMesh = robotRef.current.getObjectByName("lidar");
        if (lidarMesh) {
          lidarMesh.rotation.y += 0.2;
        }

        // Update sensor data
        setSensorData(prev => ({
          lidar: Array.from({ length: 8 }, () => 2 + Math.random() * 8),
          soilMoisture: Math.round(40 + Math.sin(time) * 10),
          cropHealth: Math.round(75 + Math.sin(time * 0.5) * 10),
          obstacleDetected: Math.random() > 0.95,
          position: {
            x: Math.round(newX * 100) / 100,
            y: Math.round(newZ * 100) / 100,
            heading: Math.round((robotAngle * 180 / Math.PI) % 360)
          }
        }));
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
    };
  }, [isRunning]);

  const handleReset = () => {
    if (robotRef.current) {
      robotRef.current.position.set(0, 0, 0);
      robotRef.current.rotation.y = 0;
    }
    setIsRunning(false);
  };

  return (
    <section id="simulator" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Simulator</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See TerraBot in <span className="gradient-text">Action</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Watch our autonomous robot navigate a virtual field with real-time sensor visualization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* 3D Viewport */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
              <div className="bg-foreground/5 px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="font-medium">3D Field View</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={isRunning ? "secondary" : "default"}
                    onClick={() => setIsRunning(!isRunning)}
                  >
                    {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isRunning ? "Pause" : "Start"}
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div 
                ref={containerRef} 
                className="w-full h-[400px]"
              />
            </div>
          </div>

          {/* Sensor Panel */}
          <div className="space-y-4">
            {/* Position */}
            <div className="bg-card rounded-xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Radio className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Position Data</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-secondary/50 rounded-lg p-2">
                  <div className="text-xs text-muted-foreground">X</div>
                  <div className="font-mono font-medium">{sensorData.position.x}</div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-2">
                  <div className="text-xs text-muted-foreground">Y</div>
                  <div className="font-mono font-medium">{sensorData.position.y}</div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-2">
                  <div className="text-xs text-muted-foreground">HDG</div>
                  <div className="font-mono font-medium">{sensorData.position.heading}°</div>
                </div>
              </div>
            </div>

            {/* LiDAR Visualization */}
            <div className="bg-card rounded-xl p-4 shadow-card border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-4 h-4 text-accent" />
                <span className="font-medium text-sm">LiDAR Scan</span>
              </div>
              <div className="relative h-32 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  {sensorData.lidar.map((distance, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const normalizedDist = (distance / 10) * 40;
                    const x = Math.cos(angle) * normalizedDist;
                    const y = Math.sin(angle) * normalizedDist;
                    return (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-accent rounded-full transition-all duration-300"
                        style={{
                          left: `calc(50% + ${x}px - 4px)`,
                          top: `calc(50% + ${y}px - 4px)`,
                        }}
                      />
                    );
                  })}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sensor Readings */}
            <div className="bg-card rounded-xl p-4 shadow-card border border-border">
              <span className="font-medium text-sm">Live Sensors</span>
              <div className="mt-3 space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Soil Moisture</span>
                    <span>{sensorData.soilMoisture}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${sensorData.soilMoisture}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Crop Health</span>
                    <span>{sensorData.cropHealth}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-300"
                      style={{ width: `${sensorData.cropHealth}%` }}
                    />
                  </div>
                </div>
                <div className={`flex items-center gap-2 p-2 rounded-lg ${sensorData.obstacleDetected ? "bg-destructive/20" : "bg-green-500/20"}`}>
                  <div className={`w-2 h-2 rounded-full ${sensorData.obstacleDetected ? "bg-destructive" : "bg-green-500"}`} />
                  <span className="text-sm">{sensorData.obstacleDetected ? "Obstacle Detected!" : "Path Clear"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RobotSimulator;
