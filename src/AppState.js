import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  skills: [
  {
    name: 'Bootstrap',
    logo: "src\\assets\\img\\BootstrapLogo.png"
  },
  {
    name: 'C#',
    logo: "src\\assets\\img\\CSharpLogo.png"
  },
  {
    name: 'C++',
    logo: "src\\assets\\img\\C++Logo.png"
  },
  {
    name: 'Css',
    logo: "src\\assets\\img\\CssLogo.png"
  },
  {
    name: 'Html',
    logo: "src\\assets\\img\\HtmlLogo.png"
  },
  {
    name: 'JS',
    logo: "src\\assets\\img\\JSLogo.png"
  },
  {
    name: 'Mongo',
    logo: "src\\assets\\img\\MongoLogo.png"
  },
  {
    name: 'MySQL',
    logo: "src\\assets\\img\\MySQLogo.png"
  },
  {
    name: 'Node',
    logo: "src\\assets\\img\\NodeLogo (2).png"
  },
  {
    name: 'Python',
    logo: "src\\assets\\img\\PythonLogo.png"
  },
  {
    name: 'Scrum',
    logo: "src\\assets\\img\\ScrumLogo (2).png"
  },
  {
    name: 'VS',
    logo: "src\\assets\\img\\VSLogo.png"
  },
  {
    name: 'Vue',
    logo: "src\\assets\\img\\VueLogo.png"
  }
  ],

  projects: [
    {
      name: "Keepr",
      description: "THis is keeper",
      img: "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D",
      repo: "https://github.com/AustinPerry22/Keepr",
      link: "https://github.com/AustinPerry22/Keepr",
      skillsUsed: ["C++", "C#", "JS"]
    },
    {
      name: "Test",
      Description: "THis is Test",
      skillsUsed: ["C++", "C#"]
    }
  ],

  activeProject: {},
  showLinks: false
})
