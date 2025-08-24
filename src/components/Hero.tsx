import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>MDS Endodontist - Best Dentist in Rewari</h2>
            <h1>Advanced Root Canal Treatment<br />& Dental Implants</h1>
            <p>Dr. Shelly Sharma, MDS (Endodontist) - Expert in Root Canal Treatment (RCT), Dental Implants, and Advanced Endodontic Procedures. Serving Rewari, Haryana with state-of-the-art dental care.</p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>Schedule Appointment</button>
              <button className="btn-secondary" onClick={scrollToAbout}>Learn More</button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-placeholder">
              <img src="/images/dental-clinic-hero.jpg" alt="Dr. Shelly's Advanced Dentistry Clinic in Rewari" />
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <Award size={32} />
            <h3>MDS Endodontist<br />Certified</h3>
          </div>
          <div className="stat">
            <Clock size={32} />
            <h3>Expert in RCT<br />& Implants</h3>
          </div>
          <div className="stat">
            <Users size={32} />
            <h3>Best Dentist<br />in Rewari</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
