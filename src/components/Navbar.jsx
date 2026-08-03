import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Sweet Signature Logo" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            Sweet Signature
            <span>Lagos</span>
          </div>
        </Link>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMobileMenuOpen(false)}>
            Our Story
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMobileMenuOpen(false)}>
            Experiences
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/procurement" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setMobileMenuOpen(false)}>
            Procurement
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary-nav">
            Consultation <FiArrowRight />
          </Link>
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;