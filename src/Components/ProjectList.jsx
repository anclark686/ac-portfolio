import IMAGES from "../images/index"

class Project {
    constructor(image, link, title, language, date) {
        this.image = image;
        this.link = link;
        this.title = title;
        this.language = language;
        this.date = date;
    }
}


const resume = new Project(
    IMAGES.pic1,
    "https://reyaly-resume.herokuapp.com/",
    "Resume",
    "Python: Django",
    "2022"
);

const calc = new Project(
    IMAGES.pic2,
    "https://github.com/anclark686/new-calculator",
    "Calculator",
    "JavaScript: React, Electron",
    "2022"
);

const toDo = new Project(
    IMAGES.pic3,
    "https://reayaly-todo.herokuapp.com/",
    "ToDo List",
    "Python: Django",
    "2022"
);

const blog = new Project(
    IMAGES.pic4,
    "https://reyaly-blog.herokuapp.com/",
    "Blog",
    "Python: Flask",
    "2022"
);

const pne = new Project(
    IMAGES.pic5,
    "#",
    "Project Editor",
    "Python: tkinter",
    "2021"
);

const gm = new Project(
    IMAGES.pic6,
    "#",
    "GridMaster",
    "VBA",
    "2022"
);


let projects = [
    resume, 
    calc,
    blog,
    toDo,
    pne,
    gm,

];

export default projects;