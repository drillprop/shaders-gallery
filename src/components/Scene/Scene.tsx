"use client";
import { cn } from "@/utils/cn";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Canvas
      className={cn("bg-black", className)}
      camera={{ position: [0, 0, 10] }}
    >
      <OrbitControls />
      {children}
    </Canvas>
  );
};
