varying vec2 vUv;
uniform float uTime;

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  float strength = random(vec2(1.0, ceil(vUv.y * 40.0 + vUv.x * 80.0) / 10.0));

  strength *= sin(uTime * 0.000002) + 1.2; 
  strength *= random(vec2(strength, strength));

  strength = smoothstep(0.5, 0.7, strength);
  
  gl_FragColor = vec4(strength, strength, strength, 1.0);
}


