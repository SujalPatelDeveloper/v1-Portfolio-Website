import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="greeting" data-code='{"element": "p", "text": "Hi, my name is"}'>Hi, my name is</p>
          <h1 className="name-title" data-code='{"element": "h1", "text": "Sujal Patel."}'>Sujal Patel.</h1>
          <h2 className="role-title glitch-text" data-text="I build things for the web." data-code='{"element": "h2", "text": "I build things for the web."}'>I build things for the web.</h2>
          <p className="hero-desc" data-code='{"element": "p", "content": "description"}'>
            I'm a software engineer specializing in building (and occasionally designing) exceptional, high-performance digital experiences.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary" data-code='{"action": "navigate", "target": "#work"}'>Check out my work</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
