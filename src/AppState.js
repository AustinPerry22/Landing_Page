import { reactive } from 'vue'
import bootstrapLogo from "./assets/img/BootstrapLogo.png";
import CSharpLogo from "./assets/img/CSharpLogo.png";
import CplusLogo from "./assets/img/C++Logo.png";
import CssLogo from "./assets/img/CssLogo.png";
import HtmlLogo from "./assets/img/HtmlLogo.png";
import JSLogo from "./assets/img/JSLogo.png";
import MongoLogo from "./assets/img/MongoLogo.png";
import MySQLLogo from "./assets/img/MySQLogo.png";
import NodeLogo from "./assets/img/NodeLogo (2).png";
import PythonLogo from "./assets/img/PythonLogo.png";
import ScrumLogo from "./assets/img/ScrumLogo (2).png";
import VSLogo from "./assets/img/VSLogo.png";
import VueLogo from "./assets/img/VueLogo.png";

//projects
import allspicePic from "./assets/img/allspice.png";
import keeprPic from "./assets/img/keepr.png";
import StackifyPic from "./assets/img/Stackify.jpg";
import towerPic from "./assets/img/tower.png";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  skills: [
  {
    name: 'Bootstrap',
    logo: bootstrapLogo,
    description: "I use bootstrap to help layout my projects faster. I then incorporate my own custom css along with bootstrap to make my projects be more visually appealing. I have used bootstrap on 30+ projects including all of the listed projects below."
  },
  {
    name: 'C#',
    logo: CSharpLogo,
    description: "I have used C# to write .net backends for 5+ projects at Boise Codeworks. I have also used C# in to make simple unity games."
  },
  {
    name: 'C++',
    logo: CplusLogo,
    description: "I have take 4 computer science courses that used C++ as the primary language."
  },
  {
    name: 'CSS',
    logo: CssLogo,
    description: "I use my own custom css to customize my web apps to be visually appealing. I have used my own custom css on 30+ projects including all the projects listed below."
  },
  {
    name: 'HTML',
    logo: HtmlLogo,
    description: "I use html in every web app and website I build. 30+ projects"
  },
  {
    name: 'JavaScript',
    logo: JSLogo,
    description: "I use Javascript for my front end logic on 25+ projects."
  },
  {
    name: 'MongoDB',
    logo: MongoLogo,
    description: "I have used MongoDb along with the mongoose orm to store my data on 10+ projects."
  },
  {
    name: 'MySQL',
    logo: MySQLLogo,
    description: "I have used MySQL to have more control over my database. I have used MySQl on 5+ projects"
  },
  {
    name: 'Node.JS',
    logo: NodeLogo,
    description: "I have used node.js for my backend on 10+ projects."
  },
  {
    name: 'Python',
    logo: PythonLogo,
    description: "I have taken the Zero to Mastery Complete Python Developer in 2023 course and completed all the projects in python associated with it."
  },
  {
    name: 'Scrum',
    logo: ScrumLogo,
    description: "I have practiced scrum while attending Boise Codewords on 5+ projects the most notable one being Stackify where I worked with a team of four people using scrum methodologies to stay on track."
  },
  {
    name: 'Visual Studio Code',
    logo: VSLogo,
    description: "I have used vs code on all of my projects except my python projects where I used pycharm."
  },
  {
    name: 'Vue.JS',
    logo: VueLogo,
    description: "I have used Vue.Js on 15+ projects for my web apps."
  }
  ],

  projects: [
    {
      name: "Stackify",
      description: "Stackify is a playlist maker and event music planner that allows users to customize playlists for an event. It uses the Spotify Api with a Node.js backend and a Vue.js frontend to accomplish this. I worked in a group of four for two weeks using Scrum methodologies to accomplish this project",
      img: StackifyPic,
      repo: "https://github.com/tylermarcott/StackifyCapstone",
      link: "https://github.com/tylermarcott/StackifyCapstone",
      skillsUsed: ["JavaScript", "MongoDB", "Node.JS", "Vue.JS", "Scrum"]
    },
    {
      name: "Keepr",
      description: "Keepr is a social media site where users can upload pictures(keeps) and save their own or other user's pictures into their own collections(vaults). Other features include private vaults, view counts, how many vaults your keep a keep is in, etc. The project uses a Vue.js frontend and a .NET backend with a MySQL database.",
      img: keeprPic,
      repo: "https://github.com/AustinPerry22/Keepr",
      link: "https://github.com/AustinPerry22/Keepr",
      skillsUsed: ["C#", "JavaScript", "MySQL", "Vue.JS"]
    },
    {
      name: "AllSpice",
      description: "Allspice is a recipe sharing app. It allows users to post and browse recipes along with a few helpful features including liking a recipe, sorting recipes by type, editing your recipes, etc. The Project uses a Vue.js frontend and a .NET backend with a MySQL database.",
      img: allspicePic,
      repo: "https://github.com/AustinPerry22/AllSpice",
      link: "https://github.com/AustinPerry22/AllSpice",
      skillsUsed: ["C#", "JavaScript", "MySQL", "Vue.JS"]
    },
    {
      name: "Tower",
      description: "Tower is a web application that allows users to create events that other users can get tickets to. A user can attend(get a ticket) to multiple events as long as their are enough seats. The project also includes usefull features like commenting on events, seeing who is attending, editing events, etc. The Project uses a Vue.js frontend and a Node.Js backend with a MongoDB database.",
      img: towerPic,
      repo: "https://github.com/AustinPerry22/The_Tower",
      link: "https://github.com/AustinPerry22/The_Tower",
      skillsUsed: ["JavaScript", "MongoDB", "Node.JS", "Vue.JS"]
    }
  ],

  activeProject: {},
  activeSkill: null,
  showLinks: false
})
