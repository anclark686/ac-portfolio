import IMAGES from "../../images/index";

class Project {
  constructor(image, link, ghLink, title, language, date, tags) {
    this.image = image;
    this.link = link;
    this.ghLink = ghLink;
    this.title = title;
    this.language = language;
    this.date = date;
    this.tags = tags;
  }
}

const resume = new Project(
  IMAGES.pic1,
  "https://reyaly-resume.herokuapp.com/",
  "https://github.com/anclark686/reyaly_resume",
  "Resume",
  "Python: Django - MySQL",
  "2022 - Personal",
  ["python", "django", "mysql", "year-2022"],
);

const calc = new Project(
  IMAGES.pic2,
  "https://reyaly-calculator.netlify.app/",
  "https://github.com/anclark686/new-calculator",
  "Calculator",
  // eslint-disable-next-line
  "JavaScript: React, Electron",
  "2022 - Personal",
  ["javascript", "react", "electron", "year-2022"],
);

const toDo = new Project(
  IMAGES.pic3,
  "https://reyaly-todo-225a1c591959.herokuapp.com/",
  "https://github.com/anclark686/django-todolist",
  "ToDo List",
  "Python: Django - SQLite",
  "2022 - Personal",
  ["python", "django", "sqlite", "year-2022"],
);

const blog = new Project(
  IMAGES.pic4,
  "https://reyaly-blog.herokuapp.com/",
  "https://github.com/anclark686/blog2",
  "Python Blog",
  "Python: Flask - SQLite",
  "2022 - Personal",
  ["python", "flask", "sqlite", "year-2022"],
);

const pne = new Project(
  IMAGES.pic5,
  "#",
  "#",
  "Project Editor",
  "Python: tkinter",
  "2021 - Company: Forsta",
  ["python", "tkinter", "year-2021"],
);

const gm = new Project(
  IMAGES.pic6,
  "#",
  "#",
  "GridMaster",
  "VBA",
  "2022 - Company: Forsta",
  ["vba", "year-2022"],
);

const weather = new Project(
  IMAGES.pic7,
  "https://reyaly-weather.netlify.app/",
  "https://github.com/anclark686/weatherapp",
  "Weather App",
  // eslint-disable-next-line
  "JavaScript: React, Electron - External APIs",
  "2022 - Personal",
  ["javascript", "react", "electron", "year-2022"],
);

const portfolio = new Project(
  IMAGES.pic8,
  "https://reyaly-portfolio.herokuapp.com/",
  "https://github.com/anclark686/ac-portfolio",
  "Portfolio",
  // eslint-disable-next-line
  "JavaScript: React",
  "Ongoing - Personal",
  ["javascript", "react", "year-2022", "year-2023", "year-2024"],
);

const reading = new Project(
  IMAGES.pic9,
  "https://reyaly-books.herokuapp.com/",
  "https://github.com/anclark686/reyaly-books",
  "Book Tracker",
  // eslint-disable-next-line
  "JavaScript: Node, Express, React - MySQL",
  "2022 - Personal",
  ["javascript", "react", "node", "express", "mysql", "year-2022"],
);

const travel = new Project(
  IMAGES.pic10,
  "https://reyalytravel.web.app/",
  "https://github.com/anclark686/travel_site",
  "Travel Photos Site",
  // eslint-disable-next-line
  "JavaScript: React - Firestore",
  "2022 - Personal",
  ["javascript", "react", "firestore", "year-2022"],
);

const instagram = new Project(
  IMAGES.pic11,
  "https://reyalygram.web.app/",
  "https://github.com/anclark686/instagram-clone",
  "Instagram Clone",
  // eslint-disable-next-line
  "JavaScript: React - Firestore",
  "2022 - Personal",
  ["javascript", "react", "firestore", "year-2022"],
);

const blackBook = new Project(
  IMAGES.pic12,
  "https://reyaly-black-book.netlify.app/",
  "https://github.com/anclark686/Reyaly-Black-Book",
  "Online Black Book",
  // eslint-disable-next-line
  "JavaScript: Node, Express, React - MongoDB",
  "2022 - Personal",
  ["javascript", "node", "express", "react", "mongodb", "year-2022"],
);

const tech = new Project(
  IMAGES.pic13,
  "https://tech-fansite.netlify.app/",
  "https://github.com/anclark686/tech-fansite",
  "Tech Fansite",
  "HTML - CSS - Vanilla JavaScript",
  "2023 - Ada Developers Academy",
  ["javascript", "html", "css", "year-2023"],
);

