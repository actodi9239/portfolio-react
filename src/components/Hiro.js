import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import profile from '../assets/diego.jpg';

const Hiro = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 w-full h-full z-50 overflow-hidden flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-solid border-blue-600"></div>
        </div>
      ) : (
        <>
          <Navbar onSlideChange={handleSlideChange} />
          <div
            id="home"
            className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center text-white relative px-4 py-10 md:p-0 md:gap-x-24 gap-y-4 md:gap-y-10 pt-20 md:pt-28"
          >
            {/* Imagen de perfil */}
            <div className="w-full md:w-3/6 flex justify-center md:justify-end md:p-4">
              <img
                data-aos="flip-right"
                data-aos-duration="1500"
                data-aos-offset="200"
                src={profile}
                alt="profile"
                onLoad={() => setLoading(false)}
                className="rounded-full w-40 h-40 md:w-80 md:h-80 object-cover shadow-lg border-4 border-blue-600"
              />
            </div>
            {/* Carrusel */}
            <div
              className="w-full md:w-3/6 flex justify-center md:justify-start mt-2 md:mt-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <div className="w-full max-w-lg">
                <div className="space-y-4">
                  <Carousel
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    textClassName="text-lg md:text-2xl lg:text-3xl font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hiro;