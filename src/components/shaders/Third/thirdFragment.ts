export const fragmentShader = /* glsl */ `
precision mediump float;
varying float vColor;

void main() {
  gl_FragColor = vec4(vColor * 5.0, 0.8, 0.7, 1.0);
}`;
