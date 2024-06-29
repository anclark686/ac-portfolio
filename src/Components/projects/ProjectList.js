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
  "https://i.ibb.co/YDXyhsX/resume.png",
  "https://reyaly-resume.herokuapp.com/",
  "https://github.com/anclark686/reyaly_resume",
  "Resume",
  "Python: Django (Templates) - MySQL",
  "Ongoing - Personal",
  ["python", "django", "mysql", "templates", "django-templates", "year-2022"],
);

const calc = new Project(
  "https://i.ibb.co/yyXzcHx/Calc.png",
  "https://reyaly-calculator.netlify.app/",
  "https://github.com/anclark686/new-calculator",
  "Calculator",
  // eslint-disable-next-line
  "JavaScript: React, Electron",
  "2022 - Personal",
  ["javascript", "react", "electron", "year-2022"],
);

const toDo = new Project(
  "https://i.ibb.co/42VSST9/ToDo.png",
  "https://reyaly-todo-225a1c591959.herokuapp.com/",
  "https://github.com/anclark686/django-todolist",
  "ToDo List",
  "Python: Django (Templates) - SQLite",
  "2022 - Personal",
  ["python", "django", "templates", "django-templates", "sqlite", "year-2022"],
);

const blog = new Project(
  "https://i.ibb.co/hHzs9Gg/Blog.png",
  "https://reyaly-blog.herokuapp.com/",
  "https://github.com/anclark686/blog2",
  "Python Blog",
  "Python: Flask (Templates) - SQLite",
  "2022 - Personal",
  ["python", "flask", "templates", "flask-templates", "sqlite", "year-2022"],
);

const pne = new Project(
  "https://i.ibb.co/LCLc4MR/PNE.png",
  "#",
  "#",
  "Project Editor",
  "Python: tkinter",
  "2021 - Company: Forsta",
  ["python", "tkinter", "year-2021"],
);

const gm = new Project(
  "https://i.ibb.co/4RB6z2v/GM.png",
  "#",
  "#",
  "GridMaster",
  "VBA",
  "2022 - Company: Forsta",
  ["vba", "year-2022"],
);

const weather = new Project(
  "https://i.ibb.co/3pjY7NB/weather.png",
  "https://reyaly-weather.netlify.app/",
  "https://github.com/anclark686/weatherapp",
  "Weather App",
  // eslint-disable-next-line
  "JavaScript: React, Electron - External APIs",
  "2022 - Personal",
  ["javascript", "react", "electron", "year-2022"],
);

const portfolio = new Project(
  "https://i.ibb.co/4WLvg1V/portfolio.png",
  "https://reyaly-portfolio.herokuapp.com/",
  "https://github.com/anclark686/ac-portfolio",
  "Portfolio",
  // eslint-disable-next-line
  "JavaScript: React",
  "Ongoing - Personal",
  ["javascript", "react", "year-2022", "year-2023", "year-2024"],
);

const reading = new Project(
  "https://i.ibb.co/4Rr8RbW/reading.png",
  "https://reyaly-books.herokuapp.com/",
  "https://github.com/anclark686/reyaly-books",
  "Book Tracker",
  // eslint-disable-next-line
  "JavaScript: Node, Express, React - MySQL",
  "2022 - Personal",
  ["javascript", "react", "node", "express", "mysql", "year-2022"],
);

const travel = new Project(
  "https://i.ibb.co/qN8MGvg/travel.png",
  "https://reyalytravel.firebaseapp.com/",
  "https://github.com/anclark686/travel_site",
  "Travel Photos Site",
  // eslint-disable-next-line
  "JavaScript: React - Firestore",
  "2022 - Personal",
  ["javascript", "react", "firestore", "year-2022"],
);

const instagram = new Project(
  "https://i.ibb.co/tc6W6N7/instagram.png",
  "https://reyalygram.web.app/",
  "https://github.com/anclark686/instagram-clone",
  "Instagram Clone",
  // eslint-disable-next-line
  "JavaScript: React - Firestore",
  "2022 - Personal",
  ["javascript", "react", "firestore", "year-2022"],
);

const blackBook = new Project(
  "https://i.ibb.co/thrrGkF/black-Book.png",
  "https://reyaly-black-book.netlify.app/",
  "https://github.com/anclark686/Reyaly-Black-Book",
  "Online Black Book",
  // eslint-disable-next-line
  "JavaScript: Node, Express, React - MongoDB",
  "2022 - Personal",
  ["javascript", "node", "express", "react", "mongodb", "year-2022"],
);

const tech = new Project(
  "https://i.ibb.co/J5vYHSR/tech-fansite.jpg",
  "https://tech-fansite.netlify.app/",
  "https://github.com/anclark686/tech-fansite",
  "Tech Fansite",
  "HTML - CSS - Vanilla JavaScript",
  "2023 - Ada Developers Academy",
  ["javascript", "html", "css", "year-2023"],
);

