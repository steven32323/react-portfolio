import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
// import mock4 from "../img/mock4.png";
// import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0, 136, 255)", "rgb(111, 114, 133)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Steven",
  lastName: "Smith",
  initials: "ss", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Frontend Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee (cliché but true)",
    },
    {
      emoji: "🌎",
      text: "based in the UK",
    },
    {
      emoji: "💼",
      text: "Actively looking for a Frontend Developer role",
    },
    {
      emoji: "📧",
      text: "stevo323231@gmail.com",
    },
  ],
  socials: [
    // {
    //   link: "https://facebook.com",
    //   icon: "fa fa-facebook",
    //   label: "facebook",
    // },
    // {
    //   link: "https://instagram.com",
    //   icon: "fa fa-instagram",
    //   label: "instagram",
    // },
    {
      link: "https://github.com/steven32323",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/ssmith32323/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Steven. I'm currently a Senior Team Leader at Scotmid Co-operative. I'm a self-taught learner, I enjoy coding and gaming, and I'm both amazed and terrified of recent advances in AI.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "ChatGPT",
    ],
    exposedTo: [
      "C",
      "python",
      "Linux",
      "SQL",
      "Sass",
      "Node.js",
      "webpack",
      "Vite",
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "gaming",
      emoji: "🎮",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "coding",
      emoji: "💻",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Expense Tracker",
      live: "https://ssmithexpensetracker.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/steven32323/react-expense-tracker", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Bankist Landing Page",
      live: "https://steven32323.github.io/Bankist-Landing-Page/",
      source: "https://github.com/steven32323/Bankist-Landing-Page",
      image: mock2,
    },
    {
      title: "JustReact - a food ordering app",
      live: "https://justreact-foodapp.netlify.app/",
      source: "https://github.com/steven32323/react-FoodOrderApp",
      image: mock3,
    },
    // {
    //   title: "Project 4",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock4,
    // },
    // {
    //   title: "Project 5",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock5,
    // },
  ],
};
