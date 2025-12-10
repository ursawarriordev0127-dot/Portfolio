"use client";

import { useRef, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Trail, Html, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Advanced holographic globe shader
const holoGlobeVertexShader = `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Subtle wave distortion
    float wave = sin(position.x * 4.0 + time) * sin(position.y * 4.0 + time) * 0.02;
    vElevation = wave;
    
    vec3 newPosition = position + normal * wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const holoGlobeFragmentShader = `
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  
  void main() {
    // Animated hexagonal grid pattern
    vec2 hexUv = vUv * vec2(40.0, 20.0);
    vec2 hexId = floor(hexUv);
    vec2 hexF = fract(hexUv) - 0.5;
    
    float hexDist = length(hexF);
    float hex = smoothstep(0.4, 0.35, hexDist);
    
    // Animated scan lines
    float scanLine = sin(vUv.y * 100.0 + time * 2.0) * 0.5 + 0.5;
    scanLine = pow(scanLine, 8.0) * 0.3;
    
    // Data flow effect
    float dataFlow = sin(vUv.x * 50.0 - time * 3.0) * sin(vUv.y * 30.0 + time * 2.0);
    dataFlow = smoothstep(0.8, 1.0, abs(dataFlow)) * 0.5;
    
    // Fresnel edge glow
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
    
    // Color mixing based on position and time
    float colorMix = sin(vUv.x * 3.14159 + time * 0.5) * 0.5 + 0.5;
    vec3 baseColor = mix(color1, color2, colorMix);
    baseColor = mix(baseColor, color3, sin(vUv.y * 3.14159 + time * 0.3) * 0.5 + 0.5);
    
    // Combine effects
    vec3 finalColor = baseColor * 0.3;
    finalColor += baseColor * hex * 0.4;
    finalColor += vec3(scanLine) * color1;
    finalColor += vec3(dataFlow) * color2;
    finalColor += baseColor * fresnel * 1.5;
    
    // Pulsing glow
    float pulse = sin(time * 2.0) * 0.2 + 0.8;
    finalColor *= pulse;
    
    // Add subtle noise for holographic effect
    float noise = fract(sin(dot(vUv * 1000.0, vec2(12.9898, 78.233))) * 43758.5453) * 0.05;
    finalColor += noise;
    
    gl_FragColor = vec4(finalColor, 0.85 + fresnel * 0.15);
  }
`;

// Atmosphere shader with animated glow
const atmosphereVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  uniform float time;
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    
    // Animated color shift
    vec3 color1 = vec3(0.13, 0.83, 0.93); // Cyan
    vec3 color2 = vec3(0.66, 0.33, 0.97); // Purple
    vec3 color3 = vec3(0.93, 0.28, 0.61); // Pink
    
    float t = sin(time * 0.5) * 0.5 + 0.5;
    vec3 color = mix(color1, color2, t);
    color = mix(color, color3, sin(time * 0.3 + vPosition.y) * 0.5 + 0.5);
    
    // Pulsing effect
    float pulse = sin(time * 3.0) * 0.2 + 1.0;
    
    gl_FragColor = vec4(color * intensity * pulse, intensity * 0.6);
  }
`;

// Holographic Core
function HolographicCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.2;
      coreRef.current.rotation.y = time * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.3;
      innerRef.current.rotation.z = time * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.8} />
      </mesh>
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.6} />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={2} color="#22d3ee" distance={5} />
    </group>
  );
}

// Advanced Holographic Globe
function HolographicGlobe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const atmMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (globeRef.current) {
      globeRef.current.rotation.y = time * 0.08;
      globeRef.current.rotation.x = mouse.y * 0.15;
      globeRef.current.rotation.z = mouse.x * 0.05;
    }
    
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = time * 0.05;
    }

    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
    }
    
    if (atmMaterialRef.current) {
      atmMaterialRef.current.uniforms.time.value = time;
    }
  });

  return (
    <group>
      {/* Main holographic globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={holoGlobeVertexShader}
          fragmentShader={holoGlobeFragmentShader}
          uniforms={{
            time: { value: 0 },
            color1: { value: new THREE.Color("#22d3ee") },
            color2: { value: new THREE.Color("#a855f7") },
            color3: { value: new THREE.Color("#ec4899") },
          }}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} scale={[1.25, 1.25, 1.25]}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <shaderMaterial
          ref={atmMaterialRef}
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          uniforms={{ time: { value: 0 } }}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>

      {/* Inner core */}
      <HolographicCore />
    </group>
  );
}

