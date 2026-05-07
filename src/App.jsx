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
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
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
  const [loading, setLoading] = useState(true);

  const handleRefreshAnimations = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <ScrollToTop />
        {loading && <Preloader onFinish={() => setLoading(false)} />}
        {!loading && (
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
        )}
      </div>
    </Router>
  );
}

export default App;




