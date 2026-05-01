import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="nav-container glass">
        <a href="#" className="logo">SUJAL.</a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Let's Talk</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
