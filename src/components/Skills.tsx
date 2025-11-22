import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';
import './Skills.css';

interface FloatingBoxProps {
  position: [number, number, number];
  color: string;
}

const FloatingBox: React.FC<FloatingBoxProps> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.3;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Box ref={meshRef} args={[0.5, 0.5, 0.5]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.8}
        roughness={0.2}
      />
    </Box>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Redux', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 88 },
      ],
      boxPositions: [
        { position: [-1.5, 0.5, 0] as [number, number, number], color: '#667eea' },
        { position: [1.5, -0.5, 0] as [number, number, number], color: '#764ba2' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 88 },
        { name: 'Django REST API', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'Django ORM', level: 85 },
      ],
      boxPositions: [
        { position: [-1.2, 0.3, 0] as [number, number, number], color: '#4ade80' },
        { position: [1.2, -0.3, 0.5] as [number, number, number], color: '#667eea' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Jira', level: 85 },
        { name: 'Jest & Testing Library', level: 80 },
        { name: 'Agile/Scrum', level: 88 },
      ],
      boxPositions: [
        { position: [-1.3, 0.4, 0] as [number, number, number], color: '#fbbf24' },
        { position: [1.3, -0.4, 0] as [number, number, number], color: '#f687b3' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
          
        </motion.div>

        <div className="skills-content">
          <div className="skills-list">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
              >
                <div className="category-3d-background">
                  <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <pointLight position={[-10, -10, -5]} intensity={1.5} color="#764ba2" />
                    {category.boxPositions.map((box, boxIndex) => (
                      <FloatingBox key={boxIndex} position={box.position} color={box.color} />
                    ))}
                  </Canvas>
                </div>

                <div className="category-content">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
