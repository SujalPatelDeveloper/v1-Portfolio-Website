import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Work.css';

import portfolioImg from '../assets/images/PersonalPortfolioWebsiteLight.png';
import finvistaImg from '../assets/images/FinVista_Dashboard_Light.png';

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "React • Framer Motion",
    image: portfolioImg,
    color: "#facc15",
    desc: "A modern, high-performance portfolio featuring smooth Framer Motion animations and a responsive design. (This Project)",
    link: "https://sujalpateldeveloper.vercel.app/"
  },
  {
    title: "FinVista - Expense Tracker",
    category: "React • Supabase • Recharts",
    image: finvistaImg,
    color: "#4285f4",
    desc: "A comprehensive financial dashboard with real-time data syncing, expense analytics, and secure Supabase authentication.",
    link: "https://fin-vista-expense-tracker.vercel.app/"
  }
];

const Work = () => {
  return (
    <section id="work" className="section work">
      <div className="work-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.h2>
        <Link to="/projects" className="btn btn-outline btn-sm view-all-btn">
          View All Projects
        </Link>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1] 
            }}
          >
            <div className="card-image" style={{ backgroundColor: project.color }}>
              <img src={project.image} alt={project.title} className="project-thumb" />
              <div className="card-pill tag">{project.category}</div>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="card-footer">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;

