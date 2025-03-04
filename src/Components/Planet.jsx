import React, { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({ name, size, speed, orbit, texture, initialAngle, yOffset }) => {
  const planetRef = useRef();
  const planetTexture = useLoader(THREE.TextureLoader, texture);

  // ✅ Fix texture visibility
  planetTexture.wrapS = THREE.RepeatWrapping;
  planetTexture.wrapT = THREE.RepeatWrapping;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // 🌍 Revolving around the Sun
    planetRef.current.position.x = orbit * Math.cos(elapsedTime * speed + initialAngle);
    planetRef.current.position.z = orbit * Math.sin(elapsedTime * speed + initialAngle);
    planetRef.current.position.y = yOffset; 

    // 🔄 Rotating on its axis
    planetRef.current.rotation.y += 0.02;
  });

  // 🔄 Circular Orbit Path
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
      {/* 🔵 Orbit Path */}
      <Line points={orbitPoints} color="white" lineWidth={1} />

      {/* 🌍 Planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 64, 64]} />  {/* ✅ Smooth rendering */}
        <meshStandardMaterial
          map={planetTexture}
          emissive={new THREE.Color(0x333333)} // ✅ Soft glow
          emissiveIntensity={1.2} // ✅ Make back visible
          metalness={0.3} // ✅ Light reflectivity
          roughness={0.5} // ✅ Slight shininess
          side={THREE.FrontSide} // ✅ No unnecessary calculations
        />
      </mesh>
    </>
  );
};

export default Planet