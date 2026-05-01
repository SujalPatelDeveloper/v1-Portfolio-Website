import React from 'react';
import './Work.css';

const projects = [
  {
    title: "EcoSphere App",
    category: "Mobile Design",
    color: "#00df9a",
    desc: "A sustainable lifestyle tracking app with 3D elements."
  },
  {
    title: "Nova Dashboard",
    category: "Web UI/UX",
    color: "#ff7eb3",
    desc: "Futuristic analytics platform for space exploration data."
  },
  {
    title: "Minty Wallet",
    category: "Fintech",
    color: "#4285f4",
    desc: "Playful crypto wallet interface with smooth transitions."
  }
];

const Work = () => {
  return (
    <section id="work" className="section work">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
