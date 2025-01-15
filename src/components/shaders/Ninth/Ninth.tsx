"use client";

import { DoubleSide } from "three";
import fragmentShader from "./ninthFragment.frag";
import vertexShader from "./ninthVertex.vert";

export const Ninth = () => {
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
