"use client";

import { Fourth } from "@/components/shaders/Fourth/Fourth";
import { useRef, useEffect, useState } from "react";
import GUI from "lil-gui";
import { Scene } from "@/components/Scene/Scene";

export default function FourthShaderPage() {
  const guiRef = useRef<GUI | null>(null);
  const [frequency, setFrequency] = useState({
    x: 2,
    y: 5,
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
      <Fourth x={frequency.x} y={frequency.y} />
    </Scene>
  );
}
