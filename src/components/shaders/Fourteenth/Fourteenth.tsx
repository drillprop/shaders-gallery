"use client";

import fragmentShader from "./fourteenthFragment.frag";
import vertexShader from "./fourteenthVertex.vert";
import { DoubleSide } from "three";

export const Fourteenth = () => {
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
