import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";
import { degreesToRadians } from "../utils/helpers";

const Planet = ({ name, size, speed, orbit, texture }) => {
  const planetRef = useRef();
  const planetTexture = useLoader(THREE.TextureLoader, texture);

  // Animate planet movement
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    planetRef.current.position.x = orbit * Math.cos(elapsedTime * speed);
    planetRef.current.position.z = orbit * Math.sin(elapsedTime * speed);
  });

  // Generate points for orbit line
  const orbitPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 360; i += 5) {
      const angle = degreesToRadians(i);
      points.push([orbit * Math.cos(angle), 0, orbit * Math.sin(angle)]);
    }
    return points;
  }, [orbit]);

  return (
    <>
      {/* Orbit Line */}
      <Line points={orbitPoints} color="white" lineWidth={1} />

      {/* Planet */}
      <mesh ref={planetRef}>
        <Sphere args={[size, 32, 32]}>
          <meshStandardMaterial attach="material" map={planetTexture} />
        </Sphere>
      </mesh>
    </>
  );
};

export default Planet;
