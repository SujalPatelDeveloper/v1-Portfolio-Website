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
          <div className="contact-card glass mini-info">
             <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Direct Links</h3>
             <a href="mailto:hello@sujal.design" className="btn btn-outline contact-btn" style={{ width: '100%', marginBottom: '1.5rem' }}>
              hello@sujal.design
            </a>
            <div className="social-links-grid">
              <a href="#" className="social-box glass">
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-box glass">
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="contact-method-group">
            <div className="contact-method">
              <h3>Availability</h3>
              <p>Mon — Fri, 9am — 6pm IST</p>
            </div>
            <div className="contact-method">
              <h3>Based In</h3>
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
