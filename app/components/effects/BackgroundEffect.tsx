import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Particles() {
  const points = useRef()
  
  useFrame((state) => {
    points.current.rotation.y += 0.001
    points.current.rotation.x += 0.001
  })

  const particlesCount = 5000
  const positions = new Float32Array(particlesCount * 3)
  
  for(let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#8BE8CB"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #040D21, #0A1930)' }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
} 