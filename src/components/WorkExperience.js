import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WorkCard from './WorkCard';

export default function WorkExperience() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Ajustar configuración para dispositivos pequeños
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024, // Ajustar configuración para dispositivos medianos
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div id="workExperience" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Work experience</h1>
            <p className="font-light text-gray-400">This is my work experience</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <WorkCard name="Laboratory Assistant" issued="Universidad Mayor de San Simón" desc="•	Support to the maintenance department, Server support and network maintenance, Programming instructor" />
                    <WorkCard name="Technical Department" issued="ISAPCAT" desc="Develop well-structured, maintainable code and thoroughly test your own work, Computer repair and maintenance, Graphic design" />
                    <WorkCard name="Web Developer" issued="Thermocontrol" desc="Develop well-structured, maintainable code and thoroughly test your own work, Assist the Head of IT in assessing security of web applications and action required changes arising from 3rd party pen testing of systems." />
                    <WorkCard name="Web Developer" issued="Hybrid Scripts" desc="Develop well-structured, maintainable code and thoroughly test your own work." />
                    <WorkCard name="Web Implementer" issued="Thermocontrol " desc="Parameterization of a CRM for the implementation, Server configuration for deployment, Training for the use of CRM software." />
                    <WorkCard name="Technical Support " issued="Datos & Servicios " desc="Computer repair and maintenance, Server equipment support." />
                </Slider>
            </div>
        </div>
    )
}
