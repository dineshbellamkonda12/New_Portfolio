import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  project?: {
    name: string;
    domain: string;
    description: string;
  };
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      title: 'Full Stack Developer',
      company: 'OpenSolar',
      location: 'Remote',
      period: 'Sep 2024 - Present',
      description: [
        'Developed backend support for the ENA integration',
        'Designed and implemented 2D, 3D and oblique map support via integration with Vexcel imagery',
        'Led solution design and development of geomapping features including ArcGIS and OpenStreetMap coverage for the Netherlands',
        'Developed the full stack organisation verification feature: user registration, account creation, SMS and email verification flows',
        'Delivered "Registration Flow 3.0" (full stack) for improved user onboarding',
        'Built front-end A/B-testing architecture to route users between legacy and new registration flows, enabling data-driven UX optimisation',
        'Owned and maintained all the above systems in production: imagery integrations, registration flows, verification pipelines',
        'Wrote comprehensive unit, integration and end-to-end tests using Playwright to ensure system stability and quality',
        'Leveraged Python and Django for backend services, React on the frontend, and MySQL as the database engine',
        'Operating in an Agile/Scrum environment, collaborating across teams to deliver incremental improvements',
      ],
      project: {
        name: 'OPENSOLAR 3.0 PLATFORM',
        domain: 'Solar Energy',
        description: 'Contributed to the world\'s first free AI-powered solar operating system, enabling 25,000+ solar professionals across 160 countries to design, sell, and manage solar projects with advanced geomapping and user verification features.',
      },
    },
    {
      title: 'Full Stack Developer',
      company: 'CloudFirst Technologies',
      location: 'Chelmsford, England',
      period: 'Apr 2023 - Jul 2024',
      description: [
        'Engineered a user-centric case management tool, boosting customer satisfaction by 20%',
        'Designed a performance dashboard for customer support, reducing average resolution time by 15%',
        'Integrated live chat functionality within the case management tool to expedite customer query resolutions',
        'Developed and secured RESTful APIs using Django REST Framework',
        'Automated deployment to AWS using CI/CD pipelines with Git and AWS Lambda',
        'Conducted rigorous Unit Testing and adopted Test-Driven Development (TDD) practices',
        'Enhanced application security through OAuth integration and session management',
      ],
      project: {
        name: 'CLICKAPPORTER',
        domain: 'Retail',
        description: 'Developed a dynamic e-commerce application offering users the convenience of selecting from tens of millions of items, deliverable anywhere in Morocco.',
      },
    },
    {
      title: 'Associate Software Engineer',
      company: 'Mphasis',
      location: 'India',
      period: 'Aug 2018 - Jan 2021',
      description: [
        'Developed an efficient online proofing interface for extraction, correction, and submission of proofs',
        'Utilized HTML5, CSS3, JavaScript, jQuery, and React JS for responsive website development',
        'Constructed RESTful APIs using Django\'s REST framework and Django ORM',
        'Integrated Python, Django, and MySQL for interactive web pages with robust database functionalities',
        'Managed mainframe systems to support legacy applications',
        'Created custom API keys and implemented Google OAuth for Google contacts access',
        'Collaborated with cross-functional teams for requirements gathering and estimates',
      ],
      project: {
        name: 'PROOF CENTRAL',
        domain: 'Publishing',
        description: 'Developed an online proofing interface tool to efficiently apply corrections, comments, and change requests.',
      },
    },
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          className="experience-section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            6+ years of professional experience in full-stack development
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)' }}
            >
              <div className="experience-icon">💼</div>

              <div className="experience-card-header">
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-location">📍 {exp.location}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>

              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {exp.project && (
                <div className="project-highlight">
                  <div className="project-highlight-header">
                    <h5 className="project-highlight-title">🚀 Key Project</h5>
                    <span className="project-domain">{exp.project.domain}</span>
                  </div>
                  <h6 className="project-name">{exp.project.name}</h6>
                  <p className="project-description">{exp.project.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
