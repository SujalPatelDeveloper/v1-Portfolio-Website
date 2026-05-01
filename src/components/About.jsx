import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title" data-code='{"element": "h2", "title": "About Me"}'>About Me</h2>
      <div className="about-content">
        <div className="about-text" data-code='{"component": "Biography"}'>
          <p>Hello! My name is Sujal and I enjoy creating things that live on the internet. My interest in web development started back when I tried editing custom themes on Tumblr — turns out hacking together HTML & CSS taught me a lot about the web!</p>
          <p>Fast-forward to today, and I've had the privilege of building high-performance web applications with a focus on seamless user experiences and robust architectures.</p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React & Next.js</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>CSS3 & Animations</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image">
            <div className="image-placeholder">&lt;S/&gt;</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
