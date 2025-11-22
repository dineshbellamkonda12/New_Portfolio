# Sai Dinesh Bellamkonda - 3D Portfolio

A stunning, modern portfolio website built with React, TypeScript, and Three.js featuring beautiful 3D effects and smooth animations.

## Features

- **3D Interactive Elements**: Animated 3D spheres and floating objects using Three.js and React Three Fiber
- **Smooth Animations**: Framer Motion powered animations throughout the site
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Beautiful gradient effects, glassmorphism, and smooth scrolling
- **Dynamic Sections**:
  - Hero section with animated 3D sphere
  - About section with statistics
  - Skills section with 3D floating boxes and animated progress bars
  - Experience timeline with detailed work history
  - Projects showcase with filtering capabilities
  - Education & certifications
  - Contact form with social links
- **Particle Background**: Animated particle field for visual appeal

## Technologies Used

- **Frontend**: React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Styling**: CSS3 with modern features
- **Utilities**: React Intersection Observer for scroll animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-3d
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized build will be in the `build` folder.

## Deployment

This project can be deployed to various platforms:

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the React configuration
3. Deploy!

### Azure Static Web Apps
1. Create a new Static Web App in Azure
2. Connect your GitHub repository
3. Set build folder: `build`
4. Deploy using CI/CD pipeline

## Customization

To customize the portfolio with your own information:

1. **Personal Information**: Update data in each component:
   - `Hero.tsx` - Name, title, description
   - `About.tsx` - Bio and stats
   - `Skills.tsx` - Your skills and proficiency levels
   - `Experience.tsx` - Work experience
   - `Projects.tsx` - Your projects
   - `Education.tsx` - Education and certifications
   - `Contact.tsx` - Contact information

2. **Colors**: Modify the gradient colors in CSS files:
   - Primary: `#667eea`
   - Secondary: `#764ba2`

3. **3D Effects**: Adjust 3D object properties in:
   - `Hero.tsx` - Main sphere
   - `Skills.tsx` - Floating boxes
   - `ParticlesBackground.tsx` - Particle field

## Performance Optimization

- Uses React.memo and useCallback where appropriate
- Lazy loading for heavy 3D components
- Optimized animations with GPU acceleration
- Efficient scroll listeners with debouncing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

**Sai Dinesh Bellamkonda**
- Email: dineshbellamkonda@icloud.com
- LinkedIn: [linkedin.com/in/sai-dinesh-161a0a269](https://www.linkedin.com/in/sai-dinesh-161a0a269)
- GitHub: [github.com/dineshbellamkonda12](https://github.com/dineshbellamkonda12)

---

Built with React, TypeScript, and Three.js
