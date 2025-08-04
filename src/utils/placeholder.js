// Placeholder image generator for timeline cards
export function generatePlaceholderImage(title, type) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 80;
    canvas.height = 80;
    
    // Background based on type
    const colors = {
        work: '#38bdf8',
        project: '#d946ef',
        extracurricular: '#10b981',
        award: '#f59e0b',
        education: '#8b5cf6',
        milestone: '#ef4444'
    };
    
    const bgColor = colors[type] || '#6b7280';
    
    // Draw background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 80, 80);
    
    // Add gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, 80, 80);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 80, 80);
    
    // Draw text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Get initials from title
    const words = title.split(' ');
    const initials = words.map(word => word[0]).join('').toUpperCase().slice(0, 2);
    
    ctx.fillText(initials, 40, 40);
    
    return canvas.toDataURL();
}

export function handleImageError(img, title, type) {
    // Replace broken image with placeholder
    img.src = generatePlaceholderImage(title, type);
    img.onerror = null; // Prevent infinite loop
} 