import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './About.css';

// Floating geometric shape component
const FloatingShape = ({ position, shape }: { position: [number, number, number]; shape: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'box' && <boxGeometry args={[0.5, 0.5, 0.5]} />}
      {shape === 'sphere' && <sphereGeometry args={[0.3, 32, 32]} />}
      {shape === 'torus' && <torusGeometry args={[0.3, 0.1, 16, 100]} />}
      <meshStandardMaterial
        color="#667eea"
        emissive="#667eea"
        emissiveIntensity={0.8}
        transparent
        opacity={0.9}
        wireframe
      />
    </mesh>
  );
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <motion.div className="about-3d-background" style={{ y }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#764ba2" />

          <FloatingShape position={[-3, 2, 0]} shape="box" />
          <FloatingShape position={[3, -1, 0]} shape="sphere" />
          <FloatingShape position={[0, 1, -2]} shape="torus" />
          <FloatingShape position={[-2, -2, 1]} shape="sphere" />
          <FloatingShape position={[2, 2, -1]} shape="box" />
        </Canvas>
      </motion.div>

      <div className="about-container" ref={ref}>
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="about-subtitle">
              Dynamic Full-Stack Developer Creating Exceptional Web Solutions
            </h3>
            <p>
              I'm Sai Dinesh Bellamkonda, a goal-oriented Full Stack Developer with 6+ years
              of experience crafting exceptional web solutions. I specialize in delivering
              high-quality applications and optimizing user experiences.

              My expertise spans across modern technologies including HTML5, CSS3, Tailwind CSS,
              JavaScript, TypeScript, React, Redux, Python, Django, and MySQL. I thrive in
              dynamic environments, utilizing AWS for deployments and Agile methodologies for
              efficient project management.

              Currently working at OpenSolar, I'm contributing to the world's first free AI-powered
              solar operating system, developing advanced geomapping features, user verification flows,
              and registration systems that empower solar professionals across 160 countries. I'm
              passionate about creating impactful solutions that make a difference.
            </p>

            
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
