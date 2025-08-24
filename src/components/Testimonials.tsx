import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

const Testimonials: React.FC = () => {
  // Sample reviews - replace with actual Google reviews
  const reviews: Review[] = [
    {
      id: "1",
      name: "Priya Sharma",
      rating: 5,
      text: "Dr. Shelly is absolutely amazing! Her root canal treatment was completely painless. The clinic is very clean and modern. Highly recommend for anyone looking for quality dental care in Rewari.",
      date: "2 weeks ago"
    },
    {
      id: "2", 
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service and very professional staff. Dr. Shelly explained everything clearly before the procedure. The dental implant process was smooth and the results are fantastic.",
      date: "1 month ago"
    },
    {
      id: "3",
      name: "Anita Gupta",
      rating: 5,
      text: "Best dentist in Rewari! Very gentle approach and uses latest technology. My family has been visiting Dr. Shelly for years. Always satisfied with the treatment and care.",
      date: "3 weeks ago"
    },
    {
      id: "4",
      name: "Vikram Singh",
      rating: 5,
      text: "Outstanding experience! Dr. Shelly's expertise in endodontics is remarkable. The clinic maintains high hygiene standards and the staff is very courteous and helpful.",
      date: "2 months ago"
    },
    {
      id: "5",
      name: "Meera Jain",
      rating: 5,
      text: "Highly professional and caring dentist. The treatment was explained in detail and executed perfectly. Very reasonable pricing for the quality of service provided.",
      date: "1 month ago"
    },
    {
      id: "6",
      name: "Suresh Agarwal",
      rating: 5,
      text: "Dr. Shelly is very skilled and experienced. The root canal treatment was completed in single sitting without any pain. Definitely the best dental clinic in Rewari.",
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
        fill={index < rating ? '#fbbf24' : 'none'}
        color={index < rating ? '#fbbf24' : '#d1d5db'}
      />
    ));
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Patients Say</h2>
          <p>Real reviews from our valued patients on Google. Experience the quality care that has earned us 5-star ratings.</p>
        </div>

        <div className="google-rating-summary">
          <div className="rating-display">
            <div className="rating-score">
              <span className="score">4.9</span>
              <div className="stars">
                {renderStars(5)}
              </div>
            </div>
            <div className="rating-info">
              <p><strong>Excellent</strong> based on <strong>150+ reviews</strong></p>
              <div className="google-badge">
                <span>Google Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="reviewer-details">
                    <h4>{review.name}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <div className="review-content">
                <Quote size={20} className="quote-icon" />
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h3>Ready to Experience Quality Dental Care?</h3>
          <p>Join hundreds of satisfied patients who trust Dr. Shelly for their dental needs.</p>
          <button className="btn-primary" onClick={scrollToContact}>
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
