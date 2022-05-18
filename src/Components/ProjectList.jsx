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

const thisProject = new Project(
    IMAGES.pic1,
    "https://www.google.com",
    "This project",
    "JavaScript: React",
    "Today"
);

const resume = new Project(
    IMAGES.pic3,
    "https://www.bing.com",
    "Resume",
    "Python: Django",
    "Tomorrow"
);

const thisProject3 = new Project(
    IMAGES.pic4,
    "www.google.com",
    "This project",
    "JavaScript: React",
    "Today"
);

const thisProject4 = new Project(
    IMAGES.pic5,
    "www.google.com",
    "This project",
    "JavaScript: React",
    "Today"
);

const thisProject5 = new Project(
    IMAGES.pic6,
    "www.google.com",
    "This project",
    "JavaScript: React",
    "Today"
);

const thisProject2 = new Project(
    IMAGES.pic7,
    "www.google.com",
    "This project",
    "JavaScript: React",
    "Today"
);

const thisProject6 = new Project(
    IMAGES.pic8,
    "www.google.com",
    "This project",
    "JavaScript: React",
    "Today"
);

const thisProject7 = new Project(
    IMAGES.pic2,
    "www.google.com",
    "This project",
    "JavaScript: React",
    "Today"
);

let projects = [
    thisProject, 
    resume,
    thisProject2,
    thisProject3,
    thisProject4,
    thisProject5,
    thisProject6,
    thisProject7,

];

export default projects;