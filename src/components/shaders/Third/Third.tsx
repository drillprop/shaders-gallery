import vertexShader from "./thirdVertex.vert";
import fragmentShader from "./thirdFragment.frag";
import { Scene } from "../../Scene/Scene";

export const Third = () => {
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
