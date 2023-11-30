import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  skills: [
  {
    name: 'Bootstrap',
    logo: "src/assets/img/BootstrapLogo.png",
    description: "I have used bootstrap on almost all of my projects."
  },
  {
    name: 'C#',
    logo: "src/assets/img/CSharpLogo.png",
    description: "I have used C# to write .net backends for 3+ projects at Boise Codeworks. I have also used C# in high school while making simple unity games."
  },
  {
    name: 'C++',
    logo: "src/assets/img/C++Logo.png",
    description: "In college I have take 4 computer science courses that used C++ as the main language."
  },
  {
    name: 'CSS',
    logo: "src/assets/img/CssLogo.png",
    description: "I have used custom css in every web app and website I've built."
  },
  {
    name: 'HTML',
    logo: "src/assets/img/HtmlLogo.png",
    description: "I use html in every web app and website I build."
  },
  {
    name: 'JavaScript',
    logo: "src/assets/img/JSLogo.png",
    description: "I use Javascript for my front end."
  },
  {
    name: 'MongoDB',
    logo: "src/assets/img/MongoLogo.png",
    description: "I use MongoDb along with mongoose when I use node.js to store my data."
  },
  {
    name: 'MySQL',
    logo: "src/assets/img/MySQLogo.png",
    description: "I use MySQL along with .net to have more control over my backend"
  },
  {
    name: 'Node.JS',
    logo: "src/assets/img/NodeLogo (2).png",
    description: "I use Node.JS for my backend"
  },
  {
    name: 'Python',
    logo: "src/assets/img/PythonLogo.png",
    description: "Hssss"
  },
  {
    name: 'Scrum',
    logo: "src/assets/img/ScrumLogo (2).png",
    description: "Scrum Time"
  },
  {
    name: 'Visual Studio',
    logo: "src/assets/img/VSLogo.png",
    description: "What else do ppl code in"
  },
  {
    name: 'Vue.JS',
    logo: "src/assets/img/VueLogo.png",
    description: "better than react"
  }
  ],

  projects: [
    {
      name: "Stackify",
      description: "Stackify is a playlist maker and event planner that allows users to customize playlists for an event. It uses the spotify Api with a Node.js backend and a vue frontend to accomplish this. I worked in a group of four for two weeks to accomplish this project",
      img: "src/assets/img/Stackify.jpg",
      repo: "https://github.com/tylermarcott/StackifyCapstone",
      link: "https://github.com/tylermarcott/StackifyCapstone",
      skillsUsed: ["JS", "Mongo", "Node", "Vue"]
    },
    {
      name: "Keepr",
      description: "Keepr is a social media site where users can upload pictures and save other pictures in their own collections, similar to Pinterest.",
      img: "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D",
      repo: "https://github.com/AustinPerry22/Keepr",
      link: "https://github.com/AustinPerry22/Keepr",
      skillsUsed: ["C#", "JS", "MySQL", "Vue"]
    },
    {
      name: "AllSpice",
      description: "Allspice is a recipe sharing platform that allows users to post and browse recipes",
      img: "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D",
      repo: "https://github.com/AustinPerry22/AllSpice",
      link: "https://github.com/AustinPerry22/AllSpice",
      skillsUsed: ["C#", "JS", "MySQL", "Vue"]
    },
    {
      name: "Tower",
      description: "Tower is an event ticket thing that allows users to get tickets to events and stuff",
      img: "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D",
      repo: "https://github.com/AustinPerry22/The_Tower",
      link: "https://github.com/AustinPerry22/The_Tower",
      skillsUsed: ["JS", "Mongo", "Node", "Vue"]
    }
  ],

  activeProject: {},
  activeSkill: null,
  showLinks: false
})
