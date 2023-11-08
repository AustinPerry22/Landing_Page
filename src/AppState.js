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
      Description: "THis is keeper",
      skillsUsed: ["C++", "C#"]
    }
  ],

  activeProject: {}
})
