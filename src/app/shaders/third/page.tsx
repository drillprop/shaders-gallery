"use client";

import { Third } from "@/components/shaders/Third/Third";
import { useRef, useEffect, useState } from "react";
import GUI from "lil-gui";
import { Scene } from "@/components/Scene/Scene";
import { useDebugParam } from "@/hooks/useDebugParam";

export default function ThirdShaderPage() {
  const guiRef = useRef<GUI | null>(null);
  const [frequency, setFrequency] = useState({
    x: 40,
    y: 20,
  });
  const [rgb, setRgb] = useState({
    r: 0.6,
    g: 0.3,
    b: 0.1,
  });
  const isDebugOn = useDebugParam();

  useEffect(() => {
    if (!isDebugOn) {
      return;
    }
    guiRef.current = new GUI();

    const gui = guiRef.current;

    gui
      .add(rgb, "r")
      .min(0)
      .max(1)
      .step(0.01)
      .onChange((value: number) => {
        setRgb((prev) => ({ ...prev, r: value }));
      });

    gui
      .add(rgb, "g")
      .min(0)
      .max(1)
      .step(0.01)
      .onChange((value: number) => {
        setRgb((prev) => ({ ...prev, g: value }));
      });

    gui
      .add(rgb, "b")
      .min(0)
      .max(1)
      .step(0.01)
      .onChange((value: number) => {
        setRgb((prev) => ({ ...prev, b: value }));
      });

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
      <Third x={frequency.x} y={frequency.y} r={rgb.r} g={rgb.g} b={rgb.b} />
    </Scene>
  );
}
