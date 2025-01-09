"use client";
import { cn } from "@/utils/cn";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene = ({
  children,
  className,
  cameraPosition = [0, 0, 1],
}: {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
}) => {
  return (
    <Canvas
      className={cn("bg-black", className)}
      camera={{ position: cameraPosition }}
    >
      <OrbitControls />
      {children}
    </Canvas>
  );
};
