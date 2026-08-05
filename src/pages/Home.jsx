import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiCalendar, 
  FiMapPin, 
  FiHeart, 
  FiStar, 
  FiShoppingBag, 
  FiSmile, 
  FiGift, 
  FiUserCheck, 
  FiCoffee, 
  FiLayers 
} from 'react-icons/fi';
import '../styles/Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const storyRef = useRef(null);
  const [filter, setFilter] = useState('All');

  // Interactive Booking / Consultation Widget State
  const [eventType, setEventType] = useState('Wedding Planning');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('100-300');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          },
        }
      );
    }, storyRef);

    return () => ctx.revert();
  }, []);

  // Services offered by Sweet Signature
  const servicesList = [
    {
      icon: <FiHeart />,
      title: 'Wedding Event Planning',
      desc: 'Bespoke design, execution, and coordination to turn your dream wedding into an unforgettable love story.'
    },
    {
      icon: <FiShoppingBag />,
      title: 'Procurement Services',
      desc: 'Direct sourcing of international luxury decor, specialized lighting, fine linens, and custom props.'
    },
    {
      icon: <FiLayers />,
      title: 'Luxury Event Decoration',
      desc: 'Transforming venues with breathtaking floral architecture, custom stage setups, and immersive lighting.'
    },
    {
      icon: <FiGift />,
      title: 'Birthday Planning',
      desc: 'Elegant milestone celebrations crafted with bespoke themes, curated ambiance, and premium entertainment.'
    },
    {
      icon: <FiSmile />,
      title: "Children's Party Planning",
      desc: 'Magical, creative, and safe party environments designed to spark joy and wonder for young ones.'
    },
    {
      icon: <FiUserCheck />,
      title: "Bachelor's Party Planning",
      desc: 'Exclusive, highly tailored, and seamlessly managed pre-wedding celebrations for the modern host.'
    },
    {
      icon: <FiCoffee />,
      title: 'Gourmet Catering Coordination',
      desc: 'Partnering with elite culinary artists to deliver exquisite multi-course dining experiences.'
    }
  ];

  // Portfolio items matching services
  const portfolioItems = [
    { id: 1, title: 'The Royal Eko Reception', category: 'Weddings', location: 'Ikoyi, Lagos', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Opulent Sunset Soirée', category: 'Birthdays', location: 'Banana Island, Lagos', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Grand Floral Stage Installation', category: 'Decoration', location: 'Victoria Island, Lagos', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Enchanted Kingdom Celebration', category: "Children's Parties", location: 'Lekki, Lagos', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'VIP Lounge & Dining Setup', category: 'Catering', location: 'Eko Atlantic, Lagos', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION WITH RESERVATION WIDGET */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Where Luxury Meets Passion, <br /> & Dreams Become Unforgettable Moments
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Sweet Signature: Lagos’ Premier Event Planning, Decoration, and Procurement House.
          </motion.p>

          {/* Booking Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="booking-widget"
          >
            <div className="widget-item">
              <label><FiHeart className="widget-icon" /> Service Type</label>
              <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <option value="Wedding Planning">Wedding Event Planning</option>
                <option value="Decoration">Luxury Event Decoration</option>
                <option value="Procurement">Procurement Services</option>
                <option value="Birthday Planning">Birthday Planning</option>
                <option value="Children Party">Children Party Planning</option>
                <option value="Bachelors Party">Bachelor's Party Planning</option>
                <option value="Catering">Catering Coordination</option>
              </select>
            </div>

            <div className="widget-item">
              <label><FiCalendar className="widget-icon" /> Event Date</label>
              <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </div>

            <div className="widget-item">
              <label><FiMapPin className="widget-icon" /> Guest Capacity</label>
              <select value={guestCount} onChange={(e) => setGuestCount(e.target.value)}>
                <option value="50-100">Intimate (50 - 100)</option>
                <option value="100-300">Grand (100 - 300)</option>
                <option value="300+">Imperial (300+ Guests)</option>
              </select>
            </div>

            <button 
              className="widget-btn"
              onClick={() => navigate('/contact', { state: { selectedService: eventType, eventDate, guestCount } })}
            >
              Consult Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES & PROCUREMENT OVERVIEW */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Signature Services & Procurement</h2>
            <p>From full event orchestration to direct global decor procurement, we bring visions to life.</p>
          </div>

          <div className="services-grid">
            {servicesList.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EMOTIONAL STORYTELLING JOURNEY */}
      <section className="section-padding story-section" ref={storyRef}>
        <div className="container">
          <div className="section-header">
            <h2>From First Spark to Timeless Celebration</h2>
            <p>We don't just plan events; we guide you through an extraordinary journey.</p>
          </div>

          <div className="story-grid timeline-grid">
            <div className="story-card">
              <div className="story-number">01</div>
              <h3>The Dream (First Spark)</h3>
              <p>You speak of a feeling; we trace the silhouette. We capture your quiet desires and translate them into visual moodboards, space drafts, and elegant color profiles.</p>
            </div>

            <div className="story-card">
              <div className="story-number">02</div>
              <h3>Bespoke Sourcing</h3>
              <p>We launch a global search. Directly importing crystal chandeliers from Milan, fresh florals from Holland, and velvet linens to ensure your venue is unlike any other.</p>
            </div>

            <div className="story-card">
              <div className="story-number">03</div>
              <h3>The Transformation</h3>
              <p>On production day, our setup crew builds the landscape—erecting custom stages, hanging structural lights, and placing every single goblet to absolute perfection.</p>
            </div>

            <div className="story-card">
              <div className="story-number">04</div>
              <h3>The Celebration</h3>
              <p>The doors swing open. Laughter fills the room, glasses clink under amber glows, and you reside completely in your dream. We step back, and you live your story.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE GALLERY (FILTERABLE) */}
      <section className="section-padding gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Celebrations</h2>
            <p>A glimpse into transformed spaces and curated moments created across Lagos and beyond.</p>
          </div>

          <div className="filter-tabs">
            {['All', 'Weddings', 'Decoration', 'Birthdays', "Children's Parties", 'Catering'].map((tab) => (
              <button 
                key={tab} 
                className={`filter-btn ${filter === tab ? 'active' : ''}`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div layout className="gallery-grid">
            {filteredItems.map((item) => (
              <motion.div 
                layout 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                key={item.id} 
                className="gallery-card"
              >
                <img src={item.img} alt={item.title} />
                <div className="gallery-content">
                  <div className="rating"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                  <h3>{item.title}</h3>
                  <p><FiMapPin /> {item.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;