import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/ContactUs';

function AppWrapper() {
  const location = useLocation();
  const isColoredBg = ['/services', '/about', '/contact'].includes(location.pathname);

  return (
    <div className={isColoredBg ? 'colored-bg-wrapper' : ''}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
