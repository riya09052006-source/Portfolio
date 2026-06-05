# Riya Patel - Developer Portfolio

A modern, high-fidelity developer portfolio website for Riya Patel. The site showcases skills, projects, verified certifications, and career experience. It features an interactive, responsive layout supporting both dark and light modes.

## Tech Stack

- **Core**: React.js, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Support**: Dynamic class-based light and dark theme switching

## Features

1. **Dynamic Theme Switcher**: Toggle between a cyber-minimalist dark mode and a clean light mode via the navigation toggle.
2. **Hero Section**: Typographical greeting, social links, and an interactive code cube displaying developer details.
3. **About Section**: Core stats panel, professional details listing her Computer Engineering focus, and a custom profile photo.
4. **Skills Dashboard**: Responsive categories displaying level bars and progress meters for frontend, backend, database, and devops tools.
5. **Projects Showcase**: Interactive cards detailing featured projects:
   - **Car4U**: Machine learning collaborative car recommendation system.
   - **SMARTLEARN**: Web-based PHP/MySQL e-learning platform.
6. **Achievements & Certifications**: Verified credentials grid. Clicking a card opens a modal detailing issuer metadata and verified skills.
7. **Resume Timeline**: Timeline representing education and work histories. Features a download button for her Word document CV.
8. **Contact Shell**: Terminal-styled communication form with real-time field validation, clipboard copy functionality for direct mail, and transaction state alerts.

## Project Structure

```
riya-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── Riya_Patel_Resume.docx
│   └── profile.jpg
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Certifications.jsx
    │   ├── Resume.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── common/
    │       ├── GlassCard.jsx
    │       └── SectionHeading.jsx
```

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. Clone or copy the project files to your system.
2. Open your terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

Build the project for production:
```bash
npm run build
```
The compiled build output will be stored in the `dist/` directory.
