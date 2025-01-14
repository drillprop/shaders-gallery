"use client";

import { DoubleSide } from "three";
import fragmentShader from "./eighthFragment.frag";
import vertexShader from "./eighthVertex.vert";

export const Eighth = () => {
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
