import Carousel from "react-bootstrap/Carousel";

const IMAGE_LINKS = [
  "https://i.ibb.co/QQhgGjH/work-tracker.png",
  "https://i.ibb.co/qN8MGvg/travel.png",
  "https://i.ibb.co/3pjY7NB/weather.png",
  "https://i.ibb.co/42VSST9/ToDo.png",
  "https://i.ibb.co/J5vYHSR/tech-fansite.jpg",
  "https://i.ibb.co/SNWxZNr/ruby-blog.png",
  "https://i.ibb.co/YDXyhsX/resume.png",
  "https://i.ibb.co/kKgdTrd/Release-notes-app.jpg",
  "https://i.ibb.co/MZ9cNT9/recipes.png",
  "https://i.ibb.co/4Rr8RbW/reading.png",
  "https://i.ibb.co/Sw9rsQL/project-validator.png",
  "https://i.ibb.co/4WLvg1V/portfolio.png",
  "https://i.ibb.co/7pnbVXV/project-notes.png",
  "https://i.ibb.co/LCLc4MR/PNE.png",
  "https://i.ibb.co/mH8D2VN/new-weather.png",
  "https://i.ibb.co/tc6W6N7/instagram.png",
  "https://i.ibb.co/4JpWXKj/inspo-board.png",
  "https://i.ibb.co/4RB6z2v/GM.png",
  "https://i.ibb.co/JBZbfcr/financial-planner.png",
  "https://i.ibb.co/7gkGLyW/electron-gridmaster.jpg",
  "https://i.ibb.co/yyXzcHx/Calc.png",
  "https://i.ibb.co/hHzs9Gg/Blog.png",
  "https://i.ibb.co/thrrGkF/black-Book.png",
  "https://i.ibb.co/J2c2hQ8/banana-fansite.jpg",
  "https://i.ibb.co/y4vPhnv/ada-task-list.png",
]

const ProjectCarousel = () => {
  return (
    <Carousel className="carousel">
      {IMAGE_LINKS.map((image, i) => (
        <Carousel.Item>
          <img className="carousel-pic" src={image} alt="project" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
