import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroChar from '../assets/images/MyCartoonImage.png';
import arrowDoodle from '../assets/doodles/arrow, hand drawn, scribble, doodle, 10.svg';
import sparkDoodle from '../assets/doodles/spark, sparkle, 26.svg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-poster-container">
        <motion.div 
          className="hero-typography"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="label-group top-labels">
            <motion.span 
              className="ui-label rotated-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              [ HI, MY NAME IS ]
            </motion.span>
            <motion.span 
              className="pill-tag"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              POSITION: FULL-STACK DEVELOPER
            </motion.span>
          </div>
          
          <h1 className="poster-title">
            <motion.span 
              className="title-row row-1"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              SUJAL PATEL.
            </motion.span>
            <motion.span 
              className="title-row row-2 offset-right"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              PORTFOLIO
            </motion.span>
          </h1>

          <div className="bottom-content">
            <motion.div 
              className="intro-block rotated-right"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <h2 className="role-subtitle">I build scalable, real-time web apps.</h2>
              <p>Aspiring Full-Stack Developer skilled in React, Next.js, and real-time applications using WebSockets. Focused on performance and user experience.</p>
              <motion.img 
                src={arrowDoodle} 
                className="doodle-arrow" 
                alt="" 
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                animate={{ opacity: 0.6, scale: 1, rotate: -15 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              />
            </motion.div>
            
            <motion.div 
              className="cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <Link to="/projects" className="btn btn-primary">CHECK OUT MY WORK</Link>
              <Link to="/contact" className="btn btn-outline">SAY HELLO</Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual-poster"
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="character-frame">
            <motion.img 
              src={heroChar} 
              alt="Designer Character" 
              className="hero-char-main"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
            <motion.img 
              src={sparkDoodle} 
              className="doodle-spark-top" 
              alt="" 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.img 
              src={sparkDoodle} 
              className="doodle-spark-bottom" 
              alt="" 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;






