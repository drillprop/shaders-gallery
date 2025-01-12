"use client";

import { Scene } from "@/components/Scene/Scene";
import { Fifth } from "@/components/shaders/Fifth/Fifth";
import { useGui } from "@/hooks/useGui";

const initialFrequency = {
  x: 2,
  y: 5,
};

const controls = {
  x: { min: 0, max: 50, step: 0.01 },
  y: { min: 0, max: 50, step: 0.01 },
};

export default function FifthShaderPage() {
  const frequency = useGui(initialFrequency, controls, {
    title: "Frequency Controls",
    width: 300,
  });

  return (
    <Scene>
      <Fifth x={frequency.x} y={frequency.y} />
    </Scene>
  );
}
