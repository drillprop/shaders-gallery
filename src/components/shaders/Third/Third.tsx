"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector2, Vector3 } from "three";
import fragmentShader from "./thirdFragment.frag";
import vertexShader from "./thirdVertex.vert";

type ThirdProps = {
  x?: number;
  y?: number;
  r?: number;
  g?: number;
  b?: number;
};

export const Third = ({
  x = 10,
  y = 40,
  r = 0.6,
  g = 0.3,
  b = 0.1,
}: ThirdProps) => {
  const uniforms = useRef({
    uFrequency: { value: new Vector2(x, y) },
    uRGB: { value: new Vector3(r, g, b) },
  });

  useFrame(() => {
    uniforms.current.uFrequency.value = new Vector2(x, y);
    uniforms.current.uRGB.value = new Vector3(r, g, b);
  });

  return (
    <mesh>
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
