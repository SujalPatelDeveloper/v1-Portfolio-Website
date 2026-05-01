import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import { useTheme } from './hooks/useTheme';
import './style.css';

function App() {
  const { theme, toggleTheme, isDevMode, toggleDevMode } = useTheme();

  return (
    <div className="app-root">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        isDevMode={isDevMode} 
        toggleDevMode={toggleDevMode} 
      />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
      <Terminal />
    </div>
  );
}

export default App;
