"use client";

import { Third } from "@/components/shaders/Third/Third";
import { useRef, useEffect, useState } from "react";
import GUI from "lil-gui";
import { Scene } from "@/components/Scene/Scene";

export default function ThirdShaderPage() {
  const guiRef = useRef<GUI | null>(null);
  const [frequency, setFrequency] = useState({
    x: 10,
    y: 20,
  });

  useEffect(() => {
    guiRef.current = new GUI();

    const gui = guiRef.current;

    gui
      .add(frequency, "x")
      .min(0)
      .max(50)
      .step(0.01)
      .onChange((value: number) => {
        setFrequency((prev) => ({ ...prev, x: value }));
      });

    gui
      .add(frequency, "y")
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
  }, []);

  return (
    <Scene>
      <Third x={frequency.x} y={frequency.y} />
    </Scene>
  );
}
