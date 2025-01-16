varying vec2 vUv;

void main() {
  float strength = ceil(vUv.x * 20.0) / 20.0;

  gl_FragColor = vec4(strength, strength, strength, 1.0);
}
