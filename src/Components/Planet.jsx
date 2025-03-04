import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import { degreesToRadians } from "../utils/helpers";

const Planet = ({ name, size, speed, orbit, color }) => {
  const planetRef = useRef();

  // Animate planet's movement along its orbit
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
          <meshStandardMaterial attach="material" color={color || "blue"} />
        </Sphere>
      </mesh>
    </>
  );
};

export default Planet;
