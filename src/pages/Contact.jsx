import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../components/Footer.css';
import './ContactPage.css';
import ContactForm from '../components/ContactForm';

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
        <div className="form-section">
          <ContactForm />
        </div>

        <motion.div 
          className="contact-info-list"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="info-card contact-sidebar-card">
            <div className="sidebar-section">
              <h3 className="card-title">Direct Links</h3>
              <a href="mailto:sujalpatel.developer@gmail.com" className="btn btn-outline email-btn">
                sujalpatel.developer@gmail.com
              </a>
              <div className="social-links-grid">
                <a href="https://www.linkedin.com/in/sujalpateldeveloper" target="_blank" rel="noopener noreferrer" className="social-box">
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/SujalPatelDeveloper" target="_blank" rel="noopener noreferrer" className="social-box">
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="sidebar-section">
              <div className="info-item">
                <span className="info-label">Availability</span>
                <span className="info-value">Mon — Fri, 9am — 6pm IST</span>
              </div>
              <div className="info-item">
                <span className="info-label">Based In</span>
                <span className="info-value">Gandhinagar- Gujarat</span>
              </div>
              <div className="info-item">
                <span className="info-label">Response Time</span>
                <span className="info-value">Typically within 24 hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
