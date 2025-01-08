"use client";

import { vertexShader } from "./thirdVertex";
import { fragmentShader } from "./thirdFragment";
import { Scene } from "../../Scene/Scene";
import { useMemo } from "react";
import { Vector2 } from "three";

export const Third = () => {
  const uniforms = useMemo(
    () => ({
      uFrequency: { value: new Vector2(10, 20) },
    }),
    []
  );

  return (
    <Scene>
      <mesh>
        <planeGeometry args={[1, 1, 32, 32]} />
        <rawShaderMaterial
          transparent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </Scene>
  );
};
