import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Replaced FiSparkles with FiStar
import { FiArrowUpRight, FiFilter, FiStar, FiHeart, FiMapPin } from 'react-icons/fi';
import '../styles/Portfolio.css';

const portfolioStories = [
  {
    id: 1,
    title: "The Regal Eko Gala",
    category: "Weddings",
    location: "Ikoyi, Lagos",
    storyText: "A vision born from whisper-thin silk and golden amber light...",
    guests: "300 Guests",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    tag: "High Society Wedding"
  },
  {
    id: 2,
    title: "Midnight in Victoria Island",
    category: "Corporate",
    location: "Victoria Island, Lagos",
    storyText: "Transforming a blank glass canvas into an enchanted botanical sanctuary.",
    guests: "150 Guests",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    tag: "Luxury Gala"
  },
  {
    id: 3,
    title: "Banana Island Sunset Soirée",
    category: "Private Dinners",
    location: "Banana Island, Lagos",
    storyText: "Intimate dining framed by customized floral architecture and soft candlelight.",
    guests: "50 Guests",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
    tag: "Milestone Celebration"
  }
];

export default function Portfolio() {
  const narrativeRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Safely check for window & GSAP ScrollTrigger before initializing
    if (typeof window !== 'undefined' && gsap) {
      gsap.registerPlugin(ScrollTrigger);

      const el = narrativeRef.current;
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            }
          }
        );
      }
    }
  }, []);

  const filteredProjects = selectedCategory === "All"
    ? portfolioStories
    : portfolioStories.filter(p => p.category === selectedCategory);

  return (
    <div className="portfolio-container">
      
      {/* HERO SECTION */}
      <header className="hero-bg">
        <div className="portfolio-max-width portfolio-nav">
          <Link to="/" className="brand-logo font-serif gold-gradient-text">
            SWEET SIGNATURE
          </Link>
          <Link to="/contact" className="btn-cta-outline">
            <span>Begin Your Story</span>
            <FiArrowUpRight />
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content portfolio-max-width"
        >
          <div className="hero-subtitle">
            <FiStar /> The Archive of Dreams
          </div>
          <h1 className="hero-title font-serif">
            We Don't Just Plan Events. <br />
            <span className="gold-gradient-text">We Orchestrate Memories.</span>
          </h1>
          <p className="hero-desc">
            Every celebration in Lagos has a heartbeat. Explore how we turn quiet desires into timeless, luxurious realities.
          </p>
        </motion.div>

        {/* Filter Widget */}
        <div className="portfolio-max-width glass-filter-bar">
          <div className="filter-grid">
            <div className="filter-group">
              <label className="filter-label">
                <FiFilter /> Experience Type
              </label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="All">All Chapter Stories</option>
                <option value="Weddings">Luxury Weddings</option>
                <option value="Corporate">Corporate Galas</option>
                <option value="Private Dinners">Private Celebrations</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">
                <FiMapPin /> Location Focus
              </label>
              <div style={{ color: '#fff', fontSize: '0.95rem' }}>Lagos & Beyond</div>
            </div>

            <div>
              <button className="btn-filter-action">
                <span>Explore Journey</span>
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* GSAP NARRATIVE SECTION */}
      <section className="narrative-section">
        <div ref={narrativeRef}>
          <FiHeart className="quote-icon" />
          <h2 className="narrative-quote font-serif">
            “From the quiet nervous anticipation of morning prep to the breathtaking reveal under crystal chandeliers—our craft is preserving emotion in every detail.”
          </h2>
          <p className="narrative-author">
            — Sweet Signature Creative Direction
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="portfolio-max-width portfolio-section">
        <div className="portfolio-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="portfolio-card"
              >
                <img src={project.image} alt={project.title} />

                <div className="card-overlay">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="card-tag">{project.tag}</span>
                    <div className="card-arrow-btn">
                      <FiArrowUpRight />
                    </div>
                  </div>

                  <h3 className="card-title font-serif">{project.title}</h3>
                  <p className="card-story-text">{project.storyText}</p>

                  <div className="card-footer-meta">
                    <span>{project.location}</span>
                    <span>{project.guests}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}