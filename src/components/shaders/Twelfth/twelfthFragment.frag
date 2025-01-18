varying vec2 vUv;
uniform float uTime;

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  float strength = random(vec2(ceil(vUv.x * 40.0) / 10.0, ceil(vUv.y * 40.0) / 10.0)); 
  strength *= sin(uTime * 0.0000009) + 1.2; 
  strength *= random(vec2(strength, strength));
  
  gl_FragColor = vec4(strength - 0.8, strength -0.3, strength - 0.7, 1.0);
}


