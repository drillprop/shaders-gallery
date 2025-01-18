varying vec2 vUv;
uniform float uTime;

void main() {
  float strength = abs(1.0 - cos(vUv.x * 60.0 + uTime * 2.0));
  strength *= abs(1.0 - cos(vUv.y * 60.0 + uTime * 2.0));

  float strength2 = sin(vUv.x * 2.0 + uTime * 2.0);
  strength2 *= sin(vUv.y + uTime * 1.0) / 2.5 + 0.1;

  strength = strength + strength2;

  gl_FragColor = vec4(strength, strength, strength, 1.0);
}
