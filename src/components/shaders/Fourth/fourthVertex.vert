uniform vec2 uFrequency;
uniform float uTime;

varying vec3 vPosition;

void main() {
    
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.08;
  modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.05;
  

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  vPosition = modelPosition.xyz;
  
  gl_Position = projectedPosition;
} 