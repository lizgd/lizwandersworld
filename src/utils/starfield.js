// Star field animation utility - Flying through space effect
export function createStarField(speed = 1) {
    const starfield = document.getElementById('starfield');
    if (!starfield) {
        console.error('Starfield element not found!');
        return;
    }

    console.log('Creating starfield with speed:', speed);
    
    const numberOfStars = 100; // Reduced for debugging
    const stars = [];
    let animationId;

    // Clear existing stars
    starfield.innerHTML = '';

    // Create stars positioned in a sphere around the center
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Position stars in a 3D sphere around the center
        const radius = Math.random() * 600 + 200; // Distance from center
        const theta = Math.random() * Math.PI * 2; // Horizontal angle
        const phi = Math.random() * Math.PI; // Vertical angle
        
        // Convert spherical coordinates to screen coordinates
        const x = 50 + (radius * Math.sin(phi) * Math.cos(theta)) / 15;
        const y = 50 + (radius * Math.sin(phi) * Math.sin(theta)) / 15;
        const z = radius; // Z coordinate for depth
        
        // Ensure minimum size for visibility
        const size = Math.max(2, (1000 - z) / 200);
        
        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 ${size * 3}px white;
            opacity: ${Math.max(0.3, (1000 - z) / 1000)};
            z-index: 1;
        `;
        
        starfield.appendChild(star);
        stars.push({
            element: star,
            x: x,
            y: y,
            z: z,
            originalZ: z
        });
    }

    console.log(`Created ${stars.length} stars`);

    // Animation function for flying through space
    function animate() {
        stars.forEach(star => {
            // Move stars toward the center (simulating flying forward)
            star.z -= speed * 1.5;
            
            // If star gets too close, reset it to the back
            if (star.z < 150) {
                star.z = star.originalZ;
                star.x = 50 + (Math.random() - 0.5) * 80;
                star.y = 50 + (Math.random() - 0.5) * 80;
            }
            
            // Calculate new screen position based on Z
            const scale = 1000 / star.z;
            const x = 50 + (star.x - 50) * scale;
            const y = 50 + (star.y - 50) * scale;
            
            // Update star position and appearance
            star.element.style.left = `${x}%`;
            star.element.style.top = `${y}%`;
            star.element.style.opacity = Math.max(0.3, (1000 - star.z) / 1000);
            
            // Update size based on distance
            const size = Math.max(2, (1000 - star.z) / 200);
            star.element.style.width = `${size}px`;
            star.element.style.height = `${size}px`;
            star.element.style.boxShadow = `0 0 ${size * 3}px white`;
        });
        
        animationId = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Return function to control speed
    return {
        setSpeed: (newSpeed) => {
            speed = newSpeed;
        },
        stop: () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        }
    };
}

// Add shooting stars occasionally
export function createShootingStar(starfield) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random starting position from edges
    const side = Math.floor(Math.random() * 4);
    let startX, startY;
    
    switch(side) {
        case 0: // top
            startX = Math.random() * 100;
            startY = -10;
            break;
        case 1: // right
            startX = 110;
            startY = Math.random() * 100;
            break;
        case 2: // bottom
            startX = Math.random() * 100;
            startY = 110;
            break;
        case 3: // left
            startX = -10;
            startY = Math.random() * 100;
            break;
    }
    
    shootingStar.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 15px white;
        left: ${startX}%;
        top: ${startY}%;
        animation: shooting-star 2s linear forwards;
        z-index: 1000;
    `;
    
    starfield.appendChild(shootingStar);
    
    // Remove shooting star after animation
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.parentNode.removeChild(shootingStar);
        }
    }, 2000);
}

// Add shooting star animation to CSS if not already present
if (!document.querySelector('#shooting-star-style')) {
    const style = document.createElement('style');
    style.id = 'shooting-star-style';
    style.textContent = `
        @keyframes shooting-star {
            0% {
                transform: translateX(0) translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateX(200px) translateY(200px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
} 