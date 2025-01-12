"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector2 } from "three";
import fragmentShader from "./fourthFragment.frag";
import vertexShader from "./fourthVertex.vert";

type FourthProps = {
  x?: number;
  y?: number;
};

export const Fourth = ({ x = 2, y = 5 }: FourthProps) => {
  const uniforms = useRef({
    uFrequency: { value: new Vector2(x, y) },
    uTime: { value: 0 },
  });

  useFrame(({ clock }) => {
    uniforms.current.uFrequency.value = new Vector2(x, y);
    uniforms.current.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh scale={[1, 2 / 3, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};
