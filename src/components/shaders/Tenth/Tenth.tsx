"use client";

import { DoubleSide } from "three";
import fragmentShader from "./tenthFragment.frag";
import vertexShader from "./tenthVertex.vert";

export const Tenth = () => {
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
