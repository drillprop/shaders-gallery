import fragmentShader from "./secondFragment.frag";
import vertexShader from "./secondVertex.vert";

export const Second = () => {
  return (
    <mesh>
      <planeGeometry args={[10, 10, 32, 32]} />
      <rawShaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
