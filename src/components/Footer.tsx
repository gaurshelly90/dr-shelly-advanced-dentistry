import React from 'react';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dr. Shelly's Advanced Dentistry</h3>
            <p>MDS Endodontist providing specialized Root Canal Treatment (RCT), Dental Implants, and advanced dental care in Rewari, Haryana. Best dentist in Rewari for quality treatment.</p>
            <div className="footer-contact">
              <Phone size={16} />
              <span>082958 31559</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Root Canal Treatment (RCT)</li>
              <li>Dental Implants</li>
              <li>Single Sitting RCT</li>
              <li>Painless Treatment</li>
              <li>Emergency Dental Care</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>52, 9, TP Scheme Rd, near Suraj Apartments</li>
              <li>Rewari, Haryana 123401</li>
              <li>Mon-Sat: 9AM-8PM, Sun: By Appointment</li>
              <li>drshelly.rewari@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Dr. Shelly's Advanced Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
