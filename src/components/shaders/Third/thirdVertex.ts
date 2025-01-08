export const vertexShader = /* glsl */ `
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;
attribute vec2 uv;

uniform vec2 uFrequency;
varying float vColor;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * uFrequency.x) * 0.1;
    modelPosition.z += sin(modelPosition.y * uFrequency.y) * 0.1;
    vColor = modelPosition.z;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectedPosition;
}`;
