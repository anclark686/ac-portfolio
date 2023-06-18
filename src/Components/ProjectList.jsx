import IMAGES from "../images/index"

class Project {
    constructor(image, link, ghLink, title, language, date) {
        this.image = image;
        this.link = link;
        this.ghLink = ghLink;
        this.title = title;
        this.language = language;
        this.date = date;
    }
}


const portfolio = new Project(
    IMAGES.pic8,
    "https://reyaly-portfolio.herokuapp.com/",
    "https://github.com/anclark686/ac-portfolio",
    "Portfolio",
    "Javascript: React",
    "2022"
);

const resume = new Project(
    IMAGES.pic1,
    "https://reyaly-resume.herokuapp.com/",
    "https://github.com/anclark686/reyaly_resume",
    "Resume",
    "Python: Django, MySQL",
    "2022"
);

const reading = new Project(
    IMAGES.pic9,
    "https://reyaly-books.herokuapp.com/",
    "https://github.com/anclark686/reyaly-books",
    "Book Tracker",
    "Javascript: React, MySQL",
    "2022"
);

const travel = new Project(
    IMAGES.pic10,
    "https://reyalytravel.web.app/",
    "https://github.com/anclark686/travel_site",
    "Travel Photos Site",
    "Javascript: React, Firebase",
    "2022"
);

const recipes = new Project(
    IMAGES.pic18,
    "https://main.d3h1w2pu1ejnii.amplifyapp.com/",
    "https://github.com/anclark686/reyaly-recipes-frontend",
    "Recipe Site",
    "Ruby: Rails, Javascript: Vue, MySQL",
    "2023"
);

const instagram = new Project(
    IMAGES.pic11,
    "https://reyalygram.web.app/",
    "https://github.com/anclark686/instagram-clone",
    "Instagram Clone",
    "Javascript: React, Firebase",
    "2022"
);

const blackBook = new Project(
    IMAGES.pic12,
    "https://reyaly-black-book.netlify.app/",
    "https://github.com/anclark686/Reyaly-Black-Book",
    "Online Black Book",
    "Javascript: React, MongoDB",
    "2022"
);

const toDo = new Project(
    IMAGES.pic3,
    "https://reayaly-todo.herokuapp.com/",
    "https://github.com/anclark686/django-todolist",
    "ToDo List",
    "Python: Django, SQLite",
    "2022"
);

const blog = new Project(
    IMAGES.pic4,
    "https://reyaly-blog.herokuapp.com/",
    "https://github.com/anclark686/blog2",
    "Blog",
    "Python: Flask, SQLite",
    "2022"
);

const blogRuby = new Project(
    IMAGES.pic17,
    "https://reyaly-blog-ruby.herokuapp.com/",
    "https://github.com/anclark686/ruby-blog",
    "Ruby Blog",
    "Ruby: Rails, MySQL",
    "2023"
);

const weatherNew = new Project(
    IMAGES.pic18,
    "https://anclark686.github.io/weather-report/",
    "https://github.com/anclark686/weather-report",
    "New Weather App",
    "Vanilla Javascript, External APIs",
    "2023"
);

const weather = new Project(
    IMAGES.pic7,
    "https://reyaly-weather.netlify.app/",
    "https://github.com/anclark686/weatherapp",
    "Weather App",
    "Javascript: React, Electron, External APIs",
    "2022"
);

const calc = new Project(
    IMAGES.pic2,
    "https://reyaly-calculator.netlify.app/",
    "https://github.com/anclark686/new-calculator",
    "Calculator",
    "Javascript: React, Electron",
    "2022"
);

const banana = new Project(
    IMAGES.pic14,
    "https://anclark686.github.io/group-fansite/",
    "https://github.com/anclark686/group-fansite",
    "Banana Fansite",
    "HTML, CSS",
    "2023"
);

const tech = new Project(
    IMAGES.pic13,
    "https://tech-fansite.netlify.app/",
    "https://github.com/anclark686/tech-fansite",
    "Tech Fansite",
    "HTML, CSS, Vanilla Javascript",
    "2023"
);

const newGM = new Project(
    IMAGES.pic15,
    "#",
    "#",
    "Updated Gridmaster*",
    "Python: Flask, Javascript: React & Electron",
    "2023"
);

const renoApp = new Project(
    IMAGES.pic16,
    "#",
    "#",
    "Release Notes App*",
    "Python: Flask, Javascript: React",
    "2023"
);

const pne = new Project(
    IMAGES.pic5,
    "#",
    "#",
    "Project Editor",
    "Python: tkinter*",
    "2021"
);

const gm = new Project(
    IMAGES.pic6,
    "#",
    "#",
    "GridMaster*",
    "VBA",
    "2022"
);


let projects = [
    portfolio,
    resume, 
    reading,
    travel,
    recipes,
    instagram,
    blackBook,
    blog,
    toDo,
    blogRuby,
    weatherNew,
    weather,
    calc,
    banana,
    tech,
    newGM,
    renoApp,
    gm,
    pne,
];

export default projects;