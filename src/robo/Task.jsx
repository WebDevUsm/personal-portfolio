import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Robot } from './robo'
import { Environment, OrbitControls } from '@react-three/drei'

const Task = () => {
  return (
   <Canvas style={{height:"70vh", width:"100%"}}>
    <Environment preset='city' />
    <OrbitControls 
    enableZoom={false}
    // enableRotate={false}
    />
<Robot />

   </Canvas>
  )
}

export default Task