import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot (props) {
  const { nodes, materials } = useGLTF('/robot.glb')
  return (
    <group {...props} dispose={null}>
      <group >
        <group  scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere006_Material_1_0.geometry}
            material={materials.Material_1}
            position={[2.216, 0, 0.002]}
            rotation={[-Math.PI / 2, 0, 11]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/robot.glb')
