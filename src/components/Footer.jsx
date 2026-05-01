import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="section footer">
      <div className="contact-card glass">
        <h2 className="section-title">Let's work together</h2>
        <p className="contact-desc">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <a href="mailto:hello@sujal.design" className="btn btn-primary contact-btn">
          Get In Touch
        </a>
        <div className="social-links">
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Dribbble</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 SUJAL PATEL. MADE WITH PASSION.</p>
        <div className="footer-tag">AVAILABLE FOR FREELANCE</div>
      </div>
    </footer>
  );
};

export default Footer;
