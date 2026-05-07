import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer id="contact" className={`section footer ${!isHomePage ? 'simple-footer' : ''}`}>
      <div className="footer-container">
        {isHomePage && (
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="section-title">Let's work together</h2>
            <p className="contact-desc">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <a href="mailto:sujalpatel.developer@gmail.com" className="btn btn-primary contact-btn">
              Get In Touch
            </a>
            <div className="social-links">
              <a href="https://github.com/SujalPatelDeveloper" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/sujalpateldeveloper" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>© 2024 SUJAL PATEL. MADE WITH PASSION.</p>
          <div className="footer-tag">AVAILABLE FOR FREELANCE</div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
