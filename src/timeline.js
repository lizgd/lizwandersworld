// Timeline JavaScript file
import { createStarField, createShootingStar } from './utils/starfield.js';
import { handleImageError } from './utils/placeholder.js';

// Timeline data structure - Year-based organization
const timelineData = {
    "Today": {
        subtitle: "making the world a more fascinating place",
        items: [
            {
                title: "exploring", 
                period: "August 2025 - Present",
                subtitle: "new era",
                // description: "more soon",
                // image: "assets/images/hp_iq_logo.png",
                type: "work",
                // link: "https://www.hp-iq.com/"
            },
            {
                title: "Senior Product Engineer, Design", 
                period: "March - July 2025",
                subtitle: "HP IQ",
                description: "Through Humane acquisition. Making work not feel like work. Board, exec, and partner demos, making windows pretty awesome, secret stuff, learning a lot about iconic american companies. Best team - btw, they are hiring!",
                image: "assets/images/hp_iq_logo.svg",
                type: "work",
                link: "https://www.hp-iq.com/"
            },
            {
                title: "Humane Acquired by HP", 
                period: "March 2025",
                subtitle: "The end of an era",
                // description: "Through Humane acquisition. Making work not feel like work.",
                // image: "assets/images/hp_iq_logo.svg",
                type: "milestone",
                // link: "https://www.hp-iq.com/"
            },
        ]
    },
    "2024": {
        subtitle: "many prototypes, shipping a crazy device",
        items: [
            {
                title: "Texts for Democracy", 
                period: "October 2024",
                subtitle: "Friends make sure friends vote",
                description: "A project to help friends make sure friends vote. All on device, organizes your contacts by area code and makes it really easy to send GOTV texts.",
                image: "assets/images/texts4dems.png",
                type: "project",
                link: "https://textsfordemocracy.com/"
            }
        ]
    },
    "2023": {
        subtitle: "graduated, moved to SF, final stretch to ship",
        items: [
            {
                title: "Humane Releases Ai Pin", 
                period: "November 2023",
                subtitle: "The First AI Wearable",
                description: "What a conversation it stirred. What a moment to be a part of.",
                // image: "assets/images/hp_iq_logo.svg",
                type: "milestone",
                // link: "https://www.hp-iq.com/"
            },
            {
                title: "Swarms on Mars",
                period: "April 2023",
                subtitle: "Utilizing biological swarm behaviors to construct in-situ settlements on Mars",
                description: "A teaching tool for swarm behaviors and survey of current in-situ extraterrestrial settlement construction techniques all in one designed website. Created for Prof Radhika Nagpal's seminar. Geeked out about robots, space, biology, architecture, and finally learned how to code in React.",
                image: "assets/swarms_mars.png",
                type: "project",
                link: "https://example.com"
            },
            {
                title: "Redesigning Texting",
                period: "April 2023",
                subtitle: "How can texting interfaces be deconstructed, reconstructed, and rethought?",
                description: "I have a continuous contention towards our current texting interfaces. They feel constricting, overwhelming, and impersonal for interfaces we spend so much time on every day. For a visual arts class I decided to play around with ideas and finally poke fun at our current interaction patterns.",
                image: "assets/images/redesigning_texting.png",
                type: "project"
            },
            {
                title: "Fellowship Director",
                period: "Summer 2023",
                subtitle: "Interact",
                description: "Joined as a fellow in 2022. Organized the retreat to welcome the 2023 fellows <3 the community!",
                image: "assets/images/interact_logo.svg",
                type: "extracurricular"
            },
            {
                title: "Intern, Design",
                period: "May 2022 - June 2023",
                subtitle: "Humane",
                description: "Interned summer of 2022 and part time over the school year. Only the future will tell ;)",
                image: "assets/images/humane_logo.png",
                type: "work"
            }
        ]
    },
    "2022": {
        subtitle: "Building bridges between technology and human connection",
        items: [
            {
                title: "Dream Garden",
                period: "September - December 2022",
                subtitle: "Researching collaboratively made, location based AR applications",
                description: "Exploring the possibilities of geolocated, participatory digital spaces as a way to connect strangers. Can new paradigms of computing (in this case AR) be used to let people be creative together, and to build up their inhabited reality together?",
                image: "assets/images/dreamgarden.png",
                type: "project",
                link: "https://example.com"
            },
            {
                title: "Visualizing History",
                period: "April 2022",
                subtitle: "Making Princeton's Racialized History Visible through AR",
                description: "Though Princeton University is often lauded for its academic excellence and research achievements, its history with institutionalized racism is lesser-known. To bring this history to light and in an effort to hold the university accountable for its past, we developed an AR experience to highlight stories of some of the earliest Black students and employees on campus.",
                image: "assets/visualizing_history.png",
                type: "project"
            },
            {
                title: "Trip Co-Director",
                period: "January 2022",
                subtitle: "Fostering a community of mission-driven people at Princeton",
                description: "Organized a 20 student trip for a magical week of meeting with future-focused Silicon Valley legends. Meaningful conversations, fun times, funny moments, life changing reflections, lots of planning work + life skills, and a new family. Worth the sweat.",
                image: "assets/trip_director.png",
                type: "extracurricular"
            },
            {
                title: "Dynamic City",
                period: "April 2022",
                subtitle: "Proposition for a future human driven, modular, tech enabled city",
                description: "Exploring the possibilities of ever dynamic, modular cities that are changed through inhabitant participation via technology. Made associated iOS app to demonstrate ideas. How can we make a participatory, dynamic urban landscape?",
                image: "assets/dynamic_city.png",
                type: "project"
            },
            {
                title: "Space Ads: A Visual Anthology",
                period: "December 2022",
                subtitle: "A Book looking at Space Advertising since the 1980s",
                description: "Coca Cola. KFC branded eggs. Pizza Hut pizza. Israeli milk. Pepsi. Cookies by Doubletree by Hilton. These are just some of the things that have been in space. This book looks at the history of space advertising in a visual sense.",
                image: "assets/space_ads.png",
                type: "project"
            }
        ]
    },
    "2021": {
        subtitle: "Beginning the journey at Princeton",
        items: [
            {
                title: "First Year at Princeton",
                period: "September 2021 - June 2022",
                subtitle: "Princeton University",
                description: "Started my journey at Princeton University, exploring computer science, design, and the intersection of technology and creativity.",
                type: "education"
            }
        ]
    },
    "2020": {
        subtitle: "A year of exploration and growth during unprecedented times",
        items: [
            {
                title: "Historic SF",
                period: "June 2022",
                subtitle: "Geolocated Historical Photos of SF",
                description: "Experimenting with geo-located content while living in SF. How can we connect with the history of a place?",
                image: "assets/historic_sf.png",
                type: "project"
            },
            {
                title: "Intern",
                period: "June - September 2020, March - August 2021",
                subtitle: "Apple, Technology Development Group",
                description: "AR/VR Applications. Helping define some very cool future focused things. Geeking out. Meeting amazing people. :)",
                image: "assets/apple_logo.png",
                type: "work"
            },
            {
                title: "Geomessages",
                period: "November 2020",
                subtitle: "Location Based Messages",
                description: "Experimenting with geo-located text messages. Can they act as a means of exploration and creating stronger relationships?",
                image: "assets/geomessages.png",
                type: "project"
            },
            {
                title: "Historic NYC",
                period: "October 2020",
                subtitle: "Geolocated Historical Photos of NYC",
                description: "Experimenting with geo-located content while living in NYC. How can we connect with the history of a place?",
                image: "assets/historic_nyc.png",
                type: "project"
            },
            {
                title: "Organic Table",
                period: "December 2020",
                subtitle: "Homemade, Organic Looking Table",
                description: "Our spaces impact how we think and feel. How can furniture make us feel more creative, fluid, and focused?",
                image: "assets/organic_table.png",
                type: "project"
            },
            {
                title: "Lovely Brains",
                period: "December 2020 - present",
                subtitle: "Information Management Tool",
                description: "How can we cut through information overload and organize what we find meaningful in a useful way? Can technology extend our memory?",
                image: "assets/lovely_brains.png",
                type: "project"
            },
            {
                title: "Dreamworld",
                period: "March 2020",
                subtitle: "Creating Imaginative, Personal Worlds",
                description: "As VR goes becomes more mainstream, it allows us to create worlds that can only exist digitally. What worlds can we create?",
                image: "assets/dreamworld.png",
                type: "project"
            },
            {
                title: "Fellow",
                period: "May 2019 - May 2020",
                subtitle: "Slavin Family Foundation",
                description: "The fellowship 'provides support to dedicated students that have a desire to contribute to humanity and the ability and discipline to bring entrepreneurial ideas to life'. So grateful to be part of this family!",
                image: "assets/slavin.png",
                type: "award"
            },
            {
                title: "Gap Year Starts!",
                period: "May 2020",
                subtitle: "",
                description: "",
                image: "assets/gap_year.png",
                type: "milestone"
            }
        ]
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Timeline Initialized');
    
    // Create star field background
    const starfieldController = createStarField(1.5);
    
    // Add shooting stars occasionally
    const starfield = document.getElementById('starfield');
    if (starfield) {
        setInterval(() => {
            if (Math.random() < 0.3) {
                createShootingStar(starfield);
            }
        }, 4000);
    }
    
    // Initialize timeline
    initializeTimeline(starfieldController);
    
    // Add scroll-based star speed control
    let lastScrollY = window.scrollY;
    let scrollDirection = 0; // 0 = no scroll, 1 = down, -1 = up
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        
        // Determine scroll direction
        if (Math.abs(scrollDelta) > 5) { // Threshold to avoid tiny movements
            scrollDirection = scrollDelta > 0 ? 1 : -1;
            
            // Adjust star speed based on scroll direction
            if (scrollDirection === 1) {
                // Scrolling down - speed up stars
                starfieldController.setSpeed(4.0);
            } else {
                // Scrolling up - stars move backwards
                starfieldController.setSpeed(-2.0);
            }
        }
        
        lastScrollY = currentScrollY;
        
        // Reset to normal speed after a short delay
        setTimeout(() => {
            starfieldController.setSpeed(0.5);
        }, 200);
    });
});

