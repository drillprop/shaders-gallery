varying vec2 vUv;
varying float vTime;

uniform float uTime;

void main() {
  vUv = uv;
  vTime = uTime;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
