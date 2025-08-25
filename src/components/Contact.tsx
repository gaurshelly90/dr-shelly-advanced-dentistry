import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { trackAppointmentSubmission, trackPhoneClick, trackWhatsAppClick, trackDirectionsClick } from '../utils/analytics';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track appointment submission in Google Analytics
    trackAppointmentSubmission(formData);
    
    // Create WhatsApp message with form data
    const phoneNumber = "918295831559"; // Dr. Shelly's number with country code
    const message = encodeURIComponent(
      `Hello Dr. Shelly! I would like to schedule an appointment.\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n` +
      `${formData.message ? `Message: ${formData.message}\n` : ''}` +
      `\nPlease confirm my appointment slot.\n\nThank you!`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form after sending to WhatsApp
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">


        <div className="section-header">
          <h2>Book Your Appointment</h2>
          <p>Schedule your consultation with Dr. Shelly Sharma, MDS Endodontist. All information you need is right here.</p>
        </div>

        <div className="contact-content">
          <div className="booking-sidebar">
            <div className="contact-card">
              <h3>📞 Contact Options</h3>
              <div className="contact-methods">
                <button className="contact-method" onClick={() => {
                  trackPhoneClick();
                  window.open('tel:082958 31559');
                }}>
                  <Phone size={20} />
                  <div>
                    <strong>Call Now</strong>
                    <span>082958 31559</span>
                  </div>
                </button>
                <button className="contact-method" onClick={() => {
                  trackWhatsAppClick('contact_section');
                  window.open('https://wa.me/918295831559?text=Hello Dr. Shelly! I need dental consultation.');
                }}>
                  <MessageCircle size={20} />
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Quick response</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="info-card">
              <h3>📋 Before Your Visit</h3>
              <ul className="checklist">
                <li>Bring previous dental X-rays if available</li>
                <li>List of current medications</li>
                <li>Arrive 15 minutes early for paperwork</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>💳 Payment & Insurance</h3>
              <ul className="checklist">
                <li>Cash, UPI, Card payments accepted</li>
                <li>Insurance claims assistance available</li>
                <li>Flexible payment plans for major treatments</li>
              </ul>
            </div>

          </div>

          <div className="appointment-form">
            <h3>Schedule Your Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Preferred Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Root Canal Treatment">Root Canal Treatment (RCT)</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Emergency Care">Emergency Care</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your dental concerns or questions..."
                  rows={4}
                />
              </div>

              <button type="submit" className="btn-primary">
                <MessageCircle size={20} style={{marginRight: '8px'}} />
                Send to WhatsApp
              </button>
              <p className="form-note">Your details will be sent via WhatsApp for quick appointment confirmation.</p>
            </form>
          </div>
        </div>

        {/* Full Width Map Section */}
        <div className="map-section-full">
          <h3>🗺️ Find Us Here</h3>
          <div className="map-container-full">
            <iframe
              src={`https://maps.google.com/maps?q=28.20861846929935,76.61991499364076&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="350"
              style={{border: 0, borderRadius: '12px'}}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Shelly's Advanced Dentistry Location"
            ></iframe>
            <div className="map-address-full">
              <div className="address-info">
                <h4>📍 Dr. Shelly's Advanced Dentistry</h4>
                <p>52, TP Scheme Rd, near Suraj Apartments, Rewari, Haryana 123401</p>
              </div>
              <button 
                className="directions-btn"
                onClick={() => {
                  trackDirectionsClick();
                  window.open('https://www.google.com/maps/dir/?api=1&destination=28.20861846929935,76.61991499364076');
                }}
              >
                <MapPin size={18} />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
