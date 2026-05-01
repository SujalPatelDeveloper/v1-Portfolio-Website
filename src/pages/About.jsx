import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../components/About.css';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h1>
      </div>

      <div className="about-grid">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-text">
            I'm an Aspiring Full-Stack Developer skilled in React, Next.js, and real-time applications using WebSockets. 
            I'm experienced in building scalable, responsive web apps with a strong focus on performance and user experience. 
            Currently pursuing Computer Science Engineering at Adani University.
          </p>
          <div className="skills-container">
            <h3>My Toolkit</h3>
            <div className="skills-grid">
              {['React', 'Next.js', 'JavaScript', 'Python', 'Node.js', 'Socket.io', 'Supabase', 'Firebase', 'Framer Motion', 'GSAP', 'HTML / CSS'].map((skill, i) => (
                <motion.span 
                  key={skill} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="info-card glass">
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Ahmedabad, Gujarat</span>
            </div>
            <div className="info-item">
              <span className="info-label">Education</span>
              <span className="info-value">CS Engineering</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value">Open for Opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="extended-about"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3>Education & Journey</h3>
        <div className="education-block">
          <p><strong>Computer Science Engineering</strong> - Adani University</p>
          <p className="date">2023 – Present | Ahmedabad, Gujarat</p>
          <p className="cgpa">CGPA: 7.43</p>
        </div>
        <p>
          My journey in tech is driven by a curiosity for building real-time, interactive systems. 
          From mastering frontend frameworks like React and Next.js to implementing complex WebSocket synchronization 
          and full-stack integrations with Supabase, I strive to create software that feels alive and responsive.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
