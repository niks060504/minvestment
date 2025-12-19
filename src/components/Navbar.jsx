import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'show-menu' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>
            <Link to="/about">About us</Link>
          </li>
          <li className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>

        <div className="navbar-contact">
          <a
            href="https://wa.me/918277608357"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="contact-button">Contact me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
