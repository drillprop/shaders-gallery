varying vec2 vUv;

void main() {

  float strength = step(0.1, mod(vUv.x * 10.0, 1.0)) * step(0.1, mod(vUv.y * 10.0, 1.0));

  gl_FragColor = vec4(strength, strength, strength , 1.0);
  
}
