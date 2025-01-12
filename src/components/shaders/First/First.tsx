import fragmentShader from "./firstFragment.frag";
import vertexShader from "./firstVertex.vert";

export const First = () => {
  const randomArray = new Float32Array((32 + 1) * (32 + 1)).map(() =>
    Math.random()
  );

  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]}>
        <bufferAttribute attach="attributes-aRandom" args={[randomArray, 1]} />
      </planeGeometry>
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
