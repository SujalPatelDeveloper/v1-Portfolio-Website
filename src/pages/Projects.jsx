import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../components/Work.css';
import './Projects.css';

const allProjects = [
  {
    title: "Real-Time Collaboration App",
    category: "React • Node.js • Socket.io",
    color: "#00df9a",
    desc: "Built a real-time collaboration platform using WebSockets for low-latency multi-user synchronization. Implemented shared rooms and live updates."
  },
  {
    title: "Code-Editor",
    category: "React • Monaco Editor • Socket.io",
    color: "#ff7eb3",
    desc: "Web-based code editor with syntax highlighting and multi-language support. Integrated real-time collaboration for shared coding sessions."
  },
  {
    title: "Personal Expense Tracker",
    category: "React • Supabase • Recharts",
    color: "#4285f4",
    desc: "Full-stack expense tracker with real-time syncing, categorized transactions, analytics, and PDF export functionality."
  },
  {
    title: "Personal Portfolio Website",
    category: "React • Next.js • Framer Motion",
    color: "#facc15",
    desc: "Modern responsive portfolio with smooth animations and optimized performance. Implemented interactive sections and clean navigation."
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
          All Projects
        </motion.h1>
        <p className="subtitle">A collection of my recent work and experimental side projects.</p>
      </div>

      <div className="projects-grid">
        {allProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card-image" style={{ backgroundColor: project.color }}>
              <div className="card-pill tag">{project.category}</div>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="card-footer">
                <span className="view-project">View Project →</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
