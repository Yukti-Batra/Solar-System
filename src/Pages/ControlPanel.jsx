import React, { useState } from "react";

const ControlPanel = ({ planets, onPlanetUpdate }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPlanetId, setSelectedPlanetId] = useState(planets[0]?.id || 1);
  
  const selectedPlanet = planets.find(planet => planet.id === selectedPlanetId);
  
  if (!selectedPlanet) return null;
  
  const handleSizeChange = (e) => {
    onPlanetUpdate({
      ...selectedPlanet,
      size: parseFloat(e.target.value)
    });
  };
  
  const handleSpeedChange = (e) => {
    onPlanetUpdate({
      ...selectedPlanet,
      speed: parseFloat(e.target.value) / 1000 // Convert to appropriate scale
    });
  };
  
  const handleOrbitChange = (e) => {
    onPlanetUpdate({
      ...selectedPlanet,
      orbit: parseFloat(e.target.value)
    });
  };
  
  return (
    <div 
      style={{
        position: "fixed",
        right: isOpen ? 0 : "-250px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "250px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        borderRadius: "8px 0 0 8px",
        boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.3)",
        transition: "right 0.3s ease",
        zIndex: 10,
        padding: "15px",
        maxHeight: "80vh",
        overflowY: "auto"
      }}
    >
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "absolute",
          left: "-30px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "30px",
          height: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          border: "none",
          borderRadius: "5px 0 0 5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {isOpen ? ">" : "<"}
      </button>
      
      <h3 style={{ marginTop: 0, marginBottom: "15px", textAlign: "center" }}>Planet Controls</h3>
      
      {/* Planet Selector */}
      <div style={{ marginBottom: "20px" }}>
        <label 
          htmlFor="planet-select" 
          style={{ 
            display: "block", 
            marginBottom: "5px", 
            fontSize: "14px" 
          }}
        >
          Select Planet:
        </label>
        <select 
          id="planet-select"
          value={selectedPlanetId}
          onChange={(e) => setSelectedPlanetId(parseInt(e.target.value))}
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "4px",
            outline: "none"
          }}
        >
          {planets.map(planet => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Size Control */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <label htmlFor="size-slider" style={{ fontSize: "14px" }}>Size:</label>
          <span style={{ fontSize: "14px" }}>{selectedPlanet.size.toFixed(1)}</span>
        </div>
        <input 
          id="size-slider"
          type="range" 
          min="0.1" 
          max="3" 
          step="0.1" 
          value={selectedPlanet.size}
          onChange={handleSizeChange}
          style={{
            width: "100%",
            accentColor: "#4a9eff"
          }}
        />
      </div>
      
      {/* Speed Control */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <label htmlFor="speed-slider" style={{ fontSize: "14px" }}>Speed:</label>
          <span style={{ fontSize: "14px" }}>{(selectedPlanet.speed * 1000).toFixed(1)}</span>
        </div>
        <input 
          id="speed-slider"
          type="range" 
          min="0.5" 
          max="15" 
          step="0.5" 
          value={selectedPlanet.speed * 1000}
          onChange={handleSpeedChange}
          style={{
            width: "100%",
            accentColor: "#4a9eff"
          }}
        />
      </div>
      
      {/* Orbit Control */}
      <div style={{ marginBottom: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
          <label htmlFor="orbit-slider" style={{ fontSize: "14px" }}>Orbit Distance:</label>
          <span style={{ fontSize: "14px" }}>{selectedPlanet.orbit.toFixed(1)}</span>
        </div>
        <input 
          id="orbit-slider"
          type="range" 
          min="3" 
          max="30" 
          step="0.5" 
          value={selectedPlanet.orbit}
          onChange={handleOrbitChange}
          style={{
            width: "100%",
            accentColor: "#4a9eff"
          }}
        />
      </div>
      
      <div style={{ fontSize: "12px", opacity: 0.7, marginTop: "15px", textAlign: "center" }}>
        Drag sliders to adjust planet properties
      </div>
    </div>
  );
};

export default ControlPanel