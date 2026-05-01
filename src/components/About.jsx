import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate designer and developer based in India, specializing 
            in creating digital experiences that are both beautiful and functional. 
            I love blending 3D illustrations with clean UI design to build 
            something truly unique.
          </p>
          <div className="skills-container">
            <h3>My Toolkit</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Spline 3D</span>
              <span className="skill-tag">CSS / SCSS</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="info-card glass">
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">India, Global</span>
            </div>
            <div className="info-item">
              <span className="info-label">Experience</span>
              <span className="info-value">3+ Years</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value">Open for Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
