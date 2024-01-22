import Carousel from "react-bootstrap/Carousel";
import IMAGES from "../images/index";

const ProjectCarousel = () => {
  return (
    <Carousel className="carousel">
      {Object.keys(IMAGES).map((image, i) => (
        <Carousel.Item>
          <img className="carousel-pic" src={IMAGES[image]} alt="project" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
