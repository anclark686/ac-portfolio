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
    "Python: Django",
    "2022"
);

const weather = new Project(
    IMAGES.pic7,
    "https://reyaly-weather.herokuapp.com/",
    "https://github.com/anclark686/weatherapp",
    "Weather App",
    "Javascript: React",
    "2022"
);

const calc = new Project(
    IMAGES.pic2,
    "https://reyaly-calculator.herokuapp.com/",
    "https://github.com/anclark686/new-calculator",
    "Calculator",
    "Javascript: React",
    "2022"
);

const toDo = new Project(
    IMAGES.pic3,
    "https://reayaly-todo.herokuapp.com/",
    "https://github.com/anclark686/django-todolist",
    "ToDo List",
    "Python: Django",
    "2022"
);

const blog = new Project(
    IMAGES.pic4,
    "https://reyaly-blog.herokuapp.com/",
    "https://github.com/anclark686/blog2",
    "Blog",
    "Python: Flask",
    "2022"
);

const pne = new Project(
    IMAGES.pic5,
    "#",
    "#",
    "Project Editor",
    "Python: tkinter",
    "2021"
);

const gm = new Project(
    IMAGES.pic6,
    "#",
    "#",
    "GridMaster",
    "VBA",
    "2022"
);


let projects = [
    portfolio,
    resume, 
    weather,
    calc,
    blog,
    toDo,
    pne,
    gm,

];

export default projects;