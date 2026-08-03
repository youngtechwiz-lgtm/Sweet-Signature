import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiHeart, FiAward, FiSun, FiCompass } from 'react-icons/fi';
import '../styles/About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const introRef = useRef(null);
  const coreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-philosophy-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: coreRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.editorial-img',
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
          },
        }
      );
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '2px' }}
            animate={{ opacity: 1, letterSpacing: '6px' }}
            transition={{ duration: 1 }}
            className="about-hero-tag"
          >
            OUR STORY
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="about-hero-title font-serif"
          >
            We Believe Every Moment <br /> Has a Heartbeat.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="about-hero-desc"
          >
            Sweet Signature is not just an event planning company. We are keepers of emotion, architects of temporary sanctuaries, and creators of lifelong memories in Lagos.
          </motion.p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="about-narrative-section" ref={introRef}>
        <div className="container narrative-grid">
          <div className="narrative-text-block">
            <h2 className="font-serif section-subtitle">The Art of the Ephemeral</h2>
            <p className="narrative-p">
              In the energetic heartbeat of Lagos, where celebrations are grand and spirits are high, Sweet Signature was born out of a simple desire: <strong>to transform space into emotion</strong>. We noticed that while events were lavish, they often lacked the silent thread that ties a host’s personal story to their guest's experience.
            </p>
            <p className="narrative-p">
              We approach design like a poet approaches a blank page. We listen to the whispers of your dreams—the quiet anticipation, the family legacies, the laughter you want to share—and convert them into tangible details. From the scent of imported roses to the warm amber glow of custom lighting, everything we place has a purpose.
            </p>
            <div className="quote-box">
              <FiHeart className="quote-icon" />
              <p className="quote-text font-serif">
                "An event is not just designed to look beautiful. It is engineered to make you feel completely held, celebrated, and deeply loved."
              </p>
              <span className="quote-author">— Sweet Signature Philosophy</span>
            </div>
          </div>
          <div className="narrative-image-block">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" 
                alt="Sweet Signature Event Design" 
                className="editorial-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Tenets */}
      <section className="about-core-section" ref={coreRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">HOW WE WORK</span>
            <h2 className="font-serif">Our Three Core Pillars</h2>
            <p>The foundations that allow us to orchestrate flawless luxury experiences.</p>
          </div>

          <div className="about-philosophy-grid">
            <div className="about-philosophy-card">
              <div className="card-icon"><FiCompass /></div>
              <h3 className="font-serif">Intuitive Planning</h3>
              <p>We anticipate your needs before you form them. Our planners manage logistics, safety, vendor alignment, and timelines with invisible, seamless precision.</p>
            </div>

            <div className="about-philosophy-card">
              <div className="card-icon"><FiSun /></div>
              <h3 className="font-serif">Avant-Garde Decor</h3>
              <p>We don't follow trends; we set them. Our design team drafts bespoke layouts, floral architectures, and stage setups that redefine luxury in Lagos.</p>
            </div>

            <div className="about-philosophy-card">
              <div className="card-icon"><FiAward /></div>
              <h3 className="font-serif">Global Procurement</h3>
              <p>We directly source rare materials, fine glassware, custom-built props, and specialized lighting setups directly from world-class artisans internationally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Lagos Statement */}
      <section className="lagos-statement">
        <div className="lagos-bg-overlay"></div>
        <div className="container lagos-content">
          <h2 className="font-serif">Orchestrating Dreams in Lagos & Beyond</h2>
          <p>
            Lagos is a city of royalty, history, and vibrant elegance. Our work honors this heritage by crafting events that reflect the sheer scale, hospitality, and joy of Nigerian celebrations, elevated to global luxury standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
