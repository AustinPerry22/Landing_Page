import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  skills: [
  {
    name: 'Bootstrap',
    logo: "src/assets/img/BootstrapLogo.png",
    description: "testing the description"
  },
  {
    name: 'C#',
    logo: "src/assets/img/CSharpLogo.png"
  },
  {
    name: 'C++',
    logo: "src/assets/img/C++Logo.png"
  },
  {
    name: 'Css',
    logo: "src/assets/img/CssLogo.png"
  },
  {
    name: 'Html',
    logo: "src/assets/img/HtmlLogo.png"
  },
  {
    name: 'JS',
    logo: "src/assets/img/JSLogo.png"
  },
  {
    name: 'Mongo',
    logo: "src/assets/img/MongoLogo.png"
  },
  {
    name: 'MySQL',
    logo: "src/assets/img/MySQLogo.png"
  },
  {
    name: 'Node',
    logo: "src/assets/img/NodeLogo (2).png"
  },
  {
    name: 'Python',
    logo: "src/assets/img/PythonLogo.png"
  },
  {
    name: 'Scrum',
    logo: "src/assets/img/ScrumLogo (2).png"
  },
  {
    name: 'VS',
    logo: "src/assets/img/VSLogo.png"
  },
  {
    name: 'Vue',
    logo: "src/assets/img/VueLogo.png"
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
      name: "The Tower",
      description: "The Tower is an event ticket thing that allows users to get tickets to events and stuff",
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
