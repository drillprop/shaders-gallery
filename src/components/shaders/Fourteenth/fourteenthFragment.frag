varying vec2 vUv;
uniform float uTime;

void main() {
  float sinus = sin(uTime * 2.0) + 3.0;

  float strength = 0.02 / distance(vec2(vUv.x / 4.0, vUv.y), vec2(0.5 / 4.0, 0.5));
  strength *= 0.02 / distance(vec2(vUv.x, vUv.y / 4.0), vec2(0.5, 0.5 / 4.0));

  strength *= sinus;


  gl_FragColor = vec4(strength, strength, strength, 1.0);
}
