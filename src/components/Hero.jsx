import React from 'react';
import './Hero.css';
import heroChar from '../assets/hero_character.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="role-badge tag">UI / Visual Designer</div>
          <h1 className="hero-title">
            PORTFOLIO <br />
            <span className="text-outline">DESIGN</span>
          </h1>
          <p className="hero-desc">
            Hi! I'm Sujal Patel. A creative visual designer focused on building 
            playful and professional digital experiences.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">Selected Projects</a>
            <a href="#contact" className="btn btn-outline">Say Hello</a>
          </div>
          <div className="hero-badges">
            <span className="badge-item">Creative</span>
            <span className="badge-item">Professional</span>
            <span className="badge-item">Modern</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="character-wrapper floating">
            <img src={heroChar} alt="3D Designer Character" className="hero-char" />
            <div className="decorative-element element-1"></div>
            <div className="decorative-element element-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



