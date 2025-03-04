import React from "react";
import { Sphere } from "@react-three/drei";

const Sun = () => {
  return (
    <Sphere args={[2, 32, 32]}>
      <meshBasicMaterial attach="material" color="yellow" />
    </Sphere>
  );
};

export default Sun;
