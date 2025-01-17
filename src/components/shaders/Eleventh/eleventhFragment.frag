varying vec2 vUv;
varying float vTime;

void main() {
  float strength = abs(1.0 - cos(vUv.x * 60.0 + vTime * 2.0));
  strength *= abs(1.0 - cos(vUv.y * 60.0 + vTime * 2.0));

  float strength2 = sin(vUv.x * 2.0 + vTime * 2.0);
  strength2 *= sin(vUv.y + vTime * 1.0) / 2.5 + 0.1;

  strength = strength + strength2;

  gl_FragColor = vec4(strength, strength, strength, 1.0);
}
