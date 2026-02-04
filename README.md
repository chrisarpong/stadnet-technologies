# Stadnet Technologies Website

A beautiful, modern, and responsive React website featuring a blue and white glassmorphism design theme. Built with React, React Router, and Vite for optimal performance.

## 🎨 Features

- **Glassmorphism Design**: Modern frosted glass effect throughout the UI
- **Blue & White Theme**: Professional color scheme with blue gradients
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **10 Complete Pages**: Home, Solutions, 6 Service Pages, Careers, and Contact
- **Smooth Animations**: Fade-in effects and micro-interactions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Modern Stack**: React 18, React Router v6, and Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**

## 🚀 Getting Started

### 1. Install Node.js

If you don't have Node.js installed, download and install it from [nodejs.org](https://nodejs.org/)

### 2. Navigate to Project Directory

```bash
cd "/Users/christiansarpong/Documents/Stadnet Technologies/stadnet-website"
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- React Router DOM
- Vite and development tools

### 4. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

## 📁 Project Structure

```
stadnet-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Solutions.jsx
│   │   ├── MobileWebDev.jsx
│   │   ├── CloudComputing.jsx
│   │   ├── GraphicDesign.jsx
│   │   ├── ProductDesign.jsx
│   │   ├── Consulting.jsx
│   │   ├── Engineering.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & design system
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#0066CC`
- **Primary Dark**: `#003d7a`
- **Primary Light**: `#3399FF`
- **White**: `#FFFFFF`
- **Off White**: `#F8F9FA`

### Typography

- **Headings**: Montserrat (600-800 weight)
- **Body**: Inter (300-600 weight)

### Glassmorphism

The design features glassmorphism effects with:
- Backdrop blur filters
- Semi-transparent backgrounds
- Subtle borders and shadows
- Smooth hover transitions

## 📄 Pages

1. **Home** - Hero section with services overview
2. **Solutions** - Comprehensive solutions listing
3. **Mobile & Web Development** - Development services
4. **Cloud Computing** - Cloud infrastructure services
5. **Graphic Design** - Visual design services
6. **Product Design** - UI/UX design services
7. **Consulting** - IT consulting services
8. **Engineering & Digitization** - Modernization services
9. **Careers** - Job listings and opportunities
10. **Contact** - Contact form and information

## 🔧 Customization

### Updating Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #0066CC;
  --color-primary-dark: #003d7a;
  /* ... other colors */
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Import and add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is proprietary and confidential.

## 👥 Contact

**Stadnet Technologies**
- Email: info@stadnet.com
- Phone: +233 50 123 4567
- Address: 123 Tech Street, Accra, Ghana

---

Built with ❤️ by Stadnet Technologies
