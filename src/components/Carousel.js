import About from './About.js';
import Skills from './Skills.js';
import WorkExperience from './WorkExperience.js';
import Certs from './Certs.js';

const Carousel = ({ currentSlide, setCurrentSlide }) => {
  const slides = [<About />, <Skills />, <WorkExperience />, <Certs />];

  return (
    <div className="carousel">
      <div className="transition-opacity duration-500 ease-in-out">
        {slides[currentSlide]}
      </div>
    </div>
  );
};

export default Carousel;
