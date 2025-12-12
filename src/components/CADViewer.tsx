import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCcw, ZoomIn, ZoomOut, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const partColors = {
  chassis: 0x2d3748,
  wheels: 0x1a202c,
  sensorArray: 0x48bb78,
  camera: 0x4299e1,
  arm: 0xed8936,
  solar: 0x9f7aea,
};

const CADViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const robotRef = useRef<THREE.Group | null>(null);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [exploded, setExploded] = useState(false);

  const partDescriptions: Record<string, { name: string; specs: string }> = {
    chassis: { name: "Main Chassis", specs: "6061 Aluminum, 45kg capacity, IP67 rated" },
    wheels: { name: "All-Terrain Wheels", specs: "4x Independent drive, 30cm diameter, rubber compound" },
    sensorArray: { name: "Sensor Array", specs: "LiDAR + Multispectral + Soil probe mount" },
    camera: { name: "Vision System", specs: "4K stereo cameras, 120° FOV, IR capable" },
    arm: { name: "Manipulator Arm", specs: "6-DOF, 5kg payload, precision gripper" },
    solar: { name: "Solar Panel", specs: "200W monocrystalline, self-cleaning coating" },
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0x48bb78, 0.3);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    // Grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x334155, 0x1e293b);
    scene.add(gridHelper);

    // Build robot
    const robot = new THREE.Group();
    robotRef.current = robot;

    // Chassis
    const chassisGeometry = new THREE.BoxGeometry(3, 0.6, 2);
    const chassisMaterial = new THREE.MeshPhongMaterial({ color: partColors.chassis, flatShading: true });
    const chassis = new THREE.Mesh(chassisGeometry, chassisMaterial);
    chassis.position.y = 0.8;
    chassis.userData = { part: "chassis" };
    chassis.castShadow = true;
    robot.add(chassis);

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: partColors.wheels });
    const wheelPositions = [
      [-1.2, 0.4, 1.2], [1.2, 0.4, 1.2],
      [-1.2, 0.4, -1.2], [1.2, 0.4, -1.2]
    ];
    wheelPositions.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos[0], pos[1], pos[2]);
      wheel.userData = { part: "wheels" };
      wheel.castShadow = true;
      robot.add(wheel);
    });

    // Sensor Array (top)
    const sensorBaseGeometry = new THREE.CylinderGeometry(0.6, 0.8, 0.3, 8);
    const sensorMaterial = new THREE.MeshPhongMaterial({ color: partColors.sensorArray });
    const sensorBase = new THREE.Mesh(sensorBaseGeometry, sensorMaterial);
    sensorBase.position.set(0, 1.4, 0);
    sensorBase.userData = { part: "sensorArray" };
    robot.add(sensorBase);

    // LiDAR dome
    const lidarGeometry = new THREE.SphereGeometry(0.3, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const lidarMaterial = new THREE.MeshPhongMaterial({ color: 0x38a169, transparent: true, opacity: 0.8 });
    const lidar = new THREE.Mesh(lidarGeometry, lidarMaterial);
    lidar.position.set(0, 1.55, 0);
    lidar.userData = { part: "sensorArray" };
    robot.add(lidar);

    // Camera system
    const cameraHousingGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.3);
    const cameraMaterial = new THREE.MeshPhongMaterial({ color: partColors.camera });
    const cameraHousing = new THREE.Mesh(cameraHousingGeometry, cameraMaterial);
    cameraHousing.position.set(1.2, 1.3, 0);
    cameraHousing.userData = { part: "camera" };
    robot.add(cameraHousing);

    // Camera lenses
    const lensGeometry = new THREE.CylinderGeometry(0.08, 0.1, 0.15, 12);
    const lensMaterial = new THREE.MeshPhongMaterial({ color: 0x1a365d });
    [-0.15, 0.15].forEach(offset => {
      const lens = new THREE.Mesh(lensGeometry, lensMaterial);
      lens.rotation.z = Math.PI / 2;
      lens.position.set(1.55, 1.3, offset);
      lens.userData = { part: "camera" };
      robot.add(lens);
    });

    // Robotic arm
    const armBaseMaterial = new THREE.MeshPhongMaterial({ color: partColors.arm });
    
    const armBase = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 0.3, 12), armBaseMaterial);
    armBase.position.set(-0.8, 1.25, 0);
    armBase.userData = { part: "arm" };
    robot.add(armBase);

    const armSegment1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.8, 0.15), armBaseMaterial);
    armSegment1.position.set(-0.8, 1.8, 0);
    armSegment1.userData = { part: "arm" };
    robot.add(armSegment1);

    const armJoint = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), armBaseMaterial);
    armJoint.position.set(-0.8, 2.2, 0);
    armJoint.userData = { part: "arm" };
    robot.add(armJoint);

    const armSegment2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), armBaseMaterial);
    armSegment2.position.set(-0.5, 2.4, 0);
    armSegment2.rotation.z = Math.PI / 4;
    armSegment2.userData = { part: "arm" };
    robot.add(armSegment2);

    // Solar panel
    const solarGeometry = new THREE.BoxGeometry(1.5, 0.05, 1);
    const solarMaterial = new THREE.MeshPhongMaterial({ color: partColors.solar });
    const solarPanel = new THREE.Mesh(solarGeometry, solarMaterial);
    solarPanel.position.set(0, 1.15, -0.3);
    solarPanel.rotation.x = -0.2;
    solarPanel.userData = { part: "solar" };
    robot.add(solarPanel);

    // Solar cells pattern
    const cellGeometry = new THREE.PlaneGeometry(0.2, 0.2);
    const cellMaterial = new THREE.MeshPhongMaterial({ color: 0x2d3748, side: THREE.DoubleSide });
    for (let x = -0.5; x <= 0.5; x += 0.25) {
      for (let z = -0.3; z <= 0.3; z += 0.25) {
        const cell = new THREE.Mesh(cellGeometry, cellMaterial);
        cell.position.set(x, 1.18, z - 0.3);
        cell.rotation.x = -Math.PI / 2 - 0.2;
        cell.userData = { part: "solar" };
        robot.add(cell);
      }
    }

    scene.add(robot);

    // Raycaster for part selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(robot.children);

      if (intersects.length > 0) {
        const part = intersects[0].object.userData.part;
        setSelectedPart(part);
      } else {
        setSelectedPart(null);
      }
    };

    renderer.domElement.addEventListener("click", onMouseClick);

    // Mouse controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = () => { isDragging = true; };
    const onMouseUp = () => { isDragging = false; };
    const onMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y
        };
        robot.rotation.y += deltaMove.x * 0.01;
        robot.rotation.x += deltaMove.y * 0.005;
        robot.rotation.x = Math.max(-0.5, Math.min(0.5, robot.rotation.x));
      }
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("wheel", (e) => {
      camera.position.multiplyScalar(e.deltaY > 0 ? 1.1 : 0.9);
      camera.position.clampLength(5, 20);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Exploded view effect
  useEffect(() => {
    if (!robotRef.current) return;
    
    const offsets: Record<string, [number, number, number]> = {
      chassis: [0, 0, 0],
      wheels: [0, -0.5, 0],
      sensorArray: [0, 1.5, 0],
      camera: [1.5, 0.5, 0],
      arm: [-1.5, 1, 0],
      solar: [0, 2, -1],
    };

    robotRef.current.children.forEach((child) => {
      const part = child.userData.part;
      if (part && offsets[part]) {
        const offset = exploded ? offsets[part] : [0, 0, 0];
        child.position.x += (child.position.x + offset[0] * 0.1 - child.position.x) * 0.1;
      }
    });
  }, [exploded]);

  const resetView = () => {
    if (robotRef.current) {
      robotRef.current.rotation.set(0, 0, 0);
    }
    if (cameraRef.current) {
      cameraRef.current.position.set(8, 6, 8);
    }
    setSelectedPart(null);
  };

  return (
    <section id="cad-viewer" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Engineering
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Interactive <span className="text-primary">CAD Viewer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore TerraBot's mechanical design. Click and drag to rotate, scroll to zoom.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <div className="relative bg-card rounded-2xl border border-border overflow-hidden">
              <div ref={containerRef} className="w-full h-[500px]" />
              
              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon" onClick={resetView}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button 
                  variant={exploded ? "default" : "secondary"} 
                  size="icon" 
                  onClick={() => setExploded(!exploded)}
                >
                  <Layers className="w-4 h-4" />
                </Button>
              </div>

              {/* Selected part info */}
              {selectedPart && (
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-primary/50">
                  <h4 className="font-bold text-primary">{partDescriptions[selectedPart]?.name}</h4>
                  <p className="text-sm text-muted-foreground">{partDescriptions[selectedPart]?.specs}</p>
                </div>
              )}
            </div>
          </div>

          {/* Parts list */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Component Breakdown</h3>
            {Object.entries(partDescriptions).map(([key, part]) => (
              <div
                key={key}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedPart === key
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-primary/50"
                }`}
                onClick={() => setSelectedPart(selectedPart === key ? null : key)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: `#${partColors[key as keyof typeof partColors].toString(16).padStart(6, "0")}` }}
                  />
                  <div>
                    <h4 className="font-semibold">{part.name}</h4>
                    <p className="text-xs text-muted-foreground">{part.specs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CADViewer;
