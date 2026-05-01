import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <div className="nav-container glass">
        <Link to="/" className="logo">SUJAL.</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="nav-cta">Let's Talk</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

