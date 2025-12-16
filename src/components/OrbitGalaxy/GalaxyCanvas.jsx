"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function GalaxyParticles() {
  const ref = useRef();
  const count = 1200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = THREE.MathUtils.randFloat(2, 7);
      const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);

      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = THREE.MathUtils.randFloat(-1, 1);
      arr[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.04} color="#00eaff" opacity={0.7} transparent />
    </points>
  );
}

export default function GalaxyCanvas() {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={2} />
      <GalaxyParticles />
    </Canvas>
  );
}
