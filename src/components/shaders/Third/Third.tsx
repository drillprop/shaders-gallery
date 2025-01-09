"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector2 } from "three";
import fragmentShader from "./thirdFragment.frag";
import vertexShader from "./thirdVertex.vert";

type ThirdProps = {
  x?: number;
  y?: number;
};

export const Third = ({ x = 10, y = 20 }: ThirdProps) => {
  const uniforms = useRef({
    uFrequency: { value: new Vector2(x, y) },
  });

  useFrame(() => {
    uniforms.current.uFrequency.value.x = x;
    uniforms.current.uFrequency.value.y = y;
  });

  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <rawShaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};
