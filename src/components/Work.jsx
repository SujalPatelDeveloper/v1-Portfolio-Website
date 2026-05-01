import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Work.css';

const projects = [
  {
    title: "Real-Time Collaboration App",
    category: "Full-Stack / WebSockets",
    color: "#00df9a",
    desc: "A real-time platform with shared rooms and low-latency multi-user synchronization."
  },
  {
    title: "Code-Editor",
    category: "Web Tooling",
    color: "#ff7eb3",
    desc: "Web-based editor with syntax highlighting and real-time collaboration features."
  },
  {
    title: "Personal Expense Tracker",
    category: "Full-Stack",
    color: "#4285f4",
    desc: "Full-stack tracker with real-time syncing, analytics, and PDF export functionality."
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
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
    </section>
  );
};

export default Work;

