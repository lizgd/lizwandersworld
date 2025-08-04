import React from 'react';
import { Link } from 'react-router-dom';
import TimelineCard from '../components/TimelineCard';

const Timeline = () => {
  // Color palette for different types of items
  const getItemColor = (item) => {
    if (item.type === 'today') return '#ff6b6b';
    if (item.type === 'conclusion') return '#ffffff';
    
    // Different colors for different years or categories
    const year = parseInt(item.year);
    if (year >= 2023) return '#64b5f6'; // Blue for recent years
    if (year >= 2020) return '#81c784'; // Green for 2020-2022
    if (year >= 2018) return '#ffb74d'; // Orange for 2018-2019
    if (year >= 2016) return '#ba68c8'; // Purple for 2016-2017
    return '#e57373'; // Red for older years
  };

  const timelineData = [
    {
      id: 'today',
      type: 'today',
      year: 'Today',
      title: 'Product Engineer, Design',
      date: 'July 2023 - Present',
      company: 'Humane',
      description: 'Helping design + bring to life some beautiful ideas.',
      image: '/assets/humane-logo.jpg'
    },
    {
      id: 'swarms-mars',
      year: '2023',
      title: 'Swarms on Mars',
      date: 'April 2023',
      description: 'Utilizing biological swarm behaviors to construct in-situ settlements on Mars - a mission briefing. A teaching tool for swarm behaviors and survey of current in-situ extraterrestrial settlement construction techniques all in one designed website. Created for Prof Radhika Nagpal\'s seminar. Geeked out about robots, space, biology, architecture, and finally learned how to code in React. One day, there may be life on Mars, enabled by observing the patterns of life on Earth. These ideas are out of this world.',
      link: { text: 'Explore the website', url: '#' },
      image: '/assets/swarms-mars.png'
    },
    {
      id: 'redesigning-texting',
      year: '2023',
      title: 'Redesigning Texting',
      date: 'April 2023',
      description: 'How can texting interfaces be deconstructed, reconstructed, and rethought? I have a continuous contention towards our current texting interfaces. They feel constricting, overwhelming, and impersonal for interfaces we spend so much time on every day. For a visual arts class I decided to play around with ideas and finally poke fun at our current interaction patterns.',
      link: { text: 'See the presentation', url: '#' },
      image: '/assets/redesigning-texting.png'
    },
    {
      id: 'interact',
      year: '2023',
      title: 'Fellowship Director, "camp counselor"',
      date: 'Summer 2023',
      company: 'Interact',
      description: 'Joined as a fellow in 2022. Organized the retreat to welcome the 2023 fellows <3 the community!',
      image: '/assets/interact.png'
    },
    {
      id: 'humane-intern',
      year: '2023',
      title: 'Intern, Design',
      date: 'May 2022 - June 2023',
      company: 'Humane',
      description: 'Interned summer of 2022 and part time over the school year. Only the future will tell ;)',
      image: '/assets/humane-logo.jpg'
    },
    {
      id: 'dream-garden',
      year: '2022',
      title: 'Dream Garden',
      date: 'September - December 2022',
      description: 'Researching collaboratively made, location based AR applications. Exploring the possibilities of geolocated, participatory digital spaces as a way to connect strangers. Can new paradigms of computing (in this case AR) be used to let people be creative together, and to build up their inhabited reality together? I think yes, and that this is something that needs to be explored more. Accepted to CHI \'23.',
      link: { text: 'See paper', url: '#' },
      image: '/assets/dream-garden.png'
    },
    {
      id: 'visualizing-history',
      year: '2022',
      title: 'Visualizing History',
      date: 'April 2022',
      description: 'Making Princeton\'s Racialized History Visible through AR. Though Princeton University is often lauded for its academic excellence and research achievements, its history with institutionalized racism is lesser-known. To bring this history to light and in an effort to hold the university accountable for its past, we developed an AR experience to highlight stories of some of the earliest Black students and employees on campus and raise awareness for ongoing issues today. Final project for critical HCI class.',
      link: { text: 'See app and paper', url: '#' },
      image: '/assets/visualizing-history.jpg'
    },
    {
      id: 'trip-director',
      year: '2022',
      title: 'Trip Co-Director, "Mom"',
      date: 'January 2022',
      description: 'Fostering a community of mission-driven people at Princeton. Organized a 20 student trip for a magical week of meeting with future-focused Silicon Valley legends. Meaningful conversations, fun times, funny moments, life changing reflections, lots of planning work + life skills, and a new family. Worth the sweat.',
      image: '/assets/trip-director.jpg'
    },
    {
      id: 'dynamic-city',
      year: '2022',
      title: 'Dynamic City',
      date: 'April 2022',
      description: 'Proposition for a future human driven, modular, tech enabled city. Exploring the possibilities of ever dynamic, modular cities that are changed through inhabitant participation via technology. Made associated iOS app to demonstrate ideas. How can we make a participatory, dynamic urban landscape? For ARC 546, an architecture grad seminar.',
      link: { text: 'See presentation', url: '#' },
      image: '/assets/dynamic-city.png'
    },
    {
      id: 'space-ads',
      year: '2022',
      title: 'Space Ads: A Visual Anthology',
      date: 'December 2022',
      description: 'A Book looking at Space Advertising since the 1980s. Coca Cola. KFC branded eggs. Pizza Hut pizza. Israeli milk. Pepsi. Cookies by Doubletree by Hilton. These are just some of the things that have been in space. This book looks at the history of space advertising in a visual sense - showing the intricacies of running a sustainable space program in a world where ads offer necessary financing.',
      link: { text: 'See booklet', url: '#' },
      image: '/assets/space-ads.png'
    },
    {
      id: 'historic-sf',
      year: '2022',
      title: 'Historic SF',
      date: 'June 2022',
      description: 'Geolocated Historical Photos of SF. Experimenting with geo-located content while living in SF. How can we connect with the history of a place?',
      link: { text: 'Download here', url: '#' },
      image: '/assets/historic-sf.png'
    },
    {
      id: 'apple-intern',
      year: '2021',
      title: 'Intern',
      date: 'June - September 2020, March - August 2021',
      company: 'Apple, Technology Development Group',
      description: 'AR/VR Applications. Helping define some very cool future focused things. Geeking out. Meeting amazing people. :)',
      image: '/assets/apple-logo.png'
    },
    {
      id: 'geomessages',
      year: '2020',
      title: 'Geomessages',
      date: 'November 2020',
      description: 'Location Based Messages. Experimenting with geo-located text messages. Can they act as a means of exploration and creating stronger relationships?',
      image: '/assets/geomessages.png'
    },
    {
      id: 'historic-nyc',
      year: '2020',
      title: 'Historic NYC',
      date: 'October 2020',
      description: 'Geolocated Historical Photos of NYC. Experimenting with geo-located content while living in NYC. How can we connect with the history of a place?',
      link: { text: 'Download here', url: '#' },
      image: '/assets/historic-nyc.png'
    },
    {
      id: 'organic-table',
      year: '2020',
      title: 'Organic Table',
      date: 'December 2020',
      description: 'Homemade, Organic Looking Table. Our spaces impact how we think and feel. How can furniture make us feel more creative, fluid, and focused?',
      image: '/assets/organic-table.jpg'
    },
    {
      id: 'lovely-brains',
      year: '2020',
      title: 'Lovely Brains',
      date: 'December 2020 - present',
      description: 'Information Management Tool. How can we cut through information overload and organize what we find meaningful in a useful way? Can technology extend our memory?',
      image: '/assets/lovely-brains.png'
    },
    {
      id: 'dreamworld',
      year: '2020',
      title: 'Dreamworld',
      date: 'March 2020',
      description: 'Creating Imaginative, Personal Worlds. As VR goes becomes more mainstream, it allows us to create worlds that can only exist digitally. What worlds can we create?',
      image: '/assets/dreamworld.png'
    },
    {
      id: 'slavin',
      year: '2020',
      title: 'Fellow',
      date: 'May 2019 - May 2020',
      company: 'Slavin Family Foundation',
      description: 'The fellowship "provides support to dedicated students that have a desire to contribute to humanity and the ability and discipline to bring entrepreneurial ideas to life". So grateful to be part of this family!',
      image: '/assets/slavin.png'
    },
    {
      id: 'gap-year',
      year: '2020',
      title: 'Gap Year Starts!',
      date: 'May 2020'
    },
    {
      id: 'psv',
      year: '2022',
      title: 'Managing Director, Investments',
      date: 'June 2021 - June 2022',
      description: 'Investing in an Uniquely Princeton Entrepreneurial Culture. Lead 45 person team as we provide grants and education to student founders. PSV is our experiment to see if we can change our campus culture to be more entrepreneurial - through providing resources, access, education, and the space for action.',
      link: { text: 'www.psv.vc', url: 'https://www.psv.vc' },
      image: '/assets/psv-logo.png'
    },
    {
      id: 'bello',
      year: '2021',
      title: 'Bello',
      date: 'September 2021 - present',
      description: 'An Experiment in Designing Better Social Apps. In the works! Trying to make the social tool I want to see in the world.',
      link: { text: 'www.bello.social', url: 'https://www.bello.social' },
      image: '/assets/bello-logo.png'
    },
    {
      id: 'astri',
      year: '2019',
      title: 'R&D Intern',
      date: 'June - August 2019',
      company: 'ASTRI (Applied Science & Technology Research Institute), Hong Kong',
      description: 'Created a non-intrusive brain-computer interface (BCI). Experimented with signal processing, ML, and bio-sensing.',
      link: { text: 'View presentation', url: '#' },
      image: '/assets/astri.png'
    },
    {
      id: 'swe',
      year: '2020',
      title: 'Events Chair, Design',
      date: 'January 2019 - September 2020',
      description: 'Creating a Community of Woman Computer Scientists @ Princeton. Organized events to bring the 200+ women in CS community together. Led redesign of logo.',
      image: '/assets/swe.png'
    },
    {
      id: 'personal-timeline',
      year: '2020',
      title: 'Personal Timeline',
      date: 'January 2019 - March 2020',
      description: 'Information Management Tool Based on Spatial Contextualization. How can we cut through information overload and recall what we intake? A direct precursor to Lovely Brains.',
      link: { text: 'See screenshots', url: '#' },
      image: '/assets/personal-timeline.png'
    },
    {
      id: 'interconnected-age',
      year: '2019',
      title: 'Ideas for the Interconnected Age',
      date: 'May 2019',
      description: 'Final Paper for a Seminar, Early Ideas I had about the Internet. How can we design for eudaemonia? This paper features some early ideas I looked into and forms some of the basis of how I view technology.',
      link: { text: 'Read it', url: '#' }
    },
    {
      id: 'envision',
      year: '2020',
      title: 'Co-President',
      date: 'May 2019 - May 2020',
      company: 'ENVISION - The Premier College Conference about the Ethical Implications of Emerging Technologies',
      description: 'Led 35 person team to organize 100+ participant, 25+ speaker conference, "The Future of Us." Lead designer. Making a community of thoughtful technologists.',
      link: { text: 'Check out Conference 2019', url: '#' },
      image: '/assets/envision-logo.png'
    },
    {
      id: 'swe-president',
      year: '2020',
      title: 'Co-President, Princeton Chapter',
      date: 'January 2019 - September 2020',
      description: 'Creating a Community of Woman Engineers @ Princeton. Led 13 person board to organize events, talks, and more to create a tight-knit 400+ women in STEM community.',
      image: '/assets/swe.png'
    },
    {
      id: 'spring-break',
      year: '2019',
      title: 'Spring Break Trip Co-Lead',
      date: 'January - March 2019',
      company: 'ENVISION Spring Break Trip',
      description: 'Led and organized 15 person trip to labs and companies in exploration and discussion of emerging technologies. Met Tim Berners Lee!',
      link: { text: 'See post-trip poster', url: '#' },
      image: '/assets/spring-break.jpg'
    },
    {
      id: 'princeton-enroll',
      year: '2018',
      title: 'Enrolled at Princeton 🐯',
      date: 'September 2018'
    },
    {
      id: 'wwdc-2018',
      year: '2018',
      title: 'WWDC Scholar 2018',
      date: 'June 2018',
      company: 'Apple\'s World Wide Developers Conference',
      description: 'One of 350 students chosen to attend Apple\'s WWDC free of charge. Geeked out. Met amazing people. Was inspired.',
      image: '/assets/wwdc-2018.jpg'
    },
    {
      id: 'graduation',
      year: '2018',
      title: 'Graduated High School!',
      date: 'June 2018 - Valedictorian'
    },
    {
      id: 'wwdc-2017',
      year: '2017',
      title: 'WWDC Scholar 2017',
      date: 'June 2017',
      company: 'Apple\'s World Wide Developers Conference 2017',
      description: 'One of 350 students chosen to attend Apple\'s WWDC free of charge. Geeked out. Met amazing people. Was inspired.',
      image: '/assets/wwdc-2017.jpg'
    },
    {
      id: 'governors-school',
      year: '2017',
      title: 'Scholar & Researcher',
      date: 'June - July 2017',
      company: 'NJ Governor\'s School of Engineering and Technology',
      description: 'One of 72 NJ engineering students selected to participate in summer research and classes. Research in bipedal robotics published in IEEE.',
      image: '/assets/governors-school.jpg'
    },
    {
      id: 'princeton-cs',
      year: '2018',
      title: 'Duel-Enrollment Student',
      date: 'September 2017 - May 2018',
      company: 'Princeton University CS Dept',
      description: 'Took college level classes (algorithms, data structures, computational biology) as a high schooler. Loved it!',
      image: '/assets/princeton-cs.jpg'
    },
    {
      id: 'sms-bot',
      year: '2017',
      title: 'SMS Bot for the Wilderness',
      date: 'May 2017',
      description: 'Stuck with 2G? No Worries - Using Text Messages to Connect to the Internet. How can we still stay connected to information when off grid? Published in Makezine.',
      image: '/assets/sms-bot.jpg'
    },
    {
      id: 'ncwit',
      year: '2017',
      title: 'NCWIT National Award Recipient',
      date: 'March 2017',
      company: 'National Center for Women in Information Technology',
      description: 'One of 50 out of 3500 students awarded the national award for inspiring women to pursue STEM in our communities.',
      image: '/assets/ncwit.jpg'
    },
    {
      id: 'class-reveal',
      year: '2017',
      title: 'Class Reveal',
      date: 'May 2016 - Aug 2017',
      description: 'App for High Schoolers to see who is in their Classes. Used by 90% of School District. In team of 3 designed, coded, and marketed app that became notorious at my high school. Still an entrepreneurial project that is continued by students today!',
      image: '/assets/class-reveal.png'
    },
    {
      id: 'alzheimers-companion',
      year: '2017',
      title: 'Alzheimer\'s Companion',
      date: 'February 2017',
      description: 'Intuitive Tool to Assist People with Alzheimer\'s and Dementia. Using a web app, smart watch, and Alexa to create tools for patients and caregivers. Won Best Assistive Technology and Best Use of AWS at HackNYU.',
      image: '/assets/alzheimers-companion.jpg'
    },
    {
      id: 'expeditor',
      year: '2017',
      title: 'Expeditor',
      date: 'February 2017',
      description: 'Optimizing the Restaurant Experience with Technology. Using a web app, smart watch, and Alexa to create ordering, analytics, and restaurant organization tool. Won 1st Place and Business Award at ProfHacks.',
      image: '/assets/expeditor.jpg'
    },
    {
      id: 'mirthe',
      year: '2016',
      title: 'Research Intern',
      date: 'Summer 2016',
      company: 'Princeton University MIRTHE Program',
      description: 'Researched optics in Prof Craig Arnold\'s MAE lab. Presented poster.',
      image: '/assets/mirthe.jpg'
    },
    {
      id: 'hanban',
      year: '2015',
      title: 'Hanban Bridge Program',
      date: 'Summer 2015',
      description: 'All-Expenses Paid Trip to Learn Chinese Language and Culture in China. Practiced my Chinese and had my eyes opened. Chosen to be the female hostess at the final celebration, which was in Chinese. 你好!',
      image: '/assets/hanban.jpg'
    },
    {
      id: 'quadcopter',
      year: '2015',
      title: 'Quadcopter',
      date: 'March - June 2015',
      description: 'Creating a Quadcopter for ~$150. Friend and I created our own custom quadcopter on a budget. Because flying machines are so cool!',
      link: { text: 'Watch a flight', url: '#' },
      image: '/assets/quadcopter.png'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      year: 'Reflection',
      title: 'Since you scrolled this far...',
      description: 'I grew up tinkering with electronics and computers. Learning how things worked captivated me. I took apart computers, dual booted laptops, taught myself how to code, made some simple robots and apps, jailbroke devices... electrocuted myself a few times, burned a few batteries, used power tools and somehow still have my limbs...\n\nThese technical endeavors combined with traveling around the world with my family made me the person I am today. They made me endlessly curious, not afraid to ask stupid questions, and approach the world with an open mind and with eyes wide open.\n\nI strive to keep this childish innocence in whatever I do.'
    }
  ];

  // Group items by year
  const groupedByYear = timelineData.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(groupedByYear).sort((a, b) => {
    if (a === 'Today') return -1;
    if (b === 'Today') return 1;
    if (a === 'Reflection') return 1;
    if (b === 'Reflection') return -1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with name that links to home */}
      <div className="py-8 text-center bg-black border-b border-gray-700">
        <Link to="/" className="text-white no-underline transition-opacity duration-300 hover:opacity-70">
          <h1 className="text-3xl font-light m-0 tracking-wider">Liz Dorman</h1>
        </Link>
      </div>

      {/* Timeline content */}
      <div className="pt-8">
        <section className="py-16 text-center bg-black mb-8">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-semibold mb-4 text-white">What have I done? - A Timeline</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              Because timelines put information into perspective,<br />
              & everything builds off what came before.
            </p>
          </div>
        </section>

        <section className="py-8 pb-24">
          <div className="max-w-full mx-auto px-4">
            {sortedYears.map((year) => (
              <div key={year} className="mb-16 text-center">
                <div className="mb-8">
                  <h3 className="text-5xl font-light text-white m-0 tracking-wider">{year}</h3>
                </div>
                <div className="flex flex-col items-center gap-8 max-w-sm mx-auto w-11/12">
                  {groupedByYear[year].map((item, index) => (
                    <TimelineCard 
                      key={item.id} 
                      item={item} 
                      index={index} 
                      color={getItemColor(item)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline; 