function initializeTimeline(starfieldController) {
    const container = document.querySelector('.content-container');
    if (!container) return;
    
    // Data is already grouped by year
    const groupedData = timelineData;
    
    // Create timeline HTML
    const timelineHTML = createTimelineHTML(groupedData);
    container.innerHTML = timelineHTML;
    
    // Initialize animations and interactions
    initializeAnimations();
    initializeFilters();
    
    // Add profile picture navigation
    console.log('Initializing profile navigation...'); // Debug log
    initializeProfileNavigation(starfieldController);
}

function createTimelineHTML(groupedData) {
    const years = Object.keys(groupedData).sort((a, b) => {
        if (a === 'Today') return -1;
        if (b === 'Today') return 1;
        return parseInt(b) - parseInt(a);
    });
    
    let html = `
        <div class="profile-nav">
            <img 
                src="assets/liz_squiggly_prof_pic.png" 
                alt="Liz Dorman" 
                class="profile-pic-nav"
                id="profile-pic-nav"
            >
        </div>

        <div class="timeline-header">
            <h1 class="timeline-title">What I've Done - A Timeline</h1>
            <p class="timeline-description">Because timelines put information into perspective,<br>& everything builds off what came before.</p>
        </div>
        
        <div class="timeline-filters">
            <button class="filter-btn" data-type="work">Work</button>
            <button class="filter-btn" data-type="project">Projects</button>
            <button class="filter-btn" data-type="extracurricular">Extracurriculars</button>
            <button class="filter-btn" data-type="awards">Awards</button>
            <button class="filter-btn" data-type="education">Education</button>
            <button class="filter-btn" data-type="milestone">Milestones</button>
        </div>
        
        <div class="timeline-container">
    `;
    
    years.forEach(year => {
        html += createYearSection(year, groupedData[year]);
    });
    
    html += `
        </div>
        
        <div class="timeline-footer">
            <p class="footer-text">Since you scrolled this far...</p>
            <p class="footer-description">
                I grew up tinkering with electronics and computers. Learning how things worked captivated me. 
                I took apart computers, dual booted laptops, taught myself how to code, made some simple robots and apps, 
                jailbroke devices... electrocuted myself a few times, burned a few batteries, used power tools and somehow still have my limbs...
            </p>
            <p class="footer-description">
                These technical endeavors combined with traveling around the world with my family made me the person I am today. 
                They made me endlessly curious, not afraid to ask stupid questions, and approach the world with an open mind and with eyes wide open.
            </p>
            <p class="footer-description">
                I believe that technology should serve humanity, not the other way around. 
                I'm excited to see what we can build together.
            </p>
        </div>
    `;
    
    return html;
}

