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

    // Run once on mount to handle refreshes mid-page
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-text">
            Sweet Signature
            <span>Lagos</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Our Story
          </NavLink>
          <NavLink to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Experiences
          </NavLink>
          <NavLink to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/procurement" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Procurement
          </NavLink>
          
          {/* Mobile CTA (shown inside menu on small screens) */}
          <Link to="/contact" className="btn-primary-nav mobile-only-btn" onClick={() => setMobileMenuOpen(false)}>
            Consultation <FiArrowRight />
          </Link>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <Link to="/contact" className="btn-primary-nav desktop-only-btn">
            Consultation <FiArrowRight />
          </Link>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;