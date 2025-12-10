"use client";

import { useRef, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Html } from "@react-three/drei";
import * as THREE from "three";

// Vertex shader for globe
const globeVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader for globe with grid pattern
const globeFragmentShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    // Create grid lines
    float latLines = sin(vUv.y * 20.0 * 3.14159);
    float lonLines = sin(vUv.x * 40.0 * 3.14159);
    
    float grid = smoothstep(0.95, 1.0, abs(latLines)) + smoothstep(0.95, 1.0, abs(lonLines));
    grid = clamp(grid, 0.0, 1.0);
    
    // Base color with gradient
    vec3 baseColor = mix(vec3(0.02, 0.08, 0.15), vec3(0.05, 0.15, 0.25), vUv.y);
    
    // Grid color
    vec3 gridColor = vec3(0.13, 0.83, 0.93);
    
    // Fresnel effect for edge glow
    float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    vec3 fresnelColor = vec3(0.13, 0.83, 0.93) * fresnel * 0.5;
    
    // Combine colors
    vec3 finalColor = mix(baseColor, gridColor, grid * 0.3) + fresnelColor;
    
    // Add some variation based on position
    float variation = sin(vPosition.x * 10.0 + time) * sin(vPosition.y * 10.0 + time) * 0.1;
    finalColor += vec3(variation * 0.1, variation * 0.15, variation * 0.2);
    
    gl_FragColor = vec4(finalColor, 0.9);
  }
`;

// Atmosphere shader
const atmosphereVertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    vec3 color = mix(vec3(0.13, 0.83, 0.93), vec3(0.66, 0.33, 0.97), intensity);
    gl_FragColor = vec4(color, intensity * 0.6);
  }
`;

// Globe component
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (globeRef.current) {
      globeRef.current.rotation.y = time * 0.1;
      // Subtle mouse interaction
      globeRef.current.rotation.x = mouse.y * 0.1 - 0.1;
    }
    
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = time * 0.08;
    }

    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
    }
  });

  return (
    <group>
      {/* Main globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={globeVertexShader}
          fragmentShader={globeFragmentShader}
          uniforms={{ time: { value: 0 } }}
          transparent
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>
    </group>
  );
}

// Connection node on globe surface
function ConnectionNode({ position, color, label, delay = 0 }: { 
  position: [number, number, number]; 
  color: string; 
  label: string;
  delay?: number;
}) {
  const nodeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (nodeRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2 + delay) * 0.2;
      nodeRef.current.scale.setScalar(hovered ? scale * 1.5 : scale);
    }
  });

  return (
    <group position={position}>
      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.08, 0.12, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      
      {/* Main node */}
      <mesh 
        ref={nodeRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Pulse effect */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>

      {/* Label */}
      {hovered && (
        <Html
          position={[0, 0.2, 0]}
          center
          style={{
            background: 'rgba(0,0,0,0.8)',
            padding: '4px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(34, 211, 238, 0.5)',
            whiteSpace: 'nowrap',
            fontSize: '10px',
            color: 'white',
            pointerEvents: 'none',
          }}
        >
          {label}
        </Html>
      )}
    </group>
  );
}

