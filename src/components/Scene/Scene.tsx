"use client";
import vertexShader from "./vertex.vert";
import fragmentShader from "./fragment.frag";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Scene = () => {
  const randomArray = new Float32Array((32 + 1) * (32 + 1)).map(() =>
    Math.random()
  );

  return (
    <Canvas className="fixed bg-black inset-0 w-screen h-screen">
      <OrbitControls />
      <mesh>
        <planeGeometry args={[10, 10, 32, 32]}>
          <bufferAttribute
            attach="attributes-aRandom"
            args={[randomArray, 1]}
          />
        </planeGeometry>
        <rawShaderMaterial
          transparent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </Canvas>
  );
};
