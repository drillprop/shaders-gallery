precision mediump float;
varying vec3 vColor;
varying vec3 vPosition;

void main() {
  gl_FragColor = vec4(vColor.x, vColor.y, vColor.z * vPosition.x / vPosition.z, 1.0);
} 