// Animated connection arc between two points
function ConnectionArc({ start, end, color }: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}) {
  const lineRef = useRef<THREE.Line>(null);
  const particleRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(Math.random());

  const curve = useMemo(() => {
    const startVec = new THREE.Vector3(...start);
    const endVec = new THREE.Vector3(...end);
    
    // Calculate midpoint and lift it above the surface
    const midpoint = startVec.clone().add(endVec).multiplyScalar(0.5);
    const distance = startVec.distanceTo(endVec);
    midpoint.normalize().multiplyScalar(1.5 + distance * 0.3);
    
    return new THREE.QuadraticBezierCurve3(startVec, midpoint, endVec);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  useFrame((state, delta) => {
    progressRef.current += delta * 0.3;
    if (progressRef.current > 1) progressRef.current = 0;

    if (particleRef.current) {
      const point = curve.getPoint(progressRef.current);
      particleRef.current.position.copy(point);
    }
  });

  return (
    <group>
      {/* Connection line */}
      <line ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.4} />
      </line>

      {/* Traveling particle */}
      <Float speed={0} floatIntensity={0}>
        <mesh ref={particleRef}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </Float>
    </group>
  );
}

// Orbital ring
function OrbitalRing({ radius, color, speed, tilt }: {
  radius: number;
  color: string;
  speed: number;
  tilt: [number, number, number];
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={tilt}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

// Floating data particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    const colors = new Float32Array(200 * 3);
    
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random() * 2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Random colors: cyan, purple, pink
      const colorChoice = Math.floor(Math.random() * 3);
      if (colorChoice === 0) {
        colors[i * 3] = 0.13; colors[i * 3 + 1] = 0.83; colors[i * 3 + 2] = 0.93;
      } else if (colorChoice === 1) {
        colors[i * 3] = 0.66; colors[i * 3 + 1] = 0.33; colors[i * 3 + 2] = 0.97;
      } else {
        colors[i * 3] = 0.93; colors[i * 3 + 1] = 0.28; colors[i * 3 + 2] = 0.61;
      }
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={200}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Connection info display
function ConnectionInfo() {
  return (
    <Html position={[0, -2.5, 0]} center>
      <div className="text-center pointer-events-none">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-mono">CONNECTED</span>
        </div>
        <div className="text-[10px] text-gray-400 font-mono">
          <div>NODES: 8 | LINKS: 12</div>
          <div>LATENCY: 23ms</div>
        </div>
      </div>
    </Html>
  );
}

// Main scene
function Scene() {
  // Define connection nodes on the globe surface
  const nodes = useMemo(() => {
    // Convert lat/long to 3D position
    const latLongToVector = (lat: number, long: number, radius: number): [number, number, number] => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (long + 180) * (Math.PI / 180);
      return [
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      ];
    };

    return [
      { position: latLongToVector(40.7128, -74.006, 1.52), color: "#22d3ee", label: "New York" },
      { position: latLongToVector(51.5074, -0.1278, 1.52), color: "#a855f7", label: "London" },
      { position: latLongToVector(35.6762, 139.6503, 1.52), color: "#ec4899", label: "Tokyo" },
      { position: latLongToVector(23.0225, 72.5714, 1.52), color: "#22d3ee", label: "Gujarat" },
      { position: latLongToVector(-33.8688, 151.2093, 1.52), color: "#a855f7", label: "Sydney" },
      { position: latLongToVector(37.7749, -122.4194, 1.52), color: "#ec4899", label: "San Francisco" },
      { position: latLongToVector(1.3521, 103.8198, 1.52), color: "#22d3ee", label: "Singapore" },
      { position: latLongToVector(55.7558, 37.6173, 1.52), color: "#a855f7", label: "Moscow" },
    ];
  }, []);

  // Create connections between nodes
  const connections = useMemo(() => {
    return [
      { start: nodes[0].position, end: nodes[1].position, color: "#22d3ee" },
      { start: nodes[1].position, end: nodes[2].position, color: "#a855f7" },
      { start: nodes[2].position, end: nodes[6].position, color: "#ec4899" },
      { start: nodes[3].position, end: nodes[1].position, color: "#22d3ee" },
      { start: nodes[3].position, end: nodes[2].position, color: "#a855f7" },
      { start: nodes[4].position, end: nodes[6].position, color: "#ec4899" },
      { start: nodes[5].position, end: nodes[0].position, color: "#22d3ee" },
      { start: nodes[5].position, end: nodes[2].position, color: "#a855f7" },
      { start: nodes[7].position, end: nodes[1].position, color: "#ec4899" },
      { start: nodes[7].position, end: nodes[3].position, color: "#22d3ee" },
      { start: nodes[0].position, end: nodes[3].position, color: "#a855f7" },
      { start: nodes[4].position, end: nodes[2].position, color: "#ec4899" },
    ];
  }, [nodes]);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#22d3ee" />

      {/* Stars background */}
      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Main globe */}
      <Globe />

      {/* Connection nodes */}
      {nodes.map((node, i) => (
        <ConnectionNode
          key={i}
          position={node.position}
          color={node.color}
          label={node.label}
          delay={i * 0.5}
        />
      ))}

      {/* Connection arcs */}
      {connections.map((conn, i) => (
        <ConnectionArc
          key={i}
          start={conn.start}
          end={conn.end}
          color={conn.color}
        />
      ))}

      {/* Orbital rings */}
      <OrbitalRing radius={2.2} color="#22d3ee" speed={0.1} tilt={[Math.PI / 4, 0, 0]} />
      <OrbitalRing radius={2.5} color="#a855f7" speed={-0.08} tilt={[Math.PI / 3, Math.PI / 6, 0]} />
      <OrbitalRing radius={2.8} color="#ec4899" speed={0.06} tilt={[Math.PI / 2.5, -Math.PI / 8, 0]} />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Connection info */}
      <ConnectionInfo />

      {/* Orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-cyan-400/20 border-t-cyan-400 animate-spin" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-purple-500/50 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>
        <div className="text-cyan-400 text-sm font-mono">Connecting to Network...</div>
      </div>
    </div>
  );
}

export default function ConnectGlobe() {
  return (
    <div className="w-full h-full relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/50 via-gray-900 to-black" />

      {/* 3D Canvas */}
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene />
        </Canvas>
      </Suspense>

      {/* HUD Overlay - Top */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400">GLOBAL NETWORK</span>
          </div>
          <div className="text-[10px] font-mono text-gray-500">STATUS: ACTIVE</div>
        </div>
        
        <div className="text-right space-y-1">
          <div className="text-xs font-mono text-purple-400">REAL-TIME</div>
          <div className="text-[10px] font-mono text-gray-500">LAT: 23.0225° N</div>
        </div>
      </div>

      {/* HUD Overlay - Bottom */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
        <div className="text-[10px] font-mono text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              CITIES
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              CONNECTIONS
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              DATA FLOW
            </span>
          </div>
        </div>
        
        <div className="px-3 py-1 rounded-full bg-black/50 border border-gray-700 backdrop-blur-sm">
          <span className="text-[10px] font-mono text-gray-400">INTERACT: DRAG TO ROTATE</span>
        </div>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.015)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* Corner frame decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-12">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400/60 to-transparent" />
          <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-cyan-400/60 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-12 h-12">
          <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-purple-500/60 to-transparent" />
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-purple-500/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 w-12 h-12">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-pink-500/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12">
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-cyan-400/60 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-cyan-400/60 to-transparent" />
        </div>
      </div>
    </div>
  );
}

