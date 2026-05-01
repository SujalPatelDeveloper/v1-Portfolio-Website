import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../components/Footer.css';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Let's Talk
        </motion.h1>
      </div>

      <div className="contact-grid">
        <motion.div 
          className="contact-card glass"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get in touch</h2>
          <p className="contact-desc">
            I'm currently available for freelance work and full-time opportunities. 
            If you have a project in mind or just want to chat, feel free to reach out!
          </p>
          <a href="mailto:hello@sujal.design" className="btn btn-primary contact-btn">
            Send me an Email
          </a>
          
          <div className="social-links-grid">
            <a href="#" className="social-box glass">
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-box glass">
              <span>Twitter</span>
            </a>
            <a href="#" className="social-box glass">
              <span>GitHub</span>
            </a>
            <a href="#" className="social-box glass">
              <span>Dribbble</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-info-list"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="contact-method">
            <h3>Email</h3>
            <p>hello@sujal.design</p>
          </div>
          <div className="contact-method">
            <h3>Availability</h3>
            <p>Mon — Fri, 9am — 6pm IST</p>
          </div>
          <div className="contact-method">
            <h3>Based In</h3>
            <p>Ahmedabad, Gujarat</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
