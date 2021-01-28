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
    info: "The Democracy Project is your hub for political engagement. When you register with a zip code, you are automatically connected to your state/district congressional officials. From there, you can follow other members and active bills in congress. Realtime voting on the people and the issues provides direct feedback, holding power to account.",
    info2: '',
    url: 'https://thedemocracyproject.herokuapp.com/',
    repo: 'https://github.com/maxwelljmckee/TheDemocracyProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'VerityNews.png',
    title: 'Verity News',
    info: 'Verity News is combats the modern information/disinformation crisis by allowing user to customize their information diets. Users can choose from a variety of publications, organize them into custom Channels, and search through publication sources and article headlines based on a variety of filtering parameters.',
    info2: '',
    url: 'https://verity-news.herokuapp.com/',
    repo: 'https://github.com/maxwelljmckee/Verity', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TeeTime.png',
    title: 'Tee Time',
    info: 'TeeTime is the social network for golfers! With TeeTime, users can create and join events to play and meet new golf partners.',
    info2: '',
    url: 'https://tee-time-aa.herokuapp.com/',
    repo: 'https://github.com/ethanswe/Tee-Time', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scarebnb.png',
    title: 'scarebnb',
    info: 'Scarebnb is a haunted-house themed airbnb clone. With scarebnb, users get their spook on with overnight stays at known haunted establishments.',
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
