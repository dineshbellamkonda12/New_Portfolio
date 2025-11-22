import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  category: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      title: 'Rainfall Data Prediction and Visualisation',
      description: 'Web application for interactive data filtering and rainfall prediction using Linear Regression Machine Learning Model. Built with Python Django backend and responsive frontend.',
      technologies: ['Python', 'Django', 'Machine Learning', 'JavaScript', 'HTML/CSS'],
      link: 'https://github.com/dineshbellamkonda12/Data-Visualization-Tool-Web-Based-.git',
      category: 'ml',
    },
    {
      title: 'DataFilter',
      description: 'Interactive web application enabling users to extract and filter table data based on custom conditions with an intuitive interface.',
      technologies: ['Python', 'Django', 'JavaScript', 'HTML/CSS'],
      link: 'https://github.com/dineshbellamkonda12/JLR-Coding-Challenge-Data-Viewer.git',
      category: 'fullstack',
    },
    {
      title: 'Cars Website (Vertu Motors Clone)',
      description: 'Fully responsive clone of vertumotors.com designed with modern web standards, compatible across mobile and desktop devices.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/dineshbellamkonda12/Vertu-Motors-Website.git',
      category: 'frontend',
    },
    {
      title: 'Spending Monitor',
      description: 'Personal finance tracker built with React Hooks and Context API to monitor and manage spending expenses efficiently.',
      technologies: ['React', 'React Hooks', 'Context API', 'CSS3'],
      link: 'https://github.com/dineshbellamkonda12/Spending-Monitor.git',
      category: 'frontend',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using Open Weather API with CI/CD deployment pipeline on Netlify for seamless updates.',
      technologies: ['React', 'JavaScript', 'API Integration', 'Netlify'],
      link: 'https://github.com/dineshbellamkonda12/Weather-App.git',
      category: 'frontend',
    },
    {
      title: 'Object Detection',
      description: 'Real-time object detection system using YOLO algorithm for high-accuracy identification and localization of multiple objects.',
      technologies: ['Python', 'YOLO', 'Computer Vision', 'Machine Learning'],
      link: 'https://github.com/dineshbellamkonda12/Object-Detection-App-Using-Yolo.git',
      category: 'ml',
    },
    {
      title: 'AA Cloud Solutions',
      description: 'Professional business website with integrated HubSpot chat and Forminator forms, built using React and WordPress.',
      technologies: ['React', 'WordPress', 'HubSpot', 'HTML/CSS'],
      link: 'https://aacloudsolutions.co.uk/',
      category: 'fullstack',
    },
    {
      title: 'Heart Disease Prediction',
      description: 'ML application using K-Nearest Neighbour, Random Forest, Gradient Boosting, and Logistic Regression for heart disease detection.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'scikit-learn'],
      link: 'https://github.com/dineshbellamkonda12/Heart-Disease-Detection-and-Prediction.git',
      category: 'ml',
    },
    {
      title: 'Movie Tracking System',
      description: 'Comprehensive movie database search with genre-based filtering capabilities built with React and Bootstrap.',
      technologies: ['React', 'Bootstrap', 'JavaScript', 'API'],
      link: 'https://github.com/dineshbellamkonda12/Movie-Tracking-System.git',
      category: 'frontend',
    },
    {
      title: 'To Do List API',
      description: 'RESTful API supporting CRUD operations for tasks and projects with advanced filtering and search functionalities.',
      technologies: ['Django', 'Django REST API', 'Python', 'MySQL'],
      link: 'https://github.com/dineshbellamkonda12/todoListAPI.git',
      category: 'backend',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ml', label: 'Machine Learning' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            A showcase of my work spanning full-stack development, machine learning, and modern web applications
          </p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)' }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
