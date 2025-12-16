// "use client";

// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Stars, ContactShadows } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
// import { KernelSize, Resolution } from "postprocessing";
// import { useRef } from "react";

// /**
//  * CameraRig: parallax / idle motion
//  */
// function CameraRig({ children }) {
//   const { camera, mouse } = useThree();

//   useFrame(() => {
//     const targetX = mouse.x * 0.4;
//     const targetY = mouse.y * 0.2;

//     camera.position.x += (targetX - camera.position.x) * 0.03;
//     camera.position.y += (targetY - camera.position.y) * 0.03;
//     camera.lookAt(0, 0, 0);
//   });

//   return children;
// }

// /**
//  * Small moon orbiting around the planet
//  */
// function Moon() {
//   const moonRef = useRef(null);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     const radius = 4;
//     const speed = 0.25;

//     if (moonRef.current) {
//       moonRef.current.position.x = Math.cos(t * speed) * radius;
//       moonRef.current.position.z = Math.sin(t * speed) * radius;
//       moonRef.current.position.y = Math.sin(t * 0.8) * 0.4;
//       moonRef.current.rotation.y += 0.01;
//     }
//   });

//   return (
//     <mesh ref={moonRef} scale={0.35}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial
//         color="#a5b4fc"
//         emissive="#818cf8"
//         emissiveIntensity={1.2}
//         roughness={0.9}
//         metalness={0.1}
//         toneMapped={false}
//       />
//     </mesh>
//   );
// }

// /**
//  * Planet + rings + atmosphere
//  */
// function Planet() {
//   const groupRef = useRef();
//   const ringRef = useRef();
//   const ring2Ref = useRef();
//   const gridRef = useRef();

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();

//     if (groupRef.current) {
//       groupRef.current.rotation.y = t * 0.15;
//       groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
//     }

//     if (ringRef.current) ringRef.current.rotation.z = t * 0.3;
//     if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.2;

//     if (gridRef.current) gridRef.current.rotation.y = -t * 0.1;
//   });

//   return (
//     <group ref={groupRef}>
//       {/* Soft glowing planet orb */}
//       <mesh>
//         <sphereGeometry args={[1.5, 128, 128]} />
//         <meshStandardMaterial
//           color="#1e293b"
//           emissive="#38bdf8" // cyan emissive
//           emissiveIntensity={0.4} // NOT too strong
//           roughness={0.4}
//           metalness={0.3}
//         />
//       </mesh>

//       {/* Hologram grid inside the orb */}
//       <mesh ref={gridRef} scale={1.01}>
//         <sphereGeometry args={[1.5, 32, 32]} />
//         <meshBasicMaterial
//           color="#67e8f9"
//           wireframe
//           transparent
//           opacity={0.2}
//         />
//       </mesh>

//       {/* Floating Neon Ring 1 */}
//       <mesh ref={ringRef} rotation={[1.2, 0, 0]}>
//         <torusGeometry args={[2.1, 0.04, 16, 200]} />
//         <meshStandardMaterial
//           color="#38bdf8"
//           emissive="#38bdf8"
//           emissiveIntensity={1.2}
//           transparent
//           opacity={0.9}
//         />
//       </mesh>

//       {/* Thin Outer Ring */}
//       <mesh ref={ring2Ref} rotation={[0.4, 1.0, 0]}>
//         <torusGeometry args={[2.45, 0.025, 16, 200]} />
//         <meshStandardMaterial
//           color="#7dd3fc"
//           emissive="#7dd3fc"
//           emissiveIntensity={0.6}
//           transparent
//           opacity={0.6}
//         />
//       </mesh>

//       {/* Atmosphere Glow */}
//       <mesh scale={1.7}>
//         <sphereGeometry args={[1.5, 32, 32]} />
//         <meshBasicMaterial color="#38bdf8" transparent opacity={0.08} />
//       </mesh>
//     </group>
//   );
// }

// /**
//  * Postprocessing & global FX wrapper - enhanced bloom for better light effect
//  */
// function FX() {
//   return (
//     <EffectComposer multisampling={2}>
//       <Bloom
//         intensity={1.2} // Increased for more glow
//         kernelSize={KernelSize.LARGE} // Larger kernel for softer bloom
//         luminanceThreshold={0.2} // Lower threshold to capture more light
//         luminanceSmoothing={0.2}
//         mipmapBlur
//         resolutionX={Resolution.AUTO_SIZE}
//         resolutionY={Resolution.AUTO_SIZE}
//       />
//     </EffectComposer>
//   );
// }

