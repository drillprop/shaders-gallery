# GLSL Shader Variables Guide

This document explains the main types of variables used in GLSL shaders and their implementation in Three.js.

## Attributes

Attributes are vertex-specific data that can only be used in the vertex shader.

### Key characteristics:

- Specific to each vertex
- Values can be different for each vertex
- Only accessible in vertex shader
- In Three.js, typically defined in geometry

### Common examples:

- position (vertex position)
- normal (vertex normal)
- uv (texture coordinates)
- color (vertex color)

### Three.js example:

```javascript
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array([
  -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0,
]);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
```

## Uniforms

Uniforms are global shader variables that remain constant across all vertices and fragments.

### Key characteristics:

- Global for the entire shader
- Same value for all vertices and fragments
- Accessible in both vertex and fragment shaders
- In Three.js, typically updated in render loop

### Common examples:

- time
- resolution
- transformation matrices
- material colors

### Three.js example:

```javascript
const uniforms = {
  time: { value: 0 },
  color: { value: new THREE.Color(0xff0000) },
};

// In render loop:
uniforms.time.value += 0.01;
```

## Varying

Varying variables pass data from vertex shader to fragment shader with interpolation.

### Key characteristics:

- Pass data between vertex and fragment shaders
- Values are interpolated between vertices
- Declared in both shaders
- In modern GLSL (ES 3.0+) known as "in/out"

### Common uses:

- UV coordinates for texture mapping
- Normals for lighting
- Vertex colors
- Positions for special effects

### GLSL example:

```glsl
// Vertex Shader
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normal;
  gl*Position = projectionMatrix * modelViewMatrix \_ vec4(position, 1.0);
}

// Fragment Shader
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  // vUv and vNormal are interpolated
  gl_FragColor = vec4(vUv, 0.0, 1.0);
}
```

## Comparison Table

| Feature       | Attributes      | Uniforms        | Varying                         |
| ------------- | --------------- | --------------- | ------------------------------- |
| Scope         | Per vertex      | Global          | Interpolated between vertices   |
| Shader Access | Vertex only     | Both            | Vertex writes, Fragment reads   |
| Modification  | Rarely modified | Often updated   | Set in vertex, read in fragment |
| Memory Usage  | Higher          | Lower           | Moderate                        |
| Common Use    | Vertex data     | Global settings | Data passing between shaders    |

## Performance Considerations

### Attributes

- Larger memory footprint
- Efficient for per-vertex data
- Limited by vertex count

### Uniforms

- Small memory footprint
- Ideal for global values
- Fast updates

### Varying

- Interpolation costs GPU power
- Limited by hardware capabilities
- Use sparingly for better performance

## Best Practices

1. Use attributes for data that differs per vertex
2. Use uniforms for global values that change frequently
3. Use varying only when necessary to pass data between shaders
4. Consider precision requirements (lowp, mediump, highp)
5. Monitor performance impact when using multiple varying variables
