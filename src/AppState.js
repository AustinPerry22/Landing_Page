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
    logo: '../assets/img/C#Logo (2).png'
  },
  {
    name: 'C++',
    logo: '../assets/img/C++Logo.png'
  },
  {
    name: 'Css',
    logo: '../assets/img/CssLogo.png'
  },
  {
    name: 'Html',
    logo: '../assets/img/HtmlLogo.png'
  },
  {
    name: 'JS',
    logo: '../assets/img/JSLogo.png'
  },
  {
    name: 'Mongo',
    logo: '../assets/img/MongoLogo.png'
  },
  ]
})