// /**
//  * Final canvas component
//  */
// export default function PlanetCanvas() {
//   return (
//     <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true }}>
//       {/* Background stars */}
//       <Stars
//         radius={60}
//         depth={80}
//         count={2500}
//         factor={3}
//         saturation={0}
//         fade
//         speed={0.5}
//       />

//       {/* Soft fake shadow under planet */}
//       <ContactShadows
//         position={[0, -2.3, 0]}
//         opacity={0.45}
//         width={8}
//         height={8}
//         blur={2.5}
//         far={5}
//       />

//       <CameraRig>
//         <Planet />
//         <Moon />
//       </CameraRig>

//       <OrbitControls
//         autoRotate
//         autoRotateSpeed={0.8}
//         enableZoom={false}
//         enablePan={false}
//         minPolarAngle={Math.PI / 3}
//         maxPolarAngle={(Math.PI * 2) / 3}
//       />

//       <FX />
//     </Canvas>
//   );
// }

"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize, Resolution } from "postprocessing";
import { useRef } from "react";

/**
 * CameraRig: parallax / idle motion
 */
function CameraRig({ children }) {
  const { camera, mouse } = useThree();

  useFrame(() => {
    const targetX = mouse.x * 0.4;
    const targetY = mouse.y * 0.2;

    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return children;
}

/**
 * Small moon orbiting around the planet
 */
function Moon() {
  const moonRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const radius = 4;
    const speed = 0.25;

    if (moonRef.current) {
      moonRef.current.position.x = Math.cos(t * speed) * radius;
      moonRef.current.position.z = Math.sin(t * speed) * radius;
      moonRef.current.position.y = Math.sin(t * 0.8) * 0.4;
      moonRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={moonRef} scale={0.35}>
      {/* <sphereGeometry args={[1, 32, 32]} /> */}
      <sphereGeometry args={[1.5, 64, 64]} />

      <meshStandardMaterial
        color="#a5b4fc"
        emissive="#818cf8"
        emissiveIntensity={1.2}
        roughness={0.9}
        metalness={0.1}
        toneMapped={false}
      />
    </mesh>
  );
}

/**
 * Planet + rings + atmosphere
 */
function Planet() {
  const groupRef = useRef();
  const ringRef = useRef();
  const ring2Ref = useRef();
  const gridRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }

    if (ringRef.current) ringRef.current.rotation.z = t * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.z = -t * 0.2;

    if (gridRef.current) gridRef.current.rotation.y = -t * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Soft glowing planet orb */}
      <mesh>
        <sphereGeometry args={[1.5, 128, 128]} />
        <meshStandardMaterial
          color="#1e293b"
          emissive="#38bdf8"
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>

      {/* Hologram grid inside the orb */}
      <mesh ref={gridRef} scale={1.01}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#67e8f9"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Floating Neon Ring 1 */}
      <mesh ref={ringRef} rotation={[1.2, 0, 0]}>
        {/* <torusGeometry args={[2.1, 0.04, 16, 200]} /> */}
        <torusGeometry args={[2.1, 0.04, 12, 100]} />

        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Thin Outer Ring */}
      <mesh ref={ring2Ref} rotation={[0.4, 1.0, 0]}>
        <torusGeometry args={[2.45, 0.025, 16, 200]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#7dd3fc"
          emissiveIntensity={0.6}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh scale={1.7}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

/**
 * Postprocessing & global FX wrapper
//  */
// function FX() {
//   return (
//     <EffectComposer multisampling={2}>
//       <Bloom
//         intensity={1.2}
//         kernelSize={KernelSize.LARGE}
//         luminanceThreshold={0.2}
//         luminanceSmoothing={0.2}
//         mipmapBlur
//         resolutionX={Resolution.AUTO_SIZE}
//         resolutionY={Resolution.AUTO_SIZE}
//       />
//     </EffectComposer>
//   );
// }

/**
 * FINAL — ERROR-FREE CANVAS
 */
export default function PlanetCanvas() {
  return (
    <Canvas
    frameloop="demand" 
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true }}
      style={{ touchAction: "none" }} // ⭐ FIX: prevents pointerCapture errors
    >
      <Stars
        radius={60}
        depth={80}
        count={2500}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      <ContactShadows
        position={[0, -2.3, 0]}
        opacity={0.45}
        width={8}
        height={8}
        blur={2.5}
        far={5}
      />

      <CameraRig>
        <Planet />
        <Moon />
      </CameraRig>

      <OrbitControls
        makeDefault // ⭐ FIX: prevents control conflicts
        autoRotate
        autoRotateSpeed={0.8}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />

      {/* <FX /> */}
    </Canvas>
  );
}
