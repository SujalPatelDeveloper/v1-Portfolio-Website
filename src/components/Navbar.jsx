import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <div className={`nav-container glass ${isOpen ? 'menu-open' : ''}`}>
        <Link to="/" className="logo" onClick={closeMenu}>SUJAL</Link>
        
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={closeMenu}>Projects</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>About</Link>
          <Link to="/contact" className={`nav-cta ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>Let's Talk</Link>
          <a 
            href="/resume.pdf" 
            className="nav-resume" 
            target="_blank" 
            rel="noopener noreferrer"
            download
          >
            Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

