// Main JavaScript file
import { createStarField, createShootingStar } from './utils/starfield.js';

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Liz\'s Website Initialized');
    
    // Handle browser back button navigation
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            console.log('Page restored from cache - reinitializing...');
            // Force a page reload to ensure clean state
            window.location.reload();
        }
    });
    
    // Create star field background with configurable speed
    const starfieldController = createStarField(1.5); // Speed of 1.5
    
    // Add shooting stars occasionally
    const starfield = document.getElementById('starfield');
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            createShootingStar(starfield);
        }
    }, 4000);
    
    // Example: You can change speed programmatically
    // starfieldController.setSpeed(2); // Faster
    // starfieldController.setSpeed(0.5); // Slower
    
    // Button functionality
    const whatIveDoneBtn = document.getElementById('what-ive-done-btn');
    if (whatIveDoneBtn) {
        whatIveDoneBtn.addEventListener('click', () => {
            // TODO: Navigate to "What I've Done" page
            console.log('What I\'ve Done button clicked!');
            alert('This will link to your "What I\'ve Done" page later!');
        });
    }
    
    // Circular text and profile image hover interaction
    const profileImage = document.querySelector('.profile-image img');
    const circularText = document.querySelector('.circular-text-svg text');
    
    let profileRotation = 0;
    let textRotation = 0;
    let profileSpeed = 10; // seconds per rotation
    let textSpeed = 20; // seconds per rotation
    let isHovered = false;
    let isSpinning = false;
    let animationId;
    
    function animate() {
        const now = Date.now();
        const deltaTime = (now - (animate.lastTime || now)) / 1000;
        animate.lastTime = now;
        
        // Update rotations
        profileRotation += (360 / profileSpeed) * deltaTime;
        textRotation += (360 / textSpeed) * deltaTime;
        
        // Apply rotations (preserve scale if hovering or spinning)
        const profileScale = isSpinning ? 'scale(1.5)' : (isHovered ? 'scale(1.2)' : 'scale(1)');
        const textScale = isSpinning ? 'scale(1.5)' : (isHovered ? 'scale(1.2)' : 'scale(1)');
        
        // Apply different speeds based on state
        if (isSpinning) {
            // on tap, spin super fast
            profileSpeed = 0.2; // Super fast spin
            textSpeed = 0.4; // Super fast spin
        } else if (isHovered) {
            profileSpeed = 3; // Fast hover speed
            textSpeed = 6; // Fast hover speed
        } else {
            profileSpeed = 10; // Normal speed
            textSpeed = 20; // Normal speed
        }
        
        profileImage.style.transform = `rotate(${profileRotation}deg) ${profileScale}`;
        circularText.style.transform = `rotate(${textRotation}deg) ${textScale}`;
        
        animationId = requestAnimationFrame(animate);
    }
    
    function handleHoverStart() {
        console.log('Hover started - speeding up and scaling');
        isHovered = true;
        profileSpeed = 3; // Much faster
        textSpeed = 6; // Much faster
        starfieldController.setSpeed(3);
    }
    
    function handleHoverEnd() {
        console.log('Hover ended - slowing down and scaling back');
        isHovered = false;
        starfieldController.setSpeed(1.5);
    }
    
    function handleClick() {
        console.log('Click - super fast spin!');
        isSpinning = true;
        starfieldController.setSpeed(10); // Super fast starfield
        
        // Stop spinning after 0.2 seconds
        setTimeout(() => {
            isSpinning = false;
            if (isHovered) {
                starfieldController.setSpeed(3); // Return to normal starfield speed
            } else {
                starfieldController.setSpeed(1.5); // Return to normal starfield speed
            }
            console.log('Spin animation ended');
        }, 150);
    }
    
    // Start animation
    animate();
    
    // Add event listeners to both the profile image container and circular text
    document.querySelector('.profile-image').addEventListener('mouseenter', handleHoverStart);
    document.querySelector('.profile-image').addEventListener('mouseleave', handleHoverEnd);
    document.querySelector('.circular-text-svg').addEventListener('mouseenter', handleHoverStart);
    document.querySelector('.circular-text-svg').addEventListener('mouseleave', handleHoverEnd);
    
    // Add click handlers
    document.querySelector('.profile-image').addEventListener('click', handleClick);
    document.querySelector('.circular-text-svg').addEventListener('click', handleClick);
    
    // Handle transition to whativedone page
    const circularTextLinks = document.querySelectorAll('.circular-text-link');
    circularTextLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (index === 0) {
                // First link (what i've done)
                handleLightspeedTransition('whativedone.html');
            } else if (index === 1) {
                // Second link (about me)
                handleLightspeedTransition('aboutme.html');
            } else if (index === 2) {
                // Third link (in a nutshell)
                handleLightspeedTransition('nutshell.html');
            } else if (index === 3) {
                // Fourth link (angeling)
                handleLightspeedTransition('angel.html');
            }
        });
    });
    
    function handleLightspeedTransition(destinationPage = 'whativedone.html') {
        console.log('Starting lightspeed transition to', destinationPage);
        
        // Get all elements to fade out
        const elementsToFade = [
            document.querySelector('.profile-image'),
            document.querySelector('.circular-text-svg'),
            document.querySelector('.social-footer')
        ];
        
        // Add all circular text elements
        const circularTextElements = document.querySelectorAll('.circular-text-svg-secondary');
        elementsToFade.push(...circularTextElements);
        
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
            
            // Navigate to the new page after starfield fades
            setTimeout(() => {
                window.location.href = destinationPage;
            }, 100);
        }, 500);
    }
});

// Add some fun console messages
console.log('%cHi, I\'m Liz! 🌟', 'color: #38bdf8; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my website!', 'color: #d946ef; font-size: 14px;'); 