import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import profile from '../assets/diegoProfile3.png';

const Hiro = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Ocultar la animación de carga después de 1 segundo
    }, 1000); // Ajustamos el tiempo de espera a 1 segundo

    return () => clearTimeout(timeout);
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-solid border-blue-600"></div>
        </div>
      ) : (
        <>
          <Navbar onSlideChange={handleSlideChange} />
          <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className="md:w-3/6 md:p-4">
              <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={profile} alt="profile" onLoad={() => setLoading(false)} />
            </div>
            <div className="md:w-3/6" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
              <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hiro;
