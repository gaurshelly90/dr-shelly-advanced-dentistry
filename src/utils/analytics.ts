// Google Analytics 4 Event Tracking for Dr. Shelly's Dental Practice

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track appointment form submissions
export const trackAppointmentSubmission = (formData: {
  fullName: string;
  phone: string;
  email: string;
  service: string;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'appointment_booking', {
      event_category: 'engagement',
      event_label: 'appointment_form',
      service_type: formData.service,
      custom_parameter_1: 'whatsapp_submission'
    });
  }
};

// Track phone number clicks
export const trackPhoneClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: 'phone_number',
      phone_number: '082958_31559'
    });
  }
};

// Track WhatsApp button clicks
export const trackWhatsAppClick = (context: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'whatsapp_button',
      button_context: context // 'header', 'contact_section', 'services', etc.
    });
  }
};

// Track directions/map clicks
export const trackDirectionsClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'directions_click', {
      event_category: 'engagement',
      event_label: 'get_directions',
      location: 'rewari_clinic'
    });
  }
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_view', {
      event_category: 'engagement',
      event_label: 'service_interest',
      service_name: serviceName
    });
  }
};

// Track testimonials section engagement
export const trackTestimonialsView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'testimonials_view', {
      event_category: 'engagement',
      event_label: 'social_proof',
      section: 'patient_reviews'
    });
  }
};

// Track navigation clicks
export const trackNavigation = (section: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation_click', {
      event_category: 'navigation',
      event_label: 'menu_click',
      destination_section: section
    });
  }
};
