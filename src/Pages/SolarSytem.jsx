import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "../Components/Sun";
import Planet from "../Components/Planet";

import mercuryTexture from "../assets/mercury.jpg"
import venusTexture from "../assets/venus.jpg";
import earthTexture from "../assets/earth.jpg";
import marsTexture from "../assets/mars.jpg";
import jupiterTexture from "../assets/jupiter.jpg";
import saturnTexture from "../assets/saturn.jpg";
import uranusTexture from "../assets/uranus.jpg";
import neptuneTexture from "../assets/neptune.jpeg";

const SolarSystem = () => {
  const [planets, setPlanets] = useState([
    { id: 1, name: "Mercury", size: 0.5, speed: 0.01, orbit: 4, texture: mercuryTexture },
    { id: 2, name: "Venus", size: 0.8, speed: 0.008, orbit: 6, texture: venusTexture },
    { id: 3, name: "Earth", size: 1, speed: 0.006, orbit: 8, texture: earthTexture },
    { id: 4, name: "Mars", size: 0.6, speed: 0.005, orbit: 10, texture: marsTexture },
    { id: 5, name: "Jupiter", size: 2, speed: 0.003, orbit: 13, texture: jupiterTexture },
    { id: 6, name: "Saturn", size: 1.8, speed: 0.002, orbit: 16, texture: saturnTexture },
    { id: 7, name: "Uranus", size: 1.5, speed: 0.0015, orbit: 19, texture: uranusTexture },
    { id: 8, name: "Neptune", size: 1.4, speed: 0.0012, orbit: 22, texture: neptuneTexture },
  ]);

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 40] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} />
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
