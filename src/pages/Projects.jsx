import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../components/Work.css';
import './Projects.css';

import portfolioImg from '../assets/images/PersonalPortfolioWebsiteLight.png';
import finvistaImg from '../assets/images/FinVista_Dashboard_Light.png';

const completedProjects = [
  {
    title: "Personal Portfolio Website",
    category: "React • Framer Motion",
    image: portfolioImg,
    color: "#facc15",
    desc: "A modern, high-performance portfolio featuring smooth Framer Motion animations, optimized performance, and a sleek, responsive design. Built with React and Framer Motion. (This Project)",
    link: "https://sujalpateldeveloper.vercel.app/"
  },
  {
    title: "FinVista - Expense Tracker",
    category: "React • Supabase • Recharts",
    image: finvistaImg,
    color: "#4285f4",
    desc: "A full-stack financial dashboard featuring real-time transaction tracking, data visualization with Recharts, and secure user authentication via Supabase.",
    link: "https://fin-vista-expense-tracker.vercel.app/"
  }
];

const upcomingProjects = [
  {
    title: "Code Editor",
    desc: "Web-based code editor with syntax highlighting and multi-language support. Integrated real-time collaboration for shared coding sessions."
  },
  {
    title: "Real-Time Collaboration App",
    desc: "Built a real-time collaboration platform using WebSockets for low-latency multi-user synchronization. Implemented shared rooms and live updates."
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Project Gallery
        </motion.h1>
        <p className="subtitle">A collection of my recent work and experimental side projects.</p>
      </div>

      <section className="projects-section">
        <h2 className="section-subtitle">Featured Work</h2>
        <div className="projects-grid">
          {completedProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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

      <section className="upcoming-section">
        <h2 className="section-subtitle">Upcoming Projects</h2>
        <div className="upcoming-grid">
          {upcomingProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="upcoming-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="upcoming-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="status-badge">In Development</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
