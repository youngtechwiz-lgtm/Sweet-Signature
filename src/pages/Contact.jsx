import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCalendar, FiMapPin, FiUsers, FiHeart, FiAward, FiCheckCircle } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  
  // Form State
  const [formData, setFormData] = useState({
    eventType: 'Wedding Planning',
    stylePreference: 'Opulent Luxe',
    eventDate: '',
    venueLocation: 'Ikoyi, Lagos',
    guestCapacity: '100-300',
    fullName: '',
    email: '',
    phone: '',
    dreamNotes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pre-fill form from React Router state (passed from Home widget or Services quiz)
  useEffect(() => {
    if (location.state) {
      const state = location.state;
      setFormData(prev => ({
        ...prev,
        eventType: state.selectedService || state.prefilledType || prev.eventType,
        stylePreference: state.prefilledVibe ? `${state.prefilledVibe} Aesthetic` : prev.stylePreference,
        eventDate: state.eventDate || prev.eventDate,
        guestCapacity: state.guestCount || state.prefilledScale || prev.guestCapacity
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="contact-page">
      <div className="container contact-grid-container">
        
        {/* Left Side: Editorial Information */}
        <div className="contact-info-panel">
          <span className="contact-tag">THE PRIVATE OFFICE</span>
          <h1 className="font-serif contact-title">Let's Design <br />Your Signature Chapter.</h1>
          <p className="contact-panel-desc">
            Consultations are held by private appointment at our design lounge in Lagos. Share the initial coordinates of your dream, and our creative directors will reach out to schedule your private design board consultation.
          </p>

          <div className="office-details">
            <div className="office-item">
              <FiMapPin className="office-icon" />
              <div>
                <h4>Lounge Address</h4>
                <p>Grapevine Plaza, Ikoyi, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="office-item">
              <FiCalendar className="office-icon" />
              <div>
                <h4>Operating Hours</h4>
                <p>Monday — Friday: 10:00 AM — 6:00 PM</p>
                <p>Saturday (Appointments only): 11:00 AM — 4:00 PM</p>
              </div>
            </div>

            <div className="office-item">
              <FiAward className="office-icon" />
              <div>
                <h4>Direct Communications</h4>
                <p>inquiries@sweetsignature.com</p>
                <p>+234 (0) 808 SWEET SIG</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Multi-Step Interactive Form */}
        <div className="contact-form-panel">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.div 
                key="form-container"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="form-wrapper-box"
              >
                {/* Form Progress Header */}
                <div className="form-steps-header">
                  <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. The Concept</div>
                  <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                  <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. The Details</div>
                  <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
                  <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3. The Signature</div>
                </div>

                <form onSubmit={step === 3 ? handleSubmit : handleNext}>
                  
                  {/* STEP 1: EVENT CONCEPT & STYLE */}
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="form-step-fields"
                    >
                      <h3 className="font-serif step-title">Describe the Vision</h3>
                      
                      <div className="input-group">
                        <label><FiHeart className="input-icon" /> Service Chapter Type</label>
                        <select name="eventType" value={formData.eventType} onChange={handleChange}>
                          <option value="Wedding Planning">Luxury Wedding Planning</option>
                          <option value="Decoration">Venues & Staging Decoration</option>
                          <option value="Procurement">International Procurement Sourcing</option>
                          <option value="Birthday Planning">Milestone Birthday Celebration</option>
                          <option value="Children Party">Children's Wonderland Planning</option>
                          <option value="Bachelors Party">Private Bachelor's Party</option>
                          <option value="Catering">Elite Catering Coordination</option>
                        </select>
                      </div>

                      <div className="input-group">
                        <label><FiAward className="input-icon" /> Visual Aesthetic Preference</label>
                        <select name="stylePreference" value={formData.stylePreference} onChange={handleChange}>
                          <option value="Opulent Luxe">Opulent Luxury (Crystals, Amber Glows, Gold)</option>
                          <option value="Modern Architectural">Modern Minimal (Geometric structures, Monochrome)</option>
                          <option value="Enchanted Garden">Enchanted Garden (Cascading Florals, Fairy Lights)</option>
                          <option value="Royal Classic">Traditional Royal (Rich Textures, Velvet, Jewels)</option>
                        </select>
                      </div>

                      <button type="submit" className="form-btn-next">
                        Next Chapter
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 2: LOGISTICS COORDINATES */}
                  {step === 2 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="form-step-fields"
                    >
                      <h3 className="font-serif step-title">The Coordinates</h3>

                      <div className="input-group">
                        <label><FiCalendar className="input-icon" /> Event Date (Proposed)</label>
                        <input 
                          type="date" 
                          name="eventDate" 
                          value={formData.eventDate} 
                          onChange={handleChange} 
                          required
                        />
                      </div>

                      <div className="input-group">
                        <label><FiMapPin className="input-icon" /> Venue Location / Area</label>
                        <select name="venueLocation" value={formData.venueLocation} onChange={handleChange}>
                          <option value="Ikoyi, Lagos">Ikoyi, Lagos</option>
                          <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                          <option value="Banana Island, Lagos">Banana Island, Lagos</option>
                          <option value="Lekki, Lagos">Lekki Phase 1 / 2, Lagos</option>
                          <option value="Eko Atlantic, Lagos">Eko Atlantic City, Lagos</option>
                          <option value="Destinations">Destination / Outside Lagos</option>
                        </select>
                      </div>

                      <div className="input-group">
                        <label><FiUsers className="input-icon" /> Guest Capacity</label>
                        <select name="guestCapacity" value={formData.guestCapacity} onChange={handleChange}>
                          <option value="50-100">Intimate (50 - 100 Guests)</option>
                          <option value="100-300">Grand (100 - 300 Guests)</option>
                          <option value="300+">Imperial (300+ Guests)</option>
                        </select>
                      </div>

                      <div className="btn-flex-row">
                        <button type="button" onClick={handlePrev} className="form-btn-back">
                          Back
                        </button>
                        <button type="submit" className="form-btn-next">
                          Next Chapter
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: CONTACT & NARRATIVE DETAILS */}
                  {step === 3 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="form-step-fields"
                    >
                      <h3 className="font-serif step-title">Leave Your Signature</h3>

                      <div className="input-grid">
                        <div className="input-group">
                          <label>Full Name</label>
                          <input 
                            type="text" 
                            name="fullName" 
                            value={formData.fullName} 
                            onChange={handleChange} 
                            placeholder="e.g. Adewale Balogun"
                            required 
                          />
                        </div>

                        <div className="input-group">
                          <label>Email Address</label>
                          <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="e.g. adewale@domain.com"
                            required 
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <label>Phone Number (WhatsApp Preferred)</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="e.g. +234 80 8123 4567"
                          required 
                        />
                      </div>

                      <div className="input-group">
                        <label>Describe the Magic (Any specific dream details?)</label>
                        <textarea 
                          name="dreamNotes" 
                          value={formData.dreamNotes} 
                          onChange={handleChange} 
                          rows={4}
                          placeholder="Tell us an emotional overview of what you want your guests to experience..."
                        />
                      </div>

                      <div className="btn-flex-row">
                        <button type="button" onClick={handlePrev} className="form-btn-back">
                          Back
                        </button>
                        <button type="submit" className="form-btn-submit">
                          Send Board Request <FiSend />
                        </button>
                      </div>
                    </motion.div>
                  )}

                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="submitted-container"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="submitted-success-box"
              >
                <div className="success-icon"><FiCheckCircle /></div>
                <h2 className="font-serif">Your Story is Registered.</h2>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. We have received your signature details for the <strong>{formData.eventType}</strong> on <strong>{formData.eventDate}</strong>.
                </p>
                <p className="success-subtext">
                  Our private office coordinates will review your vision notes and contact you on WhatsApp / Phone within 24 hours to schedule your exclusive design alignment.
                </p>
                <button onClick={() => { setFormSubmitted(false); setStep(1); }} className="reset-btn">
                  Register Another Event
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Contact;
