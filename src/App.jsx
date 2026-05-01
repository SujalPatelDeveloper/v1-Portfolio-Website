import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import DoodleBackground from './components/DoodleBackground';
import ScrollToTop from './components/ScrollToTop';
import ScrollTopButton from './components/ScrollTopButton';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import './style.css';

const Home = () => (
  <>
    <Hero />
    <Work />
    <About />
  </>
);

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefreshAnimations = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-root">
        <CustomCursor />
        <DoodleBackground />
        <Navbar />
        <main key={refreshKey}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollTopButton onScrollTop={handleRefreshAnimations} />
      </div>
    </Router>
  );
}

export default App;




