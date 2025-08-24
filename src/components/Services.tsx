import React from 'react';
import { Microscope, Wrench, Search, Zap, Heart, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Heart size={48} />,
      title: "Root Canal Treatment (RCT)",
      description: "Expert endodontic treatment to save your natural teeth. Painless, precise, and effective root canal procedures.",
      features: ["Painless treatment", "Single sitting RCT", "Advanced techniques", "High success rate"]
    },
    {
      icon: <Wrench size={48} />,
      title: "Dental Implants",
      description: "Permanent tooth replacement solution with titanium implants for missing teeth. Natural look and feel.",
      features: ["Permanent solution", "Natural appearance", "Durable implants", "Improved function"]
    },
    {
      icon: <Microscope size={48} />,
      title: "Micro-Endodontics",
      description: "Advanced microscopic root canal treatment for complex cases with precision and minimal discomfort.",
      features: ["Microscopic precision", "Complex case handling", "Minimal invasion", "Better outcomes"]
    },
    {
      icon: <Clock size={48} />,
      title: "Single Sitting Treatment",
      description: "Complete root canal treatment in a single appointment for your convenience and comfort.",
      features: ["Time-saving", "Single visit", "Immediate relief", "Convenient scheduling"]
    },
    {
      icon: <Zap size={48} />,
      title: "Painless Dentistry",
      description: "Advanced anesthesia techniques and gentle procedures ensuring comfortable dental treatment.",
      features: ["Pain-free procedures", "Advanced anesthesia", "Comfortable experience", "Anxiety-free treatment"]
    },
    {
      icon: <Search size={48} />,
      title: "Advanced Diagnostics",
      description: "Digital X-rays and 3D imaging for accurate diagnosis and precise treatment planning.",
      features: ["Digital X-rays", "3D imaging", "Accurate diagnosis", "Treatment planning"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Expert Endodontic & Dental Services</h2>
          <p>Dr. Shelly Sharma, MDS Endodontist, provides specialized Root Canal Treatment, Dental Implants, and advanced dental care in Rewari, Haryana.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services-image">
          <div className="image-placeholder">
            <img src={`${process.env.PUBLIC_URL}/images/dental-equipment.jpg`} alt="Advanced dental equipment at Dr. Shelly's clinic in Rewari" />
          </div>
        </div>


      </div>
    </section>
  );
};

export default Services;
