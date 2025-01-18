"use client";

import fragmentShader from "./thirteenthFragment.frag";
import vertexShader from "./thirteenthVertex.vert";
import { DoubleSide } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Thirteenth = () => {
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
