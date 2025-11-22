import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  credential?: string;
  url?: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education: EducationItem[] = [
    {
      degree: "Master's degree in Data Science and Analytics",
      institution: 'University of Hertfordshire',
      period: 'Feb 2021 - Feb 2023',
      description: 'Specialized in Data Visualisation, Data Analysis, and Machine Learning',
    },
  ];

  const certifications: Certification[] = [
    {
      name: 'React: Using TypeScript',
      issuer: 'LinkedIn Learning',
      credential: 'View Certificate',
      url: 'https://www.linkedin.com/learning/certificates/8f6b272a2df36d8a55cce59eb3cd910e2ef24b5c4c85625fd79861c6c3e1b05e',
    },
    {
      name: 'Building React and Django Apps',
      issuer: 'LinkedIn Learning',
      credential: 'View Certificate',
      url: 'https://www.linkedin.com/learning/certificates/da6b3b9c101e54a0085f968c608a1ea9e7e43e8993448efc3fd7b4158e0862e9',
    },
    {
      name: 'React JS Essential Training',
      issuer: 'LinkedIn Learning',
      credential: 'View Certificate',
      url: 'https://www.linkedin.com/learning/certificates/2e7cbc6dd4f8ce3004a88d3932b64afdc60739b6bcfa3a80c2c0978ae8cdca8e',
    },
    {
      name: 'Python',
      issuer: 'Udemy',
      credential: 'View Certificate',
      url: 'https://www.udemy.com/certificate/UC-44208a8f-6b9b-447b-9706-e92cde604124/',
    },
    
  ];

  const award = {
    title: 'The Summit Individual Award',
    issuer: 'Mphasis',
    description: 'Recognized for outstanding performance as a full stack web developer, working independently on diverse projects.',
  };

  return (
    <section id="education" className="education" ref={ref}>
      <div className="education-container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education & Certifications</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="education-content">
          <motion.div
            className="education-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="subsection-title">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)' }}
              >
                <div className="education-icon">🎓</div>
                <div className="education-details">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-period">{edu.period}</p>
                  {edu.description && (
                    <p className="education-description">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                cert.url ? (
                  <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-card certification-link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: '#667eea' }}
                  >
                    <div className="certification-icon">📜</div>
                    <div className="certification-info">
                      <h4 className="certification-name">{cert.name}</h4>
                      <p className="certification-issuer">{cert.issuer}</p>
                    </div>
                    {cert.credential && <span className="credential-badge">{cert.credential}</span>}
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    className="certification-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: '#667eea' }}
                  >
                    <div className="certification-icon">📜</div>
                    <div className="certification-info">
                      <h4 className="certification-name">{cert.name}</h4>
                      <p className="certification-issuer">{cert.issuer}</p>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="award-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="award-card"
            whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)' }}
          >
            <div className="award-icon">🏆</div>
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
              <p className="award-issuer">Issued by {award.issuer}</p>
              <p className="award-description">{award.description}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
