"use client";

import { useRef } from "react";
import fragmentShader from "./twelfthFragment.frag";
import vertexShader from "./twelfthVertex.vert";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";

export const Twelfth = () => {
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
        uniforms={ref.current}
        side={DoubleSide}
      />
    </mesh>
  );
};
