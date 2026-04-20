import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';
import './ParticlesBackground.css';

const ParticleField: React.FC<{ color: string }> = ({ color }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const particleCount = 2000;
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
};

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();
  const color = theme === 'dark' ? '#667eea' : '#8b5cf6';
  const opacity = theme === 'dark' ? 0.3 : 0.35;

  return (
    <div className="particles-background" style={{ opacity }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ParticleField color={color} />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
