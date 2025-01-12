precision mediump float;

uniform vec2 uFrequency;
uniform float uTime;

varying vec3 vPosition;
varying float vElevation;
varying vec2 vUv;


void main() {

  float value = step(0.5, vUv.y);
  vec3 color = vec3(1.0, value, value);

  color *= vElevation * 2.0 + 1.2;
  gl_FragColor = vec4(color, 1.0);
} 