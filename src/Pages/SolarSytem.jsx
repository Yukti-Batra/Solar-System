import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "../Components/Sun";
import Planet from "../Components/Planet";
import { saveConfig, loadConfigs } from "../firebase";

const SolarSystem = () => {
  const [planets, setPlanets] = useState([
    { id: 1, name: "Mercury", size: 0.5, speed: 0.01, orbit: 3 },
    { id: 2, name: "Venus", size: 0.8, speed: 0.008, orbit: 5 },
    { id: 3, name: "Earth", size: 1, speed: 0.006, orbit: 7 },
    { id: 4, name: "Mars", size: 0.6, speed: 0.005, orbit: 9 },
    { id: 5, name: "Jupiter", size: 2, speed: 0.003, orbit: 12 },
    { id: 6, name: "Saturn", size: 1.8, speed: 0.002, orbit: 15 },
    { id: 7, name: "Uranus", size: 1.5, speed: 0.0015, orbit: 18 },
    { id: 8, name: "Neptune", size: 1.4, speed: 0.0012, orbit: 21 },
  ]);

  // Save configuration to Firebase
  const handleSave = async () => {
    await saveConfig(planets);
    alert("Configuration saved successfully! 🚀");
  };

  // Load configuration from Firebase
  const handleLoad = async () => {
    const configs = await loadConfigs();
    if (configs.length > 0) {
      setPlanets(configs[0].planets); // Load the latest config
      alert("Configuration loaded successfully! 🌍");
    } else {
      alert("No saved configurations found! ⚠️");
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 30] }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <Sun />
        {planets.map((planet) => (
          <Planet key={planet.id} {...planet} />
        ))}
        <OrbitControls />
      </Canvas>
  
      {/* UI Buttons for Saving and Loading */}
      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}>
        <button onClick={handleSave}>Save Configuration</button>
        <button onClick={handleLoad}>Load Configuration</button>
      </div>
    </div>
  );
  
};

export default SolarSystem;
