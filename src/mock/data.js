import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maxwell McKee | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Maxwell McKee',
  subtitle: 'I make things.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'Headshot1.jpg',
  paragraphOne: 'Any time I commit myself to something, whether it be piano performance, rock climbing, or building a cool new application, I do it with 1000% of my focus and determination. Life is too short to settle for less.',
  paragraphTwo: "I am driven by passion and I love to express my creativity. Some of the creations I am most proud of are my national-award-winning string quartet, the school bus tiny-home that I built and lived in for 5 years, and the portfolio you see below.",
  paragraphThree: "I'm a compulsive overachiever, empathetic communicator, and perennially cheery presence. Prone to sincerity and adventure.",
  resume: 'https://docs.google.com/document/d/1_V4RecFe2NIlgiceApAnffAPqevxAH8XPUAtsTCNA3w/edit#heading=h.4kkobv3sgqdy', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'TDP_dark_background.png',
    title: 'The Democracy Project',
    info: '',
    info2: '',
    url: 'https://thedemocracyproject.herokuapp.com/',
    repo: 'https://github.com/maxwelljmckee/TheDemocracyProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'VerityNews.png',
    title: 'Verity News',
    info: '',
    info2: '',
    url: 'https://verity-news.herokuapp.com/',
    repo: 'https://github.com/maxwelljmckee/Verity', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TeeTime.png',
    title: 'Tee Time',
    info: '',
    info2: '',
    url: 'https://tee-time-aa.herokuapp.com/',
    repo: 'https://github.com/ethanswe/Tee-Time', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scarebnb.png',
    title: 'scarebnb',
    info: '',
    info2: '',
    url: 'https://scarebnb-app.herokuapp.com/',
    repo: 'https://github.com/maxwelljmckee/scare_bnb', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'maxwelljmckee@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/maxwell-mckee-385599191/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/maxwelljmckee',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
