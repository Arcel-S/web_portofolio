# 🚀 Marcel Kevin Togap Siregar - Portfolio Website

A modern, responsive portfolio website showcasing data engineering expertise, backend development, and AI/ML projects. Built with **React 18+**, **Vite**, and **CSS Modules** with a sleek dark theme and cyberpunk aesthetic.

## ✨ Features

- **Fully Responsive Design** - Optimized for mobile (640px), tablet (768px), and desktop (1024px+)
- **Modern UI/UX** - Dark theme with cyan accents and smooth animations
- **Component-Based Architecture** - Clean, maintainable React components
- **Zero External Dependencies** - Built with vanilla CSS Modules (no Tailwind/Bootstrap)
- **Performance Optimized** - Fast load times and smooth scrolling
- **SEO Friendly** - Semantic HTML structure
- **Accessibility Focused** - WCAG compliant markup

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18+ |
| **Build Tool** | Vite |
| **Styling** | CSS Modules (BEM Methodology) |
| **Icons** | Google Material Symbols |
| **Fonts** | Space Grotesk (Google Fonts) |

## 📁 Project Structure

```
web_portofolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About/
│   │   │   │   ├── About.jsx
│   │   │   │   └── About.module.css
│   │   │   ├── Certifications/
│   │   │   │   ├── Certifications.jsx
│   │   │   │   ├── CertificationCard.jsx
│   │   │   │   ├── Certifications.module.css
│   │   │   │   └── CertificationCard.module.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Hero.module.css
│   │   │   ├── Projects/
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── Projects.module.css
│   │   │   │   └── ProjectCard.module.css
│   │   │   └── Skills/
│   │   │       ├── Skills.jsx
│   │   │       └── Skills.module.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── assets/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: `#08b2d4` (Cyan)
- **Dark Background**: `#0f172a`, `#101f22`
- **Light Text**: `#ffffff`
- **Accents**: `#07b6d5`, `#06d4ff`

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

### Typography
- **Font Family**: Space Grotesk (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

## 📑 Page Sections

### 1. **Header/Navigation**
- Sticky navigation bar with logo
- Smooth scroll navigation
- Mobile hamburger menu
- Navigation items: Home, About, Skills, Projects, Certifications

### 2. **Hero Section**
- Headline with gradient text
- Call-to-action buttons (View Projects, Download CV)
- Professional statistics (5+ Years Experience, 30+ Projects)
- Responsive image container with decorative elements
- Floating data analytics card

### 3. **About Section**
- Professional bio with tech expertise
- Avatar with HUD-style frame
- Education badge (ITERA - Informatics Engineering)
- Status indicator (Open for Work)
- Technical arsenal showcase

### 4. **Skills Section**
- Bento grid layout showing:
  - Core Programming Languages
  - Data & AI Tools
  - Web Development Stack
  - Advanced Analytics Focus
  - DevOps & Tools
  - CTA to download CV

### 5. **Projects Section**
- Filterable project showcase
- Project cards with:
  - Category tags
  - Technology badges
  - Description
  - Code and Demo links
- Currently displays 3 featured projects

### 6. **Certifications Section**
- Certification gallery with filter chips
- Categories: Cloud, Data, AI, Backend
- Certification cards displaying:
  - Certificate image
  - Title and issuer
  - Issue date
  - Credential ID and link

### 7. **Footer**
- Contact information
- Social media links:
  - Email (with mailto functionality)
  - LinkedIn
  - GitHub
- Copyright information

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone or extract the project:**
   ```bash
   cd web_portofolio/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📝 Customization Guide

### Updating Personal Information

#### In `components/Hero/Hero.jsx`:
- Change the headline text
- Update the description
- Modify button labels

#### In `components/About/About.jsx`:
- Update avatar image URL
- Change education information
- Modify bio paragraphs
- Update technical arsenal

#### In `components/Footer/Footer.jsx`:
- Update email address
- Modify LinkedIn URL
- Update GitHub profile URL

### Adding New Projects

Edit `components/Projects/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description...',
    category: 'Category Name',
    icon: 'material-icon-name',
    tech: ['Tech1', 'Tech2'],
    codeLink: 'https://github.com/...',
    demoLink: 'https://demo-link.com',
  },
  // Add more projects...
];
```

### Adding New Certifications

Edit `components/Certifications/Certifications.jsx`:
```javascript
const certifications = [
  {
    id: 1,
    title: 'Certification Title',
    category: 'Category',
    issuer: 'Issuer Name',
    issuedDate: 'Month Year',
    credentialId: 'ID-123',
    credentialUrl: 'https://credential-url.com',
    icon: 'material-icon-name',
    image: 'https://image-url.com/cert.jpg',
  },
  // Add more certifications...
];
```

### Styling Customization

All components use CSS Modules. To modify styles:

1. Locate the component's `.module.css` file
2. Follow BEM naming convention: `.blockName`, `.blockName__element`, `.blockName--modifier`
3. Use CSS variables from `index.css` for consistent theming

#### Available CSS Variables (in `index.css`):
- `--primary`: #08b2d4
- `--primary-dark`: #068fa9
- `--background-dark`: #101f22
- `--slate-300`, `--slate-400`, `--slate-700`, `--slate-800`, `--slate-900`

## 🎯 Key Features Implementation

### Responsive Design
- Mobile-first approach with progressive enhancement
- Flexible grid and flex layouts
- Responsive typography scaling
- Mobile menu with smooth toggle animation

### Smooth Scrolling
```javascript
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Image Optimization
- Max-width constraints for responsiveness
- Aspect ratio maintenance
- Background attachment optimization
- Backface visibility for performance

### Animations
- `fadeInUp`: Element appears with upward motion (0.8s)
- `fadeIn`: Simple fade animation (1.2s)
- `ping`: Pulsing dot animation (1.5s)
- `float`: Floating effect (infinite)
- `pulse`: Subtle pulsing effect (2s)

## 📊 Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## 🔧 Troubleshooting

### Images not loading?
- Check image URLs in component files
- Ensure images are properly hosted
- Verify responsive image CSS in `index.css`

### Navigation not scrolling smoothly?
- Ensure sections have proper `id` attributes
- Check that `scrollIntoView()` is being called correctly
- Verify browser supports smooth scrolling

### Email link not working?
- Check mailto: URL format in Footer.jsx
- Ensure email client is configured on the system
- Test with `href="mailto:email@example.com"`

### Responsive design issues?
- Check viewport meta tag in `index.html`
- Verify CSS media queries in component `.module.css` files
- Test at 640px, 768px, and 1024px breakpoints

## 📈 Performance Tips

- Lazy load images when possible
- Minimize rerendering using React.memo for static components
- Consider code splitting for large projects
- Use Vite's built-in optimization features

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📄 License

This project is personal and for demonstration purposes.

## 👤 About Marcel Kevin Togap Siregar

**Data Engineer | Backend Developer | AI Enthusiast**

- 🎓 Informatics Engineering, ITERA (2023)
- 💻 Specializing in backend systems, data analysis, and cloud solutions
- 🔗 [LinkedIn](https://id.linkedin.com/in/marcelsiregar)
- 🐙 [GitHub](https://github.com/Arcel-S/Arcel-S)
- 📧 Email: marcellsiregar1204@gmail.com

---

**Built with ❤️ using React + Vite**

Last Updated: January 2026