const banana = new Project(
  IMAGES.pic14,
  "https://anclark686.github.io/group-fansite/",
  "https://github.com/anclark686/group-fansite",
  "Banana Fansite",
  "HTML - CSS",
  "2023 - Ada Developers Academy",
  ["html", "css", "year-2023"],
);

const newGM = new Project(
  IMAGES.pic15,
  "#",
  "#",
  "Updated Gridmaster",
  "Python: Flask - JavaScript: React, Electron",
  "2023 - Company: Forsta",
  ["python", "flask", "javascript", "react", "electron", "year-2023"],
);

const renoApp = new Project(
  IMAGES.pic16,
  "#",
  "#",
  "Release Notes App",
  "Python: Flask - JavaScript: React",
  "2023 - Company: Forsta",
  ["python", "flask", "javascript", "react", "year-2023"],
);

const blogRuby = new Project(
  IMAGES.pic17,
  "https://reyaly-blog-ruby.herokuapp.com/",
  "https://github.com/anclark686/ruby-blog",
  "Ruby Blog",
  "Ruby: Rails - MySQL",
  "2023 - Personal",
  ["ruby", "rails", "mysql", "year-2023"],
);

const weatherNew = new Project(
  IMAGES.pic18,
  "https://anclark686.github.io/weather-report/",
  "https://github.com/anclark686/weather-report",
  "New Weather App",
  "Vanilla JavaScript - External APIs",
  "2023 - Ada Developers Academy",
  ["javascript", "html", "css", "year-2023"],
);

const recipes = new Project(
  IMAGES.pic19,
  "https://main.d3h1w2pu1ejnii.amplifyapp.com/",
  "https://github.com/anclark686/reyaly-recipes-frontend",
  "Recipe Site",
  "Ruby: Rails - JavaScript: Vue - MySQL",
  "2023 - Personal",
  ["ruby", "rails", "javascript", "vue", "mysql", "year-2023"],
);

const adaTask = new Project(
  IMAGES.pic20,
  "https://task-list-anc.onrender.com",
  "https://github.com/anclark686/task-list-front-end",
  "Ada Task List",
  "Python: Flask - JavaScript: React - PostgreSQL",
  "2023 - Ada Developers Academy",
  ["python", "flask", "javascript", "react", "postgresql", "year-2023"],
);

const inspo = new Project(
  IMAGES.pic21,
  "https://inspiration-board-anc.onrender.com",
  "https://github.com/anclark686/front-end-inspiration-board",
  "Inspiration Board",
  "Python: Flask - JavaScript: React - PostgreSQL",
  "2023 - Ada Developers Academy",
  ["python", "flask", "javascript", "react", "postgresql", "year-2023"],
);

const finance = new Project(
  IMAGES.pic22,
  "https://www.reyaly-financial-planner.link/",
  "https://github.com/anclark686/Reyaly-financial-planner-frontend",
  "Financial Planner",
  "Ruby: Rails - JavaScript: Vue - MongoDB",
  "2023 - Ada Developers Academy: Capstone",
  ["ruby", "rails", "javascript", "vue", "mongodb", "year-2023"],
);

const pnev2 = new Project(
  IMAGES.pic23,
  "#",
  "#",
  "Project Notes Editor",
  "Python: tkinter",
  "2024 - Company: Forsta",
  ["python", "tkinter", "year-2024"],
);

const workTracker = new Project(
  IMAGES.pic25,
  "#",
  "#",
  "Jira + Gitlab Work Tracker",
  // eslint-disable-next-line
  "JavaScript: Node, Express, Vue, Electron",
  "2024 - Company: Forsta",
  ["javascript", "node", "express", "vue", "electron", "year-2024"],
);

const validator = new Project(
  IMAGES.pic24,
  "#",
  "#",
  "Project Validator",
  // eslint-disable-next-line
  "JavaScript: React - Chrome Extension",
  "2024 - Company: Forsta",
  ["javascript", "react", "chrome", "year-2024"],
);

export const personalProjects = [
  portfolio,
  recipes,
  reading,
  travel,
  instagram,
  toDo,
  blog,
  blogRuby,
  weather,
  blackBook,
  calc,
  resume,
];

export const adaProjects = [finance, inspo, adaTask, weatherNew, tech, banana];

export const workProjects = [
  pnev2,
  workTracker,
  validator,
  newGM,
  renoApp,
  gm,
  pne,
];
