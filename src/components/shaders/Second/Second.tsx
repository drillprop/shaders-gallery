import vertexShader from "./secondVertex.vert";
import fragmentShader from "./secondFragment.frag";
import { Scene } from "../../Scene/Scene";

export const Second = () => {
  return (
    <Scene>
      <mesh>
        <planeGeometry args={[10, 10, 32, 32]} />
        <rawShaderMaterial
          transparent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </Scene>
  );
};
