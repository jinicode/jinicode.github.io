module.exports = {
  siteTitle: 'Jinit Jain | Software Engineer',
  siteDescription:
    'Jinit Jain is an incoming Software Developer, based in India, who loves learning new things.',
  siteKeywords:
    'software engineer, web developer, javascript, app developer, python , java, backend',
  siteUrl: 'https://jinicode.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jinit Jain',
  location: 'Mumbai, India',
  email: 'jinit2000@yahoo.com',
  github: 'https://github.com/jinicode',
  twitterHandle: '@Jinit24725878',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jinicode',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jinit-jain-720607187/',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thisisjinitjain/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Jinit24725878',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