// Animated Data Stream Ring
function DataStreamRing({ radius, color, speed, segments, tilt }: {
  radius: number;
  color: string;
  speed: number;
  segments: number;
  tilt: [number, number, number];
}) {
  const ringRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (ringRef.current) {
      ringRef.current.rotation.z = time * speed;
    }
    
    if (dotsRef.current) {
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2 + time * speed * 2;
        dummy.position.x = Math.cos(angle) * radius;
        dummy.position.y = Math.sin(angle) * radius;
        dummy.position.z = Math.sin(angle * 3 + time) * 0.1;
        
        const scale = 0.8 + Math.sin(angle * 2 + time * 3) * 0.4;
        dummy.scale.setScalar(scale);
        
        dummy.updateMatrix();
        dotsRef.current.setMatrixAt(i, dummy.matrix);
      }
      dotsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={ringRef} rotation={tilt}>
      {/* Ring line */}
      <mesh>
        <torusGeometry args={[radius, 0.008, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      
      {/* Animated dots on ring */}
      <instancedMesh ref={dotsRef} args={[undefined, undefined, segments]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color={color} />
      </instancedMesh>
    </group>
  );
}

// Energy Wave Effect
function EnergyWaves() {
  const wavesRef = useRef<THREE.Group>(null);
  const [waves] = useState(() => 
    Array.from({ length: 5 }).map((_, i) => ({
      scale: 1 + i * 0.5,
      speed: 0.5 + i * 0.1,
      opacity: 0.3 - i * 0.05,
    }))
  );

  useFrame((state) => {
    if (wavesRef.current) {
      wavesRef.current.children.forEach((child, i) => {
        const wave = waves[i];
        const time = state.clock.getElapsedTime();
        const scale = wave.scale + Math.sin(time * wave.speed) * 0.3;
        child.scale.setScalar(scale);
        (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({
          color: "#22d3ee",
          transparent: true,
          opacity: wave.opacity * (1 - (scale - wave.scale) / 0.3),
          wireframe: true,
        });
      });
    }
  });

  return (
    <group ref={wavesRef}>
      {waves.map((wave, i) => (
        <mesh key={i} scale={wave.scale}>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={wave.opacity} wireframe />
        </mesh>
      ))}
    </group>
  );
}

// Floating Tech Particles with Trails
function TechParticles() {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      radius: 2.5 + Math.random() * 2,
      speed: 0.15 + Math.random() * 0.25,
      offset: (Math.PI * 2 / 12) * i + Math.random() * 0.5,
      size: 0.04 + Math.random() * 0.04,
      color: ["#22d3ee", "#a855f7", "#ec4899", "#10b981", "#f59e0b"][i % 5],
      tiltX: Math.random() * 0.8 - 0.4,
      tiltY: Math.random() * 0.4 - 0.2,
      orbitTilt: Math.random() * Math.PI,
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        const particle = particles[i];
        const angle = time * particle.speed + particle.offset;
        
        // Complex orbital motion
        child.position.x = Math.cos(angle) * particle.radius * Math.cos(particle.orbitTilt);
        child.position.y = Math.sin(angle * 1.5) * particle.radius * particle.tiltX + 
                          Math.sin(time * 0.5) * 0.3;
        child.position.z = Math.sin(angle) * particle.radius * Math.sin(particle.orbitTilt);
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <Float key={i} speed={3} floatIntensity={0.3}>
          <Trail
            width={0.8}
            length={8}
            color={particle.color}
            attenuation={(t) => t * t}
          >
            <mesh>
              <dodecahedronGeometry args={[particle.size, 0]} />
              <meshBasicMaterial color={particle.color} />
            </mesh>
          </Trail>
        </Float>
      ))}
    </group>
  );
}

