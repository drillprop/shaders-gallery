"use client";

import fragmentShader from "./seventhFragment.frag";
import vertexShader from "./seventhVertex.vert";

export const Seventh = () => {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
