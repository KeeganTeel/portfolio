import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Keegan Teel', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Keegan Teel',
  subtitle: 'I am the developer you need',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello, I am a web developer with skills in HTML, CSS, Javascript, Python, Bootstrap, and React. I also graduated from the Art Institute of Pittsburgh with a B.S. in Web and Interactive Media Design.',
  paragraphTwo:
    'After graduation I took some time off of programming to pursue other career paths that have made me a more well rounded individual. After working in the education and healthcare fields I have realized that programming is my true passion and something I want to pursue full time.',
  paragraphThree: 'Thank you for checking out my site and projects!',
  resume: '', // if no resume, the button will not show up // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'grove.jpg',
    title: 'Aurora Grove',
    info: 'Camping website project done in Bootstrap 4',
    info2: '',
    url: 'https://wonderful-galileo-ec167e.netlify.app/',
    repo: 'https://github.com/KeeganTeel/aurora_grove', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robo.jpg',
    title: 'RoboFriends',
    info: 'Searchable contact rolodex built with React',
    info2: '',
    url: 'https://amazing-curran-34971d.netlify.app/',
    repo: 'https://github.com/KeeganTeel/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crwn.JPG',
    title: 'CRWN Clothing',
    info:
      'E-commerce clothing website built in React that has a fully functional shopping cart and check out feature with Stripe, as well as Google Sign In.',
    info2: '',
    url: 'https://crwn1.herokuapp.com/',
    repo: 'https://github.com/KeeganTeel/crwn-clothing', // if no repo, the button will not show up // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Contact Me',
  email: 'keeganfteel@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/keeganteel/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KeeganTeel',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
