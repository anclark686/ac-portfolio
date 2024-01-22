import Carousel from "react-bootstrap/Carousel";
import techStack from "./TechStack";

const TechCarousel = () => {
  return (
    <Carousel className="carousel">
      {techStack.map((tech, i) => (
        <Carousel.Item key={i} className="icon-carousel-container">

          <i className={`${tech.iconClass} carousel-icon`}></i>
          <p className="carousel-text">{tech.description}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TechCarousel;
