#!/bin/bash

# Prompt for the shader name
read -p "Enter shader name (e.g. cool-shader or Cool Shader): " input_name

# Replace spaces and hyphens with underscore temporarily
temp_name=$(echo "$input_name" | tr '[:upper:]' '[:lower:]' | sed 's/[ -]/_/g')

# Convert to PascalCase for component name
name=""
prev_char="_"
for (( i=0; i<${#temp_name}; i++ )); do
    curr_char="${temp_name:$i:1}"
    if [ "$prev_char" = "_" ]; then
        name+="$(echo "$curr_char" | tr '[:lower:]' '[:upper:]')"
    elif [ "$curr_char" != "_" ]; then
        name+="$curr_char"
    fi
    prev_char="$curr_char"
done

# Create camelCase version for shader files
name_lower="$(echo "${name:0:1}" | tr '[:upper:]' '[:lower:]')${name:1}"

# Create directory structure
dir="src/components/shaders/$name"
mkdir -p "$dir"

# Create component file
cat > "$dir/$name.tsx" << EOL
"use client";

import fragmentShader from "./${name_lower}Fragment.frag";
import vertexShader from "./${name_lower}Vertex.vert";
import { DoubleSide } from "three";

export const $name = () => {
  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
      />
    </mesh>
  );
};
EOL

# Create minimal vertex shader
cat > "$dir/${name_lower}Vertex.vert" << EOL
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
EOL

# Create minimal fragment shader
cat > "$dir/${name_lower}Fragment.frag" << EOL
varying vec2 vUv;

void main() {
  gl_FragColor = vec4(vUv, 0.0, 1.0);
}
EOL

echo "Created shader component '$name' with all necessary files in $dir" 