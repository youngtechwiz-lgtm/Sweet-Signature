import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <h2 className="footer-logo">Sweet Signature</h2>
            <p className="footer-tagline">
              Crafting timeless luxury events, bespoke decor, and effortless procurement in Lagos and beyond.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><FaPinterest /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-column">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Gallery</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Specialties</h4>
              <ul>
                <li><Link to="/services#weddings">Grand Weddings</Link></li>
                <li><Link to="/services#galas">Corporate Galas</Link></li>
                <li><Link to="/services#decor">Bespoke Decor</Link></li>
                <li><Link to="/procurement">Luxury Sourcing</Link></li>
              </ul>
            </div>

            <div className="footer-column newsletter">
              <h4>Begin Your Journey</h4>
              <p>Receive exclusive event inspiration and luxury design notes.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit" aria-label="Subscribe"><FiSend /></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p>&copy; {new Date().getFullYear()} Sweet Signature Ltd. All rights reserved.</p>
          <p className="location-tag">Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;