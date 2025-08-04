# Liz Dorman - Personal Website (React)

A modern, responsive personal website built with React that closely replicates the original lizdorman.com design.

## Features

- **React Components**: Modular, reusable components
- **React Router**: Client-side routing between pages
- **Responsive Design**: Works perfectly on all devices
- **Modern Styling**: Clean, professional design
- **Timeline Page**: Interactive timeline of experiences
- **Accessibility**: Built with accessibility best practices

## Project Structure

```
lizPersonalWebsite/
├── public/
│   ├── assets/           # Images and static assets
│   └── index.html        # Main HTML file
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.js     # Navigation header
│   │   ├── Header.css
│   │   ├── TimelineCard.js
│   │   └── TimelineCard.css
│   ├── pages/           # Page components
│   │   ├── Home.js      # Homepage
│   │   ├── Home.css
│   │   ├── Timeline.js  # Timeline page
│   │   └── Timeline.css
│   ├── App.js           # Main app component
│   ├── App.css          # Global styles
│   └── index.js         # App entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your profile picture**:
   - Place your profile picture in `public/` as `liz_humane_pic.jpeg`
   - Or update the image path in `src/pages/Home.js`

3. **Add timeline images** (optional):
   - Place images in `public/assets/`
   - Update image paths in `src/pages/Timeline.js`

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open your browser**:
   - Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Customization

### Content Updates

- **Homepage**: Edit `src/pages/Home.js`
- **Timeline**: Edit the `timelineData` array in `src/pages/Timeline.js`
- **Navigation**: Update `src/components/Header.js`

### Styling

- **Global styles**: Edit `src/App.css`
- **Header styles**: Edit `src/components/Header.css`
- **Homepage styles**: Edit `src/pages/Home.css`
- **Timeline styles**: Edit `src/pages/Timeline.css` and `src/components/TimelineCard.css`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.js`
3. Add navigation link in `src/components/Header.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features
- **Create React App** - Build tool and development environment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized bundle size
- Lazy loading for images
- Efficient component rendering
- Responsive design for all devices

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Reduced motion support

## License

This is a personal website template. Feel free to use and modify as needed. 