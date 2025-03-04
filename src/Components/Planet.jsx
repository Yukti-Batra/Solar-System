import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ name, size, speed, orbit, texture, initialAngle, yOffset }) => {
  const planetRef = useRef();
  const planetTexture = useLoader(THREE.TextureLoader, texture);

  planetTexture.wrapS = THREE.RepeatWrapping;
  planetTexture.wrapT = THREE.RepeatWrapping;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    planetRef.current.position.x = orbit * Math.cos(elapsedTime * speed + initialAngle);
    planetRef.current.position.z = orbit * Math.sin(elapsedTime * speed + initialAngle);
    planetRef.current.position.y = yOffset; 

    planetRef.current.rotation.y += 0.02;
  });

  const orbitPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 360; i += 5) {
      const angle = (i * Math.PI) / 180;
      points.push([orbit * Math.cos(angle), 0, orbit * Math.sin(angle)]);
    }
    return points;
  }, [orbit]);

  return (
    <>
      <Line points={orbitPoints} color="white" lineWidth={1} />

      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          map={planetTexture}
          emissive={new THREE.Color(0x333333)}
          emissiveIntensity={1.2}
          metalness={0.3}
          roughness={0.5}
          side={THREE.FrontSide}
        />
      </mesh>
    </>
  )
}

export default Planet