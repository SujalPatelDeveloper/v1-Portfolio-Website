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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="label-group top-labels">
            <motion.span 
              className="ui-label rotated-left"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -8 }}
              transition={{ delay: 0.5 }}
            >
              [ HI, MY NAME IS ]
            </motion.span>
            <motion.span 
              className="pill-tag"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              POSITION: FULL-STACK DEVELOPER
            </motion.span>
          </div>
          
          <h1 className="poster-title">
            <motion.span 
              className="title-row row-1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              SUJAL PATEL.
            </motion.span>
            <motion.span 
              className="title-row row-2 offset-right"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              PORTFOLIO
            </motion.span>
          </h1>

          <div className="bottom-content">
            <motion.div 
              className="intro-block rotated-right"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="role-subtitle">I build scalable, real-time web apps.</h2>
              <p>Aspiring Full-Stack Developer skilled in React, Next.js, and real-time applications using WebSockets. Focused on performance and user experience.</p>
              <motion.img 
                src={arrowDoodle} 
                className="doodle-arrow" 
                alt="" 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 1.2 }}
              />
            </motion.div>
            
            <motion.div 
              className="cta-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <Link to="/projects" className="btn btn-primary">CHECK OUT MY WORK</Link>
              <Link to="/contact" className="btn btn-outline">SAY HELLO</Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual-poster"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="character-frame">
            <img src={heroChar} alt="3D Designer Character" className="hero-char-main" />
            <motion.img 
              src={sparkDoodle} 
              className="doodle-spark-top" 
              alt="" 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <img src={sparkDoodle} className="doodle-spark-bottom" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;






