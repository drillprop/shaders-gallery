"use client";

import { Scene } from "@/components/Scene/Scene";
import { Fifth } from "@/components/shaders/Fifth/Fifth";
import { useDebugParam } from "@/hooks/useDebugParam";
import GUI from "lil-gui";
import { useEffect, useRef, useState } from "react";

const initialFrequency = {
  x: 2,
  y: 5,
};

export default function FifthShaderPage() {
  const guiRef = useRef<GUI | null>(null);

  const [frequency, setFrequency] = useState(initialFrequency);

  const isDebugOn = useDebugParam();

  useEffect(() => {
    if (!isDebugOn) {
      return;
    }
    guiRef.current = new GUI();

    const gui = guiRef.current;

    gui
      .add(initialFrequency, "x")
      .min(0)
      .max(50)
      .step(0.01)
      .onChange((value: number) => {
        setFrequency((prev) => ({ ...prev, x: value }));
      });

    gui
      .add(initialFrequency, "y")
      .min(0)
      .max(50)
      .step(0.01)
      .onChange((value: number) => {
        setFrequency((prev) => ({ ...prev, y: value }));
      });

    return () => {
      if (guiRef.current) {
        guiRef.current.destroy();
        guiRef.current = null;
      }
    };
  }, [isDebugOn]);

  return (
    <Scene>
      <Fifth x={frequency.x} y={frequency.y} />
    </Scene>
  );
}
