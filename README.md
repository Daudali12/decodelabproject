# ARCHORA - Responsive Frontend Website

**Designing Digital Experiences That Adapt.**

A premium, modern, fully responsive frontend website built with pure HTML5, CSS3, and Vanilla JavaScript. This project demonstrates professional frontend development standards including responsive design, accessibility, semantic HTML, CSS Grid/Flexbox, and smooth JavaScript interactions.

## 🎯 Project Overview

ARCHORA is a fictional premium digital studio specializing in responsive web development, UI/UX design, frontend engineering, and interactive digital experiences. This website serves as a portfolio project showcasing:

- ✅ 100% Responsive Design (Mobile-First)
- ✅ Semantic HTML5 Structure
- ✅ Professional CSS3 Architecture
- ✅ Vanilla JavaScript (No Dependencies)
- ✅ Accessibility Best Practices (WCAG)
- ✅ Modern UI/UX Design
- ✅ Smooth Animations & Interactions

---

## 📁 Project Structure

```
DecodeLabproject/
├── index.html              # Semantic HTML structure
├── css/
│   └── style.css          # Comprehensive responsive styles
├── js/
│   └── script.js          # Vanilla JavaScript functionality
├── images/                # Image assets (if needed)
└── README.md              # This file
```

### File Descriptions

**index.html** (503 lines)
- Complete semantic HTML5 structure
- 11 major sections: Navbar, Hero, Stats, About, Services, Projects, Architecture, Principles, Process, Contact, Footer
- Proper heading hierarchy and accessible form controls
- No unnecessary divs - uses semantic elements

**css/style.css** (850+ lines)
- CSS custom properties (variables) for design system
- Mobile-first responsive design approach
- CSS Grid for major layouts
- Flexbox for component layouts
- Smooth animations with `prefers-reduced-motion` support
- Three breakpoints: Mobile (base), Tablet (768px), Desktop (1024px)
- Comprehensive hover states and transitions

**js/script.js** (280+ lines)
- Mobile navigation toggle with smooth animations
- Active navigation link indicator
- Contact form validation with error handling
- Scroll-reveal animations for elements
- Keyboard navigation support
- Accessibility enhancements
- No external libraries or frameworks

---

## 🎨 Design System

### Color Palette
- **Mocha Mousse**: `#A68E7B` - Warm accent color
- **Ethereal Blue**: `#A0D4E0` - Secondary accent
- **Moonlit Grey**: `#F2F0EA` - Light background
- **Dark**: `#1a1a1a` - Text and dark elements
- **Light**: `#ffffff` - White backgrounds

### Typography
- **Font Families**: Segoe UI, system-ui, -apple-system, sans-serif
- **Font Weights**: 400 (regular), 600 (semi-bold), 700 (bold)
- **Fluid Typography**: Uses `clamp()` for responsive text scaling

### Spacing Scale
- `--spacing-xs`: 0.5rem
- `--spacing-sm`: 1rem
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem
- `--spacing-2xl`: 4rem
- `--spacing-3xl`: 6rem

---

## 📱 Responsive Design Approach

### Mobile-First Strategy
The website is designed mobile-first with base styles optimized for small screens, then enhanced at larger breakpoints.

### Breakpoints
```css
Base (Mobile):      320px - 767px
Tablet:            768px - 1023px
Desktop:           1024px - 1440px
Large Desktop:     1440px+
```

### Responsive Features
- ✅ Hamburger menu on mobile, full nav on desktop
- ✅ Single column layouts on mobile → Multi-column on desktop
- ✅ Flexible images and device mockups
- ✅ Responsive typography with `clamp()`
- ✅ Touch-friendly button sizes
- ✅ No horizontal scrolling at any breakpoint

### Tested Viewport Sizes
- 320px (iPhone SE)
- 375px (iPhone X)
- 425px (Pixel 5)
- 768px (iPad)
- 1024px (iPad Pro)
- 1280px (Desktop)
- 1440px (Desktop)
- 1920px (Large Desktop)

---

## 🚀 Page Sections

### 1. Navigation Bar
- Fixed sticky positioning
- Glass-morphism effect with backdrop blur
- Smooth animated hamburger menu for mobile
- Active link indicator
- CTA button hidden on mobile

### 2. Hero Section
- Badge with project information
- Large responsive typography
- Dual CTA buttons
- Animated device mockups (CSS-only, no images)
- Subtle animated background
- Floating decorative elements

### 3. Stats Section
- "Built with purpose" tagline
- Four stat cards with icons
- Hover animations
- Responsive grid layout

### 4. About Section
- Split layout (visual + content)
- Animated gradient shapes (CSS blob animation)
- Feature list with checkmarks
- Call-to-action button

### 5. Services Section
- Four service cards with numbers
- Hover animations with gradient overlay
- Responsive grid (1 column mobile → 2 desktop → 4 desktop+)
- Icons and descriptions

### 6. Projects Section
- Three project cards
- CSS-created project mockups (no external images)
- Project categories and descriptions
- Hover lift effect