// DNA Helix Structure
function DNAHelix() {
  const helixRef = useRef<THREE.Group>(null);
  
  const helixPoints = useMemo(() => {
    const points: { pos1: THREE.Vector3; pos2: THREE.Vector3; color: string }[] = [];
    const turns = 3;
    const pointsPerTurn = 20;
    const radius = 0.4;
    const height = 4;
    
    for (let i = 0; i < turns * pointsPerTurn; i++) {
      const t = i / (turns * pointsPerTurn);
      const angle = t * turns * Math.PI * 2;
      const y = (t - 0.5) * height;
      
      points.push({
        pos1: new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius),
        pos2: new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius),
        color: i % 4 < 2 ? "#22d3ee" : "#a855f7",
      });
    }
    return points;
  }, []);

  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={helixRef} position={[3.5, 0, 0]}>
      {helixPoints.map((point, i) => (
        <group key={i}>
          <mesh position={point.pos1}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color={point.color} />
          </mesh>
          <mesh position={point.pos2}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color={point.color} />
          </mesh>
          {i % 5 === 0 && (
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([
                    point.pos1.x, point.pos1.y, point.pos1.z,
                    point.pos2.x, point.pos2.y, point.pos2.z,
                  ])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#ec4899" transparent opacity={0.4} />
            </line>
          )}
        </group>
      ))}
    </group>
  );
}

// Floating Holographic Panels
function HolographicPanel({ position, rotation, data }: {
  position: [number, number, number];
  rotation: [number, number, number];
  data: { label: string; value: string; color: string };
}) {
  const panelRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 2) * 0.001;
    }
  });

  return (
    <group ref={panelRef} position={position} rotation={rotation}>
      <Float speed={2} floatIntensity={0.2}>
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[0.8, 0.4]} />
          <meshBasicMaterial 
            color={data.color} 
            transparent 
            opacity={hovered ? 0.3 : 0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
        <Html
          position={[0, 0, 0.01]}
          center
          style={{
            width: "80px",
            textAlign: "center",
            pointerEvents: "none",
            transform: `scale(${hovered ? 1.1 : 1})`,
            transition: "transform 0.3s ease",
          }}
        >
          <div className="text-[8px] font-mono text-gray-400 uppercase tracking-wider">
            {data.label}
          </div>
          <div className="text-sm font-bold" style={{ color: data.color }}>
            {data.value}
          </div>
        </Html>
      </Float>
    </group>
  );
}

// Floating Stats Panels
function StatsPanels() {
  const panels = [
    { position: [-3, 1.5, 0] as [number, number, number], rotation: [0, 0.5, 0] as [number, number, number], data: { label: "Experience", value: "2+ Years", color: "#22d3ee" } },
    { position: [-3, 0, 0.5] as [number, number, number], rotation: [0, 0.4, 0] as [number, number, number], data: { label: "Projects", value: "15+", color: "#a855f7" } },
    { position: [-3, -1.5, 0] as [number, number, number], rotation: [0, 0.5, 0] as [number, number, number], data: { label: "Satisfaction", value: "100%", color: "#ec4899" } },
  ];

  return (
    <group>
      {panels.map((panel, i) => (
        <HolographicPanel key={i} {...panel} />
      ))}
    </group>
  );
}

