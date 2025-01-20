varying vec2 vUv;

void main() {
  
  float strength = 0.05 / distance(vUv, vec2(0.5));

  strength += 0.012 / distance(vUv, vec2(0.2, 0.3));
  strength += 0.012 / distance(vUv, vec2(0.8, 0.3));
  strength += 0.012 / distance(vUv, vec2(0.2, 0.7));
  strength += 0.012 / distance(vUv, vec2(0.8, 0.7));

  gl_FragColor = vec4(strength, strength, strength, 1.0);
}
