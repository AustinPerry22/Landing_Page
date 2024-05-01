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
    description: "I use Bootstrap to expedite the layout of my projects including all the ones listed below. I then blend it seamlessly with custom CSS to increase the visual appeal of the projects."
  },
  {
    name: 'C#',
    logo: CSharpLogo,
    description: "I use C# to develop my .NET backends including keepr and allspice (listed below)."
  },
  {
    name: 'C++',
    logo: CplusLogo,
    description: "I've completed four computer science courses at CWI, all centered around C++ as the primary language."
  },
  {
    name: 'CSS',
    logo: CssLogo,
    description: "I use custom CSS to enhance the visual appeal of all of my web applications, including all listed below."
  },
  {
    name: 'HTML',
    logo: HtmlLogo,
    description: "HTML serves as the foundation for every web app and website I build, with over 30 projects utilizing it."
  },
  {
    name: 'JavaScript',
    logo: JSLogo,
    description: "Javascript is my go-to language for front end logic across all my web applications. Additionally, I use it for back-end development when utilizing Node.js."
  },
  {
    name: 'MongoDB',
    logo: MongoLogo,
    description: "I incorporate MongoDB with Node.js for database functionality in my web applications."
  },
  {
    name: 'MySQL',
    logo: MySQLLogo,
    description: "I use MySQL when I need more control over my databases. I have used MySQL on 5+ projects including keepr and allspice (listed below)."
  },
  {
    name: 'Node.JS',
    logo: NodeLogo,
    description: "I have used Node.js to develop the backends of 10+ projects including stackify and tower (listed below)."
  },
  {
    name: 'Python',
    logo: PythonLogo,
    description: "I have taken the Zero to Mastery Complete Python Developer in 2023 course and completed all the projects in python associated with it."
  },
  {
    name: 'Scrum',
    logo: ScrumLogo,
    description: "I have practiced scrum while attending Boise Codewords on multiple projects the most notable one being stackify where I worked with a team of four people using scrum methodologies to stay on track."
  },
  {
    name: 'Visual Studio Code',
    logo: VSLogo,
    description: "I've utilized VS Code for all my projects, except for Python projects, where I've opted for PyCharm."
  },
  {
    name: 'Vue.JS',
    logo: VueLogo,
    description: "Vue.js has been my framework of choice for most of my projects, including all of the projects listed below."
  }
  ],

  projects: [
    {
      name: "Stackify",
      description: "Stackify is a music application tailored for event planners and amateur DJs. It allows users to create playlists for events, add silent time blocks, and access song metadata such as BPM, dancibility, and key. Stackify uses the Spotify API with PCKE authorization to allow users to add songs and play them directly from the web app. Stackify was built in two weeks by four developers utilizing Scrum methodologies. ONLY WORKS WITH SPOTIFY PREMIUM due to the use of Spotify's api.",
      img: StackifyPic,
      repo: "https://github.com/tylermarcott/StackifyCapstone",
      link: "https://stackify-jch3.onrender.com/",
      skillsUsed: ["Vue.JS", "Node.JS", "MongoDB"]
    },
    {
      name: "Keepr",
      description: "Keepr is a social media site where users can upload pictures(keeps) and save their own or other user's pictures into their own collections(vaults). Other features include private vaults, view counts, tracking how many vaults a keep is in, and more.",
      img: keeprPic,
      repo: "https://github.com/AustinPerry22/Keepr",
      link: "https://keepr.austinperry.dev",
      skillsUsed: ["Vue.JS", "C#", "MySQL"]
    },
    {
      name: "Tower",
      description: "Tower is a dynamic web application designed for managing events. Tower enables users to create and attend events while keeping track of the tickets available. Beyond event creation and attendance, Tower has additional functionalities such as commenting on events, attendee tracking, event editing, and more.",
      img: towerPic,
      repo: "https://github.com/AustinPerry22/The_Tower",
      link: "https://tower.austinperry.dev",
      skillsUsed: ["Vue.JS", "Node.JS", "MongoDB"]
    },
    
    {
      name: "AllSpice",
      description: "Allspice is a recipe sharing app. It allows users to post and browse recipes along with a few helpful features including liking a recipe, sorting recipes by type, editing your recipes, etc.",
      img: allspicePic,
      repo: "https://github.com/AustinPerry22/AllSpice",
      link: "https://allspice.austinperry.dev",
      skillsUsed: ["Vue.JS", "C#", "MySQL"]
    }
  ],

  activeProject: {},
  activeSkill: null,
  showLinks: false
})