const banana = new Project(
  "https://i.ibb.co/J2c2hQ8/banana-fansite.jpg",
  "https://anclark686.github.io/group-fansite/",
  "https://github.com/anclark686/group-fansite",
  "Banana Fansite",
  "HTML - CSS",
  "2023 - Ada Developers Academy",
  ["html", "css", "year-2023"],
);

const newGM = new Project(
  "https://i.ibb.co/7gkGLyW/electron-gridmaster.jpg",
  "#",
  "#",
  "Updated Gridmaster",
  "Python: Flask - JavaScript: React, Electron",
  "2023 - Company: Forsta",
  ["python", "flask", "javascript", "react", "electron", "year-2023"],
);

const renoApp = new Project(
  "https://i.ibb.co/kKgdTrd/Release-notes-app.jpg",
  "#",
  "#",
  "Release Notes App",
  "Python: Flask - JavaScript: React",
  "2023 - Company: Forsta",
  ["python", "flask", "javascript", "react", "year-2023"],
);

const blogRuby = new Project(
  "https://i.ibb.co/SNWxZNr/ruby-blog.png",
  "https://reyaly-blog-ruby.herokuapp.com/",
  "https://github.com/anclark686/ruby-blog",
  "Ruby Blog",
  "Ruby: Rails (Templates) - MySQL",
  "2023 - Personal",
  ["ruby", "rails", "templates", "rails-templates", "mysql", "year-2023"],
);

const weatherNew = new Project(
  "https://i.ibb.co/mH8D2VN/new-weather.png",
  "https://anclark686.github.io/weather-report/",
  "https://github.com/anclark686/weather-report",
  "New Weather App",
  "Vanilla JavaScript - External APIs",
  "2023 - Ada Developers Academy",
  ["javascript", "html", "css", "year-2023"],
);

const recipes = new Project(
  "https://i.ibb.co/MZ9cNT9/recipes.png",
  "https://main.d3h1w2pu1ejnii.amplifyapp.com/",
  "https://github.com/anclark686/reyaly-recipes-frontend",
  "Recipe Site",
  "Ruby: Rails - JavaScript: Vue - MySQL",
  "2023 - Personal",
  ["ruby", "rails", "javascript", "vue", "mysql", "year-2023"],
);

const adaTask = new Project(
  "https://i.ibb.co/y4vPhnv/ada-task-list.png",
  "https://task-list-anc.onrender.com",
  "https://github.com/anclark686/task-list-front-end",
  "Ada Task List",
  "Python: Flask - JavaScript: React - PostgreSQL",
  "2023 - Ada Developers Academy",
  ["python", "flask", "javascript", "react", "postgresql", "year-2023"],
);

const inspo = new Project(
  "https://i.ibb.co/4JpWXKj/inspo-board.png",
  "https://inspiration-board-anc.onrender.com",
  "https://github.com/anclark686/front-end-inspiration-board",
  "Inspiration Board",
  "Python: Flask - JavaScript: React - PostgreSQL",
  "2023 - Ada Developers Academy",
  ["python", "flask", "javascript", "react", "postgresql", "year-2023"],
);

const finance = new Project(
  "https://i.ibb.co/JBZbfcr/financial-planner.png",
  "https://www.reyaly-financial-planner.link/",
  "https://github.com/anclark686/Reyaly-financial-planner-frontend",
  "Financial Planner",
  "Ruby: Rails - JavaScript: Vue - MongoDB",
  "2023 - Ada Developers Academy: Capstone",
  ["ruby", "rails", "javascript", "vue", "mongodb", "year-2023"],
);

const pnev2 = new Project(
  "https://i.ibb.co/7pnbVXV/project-notes.png",
  "#",
  "#",
  "Project Notes Editor",
  "Python: tkinter",
  "2024 - Company: Forsta",
  ["python", "tkinter", "year-2024"],
);

const workTracker = new Project(
  "https://i.ibb.co/QQhgGjH/work-tracker.png",
  "#",
  "#",
  "Jira + Gitlab Work Tracker",
  // eslint-disable-next-line
  "JavaScript: Node, Express, Vue, Electron",
  "2024 - Company: Forsta",
  ["javascript", "node", "express", "vue", "electron", "year-2024"],
);

const validator = new Project(
  "https://i.ibb.co/Sw9rsQL/project-validator.png",
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
  resume,
  reading,
  travel,
  recipes,
  blackBook,
];

export const beginnerProjects = [
  instagram,
  toDo,
  blog,
  blogRuby,
  weather,
  calc,
];

export const adaProjects = [finance, inspo];

export const adaBeginnerProjects = [adaTask, weatherNew, tech, banana];

export const workProjects = [
  pnev2,
  workTracker,
  validator,
  newGM,
  renoApp,
  gm,
  pne,
];
