import React from "react";
import { Sphere } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import sunTexture from "../assets/sun.jpg"; // Add texture

const Sun = () => {
  const texture = useLoader(THREE.TextureLoader, sunTexture);

  return (
    <Sphere args={[2, 32, 32]}>
      <meshBasicMaterial attach="material" map={texture} />
    </Sphere>
  );
};

export default Sun;
