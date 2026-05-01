import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import DoodleBackground from './components/DoodleBackground';
import './style.css';

function App() {
  return (
    <div className="app-root">
      <DoodleBackground />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;


