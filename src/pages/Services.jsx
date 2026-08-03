import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiArrowRight, FiSliders, FiHeart, FiGift, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const chapters = [
  {
    id: 'weddings',
    title: 'Chapter I: Luxury Weddings',
    concept: 'The Walk of a Lifetime',
    desc: 'Every wedding is a timeless novel. We design sensory landscapes—from majestic floral arches to candlelit corridors—so that your walk down the aisle feels like stepping into a romantic masterpiece. Every glass, ribbon, and light is chosen to whisper your unique love story.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    details: ['Bespoke Aisle & Canopy Design', 'Symphonic Table Settings', 'Bridal Suite Curation', 'Vows Ambiance Production']
  },
  {
    id: 'galas',
    title: 'Chapter II: Corporate Galas',
    concept: 'Prestige & Precision',
    desc: 'An elite corporate gathering is a statement of vision. We translate your corporate prestige into architectural venue setups, custom stages, and state-of-the-art sensory lighting, creating a flawless platform for connection, negotiation, and triumph.',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    details: ['Prestige Lounge Architecture', 'Branded Visual Installations', 'VIP Dining Curations', 'Sensory Stage Design']
  },
  {
    id: 'procurement',
    title: 'Chapter III: Procurement Sourcing',
    concept: 'The Global Treasure Hunt',
    desc: 'Uniqueness cannot be bought off the shelf. We cross borders to procure exclusive interior decor, custom-blown glass candelabras, high-fashion linens, and specialized lighting directly from Milan, Amsterdam, and Dubai, importing them directly to your Lagos venue.',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    details: ['Direct International Decor Sourcing', 'Custom Furniture Fabrication', 'Exotic Floral Importing', 'Strict Quality Check & Delivery']
  },
  {
    id: 'birthdays',
    title: 'Chapter IV: Milestone Celebrations',
    concept: 'Celebrating Legacy',
    desc: 'A milestone birthday is a monument of gratitude. We honor your life journey by designing intimate, deeply emotional atmospheres filled with warm candlelight, custom gallery frames of your history, and bespoke culinary staging that leaves guests in awe.',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    details: ['Bespoke Milestone Concepting', 'Warm Ambient Lighting Systems', 'Intimate Seating & Dinings', 'Legacy Gallery Installations']
  },
  {
    id: 'playgrounds',
    title: 'Chapter V: Playgrounds & Parties',
    concept: 'Pure Magic & Whimsy',
    desc: 'Sparking joy requires looking at the world with wonder. From children’s immersive wonderland birthdays to high-concept pre-wedding celebrations, we design creative and safe play zones that combine high-end elegance with sheer imaginative fun.',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800',
    details: ['Immersive Fantasy Theme Design', 'Safe Play Space Engineering', 'Creative Interactive Stations', 'Bespoke Party Good Sourcing']
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('weddings');
  
  // Interactive Quiz/Configurator States
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({ eventType: '', vibe: '', budgetScale: '' });
  const [quizResult, setQuizResult] = useState(null);

  const startQuiz = () => {
    setQuizStep(1);
    setQuizResult(null);
  };

  const handleAnswer = (key, value) => {
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);

    if (key === 'eventType') setQuizStep(2);
    if (key === 'vibe') setQuizStep(3);
    if (key === 'budgetScale') {
      // Calculate profile
      let profileTitle = '';
      let profileDesc = '';
      
      if (nextAnswers.vibe === 'Opulent') {
        profileTitle = 'Imperial Majesty Profile';
        profileDesc = 'Your style demands high-contrast drama, crystal ceilings, custom international floral columns, and a royal banquet setting. Ideal for grand ballroom weddings or high-society galas.';
      } else if (nextAnswers.vibe === 'Minimalist') {
        profileTitle = 'Architectural Elegance Profile';
        profileDesc = 'You appreciate structural silhouettes, monochromatic aesthetics, custom geometrical staging, and pinpoint ambient lighting. Perfect for modern glasshouses or rooftop lounges.';
      } else {
        profileTitle = 'Enchanted Romance Profile';
        profileDesc = 'You long for natural elements, cascading overhead wisterias, soft twinkling fairylights, and warm candlelight dining. Best suited for private gardens or beachside soirées.';
      }

      setQuizResult({ title: profileTitle, desc: profileDesc, answers: nextAnswers });
      setQuizStep(4);
    }
  };

  return (
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-max-width services-hero-content">
          <span className="services-subtitle">
            <FiStar /> ORCHESTRATING CHAPTERS
          </span>
          <h1 className="services-title font-serif">
            Transforming Spaces <br />
            <span className="gold-text">Into Curated Emotional Realities.</span>
          </h1>
          <p className="services-desc">
            We don't simply list services; we craft distinct operational chapters that guide your vision from a quiet dream to a grand celebration.
          </p>
        </div>
      </section>

      {/* Chapters Tabs Section */}
      <section className="chapters-section">
        <div className="services-max-width">
          <div className="chapters-nav">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setActiveTab(chapter.id)}
                className={`chapter-tab-btn ${activeTab === chapter.id ? 'active' : ''}`}
              >
                {chapter.title.split(': ')[0]}
              </button>
            ))}
          </div>

          <div className="chapter-display-card">
            <AnimatePresence mode="wait">
              {chapters.map((chapter) => {
                if (chapter.id !== activeTab) return null;
                return (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="chapter-content-grid"
                  >
                    <div className="chapter-text">
                      <span className="chapter-concept">{chapter.concept}</span>
                      <h2 className="font-serif chapter-title-main">{chapter.title}</h2>
                      <p className="chapter-desc-p">{chapter.desc}</p>
                      
                      <div className="chapter-details-box">
                        <h4>Signature Touchpoints:</h4>
                        <ul>
                          {chapter.details.map((detail, idx) => (
                            <li key={idx}><FiCheckCircle className="chk-icon" /> {detail}</li>
                          ))}
                        </ul>
                      </div>

                      <Link to="/contact" state={{ selectedService: chapter.title }} className="chapter-link-btn">
                        Begin this Chapter <FiArrowRight />
                      </Link>
                    </div>

                    <div className="chapter-image">
                      <img src={chapter.img} alt={chapter.title} />
                      <div className="image-luxe-border"></div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Interactive Experience Quiz */}
      <section className="experience-quiz-section">
        <div className="services-max-width quiz-container">
          <div className="quiz-header">
            <FiSliders className="quiz-icon" />
            <h2 className="font-serif">The Dream Configurator</h2>
            <p>Answer three questions to discover your unique event style profile and begin your story.</p>
          </div>

          <div className="quiz-body-box">
            {quizStep === 0 && (
              <div className="quiz-start-step">
                <p>Let our algorithmic design framework align your subconscious styling preferences with a clear vision.</p>
                <button onClick={startQuiz} className="quiz-btn-action">
                  Launch Configurator
                </button>
              </div>
            )}

            {quizStep === 1 && (
              <div className="quiz-question-step">
                <h3>1. What is the core celebration?</h3>
                <div className="quiz-options-grid">
                  {['Wedding Ceremony', 'Corporate Gala', 'Private Birthday', 'Exclusive Soirée'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('eventType', opt)} className="quiz-option-btn">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="quiz-question-step">
                <h3>2. Select your dominant visual atmosphere:</h3>
                <div className="quiz-options-grid">
                  {['Opulent', 'Minimalist', 'Botanical / Romantic'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('vibe', opt)} className="quiz-option-btn">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="quiz-question-step">
                <h3>3. What scale best describes the guest count?</h3>
                <div className="quiz-options-grid">
                  {['Intimate (Under 100)', 'Grand (100 - 300)', 'Imperial (300+ Guests)'].map((opt) => (
                    <button key={opt} onClick={() => handleAnswer('budgetScale', opt)} className="quiz-option-btn">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 4 && quizResult && (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="quiz-result-step"
              >
                <div className="result-badge"><FiHeart /> Signature Match</div>
                <h3 className="font-serif result-title">{quizResult.title}</h3>
                <p className="result-desc">{quizResult.desc}</p>
                
                <div className="result-meta">
                  <span><strong>Celebration:</strong> {quizResult.answers.eventType}</span>
                  <span><strong>Vibe:</strong> {quizResult.answers.vibe}</span>
                  <span><strong>Scale:</strong> {quizResult.answers.budgetScale}</span>
                </div>

                <div className="result-actions">
                  <button onClick={startQuiz} className="quiz-btn-outline">
                    Recalibrate
                  </button>
                  <Link 
                    to="/contact" 
                    state={{ 
                      prefilledType: quizResult.answers.eventType, 
                      prefilledVibe: quizResult.answers.vibe,
                      prefilledScale: quizResult.answers.budgetScale 
                    }} 
                    className="quiz-btn-submit"
                  >
                    Consult With Design Board <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
