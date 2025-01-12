"use client";

import { Scene } from "@/components/Scene/Scene";
import { Fourth } from "@/components/shaders/Fourth/Fourth";
import { useGui } from "@/hooks/useGui";

export default function FourthShaderPage() {
  const frequency = useGui(
    { x: 2, y: 5 },
    { x: { min: 0, max: 50, step: 0.01 }, y: { min: 0, max: 50, step: 0.01 } }
  );

  return (
    <Scene>
      <Fourth x={frequency.x} y={frequency.y} />
    </Scene>
  );
}
