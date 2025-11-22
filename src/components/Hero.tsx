import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import './Hero.css';

// Atom structure component
const Atom = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <Sphere args={[0.08, 32, 32]}>
        <meshStandardMaterial color="#667eea" emissive="#667eea" emissiveIntensity={0.5} />
      </Sphere>
    </mesh>
  );
};

// Interconnected web/network structure
const ScrollAnimatedNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate atom positions in a molecular structure
  const atomPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    // Central atom
    positions.push([0, 0, 0]);
    // Surrounding atoms in a tetrahedral structure
    positions.push([1.5, 0, 0]);
    positions.push([-1.5, 0, 0]);
    positions.push([0, 1.5, 0]);
    positions.push([0, -1.5, 0]);
    positions.push([0, 0, 1.5]);
    positions.push([0, 0, -1.5]);
    // Additional outer layer
    positions.push([1, 1, 1]);
    positions.push([1, 1, -1]);
    positions.push([1, -1, 1]);
    positions.push([1, -1, -1]);
    positions.push([-1, 1, 1]);
    positions.push([-1, 1, -1]);
    positions.push([-1, -1, 1]);
    positions.push([-1, -1, -1]);
    return positions;
  }, []);

  // Generate connections between atoms
  const connections = useMemo(() => {
    const lines: [number, number][] = [];
    // Connect central atom to surrounding atoms
    for (let i = 1; i < 7; i++) {
      lines.push([0, i]);
    }
    // Connect surrounding atoms to outer layer
    lines.push([1, 7], [1, 8]);
    lines.push([2, 11], [2, 12]);
    lines.push([3, 7], [3, 11]);
    lines.push([4, 9], [4, 13]);
    lines.push([5, 7], [5, 9]);
    lines.push([6, 8], [6, 10]);
    return lines;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotate the entire structure
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.1) * 0.2;

      // Set constant scale
      const scale = 1.5;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Render atoms */}
      {atomPositions.map((pos, index) => (
        <Atom key={index} position={pos} />
      ))}

      {/* Render connections between atoms */}
      {connections.map(([start, end], index) => (
        <Line
          key={`line-${index}`}
          points={[atomPositions[start], atomPositions[end]]}
          color="#764ba2"
          lineWidth={2}
          opacity={0.6}
          transparent
        />
      ))}

      {/* Orbital rings for added effect */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#667eea" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#764ba2" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#f687b3" transparent opacity={0.25} />
      </mesh>
    </group>
  );
};

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-3d-background">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#764ba2" />
          <pointLight position={[5, 5, 5]} intensity={0.6} color="#667eea" />
          <ScrollAnimatedNetwork />
        </Canvas>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="badge-dot"></span>
            Available for Work
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            
            <span className="gradient-text">Sai Dinesh Bellamkonda</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Full Stack Web Developer
          </motion.h2>

          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              View Projects
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/sai-dinesh-161a0a269"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://github.com/dineshbellamkonda12"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:dineshbellamkonda@icloud.com"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
