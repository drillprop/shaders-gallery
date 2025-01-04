import vertexShader from "./secondVertex.vert";
import fragmentShader from "./secondFragment.frag";
import { Scene } from "../Scene/Scene";

export const Second = () => {
  const randomArray = new Float32Array((32 + 1) * (32 + 1)).map(() =>
    Math.random()
  );
  return (
    <Scene>
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
    </Scene>
  );
};
