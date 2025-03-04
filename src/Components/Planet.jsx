import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

const Planet = ({ name, size, speed, orbit }) => {
  const planetRef = useRef();
  useFrame(({ clock }) => {
    planetRef.current.position.x = orbit * Math.cos(clock.getElapsedTime() * speed);
    planetRef.current.position.z = orbit * Math.sin(clock.getElapsedTime() * speed);
  });

  return (
    <mesh ref={planetRef}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Sphere>
    </mesh>
  );
};

export default Planet;