// Animated Background Grid
function BackgroundGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 1;
    }
  });

  return (
    <group ref={gridRef} position={[0, 0, -10]}>
      <gridHelper args={[50, 50, "#22d3ee", "#1a1a2e"]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}

// Main Scene
function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#a855f7" />
      <pointLight position={[-5, 5, -5]} intensity={0.3} color="#ec4899" />

      {/* Stars background */}
      <Stars
        radius={80}
        depth={50}
        count={4000}
        factor={4}
        saturation={0.5}
        fade
        speed={0.5}
      />

      {/* Background grid */}
      <BackgroundGrid />

      {/* Main elements */}
      <HolographicGlobe />
      <EnergyWaves />
      
      {/* Data stream rings */}
      <DataStreamRing radius={2.8} color="#22d3ee" speed={0.2} segments={30} tilt={[Math.PI / 4, 0, 0]} />
      <DataStreamRing radius={3.2} color="#a855f7" speed={-0.15} segments={25} tilt={[Math.PI / 3, Math.PI / 8, 0]} />
      <DataStreamRing radius={3.6} color="#ec4899" speed={0.1} segments={20} tilt={[Math.PI / 2.5, -Math.PI / 6, 0]} />

      {/* Tech particles */}
      <TechParticles />

      {/* DNA Helix */}
      <DNAHelix />

      {/* Stats panels */}
      <StatsPanels />

      {/* Orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
      />
    </>
  );
}

// Premium Loading Animation
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        {/* Animated rings */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-purple-500/30 border-r-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-4 rounded-full border-2 border-pink-500/30 border-b-pink-500 animate-spin" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <div className="text-cyan-400 text-sm font-mono mb-2">INITIALIZING</div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Earth3D() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
      </div>

      {/* 3D Canvas */}
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          onCreated={() => setIsReady(true)}
        >
          <Scene />
        </Canvas>
      </Suspense>

      {/* Premium HUD Overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top HUD */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {/* Left info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <span className="text-xs font-mono text-green-400 tracking-wider">SYSTEM ACTIVE</span>
            </div>
            <div className="text-[10px] font-mono text-cyan-400/60 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>MODE: INTERACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-400" />
                <span>RENDER: 60 FPS</span>
              </div>
            </div>
          </div>

          {/* Right info */}
          <div className="text-right space-y-2">
            <div className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 backdrop-blur-sm">
              <span className="text-xs font-mono text-cyan-400">◈ HOLOGRAPHIC UI</span>
            </div>
            <div className="text-[10px] font-mono text-gray-500">
              <div>VER 2.0.0</div>
              <div>BUILD: PRODUCTION</div>
            </div>
          </div>
        </div>

        {/* Bottom HUD */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          {/* Coordinates */}
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-purple-400/60">COORDINATES</div>
            <div className="text-xs font-mono text-white/80">
              <div>LAT: 23.0225° N</div>
              <div>LON: 72.5714° E</div>
            </div>
          </div>

          {/* Center - Interaction hint */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-gray-700/50 backdrop-blur-sm">
              <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Drag to Explore</span>
            </div>
          </div>

          {/* Tech stack indicator */}
          <div className="text-right space-y-1">
            <div className="text-[10px] font-mono text-pink-400/60">TECH STACK</div>
            <div className="flex items-center gap-1">
              {['R', 'T', 'N', 'P'].map((letter, i) => (
                <div 
                  key={i}
                  className="w-5 h-5 rounded bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center"
                >
                  <span className="text-[8px] font-bold text-cyan-400">{letter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-20 h-20">
          <div className="absolute top-2 left-2 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
          <div className="absolute top-2 left-2 w-[2px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
          <div className="absolute top-4 left-4 w-2 h-2 border-l border-t border-cyan-400/50" />
        </div>
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute top-2 right-2 w-12 h-[2px] bg-gradient-to-l from-purple-500 to-transparent" />
          <div className="absolute top-2 right-2 w-[2px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
          <div className="absolute top-4 right-4 w-2 h-2 border-r border-t border-purple-500/50" />
        </div>
        <div className="absolute bottom-0 left-0 w-20 h-20">
          <div className="absolute bottom-2 left-2 w-12 h-[2px] bg-gradient-to-r from-pink-500 to-transparent" />
          <div className="absolute bottom-2 left-2 w-[2px] h-12 bg-gradient-to-t from-pink-500 to-transparent" />
          <div className="absolute bottom-4 left-4 w-2 h-2 border-l border-b border-pink-500/50" />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20">
          <div className="absolute bottom-2 right-2 w-12 h-[2px] bg-gradient-to-l from-cyan-400 to-transparent" />
          <div className="absolute bottom-2 right-2 w-[2px] h-12 bg-gradient-to-t from-cyan-400 to-transparent" />
          <div className="absolute bottom-4 right-4 w-2 h-2 border-r border-b border-cyan-400/50" />
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.03)_50%)] bg-[length:100%_4px]" />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>
    </div>
  );
}
