"use client";

import { DoubleSide } from "three";
import fragmentShader from "./eleventhFragment.frag";
import vertexShader from "./eleventhVertex.vert";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Eleventh = () => {
  const ref = useRef({
    uTime: { value: 0 },
  });

  useFrame(({ clock }) => {
    ref.current.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
        uniforms={ref.current}
      />
    </mesh>
  );
};