### 7. Architecture Section
- Three device mockups (mobile, tablet, desktop)
- Responsive showcase layout
- Architecture principles explanation
- Mobile-first architecture details

### 8. Principles Section
- Four principle cards
- Numbered design principles
- Centered layout with hover effects

### 9. Process Section
- Six-step process timeline
- Visual step numbers
- Process descriptions
- Responsive grid layout

### 10. Contact Section
- Premium contact form
- Form validation (JavaScript):
  - Name validation (min 2 characters)
  - Email validation (valid format)
  - Project type selection
  - Message validation (min 10 characters)
- Real-time error messages
- Success message on valid submission
- No actual backend (demo form)

### 11. Footer
- Multiple footer sections
- Navigation links
- Social media links
- Copyright information
- Heartbeat animation effect

---

## ✨ Features & Functionality

### HTML Features
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- Accessible form with labels and proper input types
- ARIA labels for icon buttons
- Keyboard navigation support

### CSS Features
- CSS Custom Properties (variables) for maintainable design
- CSS Grid for page layouts
- Flexbox for component alignment
- Responsive design with mobile-first approach
- Smooth transitions and animations
- Glass-morphism effects
- Gradient backgrounds
- Hover states for interactive elements
- Focus states for accessibility
- Box-shadow for depth

### JavaScript Features
- Mobile menu toggle with animation
- Active navigation link tracking (on scroll)
- Form validation with error messages
- Intersection Observer for scroll-reveal animations
- Smooth scroll behavior
- Keyboard navigation (Escape to close menu)
- Real-time form field validation
- Navbar scroll effect
- Dynamic device mockup animations
- Accessibility enhancements

### Accessibility Features
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt attributes (when images used)
- Accessible form labels
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance
- ARIA labels where appropriate
- Reduced motion support (`prefers-reduced-motion`)

---

## 🎯 CSS Architecture

### Organization
The stylesheet is organized into logical sections:
1. CSS Variables & Configuration
2. Reset & Base Styles
3. Typography
4. Navbar Styles
5. Hero Section
6. Stats Section
7. About Section
8. Services Section
9. Projects Section
10. Architecture Section
11. Principles Section
12. Process Section
13. Contact Section & Forms
14. Footer
15. Animations
16. Responsive Media Queries

### CSS Grid Usage
- Page layout: `grid-template-columns: 1fr`
- Stats grid: `repeat(auto-fit, minmax(200px, 1fr))`
- Services grid: `repeat(auto-fit, minmax(280px, 1fr))`
- Projects grid: `repeat(auto-fit, minmax(320px, 1fr))`
- Principles grid: `repeat(auto-fit, minmax(250px, 1fr))`
- Timeline: `repeat(3, 1fr)` (desktop)

### Flexbox Usage
- Navbar: `flex` for horizontal menu
- Hero buttons: `flex-wrap: wrap` for responsive buttons
- Footer sections: `flex-direction: column`
- Various component alignments

---

## 🎬 Animations & Interactions

### Entrance Animations
- Navbar slide down on page load
- Hero content fade-up with stagger
- Elements reveal on scroll (Intersection Observer)

### Hover Animations
- Button lift and shadow effect
- Card transform on hover
- Navigation link color change
- Project card zoom effect

### Scroll Animations
- Navbar background change on scroll
- Active link indicator update
- Element reveal animations

### Form Interactions
- Focus states on inputs
- Real-time error messages
- Success message animation
- Smooth transitions

### Reduced Motion Support
All animations respect `@media (prefers-reduced-motion: reduce)` for users who prefer less animation.

---

## 🔧 Getting Started

### Running the Website

1. **Direct Browser Open**
   ```bash
   # Open index.html directly in a web browser
   # Works on all modern browsers
   ```

2. **Using a Local Server** (Recommended)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if installed)
   npx http-server
   
   # VS Code Live Server extension
   # Right-click index.html → Open with Live Server
   ```

3. **Access in Browser**
   - Direct: `file:///path/to/DecodeLabproject/index.html`
   - Local Server: `http://localhost:8000`

### File Modifications

**Adding Content:**
1. Edit `index.html` to change text and structure
2. Modify `css/style.css` for styling changes
3. Update `js/script.js` for functionality

**Customizing Colors:**
Update CSS variables in `style.css`:
```css
:root {
    --mocha: #A68E7B;      /* Change accent color */
    --blue: #A0D4E0;       /* Change secondary color */
    --grey: #F2F0EA;       /* Change background color */
}
```

**Adding Images:**
1. Place images in `images/` folder
2. Update image paths in `index.html`
3. Ensure responsive sizing with CSS

---

## 📋 Testing Checklist

### Mobile Testing (320px - 767px)
- [ ] Hamburger menu opens/closes smoothly
- [ ] Navigation links clickable and scroll works
- [ ] Hero section stacks properly
- [ ] Form inputs are touch-friendly
- [ ] No horizontal scrolling
- [ ] Text is readable without zooming
- [ ] Images scale properly
- [ ] Buttons are properly sized for touch

