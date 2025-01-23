"use client";

import { useFrame } from "@react-three/fiber";
import fragmentShader from "./fourteenthFragment.frag";
import vertexShader from "./fourteenthVertex.vert";
import { DoubleSide } from "three";
import { useRef } from "react";

export const Fourteenth = () => {
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
