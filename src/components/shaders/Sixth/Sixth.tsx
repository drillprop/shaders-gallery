"use client";

import { DoubleSide } from "three";
import fragmentShader from "./sixthFragment.frag";
import vertexShader from "./sixthVertex.vert";

export const Sixth = () => {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
      />
    </mesh>
  );
};
