"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector2 } from "three";
import fragmentShader from "./fifthFragment.frag";
import vertexShader from "./fifthVertex.vert";

type FifthProps = {
  x?: number;
  y?: number;
};

export const Fifth = ({ x = 2, y = 5 }: FifthProps) => {
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
