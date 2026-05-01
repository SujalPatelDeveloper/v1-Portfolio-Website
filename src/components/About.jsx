import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-header">
        <h2 className="section-title">About Me</h2>
        <Link to="/about" className="btn btn-outline btn-sm">
          Read Full Story
        </Link>
      </div>
      <div className="about-grid">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-text">
            I'm an Aspiring Full-Stack Developer skilled in React, Next.js, and real-time applications using WebSockets. 
            I'm experienced in building scalable, responsive web apps with a strong focus on performance and user experience.
          </p>
          <div className="skills-container">
            <h3>My Toolkit</h3>
            <div className="skills-grid">
              {['React', 'Next.js', 'JavaScript', 'Node.js', 'Socket.io', 'Supabase'].map((skill, i) => (
                <motion.span 
                  key={skill} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
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
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
              <span className="info-value">Open for Work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

