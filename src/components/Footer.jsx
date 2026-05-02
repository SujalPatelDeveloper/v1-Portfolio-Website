import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="section footer">
      <div className="footer-container">
        <motion.div 
          className="contact-card glass"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">Let's work together</h2>
          <p className="contact-desc">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <a href="mailto:hello@sujal.design" className="btn btn-primary contact-btn">
            Get In Touch
          </a>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© 2024 SUJAL PATEL. MADE WITH PASSION.</p>
          <div className="footer-tag">AVAILABLE FOR FREELANCE</div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
