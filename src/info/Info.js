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
  position: "a Frontend Developer",
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
      text: "Actively looking for a Frontend Developer role",
    },
    {
      emoji: "📧",
      text: "stevo323231@gmail.com",
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
  ],
  portfolio: [
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
    {
      title: "Airbnb Experiences mockup",
      description:
        "Part of the Scrimba React course. A simple mockup of the Airbnb Experiences page. Top half of the page is static, with the bottom half dynamically rendering based on properties such as image, price, and availability",
      live: "https://airbnb-experiencesclone.netlify.app/",
      source: "https://github.com/steven32323/react-airbnb-clone",
      image: mock4,
    },
  ],
};
