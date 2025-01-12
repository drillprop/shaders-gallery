"use client";

import { Scene } from "@/components/Scene/Scene";
import { Third } from "@/components/shaders/Third/Third";
import { useGui } from "@/hooks/useGui";

export default function ThirdShaderPage() {
  const controls = useGui(
    { r: 0.6, g: 0.3, b: 0.1, x: 2, y: 5 },
    {
      r: { min: 0, max: 1, step: 0.01 },
      g: { min: 0, max: 1, step: 0.01 },
      b: { min: 0, max: 1, step: 0.01 },
      x: { min: 0, max: 50, step: 0.01 },
      y: { min: 0, max: 50, step: 0.01 },
    }
  );

  return (
    <Scene>
      <Third
        x={controls.x}
        y={controls.y}
        r={controls.r}
        g={controls.g}
        b={controls.b}
      />
    </Scene>
  );
}
