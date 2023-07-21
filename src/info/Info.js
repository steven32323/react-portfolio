import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0, 136, 255)", "rgb(111, 114, 133)"];

export const info = {
  firstName: "Steven",
  lastName: "Smith",
  initials: "ss",
  position: "a Fullstack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
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
      text: "Actively looking for a Junior Developer role",
    },
    {
      emoji: "📧",
      text: "steven@steven-smith-dev.co.uk",
    },
  ],
  socials: [
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
  ],
  bio: "Hello! I'm Steven. I'm currently a Senior Team Leader at Scotmid Co-operative. I'm a self-taught learner, I enjoy coding and gaming, and I'm both amazed and terrified of recent advances in AI.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "PHP",
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
  ],
  portfolio: [
    {
      title: "Gazeteer",
      description:
        "Designed mobile-first using PHP and jQuery, allows the user to browse the world, with various data points being displayed, such as local currency/exchange rate, points of interest, population and more!",
      live: "https://steven-smith-dev.co.uk/gazeteer/",
      source: "https://github.com/steven32323/stevenSmith/tree/main/project1",
      image: mock4,
    },
    {
      title: "Tenzies",
      description:
        ' Made with React (and some heavy CSS to style the dice faces). A simple game with 10 dice, the player can click dice to "Hold" them, which prevent them from being rerolled. The goal is to have 10 matching dice.',
      live: "https://ssmith-tenzies.netlify.app/",
      source: "https://github.com/steven32323/Tenzies",
      image: mock5,
    },
    {
      title: "JustReact - a food ordering app",
      description:
        " Made with React. A food ordering app, which allows the customer to add a specified number of food items to their shopping cart. The customer can view their shopping cart and total at any time, and add/delete items",
      live: "https://justreact-foodapp.netlify.app/",
      source: "https://github.com/steven32323/react-FoodOrderApp",
      image: mock3,
    },
    {
      title: "Expense Tracker",
      description:
        " Made with React. More of a test app than anything else, allows the user to add expenses based on date, and amount. Allows filtering with the graph changing dynamically to show each months expenses proportional to the total expenses. Local Storage is used to store users data",
      live: "https://ssmithexpensetracker.netlify.app/",
      source: "https://github.com/steven32323/react-expense-tracker",
      image: mock1,
    },
    {
      title: "Bankist Landing Page",
      description:
        "Made using pure Javascript, practicing lazy loading, slow scrolling, modal windows and carousels.",
      live: "https://steven32323.github.io/Bankist-Landing-Page/",
      source: "https://github.com/steven32323/Bankist-Landing-Page",
      image: mock2,
    },
  ],
};
