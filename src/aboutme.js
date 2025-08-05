// About Me JavaScript file
import { createStarField, createShootingStar } from './utils/starfield.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 About Me Page Initialized');
    
    // Create star field background with configurable speed
    const starfieldController = createStarField(1.5); // Speed of 1.5
    
    // Add shooting stars occasionally
    const starfield = document.getElementById('starfield');
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            createShootingStar(starfield);
        }
    }, 4000);
    
    // Profile image click handler
    const profileNav = document.querySelector('.profile-nav');
    if (profileNav) {
        profileNav.addEventListener('click', () => {
            handleLightspeedTransition();
        });
    }
    
    function handleLightspeedTransition() {
        console.log('Starting lightspeed transition back to main page...');
        
        // Get all elements to fade out
        const elementsToFade = [
            document.querySelector('.profile-nav'),
            document.querySelector('.content-container'),
            document.querySelector('.social-footer')
        ];
        
        // Fade out all elements with the fadeOutMain animation
        elementsToFade.forEach(element => {
            if (element) {
                element.style.animation = 'fadeOutMain 0.3s ease-out forwards';
            }
        });
        
        // Speed up starfield to lightspeed
        starfieldController.setSpeed(30);
        
        // After 0.7 seconds, fade out the starfield and navigate
        setTimeout(() => {
            const starfield = document.getElementById('starfield');
            if (starfield) {
                starfield.style.transition = 'opacity 0.1s ease-out';
                starfield.style.opacity = '0';
            }
            
            // Navigate to the main page after starfield fades
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 100);
        }, 500);
    }
});

// Add some fun console messages
console.log('%cAbout Me Page Loaded! 🌟', 'color: #38bdf8; font-size: 20px; font-weight: bold;'); 