function createYearSection(year, yearData) {
    const items = yearData.items || yearData; // Handle both new and old structure
    const subtitle = yearData.subtitle || '';
    
    let html = `
        <div class="year-section" data-year="${year}">
            <h2 class="year-header">${year}</h2>
            ${subtitle ? `<p class="year-subtitle">${subtitle}</p>` : ''}
            <div class="cards-container">
    `;
    
    items.forEach((item, index) => {
        html += createCardHTML(item, index);
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

function createCardHTML(item, index) {
    const cardClass = `timeline-card ${item.type}-card`;
    const imagePath = item.image || '';
    
    let html = `
        <div class="${cardClass}" data-type="${item.type}" data-index="${index}" ${item.link ? `onclick="window.open('${item.link}', '_blank')"` : ''}>
            ${imagePath ? `
            <div class="card-image">
                <img src="${imagePath}" alt="${item.title}" loading="lazy" 
                     onerror="handleImageError(this, '${item.title}', '${item.type}')">
            </div>
            ` : ''}
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-period">${item.period}</p>
                ${item.subtitle ? `<p class="card-subtitle">${item.subtitle}</p>` : ''}
                ${item.description ? `<p class="card-description">${item.description}</p>` : ''}
            </div>
        </div>
    `;
    
    return html;
}

function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all cards
    document.querySelectorAll('.timeline-card').forEach(card => {
        observer.observe(card);
    });
    
    // Smooth scroll for year navigation
    document.querySelectorAll('.year-header').forEach(header => {
        header.addEventListener('click', () => {
            const yearSection = header.closest('.year-section');
            yearSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.timeline-card');
    const hiddenTypes = new Set(); // Track which categories are hidden
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.dataset.type;
            
            // Toggle this category
            if (hiddenTypes.has(filterType)) {
                // Show this category
                hiddenTypes.delete(filterType);
                button.classList.remove('active');
            } else {
                // Hide this category
                hiddenTypes.add(filterType);
                button.classList.add('active');
            }
            
            // Update card visibility
            cards.forEach(card => {
                if (hiddenTypes.has(card.dataset.type)) {
                    card.style.display = 'none';
                    card.classList.remove('animate-in');
                } else {
                    card.style.display = 'block';
                    card.classList.add('animate-in');
                }
            });
        });
    });
}

function initializeProfileNavigation(starfieldController) {
    const profilePic = document.getElementById('profile-pic-nav');
    console.log('Profile pic element:', profilePic); // Debug log
    
    if (!profilePic) {
        console.error('Profile picture not found!');
        return;
    }
    
    profilePic.addEventListener('click', () => {
        // Fade out everything on the page except the starfield
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            if (element !== document && element !== document.documentElement && element !== document.body && element !== starfield) {
                element.style.transition = 'opacity 0.5s ease-in';
                element.style.opacity = '0';
            }
        });
        
        // Speed up starfield to lightspeed
        starfieldController.setSpeed(30);
        
        // After 0.5 seconds, fade out the starfield and navigate
        setTimeout(() => {
            const starfield = document.getElementById('starfield');
            if (starfield) {
                starfield.style.transition = 'opacity 0.1s ease-out';
                starfield.style.opacity = '0';
            }
            
            // Navigate to the new page after starfield fades
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 100);
        }, 500);
    });
    
    console.log('Click event attached to profile pic'); // Debug log
}

// Add fade out animation to CSS
if (!document.querySelector('#fade-out-style')) {
    const style = document.createElement('style');
    style.id = 'fade-out-style';
    style.textContent = `
        @keyframes fadeOutPage {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Make handleImageError globally available
window.handleImageError = handleImageError;

// Add some fun console messages
console.log('%cHi, I\'m Liz! 🌟', 'color: #38bdf8; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my timeline!', 'color: #d946ef; font-size: 14px;'); 