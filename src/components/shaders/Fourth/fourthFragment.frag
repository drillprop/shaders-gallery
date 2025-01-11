precision mediump float;
varying vec3 vPosition;

void main() {
  gl_FragColor = vec4((vPosition.x + 0.5), 0.6, 0.5, 1.0);
} 