import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };



  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span><Phone size={16} /> 082958 31559</span>
            <span>Mon-Sat: 9AM-8PM</span>
          </div>
          <button className="book-appointment-btn" onClick={() => scrollToSection('contact')}>Book Appointment</button>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Dr. Shelly's Advanced Dentistry</h1>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('services')}>Services</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
