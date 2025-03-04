import React from "react";
import { Sphere } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import sunTexture from "../assets/sun.jpg"; 

const Sun = () => {
  const texture = useLoader(THREE.TextureLoader, sunTexture);

  return (
    <group>
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial 
          attach="material" 
          map={texture}
          emissive={new THREE.Color(0xffaa00)}
          emissiveIntensity={1.5}
          metalness={0.3} 
          roughness={0.5} 
        />
      </Sphere>

      {/* 💡 Reduced Sunlight Intensity */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={2.5} // 🔆 Lowered brightness
        decay={2} 
        distance={50} 
      />
    </group>
  );
};

export default Sun;
