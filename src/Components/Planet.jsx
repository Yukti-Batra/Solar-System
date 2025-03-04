import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ name, size, speed, orbit, texture }) => {
  const planetRef = useRef();
  const planetTexture = useLoader(THREE.TextureLoader, texture);

  useFrame(({ clock }) => {
    planetRef.current.position.x = orbit * Math.cos(clock.getElapsedTime() * speed);
    planetRef.current.position.z = orbit * Math.sin(clock.getElapsedTime() * speed);
  });

  return (
    <mesh ref={planetRef}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial attach="material" map={planetTexture} />
      </Sphere>
    </mesh>
  );
};

export default Planet;
