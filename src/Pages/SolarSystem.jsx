import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "../Components/Sun";
import Planet from "../Components/Planet";

import mercuryTexture from "../assets/mercury.jpg";
import venusTexture from "../assets/venus.jpg";
import earthTexture from "../assets/earth.jpg";
import marsTexture from "../assets/mars.jpg";
import jupiterTexture from "../assets/jupiter.jpg";
import saturnTexture from "../assets/saturn.jpg";
import uranusTexture from "../assets/uranus.jpg";
import neptuneTexture from "../assets/neptune.jpeg";

const SolarSystem = () => {
  const [planets] = useState([
    { id: 1, name: "Mercury", size: 0.5, speed: 0.01, orbit: 4, texture: mercuryTexture, initialAngle: 0, yOffset: 0.5 },
    { id: 2, name: "Venus", size: 0.8, speed: 0.008, orbit: 6, texture: venusTexture, initialAngle: 1, yOffset: -0.5 },
    { id: 3, name: "Earth", size: 1, speed: 0.006, orbit: 8, texture: earthTexture, initialAngle: 2, yOffset: 0.3 },
    { id: 4, name: "Mars", size: 0.6, speed: 0.005, orbit: 10, texture: marsTexture, initialAngle: -1, yOffset: -0.3 },
    { id: 5, name: "Jupiter", size: 2, speed: 0.003, orbit: 13, texture: jupiterTexture, initialAngle: 1.5, yOffset: 0.7 },
    { id: 6, name: "Saturn", size: 1.8, speed: 0.002, orbit: 16, texture: saturnTexture, initialAngle: -1.2, yOffset: -0.7 },
    { id: 7, name: "Uranus", size: 1.5, speed: 0.0015, orbit: 19, texture: uranusTexture, initialAngle: 2.2, yOffset: 0.4 },
    { id: 8, name: "Neptune", size: 1.4, speed: 0.0012, orbit: 22, texture: neptuneTexture, initialAngle: -2.5, yOffset: -0.4 },
  ]);

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 40] }}>
        {/* ✅ Better lighting setup */}
        <ambientLight intensity={2} />  {/* ✅ More balanced ambient light */}
        <pointLight position={[0, 0, 0]} intensity={3} />  {/* ✅ Strong Sunlight */}
        <hemisphereLight skyColor={"#ffffff"} groundColor={"#666666"} intensity={1.2} />  {/* ✅ Even global lighting */}
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={1} />

        <Sun />
        {planets.map((planet) => (
          <Planet key={planet.id} {...planet} />
        ))}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default SolarSystem;
