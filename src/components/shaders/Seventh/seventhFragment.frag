varying vec2 vUv;

void main() {
  float baseX = vUv.x + 0.04;
  float baseY = vUv.y + 0.04;

  float strength = step(0.8, mod(baseX * 10.0, 1.0)) + step(0.8, mod(baseY * 10.0, 1.0));


  gl_FragColor = vec4(strength, strength, strength , 1.0);
}

