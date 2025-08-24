import React from 'react';
import { Microscope, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Meet Your Dentist</h2>
            <h3>Dr. Shelly Sharma</h3>
            <h4>MDS (Endodontist) - Best Dentist in Rewari, Haryana</h4>
            
            <p>
              Dr. Shelly Sharma is a highly qualified MDS Endodontist practicing in Rewari, Haryana. 
              She specializes in Root Canal Treatment (RCT), Dental Implants, and advanced endodontic 
              procedures, making her the preferred choice for patients seeking quality dental care in Rewari.
            </p>
            
            <p>
              With her Master of Dental Surgery (MDS) in Endodontics, Dr. Sharma provides painless root canal 
              treatments, single-sitting RCT, dental implants, and comprehensive oral healthcare. Her clinic 
              at TP Scheme Road, Rewari is equipped with modern technology to ensure the best treatment outcomes.
            </p>

            <div className="credentials">
              <div className="credential">
                <Microscope size={24} />
                <span>MDS Endodontist<br />Certified</span>
              </div>
              <div className="credential">
                <Award size={24} />
                <span>Root Canal Treatment<br />Expert</span>
              </div>
              <div className="credential">
                <BookOpen size={24} />
                <span>Dental Implants<br />Specialist</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <img src={`${process.env.PUBLIC_URL}/images/dr-shelly-profile.jpg`} alt="Dr. Shelly Sharma - MDS Endodontist in Rewari" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
