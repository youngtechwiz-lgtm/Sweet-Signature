import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGlobe, FiMapPin, FiTruck, FiBox, FiCheckCircle } from 'react-icons/fi';
import '../styles/Procurement.css';

gsap.registerPlugin(ScrollTrigger);

const sourcingLanes = [
  {
    origin: 'Milan, Italy',
    item: 'Crystal Chandeliers & Glassware',
    description: 'Procuring heavy-lead custom-blown crystal glassware, candle stands, and high-hanging ceiling installations from historical Italian glass blowers.',
    coordinates: 'Milan to Lagos'
  },
  {
    origin: 'Amsterdam, Netherlands',
    item: 'Premium Florals & Foliage',
    description: 'Direct-from-farm cold-chain importing of fresh wisteria vines, white hydrangeas, garden roses, and structural foliage flown in 24 hours before execution.',
    coordinates: 'Amsterdam to Lagos'
  },
  {
    origin: 'Dubai, UAE',
    item: 'Geometric Staging & Custom Props',
    description: 'Sourcing structural gold chrome tables, architectural geometric arches, custom backdrops, and high-luminance LED panels built to our blueprint specifications.',
    coordinates: 'Dubai to Lagos'
  },
  {
    origin: 'Paris, France',
    item: 'Haute Couture Table Linens',
    description: 'Acquiring hand-woven silk-blend table runners, custom embroidered napkins, and heavy-thread velvet upholstery fabrics from traditional textile workshops.',
    coordinates: 'Paris to Lagos'
  }
];

const Procurement = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lane-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.25,
          scrollTrigger: {
            trigger: '.lanes-grid',
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="procurement-page" ref={containerRef}>
      {/* Hero Header */}
      <section className="procurement-hero">
        <div className="procurement-hero-overlay"></div>
        <div className="procurement-max-width procurement-hero-content">
          <span className="procurement-subtitle">
            <FiGlobe /> BEYOND BORDERS
          </span>
          <h1 className="procurement-title font-serif">
            Sourcing the <br />
            <span className="gold-text">Extraordinary.</span>
          </h1>
          <p className="procurement-desc">
            We don't use standard rental packages. We operate a direct international procurement pipeline, sourcing the finest materials from global artisan hubs to make your event uniquely yours.
          </p>
        </div>
      </section>

      {/* Sourcing Lanes Section */}
      <section className="lanes-section">
        <div className="procurement-max-width">
          <div className="section-header">
            <span className="section-tag">GLOBAL PIPELINE</span>
            <h2 className="font-serif">The Sourcing Coordinates</h2>
            <p>Tracing the path of luxury from world-class artisan houses directly to Lagos venues.</p>
          </div>

          <div className="lanes-grid">
            {sourcingLanes.map((lane, index) => (
              <div className="lane-card" key={index}>
                <div className="lane-header">
                  <div className="lane-number">0{index + 1}</div>
                  <div className="lane-origin">
                    <FiMapPin className="pin-icon" /> {lane.origin}
                  </div>
                </div>
                
                <h3 className="font-serif lane-item">{lane.item}</h3>
                <p className="lane-desc">{lane.description}</p>
                
                <div className="lane-meta">
                  <span>Route:</span> {lane.coordinates}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Map Illustration */}
      <section className="sourcing-map-section">
        <div className="procurement-max-width map-grid">
          <div className="map-text">
            <h2 className="font-serif section-subtitle">The Procurement Journey</h2>
            <p className="map-p">
              Every detail matters. When designing an opulent reception in Ikoyi or a sunset gala in Victoria Island, we coordinate with flight schedules, customs officers, and cold storage networks. 
            </p>
            <p className="map-p">
              Our direct logistics integration guarantees that your event decor is untarnished, completely unique, and unavailable in standard rental catalogues.
            </p>
            
            <div className="map-benefits">
              <div className="benefit-item">
                <FiBox className="benefit-icon" />
                <div>
                  <h4>Zero Replacements</h4>
                  <p>What we show in your moodboard is what is sourced. We do not make concessions or last-minute substitutes.</p>
                </div>
              </div>

              <div className="benefit-item">
                <FiTruck className="benefit-icon" />
                <div>
                  <h4>White-Glove Cold Chain</h4>
                  <p>Florals are kept in humidity-controlled environments from European farms directly to the reception tables.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-visual">
            <div className="globe-illustration">
              <div className="pulse-circle lagos"><span>Lagos</span></div>
              <div className="pulse-circle origin-1"><span>Milan</span></div>
              <div className="pulse-circle origin-2"><span>Amsterdam</span></div>
              <div className="pulse-circle origin-3"><span>Dubai</span></div>
              
              <div className="connection-line line-1"></div>
              <div className="connection-line line-2"></div>
              <div className="connection-line line-3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procurement;
