import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Izel Gurbuz Culban', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Izel Gurbuz Culban',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Experienced Full Stack Engineer with a demonstrated history of working in the information technology and services industry. Skilled in ReactJS with Redux, NodeJS with Express, MongoDB,CSS. Strong engineering professional with a Bachelor's degree focused in Computer Science from Bilkent University.\n https://github.com/izelgurbuz",
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Amazon-Clone',
    info: 'It is Full Stack Amazon Clone created with ReactJs frontend and NodeJs with ExpressJS backend. This project includes similar UI as https://www.amazon.co.uk/, payment system created with Stripe, authorization and real time database with Firebase. ',
    info2: '',
    url: 'https://challenge-b65d5.web.app/',
    repo: 'https://github.com/izelgurbuz/Amazon-Clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'PerfAnalytics',
    info: 'PerfAnalytics is an ecosystem which collects and criticizes web performance data.\n ReactJs, Redux, NodeJs, Express JS, MongoDB, Jest JS, Docker, Github Actions, Heroku',
    info2: '',
    url: 'https://izelgurbuz-perfanalytics.herokuapp.com/',
    repo: 'https://github.com/izelgurbuz/PerfAnalytics', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'izelgurbuz@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/izel-gurbuz/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/izelgurbuz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
