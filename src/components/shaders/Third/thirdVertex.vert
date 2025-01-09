uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute vec2 uv;

uniform vec2 uFrequency;
uniform vec3 uRGB;

varying vec3 vColor;
varying vec3 vPosition;

void main() {
    
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.z += sin(modelPosition.x * uFrequency.x) * 0.1;
  modelPosition.z += sin(modelPosition.y * uFrequency.y) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  vColor = uRGB;
  vPosition = modelPosition.xyz;
  
  gl_Position = projectedPosition;
} 