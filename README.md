# Dr. Shelly's Advanced Dentistry Website

A modern, professional website for Dr. Shelly Sharma's dental practice, specializing in micro-endodontics and restorative dentistry.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Components**: 
  - Smooth scrolling navigation
  - Contact form with validation
  - Mobile-friendly hamburger menu
- **Comprehensive Sections**:
  - Hero section with practice highlights
  - About section featuring Dr. Sharma's credentials
  - Services showcase with detailed descriptions
  - Contact information and appointment booking form
  - Professional footer with practice details

## Technologies Used

- **React 18** with TypeScript
- **Lucide React** for modern icons
- **CSS3** with Grid and Flexbox for responsive layouts
- **Modern JavaScript** (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dr-shelly-dentistry
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Hero.tsx        # Hero section with practice highlights
│   ├── About.tsx       # About Dr. Sharma section
│   ├── Services.tsx    # Services offered section
│   ├── Contact.tsx     # Contact information and appointment form
│   └── Footer.tsx      # Footer with practice details
├── App.tsx             # Main application component
├── App.css             # Global styles and responsive design
└── index.tsx           # Application entry point
```

## Key Features

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Collapsible navigation menu for mobile devices
- Flexible grid layouts that adapt to different screen sizes

### Professional Styling
- Modern color scheme with medical/dental industry appropriate colors
- Smooth hover effects and transitions
- Professional typography and spacing
- Card-based layouts for easy content consumption

### Interactive Elements
- Smooth scrolling navigation between sections
- Form validation and submission handling
- Mobile-friendly hamburger menu
- Hover effects on buttons and cards

### Contact Features
- Multiple contact methods (phone, email, location, hours)
- Emergency contact information
- Appointment booking form with service selection
- Professional contact information layout

## Customization

### Colors
The website uses a professional color palette:
- Primary Blue: `#2563eb`
- Success Green: `#10b981`
- Text Dark: `#1e293b`
- Text Light: `#64748b`
- Background: `#f8fafc`

### Content Updates
To update practice information:
1. Edit contact details in `Header.tsx` and `Contact.tsx`
2. Update doctor information in `About.tsx`
3. Modify services in `Services.tsx`
4. Update footer information in `Footer.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

To deploy the website:

1. Build the production version:
   ```bash
   npm run build
   ```

2. The `build` folder contains the optimized production files ready for deployment.

3. Deploy to your preferred hosting service (Netlify, Vercel, AWS S3, etc.)

## License

© 2024 Dr Shelly's Advanced Dentistry. All rights reserved.

## Support

For technical support or customization requests, please contact the development team.