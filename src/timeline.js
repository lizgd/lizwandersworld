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
                title: "Interface.Click", 
                period: "ongoing",
                subtitle: "Uniting the Computer Kiddos",
                description: "Community of wonderful humans at the intersection of interaction, computing, and entrepreneurship. Bimonthly events.",
                image: "assets/images/2025/interfaceclick.png",
                type: "extracurricular",
                link: "https://www.interface.click/"
            },
            {
                title: "Senior Product Engineer, Design", 
                period: "March - July 2025",
                subtitle: "HP IQ",
                description: "Through Humane acquisition. Making work not feel like work. Board, exec, and partner demos, making windows pretty awesome, more secret stuff, learning a lot about iconic american companies. Best team - btw, they are hiring!",
                image: "assets/images/2025/hp_iq_logo.svg",
                type: "work",
                link: "https://www.hp-iq.com/"
            },
            {
                title: "Anything But Squircles", 
                period: "May 2025",
                subtitle: "Figma Plugin",
                description: "First plugin! Rounded recs and circles are so boring, how can we bring more funk to our interfaces?",
                image: "assets/images/2025/anythingbutsquircles.png",
                type: "project",
                link: "https://www.figma.com/community/plugin/1501433341896950299/anything-but-squircles"
            },
            {
                title: "Humane Acquired by HP", 
                period: "March 2025",
                subtitle: "The end of one era, but the ideas live on",
                // description: "Through Humane acquisition. Making work not feel like work.",
                image: "assets/images/2025/eclipse.png",
                type: "milestone",
                link: "https://investor.hp.com/news-events/news/news-details/2025/HP-Accelerates-AI-Software-Investments-to-Transform-the-Future-of-Work/default.aspx"
            },
            {
                title: "Today on Earth", 
                period: "February 2025",
                subtitle: "Truly Global News",
                description: "Visualize news on the globe, all ai-geolocated from the top news sources. The way I personally want to injest whats happening. Textflight coming soon.",
                image: "assets/images/2025/todayonearth.png",
                type: "project",
                // link: "https://todayonearth.com/"
            },
        ]
    },
    "2025": {
        subtitle: "many prototypes, shipping a crazy device",
        items: [
            
            {
                title: "Texts for Democracy", 
                period: "October 2024",
                subtitle: "Friends make sure friends vote",
                description: "A project to help friends make sure friends vote. All on device, organizes your contacts by area code and makes it really easy to send GOTV texts.",
                image: "assets/images/2024/texts4dems.png",
                type: "project",
                link: "https://textsfordemocracy.com/"
            },

            {
                title: "Ai Pin Mania", 
                period: "2024",
                subtitle: "Demoing the Future",
                description: "Yeah, it was a crazy time. What a roller coaster to be a part of. So many features made and shipped, behind the scenes explorations, and so much more.",
                image: "assets/images/2024/mwc.png",
                type: "milestone",
                link: "https://www.humane.com/"
            },
        ]
    },
    "2024": {
        subtitle: "many prototypes, shipping a crazy device",
        items: [
            {
                title: "Product Engineer, Design",
                period: "July 2023 - February 2025",
                subtitle: "Humane",
                description: "So many memories, so many friendships, so many learnings. What a time to dream with incredible people.",
                image: "assets/images/humane_logo.png",
                type: "work",
                link: "https://www.humane.com/"
            },
            {
                title: "Humane Releases Ai Pin", 
                period: "November 2023",
                subtitle: "The First AI Wearable",
                description: "What a conversation it stirred. What a moment to be a part of. What a ramp up to ship.",
                image: "assets/images/2023/aipin.png",
                type: "milestone",
                link: "https://vimeo.com/882968794"
            },
            {
                title: "Fellowship Director",
                period: "Summer 2023",
                subtitle: "Interact",
                description: "Joined as a fellow in 2022. Organized the retreat to welcome the 2023 fellows <3",
                image: "assets/images/2023/interact.png",
                type: "extracurricular",
                link: "https://joininteract.com/"
            },
            {
                title: "Graduated Princeton", 
                period: "May 2023",
                subtitle: "Go Tigers!",
                description: "Major in Computer Science. Minors in Architecture & Computation, Technology & Society. Tau Beta Pi (top 20% in the engineering school). Sigma Xi (Scientific Research Honor Society).",
                image: "assets/images/2023/nassau.png",
                type: "milestone",
            },
            {
                title: "Swarms on Mars",
                period: "April 2023",
                subtitle: "Utilizing biological swarm behaviors to construct in-situ settlements on Mars",
                description: "A teaching tool for swarm behaviors and survey of current in-situ extraterrestrial settlement construction techniques all in one designed website. Created for Prof Radhika Nagpal's seminar. Geeked out about robots, space, biology, architecture, and finally learned how to code in React.",
                image: "assets/images/2023/mars.png",
                type: "project",
                link: "https://mars-swarms.vercel.app/"
            },
            {
                title: "Redesigning Texting",
                period: "April 2023",
                subtitle: "How can texting interfaces be deconstructed, reconstructed, and rethought?",
                description: "I have a continuous contention towards our current texting interfaces. They feel constricting, overwhelming, and impersonal for interfaces we spend so much time on every day. For a visual arts class I decided to play around with ideas and finally poke fun at our current interaction patterns.",
                image: "assets/images/2023/redesigningtexting.png",
                type: "project"
            },
        ]
    },
    "2023": {
        subtitle: "graduated, moved to SF",
        items: [
            
            {
                title: "Space Ads: A Visual Anthology",
                period: "December 2022",
                subtitle: "A Book looking at Space Advertising since the 1980s",
                description: "Coca Cola. KFC branded eggs. Pizza Hut pizza. Israeli milk. Pepsi. Cookies by Doubletree by Hilton. These are just some of the things that have been in space. This book looks at the history of space advertising in a visual sense.",
                image: "assets/images/2022/spaceads.png",
                type: "project",
                link: "https://drive.google.com/file/d/1afvXFw7DysgzulXxLZG-GOLWTGX1P03z/view?usp=drive_link"
            },

            {
                title: "Dream Garden",
                period: "September - December 2022",
                subtitle: "Researching collaboratively made, location based AR applications",
                description: "Exploring the possibilities of geolocated, participatory digital spaces as a way to connect strangers. Can new paradigms of computing (in this case AR) be used to let people be creative together, and to build up their inhabited reality together? I think yes, and that this is something that needs to be explored more. Accepted to CHI '23. See paper.",
                image: "assets/images/2022/dreamgarden.png",
                type: "project",
                link: "https://dl.acm.org/doi/10.1145/3544549.3585810"
            },
            {
                title: "Intern, Design",
                period: "May 2022 - June 2023",
                subtitle: "Humane",
                description: "Interned summer of 2022 and part time over the school year. Ah, the days when we were just discovering the potential of AI computing and experiencing the early days of the future.",
                image: "assets/images/humane_logo.png",
                type: "work",
                link: "https://www.humane.com/"
            },
            {
                title: "Historic SF",
                period: "June 2022",
                subtitle: "Geolocated SFPL Historical Photos of SF",
                description: "Experimenting with geo-located content while living in SF. How can we connect with the history of a place? Download in the app store.",
                image: "assets/images/2022/geosf.png",
                type: "project",
                link: "https://apps.apple.com/us/app/geosf-history-in-location/id1660500321"
            },
            {
                title: "Dynamic City",
                period: "April 2022",
                subtitle: "Proposition for a future human driven, modular, tech enabled city",
                description: "Exploring the possibilities of ever dynamic, modular cities that are changed through inhabitant participation via technology. Made associated iOS app to demonstrate ideas. How can we make a participatory, dynamic urban landscape? See presentation.",
                image: "assets/images/2022/dynamic_city.png",
                type: "project",
                link: "https://drive.google.com/file/d/1I_YT7I4S5ZGqL9wjaVFYV3zEQpgNdPJO/view?usp=sharing"
            },
            {
                title: "Visualizing History",
                period: "April 2022",
                subtitle: "Making Princeton's Racialized History Visible through AR",
                description: "Though Princeton University is often lauded for its academic excellence and research achievements, its history with institutionalized racism is lesser-known. To bring this history to light, we developed an AR experience to highlight stories of some of the earliest Black students and employees on campus.",
                image: "assets/images/2022/vishistory.png",
                type: "project",
                link: "https://drive.google.com/file/d/1lnydOToPkf422f40fESEhTR1cQyJyU8U/view?usp=sharing"
            },
            {
                title: "Trip Co-Director, \"mom\"",
                period: "January 2022",
                subtitle: "Silicon Valley Tiger Trek",
                description: "Organized trip for 20 of Princeton's most entrepreneurial students to meet with future-focused Silicon Valley legends. Meaningful conversations, fun times, life changing reflections, lots of planning work + life skills, and a new family. Worth the sweat.",
                image: "assets/images/2022/svtt.png",
                type: "extracurricular",
                link: "https://svtigertrek.com/"
            },
        ]
    },
    "2022": {
        subtitle: "all the work aligning",
        items: [
            {
                title: "Bello",
                period: "September 2021 - December 2023",
                subtitle: "An Experiment in Designing Better Social Apps",
                description: "Location-based social app to enable more serendipitous small world moments. Got 100+ friends on it and had a lot of fun coding and designing it!",
                image: "assets/images/2021/bello_logo.png",
                type: "project"
            },
            {
                title: "Managing Director",
                period: "June 2021 - June 2022",
                subtitle: "Investing in an Uniquely Princeton Entrepreneurial Culture",
                description: "Lead 45 person team as we provide grants and education to student founders. PSV is our experiment to see if we can change our campus culture to be more entrepreneurial - through providing resources, access, education, and the space for action.",
                image: "assets/images/2020/psv.png",
                type: "work",
                link: "https://www.psv.vc/"
            },
            {
                title: "Prototyping Intern",
                period: "March - August 2021",
                subtitle: "Apple, Technology Development Group",
                description: "AR applications prototyping. Helping define some very cool future things. Geeking out. Meeting amazing people. :)",
                image: "assets/images/2021/applelogo.png",
                type: "work"
            },
        ]
    },
    "2021": {
        subtitle: "gap year era (also covid era)",
        items: [
            {
                title: "Lovely Brains",
                period: "December 2020",
                subtitle: "Information Management Tool",
                description: "How can we cut through information overload and organize information somewhat of a treasure chest of things we find interesting? Can technology extend our memory?",
                image: "assets/images/2020/lovelybrain.png",
                type: "project"
            },
            {
                title: "Organic Table",
                period: "December 2020",
                subtitle: "Homemade, Organic Looking Table",
                description: "Our spaces impact how we think and feel. How can furniture make us feel more creative, fluid, and focused?",
                image: "assets/images/2020/table.png",
                type: "project"
            },
            {
                title: "Geomessages",
                period: "November 2020",
                subtitle: "Location Based Messages",
                description: "Experimenting with geo-located text messages. Can they act as a means of exploration and creating stronger relationships?",
                image: "assets/images/2020/geomessages.png",
                type: "project"
            },
            {
                title: "Historic NYC",
                period: "October 2020",
                subtitle: "Geolocated NYPL Historical Photos of NYC",
                description: "Experimenting with geo-located historical content while living in NYC. How can we connect with the history of a place? In the app store.",
                image: "assets/images/2020/geonyc.png",
                type: "project",
                link: "https://apps.apple.com/us/app/geonyc-history-in-location/id1660469106"
            },
            {
                title: "Prototyping Intern",
                period: "June - September 2020",
                subtitle: "Apple, Vision Development Group",
                description: "Vision Pro apps prototyping (vOS). Apple Freeform early prototyping (iOS).",
                image: "assets/images/2020/visionpro.png",
                type: "work"
            },
            {
                title: "Gap Year Starts!",
                period: "May 2020",
                subtitle: "Covid Era",
                description: "Spent 4 months at Apple, 5 months traveling to 30 states and doing projects, then 6 more months at Apple.",
                // image: "assets/gap_year.png",
                type: "milestone"
            },
            {
                title: "Dreamworld",
                period: "March 2020",
                subtitle: "Creating Imaginative, Personal Worlds",
                description: "As VR goes becomes more mainstream, it allows us to create worlds that can only exist digitally. What worlds can we create? Final project for computer graphics.",
                image: "assets/images/2020/dreamworld.png",
                type: "project",
                link: "https://dreamworld-426.github.io/dreamworld/"
            },
        ]
    },
    "2020": {
        subtitle: "running around campus going to too many events",
        items: [
            {
                title: "Fellow",
                period: "May 2019 - Present",
                subtitle: "Slavin Family Foundation",
                description: "The fellowship \"provides support to dedicated students that have a desire to contribute to humanity and the ability and discipline to bring entrepreneurial ideas to life\" So grateful to be part of this family!",
                image: "assets/images/2019/slavin.png",
                type: "awards",
                link: "http://slavinfoundation.org/"
            },
            {
                title: "R&D Intern",
                period: "June - August 2019",
                subtitle: "ASTRI (Applied Science & Technology Research Institute), Hong Kong",
                description: "Created a non-intrusive brain-computer interface (BCI). Experimented with signal processing, ML, and bio-sensing. View presentation.",
                image: "assets/images/2019/astri.png",
                type: "work",
                link: "https://drive.google.com/file/d/1yJQ_Gm3bkZrCjW5DEp6eNeG9esojY_gR/view?usp=drive_link"
            },
            {
                title: "Co-President",
                period: "May 2019 - May 2020",
                subtitle: "ENVISION - The Premier College Conference about the Ethical Implications of Emerging Technologies",
                description: "Led 35 person team to organize 100+ participant, 25+ speaker conference, \"The Future of Us.\" Lead designer. Making a community of thoughtful technologists. Check out Conference 2019.",
                image: "assets/images/2019/envisionconf.png",
                type: "extracurricular",
                link: "https://drive.google.com/file/d/1fJKrvvc_AfLPxP9JMkzgws5LAXwOJTzd/view?usp=drive_link"
            },
            {
                title: "Events Chair, Design",
                period: "January 2019 - September 2020",
                subtitle: "Creating a Community of Woman Computer Scientists @ Princeton",
                description: "Organized events to bring the 200+ women in CS community together. Led redesign of logo.",
                image: "assets/images/2019/pwics.png",
                type: "extracurricular",
            },
            {
                title: "Co-President, Princeton Chapter",
                period: "January 2019 - September 2020",
                subtitle: "Creating a Community of Woman Engineers @ Princeton",
                description: "Led 13 person board to organize events, talks, and more to create a tight-knit 400+ women in STEM community.",
                image: "assets/images/2019/swe.png",
                type: "extracurricular",
            },
            {
                title: "Personal Timeline",
                period: "January 2019 - March 2020",
                subtitle: "Information Management Tool Based on Spatial Contextualization",
                description: "Yes, I had a tools for thought phase. How can we cut through information overload and recall what we intake? A direct precursor to Lovely Brains. See screenshots.",
                image: "assets/images/2019/personaltimeline.png",
                type: "project",
                link: "https://drive.google.com/drive/folders/1Rv5SuSWKUzuslAkRhB58nDipgigKl4ZK?usp=sharing"
            },
            {
                title: "Spring Break Trip Organizer",
                period: "January - March 2019",
                subtitle: "ENVISION Boston Spring Break Trip",
                description: "Led and organized deep-tech focused 15 person trip to labs and companies in exploration and discussion of emerging technologies. Met Tim Berners Lee! See post-trip poster.",
                image: "assets/images/2019/envisiontrip.png",
                type: "extracurricular",
                link: "https://drive.google.com/file/d/1O3yrngUYuQ95AlElu5Y4O2Chbo5oz91X/view"
            },
            {
                title: "Ideas for the Interconnected Age",
                period: "May 2019",
                subtitle: "Final Paper for a Seminar, Early Ideas I had about the Internet",
                description: "How can we design for eudaemonia? This (a tad embarrassing) paper features some early ideas I looked into and its fun to see how my thinking has evolved since then.",
                image: "assets/images/2019/eudaemonia.png",
                type: "project",
                link: "https://docs.google.com/document/d/1gpB6pJLUpu6LvZIYpW6xQCOV6IepDDRAfLroSKBGERU/edit?usp=sharing"
            }
        ]
    },
    "2019": {
        subtitle: "ahh, the first days of college",
        items: [
            {
                title: "Enrolled at Princeton", 
                period: "September 2018",
                // subtitle: "Princeton University",
                // description: "One of 350 students chosen to attend Apple's WWDC free of charge. Geeked out. Met amazing people. Was inspired.",
                image: "assets/images/2018/princeton.png",
                type: "milestone",
            },
            {
                title: "Graduated High School", 
                period: "June 2018",
                subtitle: "Valedictorian",
                // description: "One of 350 students chosen to attend Apple's WWDC free of charge. Geeked out. Met amazing people. Was inspired.",
                image: "assets/images/2018/grad.png",
                type: "milestone",
            },
            {
                title: "WWDC Scholar 2018", 
                period: "June 2018",
                subtitle: "Apple's World Wide Developers Conference 2017",
                description: "One of 350 students chosen to attend Apple's WWDC free of charge. Geeked out. Met amazing people. Was inspired.",
                image: "assets/images/2018/wwdc18.png",
                type: "awards",
                link: "https://www.apple.com/newsroom/2018/06/highlights-from-wwdc-2018/"
            },
        ]
    },
    "2018": {
        subtitle: "High School Days (aka the formational cocoon years)",
        items: [
            {
                title: "Dual-Enrollment Student", 
                period: "September 2017 - May 2018",
                subtitle: "Princeton University CS Dept",
                description: "Took college level classes (algorithms, data structures, computational biology) as a high schooler. Loved it!",
                image: "assets/images/2017/princetoncs.png",
                type: "education",
            },
            {
                title: "NJ GSET Scholar & Researcher", 
                period: "June - July 2017",
                subtitle: "NJ Governor's School of Engineering and Technology",
                description: "One of 72 NJ engineering students selected to participate in summer research and classes. Research in bipedal robotics published in IEEE.",
                image: "assets/images/2017/gset.png",
                type: "work",
                link: "https://youtu.be/NK_6Aq95Jlc?si=3N6Bz8GahBp_fEPH"
            },
            {
                title: "WWDC Scholar 2017", 
                period: "June 2017",
                subtitle: "Apple's World Wide Developers Conference 2017",
                description: "One of 350 students chosen to attend Apple's WWDC free of charge. Geeked out. Met amazing people. Was inspired.",
                image: "assets/images/2017/wwdc17.png",
                type: "awards",
                link: "https://www.apple.com/newsroom/2017/06/highlights-from-wwdc-2017/"
            },
            {
                title: "SMS Bot for the Wilderness", 
                period: "May 2017",
                subtitle: "Stuck with 2G? No Worries - Using Text Messages to Connect to the Internet",
                description: "How can we still stay connected to information when off grid? Published in Makezine.",
                image: "assets/images/2017/smsbot.png",
                type: "project",
                link: "https://makezine.com/projects/sms-bot/?fbclid=IwAR24vAd0ReyZc0et6m2no58NNeNL5kJFy4aeR-1D7Ybw_xLOovD-meYMYhw"
            },
            {
                title: "NCWIT National Award Recipient", 
                period: "March 2017",
                subtitle: "National Center for Women in Information Technology",
                description: "One of 50 out of 3500 students awarded the national award for inspiring women to pursue STEM in our communities.",
                image: "assets/images/2017/ncwit.png",
                type: "awards",
                link: "https://www.aspirations.org/"
            },
            {
                title: "Class Reveal", 
                period: "May 2016 - August 2017",
                subtitle: "App for High Schoolers to see who is in their Classes. Used by 90% of School District",
                description: "In team of 3 designed, coded, and marketed app that became notorious at my high school with 2k+ users. Still an entrepreneurial project that is continued by students today!",
                image: "assets/images/2017/classreveal.png",
                type: "project",
                // link: "https://devpost.com/software/alzeimer-s-companion"
            },
            {
                title: "Alzheimers Companion", 
                period: "February 2017",
                subtitle: "Intuitive Tool to Assist People with Alzheimer's and Dementia",
                description: "Using a web app, smart watch, and Alexa to create tools for patients and caregivers. Won Best Assistive Technology and Best Use of AWS at HackNYU.",
                image: "assets/images/2017/alzheimersCompanion.png",
                type: "project",
                link: "https://devpost.com/software/alzeimer-s-companion"
            },
            {
                title: "Expeditor", 
                period: "February 2017",
                subtitle: "Optimizing the Restaurant Experience with Technology",
                description: "Using a web app, smart watch, and Alexa to create ordering, analytics, and restaurant organization tool. Won 1st Place and Business Award at ProfHacks.",
                image: "assets/images/2017/expeditor.png",
                type: "project",
                link: "https://devpost.com/software/expediter"
            },
        ]
    },
    "2017": {
        subtitle: "...more high school days... (still scrolling? 😮 ...more cocoon years)",
        items: [
            {
                title: "Research Intern", 
                period: "Summer 2016",
                subtitle: "Princeton University MIRTHE Program",
                description: "Researched acoustic optics in Prof Craig Arnold's MAE lab. Presented poster.",
                image: "assets/images/2016/mirthe.png",
                type: "work",
                link: "https://drive.google.com/file/d/11_OCBpMzYLxNlxO7WM40bQ0HQJ0NqJdR/view?usp=sharing"
            }
        ]
    },
    "2016": {
        subtitle: "...classes, running, robotics...",
        items: [
            {
                title: "Hanban Bridge Program", 
                period: "Summer 2015",
                subtitle: "All-Expenses Paid Trip to Learn Chinese Language and Culture in China",
                description: "Practiced my Chinese and had my eyes opened. Chosen to be the female hostess at the final celebration of 500, which was all in Chinese. What an experience. 你好!",
                image: "assets/images/2015/hanban.png",
                type: "work",
                // link: "https://photos.app.goo.gl/u9dd3kHgo7QpfuW68"
            },
            {
                title: "Quadcopter", 
                period: "March - June 2015",
                subtitle: "Creating a quadcopter for ~$150",
                description: "Friend and I created our own custom quadcopter on a budget. Because flying machines are so cool! Watch a flight.",
                image: "assets/images/2015/quadcopter.png",
                type: "project",
                link: "https://photos.app.goo.gl/u9dd3kHgo7QpfuW68"
            }
        ]
    },
    "2015": {
        subtitle: "...more classes, running, robotics...",
        items: [
            {
                title: "Robotics Gal", 
                period: "2014-2017",
                subtitle: "Midknight Inventors, FRC 1923",
                description: "Yes, I was a robotics kiddo. Team was in Einstein round in 2015 which was pretty cool. Much fun playing with power tools.",
                image: "assets/images/2015/frc.png",
                type: "project"
            }
        ]
    },
    "2014": {
        subtitle: "...middle school days...",
        items: [
           
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
            <p class="timeline-description">Timelines put information into perspective,<br>& everything builds off what came before.</p>
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
                I grew up tinkering with electronics and computers. Learning how things worked captivated me. I took apart computers, dual booted laptops, taught myself how to code, made some simple robots and apps, jailbroke devices... electrocuted myself a few times, burned a few batteries, used power tools and somehow still have my limbs...
                <br>
                <br>
These technical endeavors combined with traveling around the world (currently at 70 countries!) with my family made me the person I am today. They made me endlessly curious, not afraid to ask stupid questions, and approach the world with eyes and mind wide open.
        <br>
        <br>
        <span class="highlight">I strive to keep this childlike wonder in whatever I do. </span>
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