### Tablet Testing (768px - 1023px)
- [ ] Layouts transition smoothly to tablet view
- [ ] Grid items redistribute correctly
- [ ] Navigation bar adapts properly
- [ ] Form fields display well
- [ ] Images and mockups scale correctly

### Desktop Testing (1024px+)
- [ ] Full navigation menu displays
- [ ] Multi-column layouts appear correctly
- [ ] Hover effects work smoothly
- [ ] Form submission works
- [ ] Device mockups render properly

### Functionality Testing
- [ ] Mobile menu toggle works
- [ ] Links navigate correctly
- [ ] Smooth scroll works
- [ ] Form validation triggers properly
- [ ] Error messages display
- [ ] Success message shows on valid submission
- [ ] Scroll reveals trigger animations
- [ ] Active nav link updates on scroll

### Accessibility Testing
- [ ] Tab navigation works through all elements
- [ ] Focus states are visible
- [ ] Form labels associated with inputs
- [ ] Colors have sufficient contrast
- [ ] Keyboard navigation works
- [ ] Reduced motion preferences respected
- [ ] No accessibility warnings in browser console

### Performance Testing
- [ ] Page loads quickly (< 3 seconds)
- [ ] No layout shifts during load
- [ ] Animations run smoothly (60fps)
- [ ] No console errors
- [ ] Responsive images and mockups

### Browser Compatibility
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 💡 Technical Highlights

### Why No Frameworks?
This project uses only HTML5, CSS3, and Vanilla JavaScript to demonstrate:
1. Pure web fundamentals understanding
2. CSS Grid and Flexbox mastery
3. Responsive design without Bootstrap/Tailwind
4. Vanilla JavaScript without React/Vue
5. Semantic HTML structure
6. Web Standards compliance

### Performance Considerations
- No external libraries or dependencies
- Minimal CSS (850 lines, well-organized)
- Lightweight JavaScript (280 lines, well-commented)
- Efficient use of CSS Grid and Flexbox
- No unnecessary animations
- Optimized for Core Web Vitals

### Code Quality
- Clean, readable code with comments
- Meaningful class names (BEM-inspired)
- Organized file structure
- Reusable CSS classes
- DRY (Don't Repeat Yourself) principles
- Proper semantic HTML

---

## 📚 Learning Resources

### CSS Concepts Demonstrated
- Custom Properties (CSS Variables)
- CSS Grid Layout
- Flexbox Layout
- Media Queries
- Responsive Design Patterns
- Animation & Transitions
- Gradient Backgrounds
- Box-shadow Effects
- Border-radius
- Transform & Scale

### JavaScript Concepts Demonstrated
- DOM Manipulation
- Event Listeners
- Event Delegation
- Intersection Observer API
- Form Validation
- String Methods
- Array Methods (forEach, querySelectorAll)
- Regular Expressions (Email validation)
- ES6+ Features (const, let, arrow functions)

### Accessibility Concepts
- Semantic HTML
- ARIA Attributes
- Keyboard Navigation
- Focus Management
- Color Contrast
- Form Accessibility
- Reduced Motion Support

---

## 🎓 Project Requirements Fulfillment

### DecodeLab Full Stack Development Internship - Project 1

**✅ All Requirements Met:**

1. **Responsive Design**
   - Mobile-first approach ✓
   - Works at 320px - 1920px ✓
   - Tested on multiple devices ✓

2. **Semantic HTML5**
   - Proper elements used throughout ✓
   - Heading hierarchy maintained ✓
   - Form elements accessible ✓

3. **CSS Architecture**
   - CSS Grid for layouts ✓
   - Flexbox for components ✓
   - Variables for maintainability ✓
   - No Bootstrap/Tailwind ✓

4. **Vanilla JavaScript**
   - No frameworks used ✓
   - Interactive features functional ✓
   - Form validation working ✓
   - No dependencies ✓

5. **Accessibility**
   - WCAG guidelines followed ✓
   - Keyboard navigation supported ✓
   - Proper color contrast ✓
   - Reduced motion respected ✓

6. **Professional Quality**
   - Production-ready code ✓
   - Portfolio-quality design ✓
   - Smooth animations ✓
   - Clean architecture ✓

---

## 👨‍💻 Code Examples

### Responsive Image with CSS Grid
```css
.projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--spacing-xl);
}
```

### Accessible Form Label
```html
<div class="form-group">
    <label for="email" class="form-label">Email</label>
    <input type="email" id="email" name="email" required>
</div>
```

### JavaScript Form Validation
```javascript
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
```

### Scroll-Reveal Animation
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
```

---

## 📝 License

This project is created for educational purposes as part of the DecodeLab Full Stack Development Internship - Project 1.

© 2026 ARCHORA. All rights reserved.

---

## 🤝 Support

For questions or issues, refer to:
- The comments in the source code
- The inline documentation
- Web standards documentation (MDN, W3C)
- Accessibility guidelines (WCAG 2.1)

---

**Built with ❤️ using HTML5, CSS3 & Vanilla JavaScript**

*Designing Digital Experiences That Adapt.*
